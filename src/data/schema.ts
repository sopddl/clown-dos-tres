// Données structurées schema.org (JSON-LD) lues par Google : collectif, lieu et événements.
import { site } from './site';
import type { Evenement } from './evenements';
import francoisHublot from '../assets/equipe/francois-hublot.jpg';
import alainHublot from '../assets/equipe/alain-hublot.jpg';

const SITE_URL = 'https://clowndostres.com';

export const lieu = {
	'@type': 'Place',
	name: site.peniche.nom,
	address: {
		'@type': 'PostalAddress',
		streetAddress: '3 quai de l’Oise',
		postalCode: '75019',
		addressLocality: 'Paris',
		addressCountry: 'FR',
	},
	hasMap: site.peniche.mapsUrl,
	telephone: '+33618950262',
	sameAs: [site.peniche.privatiserUrl],
};

const francois = {
	'@type': 'Person',
	'@id': `${SITE_URL}/collectif#francois-duregne`,
	name: 'François Durègne',
	alternateName: 'Pancho Durango',
	jobTitle: 'Clown, metteur en scène',
	image: new URL(francoisHublot.src, SITE_URL).href,
	url: `${SITE_URL}/collectif`,
};

const alain = {
	'@type': 'Person',
	'@id': `${SITE_URL}/collectif#alain-carbonnel`,
	name: 'Alain Carbonnel',
	jobTitle: 'Comédien, clown, musicien',
	image: new URL(alainHublot.src, SITE_URL).href,
	url: `${SITE_URL}/collectif`,
};

export const collectif = {
	'@type': 'PerformingGroup',
	'@id': `${SITE_URL}/#collectif`,
	name: site.nom,
	url: SITE_URL,
	description: site.description,
	logo: `${SITE_URL}/favicon.svg`,
	image: `${SITE_URL}/og-image.jpg`,
	email: site.contact.email,
	location: lieu,
	founder: { '@id': francois['@id'] },
	member: [francois, alain],
	knowsAbout: ['clown', 'clown contemporain', 'cabaret clown', 'scène ouverte', 'théâtre'],
};

export const siteWeb = {
	'@type': 'WebSite',
	'@id': `${SITE_URL}/#site`,
	name: `${site.accroche} · ${site.nom}`,
	url: SITE_URL,
	inLanguage: 'fr-FR',
	publisher: { '@id': `${SITE_URL}/#collectif` },
};

// Décalage horaire de Paris à une date donnée (+02:00 en été, +01:00 en hiver).
function decalageParis(jour: string, heure: string): string {
	const nom = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Paris', timeZoneName: 'longOffset' })
		.formatToParts(new Date(`${jour}T${heure}:00Z`))
		.find((p) => p.type === 'timeZoneName')?.value;
	return nom?.replace('GMT', '') || '+01:00';
}

function prixEnEuros(prix: string): string | undefined {
	return prix.match(/\d+(?:[.,]\d+)?/)?.[0].replace(',', '.');
}

export function evenementSchema(e: Evenement) {
	const startDate = e.debut ? `${e.jour}T${e.debut}:00${decalageParis(e.jour, e.debut)}` : e.jour;
	const endDate = e.fin ? `${e.jour}T${e.fin}:00${decalageParis(e.jour, e.fin)}` : undefined;
	const montant = e.prix ? prixEnEuros(e.prix) : undefined;
	return {
		'@type': 'Event',
		name: e.titre,
		startDate,
		...(endDate && { endDate }),
		description: e.description ?? `${e.titre} — ${site.accroche} sur la ${site.peniche.nom}, Paris 19e.`,
		eventStatus: 'https://schema.org/EventScheduled',
		eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
		location: lieu,
		image: e.image ? new URL(e.image.src, SITE_URL).href : `${SITE_URL}/og-image.jpg`,
		organizer: { '@id': `${SITE_URL}/#collectif`, '@type': 'PerformingGroup', name: site.nom, url: SITE_URL },
		...(e.type !== 'atelier' && {
			performer: {
				'@type': 'PerformingGroup',
				// Compagnie invitée si précisée, sinon le collectif (Clown à l'usine est devenu Clown, dos, tres).
				name: e.compagnie ?? site.nom,
			},
		}),
		...(montant && {
			offers: {
				'@type': 'Offer',
				price: montant,
				priceCurrency: 'EUR',
				availability: 'https://schema.org/InStock',
				url: `${SITE_URL}/agenda`,
			},
		}),
	};
}

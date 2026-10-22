// Pour ajouter une actualité : ajoutez une entrée en tête du tableau (la plus récente d'abord).
// Image : déposez-la dans src/assets/actus/ et importez-la ci-dessous.
import type { ImageMetadata } from 'astro';
import dgnair from '../assets/actus/dgnair-francois-duregne.jpg';
import stageClownToujours from '../assets/actus/stage-clown-toujours-francois.jpg';

export type Actualite = {
	jour: string; // AAAA-MM-JJ, sert au tri et à Google
	date: string; // affichée telle quelle
	titre: string;
	source?: string; // média, ex. « DGN'Air »
	texte: string;
	lien?: string;
	lienLabel?: string;
	image?: ImageMetadata;
	imageAlt?: string;
	id?: string; // ancre de la carte (#id), utilisée par le bandeau « À la une »
	aLaUne?: { titre: string; quand: string; jusquAu: string }; // bandeau sur l'accueil jusqu'à la date AAAA-MM-JJ
	evenement?: {
		// pour Google : stage, spectacle… hors péniche
		debut: string; // AAAA-MM-JJ
		fin: string;
		lieu: string;
		adresse: string;
		ville: string;
		codePostal: string;
		prix?: string; // en euros, ex. '400'
	};
};

export const actualites: Actualite[] = [
	{
		id: 'stage-clown-toujours',
		jour: '2026-10-22',
		date: 'Stage · week-ends des 14-15 et 21-22 novembre 2026',
		titre: 'Stage « Clown toujours » avec François Durègne au Théâtre de l’Opprimé',
		source: 'Théâtre de l’Opprimé, Paris 12e',
		texte:
			'Une recherche individuelle et collective du clown, fondée sur la confiance et le plaisir d’être en scène : jeux, exercices scéniques et improvisations, à la découverte de l’âme du clown et de la couleur intime propre à chacun. Deux week-ends, de 9h à 15h (20 heures au total), au 78-80 rue du Charolais. Tarifs : 400 €, 300 € en tarif réduit (étudiants, France Travail), 1 080 € en formation professionnelle. Inscriptions auprès du théâtre : forum@theatredelopprime.com, 01 43 45 81 20.',
		lien: 'https://www.theatredelopprime.com/stages-invites-26-27/clown-toujours',
		lienLabel: 'Infos et inscription',
		image: stageClownToujours,
		imageAlt: 'François Durègne, qui anime le stage Clown toujours',
		aLaUne: {
			titre: 'Stage « Clown toujours » avec François Durègne',
			quand: '14-15 et 21-22 novembre · Théâtre de l’Opprimé, Paris 12e',
			jusquAu: '2026-11-22',
		},
		evenement: {
			debut: '2026-11-14',
			fin: '2026-11-22',
			lieu: 'Théâtre de l’Opprimé',
			adresse: '78-80 rue du Charolais',
			ville: 'Paris',
			codePostal: '75012',
			prix: '400',
		},
	},
	{
		jour: '2026-10-08',
		date: 'Jeudi 8 octobre 2026',
		titre: 'François Durègne invité des « Charognards de l’info » sur DGN’Air',
		source: 'DGN’Air (webradio)',
		texte:
			'Emeric Degui et San Drap recevaient François Durègne, acteur, clown, metteur en scène et dramaturge, en direct dans leur émission « Les charognards de l’info ». Au programme : la toute première Scène ouverte Clown du collectif Clown, dos, tres, le 14 octobre sur la Péniche Grande Fantaisie.',
		lien: 'https://www.facebook.com/DGNAiir/posts/1789538569839498/',
		lienLabel: 'Voir l’émission sur Facebook',
		image: dgnair,
		imageAlt: 'Visuel de l’émission : François Durègne en veste noire, et en clown au nez rouge',
	},
];

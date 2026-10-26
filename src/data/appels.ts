// Appels à candidature pour numéros de clown (scènes ouvertes, cabarets, festivals).
// Les données vivent dans appels.json (éditable à la main) ; ce fichier les type et les trie.
import donnees from './appels.json';

export type Appel = {
	nom: string;
	type: string;
	organisateur: string | null;
	ville: string;
	region: string | null;
	pays: string;
	lieu: string | null;
	date_limite: string | null; // AAAA-MM-JJ
	dates_evenement: string | null;
	recurrence: string | null;
	edition: string | null;
	statut: 'ouvert' | 'récurrent/à venir' | 'clos';
	duree_numero: string | null;
	criteres: string | null;
	remuneration: string | null;
	frais_inscription: string | null;
	contact: string | null;
	lien: string;
	sources: string[];
	fiabilite: 'haute' | 'moyenne' | 'basse';
	notes: string | null;
};

// Date de la dernière vérification des appels (à mettre à jour à chaque passe).
export const misAJour = '2026-10-26';

export type Zone = 'paris' | 'france' | 'europe';

export function zone(a: Appel): Zone {
	if (a.pays !== 'France') return 'europe';
	return a.region === 'Île-de-France' || /paris/i.test(a.ville) ? 'paris' : 'france';
}

const ordreStatut = { ouvert: 0, 'récurrent/à venir': 1, clos: 2 } as const;

// Pour un appel récurrent déjà passé, estime la prochaine échéance : même jour, l'année suivante.
function prochaineEcheance(a: Appel): string {
	if (!a.date_limite) return '9999';
	let [annee, reste] = [Number(a.date_limite.slice(0, 4)), a.date_limite.slice(4)];
	while (`${annee}${reste}` < misAJour) annee++;
	return `${annee}${reste}`;
}

// Ouverts d'abord (date limite la plus proche en tête), puis récurrents par prochaine échéance estimée.
export const appels: Appel[] = (donnees as Appel[])
	.filter((a) => a.statut !== 'clos')
	.sort(
		(a, b) =>
			ordreStatut[a.statut] - ordreStatut[b.statut] ||
			prochaineEcheance(a).localeCompare(prochaineEcheance(b)) ||
			a.nom.localeCompare(b.nom, 'fr'),
	);

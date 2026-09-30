// Pour ajouter ou modifier une date : éditez simplement ce tableau.
// "type" contrôle le badge affiché : scene-ouverte | clownologie | cabaret | spectacle | atelier | autre

export type Evenement = {
	date: string; // format libre affiché tel quel, ex. "Mercredi 14 octobre 2026"
	jour: string; // même date au format AAAA-MM-JJ, lu par Google (données structurées)
	debut?: string; // heure de début au format HH:MM, lue par Google
	heure?: string;
	titre: string;
	description?: string;
	lieu?: string;
	prix?: string;
	type: 'scene-ouverte' | 'clownologie' | 'cabaret' | 'spectacle' | 'atelier' | 'autre';
	lien?: string;
	compagnie?: string; // troupe invitée, affichée « Par … » et lue par Google
};

export const evenements: Evenement[] = [
	{
		date: 'Mercredi 30 septembre 2026',
		jour: '2026-09-30',
		titre: 'Cours de salsa pour clowns',
		type: 'atelier',
		lieu: 'Péniche Grande Fantaisie',
	},
	{
		date: 'Mercredi 14 octobre 2026',
		jour: '2026-10-14',
		debut: '20:00',
		heure: '19h30 (ouverture) — passages à partir de 20h00',
		titre: 'Scène Ouverte Clown — 1ère édition',
		description:
			"Le collectif Clown, dos, tres ouvre sa carte blanche aux clowns : un plateau nu, sans filet, pour une soirée de numéros et une rencontre de clowns.",
		lieu: 'Péniche Grande Fantaisie, 3 quai de l’Oise, 75019 Paris',
		prix: '8 €',
		type: 'scene-ouverte',
	},
	{
		date: 'Mercredi 11 novembre 2026',
		jour: '2026-11-11',
		titre: 'Clownologie',
		description: 'Spectacle cabaret par le collectif Clown à l’Usine.',
		lieu: 'Péniche Grande Fantaisie',
		type: 'clownologie',
	},
	{
		date: 'Mercredi 18 novembre 2026',
		jour: '2026-11-18',
		titre: 'Shaker',
		description:
			'Un condensé des pièces de Shakespeare servi sous forme de « cocktails shakespeariens ». Vous prendrez bien un zest de Shakespeare ?',
		compagnie: 'Compagnie Les chants égarés',
		lieu: 'Péniche Grande Fantaisie',
		type: 'spectacle',
	},
	{
		date: 'Mercredi 25 novembre 2026',
		jour: '2026-11-25',
		titre: 'Scène Ouverte Clown — 2nde édition',
		lieu: 'Péniche Grande Fantaisie',
		type: 'scene-ouverte',
	},
];

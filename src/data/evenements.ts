// Pour ajouter ou modifier une date : éditez simplement ce tableau.
// "type" contrôle le badge affiché : scene-ouverte | clownologie | cabaret | spectacle | atelier | autre

import type { ImageMetadata } from 'astro';
import salsaPiquante from '../assets/agenda/salsa-piquante.jpg';
import clownologieNovembre from '../assets/agenda/clownologie-11-nov-2026.jpg';
import shakerTroupe from '../assets/agenda/shaker-troupe.jpg';

export type Evenement = {
	date: string; // format libre affiché tel quel, ex. "Mercredi 14 octobre 2026"
	jour: string; // même date au format AAAA-MM-JJ, lu par Google (données structurées)
	debut?: string; // heure de début au format HH:MM, lue par Google
	fin?: string; // heure de fin au format HH:MM, lue par Google
	heure?: string;
	titre: string;
	description?: string;
	lieu?: string;
	prix?: string;
	type: 'scene-ouverte' | 'clownologie' | 'cabaret' | 'spectacle' | 'atelier' | 'autre';
	lien?: string;
	compagnie?: string; // troupe invitée, affichée « Par … » et lue par Google
	image?: ImageMetadata; // affiche ou visuel, affiché en tête de la carte (fichier dans src/assets/agenda/)
	imageAlt?: string; // description du visuel (par défaut « Affiche : titre »)
};

export const evenements: Evenement[] = [
	{
		date: 'Mercredi 30 septembre 2026',
		jour: '2026-09-30',
		debut: '19:00',
		fin: '21:00',
		heure: 'De 19h à 21h',
		titre: 'Salsa piquante à la péniche Grande Fantaisie',
		description:
			'Cours de salsa pour clown. C’est-à-dire pour tous, sans exception : ceux qui savent, ceux qui savent pas, ceux qui n’ont jamais essayé, ceux qui n’ont pas le sens du rythme, ceux qui veulent connecter les neurones avec les pieds\u00a0! Et vous aussi, les amoureux de la salsa, qui l’ont dans la peau. Attention, professeurs de salsa mexicains\u00a0!!!',
		type: 'atelier',
		lieu: 'Péniche Grande Fantaisie',
		image: salsaPiquante,
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
		debut: '20:30',
		heure: '20h30',
		titre: 'Clownologie',
		description: 'Cabaret clown par le collectif Clown, dos, tres.',
		lieu: 'Péniche Grande Fantaisie',
		prix: '10 €',
		image: clownologieNovembre,
		type: 'clownologie',
	},
	{
		date: 'Mercredi 18 novembre 2026',
		jour: '2026-11-18',
		titre: 'Shaker',
		description:
			'Soif de Shakespeare\u00a0? Deux acteurs et deux actrices sont là pour vous servir un cocktail condensé de pièces : tragédie, comédie, pièce historique et romance, choisies ensemble, avec le public, au début de chaque représentation. À siroter dans la fête, avec la révérence et l’irrévérence que l’on doit au vieux Barde. Venez et revenez découvrir et redécouvrir Shakespeare. Et en plus, c’est drôle\u00a0!',
		image: shakerTroupe,
		imageAlt: 'La troupe de Shaker en costumes de scène, réunie pour une photo souvenir',
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

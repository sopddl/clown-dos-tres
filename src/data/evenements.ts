// Pour ajouter ou modifier une date : éditez simplement ce tableau.
// "type" contrôle le badge affiché : scene-ouverte | clownologie | cabaret | spectacle | atelier | autre

import type { ImageMetadata } from 'astro';
import salsaPiquante from '../assets/agenda/salsa-piquante.jpg';
import clownologieDecembre from '../assets/agenda/clownologie-16-dec-2026.jpg';
import merAffiche from '../assets/agenda/toute-la-mer-du-monde-affiche.jpg';
import merPhoto from '../assets/agenda/toute-la-mer-du-monde-alexis-delmastro.jpg';
import shakerAffiche from '../assets/agenda/shaker-18-nov-2026.jpg';
import sceneOuverteOctobre from '../assets/agenda/scene-ouverte-14-oct-2026.jpg';
import sceneOuverteNovembre from '../assets/agenda/scene-ouverte-25-nov-2026.jpg';
import flyerClownToujours from '../assets/agenda/flyer-stage-clown-toujours.jpg';

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
	type: 'scene-ouverte' | 'clownologie' | 'cabaret' | 'spectacle' | 'concert' | 'atelier' | 'stage' | 'autre';
	lien?: string;
	compagnie?: string; // troupe invitée, affichée « Par … » et lue par Google
	image?: ImageMetadata; // affiche ou visuel, affiché en tête de la carte (fichier dans src/assets/agenda/)
	imageAlt?: string; // description du visuel (par défaut « Affiche : titre »)
	lieuExterieur?: { nom: string; rue: string; codePostal: string; ville: string }; // événement hors péniche (lu par Google)
	jourFin?: string; // AAAA-MM-JJ, événement sur plusieurs jours
	photo?: ImageMetadata; // photo complémentaire, affichée sous le texte
	photoAlt?: string;
	reservation?: boolean; // affiche un bouton « Réserver » (mail à contact@)
	reporte?: string; // date reportée/annulée : texte affiché à la place de l'heure, ex. « Reporté en décembre »
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
		image: sceneOuverteOctobre,
	},
	{
		date: 'Mercredi 16 décembre 2026',
		jour: '2026-12-16',
		debut: '20:30',
		heure: '20h30',
		titre: 'Clownologie',
		description:
			'Imaginez une science qui révolutionne définitivement notre façon de percevoir les relations interhumaines et notre rapport au monde. Une certitude : le 21ᵉ siècle sera clownesque ou ne sera pas.\n\nCabaret clown par le collectif Clown, dos, tres.',
		lieu: 'Péniche Grande Fantaisie, 3 quai de l’Oise, 75019 Paris',
		prix: '12 €',
		image: clownologieDecembre,
		imageAlt: 'Affiche Clownologie, cabaret clown du collectif Clown, dos, tres, mercredi 16 décembre 2026 à 20h30, Péniche Grande Fantaisie, entrée 12 euros',
		type: 'clownologie',
		reservation: true,
	},
	{
		date: 'Mercredi 2 décembre 2026',
		jour: '2026-12-02',
		debut: '20:30',
		heure: '20h30 · durée 65 min',
		titre: 'Toute la mer du monde',
		description: [
			'Ce qu’en dit la presse : « On arrive avec nos certitudes. On arrive en pensant savoir ce qu’est le son d’une guitare et l’on se trompe. On arrive en pensant savoir ce qu’est le rock et on se trompe encore. On ne sait pas, quand il arrive, que l’on va pouvoir en rire ou en pleurer, ou les deux en même temps. On ne sait pas quand ça commence ou si c’est déjà fini. Un concert sommaire où toutes nos certitudes sont balayées dès la première chanson. »',
			'Guitare et chant : Alexis Delmastro · Musique : France Cartigny · Régie : Sabine Decarpentrie · Coach vocal : Muriel Benazeraf · Auteur : Alex(is).',
			'Avec le soutien du Dakiling (13), de la Ville de Gaillac (81) et de La Palène (16). Plus d’infos : alexis-delmastro.com',
		].join('\n\n'),
		lieu: 'Péniche Grande Fantaisie, 3 quai de l’Oise, 75019 Paris',
		compagnie: 'Alexis Delmastro',
		type: 'concert',
		image: merAffiche,
		imageAlt: 'Affiche du concert Toute la mer du monde : Alexis Delmastro à la guitare, mercredi 2 décembre 2026 à 20h30, Péniche Grande Fantaisie',
		photo: merPhoto,
		photoAlt: 'Alexis Delmastro, guitare sur l’épaule, au bord d’un champ : visuel du spectacle Toute la mer du monde',
		reservation: true,
	},
	{
		date: 'Samedis et dimanches 14-15 et 21-22 novembre 2026',
		jour: '2026-11-14',
		jourFin: '2026-11-22',
		debut: '09:00',
		heure: 'De 9h à 15h · 20 heures sur 4 jours',
		titre: 'Stage « Clown toujours » avec François Durègne',
		description:
			'Pourquoi chercher son clown s’il est déjà là\u00a0? Jeux, exercices scéniques et improvisations pour laisser naître puis développer son clown. Sans prérequis. Paiement en 2 fois possible.',
		lieu: 'Théâtre de l’Opprimé, 78-80 rue du Charolais, Paris 12e',
		lieuExterieur: { nom: 'Théâtre de l’Opprimé', rue: '78-80 rue du Charolais', codePostal: '75012', ville: 'Paris' },
		prix: '400 € (réduit 300 €)',
		type: 'stage',
		image: flyerClownToujours,
		imageAlt: 'Flyer du stage Clown toujours, dirigé par François Durègne, Théâtre de l’Opprimé, novembre 2026',
		lien: '/actualites/#stage-clown-toujours',
	},
	{
		date: 'Mercredi 18 novembre 2026',
		jour: '2026-11-18',
		debut: '20:00',
		heure: '20h',
		titre: 'Le Shaker',
		description:
			'Soif de Shakespeare\u00a0? Deux acteurs et deux actrices sont là pour vous servir un cocktail condensé de pièces : tragédie, comédie, pièce historique et romance, choisies ensemble, avec le public, au début de chaque représentation. À siroter dans la fête, avec la révérence et l’irrévérence que l’on doit au vieux Barde. Venez et revenez découvrir et redécouvrir Shakespeare. Et en plus, c’est drôle\u00a0!',
		image: shakerAffiche,
		imageAlt: 'Affiche du Shaker, spectacle d’improvisation de la Cie Les Chants égarés, mercredi 18 novembre 2026 à 20h, Péniche Grande Fantaisie',
		compagnie: 'Compagnie Les Chants égarés',
		lieu: 'Péniche Grande Fantaisie, 3 quai de l’Oise, 75019 Paris',
		prix: '12 € (réduit 8 €)',
		reservation: true,
		type: 'spectacle',
	},
	{
		date: 'Mercredi 25 novembre 2026',
		jour: '2026-11-25',
		debut: '20:00',
		heure: '20h',
		titre: 'Scène Ouverte Clown — 2de édition',
		description:
			'Une soirée de numéros, une rencontre de clowns\u00a0! Le collectif Clown, dos, tres ouvre de nouveau son plateau aux clowns.',
		lieu: 'Péniche Grande Fantaisie, 3 quai de l’Oise, 75019 Paris',
		prix: '8 €',
		type: 'scene-ouverte',
		image: sceneOuverteNovembre,
		reservation: true,
	},
];

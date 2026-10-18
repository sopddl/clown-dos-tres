// Pour ajouter une actualité : ajoutez une entrée en tête du tableau (la plus récente d'abord).
// Image : déposez-la dans src/assets/actus/ et importez-la ci-dessous.
import type { ImageMetadata } from 'astro';
import dgnair from '../assets/actus/dgnair-francois-duregne.jpg';

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
};

export const actualites: Actualite[] = [
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

// Galeries d'événements (une par scène ouverte…), affichées en onglets sur la page Galerie.
// Pour en ajouter une : déposez les photos (≤ 2560 px, dans l'ordre chronologique : -01, -02…)
// dans src/assets/galeries/<slug>/, puis ajoutez une entrée ici, la plus récente en premier.
export type GalerieEvenement = {
	slug: string; // nom du dossier dans src/assets/galeries/ et adresse /galerie/<slug>/
	titre: string;
	onglet: string; // libellé court de l'onglet
	jour: string; // AAAA-MM-JJ
	photographe: string;
	lieu: string;
	telechargement: boolean; // les artistes peuvent télécharger les photos
};

export const galeries: GalerieEvenement[] = [
	{
		slug: 'scene-ouverte-2026-10-14',
		titre: 'Scène ouverte du 14 octobre 2026, première édition',
		onglet: 'Scène ouverte · 14 oct. 2026',
		jour: '2026-10-14',
		photographe: 'Alain Ramirez',
		lieu: 'Péniche Grande Fantaisie',
		telechargement: true,
	},
];

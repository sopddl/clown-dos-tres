// Photos de la galerie principale : description (texte alternatif lu par Google) et rubrique.
// En ajoutant une photo dans src/assets/photos/, ajoutez sa ligne ici (sinon : rubrique Clownologie 2026, description générique).
// Rubriques fixées par Pancho le 28/10/2026.

export type Rubrique = 'clownologie' | 'migractions' | 'usine' | 'kbarre' | 'atelier';

// Ordre d'affichage : « En scène » du plus récent au plus ancien, puis « Ateliers ».
export const rubriques: { id: Rubrique; partie: 'En scène' | 'Ateliers'; titre: string }[] = [
	{ id: 'clownologie', partie: 'En scène', titre: 'Clownologie, 2026' },
	{ id: 'migractions', partie: 'En scène', titre: 'Festival MigrActions, juillet 2024 · Théâtre de l’Opprimé' },
	{ id: 'usine', partie: 'En scène', titre: 'Clown à l’usine, 2024' },
	{ id: 'kbarre', partie: 'En scène', titre: 'K barré, Café de Paris, mai 2024' },
	{ id: 'atelier', partie: 'Ateliers', titre: 'Atelier à l’usine Chapal' },
];

export const photosGalerie: Record<string, { alt: string; rubrique: Rubrique }> = {
	'288c4f67-2d96-4ebe-b281-b1bb3e92751b-1.jpg': { rubrique: 'atelier', alt: 'Répétition clown : deux comédiens face à face dans un atelier lumineux' },
	'6a0c8d11-ebcb-481d-975d-4124690c8e2c-1.jpg': { rubrique: 'migractions', alt: 'Six clowns saluent sur une scène baignée de lumière rouge' },
	'7c39aa82-d572-4490-a97e-f8af2aa93aa2-1.jpg': { rubrique: 'clownologie', alt: 'Clown au nez rouge et chapka, bras levés, devant un hublot de la péniche' },
	'7dd58e61-42d0-4d71-bc55-2f0672f8a6b1-1.jpg': { rubrique: 'migractions', alt: 'Trois clowns côte à côte sous une lumière rouge : salopette, costume et robe fleurie' },
	'8d5ffa21-dcdf-4aab-a2f1-da88d4f3944c-1.jpg': { rubrique: 'usine', alt: 'Le collectif de clowns réuni sur la péniche, ballons colorés au plafond' },
	'9afca290-1ba0-4ee5-a73b-6540f246c528-1.jpg': { rubrique: 'clownologie', alt: 'Clown en chapka penché, bras tendus, devant un paravent fleuri' },
	'9bfebea5-83a1-4723-8135-d1fccf9fdb10-1.jpg': { rubrique: 'clownologie', alt: 'Thierry en clown, nez rouge et t-shirt bleu, un livre à la main, devant un hublot' },
	'a874a2f7-2157-44ec-9799-eff0d6d1354a-1.jpg': { rubrique: 'atelier', alt: 'Deux clowns en répétition dans une salle blanche' },
	'clown-drape-1.jpg': { rubrique: 'clownologie', alt: 'Clown drapé dans un tissu gris face au public, spectacle Clownologie' },
	'clown-drape-2.jpg': { rubrique: 'clownologie', alt: 'Clown drapé, la main sur le cœur, devant les enfants du public' },
	'clown-trench.jpg': { rubrique: 'clownologie', alt: 'Clown en trench-coat et chaussettes rayées, un carnet à la main' },
	'duo-paravent.jpg': { rubrique: 'clownologie', alt: 'Duo de clowns au nez rouge devant un paravent fleuri, sur la péniche' },
	'duo-paravent-2.jpg': { rubrique: 'clownologie', alt: 'Duo de clowns devant le paravent fleuri, face au public de la péniche' },
	'hero-francois.jpg': { rubrique: 'clownologie', alt: 'La salle de la péniche pendant un numéro, le public de dos face au clown en trench' },
	'marie-cafe-de-paris.jpg': { rubrique: 'kbarre', alt: 'Marie en clown, veste rouge et nœud vert, sur la scène du Café de Paris' },
	'salle-1.jpg': { rubrique: 'clownologie', alt: 'Le public réuni dans la salle de la Péniche Grande Fantaisie, un clown endormi au milieu' },
	'salle-2.jpg': { rubrique: 'clownologie', alt: 'Clown en rouge et perruque jaune sur la scène de la péniche, devant le paravent fleuri' },
	'salle-3.jpg': { rubrique: 'clownologie', alt: 'Clown en rouge et perruque jaune face au public de la péniche' },
	'salle-4.jpg': { rubrique: 'clownologie', alt: 'Clown en chemise noire et cravate devant le paravent fleuri, public au premier plan' },
	'salle-5.jpg': { rubrique: 'clownologie', alt: 'Duo de clowns au nez rouge, en short et en robe lilas, face au public' },
	'salle-6.jpg': { rubrique: 'clownologie', alt: 'Entrée de la Péniche Grande Fantaisie quai de l’Oise : ardoise du bistrot et affiches' },
	'salle-7.jpg': { rubrique: 'clownologie', alt: 'La coque peinte de la Péniche Grande Fantaisie amarrée sur le canal de l’Ourcq' },
	'salut-troupe.jpg': { rubrique: 'clownologie', alt: 'Salut final de la troupe de clowns sur la scène de la Péniche Grande Fantaisie' },
	'salut-troupe-2.jpg': { rubrique: 'clownologie', alt: 'La troupe applaudit le public à la fin du spectacle, sur la péniche' },
	'salut-troupe-3.jpg': { rubrique: 'clownologie', alt: 'Sept clowns alignés saluent le public de la péniche' },
};

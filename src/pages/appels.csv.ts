// Export CSV des appels (séparateur « ; » et BOM UTF-8 pour une ouverture directe dans Excel).
import type { APIRoute } from 'astro';
import { appels } from '../data/appels';

const colonnes = [
	['statut', 'Statut'],
	['date_limite', 'Date limite'],
	['nom', 'Événement'],
	['type', 'Type'],
	['edition', 'Édition'],
	['recurrence', 'Récurrence'],
	['dates_evenement', 'Dates'],
	['ville', 'Ville'],
	['pays', 'Pays'],
	['lieu', 'Lieu'],
	['organisateur', 'Organisateur'],
	['duree_numero', 'Durée du numéro'],
	['criteres', 'Critères / thème'],
	['remuneration', 'Rémunération'],
	['frais_inscription', 'Frais d’inscription'],
	['contact', 'Contact'],
	['lien', 'Lien'],
	['notes', 'Notes'],
] as const;

const cellule = (v: unknown) => `"${String(v ?? '').replace(/"/g, '""')}"`;

export const GET: APIRoute = () => {
	const lignes = [
		colonnes.map(([, titre]) => cellule(titre)).join(';'),
		...appels.map((a) => colonnes.map(([cle]) => cellule(a[cle])).join(';')),
	];
	return new Response('﻿' + lignes.join('\r\n'), {
		headers: { 'Content-Type': 'text/csv; charset=utf-8' },
	});
};

# Site du collectif Clown, dos, tres — clowndostres.com

Site Astro statique des Mercredis du Clown (Péniche Grande Fantaisie, Paris 19e). Un push sur `main`
déploie automatiquement (GitHub Actions → GitHub Pages). Lancé avec l'alias `clown` (`clownc` pour
reprendre la dernière session).

## Avant de toucher au code

- **`git pull` d'abord** : une routine cloud (chaque lundi 07:00 UTC,
  https://claude.ai/code/routines/trig_01G5Tv7hAts1qhd7ZHvF1mHB) met à jour `src/data/appels.json` et la
  date `misAJour` de `src/data/appels.ts`, puis **pousse directement sur `main`** (choix de Sophie, sans
  validation). Ne pas modifier ces deux fichiers en parallèle d'une exécution.
- Vérifier le rendu par capture (Chrome headless) avant de pousser ; attendre la fin du déploiement
  (`gh run watch`) et contrôler la page en ligne.

## Où sont les contenus

| Contenu | Fichier |
| --- | --- |
| Agenda (dates, affiches) | `src/data/evenements.ts` (+ images `src/assets/agenda/`) |
| Actualités | `src/data/actualites.ts` (+ images `src/assets/actus/`) |
| Appels à numéros | `src/data/appels.json` (page `/appels`, export `/appels.csv`) |
| Coordonnées, péniche | `src/data/site.ts` |
| Données Google (JSON-LD) | `src/data/schema.ts` |
| Équipe, affiches, histoire | `src/pages/collectif.astro` (+ `src/assets/equipe/`, `src/assets/posters/`) |
| Galerie | toute photo `.jpg` déposée dans `src/assets/photos/` y apparaît automatiquement ; ajouter sa description dans `src/data/photos.ts` |
| Fichiers bruts reçus (mails, photos) | `_recus/` (ignoré par git) : y ranger les pièces jointes une fois intégrées |

## Règles tranchées (ne pas redemander)

- Nom : « Clown, dos, **tres** », sans accent (espagnol). « très » adverbe français garde son accent.
- Adresse : 3 quai de l'Oise, 75019 Paris.
- Contacts publics : `contact@clowndostres.com` et `programmation@clowndostres.com` (redirections OVH).
  **Jamais** le Gmail ni le téléphone de Pancho (François Durègne) sur le site.
- Pas de Facebook ni d'Instagram pour le collectif (pas de `sameAs`).
- Retours de Pancho : par mail à Sophie ; elle dépose les pièces jointes à la racine du dossier.
- Typographie : espaces insécables avant `? ! :` et dans les guillemets « » ; attention, un retour à la
  ligne dans le code juste avant/après `<em>`, `<strong>` ou `<a>` supprime l'espace dans la page.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://clowndostres.com',
	// Toutes les adresses finissent par « / » (comme GitHub Pages les sert) : évite les redirections signalées par Google.
	trailingSlash: 'always',
	integrations: [sitemap()],
});

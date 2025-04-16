import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default {
	plugins: [
		sveltekit(),
		imagetools({
			defaultDirectives: (url) => {
				return new URLSearchParams({
					format: 'webp', // Convert to WebP by default
					quality: '75', // Balance quality and file size
				});
			},
		}),
	],
};
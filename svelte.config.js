import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

export default ({ command }) => ({
	extensions: [".svelte", ".svx", ".md"],

	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: [".svx", ".md"]
		})
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		}),
		paths: {
			base: command === "serve" ? "" : "/Profile"
		}
	}
});
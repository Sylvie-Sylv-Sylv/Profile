<script lang="ts">
	import './layout.css';

	let { children } = $props();

	const links = [
		{ title: 'Home', href: '/' },
		{ title: 'About', href: '/about' },
		{ title: 'Projects', href: '/projects' },
		{ title: 'Research', href: '/researches' },
		{ title: 'Blog', href: '/blog' },
		{ title: 'Contact', href: '/contact' }
	];
</script>

<div class="min-h-screen bg-slate-950 text-slate-100">
	<header class="border-b border-slate-800">
		<div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
			<a href="/" class="text-lg font-bold no-underline">
				Sylvie Sylv Sylv
			</a>

			<nav class="flex gap-6">
				{#each links as link}
					<a
						href={link.href}
						class="text-slate-400 no-underline transition hover:text-white"
					>
						{link.title}
					</a>
				{/each}
			</nav>
		</div>
	</header>

	<main>
		{@render children()}
	</main>

	<footer class="border-t border-slate-800">
		<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-slate-500">
			<p>© {new Date().getFullYear()} Sylvie Sylv Sylv</p>

			<p>
				Built with SvelteKit & Tailwind CSS
			</p>
		</div>
	</footer>
</div>
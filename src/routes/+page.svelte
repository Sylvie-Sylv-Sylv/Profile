<script lang="ts">
	const pages = [
		{
			title: 'About',
			description: 'Who I am, what I enjoy building, and my journey.',
			href: '/about'
		},
		{
			title: 'Projects',
			description: 'Software, experiments, game development, and open source.',
			href: '/projects'
		},
		{
			title: 'Research',
			description: 'Papers, publications, and ongoing research.',
			href: '/researches'
		},
		{
			title: 'Blog',
			description: 'Technical articles and things I learn.',
			href: '/blog'
		},
		{
			title: 'Contact',
			description: "Let's get in touch.",
			href: '/contact'
		}
	];
</script>

<svelte:head>
	<title>Sylvie Sylv Sylv | Portfolio</title>
	<meta
		name="description"
		content="Portfolio of Sylvie Sylv Sylv — Computer Science student interested in AI, graphics, and software engineering."
	/>
</svelte:head>

<div class="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col px-6">

	<!-- Hero -->
	<section class="flex flex-1 items-center py-20">
		<div class="max-w-3xl">

			<p class="mb-3 font-medium uppercase tracking-[0.3em] text-blue-400">
				Hello, I'm
			</p>

			<h1 class="mb-6 text-5xl font-black sm:text-7xl">
				Sylvie Sylv Sylv
			</h1>

			<p class="max-w-2xl text-lg leading-8 text-slate-400">
				A Computer Science student passionate about
				<span class="text-slate-200">AI</span>,
				<span class="text-slate-200">computer graphics</span>,
				<span class="text-slate-200">procedural generation</span>,
				and
				<span class="text-slate-200">software architecture</span>.
			</p>

			<div class="mt-10 flex flex-wrap gap-4">

				<a
					href="/projects"
					class="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white no-underline transition hover:bg-blue-500"
				>
					View Projects
				</a>

				<a
					href="/about"
					class="rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 no-underline transition hover:border-slate-500"
				>
					About Me
				</a>

			</div>

		</div>
	</section>

	<!-- Navigation -->
	<section class="pb-24">

		<div class="mb-6">
			<h2>Explore</h2>
			<p>
				Everything on this website is organized into a few simple sections.
			</p>
		</div>

		<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

			{#each pages as page}

				<a
					href={page.href}
					class="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 no-underline transition duration-200 hover:border-blue-500/50 hover:bg-slate-900"
				>

					<h3 class="transition group-hover:text-blue-400">
						{page.title}
					</h3>

					<p class="mb-0 mt-2">
						{page.description}
					</p>

				</a>

			{/each}

		</div>

	</section>

</div>
<svelte:head>
	<title>Projects | Sylvie Sylv Sylv</title>
	<meta
		name="description"
		content="Software engineering, AI, graphics, and research projects by Sylvie Sylv Sylv."
	/>
</svelte:head>

<script lang="ts">
	type Project = {
		title: string;
		description: string;
		tags: string[];
		github?: string;
		demo?: string;
		featured?: boolean;
	};

	const projects: Project[] = [
		{
			title: 'TamaJin',
			description:
				'A high-performance Python game development framework featuring modular rendering, physics, audio, procedural generation, and modern software architecture.',
			tags: ['Python', 'OpenGL', 'Game Engine'],
			github: 'https://github.com/Sylvie-Sylv-Sylv',
			featured: true
		},
		{
			title: 'DigiMission',
			description:
				'A full-stack web platform built with modern TypeScript technologies.',
			tags: ['TypeScript', 'SvelteKit', 'Full Stack']
		},
		{
			title: 'Procedural Generation Experiments',
			description:
				'Terrain generation, simplex noise, cellular automata, and procedural world generation algorithms.',
			tags: ['Algorithms', 'Graphics']
		},
		{
			title: 'Various Open Source Projects',
			description:
				'Libraries, utilities, competitive programming tools, and experimental software published on GitHub.',
			tags: ['Open Source']
		}
	];

	const featured = projects.filter((p) => p.featured);
	const others = projects.filter((p) => !p.featured);
</script>

<div class="mx-auto max-w-6xl px-6 py-16">

	<section class="mb-16">
		<p class="mb-3 uppercase tracking-[0.3em] text-indigo-400">
			Portfolio
		</p>

		<h1 class="mb-6 text-5xl font-black">
			Projects
		</h1>

		<p class="max-w-3xl text-lg leading-8 text-slate-400">
			I enjoy building systems that emphasize performance, clean
			architecture, and long-term maintainability. Many of these
			projects begin as experiments to better understand how
			complex software works, and gradually evolve into tools,
			frameworks, or research.
		</p>
	</section>

	<section class="mb-20">
		<h2 class="mb-8 text-3xl font-bold">
			Featured Projects
		</h2>

		<div class="space-y-8">
			{#each featured as project (project.title)}
				<article class="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition hover:border-indigo-500">

					<div class="flex items-start justify-between gap-6">

						<div>

							<h3 class="text-2xl font-bold">
								{project.title}
							</h3>

							<p class="mt-4 max-w-3xl leading-7 text-slate-400">
								{project.description}
							</p>

							<div class="mt-6 flex flex-wrap gap-2">
								{#each project.tags as tag (tag)}
									<span class="rounded-full bg-slate-800 px-3 py-1 text-sm">
										{tag}
									</span>
								{/each}
							</div>

						</div>

					</div>

				</article>
			{/each}
		</div>
	</section>

	<section>

		<h2 class="mb-8 text-3xl font-bold">
			Other Projects
		</h2>

		<div class="grid gap-6 md:grid-cols-2">

			{#each others as project (project.title)}

				<article class="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-indigo-500">

					<h3 class="text-xl font-semibold">
						{project.title}
					</h3>

					<p class="mt-3 text-slate-400">
						{project.description}
					</p>

					<div class="mt-5 flex flex-wrap gap-2">
						{#each project.tags as tag (tag)}
							<span class="rounded-full bg-slate-800 px-3 py-1 text-sm">
								{tag}
							</span>
						{/each}
					</div>

				</article>

			{/each}

		</div>

	</section>

</div>
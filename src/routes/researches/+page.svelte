<svelte:head>
	<title>Research | Sylvie Sylv Sylv</title>
	<meta
		name="description"
		content="Research in artificial intelligence, computer vision, and computational neuroscience by Sylvie Sylv Sylv."
	/>
</svelte:head>

<script lang="ts">
	type Research = {
		title: string;
		description: string;

		status: "Published" | "Ongoing";
		year: number;
		venue?: string;

		technologies: string[];
		areas: string[];
		contributions: string[];

		paper?: string;
		code?: string;

		featured?: boolean;
	};

	const researches: Research[] = [
		{
			title: "Mattaru Net",
			description:
				"A lightweight synthetic image detection model using contrastive distilled learning. This work focuses on building efficient architectures capable of detecting AI-generated imagery while maintaining strong performance under limited computational resources.",

			status: "Published",
			year: 2025,
			venue: "MediaEval 2025",

			technologies: [
				"PyTorch",
				"Computer Vision",
				"Contrastive Learning",
				"Knowledge Distillation"
			],

			areas: [
				"Synthetic Image Detection",
				"Deep Learning",
				"Trustworthy AI"
			],

			contributions: [
				"Designed a lightweight detection architecture",
				"Introduced contrastive distilled learning",
				"First-authored publication accepted to MediaEval 2025"
			],

			featured: true
		},
		{
			title: "SCOPE",
			description:
				"A research project investigating Alzheimer's disease through biologically inspired deep learning. The project aligns neural network representations with human visual cortex activity and studies how changes in functional connectivity influence visual perception.",

			status: "Ongoing",
			year: 2025,

			technologies: [
				"PyTorch",
				"ConvNeXt V2",
				"fMRI",
				"Representational Similarity Analysis"
			],

			areas: [
				"Computational Neuroscience",
				"Representation Learning",
				"Brain-inspired AI"
			],

			contributions: [
				"Modeled visual cortical representations",
				"Implemented RSA-based optimization",
				"Investigated Alzheimer's functional connectivity"
			],

			featured: true
		},
		{
			title: "Future Research Interests",
			description:
				"My long-term research interests include efficient machine learning, biologically inspired artificial intelligence, computer graphics, and the development of trustworthy AI systems.",

			status: "Ongoing",
			year: 2026,

			technologies: [
				"Machine Learning",
				"Graphics",
				"Optimization"
			],

			areas: [
				"Efficient AI",
				"Computer Graphics",
				"Scientific Computing"
			],

			contributions: [
				"Exploring future research directions",
				"Developing scalable AI systems",
				"Bridging neuroscience and machine learning"
			]
		}
	];

	const featured = researches.filter((r) => r.featured);
	const others = researches.filter((r) => !r.featured);
</script>

<div class="mx-auto max-w-6xl px-6 py-16">
	<section class="mb-16">
		<p class="mb-3 uppercase tracking-[0.3em] text-indigo-400">
			Research
		</p>

		<h1 class="mb-6 text-5xl font-black">
			Research
		</h1>

		<p class="max-w-3xl text-lg leading-8 text-slate-400">
			My research explores artificial intelligence through the lenses of
			computer vision, computational neuroscience, and efficient machine
			learning. I enjoy building models that are both computationally
			efficient and inspired by principles observed in biological systems.
		</p>
	</section>

	<section class="mb-20">
		<h2 class="mb-8 text-3xl font-bold">
			Featured Research
		</h2>

		<div class="space-y-8">
			{#each featured as research (research.title)}
				<article
					class="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition hover:border-indigo-500"
				>
					<div class="flex flex-col gap-8 lg:flex-row lg:justify-between">
						<div class="flex-1">
							<div class="flex flex-wrap items-center gap-3">
								<h3 class="text-2xl font-bold">
									{research.title}
								</h3>

								<span
									class={`rounded-full px-3 py-1 text-sm ${
										research.status === "Published"
											? "bg-green-500/10 text-green-400"
											: "bg-amber-500/10 text-amber-400"
									}`}
								>
									{research.status}
								</span>
							</div>

							<div
								class="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-500"
							>
								<span>{research.year}</span>

								{#if research.venue}
									<span>•</span>
									<span class="text-indigo-400">
										{research.venue}
									</span>
								{/if}
							</div>

							<p class="mt-6 max-w-3xl leading-7 text-slate-400">
								{research.description}
							</p>
						</div>
					</div>

					<div class="mt-10 grid gap-8 md:grid-cols-2">
						<div>
							<h4
								class="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300"
							>
								Technologies
							</h4>

							<div class="flex flex-wrap gap-2">
								{#each research.technologies as tech (tech)}
									<span
										class="rounded-full bg-slate-800 px-3 py-1 text-sm"
									>
										{tech}
									</span>
								{/each}
							</div>
						</div>

						<div>
							<h4
								class="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300"
							>
								Research Areas
							</h4>

							<div class="flex flex-wrap gap-2">
								{#each research.areas as area (area)}
									<span
										class="rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300"
									>
										{area}
									</span>
								{/each}
							</div>
						</div>
					</div>

					<div class="mt-10">
						<h4
							class="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300"
						>
							Key Contributions
						</h4>

						<ul class="space-y-3">
							{#each research.contributions as item (item)}
								<li class="flex gap-3 text-slate-400">
									<span class="mt-1 text-indigo-400">•</span>
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<section>
		<h2 class="mb-8 text-3xl font-bold">
			Research Interests
		</h2>

		<div class="grid gap-6">
			{#each others as research (research.title)}
				<article
					class="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition hover:border-indigo-500"
				>
					<div
						class="flex flex-col gap-8 lg:flex-row lg:justify-between"
					>
						<div class="flex-1">
							<div class="flex flex-wrap items-center gap-3">
								<h3 class="text-xl font-semibold">
									{research.title}
								</h3>

								<span
									class="rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-400"
								>
									{research.status}
								</span>
							</div>

							<p class="mt-5 leading-7 text-slate-400">
								{research.description}
							</p>
						</div>

						<div class="lg:w-80">
							<h4
								class="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300"
							>
								Research Areas
							</h4>

							<div class="flex flex-wrap gap-2">
								{#each research.areas as area (area)}
									<span
										class="rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300"
									>
										{area}
									</span>
								{/each}
							</div>

							<h4
								class="mb-3 mt-6 text-sm font-semibold uppercase tracking-wider text-slate-300"
							>
								Technologies
							</h4>

							<div class="flex flex-wrap gap-2">
								{#each research.technologies as tech (tech)}
									<span
										class="rounded-full bg-slate-800 px-3 py-1 text-sm"
									>
										{tech}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</section>
</div>
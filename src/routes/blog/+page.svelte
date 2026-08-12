<script lang="ts">
	import type { Component } from "svelte";
	import { resolve } from "$app/paths";

	interface BlogMetadata {
		title: string;
		date: string;
		description: string;
	}

	interface BlogModule {
		default: Component;
		metadata: BlogMetadata;
	}

	const modules = import.meta.glob<BlogModule>(
		"/src/content/blog/*.md",
		{ eager: true }
	);

	const posts = Object.entries(modules)
		.map(([path, module]) => {
			const slug = path.split("/").pop()!.replace(".md", "");

			return {
				slug,
				...module.metadata
			};
		})
		.sort(
			(a, b) =>
				new Date(b.date).getTime() -
				new Date(a.date).getTime()
		);
</script>

<svelte:head>
	<title>Blog | Sylvie Sylv Sylv</title>
	<meta
		name="description"
		content="Articles about programming, research, mathematics, software engineering, and personal projects."
	/>
</svelte:head>

<div class="mx-auto max-w-6xl px-6 py-16">
	<section class="mb-16">
		<p class="mb-3 uppercase tracking-[0.3em] text-indigo-400">
			Blog
		</p>

		<h1 class="mb-6 text-5xl font-black">
			Blog
		</h1>

		<p class="max-w-3xl text-lg leading-8 text-slate-400">
			I write about programming, artificial intelligence, computer graphics,
			software engineering, mathematics, research, and the occasional idea or
			project that I find worth sharing.
		</p>
	</section>

	<section>
		<div class="space-y-6">
			{#each posts as post (post.slug)}
				<a
					href={resolve("/blog/[slug]", { slug: post.slug })}
					class="group block rounded-2xl border border-slate-800 bg-slate-900/40 p-8 no-underline transition hover:border-indigo-500 hover:bg-slate-900"
				>
					<p class="text-sm text-slate-500">
						{new Date(post.date).toLocaleDateString(undefined, {
							year: "numeric",
							month: "long",
							day: "numeric"
						})}
					</p>

					<h2
						class="mt-3 text-2xl font-bold transition group-hover:text-indigo-400"
					>
						{post.title}
					</h2>

					<p class="mt-4 max-w-3xl leading-7 text-slate-400">
						{post.description}
					</p>
				</a>
			{/each}

			{#if posts.length === 0}
				<div
					class="rounded-2xl border border-slate-800 bg-slate-900/40 p-10 text-center"
				>
					<h2 class="text-2xl font-bold">
						No posts yet
					</h2>

					<p class="mt-3 text-slate-400">
						I'm still working on my first articles. Check back soon!
					</p>
				</div>
			{/if}
		</div>
	</section>
</div>
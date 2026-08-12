<script lang="ts">
	import type { Component } from "svelte";
	import ArrowLeft from "@lucide/svelte/icons/arrow-left";
	import { resolve } from "$app/paths";

	interface BlogMetadata {
		title: string;
		description: string;
		date: string;
		tags?: string[];
	}

	let {
		data
	}: {
		data: {
			content: Component;
			metadata: BlogMetadata;
		};
	} = $props();

	const Post = data.content;
</script>

<svelte:head>
	<title>{data.metadata.title} | Sylvie Sylv Sylv</title>

	<meta
		name="description"
		content={data.metadata.description}
	/>
</svelte:head>

<div class="mx-auto max-w-6xl px-6 py-16">
	<a
		href={resolve("/blog")}
		class="mb-8 inline-flex items-center gap-2 text-slate-400 no-underline transition hover:text-indigo-400"
	>
		<ArrowLeft size={18} />
		Back to Blog
	</a>

	<header class="mb-12">
		<p class="mb-3 uppercase tracking-[0.3em] text-indigo-400">
			Blog
		</p>

		<h1 class="mb-6 text-5xl font-black">
			{data.metadata.title}
		</h1>

		<p class="max-w-3xl text-lg leading-8 text-slate-400">
			{data.metadata.description}
		</p>

		<div class="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-500">
			<time datetime={data.metadata.date}>
				{new Date(data.metadata.date).toLocaleDateString(undefined, {
					year: "numeric",
					month: "long",
					day: "numeric"
				})}
			</time>

			{#if data.metadata.tags?.length}
				<span>•</span>

				{#each data.metadata.tags as tag (tag)}
					<span class="rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300">
						{tag}
					</span>
				{/each}
			{/if}
		</div>
	</header>

	<section class="rounded-2xl border border-slate-800 bg-slate-900/40 py-8 md:p-10 lg:p-12">
		<div class="max-w-3xl">
			<article
				class="prose prose-invert prose-slate max-w-none
					prose-headings:text-slate-100
					prose-p:text-slate-300
					prose-strong:text-slate-100
					prose-lead:text-slate-300
					prose-a:text-indigo-400
					prose-a:no-underline
					hover:prose-a:text-indigo-300
					prose-code:text-indigo-300
					prose-code:before:content-none
					prose-code:after:content-none
					prose-pre:border
					prose-pre:border-slate-800
					prose-pre:bg-slate-950/60
					prose-blockquote:border-indigo-500
					prose-blockquote:text-slate-400
					prose-hr:border-slate-800
					prose-th:text-slate-100
					prose-td:text-slate-300
					prose-li:text-slate-300"
			>
				<Post />
			</article>
		</div>
	</section>
</div>
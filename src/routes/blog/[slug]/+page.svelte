<script lang="ts">
    import type { Component } from "svelte";

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
    <title>{data.metadata.title} | Blog</title>
    <meta
        name="description"
        content={data.metadata.description}
    />
</svelte:head>

<section class="mx-auto max-w-3xl px-6 py-16">
    <header class="mb-12 border-b border-zinc-800 pb-8">
        <h1 class="text-4xl font-bold tracking-tight">
            {data.metadata.title}
        </h1>

        <p class="mt-4 text-zinc-400">
            {data.metadata.description}
        </p>

        <div class="mt-6 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
            <time datetime={data.metadata.date}>
                {new Date(data.metadata.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })}
            </time>

            {#if data.metadata.tags}
                <span>•</span>

                {#each data.metadata.tags as tag (tag)}
                    <span
                        class="rounded-full border border-zinc-700 px-2 py-1 text-xs"
                    >
                        {tag}
                    </span>
                {/each}
            {/if}
        </div>
    </header>

    <article class="prose prose-zinc dark:prose-invert max-w-none">
        <Post />
    </article>
</section>
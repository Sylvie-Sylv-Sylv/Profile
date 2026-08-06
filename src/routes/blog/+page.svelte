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
    <title>Blog</title>
    <meta
        name="description"
        content="Articles about programming, research, mathematics, and personal projects."
    />
</svelte:head>

<section class="mx-auto max-w-4xl px-6 py-16">
    <header class="mb-12">
        <h1 class="text-5xl font-bold tracking-tight">
            Blog
        </h1>

        <p class="mt-4 max-w-2xl text-zinc-400">
            Thoughts on programming, computer science,
            mathematics, research, and anything interesting I
            happen to be exploring.
        </p>
    </header>

    <div class="space-y-8">
        {#each posts as post (post.slug)}
            <a
                href={resolve("/blog/[slug]", { slug: post.slug })}
                class="no-underline hover:no-underline block rounded-xl border border-zinc-800 p-6 transition hover:border-zinc-600 hover:bg-zinc-900/40"
            >
                <div class="mb-2 text-sm text-zinc-500">
                    {new Date(post.date).toLocaleDateString(
                        undefined,
                        {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        }
                    )}
                </div>

                <h2 class="text-2xl font-semibold">
                    {post.title}
                </h2>

                <p class="mt-3 text-zinc-400">
                    {post.description}
                </p>
            </a>
        {/each}

        {#if posts.length === 0}
            <p class="text-zinc-500">
                No blog posts yet.
            </p>
        {/if}
    </div>
</section>
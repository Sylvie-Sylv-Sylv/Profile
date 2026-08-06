import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { Component } from "svelte";

interface BlogMetadata {
    title: string;
    date: string;
    description: string;
    tags?: string[];
}

interface BlogModule {
    default: Component;
    metadata: BlogMetadata;
}

const posts = import.meta.glob<BlogModule>(
    "/src/content/blog/*.md"
);

export const load: PageLoad = async ({ params }) => {
    const loader = posts[`/src/content/blog/${params.slug}.md`];

    if (!loader) {
        throw error(404, "Post not found");
    }

    const post = await loader();

    return {
        content: post.default,
        metadata: post.metadata
    };
};
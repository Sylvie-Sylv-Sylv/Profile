<script lang="ts">
    import { page } from "$app/state";

    import { resolve } from "$app/paths";

    import type { RouteId } from "$app/types";

    let {
        href,
        title
    }: {
        href: RouteId;
        title: string;
    } = $props();

    const active = $derived(page.url.pathname === href);
</script>

<a
    href = {resolve(href)}
    class={[
        "rounded-lg px-4 py-2 text-sm transition-colors no-underline",
        active
            ? "bg-slate-900 text-white"
            : "text-slate-400 hover:bg-slate-900 hover:text-white"
    ]}
>
    {title}
</a>
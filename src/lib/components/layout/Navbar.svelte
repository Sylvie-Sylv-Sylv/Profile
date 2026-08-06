<script lang="ts">
    import MobileMenu from "./MobileMenu.svelte";
    import NavLink from "./NavLink.svelte";

    import { resolve } from "$app/paths";

    import type { RouteId } from "$app/types";

    type Link = {
		title: string;
		href: RouteId;
	};

	let { links }: { links: Link[] } = $props();
</script>

<header class="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
    <div class="px-8 container-page flex h-16 items-center justify-between">

        <a
            href={resolve("/")}
            class="text-lg font-bold text-indigo-400 no-underline"
        >
            SSS
        </a>

        <nav class="hidden items-center gap-1 md:flex">
            {#each links as link (link.href)}
                <NavLink {...link} />
            {/each}
        </nav>

        <div class="md:hidden">
            <MobileMenu {links}/>
        </div>

    </div>
</header>
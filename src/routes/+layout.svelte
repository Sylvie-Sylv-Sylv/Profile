<script lang="ts">
    import "./layout.css";

    import Navbar from "$lib/components/layout/Navbar.svelte";
    import Footer from "$lib/components/layout/Footer.svelte";

    import type { RouteId } from "$app/types";

    let { children } = $props();

    type Link = {
        title: string;
        href: RouteId;
    }

    const links: Link[]= [
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Projects", href: "/projects" },
        { title: "Research", href: "/researches" },
        { title: "Blog", href: "/blog" },
        { title: "Contact", href: "/contact" }
    ];
</script>

<div class="flex min-h-screen flex-col bg-slate-950">
    <Navbar {links} />

    <main class="flex-1">
        {@render children()}
    </main>

    <Footer />
</div>
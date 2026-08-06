<script lang="ts">
    import { Dialog } from "bits-ui";

    import { resolve } from "$app/paths";

    import type { RouteId } from "$app/types";

    type Link = {
		title: string;
		href: RouteId;
	};

	let { links }: { links: Link[] } = $props();
</script>

<Dialog.Root>

    <Dialog.Trigger class="btn btn-ghost">
        ☰
    </Dialog.Trigger>

    <Dialog.Portal>

        <Dialog.Overlay class="overlay" />

        <Dialog.Content class="dialog w-[92vw] max-w-sm">

            <Dialog.Title class="mb-6 text-lg font-semibold">
                Navigation
            </Dialog.Title>

            <nav class="flex flex-col gap-2">

                {#each links as link (link.href)}

                    <Dialog.Close>
                        {#snippet child({ props })}
                            <a
                                {...props}
                                href={resolve(link.href)}
                                class="menu-item no-underline"
                            >
                                {link.title}
                            </a>
                        {/snippet}
                    </Dialog.Close>

                {/each}

            </nav>

        </Dialog.Content>

    </Dialog.Portal>

</Dialog.Root>
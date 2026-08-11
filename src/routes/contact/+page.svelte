<script lang="ts">
	import Mail from "@lucide/svelte/icons/mail";
	import MapPin from "@lucide/svelte/icons/map-pin";
	import ExternalLink from "@lucide/svelte/icons/external-link";
	import Code from "@lucide/svelte/icons/code";

	type Contact = {
		id: string;
		title: string;
		value: string;
		href: string;
		icon: typeof Mail;
		description: string;
	};

	const contacts: Contact[] = [
		{
			id: "email",
			title: "Email",
			value: "sylvie.sylv.sylv@gmail.com",
			href: "mailto:sylvie.sylv.sylv@gmail.com",
			icon: Mail,
			description: "The best way to reach me."
		},
		{
			id: "github",
			title: "GitHub",
			value: "github.com/Sylvie-Sylv-Sylv",
			href: "https://github.com/Sylvie-Sylv-Sylv",
			icon: Code,
			description: "Projects, experiments, and open source work."
		},
		{
			id: "bluesky",
			title: "Bluesky",
			value: "@sylvie-sylv-sylv.bsky.social",
			href: "https://bsky.app/profile/sylvie-sylv-sylv.bsky.social",
			icon: ExternalLink,
			description: "Occasional updates and thoughts."
		}
	];
</script>

<svelte:head>
	<title>Contact • Sylvie Sylv Sylv</title>
	<meta
		name="description"
		content="Contact Sylvie Sylv Sylv through email, GitHub, or Bluesky."
	/>
</svelte:head>

<section class="container-page py-24">
	<div class="mx-auto max-w-3xl space-y-12">
		<header class="space-y-4 text-center">
			<p class="text-sm font-medium uppercase tracking-[0.3em] text-indigo-400">
				Get in Touch
			</p>

			<h1>Contact</h1>

			<p class="mx-auto max-w-2xl">
				Whether you want to discuss research, open-source projects, Minecraft
				modding, AI, or simply say hello, I'd love to hear from you.
			</p>
		</header>

		<div class="card space-y-8">
			<div>
				<h2 class="mb-2 text-2xl">Sylvie Sylv Sylv</h2>

				<div class="mt-4 flex items-center gap-2 text-slate-400">
					<MapPin size={18} />
					<span>Vietnam</span>
				</div>
			</div>

			<div class="divider"></div>

			<div class="grid gap-6">
				{#each contacts as contact (contact.id)}
					<a
						href={contact.href}
						target="_blank"
						rel="noopener noreferrer"
						class="surface surface-hover flex items-start justify-between gap-6 p-5 transition-all hover:-translate-y-0.5 hover:border-indigo-500/40"
					>
						<div class="flex gap-4">
							<div class="center h-11 w-11 rounded-xl bg-indigo-500/10 text-indigo-400">
								<contact.icon size={20} />
							</div>

							<div>
								<h3 class="text-lg">{contact.title}</h3>

								<p class="mt-1 break-all text-slate-300">
									{contact.value}
								</p>

								<p class="mt-2 text-sm text-slate-500">
									{contact.description}
								</p>
							</div>
						</div>

						<ExternalLink
							size={18}
							class="mt-1 shrink-0 text-slate-500"
						/>
					</a>
				{/each}
			</div>

			<div class="divider"></div>

			<div class="flex flex-wrap gap-3">
				<a
					class="btn btn-primary"
					href="mailto:sylvie.sylv.sylv@gmail.com"
				>
					<Mail size={18} />
					Send an Email
				</a>

				<a
					class="btn btn-secondary"
					href="https://github.com/Sylvie-Sylv-Sylv"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Code size={18} />
					View GitHub
				</a>
			</div>
		</div>

		<div class="text-center">
			<p class="text-sm text-slate-500">
				I usually respond within a few days.
			</p>
		</div>
	</div>
</section>
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
	<title>Contact | Sylvie Sylv Sylv</title>
	<meta
		name="description"
		content="Contact Sylvie Sylv Sylv through email, GitHub, or Bluesky."
	/>
</svelte:head>

<div class="mx-auto max-w-6xl px-6 py-16">
	<section class="mb-16">
		<p class="mb-3 uppercase tracking-[0.3em] text-indigo-400">
			Get in Touch
		</p>

		<h1 class="mb-6 text-5xl font-black">
			Contact
		</h1>

		<p class="max-w-3xl text-lg leading-8 text-slate-400">
			Whether you want to discuss research, open-source projects, Minecraft
			modding, AI, or simply say hello, I'd love to hear from you.
		</p>
	</section>

	<section>
		<div class="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
			<div class="mb-10">
				<h2 class="text-2xl font-bold">
					Sylvie Sylv Sylv
				</h2>

				<div class="mt-4 flex items-center gap-2 text-slate-400">
					<MapPin size={18} />
					<span>Vietnam</span>
				</div>
			</div>

			<div class="grid gap-5">
				{#each contacts as contact (contact.id)}
					<a
						href={contact.href}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-start justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-6 no-underline transition hover:border-indigo-500/50 hover:bg-slate-900"
					>
						<div class="flex gap-4">
							<div
								class="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400"
							>
								<contact.icon size={20} />
							</div>

							<div>
								<h3 class="transition group-hover:text-indigo-400">
									{contact.title}
								</h3>

								<p class="mt-2 break-all text-slate-300">
									{contact.value}
								</p>

								<p class="mt-2 text-sm text-slate-500">
									{contact.description}
								</p>
							</div>
						</div>

						<ExternalLink
							size={18}
							class="mt-1 shrink-0 text-slate-500 transition group-hover:text-indigo-400"
						/>
					</a>
				{/each}
			</div>

			<div class="mt-10 flex flex-wrap gap-4">
				<a
					href="mailto:sylvie.sylv.sylv@gmail.com"
					class="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 font-medium text-indigo-50 no-underline transition hover:bg-indigo-400"
				>
					<Mail size={18} />
					Send an Email
				</a>

				<a
					href="https://github.com/Sylvie-Sylv-Sylv"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-medium text-indigo-50 no-underline transition hover:border-slate-500"
				>
					<Code size={18} />
					View GitHub
				</a>
			</div>
		</div>

		<p class="mt-8 text-center text-sm text-slate-500">
			I usually respond within a few days.
		</p>
	</section>
</div>
<script lang="ts">
	import Bio from '@view/Bio.svelte';
	import Project from '@view/Project.svelte';
	import Section from '@view/Section.svelte';
	import SocialLink from '@view/SocialLink.svelte';
</script>

<Bio name="Michael Townsend">
	<svelte:fragment slot="socials">
		<SocialLink href="https://medium.com/@doublespeak" icon="medium">medium/doublespeak</SocialLink>
		<SocialLink href="https://github.com/Continuities" icon="github">github/continuities</SocialLink
		>
		<SocialLink href="https://github.com/doublespeakgames" icon="github"
			>github/doublespeakgames</SocialLink
		>
	</svelte:fragment>
	<svelte:fragment slot="summary">
		Game Designer, Software Engineer, Esoteric Pedagogist
	</svelte:fragment>
</Bio>

<Section>
	<svelte:fragment slot="title">Work</svelte:fragment>
	<ul>
		<li>
			<Project>
				<svelte:fragment slot="title">The Qubit Game</svelte:fragment>
				<svelte:fragment slot="summary">
					I made a thing with Google about quantum computing.
				</svelte:fragment>
			</Project>
		</li>
		<li>
			<Project>
				<svelte:fragment slot="title">Penrose</svelte:fragment>
				<svelte:fragment slot="summary">
					I made a weird narrative thing that confuses people.
				</svelte:fragment>
			</Project>
		</li>
		<li>
			<Project>
				<svelte:fragment slot="title">Iconoclast</svelte:fragment>
				<svelte:fragment slot="summary">
					I made a thing that destroys NFTs because they're bad.
				</svelte:fragment>
			</Project>
		</li>
	</ul>
</Section>

<style>
	ul {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
</style>

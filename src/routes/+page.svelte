<script lang="ts">
	import Bio from '@view/Bio.svelte';
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

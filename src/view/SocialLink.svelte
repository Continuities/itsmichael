<script lang="ts">
	import type { ComponentType } from 'svelte';
	import GithubIcon from '~icons/mdi/github';
	import MediumIcon from '~icons/simple-icons/medium';

	export let href: string;
	export let icon: keyof typeof ICONS | ComponentType;

	const ICONS = {
		github: GithubIcon,
		medium: MediumIcon
	} as const;

	$: IconElement = typeof icon === 'string' ? ICONS[icon] : icon;
</script>

<a {href} target="_blank" rel="noreferrer"><IconElement /><slot>{href}</slot></a>

<style>
	a {
		color: inherit;
		text-decoration: none;
		display: flex;
		gap: 8px;
	}
	a:hover,
	a:active {
		text-decoration: underline;
	}
</style>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let disabled: boolean = false;
	export let text: string = '';
	export let action: BtnAction;
	export let style: BtnStyle = 'primary';
	export let radius: BtnRadius = 'default';
	export let type: BtnType = 'button';
	let styleClass = `btn--${style}`;
	let radiusClass = `btn--${radius}`;

	type BtnAction = keyof typeof ACTION;
	const ACTION = {
		Save: 'Save',
		Confirm: 'Confirm',
		Cancel: 'Cancel',
		Publish: 'Publish',
		Submit: 'Submit'
	} as const;

	type BtnStyle = keyof typeof STYLE;
	const STYLE = {
		primary: 'primary',
		secondary: 'secondary',
		outline: 'outline'
	} as const;

	type BtnRadius = keyof typeof RADIUS;
	const RADIUS = {
		none: 'none',
		default: 'default',
		small: 'small',
		medium: 'medium',
		large: 'large'
	} as const;

	type BtnType = keyof typeof TYPE;
	const TYPE = {
		button: 'button',
		submit: 'submit',
		reset: 'reset'
	} as const;

	function goTo() {
		dispatch('click');
	}
</script>

<button on:click={goTo} class="btn {styleClass} {radiusClass}" {disabled} {type}>
	{text}{action}
</button>

<style lang="scss">
	:root {
		--primary: #384abe;
		--secondary: #384abe;
		--black: #000000;
		--white: #ffffff;
		--radius-0_5: 0.5rem;
		--radius-1: 1rem;
		--radius-2: 2rem;
		--font: 'Inter';
	}
	.btn {
		padding: 1rem 1.5rem;
		border: 0;
		font-family: var(--font);
		transition: all 0.25s ease-out;
		&--default {
			border-radius: var(--radius-1);
		}
		&--small {
			border-radius: var(--radius-0_5);
		}
		&--primary {
			border: 1px solid var(--primary);
			background-color: var(--primary);
			color: var(--white);
			&:hover {
				color: var(--black);
			}
			&:focus-visible {
				outline: 0;
				border-color: var(--white);
			}
		}
	}
</style>

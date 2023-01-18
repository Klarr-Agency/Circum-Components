<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let disabled: boolean = false;
	export let text: string = '';
	export let action: BtnAction | '' = '';
	export let style: BtnStyle = 'primary';
	export let size: BtnSize = 'default';
	export let radius: BtnRadius = 'default';
	export let type: BtnType = 'button';
	let styleClass = `btn--${style}`;
	let sizeClass = `btn--size-${size}`;
	let radiusClass = `btn--radius-${radius}`;

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
		secondary: 'secondary'
	} as const;

	type BtnRadius = keyof typeof RADIUS;
	const RADIUS = {
		none: 'none',
		default: 'default',
		small: 'small',
		medium: 'medium',
		large: 'large'
	} as const;

	type BtnSize = keyof typeof SIZE;
	const SIZE = {
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

	const goTo = () => dispatch('click');
	const submit = () => dispatch('submit');
</script>

{#if type === 'submit'}
	<button on:click={submit} class="btn {styleClass} {radiusClass} {sizeClass}" {disabled} {type}>
		{text}{action}
	</button>
{:else if type === 'button'}
	<button on:click={goTo} class="btn {styleClass} {radiusClass} {sizeClass}" {disabled} {type}>
		{text}{action}
	</button>
{/if}

<style lang="scss">
	.btn {
		border: 2px solid transparent;
		cursor: pointer;
		font-family: var(--font);
		transition: all 0.25s ease-out;
		&[disabled] {
			opacity: 0.5;
			color: var(--disabled);
			cursor: default;
			&:hover {
				color: var(--disabled);
				border-color: var(--disabled);
			}
		}
		/* Radius */
		&--radius-none {
			border-radius: 0;
		}
		&--radius-default,
		&--radius-medium {
			border-radius: var(--radius-1);
		}
		&--radius-small {
			border-radius: var(--radius-0_5);
		}
		&--radius-large {
			border-radius: var(--radius-2);
		}
		/* Size */
		&--size-default,
		&--size-medium {
			padding: 1rem 1.5rem;
		}
		&--size-small {
			padding: 0.5rem 1rem;
		}
		&--size-large {
			padding: 1.25rem 1.75rem;
		}
		/* Button style */
		&--primary {
			background-color: var(--primary);
			color: var(--primary-text-color);
			&:hover {
				color: var(--secondary-text-color);
			}
			&:focus-visible {
				outline: 0;
				color: var(--secondary-text-color);
				border-color: var(--secondary-text-color);
			}
		}
		&--secondary {
			background-color: transparent;
			border-color: var(--primary);
			color: var(--secondary-text-color);
			&:hover {
				color: var(--secondary-text-color);
				border-color: var(--secondary-text-color);
			}
			&:focus-visible {
				outline: 0;
				color: var(--secondary-text-color);
				border-color: var(--secondary-text-color);
			}
		}
	}
</style>

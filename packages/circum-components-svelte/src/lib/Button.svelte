<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let disabled: boolean = false;
	export let text: string = '';
	export let action: BtnAction | '' = '';
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
	.btn {
		padding: 1rem 1.5rem;
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
		&--default {
			border-radius: var(--radius-1);
		}
		&--small {
			border-radius: var(--radius-0_5);
		}
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

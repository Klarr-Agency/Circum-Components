<script lang="ts">
	export let placeholder: string = 'placeholder';
	export let spacing: InputSpacing = '1';
	export let value: string = '';
	export let label: string = '';
	let spacingClass = `margin--tb${spacing}`;
	type InputSpacing = keyof typeof SPACING;
	const SPACING = {
		'1': '1',
		'2': '2',
		'3': '3'
	} as const;

	const uid = () => {
		const randomString = String(Date.now().toString(32) + Math.random().toString(16)).replace(
			/\./g,
			''
		);
		return randomString;
	};
	const uniqueId = uid();
</script>

<div class="inputText {spacingClass}">
	{#if label === ''}
		<input bind:value on:input class="inputText__input" type="text" {placeholder} />
	{:else}
		<label for="{uniqueId}-{label}" class="inputText__label">{label}</label>
		<input
			id="{uniqueId}-{label}"
			bind:value
			on:input
			class="inputText__input"
			type="text"
			{placeholder}
		/>
	{/if}
</div>

<style lang="scss">
	.inputText {
		display: flex;
		flex-direction: column;
		max-width: 250px;
		&__label {
			font-family: var(--font);
			margin-bottom: 0.5rem;
		}
		&__input {
			display: flex;
			background-color: var(--gray-90);
			padding: 0.5rem 1rem;
			border: 2px solid var(--gray-90);
			border-radius: var(--radius-1);
			color: #8e8e95;
			font-family: var(--font);
			font-size: 14px;
			height: 24px;
			transition: all 0.25s ease-out;
			&:focus,
			&:hover {
				outline: 0;
				border-color: var(--primary);
			}
		}
	}
</style>

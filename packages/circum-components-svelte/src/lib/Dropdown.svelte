<script lang="ts">
	import { clickOutside } from './Dropdown.module';
	export let legend: string = 'No label';
	export let placeholder: string = 'No filter';
	export let disabled: boolean = false;
	export let selectedValue: string = '';
	export let items: Array<{ name: string; value: string }>;

	let open: boolean = false;
	let selectedItem: Array<{ name: string; value: string }> = items.filter(
		(item) => item.value === selectedValue
	);

	function getActiveElement(e: any) {
		selectedValue = e.currentTarget.value;
		selectedItem = items.filter((item) => item.value === selectedValue);
	}
	function removeOpenAttribute() {
		if (open) {
			open = false;
		}
	}
	function removeOpenAttributeOnKeyDown(e: any) {
		if (e.keyCode === 13) {
			if (open) {
				open = false;
			}
		}
	}
</script>

<div
	class="dropdown"
	class:dropdown--disabled={disabled === true}
	use:clickOutside
	on:close={removeOpenAttribute}
>
	<fieldset class="dropdown__fieldset">
		<legend class="dropdown__legend">{legend}</legend>
		<details bind:open>
			<summary class="dropdown__summary">
				{#if !selectedValue}
					<span class="dropdown__placeholder">
						{placeholder}
					</span>
				{:else}
					<span class="dropdown__selectedValue">
						{selectedItem[0].name}
					</span>
				{/if}
			</summary>
			<ul class="dropdown__list">
				{#each items as item}
					<li
						class="dropdown__item"
						class:selected={selectedValue === item.value}
						on:mouseup={removeOpenAttribute}
					>
						<input
							class="dropdown__input"
							id="{legend.replace(/\s/g, '-')}-{item.value}}"
							type="radio"
							name={legend}
							value={item.value}
							on:change={getActiveElement}
							on:keydown={removeOpenAttributeOnKeyDown}
						/>
						<label for="{legend.replace(/\s/g, '-')}-{item.value}}" class="dropdown__label"
							>{item.name}</label
						>
					</li>
				{/each}
			</ul>
		</details>
	</fieldset>
</div>

<style lang="scss">
	.dropdown {
		display: flex;
		flex-direction: column;
		font-family: var(--font);
		font-size: 16px;
		position: relative;
		width: 250px;
		$self: &;
		&__fieldset {
			border: 0;
			padding: 0;
			margin: 0;
		}
		&__legend {
			border: 0;
			font-family: var(--font);
			text-transform: capitalize;
			margin-bottom: 0.5rem;
		}
		&__summary {
			cursor: pointer;
			display: flex;
			align-items: center;
			background-color: var(--gray-90);
			border: 2px solid var(--gray-90);
			border-radius: var(--radius-1);
			padding: 0.5rem 1rem;
			height: 24px;
		}
		&__placeholder {
			color: #999;
		}
		&__selectedValue {
			color: #fff;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		&__list {
			position: absolute;
			background-color: var(--gray-90);
			box-sizing: border-box;
			border-radius: var(--radius-1);
			list-style-type: none;
			padding: 0;
			margin: 0;
			margin-top: 4px;
			width: 100%;
			z-index: 100;
		}
		&__item {
			display: flex;
			align-items: center;
			padding: 0 1rem;
			//margin: 2px;
			border-radius: var(--radius-1);
			&.selected {
				background-color: var(--primary);
				color: #fff;
			}
			&:hover:not(.selected) {
				background-color: var(--primary);
				color: #fff;
			}
		}
		&__label {
			color: #fff;
			margin: 0;
			padding: 1rem 0;
			width: 100%;
		}
		&__input {
			position: absolute;
			margin: 0;
			opacity: 0;
		}
	}
</style>

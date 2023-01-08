<script lang="ts">
    export let placeholder: string = 'placeholder';
    export let spacing: InputSpacing = '1';
    export let value:string = '';
    
    let spacingClass = `margin--tb${spacing}`;
    type InputSpacing = keyof typeof SPACING;
	const SPACING = {
		"1":"1",
        "2":"2",
        "3":"3"
	} as const;
</script>

<div class="inputText {spacingClass}">
    <input 
        bind:value={value}
        on:input
        class="inputText__input" type="text" {placeholder}>
</div>

<style lang="scss">
	.inputText {
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
            &:focus, &:hover {
                outline: 0;
                border-color: var(--primary);
            }
        }
	}
</style>
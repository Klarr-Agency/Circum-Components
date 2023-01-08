<script>
	import Button from '$lib/Button.svelte';
	import InputText from '$lib/InputText.svelte';
    import '$lib/global.css';

    let textBinding = '';
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>Input text content => {textBinding}</p>
<Button action="Save" />
<InputText bind:value={textBinding} label="test"></InputText>
<InputText bind:value={textBinding} ></InputText>

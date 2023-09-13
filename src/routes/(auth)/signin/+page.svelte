<script>

    import { signIn } from "@auth/sveltekit/client"
	import Card from "$lib/components/card.svelte";

</script>

<svelte:head>
    <title>NumberType | Sign In</title>
</svelte:head>

<Card>
    <h2>Sign In</h2>
    <button on:click={() => signIn('github')}>GitHub</button>
    <button on:click={() => signIn('google')}>Google</button>
    <button on:click={() => signIn('twitter')}>Twitter</button>
</Card>

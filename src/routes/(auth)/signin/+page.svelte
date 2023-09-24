<script>

    import { signIn } from "@auth/sveltekit/client"
	import Card from "$lib/components/card.svelte";

</script>

<svelte:head>
    <title>NumberType | Sign In</title>
    <meta name="description" content="Sign in to NumberType">
</svelte:head>

<Card>
    <h1>Sign In</h1>
    <button type="button" class="github" on:click={() => signIn('github')}>GitHub</button>
    <button type="button" class="google" on:click={() => signIn('google')}>Google</button>
    <button type="button" class="twitter" on:click={() => signIn('twitter')}>Twitter</button>
</Card>

<style>

    .github {
        background-color: #333;
    }

    .google {
        background-color: #eee;
        color: #000;
    }

    .twitter {
        background-color: #1da1f2;
    }

    .github:hover, .github:focus {
        background-color: #555;
    }

    .google:hover, .google:focus {
        background-color: #ddd;
    }

    .twitter:hover, .twitter:focus {
        background-color: #1a91da;
    }

</style>

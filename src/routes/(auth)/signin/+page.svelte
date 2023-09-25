<script>

    import { signIn } from "@auth/sveltekit/client"
	import Card from "$lib/components/card.svelte";

</script>

<svelte:head>
    <title>NumberType | Sign In</title>
    <meta name="description" content="Sign in to NumberType">
</svelte:head>

<main> 
    <div class="side">
        <div>
            <h1>Welcome to NumberType!</h1>
            <hr>
            <p>You can store your contacts here and practice typing their numbers.</p>
            <p>This way, you can learn to type numbers without looking at your keyboard!</p>
        </div> 
    </div>
    <div class="content">
        <Card>
            <h1>Sign In</h1>
            <button type="button" class="github" on:click={() => signIn('github')}>GitHub</button>
            <button type="button" class="google" on:click={() => signIn('google')}>Google</button>
            <button type="button" class="twitter" on:click={() => signIn('twitter')}>Twitter</button>
        </Card>
    </div>
</main>

<style>

    main {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        height: 100dvh;
    }

    .side {
        text-align: center;
        color: #fff;
        padding: 1rem;
        background: -webkit-linear-gradient(-45deg, rgba(84, 0, 255, 1) 0, rgba(84, 0, 255, 1) 40%, rgba(140, 0, 255, 1) 40%, rgba(84, 0, 255, 1) 59%, rgba(84, 0, 255, 1) 59%, rgba(84, 0, 255, 1) 100%), -webkit-linear-gradient(-45deg, rgba(84, 0, 255, 1) 0, rgba(84, 0, 255, 1) 7%, transparent 7%, transparent 100%), -webkit-linear-gradient(-225deg, rgba(84, 0, 255, 1) 0, rgba(84, 0, 255, 1) 7%, transparent 7%, transparent 100%), rgba(84, 0, 255, 1); 
    }

    .side div {
        font-size: 1.25rem;
        align-items: flex-start; 
    }

    hr {
        width: 100%;
        border: 1px solid #eee;
    }

    @media(max-width: 680px) {
        main {
            grid-template-columns: 1fr;
        }
    }

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

<script>
    import { goto } from "$app/navigation";
	import Card from "$lib/components/card.svelte";

    function signUp() {
        console.log("Signing up, verication email sent");
        goto("/");
    }
</script>

<Card>
    <h2>Sign Up</h2>
    <form on:submit|preventDefault={signUp}>
        <input type="text" name="username" id="username" placeholder="Username">
        <input type="email" name="email" id="email" placeholder="E-mail">
        <button type="submit">Submit</button>
        <div>
            <p>Already have an Account?</p>
            <a href="/signin">Sign In</a>
        </div>
    </form>
</Card>
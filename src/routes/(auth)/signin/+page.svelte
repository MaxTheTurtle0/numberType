<script>

    import { goto } from "$app/navigation";
	import Card from "$lib/components/card.svelte";

    function signIn() {
        
        // @ts-ignore
        const email = document.getElementById("email").value;

        console.log("Signing in with email %s", email);
        goto("/");
    }

</script>
<Card>
    <h2>Sign In</h2>
    <form on:submit|preventDefault={signIn}>
        <input type="email" name="email" id="email" placeholder="E-mail">
        <button type="submit">Submit</button>
    </form> 
    <h4>Don't have an Account?</h4>
    <a href="/signup">Sign Up</a>
</Card>

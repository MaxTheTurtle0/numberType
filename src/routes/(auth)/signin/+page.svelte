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
    <h1>Sign In</h1>
    <form on:submit|preventDefault={signIn}>
        <input type="email" name="email" id="email" placeholder="E-mail">
        <button type="submit">Submit</button>
        <div>
            <p>Don't have an Account?</p>
            <a href="/signup">Sign Up</a>
        </div>
    </form> 
</Card>
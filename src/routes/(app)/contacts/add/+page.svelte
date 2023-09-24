<script>

    import Card from "$lib/components/card.svelte";
    
    /** @type {import('./$types').PageData}*/ 
    export let data;

</script>

<svelte:head>
    <title>NumberType | Add Contact</title>
    <meta name="description" content="Add a contact">
</svelte:head>

<Card>
    <h1>Add Contact</h1>
    <form action="?/createContact" method="post">
        <input type="text" name="name" placeholder="name" required>
        <input type="tel" name="phone" placeholder="tel number" required>
        <input type="hidden" name="userId" value={data.userId}>
        <button type="submit">Submit</button>
    </form>
</Card>

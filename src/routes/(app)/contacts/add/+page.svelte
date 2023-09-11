<script>

    import Card from "$lib/components/card.svelte";
    export let data;

</script>

<Card>
    <h1>Add Contact</h1>
    <form action="?/createContact" method="post">
        <input type="text" name="name" placeholder="name">
        <input type="tel" name="phone" placeholder="tel number">
        <input type="hidden" name="userId" value={data.userId}>
        <button type="submit">Submit</button>
    </form>
</Card>

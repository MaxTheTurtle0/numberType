<script>

    import Card from "$lib/components/card.svelte";

</script>

<Card>
    <h1>Add Contact</h1>
    <form action="?/createContact" method="post">
        <input type="text" name="name" placeholder="name">
        <input type="tel" name="phone" placeholder="tel number">
        <button type="submit">Submit</button>
    </form>
</Card>

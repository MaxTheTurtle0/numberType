<script>
    import Nav from "$lib/components/nav.svelte";
</script>

<Nav />
    
<main>
    <slot />
</main>

<style>
    
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 75dvh;
    }

</style>

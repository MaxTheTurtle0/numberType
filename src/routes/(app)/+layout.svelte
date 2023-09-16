<script>
	import { onNavigate } from "$app/navigation";
    import Nav from "$lib/components/nav.svelte";

    onNavigate((navigation) => {
        // @ts-ignore startViewTransition is not in the types
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            // @ts-ignore startViewTransition is not in the types
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });

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
        height: 100dvh;
    }

</style>

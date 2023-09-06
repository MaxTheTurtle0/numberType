<script>

    import { goto } from "$app/navigation";

</script>

<header>
    <nav>
        <ul>
            <li><button type="button" on:click={() => goto("/")}>Practice</button></li>
            <li><button type="button" on:click={() => goto("/contacts")}>Contacts</button></li>
        </ul>
    </nav>
</header>

<style>
    
    header {
        height: 10dvh;
    }    

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    ul {
        display: flex;
        gap: 1rem;
    }

    li {
        list-style: none;
    }
    
</style>
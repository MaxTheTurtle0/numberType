<script>

    import { goto } from "$app/navigation";

</script>

<header>
    <nav>
        <ul>
            <li><button type="button" on:click={() => goto("/")}>Practice</button></li>
            <li><button type="button" on:click={() => goto("/contacts")}>Contacts</button></li>
            <li><button type="button" on:click={() => goto("/contacts/add")}>Add Contact</button></li>
            <!-- Search not working yet (didn't create an API endpoint yet) --> 
            <li><input type="search" placeholder="Search"></li>
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

    @media (max-width: 860px) {
        button {
            width: fit-content;
            padding: 0.5rem 1rem;
        }
        
        ul {
            gap: 0.5rem;
        }
    }
    
</style>

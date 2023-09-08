<script>

    import { goto } from "$app/navigation";

    /**
     * Search contacts by name
     * @param {Event} event 
     */
    async function searchContacts(event) {
        // @ts-ignore
        const contacts = await fetch(`/api/contacts?name=${event.target.value}`).then(response => response.json());

        const searchResults = document.querySelector(".search-results");

        if (searchResults) {
            searchResults.innerHTML = "";
            contacts.forEach(contact => {
                const contactElement = document.createElement("div");
                contactElement.innerHTML = `<h2>${contact.name}</h2>`;
                searchResults.appendChild(contactElement);
            });
        }
    }

</script>

<header>
    <nav>
        <button aria-label="Menu" aria-expanded="false" class="burger-menu">
            <span></span>
        </button>
        <ul>
            <li class="practice"><button type="button" on:click={() => goto("/")}>Practice</button></li>
            <li class="contacts"><button type="button" on:click={() => goto("/contacts")}>Contacts</button></li>
            <li class="search"><input type="search" placeholder="Search" on:input={searchContacts}><div class="search-results"></div></li>
            <li class="add"><button type="button" on:click={() => goto("/contacts/add")}>+</button></li>
        </ul>
    </nav>
</header>

<style> 

    header {
        margin-top: 2rem;
        height: 10dvh;
    }    

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    ul {
        display: grid;
        grid-template-columns: 180px 180px 50px;
        grid-template-areas: 
            "practice contacts add"
            "search search search";
        gap: 1rem;
    }

    .practice {
        grid-area: practice;
    } 

    .practice button {
        width: 100%;
    }

    .contacts {
        grid-area: contacts;
    }

    .contacts button {
        width: 100%;
    }

    .search {
        grid-area: search;
    }

    .add {
        grid-area: add;
    }   

    .add button {
        width: 100%;
        font-size: 2.5rem;
    }

    input {
        width: 100%;
    }

    li {
        list-style: none;
    }

    .burger-menu {
        display: none;
        position: fixed;
        top: 0px;
        left: 0px;
    }

    .burger-menu span {
        display: flex;
        width: 2rem;
        height: 0.25rem;
        background-color: #fff;
        border-radius: 0.25rem;
        transition: all 0.3s ease-in-out;
    }

    span::before, span::after {
        content: "";
        position: absolute;
        width: 2rem;
        height: 0.25rem;
        background-color: #fff;
        border-radius: 0.25rem;
        transition: all 0.3s ease-in-out;
    }

    span::after {
        transform: translateY(0.75rem);
    }

    span::before {
        transform: translateY(-0.75rem);
    }

    .search-results {
        position: absolute;
        z-index: 1;
    }

    @media (max-width: 500px) {
        button {
            width: fit-content;
            padding: 0.5rem;
        }

        .burger-menu {
            display: block;
        }

        ul {
            display: none;
        }
    }
    
</style>

<script>

    import { goto } from "$app/navigation";
    import { page } from "$app/stores";      
	import { signOut } from "@auth/sveltekit/client";

    /**
     * Search contacts by name and display results
     * @param {Event} event 
     */
    async function searchContacts(event) { 

        const userId = $page.data.userId;

        // @ts-ignore
        const input = event.target.value;

        const searchResults = document.querySelector(".search-results");
        
        if (!searchResults) return;

        searchResults.innerHTML = "";

        if (!input || input.length === 0) return;

        const contacts = await fetch(`/api/contacts?name=${input}&userId=${userId}`).then(response => response.json());

        const contactElement = document.createElement("div");
        
        if (!contacts || contacts.length === 0) {
            contactElement.innerHTML = "<h2>No results</h2>";
            searchResults.appendChild(contactElement);
            return;
        }
        
        contacts.forEach((/** @type {{ name: string, id: number, phone: string }} */ contact) => {
            contactElement.innerHTML += `<h2>${contact.name}</h2>`;
            searchResults.appendChild(contactElement);
        });
    }

</script>

<header>
    <h1>NumberType</h1>
    <input type="checkbox" id="burger-menu-checkbox">
    <label for="burger-menu-checkbox">
        <span></span>
    </label>
    <nav>
        <ul>
            <li><button type="button" on:click={() => goto("/")}>Practice</button></li>
            <li><button type="button" on:click={() => goto("/contacts")}>Contacts</button></li>
            <li>
                <div class="search">
                    <input type="search" placeholder="Search" on:input={searchContacts}>
                    <button class="sign-out" title="sign out" type="button" on:click={signOut}></button>
                    <button class="add-btn" title="add contact" type="button" on:click={() => goto("/contacts/add")}>+</button>  
                </div>
                <div class="search-results"></div>
            </li>
        </ul>
    </nav>
</header>

<style>
     
    header {
        text-align: center;
        position: fixed;
        z-index: 2;
        width: 100%;
        background-color: #efefef;
    }

    h1 {
        padding: 0.5rem;
    }

    nav {
        position: absolute;
        text-align: left;
        top: 100%;
        background-color: #efefef;
        width: 100%;
        transform: scale(1, 0);
        transform-origin: top;
        transition: transform 0.4s ease-in-out;
    }
  

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;
    }
    
    nav li {
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;
    }

    nav li, nav button {
        opacity: 0;
        transition: opacity 0.18s ease-in-out;
    }

    button {
        width: 300px;
    }

    label {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        margin-left: 0.5rem;
        padding: 0.5rem;
        cursor: pointer;
    }

    label span, label span::before, label span::after {
        display: block;
        background-color: #000;
        height: 2px;
        width: 1.5rem;
    }

    label span::before, label span::after {
        content: "";
        position: absolute;
        transition: transform 0.4s ease;
    }

    label span::before {
        transform: translateY(-0.5rem);
    }

    label span::after {
        transform: translateY(0.5rem);
    }

    .sign-out {
        background-image: url("/signout.webp");
        background-repeat: no-repeat;
        background-size: calc(100% - 0.8rem);
        background-position: center;
        border: none;
        cursor: pointer;
    } 

    #burger-menu-checkbox {
        display: none;
    }

    #burger-menu-checkbox:checked ~ nav {
        display: block;
        transform: scale(1, 1);
    }

    #burger-menu-checkbox:checked ~ nav li, #burger-menu-checkbox:checked ~ nav button {
        opacity: 1;
        transition: opacity 0.25s ease-in-out 0.18s;
    }

    #burger-menu-checkbox:checked ~ label span {
        background-color: transparent;
    }

    #burger-menu-checkbox:checked ~ label span::before {
        transform: translateY(0) rotate(45deg);
    }

    #burger-menu-checkbox:checked ~ label span::after {
        transform: translateY(0) rotate(-45deg);
    }

    .search-results {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        position: absolute;
        z-index: 1;
        top: 100%; 
        width: 300px;
        max-width: 300px;
        border-radius: 0 0 0.5rem 0.5rem;
        background-color: #efefef;
    }

    .search {
        display: flex;
        align-items: center;
        width: 300px;
        gap: 0.5rem;
    }

    .search input {
        width: 190px;
    }

    .search button {
        font-size: 2.5rem;
        width: 50px;
    }

    @media (min-width: 768px) {
        label {
            display: none;
        }
        
        h1 {
            display: none;
        }

        header {
            display: flex;
            align-items: center;
            height: 60px;
        }

        nav {
            position: static;
            transform: scale(1, 1);
        }

        ul {
            flex-direction: row;
            justify-content: center;
        }

        nav li {
            margin-bottom: 0;
            margin-left: 1rem;
        }

        nav li, nav button {
            opacity: 1;
        }

        button {
            width: 180px;
        }
    }

</style>


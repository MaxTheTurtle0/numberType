<script>
    
    import { goto } from "$app/navigation";

    /** @type {import('./$types').PageData} */
    export let data;
    $: ({ contacts } = data); 

    /** 
     * @param {Event} e
     */
    function searchContacts (e) {
        // @ts-ignore
        const search = e.target.value.toLowerCase().replace(/\W/g, "");
        const filteredContacts = data.contacts.filter(contact => {
            return contact.name.toLowerCase().replace(/\W/g, "").includes(search) || contact.phone.includes(search);
        });
        let searchResults = document.getElementById("search-results");
        // @ts-ignore
        searchResults.innerHTML = "";
        filteredContacts.forEach(contact => {
            // @ts-ignore
            searchResults.innerHTML += 
            `<div class="result">
                <div class="result-content">
                    <h2>${contact.name}</h2>
                    <h3>${contact.phone}</h3>
                </div>
                <form action="?/deleteContact&id=${contact.id}" method="post">
                    <button type="submit" class="delete" aria-label="delete-contact"></button>
                </form>
            </div>`;
        });
    }

    function clearSearch() {
        let search = document.querySelector("input[type=search]");
        // @ts-ignore
        search.value = "";
        let searchResults = document.getElementById("search-results");
        // @ts-ignore
        searchResults.innerHTML = "";
    }

</script>

<div id="search">
    <input type="search" placeholder="Search" on:input={searchContacts} on:blur={clearSearch}>
    <div id="search-results"></div>
</div>

<div id="contacts">
    <h1>Your Contacts</h1>
    {#each contacts as contact}
        <div id="contact">
            <h2>{contact.name}</h2>
            <h3>{contact.phone}</h3>
            <form action="?/deleteContact&id={contact.id}" method="post">
                <button type="submit" class="delete" aria-label="delete-contact"></button>
            </form>
        </div>
    {/each}
    <button type="button" on:click={() => goto("/contacts/add")}>Add Contact</button>
</div>

<style>

    #contacts {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-bottom: auto;
    }

    #contact {
        display: grid;
        grid-template-areas:
            "name delete"
            "phone delete";
        grid-template-columns: 200px 30px;
        gap: 1rem;
    }

    #contact h2 {
        grid-area: name;
    }

    #contact h3 {
        grid-area: phone;
    }

    #contact form {
        grid-area: delete;
    }

    #search-results {
        height: clamp(100px, 20dvh, 250px);
        overflow-y: auto;
    }

    :global(.result) {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    :global(.result-content) {
        max-width: 170px;
    }

    :global(.delete) {
        width: 30px;
        height: 30px;
        background-color: transparent;
        background-image: url("/delete.webp");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        border: none;
    }

    :global(.delete:hover) {
        background-color: #ccc;
    }

</style>
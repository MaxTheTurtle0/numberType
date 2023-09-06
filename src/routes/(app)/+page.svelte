<script>

    /** @type {import('./$types').PageData} */ 
    export let data;

    $: ({ contacts } = data);

    function nextContact() { 
        // @ts-ignore
        let currentContactIndex = contacts.findIndex(contact => contact.id == document.querySelector("input[type=hidden]").value);
        let tmpContacts = contacts.slice(0, currentContactIndex).concat(contacts.slice(currentContactIndex + 1, contacts.length)); 
        const randomIndex = Math.floor(Math.random() * tmpContacts.length);
        // @ts-ignore
        document.querySelector("input[type=tel]").placeholder = tmpContacts[randomIndex]["phone"];
        // @ts-ignore
        document.querySelector("input[type=hidden]").value = tmpContacts[randomIndex]["id"];
        // @ts-ignore
        document.getElementById("contact-name").innerHTML = `Contact Name: ${tmpContacts[randomIndex]["name"]}`
    }

</script>

{#await contacts}
    <div>Loading</div>
{:then contacts}  
    {#if contacts.length === 0}
        <h2>No contacts found</h2>
    {:else}
        <h2 id="contact-name">Contact Name: {contacts[0]["name"]}</h2>
        <form on:submit|preventDefault={nextContact}>
            <input type="hidden" value={contacts[0].id}>
            <input type="tel" placeholder={contacts[0]["phone"]}>
        </form>
    {/if}
{/await}

<style>

    input[type=tel] {
        width: 100%;
        height: 50px;
        font-size: 2rem;
        outline: none;
    }
   
</style>
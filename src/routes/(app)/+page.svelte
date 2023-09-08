<script>
	import Card from '$lib/components/card.svelte';

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
        document.getElementById("contact-name").innerHTML = `${tmpContacts[randomIndex]["name"]}`
    }

</script>

<Card>
    {#if contacts.length === 0}
        <h1>You have no contacts</h1>
    {:else}
        <h1 id="contact-name">{contacts[0]["name"]}</h1>
        <form on:submit|preventDefault={nextContact}>
            <input type="hidden" value={contacts[0].id}>
            <input type="tel" placeholder={contacts[0]["phone"]}>
        </form>
    {/if}
</Card>

<style>

    input[type=tel] {
        width: 100%;
        height: 50px;
        font-size: 2rem;
        outline: none;
    }
   
</style>

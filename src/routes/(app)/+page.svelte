<script>
	import Card from '$lib/components/card.svelte';

    /** @type {import('./$types').PageData} */ 
    export let data;

    $: ({ contacts } = data);

    function nextContact() { 
        // @ts-ignore
        const currentContactIndex = contacts.findIndex(contact => contact.id == document.querySelector("input[type=hidden]").value);
        const tmpContacts = contacts.slice(0, currentContactIndex).concat(contacts.slice(currentContactIndex + 1, contacts.length)); 
        const randomIndex = Math.floor(Math.random() * tmpContacts.length);
        // @ts-ignore
        document.querySelector(".phone").textContent = tmpContacts[randomIndex]["phone"];
        // @ts-ignore
        document.querySelector("input[type=hidden]").value = tmpContacts[randomIndex]["id"];
        // @ts-ignore
        document.getElementById("contact-name").innerHTML = `${tmpContacts[randomIndex]["name"]}`

        // @ts-ignore
        document.querySelector("input[type=tel]").value = "";
    }

</script>

<Card>
    {#if contacts.length === 0}
        <h1>You have no contacts</h1>
    {:else}
        <h1 id="contact-name">{contacts[0]["name"]}</h1>
        <h2 class="phone">{contacts[0]["phone"]}</h2>
        <form on:submit|preventDefault={nextContact}>
            <input type="hidden" value={contacts[0].id}>
            <input type="tel">
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

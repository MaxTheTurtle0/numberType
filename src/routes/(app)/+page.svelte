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
        document.getElementById("contact-name").textContent = `${tmpContacts[randomIndex]["name"]}`
        // @ts-ignore
        document.querySelector("input[type=tel]").value = "";
        // @ts-ignore
        document.querySelector("input[type=tel]").style.borderColor = "rgb(99, 93, 255)";
    }

    function validateInput() {
        // @ts-ignore
        const input = document.querySelector("input[type=tel]").value;
        // @ts-ignore
        const phone = document.querySelector(".phone").textContent;
        // @ts-ignore
        if (!(phone.includes(input))) {
            // @ts-ignore
            document.querySelector("input[type=tel]").style.border = "2px solid red";
        } else {
            // @ts-ignore
            document.querySelector("input[type=tel]").style.borderColor = "rgb(99, 93, 255)";
        }
    }

</script>

<svelte:head>
    <title>NumberType | Practice</title>
</svelte:head>

<Card>
    {#if contacts.length === 0}
        <h1>You have no contacts</h1>
    {:else}
        <h1 id="contact-name">{contacts[0]["name"]}</h1>
        <h2 class="phone">{contacts[0]["phone"]}</h2>
        <form on:submit|preventDefault={nextContact}> 
            <input type="hidden" title="phone-number" value={contacts[0].id}>
            <input type="tel" title="phone-number" name="phone-number" on:input={validateInput} autocomplete="new-password">
        </form>
    {/if}
</Card>

<style>
    h1 {
        text-align: center;
    }

    input[type=tel] {
        width: 100%;
        height: 50px;
        font-size: 2rem;
        outline: none;
    } 
   
</style>

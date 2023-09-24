<script>
	import Card from '$lib/components/card.svelte';        
    
    /** @type {import('./$types').PageData} */ 
    export let data;

    function nextContact() { 
        // @ts-ignore
        const currentContactIndex = contacts.findIndex(contact => contact.id == document.querySelector("input[type=hidden]").value);
        const tmpContacts = data.contacts.slice(0, currentContactIndex).concat(contacts.slice(currentContactIndex + 1, data.contacts.length)); 
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
    {#if data.contacts.length === 0}
        <h1>You have no contacts</h1>
    {:else}
        <h1 id="contact-name">{data.contacts[0]["name"]}</h1>
        <div class="phone-container">
            <label for="checkbox">Show number</label>
            <input type="checkbox" title="show-number"> 
            <h2 class="phone">{data.contacts[0]["phone"]}</h2>
        </div> 
        <form on:submit|preventDefault={nextContact}> 
            <input type="hidden" title="phone-number" value={data.contacts[0].id}>
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

    input[type=checkbox] {
        z-index: 1; 
        width: 1.5rem;
        height: 1.5rem;
    }

    .phone {
        position: absolute;
        opacity: 0;

    }

    input[type=checkbox]:checked + .phone {
        opacity: 1; 
        position: relative;
        transition: opacity 0.5s ease-in-out;
    }

    label {
        font-size: 1.5rem;
    }

    .phone-container {
        display: flex;
        align-items: center;
        gap: 1rem;
        text-align: center;
    }
 
</style>

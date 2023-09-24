<script>
	import Card from '$lib/components/card.svelte';        
    
    /** @type {import('./$types').PageData} */ 
    export let data;
   
    /**
    * @type {boolean}
    */
    let isMatching = true;

    /**
    * @type {string}
    */
    let phoneNumber = data.contacts[0]["phone"];

    /**
    * @type {string}
    */
    let contactName = data.contacts[0]["name"];

    /**
    * @type {number}
    */
    let contactId = data.contacts[0]["id"];

    /**
    * @type {string}
    */
    let userInput = "";

    function nextContact() { 
        const currentContactIndex = data.contacts.findIndex(contact => contact.id == contactId);
        const tmpContacts = data.contacts.slice(0, currentContactIndex).concat(data.contacts.slice(currentContactIndex + 1, data.contacts.length)); 
        const randomIndex = Math.floor(Math.random() * tmpContacts.length);
        
        isMatching = true;

        phoneNumber = tmpContacts[randomIndex]["phone"];
 
        contactName = tmpContacts[randomIndex]["name"];

        contactId = tmpContacts[randomIndex]["id"];
                 
        userInput = "";
    } 
    
    /**
    * @param {string} string1
    * @param {string} string2
    * @returns {boolean}
    */
    function isMatchingStringUntilLength(string1, string2) {
        for (let i = 0; i < string1.length; i++) {
            if (string1[i] !== string2[i]) return false;
        }
        return true;
    }
    
</script>

<svelte:head>
    <title>NumberType | Practice</title>
    <meta name="description" content="Practice typing your contacts' numbers and learn to type numbers without looking at your keyboard">
</svelte:head>

<Card>
    {#if data.contacts.length === 0}
        <h1>You have no contacts</h1>
    {:else}
        <h1 id="contact-name">{contactName}</h1>
        <div class="phone-container">
            <label for="show-number">Show number</label>
            <input type="checkbox" title="show-number" id="show-number"> 
            <h2 class="phone">{phoneNumber}</h2>
        </div> 
        <form on:submit|preventDefault={nextContact}> 
            <input type="hidden" bind:value={contactId}>
            <input class={isMatching ? '' : 'wrong'} type="tel" title="phone-number" name="phone-number" bind:value={userInput} on:input={() => isMatching = isMatchingStringUntilLength(userInput, phoneNumber)} autocomplete="new-password">
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

    .wrong {
        border: 2px solid red;
    }
 
</style>

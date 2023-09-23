<script>
    
	import Card from "$lib/components/card.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
    $: ({ contacts } = data); 

</script>

<svelte:head>
    <title>NumberType | Contacts</title>
</svelte:head>

<Card>
    {#if contacts.length === 0}
        <h1>You have no contacts</h1>
    {:else}
    <h1>Your Contacts</h1>
    <div id="contacts">
        {#each contacts as contact}
        <div class="contact" id="${contact.id}">
            <h2>{contact.name}</h2>
            <h3>{contact.phone}</h3>
            <form action="?/deleteContact&id={contact.id}" method="post">
                <button type="submit" class="delete" aria-label="delete-contact"></button>
            </form>
        </div>
        <hr>
    {/each}
    </div>  
    {/if}
</Card>

<style>
    hr {
        width: 100%;
    }

    #contacts {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-height: 50dvh;
        overflow-y: auto;
    }

    .contact {
        display: grid;
        align-items: center;
        grid-template-areas:
            "name phone delete";
        grid-template-columns: 200px 200px 30px;
    }

    h1 {
        text-align: center;
    }

    @media (max-width: 550px) {
        .contact {
            display: grid;
            grid-template-areas:
                "name delete"
                "phone delete";
            grid-template-columns: 200px 30px;
        }  
        
        .contact h2 {
            grid-area: name;
        }

        .contact h3 {
            grid-area: phone;
        }

        .contact form {
            grid-area: delete;
        }
    }
     

    .delete {
        width: 30px;
        height: 30px;
        background-color: transparent;
        background-image: url("/delete.webp");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        border: none;
    }

    .delete:hover {
        background-color: #ccc;
    }

</style>

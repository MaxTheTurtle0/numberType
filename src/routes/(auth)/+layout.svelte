<main>
    <div class="content">
        <slot />
    </div>
    <div class="side">
        <div>
            <h1>Welcome to NumberType!</h1>
            <hr>
            <p>You can store your contacts here and practice typing their numbers.</p>
            <p>This way, you can learn to type numbers without looking at your keyboard!</p>
        </div> 
    </div>
</main>
<footer>
    <p>&copy 2023 by MaxTheTurtle0, All Rights Reserved</p>
</footer>

<style>
   
    footer {
        position: absolute;
        bottom: 0;
    }

    main {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        height: 100dvh;
    }

    .side {
        padding: 1rem;
        background-color: #eaeaea;
    }

    .side div {
        align-items: flex-start; 
        font-weight: bold;
    }

    hr {
        width: 100%;
        border: 1px solid #ccc;
    }

    @media(max-width: 680px) {
        main {
            grid-template-columns: 1fr;
        }
    }

</style>

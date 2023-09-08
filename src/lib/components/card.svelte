<div class="card">
    <slot />
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2.5rem;
        border-radius: 1rem;
        gap: 1rem;
        box-shadow: 
        rgba(0, 0, 0, 0.08) 0px 4.48rem 5.27rem, 
        rgba(0, 0, 0, 0.06) 0px 1.87rem 2.2rem, 
        rgba(0, 0, 0, 0.05) 0px 1rem 1.17rem,
        rgba(0, 0, 0, 0.04) 0px 0.56rem 0.66rem, 
        rgba(0, 0, 0, 0.03) 0px 0.29rem 0.35rem, 
        rgba(0, 0, 0, 0.1) 0px 0px 0.8rem;
    }

    @media(max-width: 500px) {
        .card {
            padding: 1.5rem;
        }
    }
</style>

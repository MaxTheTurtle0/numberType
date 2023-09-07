/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url }) => {
    /** @type {string} */
    const name = url.searchParams.get('name') || '';
    
    if (name === '') return new Response(JSON.stringify({ message: 'Missing name' }), { status: 400 });

    const contacts = await prisma.contact.findMany({
        where: {
            name: {
                contains: name 
            }
        }
    });

    return new Response(JSON.stringify(contacts), { status: 200 }) 
}

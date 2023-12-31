import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url, locals }) => {
    const session = await locals.getSession();
    if (!session?.user) throw error(401, 'Unauthorized');

    /** @type {string} */
    const name = url.searchParams.get('name') || '';
       
    if (!name) return new Response(JSON.stringify({ message: 'Missing name' }), { status: 400 });
    
    /** @type {string} */
    const userId = url.searchParams.get('userId') || '';

    if (!userId) return new Response(JSON.stringify({ message: 'Missing userId' }), { status: 400 });

    const contacts = await prisma.contact.findMany({
        where: {
            name: {
                contains: name 
            },
            userId: userId
        }
    });

    return new Response(JSON.stringify(contacts), { status: 200 }) 
}

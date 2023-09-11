import { prisma } from '$lib/server/prisma';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = async (event) => {
    const session = await event.locals.getSession();
    if (!session?.user) throw redirect(303, "/signin");
     
    const userId = await prisma.session.findMany({
        where: {
            expires: session.expires,
        },
    });

    // @ts-ignore 
    return { 
        contacts: await prisma.contact.findMany({
            where: {
                userId: userId[0].userId
            },
        })
    };
}

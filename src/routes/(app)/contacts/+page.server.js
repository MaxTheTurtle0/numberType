import { fail } from '@sveltejs/kit';
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
            orderBy: {
                name: 'asc'
            },
        }),
        userId: userId[0].userId
    };
}

/** @type {import('./$types').Actions} */
export const actions = {
    deleteContact: async ({ url }) => {
        const id = url.searchParams.get('id');

        if (!id) return fail(400, { message: 'Missing id' });
        
        try {
            await prisma.contact.delete({
                where: {
                    id: Number(id)
                }
            });
        } catch {
            return fail(500, { message: 'Failed to delete contact' });
        }

        return {
            status: 200
        }
    }
};

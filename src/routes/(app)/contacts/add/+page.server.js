import { prisma } from '$lib/server/prisma';
import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = async (event) => {
    const session = await event.locals.getSession();
    if (!session?.user) throw redirect(303, "/signin");
    // @ts-ignore
    const userId = await prisma.session.findMany({
        where: {
            expires: session.expires,
        },
    });

    // @ts-ignore
    return {
        userId: userId[0].userId,
    };
}

/** @type {import('./$types').Actions} */
export const actions = {
    createContact: async ({ request }) => {
        const { name, phone, userId } = Object.fromEntries(await request.formData());
        if (!name || !phone || !userId) return fail(400, { message: 'Missing name, phone or userId' });
        try {
            await prisma.contact.create({
                data: {
                    // @ts-ignore
                    name,
                    // @ts-ignore
                    phone,
                    // @ts-ignore
                    userId,
                }
            })
        } catch {
            return fail(500, { message: 'Failed to create contact' });
        }
        // redirect to contacts page
        throw redirect(303, '/contacts');
    }  
};

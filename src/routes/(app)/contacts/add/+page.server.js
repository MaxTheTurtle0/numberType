import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    createContact: async ({ request }) => {
        const { name, phone } = Object.fromEntries(await request.formData());
        if (!name || !phone) return fail(400, { message: 'Missing name or phone' });
        try {
            await prisma.contact.create({
                data: {
                    // @ts-ignore
                    name,
                    // @ts-ignore
                    phone
                }
            })
        } catch {
            return fail(500, { message: 'Failed to create contact' });
        }

        return {
            headers: {
                location: '/contacts'
            },
            status: 201
        }
    }  
};
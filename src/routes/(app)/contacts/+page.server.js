import { fail } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export async function load() {
    return {
        contacts: await prisma.contact.findMany()
    }
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
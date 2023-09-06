import { prisma } from '$lib/server/prisma';

export async function load() {
    return {
        contacts: await prisma.contact.findMany()
    }
}
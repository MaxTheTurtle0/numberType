import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = async (event) => {
    const session = await event.locals.getSession();
    if (session?.user) throw redirect(303, '/');
    // @ts-ignore
    return {};
}

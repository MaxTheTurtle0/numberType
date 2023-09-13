import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import Twitter from "@auth/core/providers/twitter";
import { GITHUB_ID, GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET, TWITTER_ID, TWITTER_SECRET } from "$env/static/private";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "$lib/server/prisma";

export const handle = SvelteKitAuth({
    adapter: PrismaAdapter(prisma), 
    providers: [
        GitHub({
            clientId: GITHUB_ID,
            clientSecret: GITHUB_SECRET,
        }),
        Google({
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
        }),
        Twitter({
            clientId: TWITTER_ID,
            clientSecret: TWITTER_SECRET,
        }), 
    ],
});

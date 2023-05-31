import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/core/providers/github";
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private";
import { sequence } from "@sveltejs/kit/hooks";
import { redirect } from "@sveltejs/kit";

export const authorization = async ({ event, resolve }) => {
  const session = await event.locals.getSession();
  if (!session && !/\/auth/.test(event.url.pathname))
    throw redirect(307, "/auth/login");

  return resolve(event);
};

export const handle = sequence(
  SvelteKitAuth({
    providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
    pages: {
      signIn: "/auth/login",
    },
  }),
  authorization
);

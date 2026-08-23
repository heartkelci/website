import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const rssFeed = await fetch("https://kelciheart.substack.com/feed");
  return new Response(await rssFeed.text());
};

export const config: Config = {
  path: "/substack-rss",
};

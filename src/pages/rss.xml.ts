import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async (context) => {
  const articles = (await getCollection('blog', ({ data }) => !data.brouillon)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  const siteUrl = context.site ? context.site.toString().replace(/\/$/, '') : 'https://tom-bigot.fr';

  const itemsXml = articles
    .map((article) => {
      const link = `${siteUrl}/blog/${article.id}/`;
      const pubDate = article.data.date.toUTCString();
      const title = article.data.titre;
      const desc = article.data.description;
      return `    <item>
      <title><![CDATA[${title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description><![CDATA[${desc}]]></description>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join('\n');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Tom Bigot — Blog Technique</title>
    <description>Articles, retours d'expérience, ingénierie logicielle et systèmes embarqués par Tom Bigot.</description>
    <link>${siteUrl}/blog/</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <language>fr-FR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${itemsXml}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};

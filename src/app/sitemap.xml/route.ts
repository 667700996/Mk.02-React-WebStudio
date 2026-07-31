import { getSortedPostsData } from '@/lib/posts';
import { portfolioProjects } from '@/lib/portfolioProjects';
import { siteConfig } from '@/lib/siteConfig';

export async function GET() {
  const posts = getSortedPostsData();
  const staticPages = [
    { url: '', priority: 1.0 },
    { url: '/about', priority: 0.8 },
    { url: '/blog', priority: 0.8 },
    { url: '/contact', priority: 0.8 },
    { url: '/privacy', priority: 0.3 },
    { url: '/terms', priority: 0.3 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(({ url, priority }) => {
      return `
        <url>
          <loc>${siteConfig.url}${url}</loc>
          <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
          <priority>${priority}</priority>
        </url>
      `;
    })
    .join('')}
  ${posts
    .map(({ id, date }) => {
      return `
        <url>
          <loc>${siteConfig.url}/blog/${id}</loc>
          <lastmod>${date}</lastmod>
          <priority>0.6</priority>
        </url>
      `;
    })
    .join('')}
  ${portfolioProjects
    .map(({ slug }) => {
      return `
        <url>
          <loc>${siteConfig.url}/work/${slug}</loc>
          <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
          <priority>0.9</priority>
        </url>
      `;
    })
    .join('')}
</urlset>
  `;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

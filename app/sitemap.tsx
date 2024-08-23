import type { MetadataRoute } from 'next'
import {pb} from "@/pb";
import {usePostsStore} from "@/store/usePostsStore";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const posts = await pb.collection('posts').getFullList({
        sort: '-created',
        expand: 'tag',
    });

    const baseSitemap: MetadataRoute.Sitemap = [
        {
            url: 'https://the-complex.agency',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://the-complex.agency/vue',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://the-complex.agency/react',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://the-complex.agency/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ];

    // Добавляем страницы блога в sitemap
    const blogSitemap = posts.map(post => ({
        url: `https://the-complex.agency/blog/${post.id}`,
        lastModified: new Date(post.updated),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...baseSitemap, ...blogSitemap];
}
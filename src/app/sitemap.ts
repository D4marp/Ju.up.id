import type { MetadataRoute } from "next";
// Ubah import berikut
import products from "../data/products.json"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export default  function sitemap(): MetadataRoute.Sitemap {
    const staticSitemap: MetadataRoute.Sitemap = [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8
        },
        {
            url: `${BASE_URL}/product`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
    ]

    const dynamicSitemap =  generateDynamicSitemaps()
    return [...staticSitemap, ...dynamicSitemap]
}

function generateDynamicSitemaps(): MetadataRoute.Sitemap {
    const sitemap: MetadataRoute.Sitemap = []
    const totalSitemaps = Math.ceil(products.length / 25)

    for (let i = 0; i < totalSitemaps; i++) {
        sitemap.push({
            url: `${BASE_URL}/product/sitemap/${i}.xml`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9
        })
    }
    return sitemap

}

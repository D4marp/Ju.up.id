
// Ubah import berikut
import products from "../../data/products.json"
import { MetadataRoute } from "next"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export async function generateSitemaps() {

    const sitemaps = Math.ceil(products.length / 25)
    return Array.from({ length: sitemaps }, (_, id) => ({ id }))
}

export default async function sitemap({
    id,
}: {
    id: number
}): Promise<MetadataRoute.Sitemap> {
    const start = id * 25  
    const end = start + 25

    const sliceProducts = products.slice(start, end)
   
    return sliceProducts.map((product) => ({
        url: `${BASE_URL}/product/${product.judul.replace(/\s+/g, "")}`,
        lastModified: new Date()
    }))
}
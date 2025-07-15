import { ImageResponse } from 'next/og'
import { headers } from 'next/headers'
import products from "../../../data/products.js"

export const runtime = 'edge'

interface Props {
    params: Promise<{ name: string }>
}

export default async function Image({ params }: Props) {
    try {
        const { name } = await params
        
        const product = products.find(item => item.judul.replace(/\s+/g, "") === name)
        if (!product) {
            // Return a default image response for product not found
            return new ImageResponse(
                (
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#f3f4f6',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: '#374151'
                        }}
                    >
                        Product Not Found
                    </div>
                ),
                { width: 600, height: 315 }
            )
        }

        const headersList = await headers()
        const host = headersList.get('host')
        const protocol = host?.startsWith('localhost') ? 'http' : 'https'
        
        // Use the product image directly without fetching
        const imageUrl = product.gambar[0]
        
        return new ImageResponse(
            (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#ffffff',
                        padding: '40px'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '20px'
                        }}
                    >
                        <img 
                            src={`${protocol}://${host}${imageUrl}`}
                            width={400} 
                            height={400}
                            style={{
                                objectFit: 'cover',
                                borderRadius: '12px'
                            }}
                            alt={product.judul}
                        />    
                    </div>
                    <div
                        style={{
                            fontSize: '32px',
                            fontWeight: 'bold',
                            color: '#1f2937',
                            textAlign: 'center'
                        }}
                    >
                        {product.judul}
                    </div>
                    <div
                        style={{
                            fontSize: '18px',
                            color: '#6b7280',
                            textAlign: 'center',
                            marginTop: '10px'
                        }}
                    >
                        {product.deskripsi}
                    </div>
                </div>
            ),
            { 
                width: 600, 
                height: 315
            }
        )
    } catch (error) {
        console.error('Error generating OG image:', error)
        
        // Return fallback image on error
        return new ImageResponse(
            (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#ef4444',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#ffffff'
                    }}
                >
                    Error Loading Image
                </div>
            ),
            { width: 600, height: 315 }
        )
    }
}
import { ImageResponse} from 'next/og'
import { headers } from 'next/headers'
import products  from "@core/data/products.json"

export const runtime = 'edge'

export default async function Image({ params }: { params: { name: string }} ) {

    const product = products.find( item => item.judul.replace(/\s+/g, "") === params.name)
    if (!product) {
        return <div>Product not found</div>;
    }

    const headersList = headers()
    const host = (await headersList).get('host')
    const protocol = host?.startsWith('localhost') ? 'http' : 'https'
    const absoluteUrl = `${protocol}://${host}/${product.gambar[0]}`
    const imgSrc = await fetch(absoluteUrl).then(
        (res) => res.arrayBuffer()
    )

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                
            <img src={`data:image/jpeg;base64,${Buffer.from(imgSrc).toString('base64')}`} width={600} height={315}/>    

            </div>
        ),
        { width: 600, height: 315 }
    )
}
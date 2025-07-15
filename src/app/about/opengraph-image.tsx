import { ImageResponse} from 'next/og'
import { headers } from 'next/headers'

export const runtime = 'edge'

export default async function Image() {
    const headersList = headers()
    const host = (await headersList).get('host')
    const protocol = host?.startsWith('localhost') ? 'http' : 'https'
    const absoluteUrl = `${protocol}://${host}/images/all-varian.jpg`
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
                
            <img src={`data:image/jpeg;base64,${Buffer.from(imgSrc).toString('base64')}`} alt="About Ju.Up" />    

            </div>
        )
    )
}
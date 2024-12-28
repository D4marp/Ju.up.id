// import { Product } from "@core/types/product"
import { Product } from "@core/types/product"
import Image from "next/image"
import Link from "next/link"

interface ProductProps {
    product: Product
}
export const ProductCard:React.FC<ProductProps> = ({product}) => {
    const { judul, gambar, kemasan } = product

    const prices = kemasan.map(item => item.harga)
    const minPrice = Math.min(...prices)
    const judulLink = judul.replace(/\s+/g, "")

    return (
        <div className="">
            <div className="w-full rounded-lg overflow-hidden">
                <Link href={`/product/${judulLink}`}>
                <Image
                    aria-hidden
                    src={gambar[0]}
                    alt={judul}
                    width={1200}
                    height={683}
                    className="object-cover w-full aspect-square"
                />
                </Link>

            </div>
            <div>
                <h2 className="text-sm md:text-lg">{judul} </h2>
                <p className="md:text-lg font-bold">{`mulai dari ${minPrice.toLocaleString()}`} </p>
            </div>
        </div>
    )
}
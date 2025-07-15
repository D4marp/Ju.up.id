'use client'
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import Link from "next/link"

interface ProductRelated {
    judul: string,
    gambar: string
}
interface RelatedProps {
    products: ProductRelated[],  
}

const RelatedProduct: React.FC<RelatedProps> = ({ products }) => {
    return (
        <div>
            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 2.4,
                        spaceBetween: 10
                    },
                    640: {
                        slidesPerView: 3.4,
                        spaceBetween: 16
                    }
                }}
                freeMode={true}
                className="w-full"
            >
                {products.map((product, index) => (
    
                    <SwiperSlide key={index} >
                        <div>
                            <Link href={`/product/${product.judul.replace(/\s+/g, "")}`}>
                                <Image
                                    aria-hidden
                                    src={product.gambar}
                                    alt={product.judul}
                                    width={1400}
                                    height={788}
                                    className="object-cover w-full aspect-square rounded-lg"
                                    
                                />
                            </Link>
                        <div>
                            <h2 className="text-sm md:text-lg">{product.judul} </h2>
                        </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default RelatedProduct

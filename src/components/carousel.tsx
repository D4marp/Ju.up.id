"use client"
import Image from "next/image";
import { Product } from "@core/types/product";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/pagination'

  
  interface CarouselProps {
    products: Product[];
  }

  const Carousel: React.FC<CarouselProps> = ({products}) => {
  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden" suppressHydrationWarning={true}>
      <Swiper
      modules={[Pagination, Autoplay]}
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={10}
        pagination={{ 
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background-color: ${
              index === 0 ? "#6d540b" : "#f7eed3"
            }; width: 15px; height: 15px; margin: 0 5px;"></span>`;
          },
         }}
         autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
         }}
      >
        {products.map((item, index) => (
        <SwiperSlide key={index}>
            <Link href={`/product/${item.judul.replace(/\s+/g, "")}`}>
              <Image
                  aria-hidden
                  src={item.gambar[0]}
                  alt={item.judul}
                  width={1400}
                  height={788}
                  className="object-cover w-full aspect-video"
              />
            </Link>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
  }

  export default Carousel
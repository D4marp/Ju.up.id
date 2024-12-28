import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom } from "swiper/modules";
import 'swiper/css'

interface imageModalProps {
    gambar: string | null,
    isOpen: boolean,
    onClose: () => void
}

const ModalGambar: React.FC<imageModalProps> = ({ gambar, isOpen, onClose }) => {
    if (!isOpen || !gambar) return null

    return (
        <div 
            className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-20 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-out`}
            onClick={onClose} 
        >
            <div className="relative bg-white w-full max-w-6xl mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <Swiper 
                    modules={[Zoom]}
                    zoom={true}
                >
                    <SwiperSlide className="flex justify-center items-center">
                        <div className={`swiper-zoom-container`} 
                        
                    >
                        <Image 
                            src={gambar}
                            alt="selected"
                            width={1400}
                            height={788}
                            className="w-full object-cover"
                        />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-[#f7eed3] text-black hover:text-white w-8 h-8 rounded-full hover:bg-[#f7eed3]/40 z-20"
                > X 
                </button>
            </div>
        </div>
    )
}
export default ModalGambar
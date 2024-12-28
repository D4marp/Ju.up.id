'use client'
import { useState } from "react"
import Image from "next/image"
import ModalGambar from "./modalGambar"

interface GalleryProductProps {
    gambar: string[]
}
const GalleryProductDetail:React.FC<GalleryProductProps> = ({gambar}) => {
    const [activeImage, setActiveImage] = useState(gambar[0])
    const [isOpen, setIsOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const handleThumbClick = (gb: string) => {
        setActiveImage(gb)
    }

    const openModal = (gambar: string) => {
        setSelectedImage(gambar)
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
        setSelectedImage(null)
    }
    
return (
    <div className="w-full flex flex-col gap-3">
        <div className="">
            <div className="w-full rounded-t-lg md:rounded-t-xl overflow-hidden ">
                <Image
                    aria-hidden
                    src={activeImage}
                    alt={`gb active`}
                    width={1400}
                    height={788}
                    className="cursor-pointer object-cover w-full aspect-square md:aspect-video"
                    onClick={() => openModal(`${activeImage}`)}
                />
            </div>
        </div>
        <div className="grid grid-cols-6 gap-3">
            {gambar.map((img, index) => (
                <div key={index} className="relative">
                    <button 
                    onClick={() => handleThumbClick(img)} className="block hover:shadow-lg hover:shadow-gray-500/40">
                        <div className="w-full">
                            <Image
                                aria-hidden
                                src={img}
                                alt={`gb ${index + 1}`}
                                width={1200}
                                height={683}
                                className="object-cover w-full aspect-square"
                            />
                        </div>
                        <div className={`absolute inset-0 ${activeImage === img ? "bg-opacity-60" : "bg-opacity-10"} bg-gray-200 z-10`}></div>
                    </button>
                </div>
            ))}
        </div>
        <ModalGambar 
            gambar={selectedImage}
            isOpen={isOpen}
            onClose={closeModal}
        />
        
    </div>
)
}
export default GalleryProductDetail

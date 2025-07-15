'use client'
import Image from "next/image"

interface KemasanProps {
    gambar: string,
    volume: string
}

const KemasanCard: React.FC<KemasanProps> = ({ gambar, volume }) => {

    return (        
        <div>
            <div className="flex flex-col">
                <div className="w-full rounded-lg overflow-hidden">
                    <Image
                    aria-hidden
                    src={gambar}
                    alt={`kemasan ${volume}`}
                    width={1200}
                    height={683}
                    className="object-cover w-full aspect-square"
                />
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center py-2">
                    <p className="text-sm">{volume} </p>
                </div>
            </div> 
        </div>
    )
}
export default KemasanCard
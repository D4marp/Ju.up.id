import { ReasonItem } from "@core/types/reasonitem"


interface ReasonProps {
    items: ReasonItem[]
}

const AlasanSection: React.FC<ReasonProps> = ({items}) => {
    return (
        <div className="section-container flex flex-col gap-6 max-w-6xl mx-auto">
            <div className="flex flex-col gap-6">
                <h2 className="font-bold text-3xl text-center flex flex-col md:flex-row justify-center md:gap-2">
                <span>Kenapa memilih</span>
                <span>kue kering</span>
                <span>the cookies?</span>
                </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col gap-3  p-3">
                        <div className="w-full flex justify-center items-center">
                            <span className={item.gambar}></span>
                        </div>
                        <h3 className="text-center font-bold">{item.title}</h3>
                        <p>{item.deskripsi}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AlasanSection
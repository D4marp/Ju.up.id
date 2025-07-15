import { ReasonItem } from "@core/types/reasonitem"

interface ReasonProps {
    items: ReasonItem[]
}

const AlasanSection: React.FC<ReasonProps> = ({items}) => {
    const programFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdSG0PYWJ3KiCWo7ZZ0p9ymBaOe78wNXONSi5QlP7rBBjnUog/viewform?usp=preview"
    
    return (
        <div className="section-container flex flex-col gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col gap-6 text-center">
                <h2 className="font-bold text-3xl md:text-4xl">
                    Kesehatan ga cukup hanya dari apa yang kamu minum
                </h2>
                <p className="text-lg md:text-xl max-w-3xl mx-auto">
                    Ju.Up hadir untuk mendampingi perjalanan sehatmu. Yuk, ikut program diet, webinar, dan komunitas yang bikin gaya hidup sehat makin seru!
                </p>
                <a 
                    href={programFormUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-juup-green text-white font-semibold py-3 px-6 rounded-full mx-auto hover:bg-juup-green/90 transition-colors"
                >
                    Gabung Program Sehat
                </a>
            </div>
            <div className="grid md:grid-cols-3 gap-6 place-items-center">
                {items.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow w-full">
                        <div className="w-full flex justify-center items-center">
                            <span className={`${item.gambar} text-juup-green text-4xl`}></span>
                        </div>
                        <h3 className="text-center font-bold text-lg">{item.title}</h3>
                        <p className="text-center text-gray-600">{item.deskripsi}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AlasanSection
import Footer from "@core/components/footer";
import Navbar from "@core/components/navbar";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Who's Behind the Bottle?",
    description: "Who's Behind the Bottle? Lebih dari sekedar jus. Ju.Up bukan sekadar cold-pressed juice. Ini adalah gerakan hidup sehat yang lahir dari kepedulian seorang dokter pada kesehatan masyarakat. Didirikan oleh dr. Azkia Fachrina Hanifa, Ju.Up memadukan buah, sayur, dan bunga alami menjadi minuman yang sehat, enak, dan elegan. Tanpa tambahan gula, pewarna, atau pengawet—Ju.Up mendukung perempuan aktif menjalani gaya hidup holistik melalui produk dan program kesehatan yang menyatu dengan keseharian."
}

export default function AboutPage() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className="py-10 min-h-screen">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="px-5 md:px-8 order-2 lg:order-1">
                        <h2 className="font-bold text-5xl flex flex-col md:flex-row md:gap-3">
                            <span>Who's Behind </span>
                            <span>the Bottle?</span>
                        </h2>
                        <div className="flex flex-col gap-4 pt-10">
                            <p>
                            Lebih dari sekedar jus. Ju.Up bukan sekadar cold-pressed juice. Ini adalah gerakan hidup sehat yang lahir dari kepedulian seorang dokter pada kesehatan masyarakat.
                            </p>
                            <p>
                            Didirikan oleh dr. Azkia Fachrina Hanifa, Ju.Up memadukan buah, sayur, dan bunga alami menjadi minuman yang sehat, enak, dan elegan.
                            </p>
                            <p>
                            Tanpa tambahan gula, pewarna, atau pengawet—Ju.Up mendukung perempuan aktif menjalani gaya hidup holistik melalui produk dan program kesehatan yang menyatu dengan keseharian.
                            </p>
                              <p >
                            Kesehatan ga cukup hanya dari apa yang kamu minum—Ju.Up hadir untuk mendampingi
                            perjalanan sehatmu. Yuk, ikut program diet, webinar, dan komunitas yang bikin gaya hidup
                            sehat makin seru!
                        </p>
                        
                        </div>
                    </div>
                    
                    <div className="order-1 lg:order-2 mr-3">
                        <Image
                            aria-hidden
                            src="/images/HOME/Highlight.png"
                            alt="Who's Behind the Bottle?"
                            width={1400}
                            height={788}
                            className="object-cover w-full md:aspect-video aspect-square shadow-[10px_10px_0_rgb(170,179,150)]"
                        />
                    </div>
                </div>
<a 
    href="https://docs.google.com/forms/d/e/1FAIpQLSdSG0PYWJ3KiCWo7ZZ0p9ymBaOe78wNXONSi5QlP7rBBjnUog/viewform"
    className="inline-block bg-[#AAB396] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all ml-5 md:ml-8"
>
    Gabung Program Sehat
</a>
            </main>
            <Footer />
        </div>
    )
}
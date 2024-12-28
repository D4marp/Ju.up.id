import Footer from "@core/components/footer";
import Navbar from "@core/components/navbar";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Tentang the cookies",
    description: "kue kering kami juga hadir dalam bentuk-bentuk unik, seperti nastar kerang, kastengel berbentuk daun, hingga kue martabak cookies."
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
                            <span>Tentang </span>
                            <span>the cookies</span>
                        </h2>
                        <div className="flex flex-col gap-4 pt-10">
                            <p>
                            Selamat datang di The Cookies! Kami adalah usaha rumahan dari kota Salatiga, Jawa Tengah, yang mengkhususkan diri dalam pembuatan kue kering lezat dan penuh kreasi. Dengan tagline <strong><i>Delicious Freshly Baked</i></strong>, kami selalu mengutamakan kualitas rasa dan menghadirkan sentuhan inovasi di setiap kue yang kami buat.
                            </p>
                            <p>
                            Semua kue kami dibuat berdasarkan pemesanan alias pre-order, jadi setiap gigitan dijamin baru saja keluar dari oven! Selain rasanya yang menggoda, kue-kue kami juga hadir dalam bentuk-bentuk unik, seperti nastar kerang, kastengel berbentuk daun, hingga kue martabak cookies. Beberapa pilihan lainnya yang bisa kamu pesan adalah semprit keju, semprit coklat, kue kacang, garlic cheese cookies, dan masih banyak lagi. Cocok untuk teman minum teh, camilan santai, atau hadiah spesial.
                            </p>
                            <p>
                            Yuk, pesan sekarang dan nikmati kue buatan rumahan dengan cita rasa dan kreasi yang beda dari yang lain!
                            </p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 mr-3">
                        <Image
                            aria-hidden
                            src="/images/all-varian.jpg"
                            alt="tentang the cookies"
                            width={1400}
                            height={788}
                            className="object-cover w-full md:aspect-video aspect-square shadow-[10px_10px_0_rgb(170,179,150)]"
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
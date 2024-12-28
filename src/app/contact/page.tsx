import Sosmed from "@core/components/elements/sosmed";
import Footer from "@core/components/footer";
import Navbar from "@core/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontak the cookies",
    description: "Mau tanya-tanya soal kue kering atau kepoin kreasi terbaru dari The Cookies?"
}

export default function ContactPage() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className="py-10 min-h-screen max-w-5xl mx-auto">
                <div className="px-5 flex flex-col gap-4">
                    <h2 className="font-bold text-5xl">Tetap Terhubung dengan Kami!</h2>
                    <p className="pt-10">
                    Mau tanya-tanya soal kue kering atau kepoin kreasi terbaru dari The Cookies? Yuk, langsung follow akun media sosial Kami!, atau mau langsung pesan? hubungi kami lewat WhatsApp.
                    Chat kami di WA, jangan lupa say hai, ya!
                    </p>
                    <Sosmed />
                </div>
                
            </main>
            <Footer />
        </div>
    )
}
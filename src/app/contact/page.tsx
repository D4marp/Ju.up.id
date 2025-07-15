import Sosmed from "@core/components/elements/sosmed";
import Footer from "@core/components/footer";
import Navbar from "@core/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontak Ju.Up",
    description: "Hubungi kami untuk informasi lebih lanjut tentang Ju.Up"
}

export default function ContactPage() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className="py-10 min-h-screen max-w-5xl mx-auto">
                <div className="px-5 flex flex-col gap-8">
                    <h2 className="font-bold text-5xl">Kontak</h2>
                    <div className="flex flex-col gap-4">
                        <div>
                            <h3 className="font-semibold text-2xl">Ju.Up</h3>
                            <p className="text-gray-600">hello.ju.up@gmail.com</p>
                            <p className="text-gray-600">WhatsApp: 0896-7208-1458</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl mb-2">Social Media</h3>
                            <p className="text-gray-600">Instagram: @ju.up.id</p>
                            <Sosmed />
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl mb-2">Lokasi Kami</h3>
                            <div className="w-full h-[400px] rounded-lg overflow-hidden">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2928247099635!2d110.1524595!3d-6.9763333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e705d5e8b7a1bb7%3A0x74a63b12d1daba1e!2sPraktik%20dr.%20Fahmi%20Tambakboyo%20-%20BITA%20Aesthetic!5e0!3m2!1sen!2sid!4v1710340407099!5m2!1sen!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
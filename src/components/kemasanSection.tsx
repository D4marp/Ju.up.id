import Image from "next/image"

const KemasanSection = () => {
    const programFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdSG0PYWJ3KiCWo7ZZ0p9ymBaOe78wNXONSi5QlP7rBBjnUog/viewform?usp=preview"

    return (
        <div className="section-container flex flex-col gap-8 max-w-7xl mx-auto">
            <div className="flex flex-col gap-6">
                <h2 className="font-bold text-3xl text-center">
                    Kami percaya bahwa kesehatan itu menyeluruh. Itulah kenapa kami hadir bukan hanya dengan produk, tapi juga pendampingan.
                </h2>
                <div className="flex justify-center">
                    <a 
                        href={programFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-juup-green text-white px-6 py-2 rounded-full hover:bg-juup-green/90 transition-colors"
                    >
                        Gabung Program Sekarang
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col gap-4 bg-white rounded-lg shadow-md p-4">
                    <div className="relative h-48">
                        <Image
                            src="/images/PROGRAM/Body Fit.png"
                            alt="Body Fit Program"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-xl">Body Fit</h3>
                        <p className="text-sm">
                            Body Fit dari Ju.Up adalah program diet sehat bersama dokter, khusus untuk kamu yang ingin tampil bugar, tetap happy, dan nggak bingung soal pola makan.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 bg-white rounded-lg shadow-md p-4">
                    <div className="relative h-48">
                        <Image
                            src="/images/PROGRAM/welnes.png"
                            alt="Wellness Lab Program"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-xl">Wellness Lab</h3>
                        <p className="text-sm">
                            Wellness Lab adalah laboratorium hidup sehat ala Ju.Up. Bareng komunitas dan para ahli, kamu bisa ikut senam bareng, ikuti webinar kesehatan tiap bulan, dan dapat ilmu hidup seimbang yang aplikatif.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 bg-white rounded-lg shadow-md p-4">
                    <div className="relative h-48">
                        <Image
                            src="/images/PROGRAM/Up.People.png"
                            alt="Up.People Program"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-xl">Up.People</h3>
                        <p className="text-sm">
                            Komunitas Ju.Up untuk kamu yang ingin hidup lebih sehat, seimbang, dan penuh makna. Di sini kamu bisa saling berbagi pengalaman, ikut kegiatan seru seperti tantangan sehat, mini kelas, sampai diskusi bareng dokter—semua dengan vibe yang hangat dan empowering.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 bg-white rounded-lg shadow-md p-4">
                    <div className="relative h-48">
                        <Image
                            src="/images/PROGRAM/Rejuup.png"
                            alt="Re.Ju.Up Program"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-xl">♻️ Re.Ju.Up</h3>
                        <p className="text-sm">
                            Program cinta bumi dari Ju.Up, di mana setiap mengembalikan 10 botol Ju.Up kosong, kamu akan mendapatkan 1 botol Ju.Up gratis sebagai bentuk penghargaan. Kami percaya, gaya hidup sehat tak hanya tentang apa yang kamu konsumsi—tapi juga tentang bagaimana kamu berkontribusi untuk lingkungan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KemasanSection
import ButtonOrder from "./elements/buttonOrder"

const AboutSection = () => {
    return (
        <div className="section-container max-w-3xl mx-auto">
            <section className="flex flex-col gap-4 pt-10 pb-3">
                <div className="flex flex-col gap-5">
                    <h2 className="font-bold text-5xl max-w-[600px]">Lebih dari sekedar jus. Ju.Up bukan sekadar cold-pressed juice.</h2>
                    <p>Ini adalah gerakan hidup sehat yang lahir dari kepedulian seorang dokter pada kesehatan masyarakat. Didirikan oleh dr. Azkia Fachrina Hanifa, Ju.Up memadukan buah, sayur, dan bunga alami menjadi minuman yang sehat, enak, dan elegan. Tanpa tambahan gula, pewarna, atau pengawet—Ju.Up mendukung perempuan aktif menjalani gaya hidup holistik melalui produk dan program kesehatan yang menyatu dengan keseharian.</p>
                </div>
                <div className="flex justify-start items-center">
                    <ButtonOrder />
                </div>
            </section>
        </div>
      
    )
}

export default AboutSection
import ButtonOrder from "./elements/buttonOrder"

const AboutSection = () => {
    return (
        <div className="section-container max-w-3xl mx-auto">
            <section className="flex flex-col gap-4 pt-10 pb-3">
                <div className="flex flex-col gap-5">
                    <h2 className="font-bold text-5xl max-w-[600px]"> Kue kering the cookies menemani setiap momen anda</h2>
                    <p> the cookies melayani pre-order aneka kue kering terbaik, seperti nastar, kastengel, semprit cookies, sagu keju, dan masih banyak lagi. setiap gigitan membawa kenangan manis dan kehangatan! pesan sekarang dan rasakan kelezatannya</p>
                </div>
                <div className="flex justify-start items-center">
                    <ButtonOrder />
                </div>
            </section>
        </div>
      
    )
}

export default AboutSection
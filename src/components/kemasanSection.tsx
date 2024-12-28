import Image from "next/image"

const KemasanSection = () => {
    return (
        <div className="section-container flex flex-col gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col gap-6">
                <h2 className="font-bold text-3xl text-center flex flex-col gap-1">
                    <span>Pilihan ukuran dan varian the cookies</span>
                    <span>sesuai selera Anda!</span>
                </h2>
                <p className="text-center">
                Temukan kenikmatan dalam setiap gigitan dengan lebih dari 10 varian kue kering The Cookies! Pilih ukuran kemasan yang paling sesuai dengan kebutuhan Anda—mulai dari <span className="text-lg"><strong>kemasan tabung 1300ml, 650ml, hingga 400ml.</strong></span> Apapun pilihan Anda, rasa dan kualitas tetap terbaik!
                </p>
            </div>
            <div className="w-full">
                <Image
                    aria-hidden
                    src="/images/all-varian.jpg"
                    alt="all varian the cookies"
                    
                    width={700}
                    height={500}
                    className="object-cover w-full"
                />
            </div>
        </div>
    )
}

export default KemasanSection
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="h-full w-full relative">
          <Image
              aria-hidden
              src="/images/the-peanuts-hero.jpg"
              alt="kue kastengel"
              width={1400}
              height={788}
              className="object-cover h-full w-full"
          />
          <div>
            <div className="absolute inset-0 bg-black bg-opacity-10 z-10"></div>
            <div className="absolute bottom-14 left-0 px-5 md:px-8 md:py-8 z-20">
              <p className="text-sm md:text-lg  text-white max-w-[250px] md:max-w-[450px] ">kue kering the cookies, dibuat secara homemade, dengan bahan pilihan dan cinta, yang membuat rasa hangat disetiap gigitan</p>
            </div>
          </div>
        </div>
    )
}

export default HeroSection
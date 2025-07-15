import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="h-screen w-full relative overflow-hidden">
          <video
              autoPlay
              muted
              loop
              playsInline
              suppressHydrationWarning={true}
              className="absolute top-0 left-0 w-full h-full object-cover"
          >
              <source src="/images/HOME/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
          <div>
            <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
            <div className="absolute bottom-10 left-0 px-5 md:px-12 md:py-10 z-20">
              <p className="text-2xl md:text-1xl text-white max-w-[500px] md:max-w-[800px] leading-tight font-bold tracking-wide">
                Ini bukan sekedar Jus - Ini Gaya Hidup.
              </p>
            </div>
          </div>
        </div>
    )
}

export default HeroSection
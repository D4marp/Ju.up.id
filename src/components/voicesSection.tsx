import React from 'react'
import Image from 'next/image'

interface TestimonialProps {
    name: string;
    text: string;
    imagePath: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, text, imagePath }) => {
    return (
        <div className="flex flex-col gap-4 bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image 
                        src={imagePath}
                        alt={`${name} profile`}
                        fill
                        className="object-cover"
                    />
                </div>
                <h3 className="font-bold">{name}</h3>
            </div>
            <p className="text-sm">{text}</p>
        </div>
    )
}

const VoicesSection = () => {
    const testimonials = [
        {
            name: "Eny",
            text: "Ini bener enak banget, biasanya minuman sehat tu hambar apalagi tanpa gula. Tapi ini best banget. Cocok di bawa ke kantor bahkan meeting pun tetap keliatan jadi keren",
            imagePath: "/images/voices/dewi.jpeg"
        },
        {
            name: "Nur Fadhila",
            text: "Awal minum kaget, tapi ditegukan kedua merasa ada hal yang ga biasa, jadi bener-bener bikin penasaran dan jadi ingin neguk terus. Ga expect ada rasa kaya gini padahal tanpa gula",
            imagePath: "/images/voices/sri.jpeg"
        },
        {
            name: "Citra Bella",
            text: "Aku suka banget tropical twist, rasa manis yang soft tapia da rasa-rasa kejutan segar nya juga. Bikin ga eneg, dan bikin ga ngantuk nemenin kerja. Bye bye kopi ini mah",
            imagePath: "/images/voices/cb.jpeg"
        },
        {
            name: "Agus",
            text: "Sebagai nutrisionis saya akui ini keren, ga bertele-tele tapi rasanya enak, kandungan gizinya pa. keren",
            imagePath: "/images/voices/cogan.jpeg"
        },
        {
            name: "Afsana",
            text: "Ini bener-bener bisa gantiin kopi, rasa yang unpredictable bikin kita ga ngantuk meski lagi dikejar deadline. Approved banget si kalau dibilang ini akan jadi gaya hidup. Sukses ju.up",
            imagePath: "/images/voices/af.jpeg"
        }
    ];

    return (
        <div className="section-container flex flex-col gap-8 max-w-7xl mx-auto">
            <div className="flex flex-col gap-6">
                <h2 className="font-bold text-3xl text-center">
                    Voices of Ju.Up Lovers
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard 
                        key={index}
                        name={testimonial.name}
                        text={testimonial.text}
                        imagePath={testimonial.imagePath}
                    />
                ))}
            </div>
        </div>
    )
}

export default VoicesSection
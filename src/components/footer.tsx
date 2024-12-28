import Image from "next/image";
import Link from "next/link";
import ButtonOrder from "./elements/buttonOrder";
import Sosmed from "./elements/sosmed";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col p-5 gap-8 bg-[#f7eed3]">
            <div className="grid md:grid-cols-3 gap-4 md:gap-0">
                <div className="flex flex-col gap-2 order-3 md:order-1">
                    <div className="w-[200px]">
                        <Image
                            aria-hidden
                            src={"/logo-v1.png"}
                            alt={"the cookies"}
                            
                            width={200}
                            height={200}
                            className="object-cover w-full"
                        />
                    </div>
                    <Sosmed />
                </div>
                <div className="order-2">
                <ul className="pl-0 flex flex-col">
                        <li className=""><Link href="/">Home</Link> </li>
                        <li className=""><Link href="/about">About</Link></li>
                        <li className=""><Link href="/product">Product</Link></li>
                        <li className=""><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="w-full flex flex-col gap-2 order-1 md:order-3">
                    <p className="flex flex-col"><span>Ciptakan momen manis Anda bersama the cookies. </span>
                        <span>pre-order the cookies favorit Anda sekarang dan nikmati kelezatannya</span>
                    </p>
                    <div className="flex">
                    <ButtonOrder />
                    </div>
                </div>
            </div>
            <div>
            <p className="text-sm text-center">the cookies &copy; 2024</p>
            </div>
        </footer>
    )
}
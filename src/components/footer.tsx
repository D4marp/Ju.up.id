import Image from "next/image";
import Link from "next/link";
import ButtonOrder from "./elements/buttonOrder";
import Sosmed from "./elements/sosmed";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col p-5 gap-8 bg-juup-cream">
            <div className="grid md:grid-cols-3 gap-4 md:gap-0">
                <div className="flex flex-col gap-2 order-3 md:order-1">
                    <div className="w-[200px]">
                        <Image
                            aria-hidden
                            src={"/ju.up.png"}
                            alt={"ju.up"}
                            width={200}
                            height={200}
                            className="object-cover w-full"
                        />
                    </div>
                    <Sosmed />
                </div>
                <div className="order-2">
                <ul className="pl-0 flex flex-col">
                        <li className="hover:text-juup-orange transition-colors"><Link href="/">Home</Link> </li>
                        <li className="hover:text-juup-orange transition-colors"><Link href="/about">About</Link></li>
                        <li className="hover:text-juup-orange transition-colors"><Link href="/product">Product</Link></li>
                        <li className="hover:text-juup-orange transition-colors"><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="w-full flex flex-col gap-2 order-1 md:order-3">
                    <p className="flex flex-col"><span>Bergabunglah dengan gerakan hidup sehat Ju.Up. </span>
                        <span>Pre-order cold-pressed juice favorit Anda sekarang dan rasakan kesegarannya</span>
                    </p>
                    <div className="flex">
                    <ButtonOrder />
                    </div>
                </div>
            </div>
            <div>
            <p className="text-sm text-center text-juup-dark-green">Ju.Up &copy; 2025</p>
            </div>
        </footer>
    )
}
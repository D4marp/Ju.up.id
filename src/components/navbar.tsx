import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <div>
            <div className="max-w-screen-lg w-full mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center px-5 pt-6 gap-3">
                <div className="w-16 md:w-28">
                   <Link href={"/"}>
                   <Image
                        aria-hidden
                        src="/ju.up.png"
                        alt="ju.up"
                        width={70}
                        height={15}
                    />
                   </Link> 
                </div>
                <nav >
                    <ul className="pl-0 flex flex-wrap justify-center">
                        <li className="transition ease-in-out duration-300 px-3 md:px-4 hover:-translate-y-1 hover:text-juup-orange"><Link href="/">Home</Link> </li>
                        <li className="transition ease-in-out duration-300 px-3 md:px-4 hover:-translate-y-1 hover:text-juup-orange"><Link href="/about">About</Link></li>
                        <li className="transition ease-in-out duration-300 px-3 md:px-4 hover:-translate-y-1 hover:text-juup-orange"><Link href="/product">Product</Link></li>
                        <li className="transition ease-in-out duration-300 px-3 md:px-4 hover:-translate-y-1 hover:text-juup-orange"><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
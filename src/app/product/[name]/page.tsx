import products  from "@core/data/products.json"
import Navbar from "@core/components/navbar"
import Footer from "@core/components/footer"
import GalleryProductDetail from "@core/components/galleryProductDetail"
import KemasanCard from "@core/components/kemasanCard"
import ShareButtons from "@core/components/shareButtons"
import ButtonWA from "@core/components/elements/buttonWa"
import RelatedProduct from "@core/components/relatedProduct"


import { Metadata } from "next"


type Props = {
    params: Promise<{ name: string}>
}

function getShortDesc(text: string, maxWord: number, maxChar: number): string {
    const summary = text.split(" ").slice(0, maxWord).join(" ")
    return summary.length > maxChar 
            ? summary.slice(0, maxChar) + "..." 
            : summary + (text.length > summary.length 
                ? "..." : "")
}

export async function generateMetadata(
    { params }: Props
    ): Promise<Metadata> {
        
        const name = (await params).name
        const produk = products.find( item => item.judul.replace(/\s+/g, "") === name)

    if (!produk) {
        return {
            title: "produk tidak ditemukan",
            description: "maaf, produk yang anda cari tidak ada"
        }
    }
    
    const summary = getShortDesc(produk.deskripsi, 10, 100)
    
    return {
        title: produk.judul,
        description: summary
    }
}


export default async function Page({
    params,
}: Props) {
        
    const name = (await params).name
    const product = products.find( item => item.judul.replace(/\s+/g, "") === name)
    if (!product) {
        return <div>Product not found</div>;
    }
    const gambarKemasan = product.kemasan.map(item => item.gambar)
    // menggabungkan array yang berisi url gambar, dan membuang duplikasi
    const gambarProduk = [...new Set([...product.gambar, ...gambarKemasan])]

    const productRelated = products.filter(item => item.judul.replace(/\s+/g, "") !== name)
                            .slice(0,5)
                            .map((produk) => {
        const hargaKemasan = produk.kemasan.map((item) => item.harga)
        const minHarga = Math.min(...hargaKemasan)
        return {
            judul: produk.judul,
            gambar: produk.gambar[0],
            minHarga
        }
    })

    return (
        <div>
            <header className="w-full">
                <Navbar />
            </header>
            <main className="main-container">
                <div className="section-container max-w-6xl mx-auto flex flex-col gap-4 py-5 mb-14">
                    <GalleryProductDetail gambar= {gambarProduk} />
                    <div className="flex flex-col gap-4 pt-4">
                        <h2 className="title-product">{product.judul} </h2>
                        <div>
                            <p className="text-sm md:text-base">Pilihan kemasan:</p>
                            <div className="grid grid-cols-3 gap-4">
                            {product.kemasan.map((pack, i_pack) => (
                                <KemasanCard 
                                    key={i_pack}
                                    gambar={pack.gambar}
                                    volume={pack.volume}
                                    harga={pack.harga} 
                                />
                            ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-sm md:text-base">Deskripsi:</p>
                            {product.deskripsi.split("\n\n").map((p, ip) =>(
                            <p key={ip} className="mb-2 text-sm md:text-base">{p} </p>
                            ))}
                        </div>
                            <ButtonWA pesan={`Hai the cookies, aku mau pesan ${product.judul.replace(" ", "%20")} `} />
                            <ShareButtons />
                    </div>
                </div>
                    <div className="w-full max-w-6xl mx-auto px-3 mb-16">
                        <p className="font-bold text-xl md:text-2xl py-2">Varian lainnya</p>
                        <RelatedProduct products={productRelated} />
                    </div>
            </main>
            <Footer />
        </div>
    )

}

import Carousel from "@core/components/carousel"
import SearchBar from "@core/components/elements/searchBar"
import Footer from "@core/components/footer"
import Navbar from "@core/components/navbar"
import { ProductCard } from "@core/components/productCard"
import KemasanSection from "@core/components/kemasanSection";
// Ubah import berikut
import products from "../../data/products.json"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Gems of Ju.Up",
    description: "Gems of Ju.Up"
}

const NewProduct = products.filter(item => item.statusBaru === true).sort((a, b) => { 
    return b._id.$oid.localeCompare(a._id.$oid)
})

export default function ProductPage() {
    return (
        <div >
            <header className="w-full">
                <Navbar />
            </header>
            <main className="main-container min-h-screen py-8">
                {/* <h1 className="text-xl font-bold text-center mb-6">Gems of Ju.Up</h1> */}
                <div className="mb-8">
                   <Carousel products={NewProduct} />
                </div>
                <div className="section-container max-w-5xl mx-auto">
                    <SearchBar />
                </div>
                <div className="section-container max-w-5xl mx-auto">
                    <section>
                        <div className="grid grid-cols-2 gap-3">
                            {products.sort((a, b) => { 
                                return b._id.$oid.localeCompare(a._id.$oid)
                            })
                            .map((item) => (
                                <ProductCard key={item._id.$oid} product={item} />
                            ))}
                        </div>
                    </section>
                </div>
                <KemasanSection />
            </main>
            <Footer />
        </div>
    )
}
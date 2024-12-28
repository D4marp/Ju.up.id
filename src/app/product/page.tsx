import Carousel from "@core/components/carousel"
import SearchBar from "@core/components/elements/searchBar"
import Footer from "@core/components/footer"
import Navbar from "@core/components/navbar"
import { ProductCard } from "@core/components/productCard"
import products  from "@core/data/products.json"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Product the cookies",
    description: "kue kering kami juga hadir dalam bentuk-bentuk unik, seperti nastar kerang, kastengel berbentuk daun, hingga kue martabak cookies."
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
            <main className="main-container min-h-screen py-10">
                <div className="mb-12">
                   <Carousel products={NewProduct} />
                </div>
                <div className="section-container max-w-6xl mx-auto">
                    <SearchBar />
                </div>
                <div className="section-container max-w-6xl mx-auto">
                    <section>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {products.sort((a, b) => { 
                                return b._id.$oid.localeCompare(a._id.$oid)
                            })
                            .map((item) => (
                                <ProductCard key={item._id.$oid} product={item} />
                            ))}
                        </div>
                    </section>
                </div>

            </main>
            <Footer />
        </div>
    )
}
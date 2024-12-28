'use client'
import { Product } from "@core/types/product"
import products  from "@core/data/products.json"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"


const SearchBar: React.FC = () => {

    const [query, setQuery] = useState<string>("")
    const [fliteredProducts, setFilteredProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(false)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setQuery(value)

        if(value.trim() === "") {
            setFilteredProducts([])
            setLoading(false)
        } else {
            setLoading(true)
        }

        setTimeout(() => {
            const results = products.filter((product) =>
                product.judul.toLowerCase().includes(value.toLowerCase()))
            setFilteredProducts(results)
            setLoading(false)
        }, 500)
    }
    if (!isClient) return null

    return (
        <div className="relative w-full mx-auto">
            <input 
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="cari produk..."
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring focus:ring-[#f7eed3]"
            />

            { isClient && query &&  (
                <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-300 rounded-lg shadow-md max-h-60 overflow-y-auto z-20">
                    { loading ? (
                    <div className="animate-pulse flex items-center gap-1 py-2 px-4">
                        <div className=" h-8 w-8 bg-slate-200 rounded-lg"></div>
                        <div className=" h-3 w-full bg-slate-200 rounded-full"></div>
                    </div>
                    ) : fliteredProducts.length > 0 ? (
                        <ul>
                            {fliteredProducts.map((product) => (
                            <Link href={`/product/${product.judul.replace(/\s+/g, "")}`} key={product._id.$oid}>
                                <li className="px-4 py-2 cursor-pointer hover:bg-slate-100 flex items-center gap-1">
                                    <div className="w-8">
                                        <Image
                                            aria-hidden
                                            src={product.gambar[0]}
                                            alt={product.judul}
                                            width={100}
                                            height={100}
                                            className="object-cover w-full aspect-square rounded-lg"
                                            
                                        />
                                    </div>
                                    <div>{product.judul}</div>
                                    
                                </li>
                            </Link>
                            ))}
                        </ul>
                    ) : (
                        <div className="flex items-center px-4 py-2 text-slate-400">produk tidak ditemukan</div>
                    )}
                </div>
            )}
        </div>
    )
}
export default SearchBar
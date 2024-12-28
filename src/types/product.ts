

interface Kemasan {
    volume: string,
    gambar: string,
    harga: number
}
export interface Product {
    _id: { $oid: string }
    judul: string,
    deskripsi: string,
    gambar:string[],
    kemasan: Kemasan[],
    statusPopuler: boolean,
    statusBaru: boolean,
    kategori: string

}
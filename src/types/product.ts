

interface Kemasan {
    volume: string,
    gambar: string,
    harga: number
}

export interface Product {
    _id: { $oid: string }
    judul: string,
    manfaat?: string,  // Tambahkan field ini
    kalori?: string,   // Tambahkan field ini
    deskripsi: string,
    gambar: string[],
    kemasan: Kemasan[],
    statusPopuler: boolean,
    statusBaru: boolean,
    kategori: string
}
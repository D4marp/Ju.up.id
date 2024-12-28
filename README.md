# NextJs Web Katalog 

Ini adalah project pertama saya menggunakan **Next.js** dan **TypeScript**, yaitu sebuah web katalog dengan produk kue kering. Web ini dirancang untuk menampilkan daftar produk kue kering dengan fitur pre-order melalui tombol WhatsApp.  

## Konsep  
Web ini menampilkan berbagai halaman:  
- **Home:** Halaman utama dengan pengenalan singkat.  
- **Product:** Halaman daftar produk dalam bentuk grid dengan fitur carousel produk baru dan pencarian produk.  
- **About:** Halaman tentang informasi bisnis.  
- **Contact:** Halaman kontak untuk menghubungi via WhatsApp atau email.  

### Halaman Produk  
- Menampilkan daftar produk kue kering dalam grid.  
- Setiap produk memiliki halaman detail.  

### Detail Produk  
- Menampilkan gambar utama produk (besar) dengan beberapa gambar kecil di bawahnya.  
- Gambar utama dapat diklik untuk memunculkan modal berisi gambar yang dapat di-zoom.  
- Informasi produk lengkap dan tombol WhatsApp untuk pre-order.  
- Tombol berbagi ke media sosial dengan ikon berbagi (social share).  

## Teknologi yang Digunakan  
- **Next.js**: Framework React untuk pengembangan web.  
- **TypeScript**: Untuk tipe data yang lebih aman dan pengembangan lebih terstruktur.  
- **Tailwind CSS**: Untuk styling yang cepat dan responsif.  

### Library Pendukung  
1. **Swiper.js**: Membuat carousel produk yang dapat digeser secara horizontal.  
2. **React-share**: Menyediakan tombol berbagi link ke media sosial.  
3. **React-hot-toast**: Menampilkan notifikasi ringan seperti toast.  

## Data Produk  
Data produk disimpan di file JSON pada folder `src/data`. Pendekatan ini dipilih agar pengembangan lebih cepat dan sederhana tanpa fetch API.  

## Fitur Utama  
1. Daftar produk dalam bentuk grid.  
2. Carousel produk baru.  
3. Pencarian produk.  
4. Halaman detail produk dengan gambar zoomable.  
5. Tombol WhatsApp untuk pre-order.  
6. Tombol berbagi media sosial.  
7. Dynamic OpenGraph image dan metadata unik untuk setiap halaman detail produk, yang membantu optimasi saat halaman dibagikan di media sosial.
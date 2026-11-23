# 1nfinity Design Marketplace

Website statis siap deploy ke Vercel.

## Isi folder
- `index.html` — halaman website
- `script.js` — data produk, keranjang, dan formulir custom request

## Sebelum menerima pesanan
1. Buka `script.js`.
2. Ganti `628XXXXXXXXXX` pada `ADMIN_WHATSAPP` dengan nomor WhatsApp admin (format internasional, tanpa + atau spasi).
3. Edit daftar produk pada array `products` di file yang sama untuk mengganti nama, kategori, harga, dan contoh desain.

## Deploy ke Vercel
1. Buat repository baru di GitHub, misalnya `1nfinity-website`.
2. Upload `index.html`, `script.js`, dan `README.md` ke repository tersebut.
3. Buka https://vercel.com lalu masuk menggunakan GitHub.
4. Pilih **Add New → Project**, import repository `1nfinity-website`.
5. Untuk website statis ini, biarkan Framework Preset **Other**, Build Command kosong, Output Directory `.` (atau kosongkan sesuai tampilan Vercel), lalu klik **Deploy**.
6. Setelah selesai, Vercel memberikan alamat publik berakhiran `.vercel.app`.

Catatan: Keranjang pada versi ini hanya berjalan di browser. Checkout/pembayaran online, akun pengguna, database, dan dashboard admin belum diaktifkan.

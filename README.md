# Katalog Produk Mahasiswa

Aplikasi web sederhana untuk menampilkan data anggota tim proyek menggunakan React dan Vite. Aplikasi ini memiliki fitur filter kategori anggota berdasarkan peran, yaitu Mahasiswa, Asisten, dan Alumni.

## Tampilan Aplikasi

Aplikasi menampilkan daftar anggota tim beserta nama, peran, tahun angkatan, dan status keaktifan. Pengguna dapat memilih kategori untuk menyaring anggota yang ditampilkan.

## Teknologi yang Digunakan

- React
- JavaScript
- Vite
- CSS
- Git dan GitHub

## Komponen dan Props

### Komponen `KartuProfil`

File: `src/components/Kartu.Profil.jsx`

Props yang digunakan:

- `nama`: nama anggota tim.
- `peran`: peran anggota, misalnya Mahasiswa, Asisten, atau Alumni.
- `tahun`: tahun angkatan anggota.
- `aktif`: status keaktifan anggota (`true` atau `false`).

### Komponen `App`

File: `src/App.jsx`

Komponen utama yang menampilkan judul aplikasi, pilihan filter kategori, dan daftar anggota tim. Filter kategori digunakan untuk menampilkan anggota berdasarkan perannya.

## Cara Menjalankan Aplikasi

Pastikan Node.js dan Git sudah terpasang.

1. Clone repositori:

   ```bash
   git clone https://github.com/mohamadrosyid/katalog-produk-mahasiswa.git
   ```

2. Masuk ke folder proyek:

   ```bash
   cd katalog-produk-mahasiswa
   ```

3. Instal dependensi:

   ```bash
   npm install
   ```

4. Jalankan aplikasi:

   ```bash
   npm run dev
   ```

5. Buka alamat lokal yang ditampilkan di terminal, biasanya `http://localhost:5173`.

## Build untuk Produksi

Jalankan perintah berikut untuk memastikan aplikasi dapat dibuat menjadi versi produksi:

```bash
npm run build
```

## Penggunaan AI

AI digunakan sebagai alat bantu untuk memahami langkah-langkah pengembangan aplikasi React, implementasi filter kategori, penggunaan Git dan GitHub, serta proses publikasi aplikasi melalui GitHub Pages. Kode dan hasil aplikasi diperiksa kembali melalui VS Code dan browser.

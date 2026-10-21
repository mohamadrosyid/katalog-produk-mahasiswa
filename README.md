# Katalog Produk Mahasiswa

Aplikasi berbasis React dan Vite untuk menampilkan data anggota tim proyek mahasiswa beserta peran, tahun angkatan, dan status keaktifan.

## Tampilan Aplikasi

Aplikasi menampilkan tiga anggota tim:
- Budi Santoso — Mahasiswa, angkatan 2024
- Siti Rahma — Asisten, angkatan 2023
- Andi Pratama — Alumni, angkatan 2021

Tersedia juga pilihan kategori anggota pada halaman aplikasi.

**Demo:** https://mohamadrosyid.github.io/katalog-produk-mahasiswa/

## Teknologi yang Digunakan

- React
- Vite
- JavaScript
- CSS
- Git dan GitHub

## Daftar Komponen dan Props

### 1. App
File: `src/App.jsx`

Komponen utama yang menampilkan judul halaman, pilihan kategori, dan daftar kartu anggota.

### 2. KartuProfil
File: `src/components/Kartu.Profil.jsx`

Komponen untuk menampilkan informasi setiap anggota.

Props yang digunakan:

| Props | Tipe | Keterangan |
|---|---|---|
| `nama` | String | Nama anggota |
| `peran` | String | Peran anggota |
| `tahun` | Number | Tahun angkatan |
| `aktif` | Boolean | Status keaktifan anggota |

Contoh penggunaan:

```jsx
<KartuProfil
  nama="Budi Santoso"
  peran="Mahasiswa"
  tahun={2024}
  aktif={true}
/>
```

## Cara Menjalankan Proyek

Pastikan Node.js dan npm sudah terpasang.

### 1. Clone repository

```bash
git clone https://github.com/mohamadrosyid/katalog-produk-mahasiswa.git
```

### 2. Masuk ke folder proyek

```bash
cd katalog-produk-mahasiswa
```

### 3. Instal dependensi

```bash
npm install
```

### 4. Jalankan aplikasi

```bash
npm run dev
```

Buka alamat lokal yang ditampilkan terminal, biasanya `http://localhost:5173`.

### 5. Build aplikasi

```bash
npm run build
```

## Penggunaan AI

AI digunakan sebagai alat bantu dalam proses pengembangan untuk memahami langkah-langkah Git dan GitHub, membantu konfigurasi publikasi GitHub Pages, serta menyusun dokumentasi README. Kode dan hasil aplikasi perlu diperiksa kembali oleh pengembang.

## Publikasi

Aplikasi dipublikasikan menggunakan GitHub Pages.

Tautan: https://mohamadrosyid.github.io/katalog-produk-mahasiswa/
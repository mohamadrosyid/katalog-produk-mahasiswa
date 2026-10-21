
import KartuProfil from './components/Kartu.Profil.jsx';

export default function App() {
  return (
    <main>
      <h1>Anggota Tim Proyek</h1>

      <section>
        <h2>Filter Kategori Anggota</h2>
        <p>Pilih kategori anggota berdasarkan perannya.</p>

        <label htmlFor="kategori">Kategori: </label>
        <select id="kategori" defaultValue="semua">
          <option value="semua">Semua Anggota</option>
          <option value="Mahasiswa">Mahasiswa</option>
          <option value="Asisten">Asisten</option>
          <option value="Alumni">Alumni</option>
        </select>
      </section>

      <KartuProfil nama="Budi Santoso" peran="Mahasiswa" tahun={2024} aktif={true} />
      <KartuProfil nama="Siti Rahma" peran="Asisten" tahun={2023} aktif={true} />
      <KartuProfil nama="Andi Pratama" peran="Alumni" tahun={2021} aktif={false} />
    </main>
  );
}

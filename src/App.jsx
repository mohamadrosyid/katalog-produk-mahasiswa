
import KartuProfil from './components/Kartu.Profil.jsx';

export default function App() {
  return (
    <main>
      <h1>Anggota Tim Proyek</h1>
      <KartuProfil nama="Budi Santoso" peran="Mahasiswa" tahun={2024} aktif={true} />
      <KartuProfil nama="Siti Rahma" peran="Asisten" tahun={2023} aktif={true} />
      <KartuProfil nama="Andi Pratama" peran="Alumni" tahun={2021} aktif={false} />
    </main>
  );
}

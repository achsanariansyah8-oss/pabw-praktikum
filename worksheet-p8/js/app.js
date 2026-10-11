// ==========================================
// P8 - B. DATA PROFIL MENGGUNAKAN ES6+
// ==========================================

// 1. Data profil menggunakan const
const profil = {
    namaLengkap: "Achsan Ariansyah Hidayatullah",
    peran: "Mahasiswa Informatika Universitas Islam Indonesia",
    keahlian: ["HTML", "CSS", "JavaScript"],
    jumlahProyek: 3,
    deskripsi: null
};

// 2. Menggunakan let untuk variabel yang nilainya berubah
let statusBelajar = "Dasar JavaScript";

statusBelajar = "Mempelajari JavaScript Modern ES6+";

// 3. Menggunakan optional chaining (?.)
// dan nullish coalescing (??)
const namaTampilan = profil?.namaLengkap ?? "Nama belum tersedia";
const peranTampilan = profil?.peran ?? "Peran belum tersedia";
const deskripsiTampilan = profil?.deskripsi ?? "Belum ada deskripsi tambahan";

// 4. Menggunakan template literal
const kalimatPerkenalan =
    `Halo, saya ${namaTampilan}. Saya adalah ${peranTampilan}.`;

console.log("=== DATA PROFIL ===");
console.log(profil);

console.log("\n=== IDENTITAS ===");
console.log(kalimatPerkenalan);

console.log("\n=== KEAHLIAN ===");
console.log(profil.keahlian);

console.log("\n=== JUMLAH PROYEK ===");
console.log(profil.jumlahProyek);

console.log("\n=== DESKRIPSI ===");
console.log(deskripsiTampilan);

console.log("\n=== STATUS BELAJAR ===");
console.log(statusBelajar);

// ==========================================
// P8 - C. PURE FUNCTIONS
// ==========================================

// 1. Membuat kalimat perkenalan
function buatPerkenalan(nama, peran) {
    return `Halo, saya ${nama}. Saya adalah ${peran}.`;
}

// 2. Memformat daftar keahlian
function formatKeahlian(daftarKeahlian) {
    return daftarKeahlian.join(", ");
}

// Menguji kedua fungsi
const hasilPerkenalan = buatPerkenalan(
    profil.namaLengkap,
    profil.peran
);

const hasilKeahlian = formatKeahlian(profil.keahlian);

console.log("\n=== PURE FUNCTIONS ===");
console.log("Hasil perkenalan:", hasilPerkenalan);
console.log("Hasil keahlian:", hasilKeahlian);

// ==========================================
// P8 - D. ARRAY OF OBJECTS
// ==========================================

const daftarProyek = [
    {
        nama: "Koleksi Game Saya",
        kategori: "Web",
        tahun: 2026,
        selesai: true
    },
    {
        nama: "Halaman Profil",
        kategori: "Web",
        tahun: 2026,
        selesai: true
    },
    {
        nama: "Eksperimen JavaScript",
        kategori: "JavaScript",
        tahun: 2026,
        selesai: false
    }
];

console.log("\n=== DAFTAR PROYEK ===");
console.table(daftarProyek);

// D.2a - MAP
const namaProyek = daftarProyek.map((proyek) => proyek.nama);

console.log("\n=== MAP: NAMA PROYEK ===");
console.log(namaProyek);

// D.2b - FILTER
const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai === true);

console.log("\n=== FILTER: PROYEK SELESAI ===");
console.table(proyekSelesai);

// D.2c - FIND
const proyekJavaScript = daftarProyek.find(
    (proyek) => proyek.kategori === "JavaScript"
);

console.log("\n=== FIND: PROYEK JAVASCRIPT ===");
console.log(proyekJavaScript);

// D.3 - SORT TANPA MENGUBAH ARRAY ASLI

// Simpan urutan awal untuk pemeriksaan
const urutanAwal = daftarProyek.map((proyek) => proyek.nama);

// Buat salinan array, kemudian urutkan berdasarkan nama
const proyekTerurut = [...daftarProyek].sort((a, b) =>
    a.nama.localeCompare(b.nama)
);

console.log("\n=== PROYEK TERURUT ===");
console.table(proyekTerurut);

// Periksa apakah urutan array asli tetap sama
const urutanAkhir = daftarProyek.map((proyek) => proyek.nama);

console.log("\n=== PEMERIKSAAN ARRAY ASLI ===");
console.log("Urutan awal:", urutanAwal);
console.log("Urutan akhir:", urutanAkhir);
console.log(
    "Array asli tidak berubah:",
    JSON.stringify(urutanAwal) === JSON.stringify(urutanAkhir)
);

// ==========================================
// P8 - E. DEBUGGING
// ==========================================

// E.1 - Menguji nilai undefined
console.log("\n=== E.1: UNDEFINED ===");

let dataTambahan;

console.log("Nilai awal:", dataTambahan);

const hasilDataTambahan = dataTambahan ?? "Data belum tersedia";

console.log("Setelah penanganan:", hasilDataTambahan);

// E.2 - Menangani elemen DOM yang bernilai null
console.log("\n=== E.2: NULL ===");

const elemenTidakAda = document.querySelector("#elemen-tidak-ada");

console.log("Elemen yang ditemukan:", elemenTidakAda);

const teksElemen = elemenTidakAda?.textContent ?? "Elemen tidak ditemukan";

console.log("Hasil penanganan:", teksElemen);

// E.3 - Menangani input yang bertipe string
console.log("\n=== E.3: INPUT STRING ===");

const nilaiInput = "10";
const nilaiTambahan = "5";

console.log("Nilai input:", nilaiInput);
console.log("Tipe nilai input:", typeof nilaiInput);

// Penjumlahan langsung pada string
const hasilGabung = nilaiInput + nilaiTambahan;

console.log("Penjumlahan langsung:", hasilGabung);

// Konversi string menjadi number
const angkaInput = Number(nilaiInput);
const angkaTambahan = Number(nilaiTambahan);

const hasilJumlah = angkaInput + angkaTambahan;

console.log("Setelah konversi:", hasilJumlah);
console.log("Tipe hasil:", typeof hasilJumlah);

// E.4 - Eksperimen error null
console.log("\n=== E.4: ERROR NULL ===");

const elemenUji = document.querySelector("#elemen-uji");
console.log(elemenUji?.textContent ?? "Elemen tidak ditemukan");

// F.3 - Eksperimen spread operator

const profilAsli = { nama: "Achsan" };

// Tanpa spread operator
const salinanTanpaSpread = profilAsli;
salinanTanpaSpread.nama = "Nama Berubah";

console.log("Tanpa spread:", profilAsli.nama);

// Dengan spread operator
const profilKedua = { nama: "Achsan" };
const salinanDenganSpread = { ...profilKedua };

salinanDenganSpread.nama = "Nama Berubah";

console.log("Dengan spread:", profilKedua.nama);
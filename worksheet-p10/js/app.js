// ==========================================
// P8 - B. DATA PROFIL MENGGUNAKAN ES6+
// ==========================================

// P10: impor fungsi pengambilan data dari data layer.
import { fetchNews } from "./api.js";

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

// 3. Menggunakan optional chaining (?.) dan nullish coalescing (??)
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

function buatPerkenalan(nama, peran) {
    return `Halo, saya ${nama}. Saya adalah ${peran}.`;
}

function formatKeahlian(daftarKeahlian) {
    return daftarKeahlian.join(", ");
}

const hasilPerkenalan = buatPerkenalan(profil.namaLengkap, profil.peran);
const hasilKeahlian = formatKeahlian(profil.keahlian);

console.log("\n=== PURE FUNCTIONS ===");
console.log("Hasil perkenalan:", hasilPerkenalan);
console.log("Hasil keahlian:", hasilKeahlian);

// ==========================================
// P8 - D. ARRAY OF OBJECTS
// ==========================================

export const daftarProyek = [
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
const urutanAwal = daftarProyek.map((proyek) => proyek.nama);
const proyekTerurut = [...daftarProyek].sort((a, b) =>
    a.nama.localeCompare(b.nama)
);

console.log("\n=== PROYEK TERURUT ===");
console.table(proyekTerurut);

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
const hasilGabung = nilaiInput + nilaiTambahan;
console.log("Penjumlahan langsung:", hasilGabung);
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
const salinanTanpaSpread = profilAsli;
salinanTanpaSpread.nama = "Nama Berubah";
console.log("Tanpa spread:", profilAsli.nama);

const profilKedua = { nama: "Achsan" };
const salinanDenganSpread = { ...profilKedua };
salinanDenganSpread.nama = "Nama Berubah";
console.log("Dengan spread:", profilKedua.nama);

// ==========================================
// P10 - D. RENDERING DATA API DAN 4 STATES
// ==========================================

const apiStatus = document.querySelector("#api-status");
const apiList = document.querySelector("#list");

function renderApiPosts(list) {
    // Bersihkan konten lama sebelum render ulang.
    apiList.replaceChildren();

    // Empty state: respons valid tetapi array kosong.
    if (list.length === 0) {
        apiStatus.textContent = "Belum ada data untuk ditampilkan.";
        return;
    }

    // Buat satu kartu untuk setiap post.
    list.forEach((item) => {
        const card = document.createElement("article");
        card.className = "api-card";

        const heading = document.createElement("h3");
        heading.textContent = item.title;

        const description = document.createElement("p");
        description.textContent = item.body;

        card.append(heading, description);
        apiList.append(card);
    });

    apiStatus.textContent = `Data berhasil dimuat: ${list.length} post.`;
}

async function loadAPI() {
    // Loading state.
    apiStatus.textContent = "Memuat data...";
    apiList.replaceChildren();

    console.log("Loading state aktif");

    // Memberi waktu agar loading state terlihat.
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
        const data = await fetchNews();
        renderApiPosts(data);
    } catch (error) {
        apiList.replaceChildren();

        apiStatus.textContent =
            `Gagal memuat data: ${error.message}`;

        console.error("Gagal memuat data API:", error.message);
    }
}

// Fungsi ini dapat dipakai dari Console untuk menguji empty state.
window.testApiEmptyState = () => renderApiPosts([]);

// Mulai mengambil data ketika app.js dimuat.
loadAPI();

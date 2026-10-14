// ============================================
// P9 - A. PEMERIKSAAN ELEMEN DOM
// ============================================

import { daftarProyek } from "./app.js";

const projectList = document.querySelector("#koleksi-game tbody");
const projectForm = document.querySelector("#tambah-game form");
const nameInput = document.querySelector("#nama-game");
const categoryInput = document.querySelector("#genre");
const yearInput = document.querySelector("#tahun-rilis");

const projectContainer = document.querySelector("#daftar-proyek");
const filterRow = document.querySelector("#filter");
const emptyMessage = document.querySelector("#empty-message");

console.log("=== PEMERIKSAAN DOM P9 ===");
console.log("Daftar game:", projectList);
console.log("Formulir:", projectForm);
console.log("Input nama:", nameInput);
console.log("Input genre:", categoryInput);
console.log("Input tahun:", yearInput);
console.log("Daftar proyek:", projectContainer);
console.log("Filter kategori:", filterRow);
console.log("Pesan kosong:", emptyMessage);


// ============================================
// P9 - B. MEMERIKSA DATA PROYEK
// ============================================

console.log("=== DATA PROYEK DARI APP.JS ===");
console.table(daftarProyek);


// ============================================
// P9 - B.1 MEMBUAT KARTU DARI DATA
// ============================================

function buildCard(project) {
    const card = document.createElement("li");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = project.nama;

    const category = document.createElement("p");
    category.textContent = `Kategori: ${project.kategori}`;

    const year = document.createElement("p");
    year.textContent = `Tahun: ${project.tahun}`;

    const status = document.createElement("p");
    status.textContent = `Status: ${
        project.selesai ? "Selesai" : "Belum selesai"
    }`;

    card.append(title, category, year, status);

    return card;
}


// ============================================
// P9 - B.2 MENAMPILKAN DAFTAR PROYEK
// ============================================

function render(list) {
    // Kosongkan daftar terlebih dahulu agar kartu tidak berlipat.
    projectContainer.replaceChildren();

    // Tangani kondisi jika tidak ada proyek.
    if (list.length === 0) {
        emptyMessage.hidden = false;
        return;
    }

    emptyMessage.hidden = true;

    // Buat satu kartu untuk setiap proyek.
    list.forEach((project) => {
        projectContainer.append(buildCard(project));
    });
}


// ============================================
// P9 - C.1 MENANDAI TOMBOL AKTIF
// ============================================

function markActiveButton(activeButton) {
    document.querySelectorAll("#filter button").forEach((button) => {
        button.classList.toggle("active", button === activeButton);
    });
}


// ============================================
// P9 - C.2 EVENT DELEGATION
// Satu listener untuk semua tombol filter.
// ============================================

filterRow.addEventListener("click", (event) => {
    const button = event.target.closest("button");

    // Abaikan klik yang bukan pada tombol.
    if (!button || !filterRow.contains(button)) {
        return;
    }

    const category = button.dataset.category;

    // Pilih proyek sesuai kategori tombol.
    const selected = daftarProyek.filter(
        (project) =>
            category === "all" || project.kategori === category
    );

    // Perbarui tombol aktif dan tampilkan hasil filter.
    markActiveButton(button);
    render(selected);

    console.log("Kategori dipilih:", category);
    console.log("Jumlah proyek:", selected.length);
});


// ============================================
// P9 - B/C. TAMPILKAN SEMUA PROYEK SAAT DIBUKA
// ============================================

render(daftarProyek);
// ============================================
// P9 - A. PEMERIKSAAN ELEMEN DOM
// ============================================

import { daftarProyek } from "./app.js";

const projectList = document.querySelector("#koleksi-game tbody");
const projectForm = document.querySelector("#form-tambah-game");
const nameInput = document.querySelector("#nama-game");
const categoryInput = document.querySelector("#genre");
const yearInput = document.querySelector("#tahun-rilis");

const projectContainer = document.querySelector("#daftar-proyek");
const filterRow = document.querySelector("#filter");
const emptyMessage = document.querySelector("#empty-message");
const submitButton = document.querySelector("#tombol-simpan");

console.log("=== PEMERIKSAAN DOM P9 ===");
console.log("Daftar game:", projectList);
console.log("Formulir:", projectForm);
console.log("Input nama:", nameInput);
console.log("Input genre:", categoryInput);
console.log("Input tahun:", yearInput);
console.log("Daftar proyek:", projectContainer);
console.log("Filter kategori:", filterRow);
console.log("Pesan kosong:", emptyMessage);
console.log("Tombol simpan:", submitButton);


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
    // Hapus kartu lama agar tidak berlipat.
    projectContainer.replaceChildren();

    // Tampilkan pesan jika tidak ada proyek.
    if (list.length === 0) {
        emptyMessage.hidden = false;
        return;
    }

    emptyMessage.hidden = true;

    // Buat kartu untuk setiap proyek.
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
// P9 - C.2 FILTER DENGAN EVENT DELEGATION
// ============================================

let activeCategory = "all";

filterRow.addEventListener("click", (event) => {
    const button = event.target.closest("button");

    // Abaikan klik yang bukan tombol filter.
    if (!button || !filterRow.contains(button)) {
        return;
    }

    activeCategory = button.dataset.category;

    // Pilih proyek sesuai kategori.
    const selected = daftarProyek.filter(
        (project) =>
            activeCategory === "all" ||
            project.kategori === activeCategory
    );

    // Perbarui tombol aktif dan kartu.
    markActiveButton(button);
    render(selected);

    console.log("Kategori dipilih:", activeCategory);
    console.log("Jumlah proyek:", selected.length);
});


// ============================================
// P9 - D.1 MENAMPILKAN SEMUA PROYEK
// ============================================

const allButton = filterRow.querySelector(
    '[data-category="all"]'
);

if (allButton) {
    markActiveButton(allButton);
}

render(daftarProyek);


// ============================================
// P9 - D.2 VALIDASI FORMULIR
// ============================================

// Mengambil elemen pesan kesalahan.
const nameError = document.querySelector("#error-nama-game");
const categoryError = document.querySelector("#error-genre");
const yearError = document.querySelector("#error-tahun-rilis");


// Memeriksa nama game.
function validateName() {
    const value = nameInput.value.trim();

    if (value === "") {
        showError(nameInput, nameError, "Nama game wajib diisi.");
        return false;
    }

    hideError(nameInput, nameError);
    return true;
}


// Memeriksa genre.
function validateCategory() {
    const value = categoryInput.value.trim();

    if (value === "") {
        showError(categoryInput, categoryError, "Genre wajib diisi.");
        return false;
    }

    hideError(categoryInput, categoryError);
    return true;
}


// Memeriksa tahun rilis.
function validateYear() {
    const value = yearInput.value.trim();
    const year = Number(value);
    const currentYear = new Date().getFullYear();

    if (value === "") {
        showError(yearInput, yearError, "Tahun rilis wajib diisi.");
        return false;
    }

    if (!Number.isInteger(year)) {
        showError(yearInput, yearError, "Tahun harus berupa bilangan bulat.");
        return false;
    }

    if (year < 1950 || year > currentYear) {
        showError(
            yearInput,
            yearError,
            `Tahun harus antara 1950 dan ${currentYear}.`
        );
        return false;
    }

    hideError(yearInput, yearError);
    return true;
}


// Menampilkan pesan kesalahan.
function showError(input, errorElement, message) {
    input.setAttribute("aria-invalid", "true");
    errorElement.textContent = message;
    errorElement.hidden = false;
}


// Menghilangkan pesan kesalahan.
function hideError(input, errorElement) {
    input.setAttribute("aria-invalid", "false");
    errorElement.textContent = "";
    errorElement.hidden = true;
}


// Memeriksa seluruh input.
function validateForm() {
    const nameValid = validateName();
    const categoryValid = validateCategory();
    const yearValid = validateYear();

    return nameValid && categoryValid && yearValid;
}


// Memperbarui status tombol Simpan.
function updateSubmitButton() {
    const nameValid = nameInput.value.trim() !== "";
    const categoryValid = categoryInput.value.trim() !== "";
    const year = Number(yearInput.value);
    const currentYear = new Date().getFullYear();

    const yearValid =
        yearInput.value.trim() !== "" &&
        Number.isInteger(year) &&
        year >= 1950 &&
        year <= currentYear;

    submitButton.disabled = !(
        nameValid &&
        categoryValid &&
        yearValid
    );
}


// Validasi ulang ketika input berubah.
nameInput.addEventListener("input", () => {
    validateName();
    updateSubmitButton();
});

categoryInput.addEventListener("input", () => {
    validateCategory();
    updateSubmitButton();
});

yearInput.addEventListener("input", () => {
    validateYear();
    updateSubmitButton();
});


// ============================================
// P9 - D.3 MENANGANI SUBMIT FORMULIR
// ============================================

projectForm.addEventListener("submit", (event) => {
    // Mencegah halaman dimuat ulang.
    event.preventDefault();

    // Hentikan proses jika input tidak valid.
    if (!validateForm()) {
        updateSubmitButton();
        return;
    }

    // Buat objek proyek baru.
    const newProject = {
        nama: nameInput.value.trim(),
        kategori: categoryInput.value.trim(),
        tahun: Number(yearInput.value),
        selesai: false
    };

    // Tambahkan proyek ke array.
    daftarProyek.push(newProject);

    console.log("=== PROYEK BARU DITAMBAHKAN ===");
    console.table(daftarProyek);

    // Tampilkan ulang daftar sesuai filter aktif.
    const selected = daftarProyek.filter(
        (project) =>
            activeCategory === "all" ||
            project.kategori === activeCategory
    );

    render(selected);

    // Kosongkan formulir.
    projectForm.reset();

    // Sembunyikan semua pesan kesalahan.
    hideError(nameInput, nameError);
    hideError(categoryInput, categoryError);
    hideError(yearInput, yearError);

    // Nonaktifkan kembali tombol Simpan.
    updateSubmitButton();

    console.log("Proyek berhasil ditambahkan.");
});


// ============================================
// P9 - D.4 KONDISI AWAL FORMULIR
// ============================================

updateSubmitButton();

console.log("Validasi formulir siap digunakan.");
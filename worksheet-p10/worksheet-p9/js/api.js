// ============================================
// P10 - DATA LAYER: FETCH DAN VALIDASI RESPONSE
// ============================================

// Alamat API disimpan di satu tempat.
const URL = "https://jsonplaceholder.typicode.com/posts?_limit=5";

export async function fetchNews() {
    try {
        const response = await fetch(URL);

        // fetch() tidak otomatis error untuk status 404/500.
        if (!response.ok) {
            throw new Error(`Permintaan API gagal: status ${response.status}`);
        }

        // Membaca response body sebagai data JavaScript.
        const data = await response.json();

        // Worksheet ini merender array, jadi validasi bentuk respons.
        if (!Array.isArray(data)) {
            throw new Error("Format data API tidak sesuai: array diharapkan.");
        }

        return data;
    } catch (error) {
        // Teruskan error agar app.js dapat menampilkan pesan di halaman.
        throw error;
    }
}

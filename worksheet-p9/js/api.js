// ============================================
// P10 - DATA LAYER: FETCH DAN VALIDASI RESPONSE
// ============================================

// Alamat API disimpan di satu tempat.
const URL = "https://jsonplaceholder.typicode.com/posts?_limit=5";

export async function fetchNews() {
    try {
        const response = await fetch(URL);

        // Periksa status HTTP sebelum membaca respons.
        if (!response.ok) {
            throw new Error(
                `Permintaan API gagal: status ${response.status}`
            );
        }

        // Mengubah respons JSON menjadi data JavaScript.
        const data = await response.json();

        // Pastikan respons berbentuk array.
        if (!Array.isArray(data)) {
            throw new Error(
                "Format data API tidak sesuai: array diharapkan."
            );
        }

        return data;
    } catch (error) {
        // Teruskan error agar app.js dapat menanganinya.
        throw error;
    }
}
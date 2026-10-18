// ============================================
// P10 - SHEET B
// Async, Await, and Error Handling
// ============================================

// Alamat API disimpan di satu tempat.
const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=5';

export async function fetchNews() {
    try {
        // Mengirim permintaan ke API.
        const response = await fetch(URL);

        // Memeriksa status HTTP sebelum membaca body.
        if (!response.ok) {
            throw new Error('Status ' + response.status);
        }

        // Membaca respons sebagai JSON.
        const data = await response.json();

        // Mengembalikan data ke app.js.
        return data;
    } catch (error) {
        // Meneruskan error agar dapat ditangani oleh pemanggil.
        throw error;
    }
}
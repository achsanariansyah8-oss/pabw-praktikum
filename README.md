# PABW - Achsan Ariansyah Hidayatullah - 25523011

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web (PABW), dengan satu folder untuk setiap pertemuan.

## Pertemuan 3 - Halaman Profil Saya

Topik halaman saya: koleksi game yang pernah saya mainkan.

- Judul halaman: Koleksi Game Saya
- Deskripsi: Daftar game yang pernah saya mainkan beserta genre, platform, dan status permainan saya.
- Tautan navigasi: Koleksi Game, Tambah Game, Tentang Saya
- Dua bagian utama: Koleksi Game, Tambah Game
- Kolom tabel: Nama Game, Genre, Platform, Status
- Kolom form: Nama Game, Genre, Platform, Status
- Gambar: game-favorit.jpg

## Pertemuan 4 - Design Token Halaman Profil

Pertemuan 4 mengembangkan halaman profil dari Pertemuan 3 menggunakan CSS terpisah dengan sistem design token, layout responsif, komponen form, dan tema terang serta gelap.

### Berkas CSS

- tokens.css
- base.css
- layout.css
- komponen.css
- tema.css

### Struktur CSS

Urutan stylesheet pada halaman:

1. tokens.css
2. base.css
3. layout.css
4. komponen.css
5. tema.css

### Design Token

Token dibagi menjadi dua lapisan.

Lapisan pertama berisi primitive token seperti warna, ukuran teks, jarak, radius, bayangan, dan efek.

Lapisan kedua berisi semantic token yang digunakan oleh komponen halaman.

| Token | Tema terang | Tema gelap | Untuk apa |
|---|---|---|---|
| --color-primary | #1F70B8 | #9BBEFF | Warna utama |
| --color-fg | #172C43 | #F5F7FF | Warna teks utama |
| --color-bg | #DDE9F7 | #03050D | Latar halaman |
| --color-surface | rgba(255,255,255,0.10) | rgba(255,255,255,0.06) | Permukaan kartu dan panel |
| --color-border | rgba(255,255,255,0.45) | #3A4B72 | Garis dan tepi |
| --color-danger | #B4233D | #FF93A2 | Pesan kesalahan dan input tidak valid |
| --color-focus | #1F70B8 | #79E7FF | Fokus keyboard |
| --radius-md | 1rem | 1rem | Radius kartu dan kontrol |
| --space-4 | 1rem | 1rem | Jarak antar elemen |

### Tampilan

Tema halaman menggunakan konsep Liquid Glass dengan permukaan transparan, border lembut, efek blur, bayangan, dan aksen biru serta ungu.

Halaman mendukung:

- Tema terang
- Tema gelap berdasarkan preferensi sistem
- Perubahan tema manual menggunakan checkbox CSS
- Layout responsif
- Navigasi Flexbox
- Tabel responsif
- Form dengan validasi visual
- Fokus keyboard dengan focus-visible
- Validasi input dengan user-invalid

### Aksesibilitas dan Pengujian

Pengujian kontras dilakukan pada kedua tema.

| Pasangan yang diuji | Tema terang | Tema gelap | Ambang |
|---|---:|---:|---:|
| Teks di atas latar halaman | 11.55:1 | 19.03:1 | 4.5:1 |
| Teks tombol di atas warna utama | 4.18:1 | 4.81:1 | 4.5:1 |
| Judul bagian di atas latar | 11.55:1 | 19.03:1 | 4.5:1 |
| Garis fokus terhadap latar sekitarnya | 4.20:1 | 14.24:1 | 3:1 |
| Tepi kartu terhadap latar halaman | 4.57:1 | 3.38:1 | 3:1 |

### Lighthouse

Hasil pengujian akhir:

- Performance: 100
- Accessibility: 100

### Catatan Penggunaan AI

AI digunakan sebagai bantuan untuk memahami CSS, menyusun kode, dan melakukan pemeriksaan terhadap hasil pengerjaan. Keputusan topik, struktur halaman, dan hasil akhir disesuaikan dengan kebutuhan dan rancangan pekerjaan praktikum saya.

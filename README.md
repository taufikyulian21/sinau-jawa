# Sinau Aksara Jawa

Aplikasi pembelajaran interaktif Aksara Jawa berbasis web dengan fitur AI, dibuat menggunakan React dan Vite.

## Pembuat
**Guruh Saputra**  
Siswa Kelas 6  
SD Negeri Batur 01, Kecamatan Getasan

## Fitur
- **Aksara Nglegena**: Kartu interaktif 20 huruf dasar.
- **Pasangan & Sandhangan**: Penjelasan lengkap dan visual.
- **AI Generator**: Membuat contoh kata dan kalimat otomatis (Powered by Google Gemini).
- **Kuis AI**: Soal latihan dinamis yang tidak membosankan.

## Cara Install dan Menjalankan

Pastikan Anda sudah menginstall Node.js di komputer Anda.

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Setup API Key:**
    -   Buat file `.env` di root folder.
    -   Tambahkan: `VITE_GEMINI_API_KEY=your_api_key_here` (Jika menggunakan Vite native) atau set environment variable di Vercel.
    -   *Catatan: Dalam kode ini, API key diambil dari `process.env.API_KEY`. Pastikan konfigurasi bundler Anda mendukung ini.*

3.  **Jalankan Server Development:**
    ```bash
    npm run dev
    ```

4.  **Build untuk Produksi:**
    ```bash
    npm run build
    ```

## Deploy ke Vercel

1.  Install Vercel CLI: `npm i -g vercel`
2.  Jalankan command: `vercel`
3.  Ikuti instruksi di terminal.

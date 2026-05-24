<!-- Lisensi: CC0 - Unsplash (Unsplash License: Free for use in any context.) -->
<!-- Sumber: https://unsplash.com/ -->

# EcoNusa - Website Konservasi Alam Indonesia

Website resmi organisasi nirlaba **EcoNusa** yang berkomitmen pada konservasi alam, pemberdayaan masyarakat adat, dan advokasi kebijakan lingkungan di seluruh Indonesia.

## Struktur Folder

```
nusa/
├── index.html                          # Halaman beranda utama
├── about.html                          # Halaman tentang organisasi
├── programs.html                       # Daftar program unggulan
├── news.html                           # Halaman berita dan artikel
├── contact.html                        # Halaman kontak dan donasi
├── program-hutan-lestari.html          # Detail program hutan
├── program-laut-kita.html              # Detail program laut
├── program-masyarakat-adat.html        # Detail program masyarakat adat
├── program-iklim-energi.html           # Detail program iklim & energi
├── program-pangan-berkelanjutan.html   # Detail program pangan
├── program-edukasi-gerakan.html        # Detail program edukasi
│
├── berita-mangrove-jawa.html           # Berita: Restorasi mangrove
├── berita-coral-raja-ampat.html        # Berita: Terumbu karang raja ampat
├── berita-festival-sumba.html          # Berita: Festival sumba
├── berita-illegal-logging.html         # Berita: Penghentian penebangan ilegal
├── berita-leuser-asean.html            # Berita: Hutan leuser ASEAN
├── berita-nelayan-sulawesi.html        # Berita: Program nelayan sulawesi
│
├── css/
│   └── style.css                       # Stylesheet utama (dark theme, bootstrap override)
│
├── js/
│   └── script.js                       # JavaScript untuk interaksi dan animasi
│
├── assets/
│   ├── images/                         # Folder gambar - semua aset visual
│   │   ├── hero-rainforest.jpg         # Hero: Hutan hujan tropis
│   │   ├── hero-program.jpg            # Hero: Program EcoNusa
│   │   ├── about-community.jpg         # About: Komunitas masyarakat
│   │   ├── program-forest.jpg          # Program: Konservasi hutan
│   │   ├── program-ocean.jpg           # Program: Konservasi laut
│   │   ├── program-mountain.jpg        # Program: Pegunungan & biodiversity
│   │   ├── program-renewable.jpg       # Program: Energi terbarukan
│   │   ├── program-agriculture.jpg     # Program: Pertanian berkelanjutan
│   │   ├── mangrove-jawa.jpg           # Berita: Mangrove di pesisir jawa
│   │   ├── coral-raja-ampat.jpg        # Berita: Terumbu karang
│   │   ├── forest-conservation.jpg     # Berita: Konservasi hutan
│   │   ├── village-indigenous.jpg      # Berita: Masyarakat adat
│   │   └── featured-mangrove.jpg       # Featured: Mangrove story
│   │
│   └── icons/                          # Folder untuk icon custom (jika diperlukan)
│
├── download_images.py                  # Script untuk download gambar dari Unsplash
├── fix_html_images.py                  # Script untuk update path gambar di HTML
└── README.md                           # Dokumentasi proyek (file ini)

```

## Teknologi yang Digunakan

### Frontend Framework & Library
- **Bootstrap 5.3.3** - CSS Framework untuk responsive design
- **Unsplash** - Sumber gambar berkualitas tinggi (lisensi CC0)
- **Google Fonts** - Typography (Inter, Playfair Display)
- **Lucide Icons** - Icon library yang digunakan via CDN

### CSS
- **CSS Variables** - Untuk color scheme dan theme
- **Dark Theme** - Desain modern dengan background hitam dan aksen hijau
- **Responsive Design** - Mobile-first approach dengan Bootstrap

### JavaScript
- **Vanilla JavaScript** - Tidak ada framework JS, hanya JavaScript murni
- **Intersection Observer API** - Untuk scroll animations
- **Form Validation** - Validasi form kontak

## Fitur Utama

### 1. Responsive Design
- Mobile, tablet, dan desktop friendly
- Navigation bar yang collapsible di mobile
- Grid layout yang adaptif

### 2. Animasi & Interaksi
- Fade-in animations saat scroll
- Counter animation untuk statistik
- Navbar yang berubah saat di-scroll
- Filter tabs untuk kategori program dan berita

### 3. Section-Section Utama
- **Hero Section** - Headline dengan call-to-action
- **Program Cards** - Showcase 6 program utama dengan filter
- **News Grid** - Berita terbaru dengan kategori
- **Statistics** - Dampak nyata dengan counter animasi
- **Contact Form** - Form kontak yang fungsional
- **Donation** - Section donasi dengan pilihan nominal

### 4. Warna & Tema
```
Primary Colors:
- Brand Green: #52B788 (hex-600)
- Brand Light Green: #95D5B2 (hex-400)
- Earth Brown: #D4A373
- Dark Background: #0B1D0F
- Card Background: #152019
```

## Cara Menggunakan

### 1. Setup Awal
```bash
# Clone atau copy repository
cd nusa/

# Tidak perlu install dependencies khusus
# Bootstrap dan fonts dimuat dari CDN
```

### 2. Update Gambar
Jika ingin mengunduh/update gambar dari Unsplash:
```bash
# Install dependencies Python (sekali saja)
pip install requests pillow

# Download gambar
python download_images.py

# Fix HTML paths jika diperlukan
python fix_html_images.py
```

### 3. Development Server
```bash
# Menggunakan Python
python -m http.server 8000

# Atau menggunakan Live Server di VS Code
# Klik "Go Live" di status bar
```

Akses di: `http://localhost:8000`

## Customization

### Mengubah Warna
Edit file `css/style.css` - bagian `:root` untuk mengubah CSS variables:
```css
:root {
  --brand-700: #40916C;  /* Ubah warna brand di sini */
  --bg-primary: #0B1D0F; /* Ubah warna background */
  /* ... */
}
```

### Mengubah Font
Edit link Google Fonts di tag `<head>` setiap file HTML

### Menambah Program/Berita Baru
1. Duplicate file `program-template.html` atau `berita-template.html`
2. Edit konten sesuai kebutuhan
3. Update link di `programs.html` atau `news.html`
4. Tambah kategori/filter jika diperlukan

## Performance Tips

### Optimasi Gambar
```bash
# Kompres gambar dengan ImageMagick
mogrify -resize 1920x1080 -quality 85 assets/images/*.jpg

# Atau gunakan online tools:
# - TinyPNG
# - Compressor.io
```

### Lazy Loading
Untuk gambar non-critical, tambahkan `loading="lazy"`:
```html
<img src="..." loading="lazy" alt="...">
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Lisensi Aset

### Gambar
Semua gambar dari **Unsplash** (License: UnsplashPhotos License)
- Free for use in any context
- No permission required
- No attribution required (but appreciated)

### Icons
**Lucide Icons** (License: ISC)
- Open source
- Free to use

### Fonts
**Google Fonts** (License: Open Font License)
- Free to use
- Attribution appreciated

## Contact & Attribution

**EcoNusa Organization**
- Email: info@econusa.or.id
- Website: https://econusa.or.id/
- Address: Jl. Kemang Raya No. 28, Jakarta Selatan

## Catatan Pengembang

### File yang Dapat Diubah
- Semua file `.html` - konten halaman
- `css/style.css` - styling
- `js/script.js` - interaktivitas
- `assets/images/` - gambar

### File yang Sebaiknya Tidak Diubah
- `download_images.py` & `fix_html_images.py` - script helper
- Bootstrap CDN - versi yang sudah ditest

### Debugging Tips

1. **Gambar tidak tampil?**
   - Check console (F12) untuk 404 errors
   - Pastikan path di HTML sesuai dengan struktur folder
   - Jalankan `python fix_html_images.py` untuk auto-fix

2. **Styling tidak bekerja?**
   - Clear browser cache (Ctrl+Shift+Delete)
   - Check apakah Bootstrap CDN loading dengan baik
   - Inspect element untuk melihat computed styles

3. **Form tidak submit?**
   - Check `contact.html` - form handler diperlukan di backend
   - Saat ini form hanya validasi frontend, perlu PHP/Node.js handler

## TODO & Improvement

- [ ] Tambah backend untuk form submission (PHP, Node.js, atau Firebase)
- [ ] Implement actual image optimization pipeline
- [ ] Add PWA support untuk offline access
- [ ] Implement analytics tracking
- [ ] Add multilingual support (English, Sundanese, Javanese)
- [ ] Create admin dashboard untuk manage news/programs
- [ ] Add search functionality
- [ ] Implement social media integration
- [ ] Add testimonial/success stories section

---

**Dibuat dengan ❤️ untuk Indonesia Lestari**

Last Updated: May 23, 2026
#   E c o n u s a  
 
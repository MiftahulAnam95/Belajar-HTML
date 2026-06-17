window.HTMLLabData = (() => {
  const lessons = [
    {
      id: "apa-itu-website",
      icon: "bi-globe2",
      title: "Apa itu Website dan HTML?",
      duration: "10 menit",
      prerequisite: "Tidak perlu tahu coding. Cukup bayangkan kamu sedang membuka halaman di browser.",
      overview: "Kamu mengenal hubungan antara browser, website, halaman, dan HTML sebagai kerangka isi.",
      goal: "Memahami peran HTML sebelum menulis tag pertama.",
      problem: "Banyak pemula langsung menghafal tag tanpa tahu kenapa browser bisa menampilkan halaman.",
      analogy: "HTML seperti kerangka rumah. Sebelum warna cat dan dekorasi, rumah perlu dinding, pintu, dan ruangan.",
      explanation: "HTML adalah bahasa markup untuk memberi struktur pada halaman web. Browser membaca HTML lalu menampilkan teks, gambar, tombol, link, dan bagian-bagian halaman.",
      steps: ["Buka browser yang biasa kamu pakai.", "Bayangkan setiap halaman sebagai dokumen.", "Pahami bahwa HTML menyusun isi dokumen itu.", "CSS akan mengatur tampilan, dan JavaScript akan mengatur interaksi."],
      terms: [
        { term: "Browser", meaning: "Aplikasi untuk membaca dan menampilkan halaman web." },
        { term: "Website", meaning: "Kumpulan halaman yang saling terhubung." },
        { term: "HTML", meaning: "Bahasa markup untuk menyusun struktur halaman." }
      ],
      filename: "index.html",
      code: `<!DOCTYPE html>
<html lang="id">
  <head>
    <title>Halaman Pertamaku</title>
  </head>
  <body>
    <h1>Halo, dunia web!</h1>
    <p>Ini halaman HTML pertama saya.</p>
  </body>
</html>`,
      previewOutput: "Halo, dunia web!\nIni halaman HTML pertama saya.",
      lineNotes: ["DOCTYPE memberi tahu browser bahwa dokumen memakai HTML modern.", "Tag html membungkus seluruh halaman.", "Tag body berisi konten yang terlihat di browser."],
      exercise: "Tulis satu kalimat tentang website yang ingin kamu buat, lalu letakkan di dalam tag p.",
      commonMistakes: ["Mengira HTML adalah bahasa untuk menghitung logika seperti JavaScript.", "Mencampur tujuan HTML, CSS, dan JavaScript terlalu cepat.", "Membuka file kosong lalu bingung karena belum ada struktur dasar."],
      checkpoint: "Kamu bisa menjelaskan bahwa HTML bertugas menyusun isi halaman, bukan mempercantik warna atau membuat logika kompleks.",
      recall: "Jelaskan dengan bahasa sendiri perbedaan HTML, CSS, dan JavaScript.",
      debug: {
        question: "Kenapa halaman kosong jika file HTML belum punya isi di body?",
        hint: "Browser hanya menampilkan konten yang berada di area body.",
        solution: "Tambahkan konten seperti h1 atau p di dalam body agar ada yang terlihat."
      },
      quiz: {
        question: "Peran utama HTML dalam halaman web adalah...",
        options: ["Menyusun struktur konten", "Mengatur database", "Mengubah server", "Mengompres gambar"],
        answer: 0,
        explanation: "HTML memberi struktur konten yang akan dibaca dan ditampilkan browser."
      }
    },
    {
      id: "folder-project",
      icon: "bi-folder2-open",
      title: "Menyiapkan Folder Project",
      duration: "9 menit",
      prerequisite: "Siapkan satu folder kosong di komputer.",
      overview: "Kamu belajar menyimpan file web secara rapi agar mudah dibuka, dipindahkan, dan dikembangkan.",
      goal: "Membuat folder project dengan file index.html sebagai halaman utama.",
      problem: "Pemula sering menyimpan file acak di Desktop sehingga gambar, CSS, dan halaman sulit dicari.",
      analogy: "Folder project seperti map tugas sekolah. Semua bahan satu topik disimpan di tempat yang sama.",
      explanation: "Website statis bisa dimulai dari satu folder berisi index.html. Nama index.html sering dipakai sebagai halaman awal.",
      steps: ["Buat folder bernama belajar-html.", "Buat file index.html di dalamnya.", "Buka file itu dengan browser.", "Buka file yang sama dengan editor teks untuk menulis kode."],
      terms: [
        { term: "Project folder", meaning: "Folder utama tempat semua file website disimpan." },
        { term: "index.html", meaning: "Nama umum untuk halaman utama website." },
        { term: "Path", meaning: "Alamat lokasi file di dalam folder." }
      ],
      filename: "index.html",
      code: `<!DOCTYPE html>
<html lang="id">
  <head>
    <title>Belajar HTML</title>
  </head>
  <body>
    <h1>Folder project saya sudah siap</h1>
  </body>
</html>`,
      previewOutput: "Folder project saya sudah siap",
      lineNotes: ["File bernama index.html menjadi titik awal.", "Title tampil di tab browser.", "h1 menjadi judul utama halaman."],
      exercise: "Buat folder images dan catat untuk apa folder itu akan dipakai.",
      commonMistakes: ["Menyimpan file dengan nama index.html.txt.", "Memindahkan gambar keluar folder project.", "Menulis nama file dengan spasi berlebihan atau huruf besar kecil yang tidak konsisten."],
      checkpoint: "Kamu bisa menemukan file HTML, membukanya di browser, lalu mengeditnya di editor teks.",
      recall: "Kenapa index.html sering dijadikan halaman utama?",
      debug: {
        question: "File sudah dibuat, tetapi browser menampilkan teks kode mentah. Apa penyebab umum?",
        hint: "Periksa ekstensi file.",
        solution: "Pastikan namanya index.html, bukan index.html.txt. Aktifkan tampilan ekstensi file di Windows jika perlu."
      },
      quiz: {
        question: "Nama file yang paling umum untuk halaman utama website statis adalah...",
        options: ["home.docx", "index.html", "style.css", "script.exe"],
        answer: 1,
        explanation: "index.html umum dikenali sebagai halaman utama dalam folder website."
      }
    },
    {
      id: "struktur-dokumen",
      icon: "bi-diagram-3",
      title: "Struktur Dokumen HTML",
      duration: "12 menit",
      prerequisite: "Sudah punya file index.html.",
      overview: "Kamu mengenal doctype, html, head, title, meta, dan body.",
      goal: "Menulis struktur HTML yang lengkap dan rapi.",
      problem: "Tanpa struktur dasar, halaman bisa tetap tampil, tapi sulit dipahami dan kurang siap dikembangkan.",
      analogy: "Dokumen HTML seperti surat resmi: ada identitas dokumen, informasi kepala, lalu isi utama.",
      explanation: "Bagian head berisi informasi untuk browser dan mesin pencari. Bagian body berisi konten yang terlihat oleh pengguna.",
      steps: ["Tulis DOCTYPE di baris pertama.", "Buka tag html dengan atribut lang.", "Isi head dengan meta charset, viewport, dan title.", "Letakkan konten utama di body."],
      terms: [
        { term: "DOCTYPE", meaning: "Deklarasi mode HTML modern." },
        { term: "head", meaning: "Tempat metadata halaman." },
        { term: "body", meaning: "Tempat konten yang terlihat." }
      ],
      filename: "index.html",
      code: `<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Struktur HTML</title>
  </head>
  <body>
    <h1>Struktur halaman sudah lengkap</h1>
  </body>
</html>`,
      previewOutput: "Struktur halaman sudah lengkap",
      lineNotes: ["meta charset membantu karakter Indonesia tampil benar.", "meta viewport membuat halaman lebih siap di layar mobile.", "title memberi nama pada tab browser."],
      exercise: "Ganti title dengan nama halamanmu sendiri, lalu lihat perubahan di tab browser.",
      commonMistakes: ["Menaruh konten terlihat di dalam head.", "Lupa menutup tag body dan html.", "Menghapus meta viewport sehingga tampilan mobile kurang pas."],
      checkpoint: "Kamu bisa menyebut fungsi head dan body tanpa melihat catatan.",
      recall: "Apa saja bagian minimal dari dokumen HTML yang rapi?",
      debug: {
        question: "Judul di tab browser tidak berubah setelah diedit. Bagian mana yang perlu dicek?",
        hint: "Judul tab berasal dari tag title.",
        solution: "Pastikan tag title berada di dalam head dan file yang dibuka adalah file yang sama dengan yang diedit."
      },
      quiz: {
        question: "Konten yang terlihat di browser sebaiknya ditulis di dalam...",
        options: ["head", "meta", "body", "title"],
        answer: 2,
        explanation: "body adalah area untuk konten yang tampil di halaman."
      }
    },
    {
      id: "teks-heading-paragraf",
      icon: "bi-type-h1",
      title: "Heading dan Paragraf",
      duration: "11 menit",
      prerequisite: "Paham struktur dasar HTML.",
      overview: "Kamu belajar menyusun teks dengan judul dan paragraf yang berurutan.",
      goal: "Menggunakan h1 sampai h3 dan p sesuai hierarki informasi.",
      problem: "Halaman pemula sering berisi teks panjang tanpa judul sehingga sulit dipindai.",
      analogy: "Heading seperti judul bab dan subbab di buku. Paragraf adalah isi penjelasannya.",
      explanation: "Heading membantu pengguna dan mesin pencari memahami urutan informasi. h1 biasanya satu kali untuk judul utama halaman.",
      steps: ["Gunakan h1 untuk judul utama.", "Gunakan h2 untuk bagian besar.", "Gunakan h3 untuk subbagian.", "Gunakan p untuk kalimat penjelas."],
      terms: [
        { term: "Heading", meaning: "Tag judul seperti h1, h2, h3." },
        { term: "Paragraf", meaning: "Blok teks penjelasan dengan tag p." },
        { term: "Hierarchy", meaning: "Urutan tingkat pentingnya informasi." }
      ],
      filename: "index.html",
      code: `<h1>Profil Saya</h1>
<p>Saya sedang belajar membuat website dari nol.</p>

<h2>Target Belajar</h2>
<p>Saya ingin bisa membuat halaman profil dan landing page sederhana.</p>

<h3>Langkah Hari Ini</h3>
<p>Menulis struktur HTML yang rapi.</p>`,
      previewOutput: "Profil Saya\nSaya sedang belajar membuat website dari nol.\nTarget Belajar\nSaya ingin bisa membuat halaman profil dan landing page sederhana.",
      lineNotes: ["h1 memberi judul utama.", "p memberi teks biasa.", "h2 dan h3 membuat struktur bertingkat."],
      exercise: "Buat halaman pendek berisi h1, dua h2, dan masing-masing satu paragraf.",
      commonMistakes: ["Memakai h1 berkali-kali hanya karena ukurannya besar.", "Melompat dari h1 langsung ke h4 tanpa alasan.", "Memakai br berulang untuk membuat jarak antar paragraf."],
      checkpoint: "Kamu bisa membuat teks yang mudah dipindai tanpa CSS.",
      recall: "Kenapa heading sebaiknya dipakai berurutan?",
      debug: {
        question: "Semua teks terlihat seperti paragraf biasa. Apa yang mungkin salah?",
        hint: "Periksa nama tag pembuka dan penutup.",
        solution: "Gunakan tag heading yang benar, misalnya <h1>Judul</h1>, bukan <hl>Judul</hl> dengan huruf L."
      },
      quiz: {
        question: "Tag yang paling tepat untuk judul utama halaman adalah...",
        options: ["p", "h1", "strong", "small"],
        answer: 1,
        explanation: "h1 digunakan untuk judul utama halaman."
      }
    },
    {
      id: "link-navigasi",
      icon: "bi-link-45deg",
      title: "Link dan Navigasi",
      duration: "12 menit",
      prerequisite: "Paham teks dasar.",
      overview: "Kamu belajar membuat tautan ke halaman lain, bagian halaman, dan situs luar.",
      goal: "Menggunakan tag a dan atribut href dengan benar.",
      problem: "Website tanpa link hanya seperti satu lembar kertas yang tidak bisa berpindah tempat.",
      analogy: "Link seperti pintu atau petunjuk arah di gedung. Pengunjung memilih pintu untuk pindah ruangan.",
      explanation: "Tag a membuat tautan. Atribut href berisi tujuan tautan, bisa file lokal, alamat website, atau id bagian halaman.",
      steps: ["Tulis teks yang ingin dijadikan link.", "Bungkus dengan tag a.", "Isi href dengan tujuan.", "Uji link di browser."],
      terms: [
        { term: "Anchor", meaning: "Nama lain tag a untuk membuat link." },
        { term: "href", meaning: "Atribut berisi alamat tujuan link." },
        { term: "Relative link", meaning: "Link ke file di folder project." }
      ],
      filename: "index.html",
      code: `<nav>
  <a href="index.html">Beranda</a>
  <a href="tentang.html">Tentang</a>
  <a href="#kontak">Kontak</a>
</nav>

<h1>Website Pertamaku</h1>
<p id="kontak">Email: halo@example.com</p>`,
      previewOutput: "Beranda Tentang Kontak\nWebsite Pertamaku\nEmail: halo@example.com",
      lineNotes: ["nav menandai area navigasi.", "href tentang.html menuju file lain.", "href #kontak menuju elemen dengan id kontak."],
      exercise: "Buat tiga link: ke halaman utama, ke bagian kontak, dan ke situs luar favoritmu.",
      commonMistakes: ["Menulis hreff bukan href.", "Tujuan file salah karena nama file berbeda.", "Lupa menulis tanda # saat menuju id bagian halaman."],
      checkpoint: "Kamu bisa membuat link lokal dan link ke bagian halaman.",
      recall: "Apa fungsi atribut href pada tag a?",
      debug: {
        question: "Link ke tentang.html tidak bekerja. Apa yang dicek pertama?",
        hint: "Nama file harus sama persis.",
        solution: "Pastikan file tentang.html benar-benar ada di folder yang sama, dan penulisan hurufnya sama."
      },
      quiz: {
        question: "Atribut tujuan pada tag a adalah...",
        options: ["src", "alt", "href", "target"],
        answer: 2,
        explanation: "href menyimpan alamat tujuan link."
      }
    },
    {
      id: "gambar-alt",
      icon: "bi-image",
      title: "Gambar dan Atribut Alt",
      duration: "12 menit",
      prerequisite: "Paham folder project dan path.",
      overview: "Kamu belajar menampilkan gambar lokal dan memberi teks alternatif.",
      goal: "Menggunakan img, src, dan alt secara benar.",
      problem: "Gambar sering tidak muncul karena path salah atau file berada di folder berbeda.",
      analogy: "src seperti alamat rumah gambar, sedangkan alt seperti keterangan gambar jika gambarnya tidak bisa dilihat.",
      explanation: "Tag img tidak punya tag penutup. Browser membaca src untuk mencari file gambar dan alt untuk aksesibilitas serta fallback.",
      steps: ["Simpan gambar di folder images.", "Tulis tag img.", "Isi src sesuai lokasi gambar.", "Tambahkan alt yang menjelaskan isi gambar."],
      terms: [
        { term: "src", meaning: "Atribut sumber file gambar." },
        { term: "alt", meaning: "Teks alternatif untuk gambar." },
        { term: "Self closing", meaning: "Tag yang tidak membutuhkan penutup terpisah." }
      ],
      filename: "index.html",
      code: `<h1>Galeri Belajar</h1>
<img src="images/meja-belajar.jpg" alt="Meja belajar dengan laptop dan buku">
<p>Ini tempat saya belajar HTML setiap hari.</p>`,
      previewOutput: "Galeri Belajar\n[Gambar meja belajar]\nIni tempat saya belajar HTML setiap hari.",
      lineNotes: ["src menunjuk ke file di folder images.", "alt menjelaskan isi gambar.", "p memberi keterangan tambahan di bawah gambar."],
      exercise: "Tambahkan satu gambar dan tulis alt yang tetap bermakna walaupun gambar tidak tampil.",
      commonMistakes: ["Path gambar salah karena folder berbeda.", "Mengisi alt dengan kata 'gambar' saja.", "Menulis tag penutup </img> yang tidak diperlukan."],
      checkpoint: "Kamu bisa menjelaskan kenapa alt penting untuk aksesibilitas.",
      recall: "Apa bedanya src dan alt pada tag img?",
      debug: {
        question: "Ikon gambar rusak muncul di browser. Apa kemungkinan penyebabnya?",
        hint: "Browser tidak menemukan file sumber.",
        solution: "Periksa nama file, ekstensi .jpg/.png, dan lokasi folder pada atribut src."
      },
      quiz: {
        question: "Atribut alt pada img dipakai untuk...",
        options: ["Mengubah warna gambar", "Menulis teks alternatif", "Membuat link", "Mengatur database"],
        answer: 1,
        explanation: "alt memberi deskripsi teks ketika gambar tidak bisa dilihat atau dibaca screen reader."
      }
    },
    {
      id: "list",
      icon: "bi-list-check",
      title: "List Berurutan dan Tidak Berurutan",
      duration: "10 menit",
      prerequisite: "Paham tag teks dasar.",
      overview: "Kamu belajar membuat daftar langkah dan daftar item.",
      goal: "Menggunakan ul, ol, dan li sesuai kebutuhan.",
      problem: "Daftar yang ditulis manual dengan tanda minus sulit dibaca oleh browser sebagai struktur.",
      analogy: "ul seperti daftar belanja, ol seperti resep masakan yang harus urut.",
      explanation: "ul dipakai saat urutan tidak penting. ol dipakai saat urutan penting. Setiap item ditulis dengan li.",
      steps: ["Pilih ul jika daftar tidak perlu nomor.", "Pilih ol jika daftar berupa langkah.", "Masukkan setiap item ke dalam li.", "Jangan menaruh teks item langsung di dalam ul tanpa li."],
      terms: [
        { term: "ul", meaning: "Unordered list, daftar tanpa urutan angka." },
        { term: "ol", meaning: "Ordered list, daftar bernomor." },
        { term: "li", meaning: "List item, satu baris item daftar." }
      ],
      filename: "index.html",
      code: `<h1>Rencana Belajar</h1>

<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<ol>
  <li>Buat folder project</li>
  <li>Tulis index.html</li>
  <li>Buka di browser</li>
</ol>`,
      previewOutput: "Rencana Belajar\n- HTML\n- CSS\n- JavaScript\n1. Buat folder project\n2. Tulis index.html\n3. Buka di browser",
      lineNotes: ["ul menampilkan daftar tidak berurutan.", "ol menampilkan daftar bernomor.", "li selalu menjadi anak dari ul atau ol."],
      exercise: "Buat daftar makanan favorit dengan ul dan langkah membuat teh dengan ol.",
      commonMistakes: ["Menulis li di luar ul atau ol.", "Memakai ol untuk daftar yang tidak butuh urutan.", "Membuat nomor manual di dalam ul."],
      checkpoint: "Kamu bisa memilih ul atau ol berdasarkan makna daftar.",
      recall: "Kapan sebaiknya memakai ol dibanding ul?",
      debug: {
        question: "Bullet tidak muncul pada daftar. Apa yang mungkin salah?",
        hint: "Periksa apakah item dibungkus li.",
        solution: "Pastikan setiap item berada dalam <li>...</li> di dalam <ul> atau <ol>."
      },
      quiz: {
        question: "Tag untuk satu item di dalam daftar adalah...",
        options: ["ul", "ol", "li", "dl"],
        answer: 2,
        explanation: "li adalah list item."
      }
    },
    {
      id: "tabel",
      icon: "bi-table",
      title: "Tabel Sederhana",
      duration: "13 menit",
      prerequisite: "Paham struktur bertingkat dalam HTML.",
      overview: "Kamu belajar menyusun data baris dan kolom.",
      goal: "Menggunakan table, thead, tbody, tr, th, dan td.",
      problem: "Tabel cocok untuk data tabular, bukan untuk memaksa layout halaman.",
      analogy: "Tabel seperti lembar nilai: ada judul kolom, baris siswa, dan isi nilai.",
      explanation: "table membungkus tabel. tr membuat baris. th membuat sel header. td membuat sel data.",
      steps: ["Buat table.", "Tambahkan thead untuk judul kolom.", "Isi tbody dengan baris data.", "Gunakan th untuk header dan td untuk data."],
      terms: [
        { term: "tr", meaning: "Table row, satu baris tabel." },
        { term: "th", meaning: "Header cell, judul kolom/baris." },
        { term: "td", meaning: "Data cell, isi data tabel." }
      ],
      filename: "index.html",
      code: `<table>
  <thead>
    <tr>
      <th>Materi</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML Dasar</td>
      <td>Selesai</td>
    </tr>
  </tbody>
</table>`,
      previewOutput: "Materi | Status\nHTML Dasar | Selesai",
      lineNotes: ["thead berisi kepala tabel.", "tr membuat baris.", "th dan td membuat sel di dalam baris."],
      exercise: "Buat tabel jadwal belajar tiga hari dengan kolom hari, topik, dan durasi.",
      commonMistakes: ["Memakai tabel untuk layout seluruh halaman.", "Lupa membungkus th/td dengan tr.", "Jumlah sel tiap baris tidak konsisten."],
      checkpoint: "Kamu bisa membuat tabel dua kolom dan dua baris dengan struktur benar.",
      recall: "Apa perbedaan th dan td?",
      debug: {
        question: "Isi tabel terlihat berantakan. Apa yang dicek?",
        hint: "Setiap baris harus punya struktur sel yang konsisten.",
        solution: "Pastikan semua th dan td berada di dalam tr, dan jumlah kolom tiap baris sesuai."
      },
      quiz: {
        question: "Tag untuk baris tabel adalah...",
        options: ["td", "tr", "th", "tbody"],
        answer: 1,
        explanation: "tr berarti table row."
      }
    },
    {
      id: "form-input",
      icon: "bi-ui-checks",
      title: "Form dan Input",
      duration: "15 menit",
      prerequisite: "Paham label dan teks.",
      overview: "Kamu belajar membuat area input yang ramah pengguna.",
      goal: "Menggunakan form, label, input, textarea, select, dan button.",
      problem: "Form yang tidak punya label membuat pengguna bingung, terutama pengguna screen reader.",
      analogy: "Form seperti formulir pendaftaran. Setiap kotak perlu label agar orang tahu harus mengisi apa.",
      explanation: "form membungkus isian. label menjelaskan input. Atribut for pada label terhubung dengan id pada input.",
      steps: ["Buat form.", "Tambahkan label untuk setiap input.", "Hubungkan label for dengan id input.", "Tambahkan button submit."],
      terms: [
        { term: "form", meaning: "Pembungkus area input." },
        { term: "label", meaning: "Teks penjelas input." },
        { term: "input", meaning: "Elemen isian singkat." }
      ],
      filename: "index.html",
      code: `<form>
  <label for="nama">Nama</label>
  <input id="nama" name="nama" type="text">

  <label for="pesan">Pesan</label>
  <textarea id="pesan" name="pesan"></textarea>

  <button type="submit">Kirim</button>
</form>`,
      previewOutput: "Nama [input]\nPesan [textarea]\n[Kirim]",
      lineNotes: ["for pada label mengarah ke id input.", "name berguna saat data form dikirim.", "button submit menjalankan aksi form."],
      exercise: "Buat form kontak berisi nama, email, pesan, dan tombol kirim.",
      commonMistakes: ["Input tidak punya label.", "for label tidak sama dengan id input.", "Menggunakan placeholder sebagai satu-satunya penjelasan."],
      checkpoint: "Kamu bisa menghubungkan label dan input dengan benar.",
      recall: "Kenapa label penting dalam form?",
      debug: {
        question: "Klik label tidak memindahkan fokus ke input. Apa penyebab umum?",
        hint: "Bandingkan for dan id.",
        solution: "Nilai for pada label harus sama persis dengan id input."
      },
      quiz: {
        question: "Atribut label yang menghubungkannya ke input adalah...",
        options: ["src", "for", "href", "alt"],
        answer: 1,
        explanation: "for pada label harus sama dengan id input."
      }
    },
    {
      id: "semantic-html",
      icon: "bi-layout-text-window",
      title: "Semantic HTML",
      duration: "14 menit",
      prerequisite: "Paham tag dasar seperti div, h1, p, dan a.",
      overview: "Kamu belajar memilih tag berdasarkan makna, bukan hanya tampilan.",
      goal: "Menggunakan header, nav, main, section, article, aside, dan footer.",
      problem: "Jika semua bagian memakai div, struktur halaman sulit dipahami oleh manusia dan alat bantu.",
      analogy: "Semantic HTML seperti label ruangan: dapur, kamar, ruang tamu. Semua ruangan kotak, tapi fungsinya berbeda.",
      explanation: "Tag semantik memberi makna pada bagian halaman. Ini membantu aksesibilitas, SEO, dan keterbacaan kode.",
      steps: ["Gunakan header untuk bagian atas.", "Gunakan nav untuk menu.", "Gunakan main untuk konten utama.", "Gunakan section atau article untuk konten terpisah.", "Gunakan footer untuk bagian bawah."],
      terms: [
        { term: "Semantic", meaning: "Memiliki makna yang jelas." },
        { term: "main", meaning: "Konten utama halaman." },
        { term: "article", meaning: "Konten mandiri seperti artikel atau kartu berita." }
      ],
      filename: "index.html",
      code: `<header>
  <h1>Catatan Belajar</h1>
  <nav>
    <a href="#artikel">Artikel</a>
  </nav>
</header>

<main>
  <article id="artikel">
    <h2>Hari Pertama Belajar HTML</h2>
    <p>Saya mulai memahami struktur halaman.</p>
  </article>
</main>

<footer>
  <p>Dibuat oleh pemula HTML.</p>
</footer>`,
      previewOutput: "Catatan Belajar\nArtikel\nHari Pertama Belajar HTML\nSaya mulai memahami struktur halaman.\nDibuat oleh pemula HTML.",
      lineNotes: ["header menandai bagian pembuka.", "main berisi konten utama.", "footer menandai bagian penutup."],
      exercise: "Ubah halaman profilmu agar memakai header, main, section, dan footer.",
      commonMistakes: ["Memakai section untuk semua hal tanpa heading.", "Masih memakai div untuk navigasi padahal ada nav.", "Menaruh lebih dari satu main tanpa alasan."],
      checkpoint: "Kamu bisa memilih tag semantik sederhana untuk struktur halaman.",
      recall: "Apa manfaat memakai tag semantik?",
      debug: {
        question: "Struktur halaman sulit dibaca meski tampil normal. Apa perbaikannya?",
        hint: "Tampilan normal belum tentu struktur bermakna.",
        solution: "Gunakan tag semantik seperti header, nav, main, section, article, dan footer sesuai fungsi konten."
      },
      quiz: {
        question: "Tag yang paling tepat untuk konten utama halaman adalah...",
        options: ["main", "small", "b", "br"],
        answer: 0,
        explanation: "main menandai area konten utama."
      }
    },
    {
      id: "class-id",
      icon: "bi-braces",
      title: "Div, Span, Class, dan ID",
      duration: "13 menit",
      prerequisite: "Paham tag semantik dasar.",
      overview: "Kamu belajar pembungkus umum dan penanda elemen untuk CSS atau link bagian halaman.",
      goal: "Menggunakan div, span, class, dan id secara tidak berlebihan.",
      problem: "Pemula sering memakai div untuk semua hal, padahal ada tag yang lebih bermakna.",
      analogy: "class seperti label kelompok, id seperti nomor KTP yang unik.",
      explanation: "div adalah pembungkus blok umum, span pembungkus teks kecil. class bisa dipakai berulang, id harus unik dalam satu halaman.",
      steps: ["Pilih tag semantik dulu jika ada.", "Gunakan div untuk kelompok umum.", "Gunakan class untuk gaya berulang.", "Gunakan id untuk elemen unik atau target link."],
      terms: [
        { term: "div", meaning: "Pembungkus blok tanpa makna khusus." },
        { term: "span", meaning: "Pembungkus teks kecil tanpa baris baru." },
        { term: "class", meaning: "Penanda kelompok yang bisa dipakai banyak elemen." }
      ],
      filename: "index.html",
      code: `<section class="kartu-profil" id="profil">
  <h1>Rina</h1>
  <p>Saya belajar <span class="highlight">HTML</span> dari nol.</p>
</section>`,
      previewOutput: "Rina\nSaya belajar HTML dari nol.",
      lineNotes: ["section memakai class kartu-profil untuk gaya.", "id profil bisa menjadi tujuan link #profil.", "span menandai kata HTML di dalam paragraf."],
      exercise: "Buat dua kartu dengan class yang sama, lalu beri id unik untuk masing-masing kartu.",
      commonMistakes: ["Memakai id yang sama berkali-kali.", "Memakai span untuk membungkus paragraf besar.", "Memakai div padahal section atau article lebih tepat."],
      checkpoint: "Kamu bisa menjelaskan class boleh berulang, id harus unik.",
      recall: "Apa bedanya class dan id?",
      debug: {
        question: "Link #profil menuju bagian yang salah. Apa yang harus dicek?",
        hint: "id harus unik.",
        solution: "Pastikan hanya ada satu elemen dengan id profil di halaman."
      },
      quiz: {
        question: "Penanda yang boleh dipakai berulang pada banyak elemen adalah...",
        options: ["id", "class", "title", "doctype"],
        answer: 1,
        explanation: "class digunakan untuk kelompok elemen dan boleh dipakai berulang."
      }
    },
    {
      id: "aksesibilitas-dasar",
      icon: "bi-universal-access",
      title: "Aksesibilitas Dasar",
      duration: "13 menit",
      prerequisite: "Paham gambar, link, form, dan struktur heading.",
      overview: "Kamu belajar kebiasaan kecil agar halaman lebih mudah dipakai lebih banyak orang.",
      goal: "Menerapkan alt, label, teks link jelas, dan hierarki heading.",
      problem: "Halaman bisa terlihat bagus, tapi tidak nyaman dipakai keyboard atau screen reader.",
      analogy: "Aksesibilitas seperti jalur landai di gedung. Bukan hanya untuk sebagian orang, tapi membuat akses lebih nyaman untuk semua.",
      explanation: "HTML yang rapi sudah membantu aksesibilitas. Gunakan struktur heading benar, alt bermakna, label form, dan tombol/link yang jelas.",
      steps: ["Pastikan heading berurutan.", "Tulis alt gambar yang bermakna.", "Hubungkan label dan input.", "Gunakan teks link yang menjelaskan tujuan."],
      terms: [
        { term: "Screen reader", meaning: "Alat bantu yang membacakan isi layar." },
        { term: "Focus", meaning: "Elemen yang sedang dipilih keyboard." },
        { term: "Accessible name", meaning: "Nama yang dibaca alat bantu untuk elemen interaktif." }
      ],
      filename: "index.html",
      code: `<h1>Kontak</h1>
<p>Hubungi saya melalui formulir berikut.</p>

<form>
  <label for="email">Email</label>
  <input id="email" name="email" type="email">
  <button type="submit">Kirim pesan</button>
</form>`,
      previewOutput: "Kontak\nHubungi saya melalui formulir berikut.\nEmail [input]\n[Kirim pesan]",
      lineNotes: ["h1 memberi struktur utama.", "label menjelaskan input email.", "Teks tombol menjelaskan aksi."],
      exercise: "Periksa halaman yang sudah kamu buat: apakah semua gambar punya alt dan semua input punya label?",
      commonMistakes: ["Teks link hanya 'klik di sini'.", "Menghapus outline focus dengan CSS tanpa pengganti.", "Form hanya mengandalkan placeholder."],
      checkpoint: "Kamu bisa menyebut minimal tiga kebiasaan HTML yang membantu aksesibilitas.",
      recall: "Kenapa teks link sebaiknya jelas?",
      debug: {
        question: "Pengguna keyboard sulit tahu sedang berada di elemen mana. Apa yang mungkin terjadi?",
        hint: "Focus indicator jangan dihilangkan.",
        solution: "Jangan menghapus outline focus tanpa memberi gaya focus lain yang terlihat jelas."
      },
      quiz: {
        question: "Contoh teks link yang lebih jelas adalah...",
        options: ["Klik di sini", "Baca profil lengkap Rina", "Ini", "Lanjut"],
        answer: 1,
        explanation: "Teks link sebaiknya menjelaskan tujuan link."
      }
    },
    {
      id: "hubungkan-css",
      icon: "bi-filetype-css",
      title: "Menghubungkan CSS",
      duration: "12 menit",
      prerequisite: "Paham struktur head.",
      overview: "Kamu belajar menghubungkan file CSS agar halaman punya tampilan.",
      goal: "Menggunakan link rel stylesheet di dalam head.",
      problem: "CSS sering tidak jalan karena file tidak terhubung atau path salah.",
      analogy: "HTML adalah tubuh, CSS adalah pakaian. Pakaian harus diambil dari lemari yang benar.",
      explanation: "File CSS biasanya dihubungkan dengan tag link di head. Atribut href menunjuk lokasi file CSS.",
      steps: ["Buat folder css atau assets/css.", "Buat file style.css.", "Tambahkan link di head.", "Uji dengan mengubah warna sederhana."],
      terms: [
        { term: "stylesheet", meaning: "File CSS yang mengatur tampilan." },
        { term: "rel", meaning: "Menjelaskan hubungan file yang ditautkan." },
        { term: "href", meaning: "Lokasi file CSS." }
      ],
      filename: "index.html",
      code: `<!DOCTYPE html>
<html lang="id">
  <head>
    <link rel="stylesheet" href="assets/css/style.css">
    <title>HTML dan CSS</title>
  </head>
  <body>
    <h1>Halaman mulai punya tampilan</h1>
  </body>
</html>`,
      previewOutput: "Halaman mulai punya tampilan",
      lineNotes: ["link diletakkan di head.", "rel stylesheet memberi tahu bahwa file ini CSS.", "href menunjuk lokasi style.css."],
      exercise: "Buat file style.css lalu ubah warna teks h1.",
      commonMistakes: ["Menaruh link CSS di luar head.", "Salah menulis lokasi assets/css/style.css.", "Nama file style.css berbeda dengan yang ditulis di href."],
      checkpoint: "Kamu bisa menghubungkan file CSS dan melihat perubahan tampilan.",
      recall: "Di mana sebaiknya tag link CSS diletakkan?",
      debug: {
        question: "CSS tidak berpengaruh sama sekali. Apa cek pertama?",
        hint: "Cek path href.",
        solution: "Pastikan file CSS ada di lokasi yang sama dengan nilai href pada tag link."
      },
      quiz: {
        question: "Tag untuk menghubungkan CSS eksternal adalah...",
        options: ["script", "img", "link", "meta"],
        answer: 2,
        explanation: "link rel=\"stylesheet\" digunakan untuk menghubungkan CSS."
      }
    },
    {
      id: "box-model",
      icon: "bi-bounding-box",
      title: "Box Model dan Layout Awal",
      duration: "14 menit",
      prerequisite: "Sudah menghubungkan CSS.",
      overview: "Kamu belajar bahwa setiap elemen HTML punya area konten, padding, border, dan margin.",
      goal: "Memahami alasan jarak dan ukuran elemen berubah.",
      problem: "Pemula sering bingung kenapa kotak terlihat lebih besar dari width yang ditulis.",
      analogy: "Box model seperti paket: barang adalah content, bubble wrap adalah padding, kardus adalah border, jarak antar paket adalah margin.",
      explanation: "Walaupun ini konsep CSS, HTML perlu dipahami sebagai kumpulan kotak yang bisa diatur ukuran dan jaraknya.",
      steps: ["Pilih satu elemen kartu.", "Tambahkan padding untuk ruang dalam.", "Tambahkan border untuk garis tepi.", "Tambahkan margin untuk jarak luar."],
      terms: [
        { term: "Content", meaning: "Isi utama elemen." },
        { term: "Padding", meaning: "Jarak di dalam elemen." },
        { term: "Margin", meaning: "Jarak di luar elemen." }
      ],
      filename: "index.html",
      code: `<section class="kartu">
  <h1>Belajar Box Model</h1>
  <p>Setiap elemen di halaman dianggap sebagai kotak.</p>
</section>`,
      previewOutput: "Belajar Box Model\nSetiap elemen di halaman dianggap sebagai kotak.",
      lineNotes: ["section menjadi kotak pembungkus.", "class kartu bisa diberi CSS.", "Isi kartu tetap HTML biasa."],
      exercise: "Beri class kartu pada section, lalu di CSS tambahkan padding, border, dan margin.",
      commonMistakes: ["Mengatur jarak dengan banyak br.", "Tidak tahu bedanya padding dan margin.", "Memakai width tanpa memahami padding."],
      checkpoint: "Kamu bisa menjelaskan beda padding dan margin.",
      recall: "Apa empat bagian utama box model?",
      debug: {
        question: "Kartu terlalu menempel ke tepi layar. Properti apa yang membantu?",
        hint: "Butuh jarak luar atau pembatas lebar.",
        solution: "Gunakan margin untuk jarak luar dan max-width agar kartu tidak terlalu lebar."
      },
      quiz: {
        question: "Jarak di dalam kotak antara border dan konten disebut...",
        options: ["margin", "padding", "display", "href"],
        answer: 1,
        explanation: "Padding adalah jarak dalam elemen."
      }
    },
    {
      id: "flexbox",
      icon: "bi-distribute-horizontal",
      title: "Flexbox Sederhana",
      duration: "14 menit",
      prerequisite: "Paham elemen sebagai kotak.",
      overview: "Kamu mengenal cara menata beberapa elemen dalam satu baris atau kolom.",
      goal: "Menyiapkan struktur HTML yang cocok untuk flexbox.",
      problem: "Tanpa layout, kartu atau menu akan menumpuk dan sulit diatur.",
      analogy: "Flexbox seperti rak buku yang bisa mengatur buku ke samping, ke bawah, dan memberi jarak.",
      explanation: "HTML menyediakan parent dan children. CSS flex diterapkan ke parent agar child di dalamnya tertata.",
      steps: ["Buat parent dengan class container.", "Masukkan beberapa item di dalamnya.", "Pastikan setiap item punya class yang sama.", "Atur display flex di CSS."],
      terms: [
        { term: "Parent", meaning: "Elemen pembungkus." },
        { term: "Child", meaning: "Elemen di dalam pembungkus." },
        { term: "Gap", meaning: "Jarak antar item dalam layout." }
      ],
      filename: "index.html",
      code: `<section class="fitur-list">
  <article class="fitur">
    <h2>Mudah</h2>
    <p>Mulai dari tag dasar.</p>
  </article>
  <article class="fitur">
    <h2>Rapi</h2>
    <p>Belajar struktur sejak awal.</p>
  </article>
</section>`,
      previewOutput: "Mudah\nMulai dari tag dasar.\nRapi\nBelajar struktur sejak awal.",
      lineNotes: ["fitur-list adalah parent.", "article fitur adalah child.", "CSS bisa membuat child berjajar dengan flex."],
      exercise: "Tambahkan tiga article di dalam satu section, lalu atur dengan flex di CSS.",
      commonMistakes: ["Memberi display flex ke item, bukan parent.", "Lupa memberi gap sehingga elemen terlalu rapat.", "Memaksa layout dengan tabel."],
      checkpoint: "Kamu bisa membedakan parent dan child untuk layout.",
      recall: "Elemen mana yang diberi display flex?",
      debug: {
        question: "Item tidak berjajar padahal sudah menulis display flex. Apa kemungkinan salah?",
        hint: "display flex harus ada di pembungkus item.",
        solution: "Letakkan display: flex pada parent yang membungkus semua item, bukan pada setiap item."
      },
      quiz: {
        question: "Untuk menata beberapa child dengan flexbox, display flex dipasang pada...",
        options: ["File gambar", "Parent", "Setiap teks", "DOCTYPE"],
        answer: 1,
        explanation: "Parent yang membungkus child diberi display flex."
      }
    },
    {
      id: "responsive-dasar",
      icon: "bi-phone",
      title: "Responsive Dasar",
      duration: "15 menit",
      prerequisite: "Paham struktur dokumen dan layout awal.",
      overview: "Kamu belajar membuat HTML yang siap ditampilkan di layar kecil.",
      goal: "Memahami viewport, gambar fleksibel, dan struktur yang tidak kaku.",
      problem: "Halaman desktop bisa rusak di handphone jika lebar elemen dipaksa tetap.",
      analogy: "Responsive seperti air dalam gelas: bentuknya mengikuti wadah, bukan memaksa wadah mengikuti dirinya.",
      explanation: "Meta viewport membantu browser mobile membaca lebar layar. Struktur HTML yang rapi membuat CSS responsive lebih mudah.",
      steps: ["Pastikan meta viewport ada.", "Hindari tabel untuk layout.", "Gunakan gambar yang bisa mengecil.", "Uji halaman di layar sempit."],
      terms: [
        { term: "Viewport", meaning: "Area layar yang dipakai browser untuk menampilkan halaman." },
        { term: "Responsive", meaning: "Tampilan menyesuaikan ukuran layar." },
        { term: "max-width", meaning: "Batas lebar maksimal elemen di CSS." }
      ],
      filename: "index.html",
      code: `<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Halaman Responsive</title>
</head>
<body>
  <main>
    <h1>Belajar di layar apa saja</h1>
    <p>Struktur yang rapi lebih mudah dibuat responsive.</p>
  </main>
</body>`,
      previewOutput: "Belajar di layar apa saja\nStruktur yang rapi lebih mudah dibuat responsive.",
      lineNotes: ["meta viewport penting untuk mobile.", "main membungkus konten utama.", "Konten tidak memakai lebar tetap di HTML."],
      exercise: "Buka halamanmu, kecilkan lebar browser, lalu catat bagian yang mulai tidak nyaman dibaca.",
      commonMistakes: ["Menghapus meta viewport.", "Memberi lebar gambar sangat besar tanpa batas.", "Menulis teks panjang di tombol tanpa ruang responsif."],
      checkpoint: "Kamu tahu kenapa meta viewport diperlukan.",
      recall: "Apa fungsi meta viewport?",
      debug: {
        question: "Tampilan mobile terlihat sangat kecil seperti versi desktop diperkecil. Apa yang hilang?",
        hint: "Periksa head.",
        solution: "Tambahkan meta viewport agar browser mobile memakai lebar perangkat."
      },
      quiz: {
        question: "Meta viewport biasanya diletakkan di dalam...",
        options: ["body", "head", "footer", "table"],
        answer: 1,
        explanation: "Metadata seperti viewport ditulis di dalam head."
      }
    },
    {
      id: "media-embed",
      icon: "bi-play-btn",
      title: "Media dan Embed",
      duration: "13 menit",
      prerequisite: "Paham gambar dan atribut.",
      overview: "Kamu belajar menambahkan audio, video, dan iframe secara hati-hati.",
      goal: "Mengenal video, audio, dan iframe dengan atribut penting.",
      problem: "Media yang dimasukkan sembarangan bisa berat, tidak punya kontrol, atau tidak punya judul aksesibilitas.",
      analogy: "Embed seperti memasang jendela kecil dari tempat lain ke halamanmu.",
      explanation: "Tag video dan audio bisa memakai controls. iframe perlu title agar pengguna alat bantu tahu isinya.",
      steps: ["Gunakan controls pada video/audio.", "Sediakan teks alternatif atau keterangan.", "Berikan title pada iframe.", "Hindari autoplay yang mengganggu."],
      terms: [
        { term: "controls", meaning: "Atribut untuk menampilkan kontrol media." },
        { term: "iframe", meaning: "Area untuk menampilkan halaman lain di dalam halaman." },
        { term: "embed", meaning: "Konten yang ditanam dari sumber lain." }
      ],
      filename: "index.html",
      code: `<h1>Materi Video</h1>

<video controls width="360">
  <source src="videos/perkenalan-html.mp4" type="video/mp4">
  Browser kamu belum mendukung video.
</video>

<iframe title="Peta lokasi belajar" src="lokasi.html"></iframe>`,
      previewOutput: "Materi Video\n[Video dengan kontrol]\n[Iframe peta lokasi belajar]",
      lineNotes: ["controls menampilkan tombol play.", "source menunjuk file video.", "title pada iframe menjelaskan isinya."],
      exercise: "Tambahkan video lokal pendek atau iframe dummy, lalu beri title yang jelas.",
      commonMistakes: ["Memakai autoplay tanpa alasan.", "Iframe tidak punya title.", "File video terlalu besar untuk halaman sederhana."],
      checkpoint: "Kamu bisa menambahkan media tanpa mengabaikan kontrol dan title.",
      recall: "Kenapa iframe perlu title?",
      debug: {
        question: "Video tidak bisa diputar. Apa saja yang perlu dicek?",
        hint: "Periksa path dan format file.",
        solution: "Pastikan src benar, file ada, tipe file didukung browser, dan atribut controls tersedia."
      },
      quiz: {
        question: "Atribut untuk menampilkan tombol kontrol video adalah...",
        options: ["alt", "href", "controls", "lang"],
        answer: 2,
        explanation: "controls menampilkan kontrol media."
      }
    },
    {
      id: "validasi-debugging",
      icon: "bi-shield-check",
      title: "Validasi dan Debugging HTML",
      duration: "15 menit",
      prerequisite: "Sudah menulis beberapa halaman HTML.",
      overview: "Kamu belajar menemukan tag yang belum tertutup, atribut salah, dan struktur tidak valid.",
      goal: "Membaca kode HTML dengan teliti dan memperbaiki kesalahan umum.",
      problem: "HTML kadang tetap tampil walau salah, sehingga bug tersembunyi sulit disadari.",
      analogy: "Validator seperti guru yang memeriksa tanda baca di karanganmu.",
      explanation: "Debugging HTML dimulai dari membaca struktur tag, indentasi, nama atribut, dan posisi elemen.",
      steps: ["Rapikan indentasi.", "Cocokkan tag pembuka dan penutup.", "Periksa atribut wajib seperti href, src, alt, for.", "Uji di browser dan validator."],
      terms: [
        { term: "Validator", meaning: "Alat untuk memeriksa validitas HTML." },
        { term: "Nesting", meaning: "Susunan tag di dalam tag lain." },
        { term: "Closing tag", meaning: "Tag penutup seperti </p> atau </section>." }
      ],
      filename: "index.html",
      code: `<article>
  <h1>Catatan Debugging</h1>
  <p>Rapikan indentasi agar struktur mudah dibaca.</p>
  <a href="materi.html">Kembali ke materi</a>
</article>`,
      previewOutput: "Catatan Debugging\nRapikan indentasi agar struktur mudah dibaca.\nKembali ke materi",
      lineNotes: ["article dibuka dan ditutup dengan benar.", "p punya tag penutup.", "a punya href tujuan."],
      exercise: "Ambil satu kode HTML milikmu, lalu cek satu per satu tag pembuka dan penutupnya.",
      commonMistakes: ["Tag p belum ditutup.", "Atribut ditulis tanpa tanda kutip.", "Salah nesting, misalnya link membungkus elemen terlalu besar tanpa sengaja."],
      checkpoint: "Kamu bisa memperbaiki minimal satu kesalahan HTML tanpa menebak.",
      recall: "Apa langkah awal saat halaman HTML terlihat aneh?",
      debug: {
        question: "Satu bagian halaman ikut menjadi link semua. Apa kemungkinan masalah?",
        hint: "Tag a mungkin belum ditutup.",
        solution: "Tutup tag a tepat setelah teks link agar elemen lain tidak ikut berada di dalam link."
      },
      quiz: {
        question: "Langkah debugging HTML yang paling masuk akal adalah...",
        options: ["Menghapus semua kode", "Merapikan dan memeriksa pasangan tag", "Mengganti komputer", "Menambah gambar baru"],
        answer: 1,
        explanation: "Merapikan struktur membantu menemukan tag atau atribut yang salah."
      }
    },
    {
      id: "multi-halaman",
      icon: "bi-files",
      title: "Struktur Multi Halaman",
      duration: "14 menit",
      prerequisite: "Paham link dan folder project.",
      overview: "Kamu belajar membuat beberapa halaman yang saling terhubung.",
      goal: "Membuat index.html, tentang.html, dan kontak.html dengan navigasi konsisten.",
      problem: "Ketika halaman bertambah, navigasi sering berbeda-beda dan pengguna tersesat.",
      analogy: "Multi halaman seperti buku dengan daftar isi yang sama di setiap bab.",
      explanation: "Website statis bisa punya banyak file HTML. Navigasi yang konsisten membantu pengguna berpindah antar halaman.",
      steps: ["Buat index.html.", "Buat tentang.html.", "Buat kontak.html.", "Salin navigasi yang sama ke tiap halaman.", "Uji semua link."],
      terms: [
        { term: "Multi page", meaning: "Website dengan lebih dari satu halaman HTML." },
        { term: "Navigation", meaning: "Menu untuk berpindah halaman." },
        { term: "Consistent", meaning: "Pola yang sama di beberapa tempat." }
      ],
      filename: "index.html",
      code: `<header>
  <nav>
    <a href="index.html">Beranda</a>
    <a href="tentang.html">Tentang</a>
    <a href="kontak.html">Kontak</a>
  </nav>
</header>

<main>
  <h1>Beranda</h1>
  <p>Selamat datang di website saya.</p>
</main>`,
      previewOutput: "Beranda Tentang Kontak\nBeranda\nSelamat datang di website saya.",
      lineNotes: ["Tiga link mengarah ke tiga file HTML.", "Navigasi diletakkan di header.", "main berisi konten unik halaman."],
      exercise: "Buat tiga file HTML dan pastikan semua menu bisa berpindah antar halaman.",
      commonMistakes: ["Nama file tujuan tidak sama.", "Navigasi di satu halaman tertinggal saat halaman lain diperbarui.", "Link memakai path absolut lokal dari komputer sendiri."],
      checkpoint: "Kamu bisa membuat website kecil dengan tiga halaman yang saling terhubung.",
      recall: "Kenapa navigasi sebaiknya konsisten?",
      debug: {
        question: "Link bekerja di komputer sendiri, tapi rusak setelah dipindah. Apa penyebab umum?",
        hint: "Hindari path lokal seperti C:\\Users\\...",
        solution: "Gunakan relative path seperti tentang.html atau pages/tentang.html, bukan path absolut dari komputer."
      },
      quiz: {
        question: "Link antar file dalam folder project sebaiknya memakai...",
        options: ["Relative path", "Nomor telepon", "Warna CSS", "Alamat drive C lengkap"],
        answer: 0,
        explanation: "Relative path membuat link tetap bekerja saat folder project dipindah."
      }
    },
    {
      id: "publish-github-pages",
      icon: "bi-cloud-upload",
      title: "Publish Statis dengan GitHub Pages",
      duration: "16 menit",
      prerequisite: "Punya folder project berisi halaman HTML.",
      overview: "Kamu mengenal konsep publish agar halaman bisa dibuka orang lain lewat internet.",
      goal: "Memahami alur umum upload project statis ke GitHub Pages.",
      problem: "Banyak pemula berhenti di file lokal dan belum tahu cara membagikan hasilnya.",
      analogy: "Publish seperti memindahkan poster dari meja pribadi ke papan pengumuman umum.",
      explanation: "GitHub Pages bisa menyajikan file HTML, CSS, dan gambar sebagai website statis. Pastikan halaman utama bernama index.html.",
      steps: ["Pastikan project bisa dibuka lokal.", "Rapikan file dan folder.", "Upload ke repository GitHub.", "Aktifkan GitHub Pages dari branch utama.", "Buka link yang diberikan GitHub."],
      terms: [
        { term: "Repository", meaning: "Tempat menyimpan project di GitHub." },
        { term: "Deploy", meaning: "Menerbitkan website agar bisa diakses." },
        { term: "Static site", meaning: "Website berisi file HTML/CSS/JS tanpa server khusus." }
      ],
      filename: "struktur-folder.txt",
      code: `belajar-html/
├── index.html
├── tentang.html
├── kontak.html
└── assets/
    ├── css/
    │   └── style.css
    └── images/
        └── profil.jpg`,
      previewOutput: "Struktur folder siap dipublish.",
      lineNotes: ["index.html menjadi halaman utama.", "assets menyimpan CSS dan gambar.", "Struktur rapi mengurangi link rusak setelah publish."],
      exercise: "Periksa apakah semua link dan gambar memakai relative path sebelum publish.",
      commonMistakes: ["File utama bukan index.html.", "Link gambar memakai path lokal komputer.", "Huruf besar kecil nama file berbeda antara HTML dan file asli."],
      checkpoint: "Kamu tahu syarat dasar website statis agar siap dipublish.",
      recall: "Kenapa relative path penting sebelum publish?",
      debug: {
        question: "Website online tampil, tapi gambar hilang. Apa penyebab umum?",
        hint: "Path dan huruf besar kecil nama file penting di hosting.",
        solution: "Pastikan src gambar memakai relative path dan nama file sama persis, termasuk huruf besar kecil."
      },
      quiz: {
        question: "Agar halaman utama mudah dikenali GitHub Pages, file utamanya sebaiknya bernama...",
        options: ["main.txt", "index.html", "home.psd", "web.docx"],
        answer: 1,
        explanation: "index.html adalah nama umum halaman utama website statis."
      }
    }
  ];

  const quizQuestions = [
    {
      question: "HTML paling tepat disebut sebagai...",
      options: ["Bahasa markup untuk menyusun konten", "Database", "Aplikasi desain foto", "Sistem operasi"],
      answer: 0,
      explanation: "HTML memberi struktur pada konten halaman web."
    },
    {
      question: "Bagian dokumen HTML yang berisi konten terlihat adalah...",
      options: ["head", "body", "meta", "title"],
      answer: 1,
      explanation: "Konten yang tampil di browser berada di body."
    },
    {
      question: "Tag untuk membuat link adalah...",
      options: ["img", "a", "link", "nav-only"],
      answer: 1,
      explanation: "Tag a membuat anchor atau tautan."
    },
    {
      question: "Atribut yang menjelaskan gambar untuk aksesibilitas adalah...",
      options: ["alt", "href", "for", "rel"],
      answer: 0,
      explanation: "alt berisi teks alternatif gambar."
    },
    {
      question: "Daftar langkah yang harus berurutan sebaiknya memakai...",
      options: ["ul", "ol", "span", "footer"],
      answer: 1,
      explanation: "ol cocok untuk daftar bernomor yang urutannya penting."
    },
    {
      question: "Tag semantik untuk area menu navigasi adalah...",
      options: ["nav", "b", "small", "source"],
      answer: 0,
      explanation: "nav menandai area navigasi."
    },
    {
      question: "ID dalam satu halaman sebaiknya...",
      options: ["Unik", "Selalu sama", "Tidak boleh punya huruf", "Hanya dipakai gambar"],
      answer: 0,
      explanation: "id harus unik agar target link dan CSS tidak ambigu."
    },
    {
      question: "File CSS eksternal dihubungkan memakai...",
      options: ["<script>", "<link rel=\"stylesheet\">", "<img>", "<table>"],
      answer: 1,
      explanation: "CSS eksternal ditautkan dengan link rel stylesheet."
    },
    {
      question: "Komentar HTML yang benar adalah...",
      options: ["<!-- catatan -->", "// catatan", "# catatan", "**catatan**"],
      answer: 0,
      explanation: "Komentar HTML memakai <!-- ... -->."
    },
    {
      question: "Sebelum publish, link gambar sebaiknya memakai...",
      options: ["Relative path", "Alamat folder C lengkap", "Nama acak", "Screenshot file"],
      answer: 0,
      explanation: "Relative path membuat project tetap bekerja setelah dipindah atau dipublish."
    }
  ];

  const recallChallenges = [
    {
      id: "recall-struktur",
      icon: "bi-diagram-3",
      title: "Struktur Dasar",
      question: "Jelaskan fungsi head dan body dengan analogi sederhana.",
      answer: "head menyimpan informasi halaman untuk browser, sedangkan body menyimpan isi yang terlihat oleh pengguna."
    },
    {
      id: "recall-link",
      icon: "bi-link-45deg",
      title: "Link",
      question: "Apa fungsi href dan kenapa nama file tujuan harus sama persis?",
      answer: "href menyimpan alamat tujuan link. Nama file harus sama agar browser menemukan file yang benar."
    },
    {
      id: "recall-gambar",
      icon: "bi-image",
      title: "Gambar",
      question: "Jelaskan perbedaan src dan alt pada gambar.",
      answer: "src adalah lokasi file gambar, alt adalah teks alternatif yang menjelaskan gambar."
    },
    {
      id: "recall-form",
      icon: "bi-ui-checks",
      title: "Form",
      question: "Kenapa setiap input sebaiknya punya label?",
      answer: "Label membuat input mudah dipahami dan membantu pengguna alat bantu membaca tujuan input."
    },
    {
      id: "recall-semantic",
      icon: "bi-layout-text-window",
      title: "Semantic",
      question: "Kenapa tidak semua bagian halaman sebaiknya memakai div?",
      answer: "Karena tag semantik memberi makna seperti header, nav, main, article, dan footer sehingga struktur lebih jelas."
    },
    {
      id: "recall-class-id",
      icon: "bi-braces",
      title: "Class dan ID",
      question: "Jelaskan perbedaan class dan id tanpa melihat catatan.",
      answer: "class bisa dipakai pada banyak elemen, sedangkan id sebaiknya unik dalam satu halaman."
    },
    {
      id: "recall-access",
      icon: "bi-universal-access",
      title: "Aksesibilitas",
      question: "Sebutkan tiga kebiasaan HTML yang membantu aksesibilitas.",
      answer: "Heading berurutan, alt gambar bermakna, label pada input, teks link jelas, dan focus terlihat."
    },
    {
      id: "recall-css",
      icon: "bi-filetype-css",
      title: "CSS",
      question: "Bagaimana cara menghubungkan file CSS ke HTML?",
      answer: "Letakkan <link rel=\"stylesheet\" href=\"lokasi-file.css\"> di dalam head."
    },
    {
      id: "recall-debug",
      icon: "bi-bug",
      title: "Debugging",
      question: "Apa langkah pertama saat tampilan HTML terlihat aneh?",
      answer: "Rapikan indentasi, cek tag pembuka dan penutup, lalu periksa atribut seperti href, src, alt, dan for."
    },
    {
      id: "recall-publish",
      icon: "bi-cloud-upload",
      title: "Publish",
      question: "Kenapa relative path penting saat website dipublish?",
      answer: "Relative path membuat link tetap mencari file berdasarkan struktur project, bukan alamat lokal komputer."
    }
  ];

  const debugChallenges = [
    {
      id: "debug-title-body",
      title: "Konten Tertulis di Head",
      level: "Dasar",
      error: "Judul halaman terlihat di tab, tetapi teks utama tidak muncul sebagai isi halaman.",
      brokenCode: `<html>
  <head>
    <title>Profil Saya</title>
    <h1>Halo, saya Rina</h1>
  </head>
  <body>
  </body>
</html>`,
      fixedCode: `<html>
  <head>
    <title>Profil Saya</title>
  </head>
  <body>
    <h1>Halo, saya Rina</h1>
  </body>
</html>`,
      hint: "Konten yang terlihat harus berada di body.",
      explanation: "h1 adalah konten visual, jadi letakkan di dalam body. head hanya untuk metadata."
    },
    {
      id: "debug-anchor",
      title: "Link Tidak Punya Href",
      level: "Dasar",
      error: "Teks terlihat seperti link, tapi tidak bisa menuju halaman lain.",
      brokenCode: `<a>Ke halaman kontak</a>`,
      fixedCode: `<a href="kontak.html">Ke halaman kontak</a>`,
      hint: "Tag a butuh alamat tujuan.",
      explanation: "Tambahkan href agar browser tahu link harus menuju ke mana."
    },
    {
      id: "debug-image",
      title: "Gambar Hilang",
      level: "Dasar",
      error: "Browser menampilkan ikon gambar rusak.",
      brokenCode: `<img scr="images/profil.jpg" alt="Foto profil">`,
      fixedCode: `<img src="images/profil.jpg" alt="Foto profil">`,
      hint: "Nama atribut sumber gambar salah ketik.",
      explanation: "Atribut yang benar adalah src, bukan scr."
    },
    {
      id: "debug-list",
      title: "Daftar Tidak Terstruktur",
      level: "Dasar",
      error: "Daftar tampil, tapi struktur HTML tidak benar.",
      brokenCode: `<ul>
  HTML
  CSS
  JavaScript
</ul>`,
      fixedCode: `<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`,
      hint: "Setiap item daftar perlu tag sendiri.",
      explanation: "Item di dalam ul atau ol harus memakai li."
    },
    {
      id: "debug-label",
      title: "Label Tidak Fokus ke Input",
      level: "Menengah",
      error: "Saat label diklik, kursor tidak masuk ke input.",
      brokenCode: `<label for="email-user">Email</label>
<input id="email" type="email">`,
      fixedCode: `<label for="email">Email</label>
<input id="email" type="email">`,
      hint: "for dan id harus sama persis.",
      explanation: "Label terhubung ke input jika nilai for sama dengan id input."
    },
    {
      id: "debug-closing-link",
      title: "Seluruh Bagian Jadi Link",
      level: "Menengah",
      error: "Bukan hanya teks 'Baca selengkapnya', tetapi paragraf setelahnya juga ikut menjadi link.",
      brokenCode: `<a href="artikel.html">Baca selengkapnya
<p>Paragraf lain yang tidak seharusnya menjadi link.</p>`,
      fixedCode: `<a href="artikel.html">Baca selengkapnya</a>
<p>Paragraf lain yang tidak seharusnya menjadi link.</p>`,
      hint: "Ada tag a yang belum ditutup.",
      explanation: "Tutup tag a tepat setelah teks link."
    },
    {
      id: "debug-comment",
      title: "Konten Hilang karena Komentar",
      level: "Menengah",
      error: "Beberapa bagian halaman tidak tampil setelah menulis komentar.",
      brokenCode: `<!-- Bagian profil
<section>
  <h1>Rina</h1>
</section>`,
      fixedCode: `<!-- Bagian profil -->
<section>
  <h1>Rina</h1>
</section>`,
      hint: "Komentar HTML harus ditutup.",
      explanation: "Jika komentar tidak ditutup dengan -->, konten setelahnya dianggap komentar."
    },
    {
      id: "debug-viewport",
      title: "Tampilan Mobile Terlalu Kecil",
      level: "Menengah",
      error: "Di handphone, halaman tampak seperti desktop yang diperkecil.",
      brokenCode: `<head>
  <title>Website Saya</title>
</head>`,
      fixedCode: `<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website Saya</title>
</head>`,
      hint: "Metadata mobile belum ada.",
      explanation: "Tambahkan meta viewport agar layout mengikuti lebar perangkat."
    },
    {
      id: "debug-id-ganda",
      title: "ID Ganda",
      level: "Menengah",
      error: "Link #kontak selalu menuju bagian pertama, bukan bagian yang dimaksud.",
      brokenCode: `<section id="kontak">Kontak toko</section>
<section id="kontak">Kontak pribadi</section>`,
      fixedCode: `<section id="kontak-toko">Kontak toko</section>
<section id="kontak-pribadi">Kontak pribadi</section>`,
      hint: "id harus unik.",
      explanation: "Gunakan id berbeda untuk setiap elemen agar target link tidak ambigu."
    },
    {
      id: "debug-table",
      title: "Tabel Berantakan",
      level: "Menengah",
      error: "Kolom tabel tidak sejajar.",
      brokenCode: `<table>
  <tr><th>Hari</th><th>Topik</th></tr>
  <tr><td>Senin</td></tr>
</table>`,
      fixedCode: `<table>
  <tr><th>Hari</th><th>Topik</th></tr>
  <tr><td>Senin</td><td>HTML Dasar</td></tr>
</table>`,
      hint: "Jumlah sel pada baris data tidak sesuai header.",
      explanation: "Jika header punya dua kolom, baris data sebaiknya punya dua sel data."
    }
  ];

  const editorTemplates = [
    {
      id: "profil",
      icon: "bi-person",
      title: "Profil",
      html: `<main class="profile-card">
  <h1>Halo, saya Rina</h1>
  <p>Saya sedang belajar HTML dari nol.</p>
  <a href="#kontak">Hubungi saya</a>
</main>`,
      css: `body {
  font-family: Arial, sans-serif;
  background: #f3f7fb;
  margin: 0;
  padding: 32px;
}

.profile-card {
  background: white;
  border: 1px solid #d9e2ef;
  border-radius: 12px;
  max-width: 520px;
  padding: 24px;
}

a {
  color: #5865b8;
  font-weight: bold;
}`
    },
    {
      id: "artikel",
      icon: "bi-newspaper",
      title: "Artikel",
      html: `<article>
  <p class="label">Catatan belajar</p>
  <h1>Hari Pertama Belajar HTML</h1>
  <p>Hari ini saya belajar bahwa HTML menyusun struktur halaman web.</p>
  <h2>Yang saya pahami</h2>
  <ul>
    <li>HTML memakai tag.</li>
    <li>Konten terlihat berada di body.</li>
  </ul>
</article>`,
      css: `body {
  color: #172033;
  font-family: Georgia, serif;
  line-height: 1.7;
  margin: 0;
  padding: 32px;
}

article {
  max-width: 680px;
}

.label {
  color: #0e9aaa;
  font-weight: bold;
  text-transform: uppercase;
}`
    },
    {
      id: "form",
      icon: "bi-ui-checks",
      title: "Form",
      html: `<main>
  <h1>Form Kontak</h1>
  <form>
    <label for="nama">Nama</label>
    <input id="nama" type="text">

    <label for="pesan">Pesan</label>
    <textarea id="pesan"></textarea>

    <button type="submit">Kirim</button>
  </form>
</main>`,
      css: `body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 32px;
}

form {
  display: grid;
  gap: 10px;
  max-width: 420px;
}

input,
textarea,
button {
  font: inherit;
  padding: 10px;
}

button {
  background: #16a36a;
  border: 0;
  color: white;
  font-weight: bold;
}`
    },
    {
      id: "landing",
      icon: "bi-window",
      title: "Landing",
      html: `<header>
  <strong>KelasWeb</strong>
  <nav>
    <a href="#fitur">Fitur</a>
    <a href="#daftar">Daftar</a>
  </nav>
</header>

<main class="hero">
  <p>Belajar web dari nol</p>
  <h1>Mulai HTML dengan langkah kecil yang jelas</h1>
  <a class="button" href="#daftar">Mulai sekarang</a>
</main>`,
      css: `body {
  font-family: Arial, sans-serif;
  margin: 0;
}

header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 18px 32px;
}

nav {
  display: flex;
  gap: 16px;
}

.hero {
  background: #eef7ff;
  padding: 64px 32px;
}

.hero h1 {
  max-width: 560px;
}

.button {
  background: #5865b8;
  color: white;
  display: inline-block;
  padding: 12px 16px;
  text-decoration: none;
}`
    }
  ];

  const projects = [
    {
      title: "Halaman Profil Pribadi",
      level: "Pemula",
      goal: "Membuat profil satu halaman dengan heading, paragraf, gambar, dan link.",
      features: ["Foto profil", "Tentang saya", "Hobi", "Link kontak"],
      steps: ["Buat struktur HTML dasar.", "Tambahkan section profil.", "Masukkan daftar hobi.", "Tambahkan link kontak."],
      hint: "Mulai dari konten tanpa CSS, lalu rapikan tampilan setelah struktur benar.",
      extra: "Tambahkan alt gambar yang menjelaskan foto.",
      example: { type: "profile", name: "Rina", role: "Web learner", description: "Saya belajar HTML dari nol untuk membuat halaman pertama.", hobbies: ["HTML", "Membaca", "Desain"], link: "Lihat kontak" }
    },
    {
      title: "Landing Page Kelas",
      level: "Pemula",
      goal: "Membuat halaman promosi sederhana dengan hero, fitur, dan tombol aksi.",
      features: ["Header", "Hero", "Daftar fitur", "CTA"],
      steps: ["Buat header dan nav.", "Tulis hero dengan h1 dan paragraf.", "Tambahkan tiga fitur.", "Buat tombol daftar."],
      hint: "Pastikan h1 menjelaskan penawaran utama.",
      extra: "Tambahkan section testimoni singkat.",
      example: { type: "landing", brand: "KelasWeb", headline: "Belajar HTML dari nol", description: "Materi kecil, latihan langsung, dan progress yang terlihat.", cta: "Mulai belajar" }
    },
    {
      title: "Form Kontak",
      level: "Pemula",
      goal: "Membuat form dengan label, input, textarea, dan tombol.",
      features: ["Nama", "Email", "Pesan", "Tombol kirim"],
      steps: ["Buat form.", "Tambahkan label dan input.", "Hubungkan for dan id.", "Tambahkan button submit."],
      hint: "Jangan memakai placeholder sebagai satu-satunya label.",
      extra: "Tambahkan select untuk topik pesan.",
      example: { type: "form", title: "Hubungi Saya", fields: ["Nama", "Email", "Pesan"], button: "Kirim" }
    },
    {
      title: "Jadwal Belajar",
      level: "Pemula",
      goal: "Membuat tabel jadwal dengan header dan data.",
      features: ["Tabel", "Hari", "Topik", "Durasi"],
      steps: ["Buat table.", "Tambahkan thead.", "Isi tbody dengan beberapa baris.", "Pastikan jumlah kolom konsisten."],
      hint: "Gunakan th untuk judul kolom.",
      extra: "Tambahkan caption singkat di atas tabel.",
      example: { type: "table", title: "Jadwal Minggu Ini", columns: ["Hari", "Topik", "Durasi"], rows: [["Senin", "Struktur", "30m"], ["Rabu", "Form", "45m"], ["Jumat", "Project", "60m"]] }
    },
    {
      title: "Artikel Blog",
      level: "Pemula",
      goal: "Membuat artikel dengan semantic HTML, heading, dan daftar.",
      features: ["Article", "Heading", "Paragraf", "Daftar poin"],
      steps: ["Buat article.", "Tambahkan h1.", "Pisahkan bagian dengan h2.", "Tambahkan daftar ringkasan."],
      hint: "Satu artikel sebaiknya bisa berdiri sendiri.",
      extra: "Tambahkan footer berisi tanggal tulisan.",
      example: { type: "article", brand: "Catatan Rina", nav: ["HTML", "CSS"], title: "Kenapa HTML penting?", description: "HTML membantu browser memahami struktur konten sebelum tampilan dibuat.", related: "Baca: Struktur dokumen HTML" }
    },
    {
      title: "Dashboard Progress Mini",
      level: "Menengah",
      goal: "Membuat ringkasan progress belajar statis dengan beberapa angka.",
      features: ["Kartu statistik", "Progress bar", "Daftar tugas"],
      steps: ["Buat section dashboard.", "Tambahkan tiga statistik.", "Buat progress bar dengan div.", "Tambahkan daftar tugas berikutnya."],
      hint: "Gunakan class berulang untuk kartu statistik.",
      extra: "Tambahkan status materi terakhir.",
      example: { type: "dashboard", subtitle: "Progress HTML", title: "Belajar minggu ini", progress: 64, stats: [{ value: "8", label: "materi" }, { value: "3", label: "quiz" }, { value: "2", label: "project" }], tasks: ["Rapikan form", "Coba tabel", "Publish halaman"] }
    },
    {
      title: "Galeri Karya",
      level: "Menengah",
      goal: "Membuat galeri sederhana berisi beberapa project kecil.",
      features: ["Grid item", "Judul", "Label", "Deskripsi"],
      steps: ["Buat section galeri.", "Tambahkan beberapa article.", "Gunakan heading kecil.", "Pastikan tiap item punya label."],
      hint: "Setiap item galeri bisa menjadi article kecil.",
      extra: "Tambahkan link detail untuk tiap karya.",
      example: { type: "gallery", title: "Galeri Project", description: "Beberapa latihan HTML yang sudah selesai.", items: [{ title: "Profil", label: "HTML" }, { title: "Form", label: "Aksesibilitas" }, { title: "Tabel", label: "Data" }, { title: "Blog", label: "Semantic" }] }
    },
    {
      title: "Checklist Belajar",
      level: "Menengah",
      goal: "Membuat daftar tugas belajar yang mudah dipindai.",
      features: ["Checklist", "Label", "Tombol", "Status"],
      steps: ["Buat section checklist.", "Tambahkan beberapa label.", "Gunakan input checkbox.", "Tambahkan tombol lanjut."],
      hint: "Label dapat membungkus checkbox agar area klik lebih nyaman.",
      extra: "Tambahkan progress teks seperti 3 dari 5 selesai.",
      example: { type: "checklist", title: "Checklist HTML", description: "Selesaikan langkah dasar sebelum lanjut CSS.", items: ["Struktur dokumen", "Link dan gambar", "Form kontak"], cta: "Lanjut CSS" }
    }
  ];

  const badges = [
    { id: "mulai", title: "Mulai Belajar", icon: "bi-flag" },
    { id: "lima-materi", title: "5 Materi", icon: "bi-journal-check" },
    { id: "semua-materi", title: "HTML Finisher", icon: "bi-trophy" },
    { id: "quiz-70", title: "Quiz 70+", icon: "bi-patch-check" },
    { id: "recall-3", title: "Recall Aktif", icon: "bi-arrow-repeat" },
    { id: "debug-3", title: "Bug Reader", icon: "bi-bug" },
    { id: "konsisten", title: "Konsisten", icon: "bi-lightning-charge" }
  ];

  const learningPhases = [
    {
      id: "orientasi",
      icon: "bi-compass",
      label: "Materi 01-03",
      title: "Kenali Dunia Web",
      description: "Pahami apa itu website, folder project, dan struktur dasar HTML sebelum menghafal tag.",
      outcome: "Kamu tahu file mana yang dibuka, bagian mana yang terlihat, dan kenapa browser bisa membaca HTML.",
      lessonStart: 0,
      lessonEnd: 2
    },
    {
      id: "isi-halaman",
      icon: "bi-card-text",
      label: "Materi 04-09",
      title: "Isi Halaman",
      description: "Latih teks, link, gambar, list, tabel, dan form sebagai bahan utama halaman web.",
      outcome: "Kamu bisa membuat halaman sederhana yang punya isi, arah navigasi, media, dan input.",
      lessonStart: 3,
      lessonEnd: 8
    },
    {
      id: "struktur-rapi",
      icon: "bi-layout-text-window",
      label: "Materi 10-15",
      title: "Struktur yang Rapi",
      description: "Belajar semantic HTML, class, id, box model, flexbox, dan responsive dasar secara pelan.",
      outcome: "Kamu mulai bisa membaca halaman sebagai kumpulan bagian yang punya nama dan peran.",
      lessonStart: 9,
      lessonEnd: 14
    },
    {
      id: "siap-publish",
      icon: "bi-rocket-takeoff",
      label: "Materi 16-20",
      title: "Latihan Nyata",
      description: "Gabungkan banyak halaman, media embed, aksesibilitas, debugging, dan publish.",
      outcome: "Kamu punya bekal untuk membuat project kecil dan memperbaiki kesalahan umum sendiri.",
      lessonStart: 15,
      lessonEnd: 19
    }
  ];

  const starterFlow = [
    {
      icon: "bi-eye",
      title: "Lihat hasil dulu",
      description: "Pemula lebih cepat paham saat melihat kode kecil berubah menjadi tampilan browser."
    },
    {
      icon: "bi-pencil-square",
      title: "Tiru satu contoh",
      description: "Salin contoh, ubah teksnya, lalu amati bagian mana yang berubah."
    },
    {
      icon: "bi-patch-question",
      title: "Cek paham",
      description: "Jawab quiz singkat dan recall dengan bahasa sendiri, bukan dengan hafalan."
    },
    {
      icon: "bi-bug",
      title: "Baca kesalahan",
      description: "Latih mata untuk menemukan typo tag, atribut salah, atau struktur yang belum rapi."
    }
  ];

  const homeDemos = [
    {
      id: "teks",
      label: "Teks",
      title: "Judul dan paragraf",
      code: `<h1>Profil Rina</h1>
<p>Saya sedang belajar membuat website pertama.</p>`,
      explanation: "h1 dipakai untuk judul utama. p dipakai untuk kalimat penjelas.",
      task: "Ganti nama dan kalimatnya dengan versimu sendiri."
    },
    {
      id: "link",
      label: "Link",
      title: "Pintu ke halaman lain",
      code: `<h1>Website Saya</h1>
<a href="kontak.html">Buka halaman kontak</a>`,
      explanation: "a membuat link. href berisi alamat tujuan yang akan dibuka browser.",
      task: "Ubah tujuan href ke nama file halaman yang ingin kamu buat."
    },
    {
      id: "list",
      label: "List",
      title: "Daftar langkah belajar",
      code: `<h1>Rencana Hari Ini</h1>
<ol>
  <li>Buka materi pertama</li>
  <li>Tiru contoh kode</li>
  <li>Jalankan di editor</li>
</ol>`,
      explanation: "ol dipakai untuk daftar yang urutannya penting. Setiap item ditulis dengan li.",
      task: "Tulis tiga langkah belajar versimu."
    },
    {
      id: "form",
      label: "Form",
      title: "Kotak isian sederhana",
      code: `<form>
  <label for="nama">Nama</label>
  <input id="nama" type="text">
  <button type="submit">Kirim</button>
</form>`,
      explanation: "label menjelaskan input. Nilai for dan id harus sama agar keduanya terhubung.",
      task: "Tambahkan satu input email dengan label yang jelas."
    }
  ];

  return {
    lessons,
    quizQuestions,
    recallChallenges,
    debugChallenges,
    editorTemplates,
    projects,
    badges,
    learningPhases,
    starterFlow,
    homeDemos
  };
})();

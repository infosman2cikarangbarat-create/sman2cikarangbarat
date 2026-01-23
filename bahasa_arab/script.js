// DATA KOSA KATA LENGKAP
const VOCAB_DATA = [
    // Keluarga
    { a: "أَب", l: "Abun", m: "Ayah", c: "Keluarga" },
    { a: "أُم", l: "Umm", m: "Ibu", c: "Keluarga" },
    { a: "بِنْت", l: "Bint", m: "Anak perempuan", c: "Keluarga" },
    { a: "اِبْن", l: "Ibn", m: "Anak laki-laki", c: "Keluarga" },
    { a: "أَخ", l: "Akh", m: "Saudara laki-laki", c: "Keluarga" },
    { a: "أُخْت", l: "Ukht", m: "Saudara perempuan", c: "Keluarga" },
    { a: "جَدّ", l: "Jadd", m: "Kakek", c: "Keluarga" },
    { a: "جَدَّة", l: "Jaddah", m: "Nenek", c: "Keluarga" },
    { a: "زَوْج", l: "Zauj", m: "Suami", c: "Keluarga" },
    { a: "زَوْجَة", l: "Zaujah", m: "Istri", c: "Keluarga" },
    
    // Rumah
    { a: "بَيْت", l: "Bait", m: "Rumah", c: "Rumah" },
    { a: "بَاب", l: "Bab", m: "Pintu", c: "Rumah" },
    { a: "نَافِذَة", l: "Nafidzah", m: "Jendela", c: "Rumah" },
    { a: "سَرِير", l: "Sariir", m: "Tempat tidur", c: "Rumah" },
    { a: "مَائِدَة", l: "Ma'idah", m: "Meja", c: "Rumah" },
    { a: "كُرْسِيّ", l: "Kursiyy", m: "Kursi", c: "Rumah" },
    { a: "مَطْبَخ", l: "Mathbakh", m: "Dapur", c: "Rumah" },
    { a: "حَمَّام", l: "Hammam", m: "Kamar mandi", c: "Rumah" },
    { a: "مَغْسِلَة", l: "Maghsilah", m: "Wastafel", c: "Rumah" },
    { a: "ثَلَّاجَة", l: "Tsallajah", m: "Kulkas", c: "Rumah" },
    
    // Kebutuhan
    { a: "مَاء", l: "Ma'", m: "Air", c: "Kebutuhan" },
    { a: "طَعَام", l: "Tha'am", m: "Makanan", c: "Kebutuhan" },
    { a: "خُبْز", l: "Khubz", m: "Roti", c: "Kebutuhan" },
    { a: "لَحْم", l: "Lahm", m: "Daging", c: "Kebutuhan" },
    { a: "سَمَك", l: "Samak", m: "Ikan", c: "Kebutuhan" },
    { a: "فَاكِهَة", l: "Fakihah", m: "Buah-buahan", c: "Kebutuhan" },
    { a: "خُضَار", l: "Khudar", m: "Sayuran", c: "Kebutuhan" },
    { a: "حَلِيب", l: "Halib", m: "Susu", c: "Kebutuhan" },
    { a: "قَهْوَة", l: "Qahwah", m: "Kopi", c: "Kebutuhan" },
    { a: "شَاي", l: "Syay", m: "Teh", c: "Kebutuhan" },
    
    // Angka
    { a: "وَاحِد", l: "Wahid", m: "Satu", c: "Angka" },
    { a: "إِثْنَان", l: "Itsnan", m: "Dua", c: "Angka" },
    { a: "ثَلَاثَة", l: "Tsalatsah", m: "Tiga", c: "Angka" },
    { a: "أَرْبَعَة", l: "Arba'ah", m: "Empat", c: "Angka" },
    { a: "خَمْسَة", l: "Khamsah", m: "Lima", c: "Angka" },
    { a: "سِتَّة", l: "Sittah", m: "Enam", c: "Angka" },
    { a: "سَبْعَة", l: "Sab'ah", m: "Tujuh", c: "Angka" },
    { a: "ثَمَانِيَة", l: "Tsamaniyah", m: "Delapan", c: "Angka" },
    { a: "تِسْعَة", l: "Tis'ah", m: "Sembilan", c: "Angka" },
    { a: "عَشَرَة", l: "'Asyarah", m: "Sepuluh", c: "Angka" },
    { a: "عِشْرُونَ", l: "'Isyrun", m: "Dua puluh", c: "Angka" },
    { a: "مِائَة", l: "Mi'ah", m: "Seratus", c: "Angka" },
    
    // Kata Kerja
    { a: "ذَهَبَ", l: "Dzahaba", m: "Pergi", c: "Kata Kerja" },
    { a: "جَاءَ", l: "Jaa'a", m: "Datang", c: "Kata Kerja" },
    { a: "أَكَلَ", l: "Akala", m: "Makan", c: "Kata Kerja" },
    { a: "شَرِبَ", l: "Syariba", m: "Minum", c: "Kata Kerja" },
    { a: "نَامَ", l: "Nama", m: "Tidur", c: "Kata Kerja" },
    { a: "قَرَأَ", l: "Qara'a", m: "Membaca", c: "Kata Kerja" },
    { a: "كَتَبَ", l: "Kataba", m: "Menulis", c: "Kata Kerja" },
    { a: "تَكَلَّمَ", l: "Takallama", m: "Berbicara", c: "Kata Kerja" },
    { a: "سَمِعَ", l: "Sami'a", m: "Mendengar", c: "Kata Kerja" },
    { a: "رَأَى", l: "Ra'a", m: "Melihat", c: "Kata Kerja" },
    { a: "فَهِمَ", l: "Fahima", m: "Memahami", c: "Kata Kerja" },
    { a: "عَمِلَ", l: "'Amila", m: "Bekerja", c: "Kata Kerja" },
    
    // Pendidikan
    { a: "كِتَاب", l: "Kitab", m: "Buku", c: "Pendidikan" },
    { a: "قَلَم", l: "Qalam", m: "Pena", c: "Pendidikan" },
    { a: "مَدْرَسَة", l: "Madrasah", m: "Sekolah", c: "Pendidikan" },
    { a: "مُعَلِّم", l: "Mu'allim", m: "Guru (laki-laki)", c: "Pendidikan" },
    { a: "مُعَلِّمَة", l: "Mu'allimah", m: "Guru (perempuan)", c: "Pendidikan" },
    { a: "طَالِب", l: "Thalib", m: "Pelajar (laki-laki)", c: "Pendidikan" },
    { a: "طَالِبَة", l: "Thalibah", m: "Pelajar (perempuan)", c: "Pendidikan" },
    { a: "صَفّ", l: "Shaff", m: "Kelas", c: "Pendidikan" },
    { a: "اِمْتِحَان", l: "Imtihan", m: "Ujian", c: "Pendidikan" },
    
    // Waktu
    { a: "يَوْم", l: "Yaum", m: "Hari", c: "Waktu" },
    { a: "لَيْل", l: "Lail", m: "Malam", c: "Waktu" },
    { a: "صَبَاح", l: "Shabah", m: "Pagi", c: "Waktu" },
    { a: "مَسَاء", l: "Masa'", m: "Sore/malam", c: "Waktu" },
    { a: "سَاعَة", l: "Sa'ah", m: "Jam/waktu", c: "Waktu" },
    { a: "دَقِيقَة", l: "Daqiqah", m: "Menit", c: "Waktu" },
    { a: "أُسْبُوع", l: "Usbu'", m: "Minggu", c: "Waktu" },
    { a: "شَهْر", l: "Syahr", m: "Bulan", c: "Waktu" },
    { a: "سَنَة", l: "Sanah", m: "Tahun", c: "Waktu" },
    
    // Sifat
    { a: "كَبِير", l: "Kabir", m: "Besar", c: "Sifat" },
    { a: "صَغِير", l: "Shaghir", m: "Kecil", c: "Sifat" },
    { a: "جَمِيل", l: "Jamil", m: "Cantik/indah", c: "Sifat" },
    { a: "حَسَن", l: "Hasan", m: "Baik", c: "Sifat" },
    { a: "سَهْل", l: "Sahl", m: "Mudah", c: "Sifat" },
    { a: "صَعْب", l: "Sha'b", m: "Sulit", c: "Sifat" },
    { a: "سَرِيع", l: "Sari'", m: "Cepat", c: "Sifat" },
    { a: "بَطِيء", l: "Bathi'", m: "Lambat", c: "Sifat" },
    { a: "جَدِيد", l: "Jadid", m: "Baru", c: "Sifat" },
    { a: "قَدِيم", l: "Qadim", m: "Lama/tua", c: "Sifat" },
    
    // Percakapan
    { a: "مَرْحَبًا", l: "Marhaban", m: "Halo", c: "Percakapan" },
    { a: "السَّلَامُ عَلَيْكُمْ", l: "Assalamu alaikum", m: "Semoga damai menyertaimu", c: "Percakapan" },
    { a: "وَعَلَيْكُمُ السَّلَام", l: "Wa alaikum salam", m: "Dan semoga damai juga menyertaimu", c: "Percakapan" },
    { a: "شُكْرًا", l: "Shukran", m: "Terima kasih", c: "Percakapan" },
    { a: "عَفْوًا", l: "'Afwan", m: "Sama-sama/maaf", c: "Percakapan" },
    { a: "مَعَ السَّلَامَة", l: "Ma'assalamah", m: "Selamat tinggal", c: "Percakapan" },
    { a: "إِلَى اللِّقَاء", l: "Ila lliqa'", m: "Sampai jumpa", c: "Percakapan" },
    { a: "نَعَم", l: "Na'am", m: "Ya", c: "Percakapan" },
    { a: "لَا", l: "La", m: "Tidak", c: "Percakapan" },
    { a: "مَتَى", l: "Mata", m: "Kapan", c: "Percakapan" },
    { a: "كَيْفَ", l: "Kaifa", m: "Bagaimana", c: "Percakapan" },
    { a: "مَاذَا", l: "Maza", m: "Apa", c: "Percakapan" },
    { a: "مَنْ", l: "Man", m: "Siapa", c: "Percakapan" },
    { a: "أَيْنَ", l: "Aina", m: "Di mana", c: "Percakapan" },
    { a: "لِمَاذَا", l: "Limaza", m: "Mengapa", c: "Percakapan" },
    { a: "كَمْ", l: "Kam", m: "Berapa", c: "Percakapan" }
];

// DATA KUIS LENGKAP
const QUIZ_DATA = [
    // Soal dasar
    { q: "Apa arti dari 'ثَلَاثَة' ?", o: ["Satu", "Dua", "Tiga", "Empat"], c: "Tiga" },
    { q: "Bahasa Arab dari 'Makan' adalah...", o: ["ذَهَبَ", "أَكَلَ", "شَرِبَ", "جَلَسَ"], c: "أَكَلَ" },
    { q: "Apa arti dari 'أُم' ?", o: ["Ayah", "Ibu", "Paman", "Bibi"], c: "Ibu" },
    { q: "Bahasa Arab dari angka 'Lima' adalah...", o: ["وَاحِد", "ثَلَاثَة", "أَرْبَعَة", "خَمْسَة"], c: "خَمْسَة" },
    { q: "Apa arti dari 'ذَهَبَ' ?", o: ["Makan", "Minum", "Pergi", "Pulang"], c: "Pergi" },
    { q: "Apa arti dari 'بَيْت' ?", o: ["Sekolah", "Rumah", "Masjid", "Taman"], c: "Rumah" },
    
    // Soal percakapan
    { q: "Apa arti dari 'مَرْحَبًا' ?", o: ["Selamat tinggal", "Halo", "Terima kasih", "Sama-sama"], c: "Halo" },
    { q: "Bahasa Arab dari 'Buku' adalah...", o: ["كِتَاب", "قَلَم", "مَدْرَسَة", "مُعَلِّم"], c: "كِتَاب" },
    { q: "Apa arti dari 'شُكْرًا' ?", o: ["Halo", "Selamat tinggal", "Terima kasih", "Sama-sama"], c: "Terima kasih" },
    { q: "Bahasa Arab dari 'Air' adalah...", o: ["خُبْز", "مَاء", "لَحْم", "فَاكِهَة"], c: "مَاء" },
    
    // Soal dengan pilihan dalam bahasa Arab
    { q: "Manakah yang berarti 'Ayah' dalam bahasa Arab?", o: ["أُم", "أَب", "بِنْت", "اِبْن"], c: "أَب" },
    { q: "Manakah yang berarti 'Ibu' dalam bahasa Arab?", o: ["أَب", "أُم", "أَخ", "أُخْت"], c: "أُم" },
    { q: "Manakah yang berarti 'Rumah' dalam bahasa Arab?", o: ["بَاب", "بَيْت", "نَافِذَة", "سَرِير"], c: "بَيْت" },
    { q: "Manakah yang berarti 'Pintu' dalam bahasa Arab?", o: ["بَيْت", "بَاب", "كُرْسِيّ", "مَائِدَة"], c: "بَاب" },
    
    // Soal angka
    { q: "Apa arti dari 'سِتَّة' ?", o: ["Tujuh", "Enam", "Delapan", "Sembilan"], c: "Enam" },
    { q: "Apa arti dari 'عَشَرَة' ?", o: ["Sembilan", "Sepuluh", "Sebelas", "Dua belas"], c: "Sepuluh" },
    { q: "Bahasa Arab dari 'Tujuh' adalah...", o: ["سِتَّة", "سَبْعَة", "ثَمَانِيَة", "تِسْعَة"], c: "سَبْعَة" },
    { q: "Bahasa Arab dari 'Sembilan' adalah...", o: ["ثَمَانِيَة", "تِسْعَة", "عَشَرَة", "سَبْعَة"], c: "تِسْعَة" },
    { q: "Apa arti dari 'عِشْرُونَ' ?", o: ["Sepuluh", "Lima belas", "Dua puluh", "Tiga puluh"], c: "Dua puluh" },
    
    // Soal kata kerja
    { q: "Apa arti dari 'قَرَأَ' ?", o: ["Menulis", "Membaca", "Berbicara", "Mendengar"], c: "Membaca" },
    { q: "Apa arti dari 'كَتَبَ' ?", o: ["Membaca", "Menulis", "Melihat", "Makan"], c: "Menulis" },
    { q: "Bahasa Arab dari 'Tidur' adalah...", o: ["نَامَ", "أَكَلَ", "شَرِبَ", "ذَهَبَ"], c: "نَامَ" },
    { q: "Bahasa Arab dari 'Mendengar' adalah...", o: ["سَمِعَ", "رَأَى", "تَكَلَّمَ", "جَاءَ"], c: "سَمِعَ" },
    { q: "Apa arti dari 'فَهِمَ' ?", o: ["Bekerja", "Memahami", "Datang", "Pergi"], c: "Memahami" },
    
    // Soal percakapan lanjutan
    { q: "Apa arti dari 'السَّلَامُ عَلَيْكُمْ' ?", o: ["Selamat tinggal", "Terima kasih", "Semoga damai menyertaimu", "Sampai jumpa"], c: "Semoga damai menyertaimu" },
    { q: "Apa arti dari 'عَفْوًا' ?", o: ["Terima kasih", "Halo", "Sama-sama/maaf", "Tidak"], c: "Sama-sama/maaf" },
    { q: "Bahasa Arab dari 'Ya' adalah...", o: ["لَا", "نَعَم", "مَتَى", "كَيْفَ"], c: "نَعَم" },
    { q: "Bahasa Arab dari 'Di mana' adalah...", o: ["مَتَى", "كَيْفَ", "مَاذَا", "أَيْنَ"], c: "أَيْنَ" },
    { q: "Apa arti dari 'لِمَاذَا' ?", o: ["Kapan", "Bagaimana", "Mengapa", "Berapa"], c: "Mengapa" },
    
    // Soal kata sifat
    { q: "Apa arti dari 'صَغِير' ?", o: ["Besar", "Kecil", "Cantik", "Sulit"], c: "Kecil" },
    { q: "Apa arti dari 'جَمِيل' ?", o: ["Besar", "Kecil", "Cantik/indah", "Sulit"], c: "Cantik/indah" },
    { q: "Bahasa Arab dari 'Mudah' adalah...", o: ["صَعْب", "سَهْل", "سَرِيع", "بَطِيء"], c: "سَهْل" },
    { q: "Bahasa Arab dari 'Cepat' adalah...", o: ["بَطِيء", "سَرِيع", "كَبِير", "صَغِير"], c: "سَرِيع" },
    { q: "Apa arti dari 'جَدِيد' ?", o: ["Lama", "Baru", "Besar", "Kecil"], c: "Baru" },
    
    // Soal pendidikan
    { q: "Apa arti dari 'مُعَلِّم' ?", o: ["Pelajar (laki-laki)", "Pelajar (perempuan)", "Guru (laki-laki)", "Guru (perempuan)"], c: "Guru (laki-laki)" },
    { q: "Apa arti dari 'طَالِبَة' ?", o: ["Guru (laki-laki)", "Guru (perempuan)", "Pelajar (laki-laki)", "Pelajar (perempuan)"], c: "Pelajar (perempuan)" },
    { q: "Bahasa Arab dari 'Pena' adalah...", o: ["كِتَاب", "قَلَم", "مَدْرَسَة", "طَالِب"], c: "قَلَم" },
    { q: "Apa arti dari 'اِمْتِحَان' ?", o: ["Buku", "Kelas", "Ujian", "Sekolah"], c: "Ujian" },
    
    // Soal waktu
    { q: "Apa arti dari 'يَوْم' ?", o: ["Malam", "Hari", "Bulan", "Tahun"], c: "Hari" },
    { q: "Bahasa Arab dari 'Malam' adalah...", o: ["صَبَاح", "لَيْل", "مَسَاء", "سَاعَة"], c: "لَيْل" },
    { q: "Apa arti dari 'سَنَة' ?", o: ["Bulan", "Minggu", "Tahun", "Hari"], c: "Tahun" }
];

// Variabel global
let quizIndex = 0;
let score = 0;
let selectedOption = null;
let totalScoreHistory = [];

// Navigasi
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
        this.classList.add('active');
        const targetId = this.getAttribute('data-section');
        document.getElementById(targetId).classList.remove('hidden');
        document.getElementById(targetId).classList.add('active-section');
        
        // Refresh konten berdasarkan section
        if (targetId === 'vocabulary') {
            renderVocab();
        } else if (targetId === 'progress') {
            updateProgressStats();
        }
    });
});

// Tombol mulai belajar
document.querySelector('.mulai-belajar').onclick = () => {
    document.querySelector('[data-section="vocabulary"]').click();
};

// RENDER KOSA KATA
function renderVocab() {
    const container = document.getElementById('vocab-display');
    container.innerHTML = '';
    
    // Ambil filter kategori
    const selectedCategory = document.getElementById('category-filter').value;
    
    // Tampilkan per kategori (Grup unik)
    const categories = [...new Set(VOCAB_DATA.map(v => v.c))];
    
    categories.forEach(cat => {
        // Filter berdasarkan kategori yang dipilih
        if (selectedCategory !== 'all' && selectedCategory !== cat) return;
        
        const items = VOCAB_DATA.filter(v => v.c === cat);
        let html = `
        <div class="card">
            <div class="card-header">
                <h3>${cat} <span class="category-badge">${items.length} kata</span></h3>
            </div>
            <div class="card-body">`;
        
        items.forEach(item => {
            html += `
            <div class="vocab-item">
                <div class="arabic">${item.a}</div>
                <div class="latin">${item.l}</div>
                <div class="meaning">${item.m}</div>
            </div>`;
        });
        html += `</div></div>`;
        container.innerHTML += html;
    });

    // Update kata harian
    updateDailyWord();
}

// Update kata harian
function updateDailyWord() {
    const daily = VOCAB_DATA[Math.floor(Math.random() * VOCAB_DATA.length)];
    document.getElementById('daily-arabic').textContent = daily.a;
    document.getElementById('daily-latin').textContent = daily.l;
    document.getElementById('daily-meaning').textContent = daily.m;
    
    // Contoh penggunaan
    const examples = [
        `Contoh: ${daily.a} (${daily.l}) berarti "${daily.m}"`,
        `Penggunaan: Saya belajar kata ${daily.a} hari ini`,
        `Tips: Hafalkan kata ${daily.a} dengan pengulangan`
    ];
    document.getElementById('daily-example').textContent = 
        examples[Math.floor(Math.random() * examples.length)];
}

// Isi filter kategori
function populateCategoryFilter() {
    const filterSelect = document.getElementById('category-filter');
    const categories = [...new Set(VOCAB_DATA.map(v => v.c))];
    
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        filterSelect.appendChild(option);
    });
    
    // Event listener untuk filter
    filterSelect.addEventListener('change', renderVocab);
}

// Tombol kata acak
document.getElementById('random-vocab').addEventListener('click', () => {
    const randomWord = VOCAB_DATA[Math.floor(Math.random() * VOCAB_DATA.length)];
    alert(`Kata Acak:\n\nArab: ${randomWord.a}\nLatin: ${randomWord.l}\nArti: ${randomWord.m}\nKategori: ${randomWord.c}`);
});

// KUIS LOGIC
function loadQuiz() {
    const data = QUIZ_DATA[quizIndex];
    document.getElementById('quiz-question').textContent = data.q;
    const optionsDiv = document.getElementById('quiz-options');
    optionsDiv.innerHTML = '';
    
    data.o.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'quiz-option';
        btn.textContent = opt;
        btn.onclick = () => {
            document.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedOption = opt;
        };
        optionsDiv.appendChild(btn);
    });

    document.getElementById('quiz-result').style.display = 'none';
    updateQuizProgress();
}

function updateQuizProgress() {
    const total = QUIZ_DATA.length;
    document.getElementById('quiz-progress-text').textContent = `Soal ${quizIndex + 1} dari ${total}`;
    document.getElementById('quiz-score-text').textContent = `Skor: ${score}`;
    document.getElementById('quiz-bar').style.width = `${((quizIndex + 1) / total) * 100}%`;
}

// Periksa jawaban
document.getElementById('btn-check').onclick = () => {
    if (!selectedOption) return alert("Pilih jawaban dulu!");
    const correctAns = QUIZ_DATA[quizIndex].c;
    const resDiv = document.getElementById('quiz-result');
    resDiv.style.display = 'block';

    if (selectedOption === correctAns) {
        resDiv.textContent = "✅ Jawaban Benar! +10 Poin";
        resDiv.className = "result success";
        score += 10;
    } else {
        resDiv.textContent = `❌ Salah. Jawaban yang benar adalah: ${correctAns}`;
        resDiv.className = "result error";
    }
    
    // Update tampilan opsi
    document.querySelectorAll('.quiz-option').forEach(btn => {
        if (btn.textContent === correctAns) {
            btn.classList.add('correct');
        } else if (btn.textContent === selectedOption && selectedOption !== correctAns) {
            btn.classList.add('incorrect');
        }
    });
    
    updateQuizProgress();
};

// Tombol petunjuk
document.getElementById('btn-hint').onclick = () => {
    const currentQuestion = QUIZ_DATA[quizIndex].q;
    let hint = '';
    
    if (currentQuestion.includes('arti dari')) {
        hint = "Cari kata yang sesuai dengan arti dalam pertanyaan";
    } else if (currentQuestion.includes('Bahasa Arab dari')) {
        hint = "Cari padanan kata dalam bahasa Arab";
    } else if (currentQuestion.includes('Manakah yang berarti')) {
        hint = "Perhatikan pilihan kata dalam bahasa Arab";
    } else {
        hint = "Baca pertanyaan dengan seksama dan pilih jawaban yang paling tepat";
    }
    
    alert(`💡 Petunjuk:\n\n${hint}\n\nAnda juga bisa melihat kosa kata untuk membantu menjawab.`);
};

// Soal selanjutnya
document.getElementById('btn-next').onclick = () => {
    if (quizIndex < QUIZ_DATA.length - 1) {
        quizIndex++;
        selectedOption = null;
        loadQuiz();
    } else {
        saveQuizResults();
        alert(`🎉 Kuis Selesai!\n\nSkor Akhir Anda: ${score}/${QUIZ_DATA.length * 10}\n\nKlik OK untuk mengulang kuis.`);
        quizIndex = 0;
        score = 0;
        loadQuiz();
    }
};

// Ulang kuis
document.getElementById('reset-quiz').onclick = () => {
    if (confirm("Apakah Anda yakin ingin mengulang kuis dari awal? Skor saat ini akan hilang.")) {
        quizIndex = 0;
        score = 0;
        selectedOption = null;
        loadQuiz();
    }
};

// Simpan hasil kuis
function saveQuizResults() {
    // Simpan skor tinggi
    const highScore = localStorage.getItem('highScore') || 0;
    if (score > highScore) {
        localStorage.setItem('highScore', score);
    }
    
    // Simpan jumlah percobaan
    const attempts = parseInt(localStorage.getItem('quizAttempts') || 0) + 1;
    localStorage.setItem('quizAttempts', attempts);
    
    // Simpan riwayat skor
    totalScoreHistory.push(score);
    localStorage.setItem('scoreHistory', JSON.stringify(totalScoreHistory));
    
    // Simpan tanggal terakhir
    const today = new Date().toLocaleDateString('id-ID');
    localStorage.setItem('lastQuizDate', today);
}

// Update statistik kemajuan
function updateProgressStats() {
    // Ambil data dari localStorage
    const highScore = localStorage.getItem('highScore') || 0;
    const attempts = localStorage.getItem('quizAttempts') || 0;
    const scoreHistory = JSON.parse(localStorage.getItem('scoreHistory') || '[]');
    
    // Update statistik
    document.getElementById('stat-high-score').textContent = highScore;
    document.getElementById('stat-attempts').textContent = attempts;
    
    // Hitung rata-rata skor
    let average = 0;
    if (scoreHistory.length > 0) {
        const sum = scoreHistory.reduce((a, b) => a + b, 0);
        average = Math.round(sum / scoreHistory.length);
    }
    document.getElementById('stat-average').textContent = average;
    
    // Hitung persentase penguasaan
    const masteredWords = Math.min(VOCAB_DATA.length, Math.floor(score / 10));
    const percentage = Math.round((masteredWords / VOCAB_DATA.length) * 100);
    document.getElementById('stat-bar').style.width = `${percentage}%`;
    document.getElementById('stat-percentage').textContent = `${percentage}%`;
    
    // Update pencapaian
    updateAchievements();
    
    // Update riwayat belajar
    updateLearningHistory();
}

// Update pencapaian
function updateAchievements() {
    const container = document.getElementById('achievements-list');
    container.innerHTML = '';
    
    const achievements = [
        { 
            id: 'beginner', 
            title: 'Pemula Bahasa Arab', 
            desc: 'Menyelesaikan 5 soal kuis pertama', 
            condition: () => score >= 50 
        },
        { 
            id: 'vocab_master', 
            title: 'Penguasa Kosa Kata', 
            desc: 'Mempelajari 50 kosa kata', 
            condition: () => score >= 500 
        },
        { 
            id: 'quiz_champion', 
            title: 'Juara Kuis', 
            desc: 'Mendapat skor 90+ dalam kuis', 
            condition: () => localStorage.getItem('highScore') >= 90 
        },
        { 
            id: 'daily_learner', 
            title: 'Pembelajar Harian', 
            desc: 'Menyelesaikan kuis 3 hari berturut-turut', 
            condition: () => false // Belum diimplementasikan
        },
        { 
            id: 'perfect_score', 
            title: 'Skor Sempurna', 
            desc: 'Mendapat skor 100 dalam kuis', 
            condition: () => localStorage.getItem('highScore') >= 100 
        }
    ];
    
    achievements.forEach(achievement => {
        const achieved = achievement.condition();
        const div = document.createElement('div');
        div.className = `achievement-item ${achieved ? '' : 'locked'}`;
        div.innerHTML = `
            <div class="achievement-icon">
                <i class="fas ${achieved ? 'fa-trophy' : 'fa-lock'}"></i>
            </div>
            <div class="achievement-info">
                <h4>${achievement.title}</h4>
                <p>${achievement.desc}</p>
            </div>
        `;
        container.appendChild(div);
    });
}

// Update riwayat belajar
function updateLearningHistory() {
    const container = document.getElementById('learning-history');
    container.innerHTML = '';
    
    const scoreHistory = JSON.parse(localStorage.getItem('scoreHistory') || '[]');
    
    if (scoreHistory.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666;">Belum ada riwayat belajar</p>';
        return;
    }
    
    // Tampilkan 5 riwayat terakhir
    const recentScores = scoreHistory.slice(-5).reverse();
    
    recentScores.forEach((score, index) => {
        const date = new Date();
        date.setDate(date.getDate() - index);
        const dateStr = date.toLocaleDateString('id-ID');
        
        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `
            <div>
                <strong>Kuis #${scoreHistory.length - index}</strong>
                <div class="history-date">${dateStr}</div>
            </div>
            <div class="history-score">${score} poin</div>
        `;
        container.appendChild(div);
    });
}

// Fungsi pencarian kosa kata
document.getElementById('search-btn').addEventListener('click', function(e) {
    e.preventDefault();
    searchVocab();
});

function searchVocab() {
    const searchTerm = prompt("Masukkan kata yang ingin dicari (bahasa Indonesia, Arab, atau Latin):");
    if (!searchTerm) return;
    
    const results = VOCAB_DATA.filter(item => 
        item.m.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.a.includes(searchTerm) ||
        item.l.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (results.length === 0) {
        alert(`❌ Tidak ditemukan kosa kata dengan kata kunci: "${searchTerm}"`);
        return;
    }
    
    let message = `🔍 Hasil pencarian untuk "${searchTerm}":\n\n`;
    results.forEach((item, index) => {
        message += `${index + 1}. ${item.a} (${item.l}) = ${item.m}\n`;
        message += `   Kategori: ${item.c}\n\n`;
    });
    
    alert(message);
}

// Fungsi tampilkan statistik detail
document.getElementById('stats-btn').addEventListener('click', function(e) {
    e.preventDefault();
    showDetailedStats();
});

function showDetailedStats() {
    const totalWords = VOCAB_DATA.length;
    const categories = [...new Set(VOCAB_DATA.map(v => v.c))];
    const totalQuizzes = QUIZ_DATA.length;
    const highScore = localStorage.getItem('highScore') || 0;
    const attempts = localStorage.getItem('quizAttempts') || 0;
    
    let stats = `
    📊 STATISTIK PEMBELAJARAN:
    -------------------------
    📝 Total Kosa Kata: ${totalWords}
    📂 Kategori: ${categories.length}
    ❓ Total Soal Kuis: ${totalQuizzes}
    🏆 Skor Tertinggi: ${highScore}
    📈 Kuis Dikerjakan: ${attempts}
    -------------------------
    📚 Kategori Kosa Kata:
    ${categories.map(cat => `   • ${cat}: ${VOCAB_DATA.filter(v => v.c === cat).length} kata`).join('\n')}
    -------------------------`;
    
    alert(stats);
}

// Inisialisasi saat halaman dimuat
window.onload = () => {
    // Muat kosa kata
    populateCategoryFilter();
    renderVocab();
    
    // Muat kuis
    loadQuiz();
    
    // Muat statistik
    updateProgressStats();
    
    // Muat riwayat skor
    totalScoreHistory = JSON.parse(localStorage.getItem('scoreHistory') || '[]');
    
    // Event listener untuk semua tombol navigasi
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
            this.classList.add('active');
            const targetId = this.getAttribute('data-section');
            document.getElementById(targetId).classList.remove('hidden');
            document.getElementById(targetId).classList.add('active-section');
        });
    });
};
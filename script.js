// Website Resmi SMAN 2 Cikarang Barat
// JavaScript untuk interaktivitas dan fungsionalitas

// Data sekolah
const schoolData = {
    name: "SMAN 2 Cikarang Barat",
    npsn: "69964653",
    address: "Perumahan Metland Cibitung, RT 4 RW 12, Desa Telagamurni, Cikarang Barat, Kabupaten Bekasi, Jawa Barat, 17530",
    status: "Negeri",
    accreditation: "A",
    teachers: 48,
    students: 657,
    latitude: -6.255100000000,
    longitude: 107.115600000000,
    vision: "Menuju Generasi yang Bertaqwa, Mandiri, Berprestasi, dan Berwawasan Lingkungan",
    year: 2026
};

// Data gambar galeri
const galleryImages = [
    {
        id: 1,
        title: "Gedung Sekolah",
        url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Gedung SMAN 2 Cikarang Barat"
    },
    {
        id: 2,
        title: "Laboratorium Komputer",
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Laboratorium Komputer Sekolah"
    },
    {
        id: 3,
        title: "Perpustakaan",
        url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Perpustakaan Sekolah"
    },
    {
        id: 4,
        title: "Kegiatan Olahraga",
        url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Kegiatan Olahraga Siswa"
    },
    {
        id: 5,
        title: "Upacara Bendera",
        url: "https://images.unsplash.com/photo-15497958785-6c8e2589458c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Upacara Bendera Hari Senin"
    },
    {
        id: 6,
        title: "Ekskul Seni",
        url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Ekstrakurikuler Seni"
    }
];

// Inisialisasi ketika DOM sudah dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Sembunyikan loading screen setelah 2 detik
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
        
        // Inisialisasi komponen
        initializeComponents();
    }, 2000);
    
    // Inisialisasi komponen dengan timeout fallback
    setTimeout(initializeComponents, 2500);
});

// Fungsi untuk menginisialisasi semua komponen
function initializeComponents() {
    // Setup navigasi
    setupNavigation();
    
    // Setup back to top button
    setupBackToTop();
    
    // Load gambar sekolah
    loadSchoolImage();
    
    // Load galeri
    loadGallery();
    
    // Setup peta
    setupMap();
    
    // Update tahun di footer
    updateFooterYear();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup interaksi statistik
    setupStatistics();
    
    // Setup animasi scroll
    setupScrollAnimations();
}

// Setup navigasi
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navList = document.querySelector('.nav-list');
    const header = document.querySelector('.header');
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        navList.classList.toggle('active');
        mobileMenuBtn.innerHTML = navList.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Tutup mobile menu ketika link diklik
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            
            // Update active link
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Setup back to top button
function setupBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Load gambar sekolah
function loadSchoolImage() {
    const schoolImage = document.getElementById('schoolImage');
    
    // Coba gambar lokal terlebih dahulu
    const localImage = new Image();
    localImage.src = 'school-building.jpg';
    
    localImage.onload = function() {
        schoolImage.innerHTML = `<img src="${localImage.src}" alt="Gedung SMAN 2 Cikarang Barat" style="width:100%;height:100%;object-fit:cover;">`;
    };
    
    localImage.onerror = function() {
        // Gunakan gambar dari internet jika lokal tidak ditemukan
        schoolImage.innerHTML = `
            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                 alt="Gedung SMAN 2 Cikarang Barat" 
                 style="width:100%;height:100%;object-fit:cover;">
        `;
    };
}

// Load galeri
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image.url}" alt="${image.alt}" loading="lazy">
            <div class="gallery-overlay" style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top, rgba(0,0,0,0.8), transparent);padding:20px;color:white;">
                <h4>${image.title}</h4>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
    
    // Setup navigasi galeri
    setupGalleryNavigation();
}

// Setup navigasi galeri
function setupGalleryNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentIndex = 0;
    
    // Fungsi untuk menampilkan item galeri
    function showGalleryItem(index) {
        galleryItems.forEach((item, i) => {
            if (i === index) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
        
        currentIndex = index;
    }
    
    // Setup event listeners untuk tombol
    prevBtn.addEventListener('click', function() {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) newIndex = galleryItems.length - 1;
        showGalleryItem(newIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        let newIndex = currentIndex + 1;
        if (newIndex >= galleryItems.length) newIndex = 0;
        showGalleryItem(newIndex);
    });
    
    // Tampilkan item pertama
    if (galleryItems.length > 0) {
        showGalleryItem(0);
    }
    
    // Sembunyikan tombol navigasi jika hanya ada sedikit gambar
    if (galleryItems.length <= 1) {
        document.querySelector('.gallery-controls').style.display = 'none';
    }
}

// Setup peta lokasi
function setupMap() {
    const mapContainer = document.getElementById('mapContainer');
    
    // Buka Street View di Google Maps dengan koordinat sekolah
    const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.518096313697!2d${schoolData.longitude}!3d${schoolData.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnMTguNCJTIDEwN8KwMDYnNTYuMiJF!5e0!3m2!1sid!2sid!4v1685097200000!5m2!1sid!2sid`;
    
    mapContainer.innerHTML = `
        <iframe 
            src="${mapUrl}"
            width="100%" 
            height="500" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Lokasi SMAN 2 Cikarang Barat">
        </iframe>
    `;
}

// Update tahun di footer
function updateFooterYear() {
    const yearElements = document.querySelectorAll('.footer-footnote');
    yearElements.forEach(element => {
        element.textContent = `SMAN 2 Cikarang Barat - ${schoolData.year}`;
    });
}

// Setup event listeners tambahan
function setupEventListeners() {
    // Refresh tombol CTA
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    ctaButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
    
    // Interaksi kartu statistik
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Setup animasi statistik
function setupStatistics() {
    const statNumbers = document.querySelectorAll('.stat-card h3');
    
    // Animasi counter untuk statistik
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current).toLocaleString();
        }, 30);
    });
}

// Setup animasi scroll
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observasi elemen untuk animasi
    const elementsToAnimate = document.querySelectorAll('.stat-card, .info-card, .vision-card, .mission-card');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

// Fungsi untuk menampilkan notifikasi
function showNotification(message, type = 'info') {
    // Buat elemen notifikasi
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Tambahkan ke body
    document.body.appendChild(notification);
    
    // Tampilkan notifikasi
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hapus notifikasi setelah 3 detik
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Tambahkan CSS untuk notifikasi
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #1a1a2e;
        border-left: 4px solid #00d4ff;
        color: #ffffff;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        gap: 15px;
        z-index: 9999;
        transform: translateX(150%);
        transition: transform 0.3s ease;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-success {
        border-left-color: #00ff88;
    }
    
    .notification i {
        font-size: 1.5rem;
    }
    
    .notification-success i {
        color: #00ff88;
    }
    
    .notification-info i {
        color: #00d4ff;
    }
`;
document.head.appendChild(notificationStyles);

// Fungsi untuk mengirim formulir kontak (jika ada)
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulasi pengiriman formulir
            const formData = new FormData(this);
            const name = formData.get('name');
            
            showNotification(`Terima kasih ${name}, pesan Anda telah terkirim!`, 'success');
            
            // Reset formulir
            this.reset();
        });
    }
}

// Inisialisasi tambahan setelah semua komponen dimuat
window.addEventListener('load', function() {
    // Tambahkan efek paralaks pada hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.backgroundPosition = `center ${rate}px`;
    });
    
    // Tambahkan tahun dinamis di footer
    const currentYear = new Date().getFullYear();
    const yearSpan = document.querySelector('.footer-year');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }
    
    // Setup formulir kontak jika ada
    setupContactForm();
    
    // Tampilkan notifikasi sambutan
    setTimeout(() => {
        showNotification(`Selamat datang di website resmi ${schoolData.name}!`, 'info');
    }, 3000);
});
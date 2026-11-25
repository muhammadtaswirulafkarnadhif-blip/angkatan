// =========================================================
// 1. DATA 48 ANGGOTA (Ganti nama, handle, quote & foto lokalmu)
// =========================================================
const membersData = [
    { id: 1, name: "M. Taswirul Afkar", handle: "@nadil.dev", quote: "Bukan cuma soal kode yang jalan, tapi kenangan yang terus bertahan.", img: "https://picsum.photos/seed/gen5m1/500/620" },
    { id: 2, name: "Ahmad Fauzan", handle: "@ahmadfauzan_", quote: "Belajar hari ini, berkarya untuk masa depan.", img: "https://picsum.photos/seed/gen5m2/500/620" },
    { id: 3, name: "Bagas Pratama", handle: "@bagaspratama", quote: "Ngoding bareng, pusing bareng, sukses bareng.", img: "https://picsum.photos/seed/gen5m3/500/620" },
    { id: 4, name: "Cahyo Nugroho", handle: "@cahyonugroho", quote: "Solidaritas tanpa batas di PeTIK II Gen 5.", img: "https://picsum.photos/seed/gen5m4/500/620" },
    { id: 5, name: "Dimas Saputra", handle: "@dimassaputra_", quote: "Error itu biasa, menyerah itu bukan pilihan.", img: "https://picsum.photos/seed/gen5m5/500/620" },
    { id: 6, name: "Eko Wahyudi", handle: "@ekowahyudi", quote: "Langkah kecil tiap hari membawa perubahan besar.", img: "https://picsum.photos/seed/gen5m6/500/620" },
    { id: 7, name: "Farhan Ramadhan", handle: "@farhanrmdhn", quote: "Terus bertumbuh dan jangan lupa bersyukur.", img: "https://picsum.photos/seed/gen5m7/500/620" },
    { id: 8, name: "Galih Setiawan", handle: "@galihsetia_", quote: "Kopi hangat dan kode bersih adalah kunci.", img: "https://picsum.photos/seed/gen5m8/500/620" },
    { id: 9, name: "Hafidz Maulana", handle: "@hafidzmaulana", quote: "Masuk dengan harapan, keluar membawa keahlian.", img: "https://picsum.photos/seed/gen5m9/500/620" },
    { id: 10, name: "Ilham Kurniawan", handle: "@ilhamkrnwn", quote: "Tetap tenang meski deadline di depan mata.", img: "https://picsum.photos/seed/gen5m10/500/620" },
    { id: 11, name: "Joko Santoso", handle: "@jokosantoso_", quote: "Satu tim, satu mimpi, satu angkatan.", img: "https://picsum.photos/seed/gen5m11/500/620" },
    { id: 12, name: "Kevin Darmawan", handle: "@kevindrmwn", quote: "Kreativitas tidak pernah mengenal batas.", img: "https://picsum.photos/seed/gen5m12/500/620" },
    { id: 13, name: "Lukman Hakim", handle: "@lukmanhkm_", quote: "Proses tidak akan pernah mengkhianati hasil.", img: "https://picsum.photos/seed/gen5m13/500/620" },
    { id: 14, name: "M. Rizky Pratama", handle: "@rizkypratama", quote: "Jadikan setiap baris kode penuh makna.", img: "https://picsum.photos/seed/gen5m14/500/620" },
    { id: 15, name: "Naufal Hidayat", handle: "@naufalhdy_", quote: "Kebersamaan di sini tak akan tergantikan.", img: "https://picsum.photos/seed/gen5m15/500/620" },
    { id: 16, name: "Oki Firmansyah", handle: "@okifirmansyah", quote: "Tetap rendah hati dan terus belajar hal baru.", img: "https://picsum.photos/seed/gen5m16/500/620" },
    { id: 17, name: "Panji Wibowo", handle: "@panjiwibowo", quote: "Waktu cepat berlalu, kenangan tetap abadi.", img: "https://picsum.photos/seed/gen5m17/500/620" },
    { id: 18, name: "Qori Abdillah", handle: "@qoriabdillah", quote: "Bermanfaat bagi sesama lewat teknologi.", img: "https://picsum.photos/seed/gen5m18/500/620" },
    { id: 19, name: "Rafi Akbar", handle: "@rafiakbar_", quote: "Mimpi besar dimulai dari keberanian mencoba.", img: "https://picsum.photos/seed/gen5m19/500/620" },
    { id: 20, name: "Satria Pamungkas", handle: "@satriapmk", quote: "Pantang pulang sebelum project tuntas.", img: "https://picsum.photos/seed/gen5m20/500/620" },
    { id: 21, name: "Taufik Hidayat", handle: "@taufikhdy_", quote: "Semangat terus untuk kita semua Gen 5!", img: "https://picsum.photos/seed/gen5m21/500/620" },
    { id: 22, name: "Umar Al Faruq", handle: "@umarfaruq", quote: "Ilmu, adab, dan karya berjalan beriringan.", img: "https://picsum.photos/seed/gen5m22/500/620" },
    { id: 23, name: "Vino Mahendra", handle: "@vinomahendra", quote: "Setiap bug pasti ada solusinya.", img: "https://picsum.photos/seed/gen5m23/500/620" },
    { id: 24, name: "Wahyu Ramadhan", handle: "@wahyurmdhn_", quote: "Cerita terbaik lahir dari perjuangan bersama.", img: "https://picsum.photos/seed/gen5m24/500/620" },
    { id: 25, name: "Yoga Aditya", handle: "@yogaaditya", quote: "Jangan takut gagal, takutlah tidak mencoba.", img: "https://picsum.photos/seed/gen5m25/500/620" },
    { id: 26, name: "Zaki Mubarok", handle: "@zakimubarok", quote: "Fokus pada tujuan, nikmati setiap prosesnya.", img: "https://picsum.photos/seed/gen5m26/500/620" },
    { id: 27, name: "Adit Purnomo", handle: "@aditpurnomo", quote: "Gen 5 selalu di hati, sampai kapan pun.", img: "https://picsum.photos/seed/gen5m27/500/620" },
    { id: 28, name: "Bayu Kusuma", handle: "@bayukusuma_", quote: "Berawal dari asing, berakhir jadi saudara.", img: "https://picsum.photos/seed/gen5m28/500/620" },
    { id: 29, name: "Daffa Alfarizi", handle: "@daffaalfarizi", quote: "Terus berinovasi dan jangan cepat puas.", img: "https://picsum.photos/seed/gen5m29/500/620" },
    { id: 30, name: "Erlangga Putra", handle: "@erlanggaptr", quote: "Ketenangan adalah kunci menyelesaikan masalah.", img: "https://picsum.photos/seed/gen5m30/500/620" },
    { id: 31, name: "Fajar Shodiq", handle: "@fajarshodiq_", quote: "Hari ini belajar, esok memimpin perubahan.", img: "https://picsum.photos/seed/gen5m31/500/620" },
    { id: 32, name: "Gilang Ramadhan", handle: "@gilangrmdhn", quote: "Tetap solid di mana pun kita berada nanti.", img: "https://picsum.photos/seed/gen5m32/500/620" },
    { id: 33, name: "Hendra Wijaya", handle: "@hendrawjy", quote: "Kerja keras hari ini untuk senyum esok hari.", img: "https://picsum.photos/seed/gen5m33/500/620" },
    { id: 34, name: "Iqbal Maulana", handle: "@iqbalmaulana", quote: "Terima kasih atas tawa dan cerita selama ini.", img: "https://picsum.photos/seed/gen5m34/500/620" },
    { id: 35, name: "Kurnia Sandi", handle: "@kurniasandi_", quote: "Beda karakter, satu visi dan semangat.", img: "https://picsum.photos/seed/gen5m35/500/620" },
    { id: 36, name: "Lutfi Hakim", handle: "@lutfihakim", quote: "Sederhana dalam sikap, luar biasa dalam karya.", img: "https://picsum.photos/seed/gen5m36/500/620" },
    { id: 37, name: "M. Syahrul", handle: "@msyahrul_", quote: "Setiap tantangan adalah peluang untuk naik level.", img: "https://picsum.photos/seed/gen5m37/500/620" },
    { id: 38, name: "Nanda Pratama", handle: "@nandapratama", quote: "Jaga silaturahmi meski jarak memisahkan.", img: "https://picsum.photos/seed/gen5m38/500/620" },
    { id: 39, name: "Raka Yudha", handle: "@rakayudha_", quote: "Keep coding, keep praying, keep shining.", img: "https://picsum.photos/seed/gen5m39/500/620" },
    { id: 40, name: "Reza Fahlevi", handle: "@rezafahlevi", quote: "Kenangan asrama dan lab takkan pernah lupa.", img: "https://picsum.photos/seed/gen5m40/500/620" },
    { id: 41, name: "Ridwan Kamilin", handle: "@ridwankml", quote: "Terus melangkah walau pelan, asal tak berhenti.", img: "https://picsum.photos/seed/gen5m41/500/620" },
    { id: 42, name: "Rizal Efendi", handle: "@rizalefendi_", quote: "Bangga menjadi bagian dari PeTIK II Gen 5.", img: "https://picsum.photos/seed/gen5m42/500/620" },
    { id: 43, name: "Salman Alfarisi", handle: "@salmanalf_", quote: "Jadilah versi terbaik dari dirimu sendiri.", img: "https://picsum.photos/seed/gen5m43/500/620" },
    { id: 44, name: "Teguh Santoso", handle: "@teguhsnt", quote: "Disiplin adalah jembatan menuju impian.", img: "https://picsum.photos/seed/gen5m44/500/620" },
    { id: 45, name: "Wawan Setiawan", handle: "@wawansetia", quote: "Sukses bersama jauh lebih indah dari sukses sendiri.", img: "https://picsum.photos/seed/gen5m45/500/620" },
    { id: 46, name: "Yusuf Mansur", handle: "@yusufmnsr_", quote: "Doa, usaha, dan tawakal kunci segalanya.", img: "https://picsum.photos/seed/gen5m46/500/620" },
    { id: 47, name: "Zainal Abidin", handle: "@zainalabdn", quote: "Dari Jombang melangkah menembus dunia teknologi.", img: "https://picsum.photos/seed/gen5m47/500/620" },
    { id: 48, name: "Zulfikar Akbar", handle: "@zulfikarakbar", quote: "Sampai jumpa di puncak kesuksesan, kawan!", img: "https://picsum.photos/seed/gen5m48/500/620" }
];

// =========================================================
// 2. DATA 15 FOTO OUR MEMORIES (Ganti dengan foto kegiatanmu)
// =========================================================
const memoriesData = [
    { img: "https://picsum.photos/seed/memgen5_1/1400/800", title: "Momen Foto Angkatan Outdoor", date: "NOVEMBER 2026" },
    { img: "https://picsum.photos/seed/memgen5_2/1400/800", title: "Kebersamaan Setelah Presentasi Project", date: "OKTOBER 2026" },
    { img: "https://picsum.photos/seed/memgen5_3/1400/800", title: "Sore Santai Bareng Gen 5", date: "OKTOBER 2026" },
    { img: "https://picsum.photos/seed/memgen5_4/1400/800", title: "Diskusi & Ngoding Bareng di Lab", date: "SEPTEMBER 2026" },
    { img: "https://picsum.photos/seed/memgen5_5/1400/800", title: "Outing Class & Games Kekompakan", date: "SEPTEMBER 2026" },
    { img: "https://picsum.photos/seed/memgen5_6/1400/800", title: "Makan Bersama Setelah Ujian", date: "AGUSTUS 2026" },
    { img: "https://picsum.photos/seed/memgen5_7/1400/800", title: "Semarak Lomba 17 Agustus Gen 5", date: "AGUSTUS 2026" },
    { img: "https://picsum.photos/seed/memgen5_8/1400/800", title: "Workshop Web & Desain UI/UX", date: "JULI 2026" },
    { img: "https://picsum.photos/seed/memgen5_9/1400/800", title: "Futsal Bareng Akhir Pekan", date: "JULI 2026" },
    { img: "https://picsum.photos/seed/memgen5_10/1400/800", title: "Malam Keakraban Angkatan", date: "JUNI 2026" },
    { img: "https://picsum.photos/seed/memgen5_11/1400/800", title: "Kajian & Berbagi Cerita Bersama", date: "JUNI 2026" },
    { img: "https://picsum.photos/seed/memgen5_12/1400/800", title: "Kerja Bakti & Bersih Lingkungan", date: "MEI 2026" },
    { img: "https://picsum.photos/seed/memgen5_13/1400/800", title: "Sesi Foto Seragam Angkatan", date: "MEI 2026" },
    { img: "https://picsum.photos/seed/memgen5_14/1400/800", title: "Persiapan Lomba & Presentasi Tim", date: "APRIL 2026" },
    { img: "https://picsum.photos/seed/memgen5_15/1400/800", title: "Hari Pertama Masuk PeTIK II Jombang", date: "MARET 2026" }
];

// =========================================================
// 3. ENGINE CONFETTI RINGAN (CANVAS)
// =========================================================
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function launchConfetti(originX = window.innerWidth / 2, originY = window.innerHeight / 2, count = 85) {
    const colors = ["#2563eb", "#38bdf8", "#f97316", "#facc15", "#10b981", "#ec4899"];
    for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 4 + Math.random() * 9;
        particles.push({
            x: originX,
            y: originY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 4,
            size: 5 + Math.random() * 6,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 12,
            life: 1
        });
    }
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => p.life > 0);

    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.22;
        p.rotation += p.rotSpeed;
        p.life -= 0.012;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
    });

    requestAnimationFrame(animateConfetti);
}
animateConfetti();

// =========================================================
// 4. LOGIKA UTAMA HALAMAN
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const introCurtain = document.getElementById("introCurtain");
    const enterBtn = document.getElementById("enterBtn");
    const replayIntroBtn = document.getElementById("replayIntroBtn");
    const themeToggle = document.getElementById("themeToggle");

    // Kunci scroll sebelum tirai dibuka
    body.classList.add("locked");

    // Buka Tirai Intro + Confetti
    enterBtn.addEventListener("click", (e) => {
        introCurtain.classList.add("opened");
        body.classList.remove("locked");
        launchConfetti(e.clientX, e.clientY, 110);
    });

    // Tutup Tirai Lagi (Replay Intro)
    replayIntroBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        introCurtain.classList.remove("opened");
        body.classList.add("locked");
    });

    // Dark / Light Mode Toggle
    if (localStorage.getItem("yearbook-theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");
        localStorage.setItem("yearbook-theme", isDark ? "dark" : "light");
        themeToggle.innerHTML = isDark
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';
    });

    // Scroll Progress & Active Nav
    const scrollProgress = document.getElementById("scrollProgress");
    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        scrollProgress.style.width = `${(scrollTop / maxScroll) * 100}%`;

        let current = "hero";
        sections.forEach(sec => {
            if (scrollTop >= sec.offsetTop - 220) current = sec.id;
        });

        navItems.forEach(item => {
            item.classList.toggle("active", item.getAttribute("href") === `#${current}`);
        });
    });

    // Efek 3D Tilt ringan pada Hero Photo
    const heroPhotoBox = document.getElementById("heroPhotoBox");
    heroPhotoBox.addEventListener("mousemove", (e) => {
        const rect = heroPhotoBox.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        heroPhotoBox.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    });

    heroPhotoBox.addEventListener("mouseleave", () => {
        heroPhotoBox.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    });

    // Update badge jumlah anggota
    document.getElementById("memberCountBadge").textContent = `${membersData.length} Students`;

    // =========================================================
    // 5. RENDER 48 POLAROID MEMBERS + LIVE SEARCH + RANDOM
    // =========================================================
    const membersGrid = document.getElementById("membersGrid");
    const emptyState = document.getElementById("emptyState");
    const shownCount = document.getElementById("shownCount");
    const searchInput = document.getElementById("memberSearch");
    const randomBtn = document.getElementById("randomBtn");

    let searchQuery = "";
    const likesStore = JSON.parse(localStorage.getItem("yearbook-likes") || "{}");

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    function renderMembers() {
        const q = searchQuery.toLowerCase();
        const filtered = membersData.filter(m =>
            m.name.toLowerCase().includes(q) ||
            m.handle.toLowerCase().includes(q) ||
            m.quote.toLowerCase().includes(q)
        );

        emptyState.hidden = filtered.length > 0;
        shownCount.textContent = `${filtered.length} / ${membersData.length} Anggota`;

        const tilts = [-2.2, 1.8, -1.5, 2.4, 1.2, -2.5];

        membersGrid.innerHTML = filtered.map((m, idx) => `
            <div class="member-wrap" data-id="${m.id}" style="transition-delay: ${(idx % 4) * 60}ms">
                <div class="polaroid-card" style="--tilt: ${tilts[idx % tilts.length]}deg">
                    <div class="polaroid-photo-box">
                        <img src="${m.img}" alt="${m.name}" loading="lazy">
                        <span class="polaroid-tag">GEN 5</span>
                    </div>
                    <h3 class="polaroid-name">${m.name}</h3>
                </div>
                <div class="member-meta">
                    <p class="member-quote">"${m.quote}"</p>
                    <a href="https://instagram.com/${m.handle.replace('@', '')}" target="_blank" class="member-ig">
                        <i class="fa-brands fa-instagram"></i> ${m.handle}
                    </a>
                </div>
            </div>
        `).join("");

        document.querySelectorAll(".member-wrap").forEach(wrap => {
            revealObserver.observe(wrap);
            const card = wrap.querySelector(".polaroid-card");
            card.addEventListener("click", () => {
                const member = membersData.find(item => item.id === Number(wrap.dataset.id));
                if (member) openMemberModal(member);
            });
        });
    }

    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim();
        renderMembers();
    });

    randomBtn.addEventListener("click", () => {
        const cards = [...document.querySelectorAll(".member-wrap")];
        if (!cards.length) return;

        cards.forEach(c => c.classList.remove("spotlight-pulse"));
        const chosen = cards[Math.floor(Math.random() * cards.length)];
        chosen.scrollIntoView({ behavior: "smooth", block: "center" });
        chosen.classList.add("spotlight-pulse");
        launchConfetti(window.innerWidth / 2, window.innerHeight / 2, 70);

        setTimeout(() => chosen.classList.remove("spotlight-pulse"), 2800);
    });

    renderMembers();

    // =========================================================
    // 6. MODAL POLAROID + FITUR LIKE
    // =========================================================
    const memberModal = document.getElementById("memberModal");
    const modalClose = document.getElementById("modalClose");
    const modalLikeBtn = document.getElementById("modalLikeBtn");
    const modalLikeCount = document.getElementById("modalLikeCount");
    let currentModalMemberId = null;

    function openMemberModal(member) {
        currentModalMemberId = member.id;
        document.getElementById("modalImg").src = member.img;
        document.getElementById("modalRole").textContent = "GEN 5";
        document.getElementById("modalName").textContent = member.name;
        document.getElementById("modalQuote").textContent = `"${member.quote}"`;

        const handleEl = document.getElementById("modalHandle");
        handleEl.href = `https://instagram.com/${member.handle.replace('@', '')}`;
        handleEl.querySelector("span").textContent = member.handle;

        modalLikeCount.textContent = likesStore[member.id] || 0;
        memberModal.classList.add("open");
    }

    modalLikeBtn.addEventListener("click", (e) => {
        if (!currentModalMemberId) return;
        likesStore[currentModalMemberId] = (likesStore[currentModalMemberId] || 0) + 1;
        localStorage.setItem("yearbook-likes", JSON.stringify(likesStore));
        modalLikeCount.textContent = likesStore[currentModalMemberId];
        launchConfetti(e.clientX, e.clientY, 28);
    });

    modalClose.addEventListener("click", () => memberModal.classList.remove("open"));
    memberModal.addEventListener("click", (e) => {
        if (e.target === memberModal) memberModal.classList.remove("open");
    });

    // =========================================================
    // 7. OUR MEMORIES (15 FOTO) CAROUSEL + SWIPE + LIGHTBOX
    // =========================================================
    const track = document.getElementById("carouselTrack");
    const viewport = document.getElementById("carouselViewport");
    const dotsContainer = document.getElementById("carouselDots");
    const slideTitle = document.getElementById("slideTitle");
    const slideDate = document.getElementById("slideDate");
    const slideCounter = document.getElementById("slideCounter");
    const progressBar = document.getElementById("carouselProgress");
    const autoplayToggle = document.getElementById("autoplayToggle");
    const fullscreenBtn = document.getElementById("fullscreenBtn");

    let currentSlide = 0;
    let isAutoplay = true;
    const SLIDE_DURATION = 4500;
    let progressStart = Date.now();

    track.innerHTML = memoriesData.map(m => `
        <div class="carousel-slide">
            <img src="${m.img}" alt="${m.title}" loading="lazy">
        </div>
    `).join("");

    dotsContainer.innerHTML = memoriesData.map((_, i) => `
        <button class="dot-btn ${i === 0 ? "active" : ""}" data-index="${i}" aria-label="Slide ${i + 1}"></button>
    `).join("");

    function goToSlide(index) {
        currentSlide = (index + memoriesData.length) % memoriesData.length;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        const current = memoriesData[currentSlide];
        slideTitle.textContent = current.title;
        slideDate.textContent = current.date;
        slideCounter.textContent = `${currentSlide + 1} / ${memoriesData.length}`;

        dotsContainer.querySelectorAll(".dot-btn").forEach((dot, i) => {
            dot.classList.toggle("active", i === currentSlide);
        });

        progressStart = Date.now();
        progressBar.style.width = "0%";
    }

    function tickAutoplay() {
        if (isAutoplay) {
            const elapsed = Date.now() - progressStart;
            const pct = Math.min(100, (elapsed / SLIDE_DURATION) * 100);
            progressBar.style.width = `${pct}%`;
            if (elapsed >= SLIDE_DURATION) {
                goToSlide(currentSlide + 1);
            }
        }
        requestAnimationFrame(tickAutoplay);
    }

    document.getElementById("prevSlide").addEventListener("click", () => goToSlide(currentSlide - 1));
    document.getElementById("nextSlide").addEventListener("click", () => goToSlide(currentSlide + 1));

    dotsContainer.querySelectorAll(".dot-btn").forEach(dot => {
        dot.addEventListener("click", () => goToSlide(Number(dot.dataset.index)));
    });

    autoplayToggle.addEventListener("click", () => {
        isAutoplay = !isAutoplay;
        progressStart = Date.now();
        autoplayToggle.innerHTML = isAutoplay
            ? '<i class="fa-solid fa-pause"></i>'
            : '<i class="fa-solid fa-play"></i>';
    });

    // Swipe / Drag dengan Mouse & Touch
    let startX = 0;
    let isDragging = false;

    const onDragStart = (x) => { startX = x; isDragging = true; };
    const onDragEnd = (x) => {
        if (!isDragging) return;
        isDragging = false;
        const diff = x - startX;
        if (Math.abs(diff) > 50) {
            goToSlide(diff < 0 ? currentSlide + 1 : currentSlide - 1);
        }
    };

    viewport.addEventListener("mousedown", (e) => onDragStart(e.clientX));
    window.addEventListener("mouseup", (e) => onDragEnd(e.clientX));
    viewport.addEventListener("touchstart", (e) => onDragStart(e.touches[0].clientX), { passive: true });
    viewport.addEventListener("touchend", (e) => onDragEnd(e.changedTouches[0].clientX));

    // Navigasi Keyboard
    window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") goToSlide(currentSlide + 1);
        if (e.key === "ArrowLeft") goToSlide(currentSlide - 1);
        if (e.key === "Escape") {
            memberModal.classList.remove("open");
            lightbox.classList.remove("open");
        }
    });

    // Lightbox Fullscreen
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");

    fullscreenBtn.addEventListener("click", () => {
        const current = memoriesData[currentSlide];
        lightboxImg.src = current.img;
        lightboxCaption.textContent = `${current.title} — ${current.date}`;
        lightbox.classList.add("open");
    });

    document.getElementById("lightboxClose").addEventListener("click", () => lightbox.classList.remove("open"));
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) lightbox.classList.remove("open");
    });

    // Tombol Rayakan di Footer
    document.getElementById("celebrateBtn").addEventListener("click", (e) => {
        launchConfetti(e.clientX, e.clientY, 130);
    });

    goToSlide(0);
    tickAutoplay();
});
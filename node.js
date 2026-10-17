```html
<!DOCTYPE html>
<html lang="id" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GamePulse - Top Up Game Instan 24 Jam</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        brand: {
                            dark: '#080c14',
                            card: '#111827',
                            border: '#1f293d',
                            cyan: '#00f2fe',
                            purple: '#7000ff',
                            neonPink: '#ff007f'
                        }
                    },
                    fontFamily: {
                        outfit: ['Outfit', 'sans-serif'],
                        jakarta: ['Plus Jakarta Sans', 'sans-serif']
                    }
                }
            }
        }
    </script>

    <style>
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #080c14;
            color: #f3f4f6;
            overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6, .font-heading {
            font-family: 'Outfit', sans-serif;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #080c14;
        }
        ::-webkit-scrollbar-thumb {
            background: #1f293d;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #00f2fe;
        }

        /* Glowing Effects */
        .glow-cyan {
            box-shadow: 0 0 20px rgba(0, 242, 254, 0.35);
        }
        .glow-purple {
            box-shadow: 0 0 20px rgba(112, 0, 255, 0.35);
        }
        .text-glow {
            text-shadow: 0 0 12px rgba(0, 242, 254, 0.6);
        }

        /* Neon Border Gradient */
        .border-gradient {
            border: 1px solid transparent;
            background-image: linear-gradient(#111827, #111827), linear-gradient(135deg, #00f2fe, #7000ff);
            background-origin: border-box;
            background-clip: padding-box, border-box;
        }

        /* Active Item Effect */
        .item-selected {
            border-color: #00f2fe !important;
            background: linear-gradient(135deg, rgba(0,242,254,0.1) 0%, rgba(112,0,255,0.1) 100%);
            box-shadow: 0 0 15px rgba(0, 242, 254, 0.3);
        }

        /* Glassmorphism */
        .glass-panel {
            background: rgba(17, 24, 39, 0.75);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* Custom Animations */
        @keyframes pulseGlow {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
        }
        .animate-pulse-glow {
            animation: pulseGlow 3s infinite ease-in-out;
        }
    </style>
</head>
<body class="min-h-screen flex flex-col justify-between selection:bg-brand-cyan selection:text-black">

    <!-- Ambient Background Lighting -->
    <div class="fixed top-0 left-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
    <div class="fixed bottom-1/3 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>

    <!-- NAVBAR -->
    <header class="sticky top-0 z-40 glass-panel border-b border-brand-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
            <!-- Brand Logo -->
            <a href="#" class="flex items-center gap-3 group">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-purple flex items-center justify-center text-black font-black text-xl shadow-lg shadow-brand-cyan/20 group-hover:scale-105 transition-transform">
                    <i class="fa-solid font-bold fa-bolt text-slate-950"></i>
                </div>
                <div class="flex flex-col">
                    <span class="font-heading font-extrabold text-2xl tracking-wider text-white flex items-center gap-1">
                        GAME<span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">PULSE</span>
                    </span>
                    <span class="text-[10px] text-gray-400 tracking-widest uppercase -mt-1 font-semibold">Instant Game TopUp</span>
                </div>
            </a>

            <!-- Search Bar (Desktop) -->
            <div class="hidden md:flex flex-1 max-w-md relative">
                <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input type="text" id="searchInput" onkeyup="filterGames()" placeholder="Cari game favoritmu (cth: Mobile Legends, Valorant)..." 
                    class="w-full pl-11 pr-4 py-2.5 bg-gray-900/80 border border-brand-border rounded-xl text-sm focus:outline-none focus:border-brand-cyan transition-all text-white placeholder-gray-500">
            </div>

            <!-- Navigation Links -->
            <nav class="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
                <a href="#games" class="hover:text-brand-cyan transition-colors active flex items-center gap-2 text-white">
                    <i class="fa-solid fa-gamepad text-brand-cyan"></i> Beranda
                </a>
                <a href="#cek-transaksi" class="hover:text-brand-cyan transition-colors flex items-center gap-2">
                    <i class="fa-solid fa-receipt text-gray-400"></i> Cek Transaksi
                </a>
                <a href="#daftar-harga" class="hover:text-brand-cyan transition-colors flex items-center gap-2">
                    <i class="fa-solid fa-tags text-gray-400"></i> Daftar Harga
                </a>
                <a href="#bantuan" class="hover:text-brand-cyan transition-colors flex items-center gap-2">
                    <i class="fa-solid fa-headset text-gray-400"></i> Bantuan
                </a>
            </nav>

            <!-- Mobile Menu Toggle Button -->
            <button onclick="toggleMobileMenu()" class="lg:hidden p-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white">
                <i class="fa-solid fa-bars text-xl" id="menuIcon"></i>
            </button>
        </div>

        <!-- Mobile Navigation Menu -->
        <div id="mobileMenu" class="hidden lg:hidden bg-brand-card border-b border-brand-border px-4 py-4 space-y-3">
            <div class="relative mb-3">
                <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input type="text" id="mobileSearchInput" onkeyup="filterGamesMobile()" placeholder="Cari game..." 
                    class="w-full pl-11 pr-4 py-2.5 bg-gray-900 border border-brand-border rounded-xl text-sm text-white focus:outline-none focus:border-brand-cyan">
            </div>
            <a href="#games" onclick="toggleMobileMenu()" class="block py-2 text-white font-medium hover:text-brand-cyan"><i class="fa-solid fa-gamepad mr-2 text-brand-cyan"></i> Beranda</a>
            <a href="#cek-transaksi" onclick="toggleMobileMenu()" class="block py-2 text-gray-300 font-medium hover:text-brand-cyan"><i class="fa-solid fa-receipt mr-2"></i> Cek Transaksi</a>
            <a href="#daftar-harga" onclick="toggleMobileMenu()" class="block py-2 text-gray-300 font-medium hover:text-brand-cyan"><i class="fa-solid fa-tags mr-2"></i> Daftar Harga</a>
            <a href="#bantuan" onclick="toggleMobileMenu()" class="block py-2 text-gray-300 font-medium hover:text-brand-cyan"><i class="fa-solid fa-headset mr-2"></i> Bantuan</a>
        </div>
    </header>

    <!-- MAIN CONTENT CONTAINER -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">

        <!-- BANNER CAROUSEL / HERO -->
        <section class="relative overflow-hidden rounded-3xl border border-brand-border bg-gradient-to-r from-gray-900 via-brand-card to-gray-900 shadow-2xl">
            <div id="carousel" class="relative min-h-[220px] sm:min-h-[280px] md:min-h-[320px] flex items-center">
                <!-- Slide 1 -->
                <div class="carousel-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-100 flex items-center p-6 sm:p-12">
                    <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20"></div>
                    <div class="relative z-10 max-w-xl space-y-4">
                        <span class="inline-block px-3 py-1 bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan text-xs font-bold rounded-full uppercase tracking-wider">
                            <i class="fa-solid fa-fire mr-1"></i> Promo Terpanas
                        </span>
                        <h2 class="text-2xl sm:text-4xl font-extrabold text-white leading-tight font-heading">
                            DISCOUNT 20% <span class="text-brand-cyan">MOBILE LEGENDS</span>
                        </h2>
                        <p class="text-gray-300 text-xs sm:text-sm">Top-up Diamond MLBB Instan & Otomatis 24/7. Dapatkan bonus Weekly Diamond Pass hari ini!</p>
                        <a href="#games" class="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-cyan to-blue-600 text-black font-bold text-sm rounded-xl shadow-lg hover:shadow-brand-cyan/30 hover:scale-105 transition-all">
                            Top Up Sekarang <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <!-- Slide 2 -->
                <div class="carousel-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 flex items-center p-6 sm:p-12">
                    <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20"></div>
                    <div class="relative z-10 max-w-xl space-y-4">
                        <span class="inline-block px-3 py-1 bg-brand-purple/30 border border-brand-purple/50 text-purple-300 text-xs font-bold rounded-full uppercase tracking-wider">
                            <i class="fa-solid fa-bolt mr-1"></i> Flash Sale
                        </span>
                        <h2 class="text-2xl sm:text-4xl font-extrabold text-white leading-tight font-heading">
                            VALORANT POINTS <span class="text-brand-purple">EXTRA BONUS</span>
                        </h2>
                        <p class="text-gray-300 text-xs sm:text-sm">Proses pengisian kilat kurang dari 5 detik via QRIS & E-Wallet terpercaya.</p>
                        <a href="#games" class="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-purple to-pink-600 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-brand-purple/30 hover:scale-105 transition-all">
                            Klaim Promo <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Carousel Indicators -->
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                <button onclick="setSlide(0)" class="slide-dot w-8 h-2 rounded-full bg-brand-cyan transition-all"></button>
                <button onclick="setSlide(1)" class="slide-dot w-2 h-2 rounded-full bg-gray-600 hover:bg-gray-400 transition-all"></button>
            </div>
        </section>

        <!-- GAME SELECTION GRID -->
        <section id="games" class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h3 class="text-2xl font-bold text-white font-heading flex items-center gap-2">
                        <i class="fa-solid fa-fire text-brand-cyan"></i> Pilih Game Favorit
                    </h3>
                    <p class="text-gray-400 text-sm">Pilih game yang ingin kamu isi ulang saldonya</p>
                </div>
                <!-- Category Tabs -->
                <div class="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
                    <button onclick="filterCategory('all')" class="cat-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-brand-cyan to-blue-600 text-black shadow-md transition-all whitespace-nowrap">Semua Game</button>
                    <button onclick="filterCategory('mobile')" class="cat-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-brand-card text-gray-300 hover:text-white border border-brand-border transition-all whitespace-nowrap">Mobile Games</button>
                    <button onclick="filterCategory('pc')" class="cat-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-brand-card text-gray-300 hover:text-white border border-brand-border transition-all whitespace-nowrap">PC Games</button>
                </div>
            </div>

            <!-- Game Cards Grid -->
            <div id="gameGrid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <!-- Mobile Legends -->
                <div onclick="selectGame('mlbb')" data-category="mobile" data-name="mobile legends bang bang mlbb" 
                     class="game-card group cursor-pointer bg-brand-card border border-brand-border rounded-2xl p-3 hover:border-brand-cyan hover:shadow-lg hover:shadow-brand-cyan/20 transition-all duration-300 flex flex-col justify-between">
                    <div class="relative overflow-hidden rounded-xl aspect-[3/4] mb-3">
                        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80" alt="Mobile Legends" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <span class="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase shadow">Populer</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-sm text-white group-hover:text-brand-cyan transition-colors line-clamp-1">Mobile Legends</h4>
                        <p class="text-[11px] text-gray-400">Moonton</p>
                    </div>
                </div>

                <!-- Free Fire -->
                <div onclick="selectGame('ff')" data-category="mobile" data-name="free fire ff garena" 
                     class="game-card group cursor-pointer bg-brand-card border border-brand-border rounded-2xl p-3 hover:border-brand-cyan hover:shadow-lg hover:shadow-brand-cyan/20 transition-all duration-300 flex flex-col justify-between">
                    <div class="relative overflow-hidden rounded-xl aspect-[3/4] mb-3">
                        <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80" alt="Free Fire" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <span class="absolute top-2 right-2 bg-brand-purple text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase shadow">Instan</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-sm text-white group-hover:text-brand-cyan transition-colors line-clamp-1">Free Fire</h4>
                        <p class="text-[11px] text-gray-400">Garena</p>
                    </div>
                </div>

                <!-- PUBG Mobile -->
                <div onclick="selectGame('pubg')" data-category="mobile" data-name="pubg mobile tencent" 
                     class="game-card group cursor-pointer bg-brand-card border border-brand-border rounded-2xl p-3 hover:border-brand-cyan hover:shadow-lg hover:shadow-brand-cyan/20 transition-all duration-300 flex flex-col justify-between">
                    <div class="relative overflow-hidden rounded-xl aspect-[3/4] mb-3">
                        <img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=400&q=80" alt="PUBG Mobile" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    </div>
                    <div>
                        <h4 class="font-bold text-sm text-white group-hover:text-brand-cyan transition-colors line-clamp-1">PUBG Mobile</h4>
                        <p class="text-[11px] text-gray-400">Tencent Games</p>
                    </div>
                </div>

                <!-- Valorant -->
                <div onclick="selectGame('valorant')" data-category="pc" data-name="valorant riot points vp" 
                     class="game-card group cursor-pointer bg-brand-card border border-brand-border rounded-2xl p-3 hover:border-brand-cyan hover:shadow-lg hover:shadow-brand-cyan/20 transition-all duration-300 flex flex-col justify-between">
                    <div class="relative overflow-hidden rounded-xl aspect-[3/4] mb-3">
                        <img src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80" alt="Valorant" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <span class="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase shadow">Hot</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-sm text-white group-hover:text-brand-cyan transition-colors line-clamp-1">Valorant</h4>
                        <p class="text-[11px] text-gray-400">Riot Games</p>
                    </div>
                </div>

                <!-- Genshin Impact -->
                <div onclick="selectGame('genshin')" data-category="mobile" data-name="genshin impact hoyoverse genesis crystals" 
                     class="game-card group cursor-pointer bg-brand-card border border-brand-border rounded-2xl p-3 hover:border-brand-cyan hover:shadow-lg hover:shadow-brand-cyan/20 transition-all duration-300 flex flex-col justify-between">
                    <div class="relative overflow-hidden rounded-xl aspect-[3/4] mb-3">
                        <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80" alt="Genshin Impact" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    </div>
                    <div>
                        <h4 class="font-bold text-sm text-white group-hover:text-brand-cyan transition-colors line-clamp-1">Genshin Impact</h4>
                        <p class="text-[11px] text-gray-400">Hoyoverse</p>
                    </div>
                </div>

                <!-- Honor of Kings -->
                <div onclick="selectGame('hok')" data-category="mobile" data-name="honor of kings hok level-infinite" 
                     class="game-card group cursor-pointer bg-brand-card border border-brand-border rounded-2xl p-3 hover:border-brand-cyan hover:shadow-lg hover:shadow-brand-cyan/20 transition-all duration-300 flex flex-col justify-between">
                    <div class="relative overflow-hidden rounded-xl aspect-[3/4] mb-3">
                        <img src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=400&q=80" alt="Honor of Kings" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <span class="absolute top-2 right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase shadow">Baru</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-sm text-white group-hover:text-brand-cyan transition-colors line-clamp-1">Honor of Kings</h4>
                        <p class="text-[11px] text-gray-400">Level Infinite</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- INTERACTIVE TOP-UP FORM SECTION -->
        <section id="formSection" class="scroll-mt-24">
            <!-- Form Card Wrapper -->
            <div class="bg-brand-card border border-brand-border rounded-3xl p-4 sm:p-8 space-y-8 relative overflow-hidden shadow-2xl">
                
                <!-- Selected Game Banner -->
                <div class="flex items-center gap-4 pb-6 border-b border-brand-border">
                    <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-brand-cyan shadow-lg shadow-brand-cyan/20">
                        <img id="selectedGameImg" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80" class="w-full h-full object-cover" alt="Selected Game">
                    </div>
                    <div>
                        <span class="text-xs text-brand-cyan font-bold tracking-wider uppercase">Game Terpilih</span>
                        <h3 id="selectedGameTitle" class="text-2xl sm:text-3xl font-extrabold text-white font-heading">Mobile Legends: Bang Bang</h3>
                        <p class="text-xs sm:text-sm text-gray-400">Proses otomatis instan masuk ke akun Anda</p>
                    </div>
                </div>

                <!-- STEP 1: INPUT ID AKUN -->
                <div class="space-y-4">
                    <div class="flex items-center gap-3">
                        <span class="w-8 h-8 rounded-full bg-gradient-to-r from-brand-cyan to-blue-600 text-black font-extrabold flex items-center justify-center text-sm shadow">1</span>
                        <h4 class="text-lg font-bold text-white font-heading">Masukkan Data Akun</h4>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                        <div>
                            <label class="block text-xs font-semibold text-gray-300 mb-1">User ID / ID Akun</label>
                            <input type="number" id="userIdInput" placeholder="Contoh: 12345678" 
                                class="w-full px-4 py-3 bg-gray-900 border border-brand-border rounded-xl text-sm text-white focus:outline-none focus:border-brand-cyan transition-all">
                        </div>
                        <div id="zoneIdWrapper">
                            <label class="block text-xs font-semibold text-gray-300 mb-1">Zone ID / Server ID</label>
                            <input type="number" id="zoneIdInput" placeholder="Contoh: 1234" 
                                class="w-full px-4 py-3 bg-gray-900 border border-brand-border rounded-xl text-sm text-white focus:outline-none focus:border-brand-cyan transition-all">
                        </div>
                    </div>

                    <!-- Check ID Button & Validation Feedback -->
                    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <button onclick="checkAccount()" class="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-brand-cyan border border-brand-cyan/40 rounded-xl text-xs font-bold transition-all flex items-center gap-2">
                            <i class="fa-solid fa-magnifying-glass"></i> Cek Nickname Akun
                        </button>
                        <span id="accountCheckResult" class="text-xs font-semibold text-gray-400"></span>
                    </div>
                </div>

                <!-- STEP 2: NOMINAL TOP UP -->
                <div class="space-y-4">
                    <div class="flex items-center gap-3">
                        <span class="w-8 h-8 rounded-full bg-gradient-to-r from-brand-cyan to-blue-600 text-black font-extrabold flex items-center justify-center text-sm shadow">2</span>
                        <h4 class="text-lg font-bold text-white font-heading">Pilih Nominal Top Up</h4>
                    </div>

                    <div id="denomContainer" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        <!-- Dynamic items generated by JS -->
                    </div>
                </div>

                <!-- STEP 3: METODE PEMBAYARAN -->
                <div class="space-y-4">
                    <div class="flex items-center gap-3">
                        <span class="w-8 h-8 rounded-full bg-gradient-to-r from-brand-cyan to-blue-600 text-black font-extrabold flex items-center justify-center text-sm shadow">3</span>
                        <h4 class="text-lg font-bold text-white font-heading">Pilih Metode Pembayaran</h4>
                    </div>

                    <!-- Payment Categories Accordion / Grid -->
                    <div class="space-y-4">
                        <!-- QRIS -->
                        <div class="space-y-2">
                            <span class="text-xs font-bold uppercase text-gray-400 tracking-wider">QRIS / Instant Code</span>
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                <div onclick="selectPayment('qris', 'QRIS (All E-Wallet/Bank)', 0)" class="payment-card cursor-pointer bg-gray-900 border border-brand-border p-3.5 rounded-2xl hover:border-brand-cyan transition-all flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center">
                                            <i class="fa-solid fa-qrcode text-black text-2xl"></i>
                                        </div>
                                        <div>
                                            <p class="text-sm font-bold text-white">QRIS</p>
                                            <p class="text-[10px] text-gray-400">BCA, GoPay, OVO, Dana, dll</p>
                                        </div>
                                    </div>
                                    <span class="text-xs font-semibold text-emerald-400">Bebas Biaya</span>
                                </div>
                            </div>
                        </div>

                        <!-- E-Wallet -->
                        <div class="space-y-2">
                            <span class="text-xs font-bold uppercase text-gray-400 tracking-wider">E-Wallet</span>
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                <div onclick="selectPayment('dana', 'DANA', 1000)" class="payment-card cursor-pointer bg-gray-900 border border-brand-border p-3.5 rounded-2xl hover:border-brand-cyan transition-all flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs">DANA</div>
                                        <div>
                                            <p class="text-sm font-bold text-white">DANA</p>
                                            <p class="text-[10px] text-gray-400">Otomatis Terverifikasi</p>
                                        </div>
                                    </div>
                                    <span class="text-[11px] text-gray-400">+Rp 1.000</span>
                                </div>

                                <div onclick="selectPayment('gopay', 'GoPay', 1000)" class="payment-card cursor-pointer bg-gray-900 border border-brand-border p-3.5 rounded-2xl hover:border-brand-cyan transition-all flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">GOPAY</div>
                                        <div>
                                            <p class="text-sm font-bold text-white">GoPay</p>
                                            <p class="text-[10px] text-gray-400">Otomatis Terverifikasi</p>
                                        </div>
                                    </div>
                                    <span class="text-[11px] text-gray-400">+Rp 1.000</span>
                                </div>

                                <div onclick="selectPayment('ovo', 'OVO', 1000)" class="payment-card cursor-pointer bg-gray-900 border border-brand-border p-3.5 rounded-2xl hover:border-brand-cyan transition-all flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-xl bg-purple-700 text-white flex items-center justify-center font-bold text-xs">OVO</div>
                                        <div>
                                            <p class="text-sm font-bold text-white">OVO</p>
                                            <p class="text-[10px] text-gray-400">Otomatis Terverifikasi</p>
                                        </div>
                                    </div>
                                    <span class="text-[11px] text-gray-400">+Rp 1.000</span>
                                </div>
                            </div>
                        </div>

                        <!-- Virtual Account -->
                        <div class="space-y-2">
                            <span class="text-xs font-bold uppercase text-gray-400 tracking-wider">Virtual Account</span>
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                <div onclick="selectPayment('bca', 'BCA Virtual Account', 2500)" class="payment-card cursor-pointer bg-gray-900 border border-brand-border p-3.5 rounded-2xl hover:border-brand-cyan transition-all flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center font-bold text-xs">BCA</div>
                                        <div>
                                            <p class="text-sm font-bold text-white">BCA VA</p>
                                            <p class="text-[10px] text-gray-400">Transfer Bank</p>
                                        </div>
                                    </div>
                                    <span class="text-[11px] text-gray-400">+Rp 2.500</span>
                                </div>

                                <div onclick="selectPayment('mandiri', 'Mandiri Virtual Account', 2500)" class="payment-card cursor-pointer bg-gray-900 border border-brand-border p-3.5 rounded-2xl hover:border-brand-cyan transition-all flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-xs">MANDIRI</div>
                                        <div>
                                            <p class="text-sm font-bold text-white">Mandiri VA</p>
                                            <p class="text-[10px] text-gray-400">Transfer Bank</p>
                                        </div>
                                    </div>
                                    <span class="text-[11px] text-gray-400">+Rp 2.500</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- STEP 4: CONTACT & NO WHATSAPP -->
                <div class="space-y-4">
                    <div class="flex items-center gap-3">
                        <span class="w-8 h-8 rounded-full bg-gradient-to-r from-brand-cyan to-blue-600 text-black font-extrabold flex items-center justify-center text-sm shadow">4</span>
                        <h4 class="text-lg font-bold text-white font-heading">Kontak Pengiriman Struk</h4>
                    </div>

                    <div class="max-w-md">
                        <label class="block text-xs font-semibold text-gray-300 mb-1">Nomor WhatsApp / Email</label>
                        <div class="relative">
                            <i class="fa-brands fa-whatsapp absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400 text-lg"></i>
                            <input type="text" id="whatsappInput" placeholder="081234567890" 
                                class="w-full pl-11 pr-4 py-3 bg-gray-900 border border-brand-border rounded-xl text-sm text-white focus:outline-none focus:border-brand-cyan transition-all">
                        </div>
                        <p class="text-[11px] text-gray-400 mt-1">Bukti transaksi dan pembaruan status pesanan akan dikirimkan ke WhatsApp Anda.</p>
                    </div>
                </div>

            </div>
        </section>

        <!-- CHECK STATUS SECTION -->
        <section id="cek-transaksi" class="bg-brand-card border border-brand-border rounded-3xl p-6 sm:p-8 space-y-6">
            <div class="max-w-2xl">
                <h3 class="text-2xl font-bold text-white font-heading flex items-center gap-2">
                    <i class="fa-solid fa-magnifying-glass-dollar text-brand-cyan"></i> Cek Status Pesanan
                </h3>
                <p class="text-gray-400 text-sm">Lacak status pesanan kamu dengan memasukkan nomor invoice/transaksi</p>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 max-w-xl">
                <input type="text" id="invoiceCheckInput" placeholder="Contoh: INV-20261018-9821" 
                    class="flex-1 px-4 py-3 bg-gray-900 border border-brand-border rounded-xl text-sm text-white focus:outline-none focus:border-brand-cyan">
                <button onclick="trackInvoice()" class="px-6 py-3 bg-gradient-to-r from-brand-cyan to-blue-600 text-black font-bold text-sm rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                    <i class="fa-solid fa-search"></i> Lacak
                </button>
            </div>

            <div id="invoiceResult" class="hidden p-4 rounded-2xl bg-gray-900 border border-brand-border max-w-xl space-y-2">
                <!-- Dynamic status rendered here -->
            </div>
        </section>

    </main>

    <!-- STICKY BOTTOM SUMMARY BAR -->
    <div class="sticky bottom-0 z-30 glass-panel border-t border-brand-border py-4 px-4 sm:px-8 shadow-2xl">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-4">
                <div>
                    <span class="text-[11px] text-gray-400 uppercase tracking-wider block">Total Pembayaran</span>
                    <span id="summaryTotal" class="text-xl sm:text-2xl font-extrabold text-brand-cyan font-heading">Rp 0</span>
                </div>
                <div class="text-right sm:text-left border-l border-brand-border pl-4">
                    <span id="summaryItem" class="text-xs font-semibold text-white block line-clamp-1">Belum Memilih Item</span>
                    <span id="summaryPayment" class="text-[11px] text-gray-400 block">Metode: -</span>
                </div>
            </div>

            <button onclick="openCheckoutModal()" class="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-brand-cyan via-blue-500 to-brand-purple text-black font-extrabold text-sm rounded-2xl shadow-lg shadow-brand-cyan/20 hover:scale-105 transition-all flex items-center justify-center gap-2">
                <i class="fa-solid fa-cart-shopping"></i> Beli Sekarang
            </button>
        </div>
    </div>

    <!-- MODAL CONFIRMATION & PAYMENT SIMULATION -->
    <div id="checkoutModal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <div class="bg-brand-card border border-brand-border rounded-3xl max-w-lg w-full p-6 space-y-6 relative max-h-[90vh] overflow-y-auto">
            <!-- Modal Header -->
            <div class="flex items-center justify-between border-b border-brand-border pb-4">
                <h3 id="modalTitle" class="text-xl font-bold text-white font-heading">Konfirmasi Pesanan</h3>
                <button onclick="closeModal()" class="text-gray-400 hover:text-white p-1">
                    <i class="fa-solid fa-xmark text-xl"></i>
                </button>
            </div>

            <!-- Modal Step 1: Confirmation Details -->
            <div id="modalConfirmStep" class="space-y-4">
                <div class="bg-gray-900/80 rounded-2xl p-4 space-y-2 text-sm">
                    <div class="flex justify-between border-b border-gray-800 pb-2">
                        <span class="text-gray-400">Game</span>
                        <span id="modalGameName" class="font-bold text-white">Mobile Legends</span>
                    </div>
                    <div class="flex justify-between border-b border-gray-800 pb-2">
                        <span class="text-gray-400">User ID</span>
                        <span id="modalUserId" class="font-bold text-white">12345678 (1234)</span>
                    </div>
                    <div class="flex justify-between border-b border-gray-800 pb-2">
                        <span class="text-gray-400">Nickname</span>
                        <span id="modalNickname" class="font-bold text-brand-cyan">PlayerOne</span>
                    </div>
                    <div class="flex justify-between border-b border-gray-800 pb-2">
                        <span class="text-gray-400">Item Produk</span>
                        <span id="modalItemName" class="font-bold text-white">86 Diamonds</span>
                    </div>
                    <div class="flex justify-between border-b border-gray-800 pb-2">
                        <span class="text-gray-400">Metode Bayar</span>
                        <span id="modalPaymentName" class="font-bold text-white">QRIS</span>
                    </div>
                    <div class="flex justify-between pt-1 text-base">
                        <span class="font-bold text-white">Total Bayar</span>
                        <span id="modalTotalPay" class="font-extrabold text-brand-cyan">Rp 20.000</span>
                    </div>
                </div>

                <div class="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-300 text-xs flex items-center gap-2">
                    <i class="fa-solid fa-triangle-exclamation text-base"></i>
                    Pastikan User ID dan server game Anda sudah benar sebelum melanjutkan.
                </div>

                <button onclick="processPayment()" class="w-full py-3.5 bg-gradient-to-r from-brand-cyan to-blue-600 text-black font-extrabold text-sm rounded-xl shadow-lg hover:scale-[1.02] transition-all">
                    Bayar Sekarang
                </button>
            </div>

            <!-- Modal Step 2: Payment Simulation & QRIS -->
            <div id="modalPaymentStep" class="hidden space-y-6 text-center">
                <div class="space-y-1">
                    <span class="text-xs text-gray-400">Selesaikan Pembayaran Dalam</span>
                    <div id="timer" class="text-2xl font-black text-brand-cyan font-heading">14:59</div>
                </div>

                <!-- Simulated QR Code -->
                <div class="bg-white p-4 rounded-2xl inline-block shadow-lg mx-auto">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=GAMEPULSE-PAYMENT-SIMULATION" alt="QRIS Code" class="w-44 h-44">
                </div>

                <div class="bg-gray-900 p-4 rounded-xl text-left space-y-2 text-xs">
                    <div class="flex justify-between">
                        <span class="text-gray-400">Kode Transactions / Invoice</span>
                        <span id="generatedInvoice" class="font-mono text-white font-bold">INV-20261018-9821</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-400">Status</span>
                        <span class="text-amber-400 font-bold animate-pulse"><i class="fa-solid fa-spinner fa-spin mr-1"></i> Menunggu Pembayaran</span>
                    </div>
                </div>

                <button onclick="simulateSuccessPayment()" class="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all">
                    Simulasi Pembayaran Berhasil (Demo)
                </button>
            </div>

            <!-- Modal Step 3: Success Screen -->
            <div id="modalSuccessStep" class="hidden space-y-6 text-center py-4">
                <div class="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center text-3xl mx-auto shadow-lg shadow-emerald-500/20">
                    <i class="fa-solid fa-check"></i>
                </div>
                <div class="space-y-1">
                    <h4 class="text-2xl font-extrabold text-white font-heading">Pembayaran Berhasil!</h4>
                    <p class="text-xs text-gray-300">Top up item Anda telah berhasil diproses secara instan.</p>
                </div>
                <button onclick="closeModal()" class="w-full py-3 bg-brand-card hover:bg-gray-800 text-white border border-brand-border font-bold text-xs rounded-xl transition-all">
                    Selesai & Kembali
                </button>
            </div>
        </div>
    </div>

    <!-- FOOTER -->
    <footer id="bantuan" class="bg-brand-card border-t border-brand-border mt-20 pt-12 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Col 1: About -->
                <div class="space-y-4">
                    <a href="#" class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-cyan to-brand-purple flex items-center justify-center text-black font-black text-base">
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <span class="font-heading font-extrabold text-xl text-white">GAMEPULSE</span>
                    </a>
                    <p class="text-xs text-gray-400 leading-relaxed">
                        Platform penyedia layanan top-up game online paling murah, cepat, dan terpercaya di Indonesia dengan layanan otomatis 24/7 non-stop.
                    </p>
                </div>

                <!-- Col 2: Navigation -->
                <div class="space-y-3">
                    <h5 class="text-sm font-bold text-white font-heading">Peta Situs</h5>
                    <ul class="space-y-2 text-xs text-gray-400">
                        <li><a href="#games" class="hover:text-brand-cyan transition-colors">Semua Game</a></li>
                        <li><a href="#cek-transaksi" class="hover:text-brand-cyan transition-colors">Lacak Pesanan</a></li>
                        <li><a href="#" class="hover:text-brand-cyan transition-colors">Syarat & Ketentuan</a></li>
                        <li><a href="#" class="hover:text-brand-cyan transition-colors">Kebijakan Privasi</a></li>
                    </ul>
                </div>

                <!-- Col 3: Contact & Support -->
                <div class="space-y-3">
                    <h5 class="text-sm font-bold text-white font-heading">Layanan Pelanggan</h5>
                    <ul class="space-y-2 text-xs text-gray-400">
                        <li class="flex items-center gap-2"><i class="fa-brands fa-whatsapp text-emerald-400"></i> +62 812-3456-7890</li>
                        <li class="flex items-center gap-2"><i class="fa-regular fa-envelope text-brand-cyan"></i> support@gamepulse.id</li>
                        <li class="flex items-center gap-2"><i class="fa-solid fa-clock text-brand-purple"></i> 24 Jam Non-Stop</li>
                    </ul>
                </div>

                <!-- Col 4: Socials -->
                <div class="space-y-3">
                    <h5 class="text-sm font-bold text-white font-heading">Ikuti Kami</h5>
                    <div class="flex gap-3 text-gray-400">
                        <a href="#" class="w-9 h-9 rounded-xl bg-gray-900 border border-brand-border flex items-center justify-center hover:text-brand-cyan hover:border-brand-cyan transition-all"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="w-9 h-9 rounded-xl bg-gray-900 border border-brand-border flex items-center justify-center hover:text-brand-cyan hover:border-brand-cyan transition-all"><i class="fa-brands fa-tiktok"></i></a>
                        <a href="#" class="w-9 h-9 rounded-xl bg-gray-900 border border-brand-border flex items-center justify-center hover:text-brand-cyan hover:border-brand-cyan transition-all"><i class="fa-brands fa-youtube"></i></a>
                        <a href="#" class="w-9 h-9 rounded-xl bg-gray-900 border border-brand-border flex items-center justify-center hover:text-brand-cyan hover:border-brand-cyan transition-all"><i class="fa-brands fa-discord"></i></a>
                    </div>
                </div>
            </div>

            <div class="pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
                <p>&copy; 2026 GamePulse Instant TopUp. All rights reserved.</p>
                <div class="flex gap-4">
                    <span>Dioperasikan secara aman & terenkripsi</span>
                </div>
            </div>
        </div>
    </footer>

    <!-- JAVASCRIPT LOGIC -->
    <script>
        // Mock Games Data & Nominal Items
        const gameData = {
            mlbb: {
                title: "Mobile Legends: Bang Bang",
                img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80",
                needServer: true,
                denoms: [
                    { id: "ml1", name: "86 Diamonds", price: 20000, tag: "Populer" },
                    { id: "ml2", name: "172 Diamonds", price: 40000 },
                    { id: "ml3", name: "257 Diamonds", price: 60000, tag: "Hemat" },
                    { id: "ml4", name: "706 Diamonds", price: 160000 },
                    { id: "ml5", name: "Weekly Diamond Pass", price: 28000, tag: "Best Seller" },
                    { id: "ml6", name: "2195 Diamonds", price: 480000 }
                ]
            },
            ff: {
                title: "Free Fire",
                img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80",
                needServer: false,
                denoms: [
                    { id: "ff1", name: "140 Diamonds", price: 19000 },
                    { id: "ff2", name: "355 Diamonds", price: 47000, tag: "Populer" },
                    { id: "ff3", name: "720 Diamonds", price: 95000 },
                    { id: "ff4", name: "1440 Diamonds", price: 190000 }
                ]
            },
            pubg: {
                title: "PUBG Mobile",
                img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=400&q=80",
                needServer: false,
                denoms: [
                    { id: "pubg1", name: "60 UC", price: 15000 },
                    { id: "pubg2", name: "325 UC", price: 75000, tag: "Populer" },
                    { id: "pubg3", name: "660 UC", price: 150000 }
                ]
            },
            valorant: {
                title: "Valorant",
                img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80",
                needServer: false,
                denoms: [
                    { id: "val1", name: "475 Points", price: 50000 },
                    { id: "val2", name: "1000 Points", price: 100000, tag: "Populer" },
                    { id: "val3", name: "2050 Points", price: 200000 }
                ]
            },
            genshin: {
                title: "Genshin Impact",
                img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80",
                needServer: true,
                denoms: [
                    { id: "gi1", name: "Blessing of Welkin Moon", price: 79000, tag: "Best Value" },
                    { id: "gi2", name: "300 Genesis Crystals", price: 75000 },
                    { id: "gi3", name: "980 Genesis Crystals", price: 245000 }
                ]
            },
            hok: {
                title: "Honor of Kings",
                img: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=400&q=80",
                needServer: false,
                denoms: [
                    { id: "hok1", name: "80 Tokens", price: 16000 },
                    { id: "hok2", name: "240 Tokens", price: 48000, tag: "Populer" },
                    { id: "hok3", name: "400 Tokens", price: 80000 }
                ]
            }
        };

        // State Tracking
        let currentSelectedGame = 'mlbb';
        let selectedItem = null;
        let selectedPayment = null;
        let verifiedNickname = '';
        let timerInterval = null;

        // On Page Load Initialization
        window.onload = function() {
            selectGame('mlbb');
            startCarousel();
        };

        // Select Game Handler
        function selectGame(gameKey) {
            currentSelectedGame = gameKey;
            const game = gameData[gameKey];

            // Update Selected Header
            document.getElementById('selectedGameTitle').innerText = game.title;
            document.getElementById('selectedGameImg').src = game.img;

            // Toggle Zone ID field visibility
            const zoneWrapper = document.getElementById('zoneIdWrapper');
            if (game.needServer) {
                zoneWrapper.style.display = 'block';
            } else {
                zoneWrapper.style.display = 'none';
            }

            // Reset inputs & status
            document.getElementById('accountCheckResult').innerText = '';
            verifiedNickname = '';

            // Render Denominations
            renderDenominations(game.denoms);

            // Reset selection state
            selectedItem = null;
            updateSummary();
        }

        // Render Denominations
        function renderDenominations(denoms) {
            const container = document.getElementById('denomContainer');
            container.innerHTML = '';

            denoms.forEach(item => {
                const card = document.createElement('div');
                card.className = 'denom-card cursor-pointer bg-gray-900 border border-brand-border p-4 rounded-2xl hover:border-brand-cyan transition-all relative flex flex-col justify-between';
                card.onclick = () => selectDenom(item, card);

                card.innerHTML = `
                    ${item.tag ? `<span class="absolute -top-2.5 right-3 bg-gradient-to-r from-brand-cyan to-blue-600 text-black text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase shadow">${item.tag}</span>` : ''}
                    <div>
                        <p class="font-bold text-sm text-white">${item.name}</p>
                    </div>
                    <div class="mt-3 pt-2 border-t border-gray-800">
                        <p class="text-xs font-bold text-brand-cyan">Rp ${item.price.toLocaleString('id-ID')}</p>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        // Select Denomination Item
        function selectDenom(item, element) {
            document.querySelectorAll('.denom-card').forEach(el => el.classList.remove('item-selected'));
            element.classList.add('item-selected');
            selectedItem = item;
            updateSummary();
        }

        // Select Payment Method
        function selectPayment(id, name, fee) {
            document.querySelectorAll('.payment-card').forEach(el => el.classList.remove('item-selected'));
            event.currentTarget.classList.add('item-selected');
            selectedPayment = { id, name, fee };
            updateSummary();
        }

        // Account Check Mock Logic
        function checkAccount() {
            const userId = document.getElementById('userIdInput').value.trim();
            const resultElem = document.getElementById('accountCheckResult');

            if (!userId) {
                resultElem.className = "text-xs font-semibold text-red-400";
                resultElem.innerText = "Harap isi User ID terlebih dahulu!";
                return;
            }

            resultElem.className = "text-xs font-semibold text-brand-cyan animate-pulse";
            resultElem.innerText = "Memeriksa ID Akun...";

            setTimeout(() => {
                verifiedNickname = "ProGamer_" + userId.slice(-3);
                resultElem.className = "text-xs font-semibold text-emerald-400";
                resultElem.innerHTML = `<i class="fa-solid fa-circle-check mr-1"></i> Nickname: <strong>${verifiedNickname}</strong>`;
            }, 800);
        }

        // Dynamic Total Calculations
        function updateSummary() {
            const summaryTotal = document.getElementById('summaryTotal');
            const summaryItem = document.getElementById('summaryItem');
            const summaryPayment = document.getElementById('summaryPayment');

            let total = 0;

            if (selectedItem) {
                total += selectedItem.price;
                summaryItem.innerText = selectedItem.name;
            } else {
                summaryItem.innerText = 'Belum Memilih Item';
            }

            if (selectedPayment) {
                total += selectedPayment.fee;
                summaryPayment.innerText = `Metode: ${selectedPayment.name}`;
            } else {
                summaryPayment.innerText = 'Metode: -';
            }

            summaryTotal.innerText = `Rp ${total.toLocaleString('id-ID')}`;
        }

        // Open Modal Checkout
        function openCheckoutModal() {
            const userId = document.getElementById('userIdInput').value.trim();
            const wa = document.getElementById('whatsappInput').value.trim();

            if (!userId) {
                alert('Silakan masukkan User ID game Anda!');
                return;
            }
            if (!selectedItem) {
                alert('Silakan pilih nominal top up!');
                return;
            }
            if (!selectedPayment) {
                alert('Silakan pilih metode pembayaran!');
                return;
            }

            const game = gameData[currentSelectedGame];
            const zoneId = document.getElementById('zoneIdInput').value.trim();

            document.getElementById('modalGameName').innerText = game.title;
            document.getElementById('modalUserId').innerText = `${userId} ${zoneId ? '('+zoneId+')' : ''}`;
            document.getElementById('modalNickname').innerText = verifiedNickname || 'User_' + userId;
            document.getElementById('modalItemName').innerText = selectedItem.name;
            document.getElementById('modalPaymentName').innerText = selectedPayment.name;

            const totalPay = selectedItem.price + selectedPayment.fee;
            document.getElementById('modalTotalPay').innerText = `Rp ${totalPay.toLocaleString('id-ID')}`;

            // Show Confirmation Step
            document.getElementById('modalConfirmStep').classList.remove('hidden');
            document.getElementById('modalPaymentStep').classList.add('hidden');
            document.getElementById('modalSuccessStep').classList.add('hidden');

            document.getElementById('checkoutModal').classList.remove('hidden');
        }

        // Process Payment (Step 2 Simulation)
        function processPayment() {
            document.getElementById('modalConfirmStep').classList.add('hidden');
            document.getElementById('modalPaymentStep').classList.remove('hidden');

            // Generate Random Invoice Code
            const randomCode = 'INV-' + new Date().toISOString().slice(0,10).replace(/-/g,'') + '-' + Math.floor(1000 + Math.random() * 9000);
            document.getElementById('generatedInvoice').innerText = randomCode;

            // Start Timer (15 Minutes Countdown)
            startTimer(15 * 60);
        }

        // Simulate Successful Payment
        function simulateSuccessPayment() {
            clearInterval(timerInterval);
            document.getElementById('modalPaymentStep').classList.add('hidden');
            document.getElementById('modalSuccessStep').classList.remove('hidden');
        }

        // Timer Function
        function startTimer(duration) {
            let timer = duration, minutes, seconds;
            const display = document.getElementById('timer');
            clearInterval(timerInterval);

            timerInterval = setInterval(() => {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    clearInterval(timerInterval);
                    display.textContent = "EXPIRED";
                }
            }, 1000);
        }

        function closeModal() {
            document.getElementById('checkoutModal').classList.add('hidden');
            clearInterval(timerInterval);
        }

        // Search & Filter Games
        function filterGames() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            const cards = document.querySelectorAll('.game-card');

            cards.forEach(card => {
                const name = card.getAttribute('data-name');
                if (name.includes(query)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        function filterGamesMobile() {
            const query = document.getElementById('mobileSearchInput').value.toLowerCase();
            const cards = document.querySelectorAll('.game-card');

            cards.forEach(card => {
                const name = card.getAttribute('data-name');
                if (name.includes(query)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Category Filter
        function filterCategory(cat) {
            const cards = document.querySelectorAll('.game-card');
            const buttons = document.querySelectorAll('.cat-btn');

            buttons.forEach(btn => {
                btn.className = "cat-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-brand-card text-gray-300 hover:text-white border border-brand-border transition-all whitespace-nowrap";
            });

            event.currentTarget.className = "cat-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-brand-cyan to-blue-600 text-black shadow-md transition-all whitespace-nowrap";

            cards.forEach(card => {
                if (cat === 'all' || card.getAttribute('data-category') === cat) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Track Invoice Status Simulation
        function trackInvoice() {
            const inv = document.getElementById('invoiceCheckInput').value.trim();
            const result = document.getElementById('invoiceResult');

            if (!inv) {
                alert('Masukkan nomor invoice terlebih dahulu!');
                return;
            }

            result.classList.remove('hidden');
            result.innerHTML = `
                <div class="flex items-center justify-between text-xs border-b border-gray-800 pb-2">
                    <span class="text-gray-400">Invoice: <strong class="text-white">${inv}</strong></span>
                    <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">SUCCESS</span>
                </div>
                <div class="text-xs text-gray-300 pt-1 space-y-1">
                    <p>Produk: <strong>Mobile Legends - 86 Diamonds</strong></p>
                    <p>Waktu: <strong>18 Okt 2026, 10:24 WIB</strong></p>
                    <p>Status Pengiriman: <span class="text-emerald-400 font-semibold">Terkirim ke Akun</span></p>
                </div>
            `;
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }

        // Hero Carousel Logic
        let slideIndex = 0;
        function startCarousel() {
            setInterval(() => {
                slideIndex = (slideIndex + 1) % 2;
                setSlide(slideIndex);
            }, 5000);
        }

        function setSlide(index) {
            const slides = document.querySelectorAll('.carousel-slide');
            const dots = document.querySelectorAll('.slide-dot');

            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.remove('opacity-0');
                    slide.classList.add('opacity-100');
                } else {
                    slide.classList.remove('opacity-100');
                    slide.classList.add('opacity-0');
                }
            });

            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.className = "slide-dot w-8 h-2 rounded-full bg-brand-cyan transition-all";
                } else {
                    dot.className = "slide-dot w-2 h-2 rounded-full bg-gray-600 hover:bg-gray-400 transition-all";
                }
            });
        }
    </script>
</body>
</html>
```

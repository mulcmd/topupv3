<!DOCTYPE html>
<html lang="id" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RFM STORE - Top Up Game Instan 24 Jam</title>
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

        /* Glassmorphism */
        .glass-panel {
            background: rgba(17, 24, 39, 0.75);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
    </style>
</head>
<body class="min-h-screen flex flex-col justify-between selection:bg-brand-cyan selection:text-black">

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

            <!-- Navigation Links -->
            <nav class="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
                <a href="#games" class="hover:text-brand-cyan transition-colors text-white flex items-center gap-2">
                    <i class="fa-solid fa-gamepad text-brand-cyan"></i> Beranda
                </a>
                <a href="#formSection" class="hover:text-brand-cyan transition-colors flex items-center gap-2">
                    <i class="fa-solid fa-receipt text-gray-400"></i> Top Up
                </a>
            </nav>
        </div>
    </header>

    <!-- MAIN CONTENT CONTAINER -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">

        <!-- INTERACTIVE TOP-UP FORM SECTION -->
        <section id="formSection" class="scroll-mt-24">
            <div class="bg-brand-card border border-brand-border rounded-3xl p-4 sm:p-8 space-y-8 relative overflow-hidden shadow-2xl">
                
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
                </div>

                <!-- STEP 3: METODE PEMBAYARAN (Diperbaiki & Dilengkapi) -->
                <div class="space-y-4">
                    <div class="flex items-center gap-3">
                        <span class="w-8 h-8 rounded-full bg-gradient-to-r from-brand-cyan to-blue-600 text-black font-extrabold flex items-center justify-center text-sm shadow">3</span>
                        <h4 class="text-lg font-bold text-white font-heading">Pilih Metode Pembayaran</h4>
                    </div>

                    <div class="space-y-2">
                        <span class="text-xs font-bold uppercase text-gray-400 tracking-wider">Virtual Account</span>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            <!-- Mandiri VA yang sebelumnya terpotong -->
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
        </section>

    </main>

    <!-- FOOTER -->
    <footer class="border-t border-brand-border bg-brand-card py-6 text-center text-xs text-gray-400">
        <p>&copy; 2026 RFM STORE. All rights reserved.</p>
    </footer>

</body>
</html>

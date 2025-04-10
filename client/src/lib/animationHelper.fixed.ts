/**
 * Helper untuk mengecek apakah pengguna menggunakan perangkat mobile
 * @returns {boolean} true jika perangkat mobile, false jika desktop
 */
function isMobileDevice() {
  return window.innerWidth < 768; // Menggunakan breakpoint yang sama dengan useIsMobile hook
}

/**
 * Template HTML untuk tampilan Activity
 */
const activityViewTemplate = `
  <div class="w-full rounded-xl bg-[#111827] border border-blue-500/30 overflow-hidden shadow-lg illustration-container relative">
    <!-- Background grid -->
    <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
    
    <!-- Header dengan judul network activity -->
    <div class="flex items-center justify-between bg-[#171f2f] px-4 py-3 border-b border-blue-500/20 relative z-10">
      <div class="flex items-center gap-2">
        <div class="h-5 w-5 bg-blue-500 rounded-full pulse-animation relative overflow-hidden">
          <div class="absolute inset-0 bg-white opacity-20" style="animation: pulse 2s infinite;"></div>
        </div>
        <span class="text-blue-400 font-medium">Network Activity</span>
      </div>
      <div class="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs border border-blue-500/30 status-badge">
        MONITORING
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="p-5 grid gap-5 relative z-10">
      <!-- Traffic Panel -->
      <div class="component bg-[#171f2f] rounded-lg p-4 border border-blue-500/30 relative overflow-hidden hover:border-blue-500/60 transition-all duration-300">
        <div class="flex justify-between items-center mb-3">
          <div class="flex items-center gap-2">
            <div class="icon-container w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center relative">
              <svg class="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-white text-sm">Traffic Monitor</h3>
              <div class="text-xs text-gray-400">Real-time network activity</div>
            </div>
          </div>
          <div class="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/20">
            <span class="font-mono">Last: 32 sec ago</span>
          </div>
        </div>
        
        <!-- Graf aktivitas -->
        <div class="bg-[#13192380] p-3 rounded border border-gray-800 mt-2">
          <div class="flex justify-between mb-2">
            <div class="text-xs text-gray-400">Packets/sec</div>
            <div class="text-xs text-blue-400 font-mono">345</div>
          </div>
          <div class="relative h-20 w-full">
            <!-- Visualization bars -->
            <div class="absolute inset-0 flex items-end justify-between">
              <div class="h-[40%] w-[3%] bg-blue-500/80 rounded-t"></div>
              <div class="h-[60%] w-[3%] bg-blue-500/80 rounded-t"></div>
              <div class="h-[30%] w-[3%] bg-blue-500/80 rounded-t"></div>
              <div class="h-[75%] w-[3%] bg-blue-500/80 rounded-t"></div>
              <div class="h-[45%] w-[3%] bg-blue-500/80 rounded-t"></div>
              <div class="h-[85%] w-[3%] bg-blue-500/80 rounded-t"></div>
              <div class="h-[55%] w-[3%] bg-blue-500/80 rounded-t"></div>
              <div class="h-[70%] w-[3%] bg-blue-500/80 rounded-t"></div>
              <div class="h-[40%] w-[3%] bg-blue-500/80 rounded-t"></div>
              <div class="h-[60%] w-[3%] bg-blue-500/80 rounded-t"></div>
              <div class="h-[90%] w-[3%] bg-blue-500/80 rounded-t"></div>
              <div class="h-[50%] w-[3%] bg-blue-500/80 rounded-t"></div>
              <div class="h-[65%] w-[3%] bg-blue-500/80 rounded-t"></div>
              <div class="h-[80%] w-[3%] bg-blue-500/80 rounded-t"></div>
              <div class="h-[45%] w-[3%] bg-blue-500/80 rounded-t"></div>
              <div class="h-[55%] w-[3%] bg-blue-500/80 rounded-t"></div>
              <div class="h-[70%] w-[3%] bg-blue-500/80 rounded-t"></div>
              <div class="h-[35%] w-[3%] bg-blue-500/80 rounded-t"></div>
              <div class="h-[60%] w-[3%] bg-blue-500/80 rounded-t"></div>
              <div class="h-[80%] w-[3%] bg-blue-500/80 rounded-t"></div>
            </div>
            <!-- Grid lines -->
            <div class="absolute inset-0 flex flex-col justify-between pointer-events-none">
              <div class="border-t border-dashed border-gray-700/50 h-0"></div>
              <div class="border-t border-dashed border-gray-700/50 h-0"></div>
              <div class="border-t border-dashed border-gray-700/50 h-0"></div>
              <div class="border-t border-dashed border-gray-700/50 h-0"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Active Connections Panel -->
      <div class="component bg-[#171f2f] rounded-lg p-4 border border-blue-500/30 relative overflow-hidden hover:border-blue-500/60 transition-all duration-300">
        <div class="flex justify-between items-center mb-3">
          <div class="flex items-center gap-2">
            <div class="icon-container w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center relative">
              <svg class="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 10h-4V6"></path>
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="8 14 12 12 12 8"></polyline>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-white text-sm">Active Connections</h3>
              <div class="text-xs text-gray-400">Current network sessions</div>
            </div>
          </div>
        </div>
        
        <!-- Connection Items -->
        <div class="space-y-2 mt-2">
          <div class="bg-blue-500/5 p-2 rounded flex justify-between items-center border border-blue-500/10">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 bg-green-500 rounded-full"></span>
              <span class="text-xs text-gray-300">WhatsApp Client</span>
            </div>
            <span class="text-xs text-blue-400 font-mono">127.0.0.1:3443</span>
          </div>
          <div class="bg-blue-500/5 p-2 rounded flex justify-between items-center border border-blue-500/10">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 bg-green-500 rounded-full"></span>
              <span class="text-xs text-gray-300">DigiFlazz API</span>
            </div>
            <span class="text-xs text-blue-400 font-mono">api.digiflazz.com</span>
          </div>
          <div class="bg-blue-500/5 p-2 rounded flex justify-between items-center border border-blue-500/10">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 bg-green-500 rounded-full"></span>
              <span class="text-xs text-gray-300">Database Server</span>
            </div>
            <span class="text-xs text-blue-400 font-mono">mongodb://localhost</span>
          </div>
        </div>
      </div>
      
      <!-- Controls -->
      <div class="flex justify-center">
        <button id="back-to-dashboard" class="bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-lg px-4 py-2 text-sm hover:bg-blue-500/20 transition-colors">
          Back to Dashboard
        </button>
      </div>
    </div>
  </div>
`;

/**
 * Template HTML untuk tampilan Settings
 */
const settingsViewTemplate = `
  <div class="w-full rounded-xl bg-[#111827] border border-gray-700 overflow-hidden shadow-lg illustration-container relative">
    <!-- Background pattern -->
    <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
    
    <!-- Header dengan judul settings -->
    <div class="flex items-center justify-between bg-[#171f2f] px-4 py-3 border-b border-gray-700 relative z-10">
      <div class="flex items-center gap-2">
        <div class="h-5 w-5 bg-gray-500 rounded-full pulse-animation relative overflow-hidden">
          <div class="absolute inset-0 bg-white opacity-20" style="animation: pulse 2s infinite;"></div>
        </div>
        <span class="text-gray-200 font-medium">System Settings</span>
      </div>
      <div class="bg-gray-700/30 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-600/30 status-badge">
        CONFIGURATION
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="p-5 grid gap-5 relative z-10">
      <!-- API Configuration Panel -->
      <div class="component bg-[#171f2f] rounded-lg p-4 border border-gray-700 relative overflow-hidden hover:border-gray-500 transition-all duration-300">
        <div class="flex justify-between items-center mb-3">
          <div class="flex items-center gap-2">
            <div class="icon-container w-10 h-10 bg-gray-600/20 rounded-full flex items-center justify-center relative">
              <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-white text-sm">API Configuration</h3>
              <div class="text-xs text-gray-400">DigiFlazz Connection Settings</div>
            </div>
          </div>
        </div>
        
        <!-- Settings Form -->
        <div class="space-y-3 mt-2">
          <div class="grid gap-2">
            <label class="text-xs text-gray-400">API Username</label>
            <div class="bg-[#13192380] p-2 rounded border border-gray-700 flex items-center">
              <input type="text" value="demo@digiflazz.com" disabled class="bg-transparent text-xs text-gray-300 w-full outline-none" />
              <div class="text-xs text-gray-500 bg-gray-700/50 rounded px-1.5 py-0.5 ml-2">Masked</div>
            </div>
          </div>
          
          <div class="grid gap-2">
            <label class="text-xs text-gray-400">API Key</label>
            <div class="bg-[#13192380] p-2 rounded border border-gray-700 flex items-center">
              <input type="password" value="••••••••••••••••" disabled class="bg-transparent text-xs text-gray-300 w-full outline-none" />
              <div class="text-xs text-gray-500 bg-gray-700/50 rounded px-1.5 py-0.5 ml-2">Secret</div>
            </div>
          </div>
          
          <div class="grid gap-2">
            <label class="text-xs text-gray-400">Webhook URL</label>
            <div class="bg-[#13192380] p-2 rounded border border-gray-700">
              <input type="text" value="https://example.com/webhook/digiflazz" disabled class="bg-transparent text-xs text-gray-300 w-full outline-none" />
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bot Configuration Panel -->
      <div class="component bg-[#171f2f] rounded-lg p-4 border border-gray-700 relative overflow-hidden hover:border-gray-500 transition-all duration-300">
        <div class="flex justify-between items-center mb-3">
          <div class="flex items-center gap-2">
            <div class="icon-container w-10 h-10 bg-gray-600/20 rounded-full flex items-center justify-center relative">
              <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-white text-sm">Bot Configuration</h3>
              <div class="text-xs text-gray-400">WhatsApp Bot Settings</div>
            </div>
          </div>
          <div class="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded border border-green-500/20">
            Active
          </div>
        </div>
        
        <!-- Toggle Settings -->
        <div class="space-y-3 mt-2">
          <div class="flex items-center justify-between bg-[#13192380] p-2 rounded border border-gray-700">
            <span class="text-xs text-gray-300">Auto-Response</span>
            <div class="w-8 h-4 bg-green-500/30 rounded-full relative">
              <div class="absolute right-0 top-0 w-4 h-4 bg-green-500 rounded-full shadow"></div>
            </div>
          </div>
          
          <div class="flex items-center justify-between bg-[#13192380] p-2 rounded border border-gray-700">
            <span class="text-xs text-gray-300">Transaction Notifications</span>
            <div class="w-8 h-4 bg-green-500/30 rounded-full relative">
              <div class="absolute right-0 top-0 w-4 h-4 bg-green-500 rounded-full shadow"></div>
            </div>
          </div>
          
          <div class="flex items-center justify-between bg-[#13192380] p-2 rounded border border-gray-700">
            <span class="text-xs text-gray-300">Debug Mode</span>
            <div class="w-8 h-4 bg-gray-600/50 rounded-full relative">
              <div class="absolute left-0 top-0 w-4 h-4 bg-gray-500 rounded-full shadow"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Controls -->
      <div class="flex justify-center">
        <button id="back-to-dashboard" class="bg-gray-700/50 text-gray-300 border border-gray-600/50 rounded-lg px-4 py-2 text-sm hover:bg-gray-700 transition-colors">
          Back to Dashboard
        </button>
      </div>
    </div>
  </div>
`;

/**
 * Helper untuk menangani animasi elemen dengan class section-content
 * Akan otomatis memanggil class visible saat element muncul di viewport
 */
export function activatePageAnimations() {
  // Fungsi untuk menambahkan class visible ke elemen section-content saat terlihat
  const addVisibleClass = () => {
    const sectionContents = document.querySelectorAll('.section-content');
    
    if (sectionContents.length === 0) return;
    
    sectionContents.forEach((element, index) => {
      // Tambahkan delay untuk membuat staggered effect yang ringan
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 100); // 100ms delay antara elemen
    });
  };

  // Panggil addVisibleClass setelah page load
  setTimeout(addVisibleClass, 150);
}

/**
 * Helper untuk membuat element visual berdasarkan kode
 * Digunakan khusus untuk ilustrasi dashboard
 */
export function setupDashboardIllustration(containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Membuat ilustrasi dashboard dengan jaringan komputer mentransfer data ke DigiFlazz
  container.innerHTML = `
    <style>
      /* Animasi konstan untuk aliran data */
      @keyframes dataFlow {
        0% { transform: translateX(0) scale(0.8); opacity: 0; }
        5% { opacity: 1; transform: translateX(5%) scale(1); }
        90% { opacity: 1; transform: translateX(95%) scale(1); }
        100% { transform: translateX(100%) scale(0.8); opacity: 0; }
      }
      
      /* Animasi particle untuk efek jaringan */
      @keyframes particleFloat {
        0%, 100% { transform: translateY(0) translateX(0); }
        25% { transform: translateY(-10px) translateX(5px); }
        50% { transform: translateY(0) translateX(10px); }
        75% { transform: translateY(10px) translateX(5px); }
      }
      
      /* Animasi berkedip untuk node status */
      @keyframes blinkDot {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }
      
      /* Animasi untuk komponen aktif */
      @keyframes pulse {
        0% { transform: scale(1); filter: brightness(0.9); }
        50% { transform: scale(1.02); filter: brightness(1.1); }
        100% { transform: scale(1); filter: brightness(0.9); }
      }
      
      /* Animasi glowing untuk koneksi */
      @keyframes connectionGlow {
        0%, 100% { opacity: 0.7; }
        50% { opacity: 1; }
      }
      
      /* Animasi rotation untuk aktivitas server */
      @keyframes slowRotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      /* Efek untuk rotasi ikon server */
      @keyframes iconPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
      
      /* Animasi continuous activity untuk statistik */
      @keyframes statsFluctuation {
        0%, 100% { width: 75%; }
        25% { width: 85%; }
        50% { width: 65%; }
        75% { width: 80%; }
      }
      
      /* Background untuk grid jaringan */
      .network-grid {
        background-image: radial-gradient(#F0B90B20 1px, transparent 1px);
        background-size: 20px 20px;
        animation: gridPulse 10s infinite linear;
      }
      
      @keyframes gridPulse {
        0%, 100% { background-size: 20px 20px; }
        50% { background-size: 25px 25px; }
      }
      
      /* Jaringan koneksi dengan titik-titik yang bersinar */
      .network-node {
        position: absolute;
        width: 3px;
        height: 3px;
        background-color: #F0B90B;
        border-radius: 50%;
        box-shadow: 0 0 10px 2px rgba(240, 185, 11, 0.7);
        animation: particleFloat 20s infinite ease-in-out;
      }
      
      /* Jalur data dengan efek gradien yang mengalir */
      .data-path {
        height: 2px;
        background: linear-gradient(to right, #111827, #F0B90B, #111827);
        position: relative;
        overflow: hidden;
        animation: connectionGlow 4s infinite ease-in-out;
      }
      
      /* Paket data yang mengalir konstan */
      .data-packet {
        position: absolute;
        width: 15px;
        height: 4px;
        background-color: #F0B90B;
        filter: drop-shadow(0 0 5px rgba(240, 185, 11, 0.8));
        border-radius: 2px;
        animation: dataFlow 2.5s infinite cubic-bezier(.4,0,.2,1);
      }
      
      /* Status titik pada komponen */
      .status-dot {
        animation: blinkDot 1.5s infinite ease-in-out;
      }
      
      /* Komponen dengan efek hover */
      .component {
        transition: all 0.3s ease;
        animation: pulse 5s infinite ease-in-out;
      }
      
      .component:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        border-color: #F0B90B;
        z-index: 10;
      }
      
      /* Ikon dengan efek interaktif */
      .icon-animation {
        transition: transform 0.3s ease;
      }
      
      .icon-container:hover .icon-animation {
        animation: iconPulse 1s ease-in-out infinite;
      }
      
      /* Container utama dengan perspektif 3D */
      .illustration-container {
        perspective: 1200px;
        transform-style: preserve-3d;
      }
      
      /* Bars untuk aktivitas sistem */
      .activity-bar {
        animation: statsFluctuation 8s infinite ease-in-out;
      }
      
      /* Rotasi ikon server */
      .server-icon-rotate {
        animation: slowRotate 15s infinite linear;
        transform-origin: center;
      }
      
      /* Garis koneksi antar node dengan efek dash */
      .connection-line {
        stroke-dasharray: 10;
        stroke-dashoffset: 1000;
        animation: dashOffset 50s infinite linear;
      }
      
      @keyframes dashOffset {
        to {
          stroke-dashoffset: 0;
        }
      }
      
      /* Badge status dengan efek glowing */
      .status-badge {
        position: relative;
      }
      
      .status-badge::after {
        content: '';
        position: absolute;
        inset: -3px;
        border-radius: inherit;
        border: 1px solid;
        border-color: inherit;
        opacity: 0.5;
        animation: badgePulse 2s infinite;
      }
      
      @keyframes badgePulse {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.7; transform: scale(1.1); }
      }
      
      /* Animasi untuk transisi antara ilustrasi */
      @keyframes fadeOutIn {
        0% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.2; transform: scale(0.95); }
        100% { opacity: 1; transform: scale(1); }
      }
      
      /* Transisi halus untuk konten ilustrasi */
      .dashboard-main-content {
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      /* Animasi rotate untuk transition view */
      @keyframes rotateView {
        0% { transform: rotateY(0deg); }
        100% { transform: rotateY(360deg); }
      }
      
      /* Animasi masuk untuk konten dalam ilustrasi */
      @keyframes slideInUp {
        0% { transform: translateY(20px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
      
      /* Animasi untuk menunjukkan tampilan aktif */
      .illustration-active {
        animation: fadeOutIn 0.6s ease-out;
      }
      
      /* Penanda untuk view yang sedang aktif */
      .view-active {
        border-color: #F0B90B !important;
        background-color: rgba(240, 185, 11, 0.1);
      }

      /* Animasi fadeIn fadeOut untuk notifikasi */
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
      }
    </style>
    
    <div id="dashboard-illustration-container" class="w-full relative overflow-hidden"
      style="transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);">

      <!-- Container utama dengan efek 3D -->
      <div class="w-full md:max-w-[500px] rounded-xl bg-[#111827] border border-gray-800 overflow-hidden shadow-lg illustration-container relative">
        <!-- Background node grid untuk efek jaringan -->
        <div class="absolute inset-0 network-grid opacity-20"></div>
        
        <!-- Random floating network nodes -->
        <div class="network-node" style="top: 10%; left: 20%; animation-delay: 0s;"></div>
        <div class="network-node" style="top: 30%; left: 70%; animation-delay: 2s;"></div>
        <div class="network-node" style="top: 60%; left: 40%; animation-delay: 4s;"></div>
        <div class="network-node" style="top: 80%; left: 85%; animation-delay: 6s;"></div>
        <div class="network-node" style="top: 15%; left: 50%; animation-delay: 8s;"></div>
        <div class="network-node" style="top: 75%; left: 15%; animation-delay: 10s;"></div>
        <div class="network-node" style="top: 45%; left: 90%; animation-delay: 12s;"></div>
        <div class="network-node" style="top: 90%; left: 50%; animation-delay: 14s;"></div>
        <div class="network-node" style="top: 35%; left: 25%; animation-delay: 16s;"></div>
        <div class="network-node" style="top: 55%; left: 65%; animation-delay: 18s;"></div>
        
        <!-- Header dengan status network -->
        <div class="flex items-center justify-between bg-[#171f2f] px-4 py-3 border-b border-gray-800 relative z-10">
          <div class="flex items-center gap-2">
            <div class="h-5 w-5 bg-primary rounded-full pulse-animation relative overflow-hidden">
              <div class="absolute inset-0 bg-white opacity-20" style="animation: pulse 2s infinite;"></div>
            </div>
            <span class="text-primary font-medium">Network Monitor</span>
          </div>
          <div class="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs border border-green-500/30 status-badge">
            ACTIVE CONNECTION
          </div>
        </div>

        <!-- Main Content Area -->
        <div class="p-5 grid gap-5 relative z-10">
          <!-- Computer Network Cluster (Paling Atas) -->
          <div class="component bg-[#171f2f] rounded-lg p-4 border border-gray-700 relative overflow-hidden hover:border-primary/60 transition-all duration-300">
            <!-- Network Background Lines -->
            <svg class="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 100">
              <line x1="20" y1="20" x2="180" y2="20" stroke="#F0B90B" stroke-width="0.5" class="connection-line" />
              <line x1="20" y1="40" x2="180" y2="40" stroke="#F0B90B" stroke-width="0.5" class="connection-line" />
              <line x1="20" y1="60" x2="180" y2="60" stroke="#F0B90B" stroke-width="0.5" class="connection-line" />
              <line x1="20" y1="80" x2="180" y2="80" stroke="#F0B90B" stroke-width="0.5" class="connection-line" />
              <line x1="40" y1="10" x2="40" y2="90" stroke="#F0B90B" stroke-width="0.5" class="connection-line" />
              <line x1="80" y1="10" x2="80" y2="90" stroke="#F0B90B" stroke-width="0.5" class="connection-line" />
              <line x1="120" y1="10" x2="120" y2="90" stroke="#F0B90B" stroke-width="0.5" class="connection-line" />
              <line x1="160" y1="10" x2="160" y2="90" stroke="#F0B90B" stroke-width="0.5" class="connection-line" />
            </svg>
            
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-2">
                <div class="icon-container w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center overflow-hidden relative">
                  <div class="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0" style="animation: serverGlow 4s infinite;"></div>
                  <svg class="w-7 h-7 text-primary icon-animation relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path class="server-icon-rotate" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-white text-lg">Computer Network</h3>
                  <div class="flex items-center">
                    <span class="text-xs text-gray-400">Main Cluster</span>
                    <span class="relative ml-2 inline-flex rounded-full h-2 w-2 bg-primary animate-ping"></span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-end">
                <div class="text-primary text-sm font-semibold bg-primary/10 px-3 py-1 rounded-full">
                  <span class="animate-pulse">Transmitting</span>
                </div>
                <div class="text-xs text-gray-400 mt-1">
                  <span class="text-green-400">●</span> 25 Devices
                </div>
              </div>
            </div>
          </div>
          
          <!-- Connector dengan data packets -->
          <div class="data-path mx-auto w-5/6 my-1 rounded relative overflow-hidden">
            <div class="data-packet" style="animation-delay: 0s;"></div>
            <div class="data-packet" style="animation-delay: 0.5s;"></div>
            <div class="data-packet" style="animation-delay: 1s;"></div>
            <div class="data-packet" style="animation-delay: 1.5s;"></div>
            <div class="data-packet" style="animation-delay: 2s;"></div>
          </div>

          <!-- Server Proxy Component -->
          <div class="component bg-[#171f2f] rounded-lg p-4 border border-gray-700 relative overflow-hidden hover:border-blue-500/40 transition-all duration-300">
            <!-- Server Activity Background -->
            <div class="absolute inset-0 bg-gradient-radial from-blue-500/5 to-transparent opacity-60"></div>
            
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-3">
                <div class="icon-container w-11 h-11 bg-blue-500/20 rounded-full flex items-center justify-center relative">
                  <div class="absolute inset-0 rounded-full bg-blue-500/10 animate-pulse"></div>
                  <svg class="w-6 h-6 text-blue-400 icon-animation relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-white">Server Proxy</h3>
                  <div class="text-xs text-gray-400 flex items-center">
                    <span class="text-blue-400 mr-1">●</span> Processing Traffic
                    <div class="ml-2 w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div class="h-full bg-blue-500 rounded-full" style="width: 80%; animation: statsFluctuation 4s infinite;"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center">
                <div class="text-xs bg-blue-500/10 border border-blue-500/30 text-blue-400 px-2 py-1 rounded-lg flex items-center">
                  <svg class="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                  <span class="font-mono">45 ms</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Connector dengan data packets -->
          <div class="data-path mx-auto w-5/6 my-1 rounded">
            <div class="data-packet" style="animation-delay: 0.2s;"></div>
            <div class="data-packet" style="animation-delay: 0.7s;"></div>
            <div class="data-packet" style="animation-delay: 1.2s;"></div>
            <div class="data-packet" style="animation-delay: 1.7s;"></div>
            <div class="data-packet" style="animation-delay: 2.2s;"></div>
          </div>

          <!-- Messaging Service (Bot) -->
          <div class="component bg-[#171f2f] rounded-lg p-4 border border-gray-700 relative overflow-hidden hover:border-green-500/40 transition-all duration-300">
            <!-- Background gradient -->
            <div class="absolute inset-0 bg-gradient-radial from-green-500/5 to-transparent opacity-60"></div>
            
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-3">
                <div class="icon-container w-11 h-11 bg-green-600/20 rounded-full flex items-center justify-center relative">
                  <div class="absolute inset-0 rounded-full bg-green-500/10 animate-pulse"></div>
                  <svg class="w-6 h-6 text-green-500 icon-animation relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    <path d="M8 10h.01"></path>
                    <path d="M12 10h.01"></path>
                    <path d="M16 10h.01"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-white">WhatsApp Bot</h3>
                  <div class="text-xs text-gray-400">
                    <span class="text-green-400 mr-1">●</span> Operational
                    <span class="ml-2 bg-gray-800 px-1.5 py-0.5 rounded text-xs">Messages: <span class="text-primary font-mono">247</span></span>
                  </div>
                </div>
              </div>
              <div>
                <div class="w-7 h-7 rounded-full border-2 border-green-500 flex items-center justify-center shadow-md shadow-green-500/20">
                  <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Connector dengan data packets -->
          <div class="data-path mx-auto w-5/6 my-1 rounded">
            <div class="data-packet" style="animation-delay: 0.1s;"></div>
            <div class="data-packet" style="animation-delay: 0.6s;"></div>
            <div class="data-packet" style="animation-delay: 1.1s;"></div>
            <div class="data-packet" style="animation-delay: 1.6s;"></div>
            <div class="data-packet" style="animation-delay: 2.1s;"></div>
          </div>
          
          <!-- DigiFlazz API Component -->
          <div class="component bg-[#222933] rounded-lg p-4 border-2 border-primary/40 relative overflow-hidden shadow-[0_0_20px_rgba(240,185,11,0.2)] hover:border-primary/60 transition-all duration-300">
            <!-- Glowing background effect -->
            <div class="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent"></div>
            
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-3">
                <div class="icon-container w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center relative">
                  <!-- Glowing circle around the DigiFlazz icon -->
                  <div class="absolute w-full h-full rounded-full animate-pulse bg-primary/10"></div>
                  
                  <svg class="w-7 h-7 text-primary icon-animation relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-primary">DigiFlazz API</h3>
                  <div class="text-xs text-gray-400 flex items-center">
                    <span class="text-green-400 mr-1">●</span> 
                    <span class="font-medium">Online</span>
                    <span class="ml-2 bg-primary/10 text-primary px-1.5 py-0.5 rounded text-xs">Requests: <span class="font-mono">1.2K</span>/min</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-end">
                <div class="text-xs bg-green-500/10 border border-green-500/30 px-2 py-1 rounded-lg text-green-400">
                  200 OK
                </div>
                <div class="text-xs text-primary mt-1 font-mono bg-[#171f2f] px-2 py-0.5 rounded border border-primary/20">
                  Token: ****4c8b
                </div>
              </div>
            </div>
            
            <!-- API Status Indicators -->
            <div class="mt-3 grid grid-cols-3 gap-2 text-xs">
              <div class="bg-[#171f2f] rounded px-2 py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
                <span class="text-gray-300">Deposit</span>
              </div>
              <div class="bg-[#171f2f] rounded px-2 py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
                <span class="text-gray-300">Pricing</span>
              </div>
              <div class="bg-[#171f2f] rounded px-2 py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
                <span class="text-gray-300">Trx</span>
              </div>
            </div>
          </div>

          <!-- System Metrics Panel -->
          <div class="bg-[#171f2f] rounded-lg p-4 border border-gray-700 mt-1">
            <div class="flex justify-between items-center mb-3">
              <div class="text-sm text-white font-medium">Network Metrics</div>
              <div class="text-xs text-primary font-mono bg-primary/5 px-2 py-1 rounded">
                <span class="animate-pulse">Live</span>
              </div>
            </div>
            
            <!-- Network Transfer Rate -->
            <div class="mb-3">
              <div class="flex justify-between items-center mb-1">
                <div class="text-xs text-gray-400">Data Transfer</div>
                <div class="text-xs font-medium text-primary" id="dataRate">32 MB/s</div>
              </div>
              <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full activity-bar"></div>
              </div>
            </div>
            
            <!-- System Load -->
            <div class="mb-3">
              <div class="flex justify-between items-center mb-1">
                <div class="text-xs text-gray-400">System Load</div>
                <div class="text-xs font-medium text-green-400" id="systemLoad">24%</div>
              </div>
              <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-green-500/60 to-green-500 rounded-full" style="width: 24%; animation: statsFluctuation 6s infinite ease-in-out;"></div>
              </div>
            </div>
            
            <!-- Action Buttons -->
            <div class="mt-4 grid grid-cols-2 gap-2">
              <button id="activity-btn" class="bg-[#1e2736] text-gray-300 py-2 rounded text-xs hover:bg-[#28334a] transition-colors border border-gray-700 active:scale-95">
                <div class="flex items-center justify-center gap-1.5">
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                  <span>Activity</span>
                </div>
              </button>
              <button id="settings-btn" class="bg-[#1e2736] text-gray-300 py-2 rounded text-xs hover:bg-[#28334a] transition-colors border border-gray-700 active:scale-95">
                <div class="flex items-center justify-center gap-1.5">
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                  <span>Settings</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Setelah menambahkan elemen, tambahkan event listeners dan fungsionalitasnya
  setupDashboardButtons();
  
  // Fungsi untuk membuat efek ripple saat tombol diklik
  function createRippleEffect(button: HTMLElement, color: string) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    
    ripple.className = 'ripple-effect';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = color;
    ripple.style.width = '10px';
    ripple.style.height = '10px';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.opacity = '0.4';
    
    // Membuat posisi click berada di tengah button
    ripple.style.left = `${rect.width / 2}px`;
    ripple.style.top = `${rect.height / 2}px`;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    // Animasi ripple dalam CSS
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(20);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    // Hapus ripple effect setelah animasi selesai
    setTimeout(() => {
      ripple.remove();
      style.remove();
    }, 600);
  }

  // Setup tombol-tombol dashboard
  function setupDashboardButtons() {
    // Tombol Activity
    const activityBtn = document.getElementById('activity-btn');
    if (activityBtn) {
      activityBtn.addEventListener('click', () => {
        // Animasi ripple effect saat diklik
        createRippleEffect(activityBtn, 'rgba(59, 130, 246, 0.8)');
        
        // Animasi untuk activity
        const dataPackets = document.querySelectorAll('.data-packet');
        dataPackets.forEach(packet => {
          const packetElement = packet as HTMLElement;
          packetElement.style.filter = 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))';
          packetElement.style.backgroundColor = '#3b82f6';
          
          setTimeout(() => {
            packetElement.style.filter = 'drop-shadow(0 0 5px rgba(240, 185, 11, 0.8))';
            packetElement.style.backgroundColor = '#F0B90B';
          }, 2000);
        });
        
        // Deteksi apakah perangkat mobile atau desktop
        if (isMobileDevice()) {
          // Pada mobile, ubah konten ilustrasi langsung
          const dashboardContainer = document.getElementById('dashboard-illustration-container');
          if (dashboardContainer) {
            // Animasi fadeout-in dan ganti isi ilustrasi
            dashboardContainer.style.opacity = '0.3';
            dashboardContainer.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
              // Ganti konten dengan tampilan activity
              dashboardContainer.innerHTML = activityViewTemplate;
              
              // Tambahkan event listener untuk tombol kembali
              const backBtn = document.getElementById('back-to-dashboard');
              if (backBtn) {
                backBtn.addEventListener('click', () => {
                  // Reset tampilan ke dashboard normal
                  dashboardContainer.style.opacity = '0.3';
                  dashboardContainer.style.transform = 'scale(0.95)';
                  
                  setTimeout(() => {
                    // Setup ulang ilustrasi dashboard
                    setupDashboardIllustration('dashboard-illustration');
                    // Animasi masuk
                    dashboardContainer.style.opacity = '1';
                    dashboardContainer.style.transform = 'scale(1)';
                    showNotification('Dashboard view restored', 'rgba(255, 180, 0, 0.9)');
                  }, 300);
                });
              }
              
              // Animasi masuk
              dashboardContainer.style.opacity = '1';
              dashboardContainer.style.transform = 'scale(1)';
              
              // Notifikasi
              showNotification('Viewing network activity', 'rgba(59, 130, 246, 0.9)');
            }, 300);
          }
        } else {
          // Di desktop, tetap gunakan panel terpisah
          // Periksa apakah panel sudah ada sebelumnya
          let activityPanel = document.getElementById('activity-panel');
          if (activityPanel) {
            document.body.removeChild(activityPanel);
          }
          
          // Buat activity panel baru dengan fadeIn yang lebih halus
          activityPanel = document.createElement('div');
          activityPanel.id = 'activity-panel';
          activityPanel.className = 'fixed inset-0 z-[9999] flex items-center justify-center overflow-auto';
          activityPanel.style.opacity = '0';
          activityPanel.style.transition = 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), backdrop-filter 0.4s ease';
          activityPanel.style.backdropFilter = 'blur(0px)';
          activityPanel.style.backgroundColor = 'rgba(0, 0, 0, 0)';
          
          // Konten panel activity
          activityPanel.innerHTML = `
            <div class="relative w-full max-w-4xl bg-[#111827] rounded-lg overflow-hidden shadow-xl border border-blue-500/30"
                 style="opacity: 0; transform: scale(0.95); transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);">
              <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              
              <!-- Header -->
              <div class="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                <div class="flex items-center space-x-2">
                  <svg class="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                  <h2 class="text-lg font-semibold text-white">Network Activity Monitor</h2>
                </div>
                
                <button id="close-activity-panel" class="p-1 rounded-full hover:bg-gray-800 transition-colors group">
                  <svg class="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              <!-- Main Content -->
              <div class="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <!-- Left Column -->
                <div class="opacity-0 transform translate-y-4" style="transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;">
                  <!-- Activity Stats -->
                  <div class="bg-[#1a2234] rounded-lg p-4 mb-4 border border-gray-800">
                    <h3 class="text-sm font-semibold text-gray-400 mb-4">REAL-TIME METRICS</h3>
                    
                    <div class="grid grid-cols-2 gap-4 mb-4">
                      <div class="bg-[#111827] p-3 rounded-lg border border-gray-800">
                        <div class="flex justify-between">
                          <span class="text-xs text-gray-500">Active Users</span>
                          <span class="text-xs text-blue-400">LIVE</span>
                        </div>
                        <div class="text-xl font-bold text-white mt-2 flex items-end">
                          1,247
                          <span class="text-xs text-green-400 ml-2">+12.5%</span>
                        </div>
                      </div>
                      
                      <div class="bg-[#111827] p-3 rounded-lg border border-gray-800">
                        <div class="flex justify-between">
                          <span class="text-xs text-gray-500">Response Time</span>
                          <span class="text-xs text-blue-400">LIVE</span>
                        </div>
                        <div class="text-xl font-bold text-white mt-2 flex items-end">
                          23ms
                          <span class="text-xs text-green-400 ml-2">-8%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div class="mb-3">
                      <div class="flex justify-between mb-1">
                        <span class="text-xs text-gray-500">Bandwidth Usage</span>
                        <span class="text-xs font-semibold text-blue-400">78%</span>
                      </div>
                      <div class="w-full h-2 bg-gray-800 rounded">
                        <div class="h-full bg-blue-500 rounded" style="width: 78%; animation: pulse 2s infinite;"></div>
                      </div>
                    </div>
                    
                    <div class="mb-3">
                      <div class="flex justify-between mb-1">
                        <span class="text-xs text-gray-500">Server Load</span>
                        <span class="text-xs font-semibold text-green-400">42%</span>
                      </div>
                      <div class="w-full h-2 bg-gray-800 rounded">
                        <div class="h-full bg-green-500 rounded" style="width: 42%; animation: pulse 2s infinite;"></div>
                      </div>
                    </div>
                    
                    <div class="mb-1">
                      <div class="flex justify-between mb-1">
                        <span class="text-xs text-gray-500">Error Rate</span>
                        <span class="text-xs font-semibold text-red-500">0.12%</span>
                      </div>
                      <div class="w-full h-2 bg-gray-800 rounded">
                        <div class="h-full bg-red-500 rounded" style="width: 0.12%;"></div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Logs -->
                  <div class="bg-[#1a2234] rounded-lg p-4 border border-gray-800">
                    <div class="flex justify-between items-center mb-3">
                      <h3 class="text-sm font-semibold text-gray-400">SYSTEM LOGS</h3>
                      <span class="px-2 py-1 bg-[#111827] text-xs text-gray-500 rounded">Auto-refresh</span>
                    </div>
                    
                    <div class="text-xs font-mono text-gray-400 bg-[#111827] p-2 rounded border border-gray-800 h-[200px] overflow-y-auto">
                      <div class="mb-1 border-l-2 border-green-500 pl-2"><span class="text-green-500">[INFO]</span> Server connection established</div>
                      <div class="mb-1 border-l-2 border-blue-500 pl-2"><span class="text-blue-500">[SYSTEM]</span> User authentication successful</div>
                      <div class="mb-1 border-l-2 border-primary pl-2"><span class="text-primary">[API]</span> DigiFlazz endpoint responding</div>
                      <div class="mb-1 border-l-2 border-green-500 pl-2"><span class="text-green-500">[INFO]</span> Transaction <span class="text-primary">TX78912</span> processed</div>
                      <div class="mb-1 border-l-2 border-blue-500 pl-2"><span class="text-blue-500">[SYSTEM]</span> Database sync completed</div>
                      <div class="mb-1 border-l-2 border-red-500 pl-2"><span class="text-red-500">[ERROR]</span> Rate limit warning on <span class="text-primary">deposit/</span> endpoint</div>
                      <div class="mb-1 border-l-2 border-yellow-500 pl-2"><span class="text-yellow-500">[WARN]</span> High CPU usage detected</div>
                      <div class="mb-1 border-l-2 border-primary pl-2"><span class="text-primary">[API]</span> DigiFlazz pricelist updated</div>
                      <div class="mb-1 border-l-2 border-green-500 pl-2"><span class="text-green-500">[INFO]</span> New user registered</div>
                      <div class="mb-1 border-l-2 border-blue-500 pl-2"><span class="text-blue-500">[SYSTEM]</span> Backup created successfully</div>
                    </div>
                  </div>
                </div>
                
                <!-- Right Column -->
                <div class="opacity-0 transform translate-y-4" style="transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;">
                  <!-- Real-time Activity Chart -->
                  <div class="bg-[#1a2234] rounded-lg p-4 mb-4 border border-gray-800">
                    <h3 class="text-sm font-semibold text-gray-400 mb-4">NETWORK TRAFFIC</h3>
                    
                    <div class="h-[200px] relative mb-2">
                      <!-- Animated chart background -->
                      <div class="absolute inset-0 flex items-end">
                        <div class="flex-1 h-[30%] bg-blue-500/20 animate-pulse-slow rounded-sm"></div>
                        <div class="flex-1 h-[60%] bg-blue-500/20 animate-pulse-slow rounded-sm"></div>
                        <div class="flex-1 h-[45%] bg-blue-500/20 animate-pulse-slow rounded-sm"></div>
                        <div class="flex-1 h-[70%] bg-blue-500/20 animate-pulse-slow rounded-sm"></div>
                        <div class="flex-1 h-[55%] bg-blue-500/20 animate-pulse-slow rounded-sm"></div>
                        <div class="flex-1 h-[80%] bg-blue-500/20 animate-pulse-slow rounded-sm"></div>
                        <div class="flex-1 h-[65%] bg-blue-500/20 animate-pulse-slow rounded-sm"></div>
                        <div class="flex-1 h-[90%] bg-blue-500/20 animate-pulse-slow rounded-sm"></div>
                        <div class="flex-1 h-[75%] bg-blue-500/20 animate-pulse-slow rounded-sm"></div>
                        <div class="flex-1 h-[60%] bg-blue-500/20 animate-pulse-slow rounded-sm"></div>
                        <div class="flex-1 h-[85%] bg-blue-500/20 animate-pulse-slow rounded-sm"></div>
                        <div class="flex-1 h-[50%] bg-blue-500/20 animate-pulse-slow rounded-sm"></div>
                      </div>
                      
                      <!-- Network animation -->
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div class="relative w-24 h-24 opacity-20">
                          <div class="absolute inset-0 border-2 border-blue-500 rounded-full animate-ping"></div>
                          <div class="absolute inset-2 border-2 border-blue-400 rounded-full" style="animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite 0.2s"></div>
                          <div class="absolute inset-4 border-2 border-blue-300 rounded-full" style="animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite 0.4s"></div>
                          <div class="absolute inset-6 border-2 border-blue-200 rounded-full" style="animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite 0.6s"></div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Time periods -->
                    <div class="flex justify-between text-xs text-gray-500">
                      <span>00:00</span>
                      <span>06:00</span>
                      <span>12:00</span>
                      <span>18:00</span>
                      <span>24:00</span>
                    </div>
                  </div>
                  
                  <!-- Transaction Table -->
                  <div class="bg-[#1a2234] rounded-lg p-4 border border-gray-800">
                    <div class="flex justify-between items-center mb-3">
                      <h3 class="text-sm font-semibold text-gray-400">LATEST TRANSACTIONS</h3>
                      <span class="px-2 py-1 bg-[#111827] text-xs text-primary rounded border border-primary/20">View All</span>
                    </div>
                    
                    <div class="overflow-x-auto">
                      <table class="w-full text-xs">
                        <thead>
                          <tr class="text-gray-500 border-b border-gray-800">
                            <th class="text-left pb-2">ID</th>
                            <th class="text-left pb-2">Type</th>
                            <th class="text-left pb-2">Amount</th>
                            <th class="text-right pb-2">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-b border-gray-800 text-gray-300">
                            <td class="py-2 text-blue-400 font-mono">TX7821</td>
                            <td class="py-2">Pulsa</td>
                            <td class="py-2">Rp 50.000</td>
                            <td class="py-2 text-right"><span class="bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full text-[10px]">Success</span></td>
                          </tr>
                          <tr class="border-b border-gray-800 text-gray-300">
                            <td class="py-2 text-blue-400 font-mono">TX7820</td>
                            <td class="py-2">Paket Data</td>
                            <td class="py-2">Rp 75.000</td>
                            <td class="py-2 text-right"><span class="bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full text-[10px]">Success</span></td>
                          </tr>
                          <tr class="border-b border-gray-800 text-gray-300">
                            <td class="py-2 text-blue-400 font-mono">TX7819</td>
                            <td class="py-2">PLN</td>
                            <td class="py-2">Rp 145.700</td>
                            <td class="py-2 text-right"><span class="bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full text-[10px]">Success</span></td>
                          </tr>
                          <tr class="border-b border-gray-800 text-gray-300">
                            <td class="py-2 text-blue-400 font-mono">TX7818</td>
                            <td class="py-2">Game</td>
                            <td class="py-2">Rp 97.800</td>
                            <td class="py-2 text-right"><span class="bg-yellow-500/20 text-yellow-500 px-2 py-0.5 rounded-full text-[10px]">Pending</span></td>
                          </tr>
                          <tr class="text-gray-300">
                            <td class="py-2 text-blue-400 font-mono">TX7817</td>
                            <td class="py-2">PDAM</td>
                            <td class="py-2">Rp 128.500</td>
                            <td class="py-2 text-right"><span class="bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full text-[10px]">Success</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
          
          document.body.appendChild(activityPanel);
          
          // Animasi masuk dengan sequence
          setTimeout(() => {
            const panel = document.getElementById('activity-panel');
            const contentPanel = panel?.querySelector('div');
            const leftColumn = panel?.querySelector('.lg\\:grid-cols-2 > div:first-child');
            const rightColumn = panel?.querySelector('.lg\\:grid-cols-2 > div:last-child');
            
            if (panel) {
              // Langkah 1: Fade in background
              panel.style.opacity = '1';
              panel.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
              panel.style.backdropFilter = 'blur(5px)';
              
              // Langkah 2: Fade in & scale in panel content
              if (contentPanel) {
                setTimeout(() => {
                  contentPanel.style.opacity = '1';
                  contentPanel.style.transform = 'scale(1)';
                  
                  // Langkah 3: Fade in & slide up columns
                  setTimeout(() => {
                    if (leftColumn) {
                      const leftColumnEl = leftColumn as HTMLElement;
                      leftColumnEl.style.opacity = '1';
                      leftColumnEl.style.transform = 'translateY(0)';
                    }
                    
                    setTimeout(() => {
                      if (rightColumn) {
                        const rightColumnEl = rightColumn as HTMLElement;
                        rightColumnEl.style.opacity = '1';
                        rightColumnEl.style.transform = 'translateY(0)';
                      }
                    }, 100);
                  }, 200);
                }, 100);
              }
            }
          }, 50);
          
          // Event listener untuk tombol close
          setTimeout(() => {
            const closeButton = document.getElementById('close-activity-panel');
            if (closeButton) {
              closeButton.addEventListener('click', () => {
                const panel = document.getElementById('activity-panel');
                const contentPanel = panel?.querySelector('div');
                
                // Animasi keluar dengan sequence
                if (panel && contentPanel) {
                  // Fade out content first
                  contentPanel.style.opacity = '0';
                  contentPanel.style.transform = 'scale(0.95)';
                  
                  // Then fade out background
                  setTimeout(() => {
                    panel.style.opacity = '0';
                    panel.style.backdropFilter = 'blur(0px)';
                    panel.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                    
                    // Finally remove from DOM
                    setTimeout(() => {
                      if (panel.parentNode) {
                        document.body.removeChild(panel);
                      }
                    }, 400);
                  }, 200);
                }
              });
            }
          }, 100);
          
          // Menampilkan notifikasi
          showNotification('Viewing network activity', 'rgba(59, 130, 246, 0.9)');
        }
      });
    }
    
    // Tombol Settings
    const settingsBtn = document.getElementById('settings-btn');
    if (settingsBtn) {
      settingsBtn.addEventListener('click', () => {
        // Animasi ripple effect saat diklik
        createRippleEffect(settingsBtn, 'rgba(107, 114, 128, 0.8)');
        
        // Deteksi apakah perangkat mobile atau desktop
        if (isMobileDevice()) {
          // Pada mobile, ubah konten ilustrasi langsung
          const dashboardContainer = document.getElementById('dashboard-illustration-container');
          if (dashboardContainer) {
            // Animasi fadeout-in dan ganti isi ilustrasi
            dashboardContainer.style.opacity = '0.3';
            dashboardContainer.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
              // Ganti konten dengan tampilan settings
              dashboardContainer.innerHTML = settingsViewTemplate;
              
              // Tambahkan event listener untuk tombol kembali
              const backBtn = document.getElementById('back-to-dashboard');
              if (backBtn) {
                backBtn.addEventListener('click', () => {
                  // Reset tampilan ke dashboard normal
                  dashboardContainer.style.opacity = '0.3';
                  dashboardContainer.style.transform = 'scale(0.95)';
                  
                  setTimeout(() => {
                    // Setup ulang ilustrasi dashboard
                    setupDashboardIllustration('dashboard-illustration');
                    // Animasi masuk
                    dashboardContainer.style.opacity = '1';
                    dashboardContainer.style.transform = 'scale(1)';
                    showNotification('Dashboard view restored', 'rgba(255, 180, 0, 0.9)');
                  }, 300);
                });
              }
              
              // Animasi masuk
              dashboardContainer.style.opacity = '1';
              dashboardContainer.style.transform = 'scale(1)';
              
              // Notifikasi
              showNotification('Viewing system settings', 'rgba(107, 114, 128, 0.9)');
            }, 300);
          }
        } else {
          // Di desktop, tetap gunakan panel terpisah
          // Periksa apakah panel sudah ada sebelumnya
          let settingsPanel = document.getElementById('settings-panel');
          if (settingsPanel) {
            document.body.removeChild(settingsPanel);
          }
          
          // Buat settings panel baru dengan fadeIn yang lebih halus
          settingsPanel = document.createElement('div');
          settingsPanel.id = 'settings-panel';
          settingsPanel.className = 'fixed inset-0 z-[9999] flex items-center justify-center overflow-auto';
          settingsPanel.style.opacity = '0';
          settingsPanel.style.transition = 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), backdrop-filter 0.4s ease';
          settingsPanel.style.backdropFilter = 'blur(0px)';
          settingsPanel.style.backgroundColor = 'rgba(0, 0, 0, 0)';
          
          // Konten panel settings dengan animasi yang lebih mendetail
          settingsPanel.innerHTML = `
            <div class="relative w-full max-w-3xl bg-[#111827] rounded-lg overflow-hidden shadow-xl border border-gray-700/30"
                 style="opacity: 0; transform: scale(0.95); transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);">
              <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-600 to-gray-800"></div>
              
              <!-- Header -->
              <div class="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                <div class="flex items-center space-x-2">
                  <svg class="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                  <h2 class="text-lg font-semibold text-white">System Settings</h2>
                </div>
                
                <button id="close-settings-panel" class="p-1 rounded-full hover:bg-gray-800 transition-colors group">
                  <svg class="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              <!-- Main Content -->
              <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Left Column -->
                <div class="opacity-0 transform translate-y-4" style="transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;">
                  <!-- API Settings -->
                  <div class="bg-[#1a2234] rounded-lg p-4 mb-4 border border-gray-800">
                    <h3 class="text-sm font-semibold text-gray-400 mb-3">API CONFIGURATION</h3>
                    
                    <div class="space-y-3">
                      <div class="grid gap-2">
                        <div class="flex justify-between">
                          <label class="text-xs text-gray-500">DigiFlazz Username</label>
                          <span class="text-xs text-gray-400 px-2 py-0.5 rounded bg-gray-800/50">Verified</span>
                        </div>
                        <div class="bg-[#131923] p-2 rounded border border-gray-800 flex items-center">
                          <input type="text" value="demo@digiflazz.com" disabled 
                                 class="bg-transparent text-xs text-gray-300 w-full outline-none font-mono" />
                          <div class="text-xs text-gray-500 bg-gray-700/50 rounded px-1.5 py-0.5 ml-2">Masked</div>
                        </div>
                      </div>
                      
                      <div class="grid gap-2">
                        <div class="flex justify-between">
                          <label class="text-xs text-gray-500">API Key</label>
                          <span class="text-xs text-gray-400 px-2 py-0.5 rounded bg-gray-800/50">Secret</span>
                        </div>
                        <div class="bg-[#131923] p-2 rounded border border-gray-800 flex items-center group">
                          <input type="password" value="••••••••••••••••" disabled 
                                 class="bg-transparent text-xs text-gray-300 w-full outline-none font-mono" />
                          <div class="text-xs text-gray-500 bg-gray-700/50 rounded px-1.5 py-0.5 ml-2 cursor-pointer
                                      group-hover:bg-gray-600/50 group-hover:text-gray-300 transition-colors">
                            View
                          </div>
                        </div>
                      </div>
                      
                      <div class="grid gap-2">
                        <div class="flex justify-between">
                          <label class="text-xs text-gray-500">Webhook URL</label>
                          <span class="text-xs text-green-400 px-2 py-0.5 rounded bg-green-500/10">Active</span>
                        </div>
                        <div class="bg-[#131923] p-2 rounded border border-gray-800">
                          <input type="text" value="https://example.com/webhook/digiflazz" disabled 
                                 class="bg-transparent text-xs text-gray-300 w-full outline-none font-mono" />
                        </div>
                      </div>
                      
                      <div class="pt-2">
                        <button class="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 text-xs rounded border border-gray-700 transition-colors">
                          Test API Connection
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <!-- System Settings -->
                  <div class="bg-[#1a2234] rounded-lg p-4 border border-gray-800">
                    <h3 class="text-sm font-semibold text-gray-400 mb-3">SYSTEM PREFERENCES</h3>
                    
                    <div class="space-y-2.5">
                      <div class="flex items-center justify-between bg-[#131923] p-3 rounded border border-gray-800">
                        <div>
                          <div class="text-xs text-gray-300">Dark Mode</div>
                          <div class="text-[10px] text-gray-500">System appearance preference</div>
                        </div>
                        <div class="w-10 h-5 bg-primary/30 rounded-full relative">
                          <div class="absolute right-0 top-0 w-5 h-5 bg-primary rounded-full shadow"></div>
                        </div>
                      </div>
                      
                      <div class="flex items-center justify-between bg-[#131923] p-3 rounded border border-gray-800">
                        <div>
                          <div class="text-xs text-gray-300">Auto-Update Prices</div>
                          <div class="text-[10px] text-gray-500">Fetch latest pricing automatically</div>
                        </div>
                        <div class="w-10 h-5 bg-primary/30 rounded-full relative">
                          <div class="absolute right-0 top-0 w-5 h-5 bg-primary rounded-full shadow"></div>
                        </div>
                      </div>
                      
                      <div class="flex items-center justify-between bg-[#131923] p-3 rounded border border-gray-800">
                        <div>
                          <div class="text-xs text-gray-300">Transaction Notifications</div>
                          <div class="text-[10px] text-gray-500">Receive alerts for new transactions</div>
                        </div>
                        <div class="w-10 h-5 bg-primary/30 rounded-full relative">
                          <div class="absolute right-0 top-0 w-5 h-5 bg-primary rounded-full shadow"></div>
                        </div>
                      </div>
                      
                      <div class="flex items-center justify-between bg-[#131923] p-3 rounded border border-gray-800">
                        <div>
                          <div class="text-xs text-gray-300">Debug Mode</div>
                          <div class="text-[10px] text-gray-500">Enable advanced logging</div>
                        </div>
                        <div class="w-10 h-5 bg-gray-600/50 rounded-full relative">
                          <div class="absolute left-0 top-0 w-5 h-5 bg-gray-500 rounded-full shadow"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Right Column -->
                <div class="opacity-0 transform translate-y-4" style="transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;">
                  <!-- Bot Configuration -->
                  <div class="bg-[#1a2234] rounded-lg p-4 mb-4 border border-gray-800">
                    <div class="flex justify-between items-center mb-3">
                      <h3 class="text-sm font-semibold text-gray-400">BOT CONFIGURATION</h3>
                      <span class="px-2 py-1 bg-green-500/10 text-xs text-green-400 rounded-full border border-green-500/20">Online</span>
                    </div>
                    
                    <div class="space-y-3">
                      <div class="grid gap-2">
                        <label class="text-xs text-gray-500">WhatsApp Number</label>
                        <div class="bg-[#131923] p-2 rounded border border-gray-800 flex items-center">
                          <input type="text" value="+62 812-3456-7890" disabled class="bg-transparent text-xs text-gray-300 w-full outline-none font-mono" />
                          <div class="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
                        </div>
                      </div>
                      
                      <div class="grid gap-2">
                        <label class="text-xs text-gray-500">Auto-reply Template</label>
                        <div class="bg-[#131923] p-2 rounded border border-gray-800 text-xs text-gray-300 font-mono h-16 overflow-y-auto">
                          Halo {customer_name}, terima kasih telah menghubungi layanan kami. Untuk memesan produk silahkan kirim pesan dengan format: {product_code}#{phone_number}
                        </div>
                      </div>
                      
                      <div class="pt-2 grid grid-cols-2 gap-2">
                        <button class="bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 text-xs rounded border border-gray-700 transition-colors">
                          Edit Templates
                        </button>
                        <button class="bg-primary/20 hover:bg-primary/30 text-primary py-2 text-xs rounded border border-primary/30 transition-colors">
                          Test Bot
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Security Settings -->
                  <div class="bg-[#1a2234] rounded-lg p-4 border border-gray-800">
                    <h3 class="text-sm font-semibold text-gray-400 mb-3">SECURITY</h3>
                    
                    <div class="space-y-3">
                      <div class="bg-[#131923] p-3 rounded border border-gray-800">
                        <div class="flex justify-between items-center mb-2">
                          <div class="text-xs text-gray-300">Two-Factor Authentication</div>
                          <div class="w-10 h-5 bg-primary/30 rounded-full relative">
                            <div class="absolute right-0 top-0 w-5 h-5 bg-primary rounded-full shadow"></div>
                          </div>
                        </div>
                        <div class="text-[10px] text-gray-500">
                          Account is protected with additional verification
                        </div>
                      </div>
                      
                      <div class="bg-[#131923] p-3 rounded border border-gray-800">
                        <div class="flex justify-between items-center mb-2">
                          <div class="text-xs text-gray-300">API Rate Limiting</div>
                          <div class="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                            1000/day
                          </div>
                        </div>
                        <div class="text-[10px] text-gray-500">
                          Maximum API calls allowed per day
                        </div>
                      </div>
                      
                      <div class="mt-3 grid grid-cols-2 gap-2">
                        <button class="bg-red-500/10 hover:bg-red-500/20 text-red-400 py-2 text-xs rounded border border-red-500/20 transition-colors">
                          Reset API Key
                        </button>
                        <button class="bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 py-2 text-xs rounded border border-blue-500/20 transition-colors">
                          Security Log
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Footer with Save/Cancel buttons -->
              <div class="px-4 py-3 bg-gray-900/50 border-t border-gray-800 flex justify-end gap-2">
                <button id="settings-cancel-btn" class="px-4 py-2 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 rounded border border-gray-700 transition-colors">
                  Cancel
                </button>
                <button id="settings-save-btn" class="px-4 py-2 text-xs bg-primary/20 hover:bg-primary/30 text-primary rounded border border-primary/30 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          `;
          
          document.body.appendChild(settingsPanel);
          
          // Animasi masuk dengan sequence
          setTimeout(() => {
            const panel = document.getElementById('settings-panel');
            const contentPanel = panel?.querySelector('div');
            const leftColumn = panel?.querySelector('.md\\:grid-cols-2 > div:first-child');
            const rightColumn = panel?.querySelector('.md\\:grid-cols-2 > div:last-child');
            
            if (panel) {
              // Langkah 1: Fade in background
              panel.style.opacity = '1';
              panel.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
              panel.style.backdropFilter = 'blur(5px)';
              
              // Langkah 2: Fade in & scale in panel content
              if (contentPanel) {
                setTimeout(() => {
                  contentPanel.style.opacity = '1';
                  contentPanel.style.transform = 'scale(1)';
                  
                  // Langkah 3: Fade in & slide up columns
                  setTimeout(() => {
                    if (leftColumn) {
                      const leftColumnEl = leftColumn as HTMLElement;
                      leftColumnEl.style.opacity = '1';
                      leftColumnEl.style.transform = 'translateY(0)';
                    }
                    
                    setTimeout(() => {
                      if (rightColumn) {
                        const rightColumnEl = rightColumn as HTMLElement;
                        rightColumnEl.style.opacity = '1';
                        rightColumnEl.style.transform = 'translateY(0)';
                      }
                    }, 100);
                  }, 200);
                }, 100);
              }
            }
          }, 50);
          
          // Event listener untuk tombol close dan cancel
          setTimeout(() => {
            const closeButton = document.getElementById('close-settings-panel');
            const cancelButton = document.querySelector('#settings-panel button.bg-gray-800');
            const saveButton = document.querySelector('#settings-panel button.bg-primary\\/20');
            
            const closeSettingsPanel = () => {
              const panel = document.getElementById('settings-panel');
              
              if (panel) {
                // Simple fade out and remove
                panel.style.opacity = '0';
                
                // Remove from DOM
                setTimeout(() => {
                  if (panel.parentNode) {
                    document.body.removeChild(panel);
                  }
                }, 300);
              }
            };
            
            if (closeButton) {
              closeButton.addEventListener('click', closeSettingsPanel);
            }
            
            if (cancelButton) {
              cancelButton.addEventListener('click', closeSettingsPanel);
            }
            
            if (saveButton) {
              saveButton.addEventListener('click', () => {
                showNotification('Settings saved successfully!', 'rgba(34, 197, 94, 0.9)');
                closeSettingsPanel();
              });
            }
          }, 100);
          
          // Menampilkan notifikasi
          showNotification('Settings panel opened', 'rgba(107, 114, 128, 0.9)');
        }
      });
    }
  }
  
  // Fungsi untuk menampilkan notifikasi
  function showNotification(message: string, color: string) {
    let notificationContainer = document.getElementById('notification-container');
    
    if (!notificationContainer) {
      notificationContainer = document.createElement('div');
      notificationContainer.id = 'notification-container';
      notificationContainer.style.position = 'fixed';
      notificationContainer.style.top = '20px';
      notificationContainer.style.right = '20px';
      notificationContainer.style.zIndex = '10000';
      notificationContainer.style.display = 'flex';
      notificationContainer.style.flexDirection = 'column';
      notificationContainer.style.alignItems = 'flex-end';
      document.body.appendChild(notificationContainer);
    }
    
    const notification = document.createElement('div');
    notification.style.backgroundColor = color;
    notification.style.color = 'white';
    notification.style.padding = '10px 15px';
    notification.style.borderRadius = '4px';
    notification.style.margin = '5px 0';
    notification.style.maxWidth = '300px';
    notification.style.marginTop = '10px';
    notification.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    notification.style.fontSize = '14px';
    notification.style.fontWeight = 'bold';
    notification.style.animation = 'fadeIn 0.3s ease-out forwards';
    notification.textContent = message;
    
    notificationContainer.appendChild(notification);
    
    // Hapus notifikasi setelah beberapa detik
    setTimeout(() => {
      notification.style.animation = 'fadeOut 0.3s ease-in forwards';
      setTimeout(() => {
        if (notification && notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }
}
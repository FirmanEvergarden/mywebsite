import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

// Fungsi untuk menampilkan efek navigasi saat link diklik
// Di-nonaktifkan / dibuat kosong sesuai permintaan
const showNavigationEffect = (path: string) => {
  // Fungsi ini sudah tidak melakukan animasi transisi antar halaman
  // Sesuai permintaan user: "hapus animasi masuk ketika berganti router"
  // Animasi transisi dihapus dari navigasi untuk UX yang lebih cepat
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Menangani efek scroll untuk shadow header - menggunakan throttling
  const handleScroll = useCallback(() => {
    // Hanya set state jika berubah untuk mengurangi render
    const shouldBeScrolled = window.scrollY > 20;
    if (isScrolled !== shouldBeScrolled) {
      setIsScrolled(shouldBeScrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    // Menggunakan throttling untuk event scroll
    let scrollTimer: number;
    const throttledScroll = () => {
      if (!scrollTimer) {
        scrollTimer = window.setTimeout(() => {
          scrollTimer = 0;
          handleScroll();
        }, 100); // Throttle 100ms
      }
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Panggil sekali saat komponen di-mount
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (scrollTimer) window.clearTimeout(scrollTimer);
    };
  }, [handleScroll]);

  // Menutup menu mobile saat path berubah
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 bg-black z-50 ${
      isScrolled ? 'shadow-md shadow-black/50' : ''
    }`}>
      {/* Efek strip warna di atas navbar */}
      <div className="h-1 bg-gradient-to-r from-primary via-amber-400 to-primary"></div>
      
      {/* Desktop pattern overlay - hidden on mobile */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 z-0 hidden md:block overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-amber-300 blur-2xl"></div>
        <div className="absolute -bottom-10 -left-5 w-20 h-20 rounded-full bg-primary blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
            <Link href="/" className="group relative text-2xl font-bold text-primary flex items-center transition-all duration-300">
              <div className="mr-2 w-8 h-8 md:w-10 md:h-10 rounded-md bg-primary flex items-center justify-center text-black overflow-hidden shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <span className="group-hover:text-yellow-400 transition-colors duration-300">MannShop</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <button 
              className="block text-white p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <nav 
            className={`nav-menu ${isMenuOpen ? 'nav-visible' : 'nav-hidden'} w-full absolute left-0 top-[72px] bg-gray-900/95 backdrop-blur-sm z-50 shadow-lg py-4 px-6 border-t border-gray-800`}
            style={{
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              transform: isMenuOpen ? "translateY(0)" : "translateY(-20px)",
              opacity: isMenuOpen ? 1 : 0,
              height: isMenuOpen ? 'auto' : '0',
              overflow: 'hidden'
            }}
          >
            <style>{`
              @keyframes fadeInStagger {
                0% {
                  opacity: 0;
                  transform: translateY(-15px) scale(0.95);
                  filter: blur(5px);
                }
                50% {
                  filter: blur(0px);
                }
                100% {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                  filter: blur(0px);
                }
              }
              
              @keyframes menuGlow {
                0%, 100% {
                  box-shadow: 0 0 5px rgba(240, 185, 11, 0);
                }
                50% {
                  box-shadow: 0 0 15px rgba(240, 185, 11, 0.3);
                }
              }
              
              .nav-hidden {
                pointer-events: none;
                visibility: hidden;
              }
              
              .nav-visible {
                pointer-events: auto;
                visibility: visible;
              }
              
              .menu-item {
                animation: fadeInStagger 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                opacity: 0;
                transform-origin: top center;
              }
              
              .nav-link:hover {
                animation: menuGlow 2s infinite;
              }
              
              .nav-active-indicator {
                position: absolute;
                bottom: -3px;
                left: 50%;
                transform: translateX(-50%);
                width: 20px;
                height: 3px;
                background-color: #F0B90B;
                border-radius: 2px;
                animation: pulseIndicator 2s infinite;
              }
              
              @keyframes pulseIndicator {
                0%, 100% { opacity: 0.7; width: 20px; }
                50% { opacity: 1; width: 30px; }
              }
            `}</style>
            
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
              <li className="w-full menu-item" style={{ animationDelay: "0.05s" }}>
                <Link 
                  href="/" 
                  className={`nav-link w-full block text-center px-4 py-3 md:py-4 relative transition-all duration-200 border rounded-lg hover:border-amber-700 hover:bg-gray-800/70 hover:shadow-md hover:shadow-amber-900/20 ${
                    location === '/' ? 'text-primary border-amber-700 bg-gray-800/70 shadow-md shadow-amber-900/20' : 'border-gray-800'
                  }`}
                  onClick={() => setTimeout(() => showNavigationEffect('/'), 50)}
                >
                  Beranda
                  {location === '/' && <div className="nav-active-indicator"></div>}
                </Link>
              </li>
              <li className="w-full menu-item" style={{ animationDelay: "0.1s" }}>
                <Link 
                  href="/digiflazz-registration" 
                  className={`nav-link w-full block text-center px-4 py-3 md:py-4 relative transition-all duration-200 border rounded-lg hover:border-amber-700 hover:bg-gray-800/70 hover:shadow-md hover:shadow-amber-900/20 ${
                    location === '/digiflazz-registration' ? 'text-primary border-amber-700 bg-gray-800/70 shadow-md shadow-amber-900/20' : 'border-gray-800'
                  }`}
                  onClick={() => setTimeout(() => showNavigationEffect('/digiflazz-registration'), 50)}
                >
                  Registrasi DigiFlazz
                  {location === '/digiflazz-registration' && <div className="nav-active-indicator"></div>}
                </Link>
              </li>
              <li className="w-full menu-item" style={{ animationDelay: "0.15s" }}>
                <Link 
                  href="/mongodb-setup" 
                  className={`nav-link w-full block text-center px-4 py-3 md:py-4 relative transition-all duration-200 border rounded-lg hover:border-amber-700 hover:bg-gray-800/70 hover:shadow-md hover:shadow-amber-900/20 ${
                    location === '/mongodb-setup' ? 'text-primary border-amber-700 bg-gray-800/70 shadow-md shadow-amber-900/20' : 'border-gray-800'
                  }`}
                  onClick={() => setTimeout(() => showNavigationEffect('/mongodb-setup'), 50)}
                >
                  Setup MongoDB
                  {location === '/mongodb-setup' && <div className="nav-active-indicator"></div>}
                </Link>
              </li>
              <li className="w-full menu-item" style={{ animationDelay: "0.2s" }}>
                <Link 
                  href="/authenticator-setup" 
                  className={`nav-link w-full block text-center px-4 py-3 md:py-4 relative transition-all duration-200 border rounded-lg hover:border-amber-700 hover:bg-gray-800/70 hover:shadow-md hover:shadow-amber-900/20 ${
                    location === '/authenticator-setup' ? 'text-primary border-amber-700 bg-gray-800/70 shadow-md shadow-amber-900/20' : 'border-gray-800'
                  }`}
                  onClick={() => setTimeout(() => showNavigationEffect('/authenticator-setup'), 50)}
                >
                  Setup Authenticator
                  {location === '/authenticator-setup' && <div className="nav-active-indicator"></div>}
                </Link>
              </li>
              <li className="w-full menu-item" style={{ animationDelay: "0.25s" }}>
                <Link 
                  href="/script-editing" 
                  className={`nav-link w-full block text-center px-4 py-3 md:py-4 relative transition-all duration-200 border rounded-lg hover:border-amber-700 hover:bg-gray-800/70 hover:shadow-md hover:shadow-amber-900/20 ${
                    location === '/script-editing' ? 'text-primary border-amber-700 bg-gray-800/70 shadow-md shadow-amber-900/20' : 'border-gray-800'
                  }`}
                  onClick={() => setTimeout(() => showNavigationEffect('/script-editing'), 50)}
                >
                  Edit Script
                  {location === '/script-editing' && <div className="nav-active-indicator"></div>}
                </Link>
              </li>
              <li className="w-full menu-item" style={{ animationDelay: "0.3s" }}>
                <Link 
                  href="/pterodactyl-tutorial" 
                  className={`nav-link w-full block text-center px-4 py-3 md:py-4 relative transition-all duration-200 border rounded-lg hover:border-amber-700 hover:bg-gray-800/70 hover:shadow-md hover:shadow-amber-900/20 ${
                    location === '/pterodactyl-tutorial' ? 'text-primary border-amber-700 bg-gray-800/70 shadow-md shadow-amber-900/20' : 'border-gray-800'
                  }`}
                  onClick={() => setTimeout(() => showNavigationEffect('/pterodactyl-tutorial'), 50)}
                >
                  Server Pterodactyl
                  {location === '/pterodactyl-tutorial' && <div className="nav-active-indicator"></div>}
                </Link>
              </li>
              <li className="w-full menu-item" style={{ animationDelay: "0.35s" }}>
                <Link 
                  href="/connect-bot" 
                  className={`nav-link w-full block text-center px-4 py-3 md:py-4 relative transition-all duration-200 border rounded-lg hover:border-amber-700 hover:bg-gray-800/70 hover:shadow-md hover:shadow-amber-900/20 ${
                    location === '/connect-bot' ? 'text-primary border-amber-700 bg-gray-800/70 shadow-md shadow-amber-900/20' : 'border-gray-800'
                  }`}
                  onClick={() => setTimeout(() => showNavigationEffect('/connect-bot'), 50)}
                >
                  Koneksi Bot
                  {location === '/connect-bot' && <div className="nav-active-indicator"></div>}
                </Link>
              </li>
              <li className="w-full menu-item" style={{ animationDelay: "0.4s" }}>
                <Link 
                  href="/pricing" 
                  className={`nav-link w-full block text-center px-4 py-3 md:py-4 relative transition-all duration-200 border rounded-lg hover:border-amber-700 hover:bg-gray-800/70 hover:shadow-md hover:shadow-amber-900/20 ${
                    location === '/pricing' ? 'text-primary border-amber-700 bg-gray-800/70 shadow-md shadow-amber-900/20' : 'border-gray-800'
                  }`}
                  onClick={() => setTimeout(() => showNavigationEffect('/pricing'), 50)}
                >
                  Harga
                  {location === '/pricing' && <div className="nav-active-indicator"></div>}
                </Link>
              </li>
              <li className="w-full menu-item" style={{ animationDelay: "0.45s" }}>
                <Link 
                  href="/faq" 
                  className={`nav-link w-full block text-center px-4 py-3 md:py-4 relative transition-all duration-200 border rounded-lg hover:border-amber-700 hover:bg-gray-800/70 hover:shadow-md hover:shadow-amber-900/20 ${
                    location === '/faq' ? 'text-primary border-amber-700 bg-gray-800/70 shadow-md shadow-amber-900/20' : 'border-gray-800'
                  }`}
                  onClick={() => setTimeout(() => showNavigationEffect('/faq'), 50)}
                >
                  FAQ
                  {location === '/faq' && <div className="nav-active-indicator"></div>}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

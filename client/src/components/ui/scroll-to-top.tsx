import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, ChevronDown } from "lucide-react";

// Fungsi helper untuk smooth scroll ke elemen dengan ID tertentu (internal use only)
const scrollToElementHelper = (elementId: string, offset: number = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollDown, setShowScrollDown] = useState(true);

  // Mengoptimalkan dengan throttling
  const handleScroll = useCallback(() => {
    // Cek apakah perlu menampilkan tombol scroll-to-top
    const shouldBeVisible = window.scrollY > 300;
    if (isVisible !== shouldBeVisible) {
      setIsVisible(shouldBeVisible);
    }
    
    // Hitung progress scroll untuk indikator
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentScrollPosition = Math.max(0, Math.min(1, window.scrollY / scrollHeight));
    setScrollProgress(currentScrollPosition * 100);
    
    // Tombol scroll-down tampil hanya di bagian atas halaman
    setShowScrollDown(window.scrollY < 100);
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  const scrollDownToContent = () => {
    // Scroll ke bawah dari homepage ke konten utama
    const tutorialSection = document.querySelector('#dashboard') as HTMLElement;
    if (tutorialSection) {
      const nextSibling = tutorialSection.nextElementSibling as HTMLElement;
      if (nextSibling) {
        window.scrollTo({
          top: nextSibling.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    // Menggunakan throttling untuk performance
    let throttleTimer: number | null = null;
    const throttledScroll = () => {
      if (!throttleTimer) {
        throttleTimer = window.setTimeout(() => {
          throttleTimer = null;
          handleScroll();
        }, 100); // Throttle 100ms
      }
    };

    window.addEventListener("scroll", throttledScroll);
    // Panggil awal untuk menentukan status tombol
    handleScroll();
    
    // Tambahkan smooth scrolling untuk semua link anchor di halaman
    const setupSmoothAnchors = () => {
      const anchorLinks = document.querySelectorAll('a[href^="#"]');
      anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(this: HTMLAnchorElement, e: MouseEvent) {
          const href = this.getAttribute('href');
          if (href && href !== '#') {
            e.preventDefault();
            const targetId = href.substring(1); // hapus # dari awal
            scrollToElement(targetId, 80); // dengan offset
          }
        });
      });
    };
    
    // Setup anchor links after a small delay to ensure DOM is ready
    setTimeout(setupSmoothAnchors, 500);
    
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (throttleTimer) window.clearTimeout(throttleTimer);
    };
  }, [handleScroll]);
  
  return (
    <>
      {/* Tombol scroll to top dengan progress ring */}
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 transform hover:scale-110 transition-transform duration-300">
          <div className="relative">
            {/* Progress Ring */}
            <svg className="w-12 h-12 -rotate-90 transform">
              <circle 
                cx="24" 
                cy="24" 
                r="20" 
                fill="none" 
                strokeWidth="3" 
                className="stroke-gray-700"
              />
              <circle 
                cx="24" 
                cy="24" 
                r="20" 
                fill="none" 
                strokeWidth="3" 
                strokeDasharray="125.6" 
                strokeDashoffset={125.6 - (125.6 * scrollProgress) / 100} 
                className="stroke-primary transition-all duration-200 ease-out"
              />
            </svg>
            
            {/* Button */}
            <Button
              size="icon"
              onClick={scrollToTop}
              className="absolute inset-0 m-auto rounded-full bg-gray-800 hover:bg-gray-700 shadow-md shadow-black/20 border border-gray-700 w-9 h-9"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4 text-primary" />
            </Button>
          </div>
        </div>
      )}
      
      {/* Tombol scroll down yang muncul di bagian atas halaman */}
      {showScrollDown && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-bounce">
          <Button
            size="icon"
            onClick={scrollDownToContent}
            className="rounded-full bg-gray-800/80 hover:bg-gray-700 shadow-md w-12 h-12 border border-gray-700 backdrop-blur-sm"
            aria-label="Scroll down to content"
          >
            <ChevronDown className="h-6 w-6 text-primary" />
          </Button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;

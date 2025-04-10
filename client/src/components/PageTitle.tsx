import { useEffect } from 'react';
import { useLocation } from 'wouter';

// Komponen untuk mengubah judul halaman secara dinamis berdasarkan rute
export default function PageTitle() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Map lokasi ke judul yang sesuai
    const titleMap: Record<string, string> = {
      '/': 'MannShop - Panduan Bot & DigiFlazz',
      '/digiflazz-registration': 'Registrasi DigiFlazz - MannShop',
      '/mongodb-setup': 'Setup MongoDB - MannShop',
      '/authenticator-setup': 'Setup Authenticator - MannShop',
      '/script-editing': 'Edit Script - MannShop',
      '/pterodactyl-tutorial': 'Tutorial Pterodactyl - MannShop',
      '/connect-bot': 'Koneksi Bot - MannShop',
      '/pricing': 'Harga Script Bot - MannShop',
      '/faq': 'FAQ - MannShop',
      '/privacy': 'Kebijakan Privasi - MannShop',
      '/terms': 'Syarat & Ketentuan - MannShop',
    };
    
    // Set judul halaman
    document.title = titleMap[location] || 'MannShop - Panduan Bot & DigiFlazz';
    
    // Pastikan metadata juga diperbarui
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', 'MannShop - Panduan lengkap integrasi Bot Messaging dengan DigiFlazz untuk bisnis pulsa dan produk digital Anda.');
    }
  }, [location]);
  
  return null; // Komponen ini tidak merender apapun
}
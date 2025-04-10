import React, { useEffect } from 'react';
import { Link } from 'wouter';
import { activatePageAnimations } from '../lib/animationHelper.fixed';

const Pricing: React.FC = () => {
  // Aktifkan animasi saat komponen di-mount
  useEffect(() => {
    activatePageAnimations();
  }, []);

  return (
    <section id="pricing" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto section-content">
          <div className="mb-12 text-center">
            <span className="inline-block px-4 py-1 bg-amber-900/40 text-primary rounded-full text-sm font-medium mb-4">Harga</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Harga Script Bot WhatsApp Topup Otomatis</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Script bot premium untuk bisnis pulsa dan produk digital Anda dengan fitur lengkap dan dukungan teknis permanen.</p>
          </div>
          
          {/* Pricing Box */}
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            {/* Left side: Features & Illustration */}
            <div className="w-full md:w-2/3 bg-gray-800 rounded-xl p-6 border border-gray-700 section-content">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Keterangan Script Bot WhatsApp Topup Otomatis</h3>
                <p className="text-gray-300 mb-6">
                  Bot WhatsApp ini dirancang untuk mempermudah proses transaksi pembelian produk digital secara otomatis melalui server Digiflazz. Cocok untuk kamu yang ingin menjalankan bisnis pulsa atau produk digital dengan sistem yang cepat, praktis, dan tanpa ribet.
                </p>
                
                {/* Features */}
                <div className="space-y-6">
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-primary mb-2">Apa itu Digiflazz?</h4>
                    <p className="text-gray-300">
                      Digiflazz adalah platform yang menjembatani antara pembeli dan penjual produk digital, seperti pulsa, paket data, token listrik, dan lainnya. Di sini, penjual (pemilik server atau website pulsa) bisa menawarkan produk mereka, dan pembeli bisa memilih sesuai kebutuhan.
                      <br/><br/>
                      Singkatnya, ketika bot WhatsApp dihubungkan dengan Digiflazz, semua transaksi bisa dilakukan langsung melalui chat WhatsApp — mudah dan efisien.
                    </p>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-primary mb-2">Harga Produk & Stok Server</h4>
                    <p className="text-gray-300">
                      Harga dan ketersediaan produk ditentukan langsung oleh masing-masing seller. Maka dari itu, kamu mungkin menemukan perbedaan harga untuk produk yang sama.
                      <br/><br/>
                      Kamu bisa bebas memilih seller yang sesuai dengan kebutuhan: apakah yang paling murah, yang stoknya paling stabil, atau yang pelayanannya paling cepat — semuanya bisa kamu sesuaikan dengan preferensimu.
                    </p>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-primary mb-2">Keuntungan Menggunakan Bot WhatsApp</h4>
                    <p className="text-gray-300">
                      Dengan Bot WhatsApp, kamu bisa menghasilkan keuntungan otomatis dari setiap transaksi yang dilakukan oleh pengguna. Kamu bebas mengatur margin keuntungan sendiri, misalnya 1%, 2%, 3%, dan seterusnya.
                      <br/><br/>
                      Setiap kali ada transaksi sukses, keuntungannya langsung masuk ke saldomu. Semakin banyak transaksi, semakin besar keuntungan yang kamu kumpulkan — tanpa perlu repot!
                    </p>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-primary mb-2">Cara Kerja Transaksi di Bot</h4>
                    <p className="text-gray-300">
                      Sistem transaksi melalui bot ini sangat simpel dan otomatis. Misalnya, ketika ada pengguna mengirim pesan "order pulsa 0857000000", bot akan langsung merespons dan menampilkan dua opsi pembayaran: melalui QRIS atau Saldo Bot.
                      <br/><br/>
                      <strong className="text-white">Pembayaran via QRIS:</strong> Transaksi diproses otomatis begitu pembayaran terdeteksi.
                      <br/><br/>
                      <strong className="text-white">Pembayaran via Saldo Bot:</strong> Pengguna cukup deposit saldo terlebih dahulu, dan saldo akan masuk otomatis tanpa perlu konfirmasi admin.
                      <br/><br/>
                      Dengan sistem ini, pengguna bisa bertransaksi kapan saja, tanpa perlu menunggu admin — lebih cepat, praktis, dan efisien.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side: Price card */}
            <div className="w-full md:w-1/3">
              <div className="sticky top-24 bg-gradient-to-b from-gray-800 to-gray-800/90 rounded-xl border border-primary/50 p-6 shadow-lg shadow-primary/10 section-content transform-gpu">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Script Bot Premium</h3>
                  <div className="flex items-center justify-center gap-1 text-3xl font-bold text-primary mt-4 mb-2">
                    <span className="text-base text-gray-400 font-normal">Rp</span>
                    <span>149.000</span>
                  </div>
                  <p className="text-gray-400 text-sm">Pembayaran sekali, akses selamanya</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Script Bot Lengkap</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Panduan Setup Lengkap</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Koneksi DigiFlazz API</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Transaksi Otomatis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Support Pembayaran QRIS</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Database MongoDB</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300"><span className="text-white font-medium">Bimbingan Permanen</span> untuk perawatan bot</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/6283861518933?text=Halo%20admin,%20saya%20ingin%20membeli%20script%20bot%20WhatsApp" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="block w-full bg-primary hover:bg-primary/90 text-black font-medium py-3 rounded-lg text-center transition-colors"
                  >
                    Pesan Sekarang <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                  <Link 
                    href="/"
                    className="block w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg text-center transition-colors"
                  >
                    Kembali ke Dashboard
                  </Link>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm">Jika ada pertanyaan, silakan hubungi admin kami untuk bantuan lebih lanjut.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Demo section */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center section-content">
            <h3 className="text-2xl font-bold text-white mb-4">Ilustrasi Bot WhatsApp</h3>
            <div className="max-w-md mx-auto">
              <div className="bg-gray-900 p-4 rounded-xl mb-4 border border-gray-700">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Bot WhatsApp</h4>
                    <p className="text-gray-400 text-xs">online</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="bg-green-900/20 p-2 rounded-lg text-green-400 text-sm inline-block ml-auto max-w-[80%] break-words">
                    order pulsa 085700000000
                  </div>
                  
                  <div className="bg-gray-700 p-2 rounded-lg text-gray-300 text-sm max-w-[80%] break-words">
                    <p className="font-medium text-white">🎯 Pesanan Anda:</p>
                    <ul className="mt-1 space-y-1">
                      <li>Produk: Pulsa Reguler</li>
                      <li>Nominal: Rp10.000</li>
                      <li>No. Tujuan: 085700000000</li>
                      <li>Harga: Rp11.000</li>
                    </ul>
                    <div className="mt-2">
                      <p className="font-medium text-white">💳 Pilih metode pembayaran:</p>
                      <div className="mt-1 space-y-1">
                        <div className="bg-gray-600 p-1 rounded">1. QRIS (scan barcode)</div>
                        <div className="bg-gray-600 p-1 rounded">2. Saldo Bot (Rp0)</div>
                      </div>
                    </div>
                    <p className="mt-2 text-xs">Ketik nomor pilihan Anda</p>
                  </div>
                  
                  <div className="bg-green-900/20 p-2 rounded-lg text-green-400 text-sm inline-block ml-auto max-w-[80%] break-words">
                    1
                  </div>
                  
                  <div className="bg-gray-700 p-2 rounded-lg text-gray-300 text-sm max-w-[80%] break-words">
                    <p className="font-medium text-white">🔄 Silahkan scan QRIS berikut:</p>
                    <div className="bg-white p-3 rounded mt-2 flex items-center justify-center">
                      <div className="w-32 h-32 bg-gray-100 relative overflow-hidden">
                        <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-1">
                          {Array(25).fill(0).map((_, i) => (
                            <div key={i} className={`bg-black ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-0'}`}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 text-xs">Pembayaran akan diproses otomatis setelah pembayaran terverifikasi.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <a 
                href="https://wa.me/6283861518933?text=Halo%20admin,%20saya%20ingin%20melihat%20demo%20bot%20WhatsApp" 
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block bg-primary/20 hover:bg-primary/30 text-primary font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Lihat Demo Bot <i className="fas fa-external-link-alt ml-2"></i>
              </a>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Link 
              href="/" 
              className="px-6 py-3 bg-primary text-black font-medium flex items-center gap-2 rounded-lg shadow hover:bg-primary/90 transition-colors"
            >
              Kembali ke Dashboard <i className="fas fa-home"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
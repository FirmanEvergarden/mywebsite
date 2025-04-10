import React, { useEffect } from 'react';
import { activatePageAnimations } from '../lib/animationHelper.fixed';

const AuthenticatorSetup: React.FC = () => {
  // Aktifkan animasi saat komponen di-mount
  useEffect(() => {
    activatePageAnimations();
  }, []);
  
  return (
    <section id="authenticator-setup" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center section-content">
            <span className="inline-block px-4 py-1 bg-gray-800 text-primary rounded-full text-sm font-medium mb-4">Tutorial 3</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Mengkoneksikan DigiFlazz ke Google Authenticator</h2>
            <p className="text-lg text-gray-300">Cara menghubungkan akun DigiFlazz dengan Google Authenticator menggunakan kode unik dan cara melihat Production Key (API Key).</p>
          </div>
          
          {/* Steps */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-xl shadow-sm hover:shadow p-6 step-card section-content border border-gray-700">
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold mr-4 mb-4 md:mb-0">
                  1
                </div>
                <div className="w-full">
                  <h3 className="text-xl font-semibold mb-2 text-white">Aktifkan Google Authenticator di DigiFlazz</h3>
                  <p className="text-gray-300 mb-4">Panduan lengkap untuk mengaktifkan Two Factor Authentication (2FA) menggunakan kode unik:</p>
                  
                  {/* Ilustrasi proses setup */}
                  <div className="mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-3">
                        <h4 className="font-medium text-primary">PERTAMA: KEY</h4>
                        <ol className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                          <li>Install Aplikasi Google Authenticator</li>
                          <li>Buka Aplikasi Google Authenticator</li>
                          <li>Klik tombol plus (+) di kanan bawah</li>
                          <li>Pilih "Enter setup key"</li>
                          <li>Masukkan "DigiFlazz" sebagai Account</li>
                          <li>Salin secret key di bawah ini dan masukkan di field "Key"</li>
                        </ol>
                        <div className="bg-gray-800 p-3 rounded flex items-center justify-between">
                          <code className="text-primary font-mono">YKAXV23TVHQ4ZMDGT</code>
                          <button className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-white">
                            Salin
                          </button>
                        </div>
                        <p className="text-xs text-gray-400">*Kode untuk ilustrasi saja, gunakan kode dari akun DigiFlazz Anda</p>
                        <p className="text-sm text-gray-300">
                          • Kode untuk diketahui jika dibutuhkan <br />
                          • Simpan secret key ini dengan aman di DigiFlazz untuk backup <br />
                          • Kode hanya akan ditampilkan satu kali <br />
                          • Tekan tombol "Add" di aplikasi Authenticator
                        </p>
                      </div>
                      
                      <div className="flex flex-col space-y-3">
                        <h4 className="font-medium text-primary">KEDUA: OTP</h4>
                        <ol className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                          <li>Install Aplikasi Google Authenticator</li>
                          <li>Buka Aplikasi Google Authenticator</li>
                          <li>Screenshot/foto gambar QR di bawah ini untuk backup</li>
                          <li>Cari DigiFlazz di daftar</li>
                        </ol>
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                            <svg viewBox="0 0 100 100" width="100" height="100">
                              <rect x="0" y="0" width="100" height="100" fill="#ffffff" />
                              <g fill="#000000">
                                {/* QR code simple pattern */}
                                <rect x="10" y="10" width="20" height="20" />
                                <rect x="70" y="10" width="20" height="20" />
                                <rect x="10" y="70" width="20" height="20" />
                                <rect x="40" y="40" width="20" height="20" />
                                <rect x="40" y="10" width="10" height="10" />
                                <rect x="10" y="40" width="10" height="10" />
                                <rect x="70" y="40" width="10" height="10" />
                                <rect x="40" y="70" width="10" height="10" />
                                <rect x="60" y="60" width="10" height="10" />
                              </g>
                            </svg>
                          </div>
                          <p className="text-xs text-gray-400 mt-2">QR Code (Opsional)</p>
                        </div>
                        
                        <p className="text-sm text-gray-300">
                          • Setelah itu akan keluar nomor acak, silahkan masukkan kode tersebut di kolom "Kode OTP" di bawah ini.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-4">
                    <h4 className="text-lg font-semibold text-white">Langkah-langkah Detail:</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                      <li>Login ke akun DigiFlazz kamu di <a href="https://digiflazz.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://digiflazz.com</a></li>
                      <li>Masuk ke menu Akun &gt; Keamanan</li>
                      <li>Di bagian Two Factor Authentication (2FA), klik tombol Aktifkan</li>
                      <li>Pada halaman pengaturan keamanan, kamu akan melihat 2 opsi: menggunakan QR Code atau menggunakan Secret Key</li>
                      <li>Pilih metode "Enter setup key" di aplikasi Google Authenticator</li>
                      <li>Salin Secret Key yang diberikan DigiFlazz (contoh: YKAXV23TVHQ4ZMDGT)</li>
                      <li>Masukkan nama akun "DigiFlazz" dan paste Secret Key tersebut di aplikasi Google Authenticator</li>
                      <li>Klik Add, dan kamu akan melihat kode 6 digit yang berubah setiap 30 detik</li>
                      <li>Masukkan kode 6 digit tersebut ke form verifikasi DigiFlazz</li>
                      <li>Klik tombol "Lanjut" untuk mengaktifkan 2FA</li>
                    </ol>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gray-700 rounded-lg border border-primary/40">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-medium text-white">Catatan Penting:</p>
                        <ul className="text-gray-300 list-disc pl-5 mt-2 space-y-1">
                          <li>Simpan Secret Key di tempat yang aman sebagai backup</li>
                          <li>Jika kamu kehilangan akses ke Google Authenticator, kamu bisa menggunakan Secret Key untuk menyiapkan ulang</li>
                          <li>Setelah 2FA aktif, setiap login dan akses data sensitif akan memerlukan kode dari Google Authenticator</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-800 text-white rounded-xl shadow-sm p-6 section-content">
              <h3 className="text-xl font-semibold mb-4">Cara Mengambil Production Key (API Key) DigiFlazz</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                    1
                  </div>
                  <div>
                    <p className="text-neutral-100">Login ke Akun DigiFlazz</p>
                    <p className="text-neutral-400 text-sm mt-1">Buka <a href="https://digiflazz.com" target="_blank" rel="noopener noreferrer" className="text-orange-200 hover:underline">https://digiflazz.com</a>, lalu masuk menggunakan email dan password kamu.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                    2
                  </div>
                  <div>
                    <p className="text-neutral-100">Masuk ke Menu API</p>
                    <p className="text-neutral-400 text-sm mt-1">Setelah login, klik menu API dari sidebar kiri atau melalui dashboard.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                    3
                  </div>
                  <div>
                    <p className="text-neutral-100">Klik "Tampilkan Production Key"</p>
                    <p className="text-neutral-400 text-sm mt-1">Kamu akan melihat tombol bertuliskan "Tampilkan Production Key" di bagian API Key. Klik tombol tersebut.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                    4
                  </div>
                  <div>
                    <p className="text-neutral-100">Masukkan OTP dari Google Authenticator</p>
                    <div className="space-y-2 text-neutral-400 text-sm mt-1">
                      <p>Buka aplikasi Google Authenticator di HP kamu.</p>
                      <p>Cari akun DigiFlazz.</p>
                      <p>Ambil 6 digit kode OTP yang muncul.</p>
                      <p>Masukkan kode OTP tersebut di kolom verifikasi pada website DigiFlazz.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                    5
                  </div>
                  <div>
                    <p className="text-neutral-100">Lihat dan Salin Production Key</p>
                    <div className="space-y-2 text-neutral-400 text-sm mt-1">
                      <p>Setelah OTP benar, Production Key akan ditampilkan.</p>
                      <p>Salin key tersebut.</p>
                      <p>Gunakan langsung di kode program kamu.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <a 
              href="/" 
              className="px-6 py-3 bg-primary text-black font-medium flex items-center gap-2 rounded-lg shadow hover:bg-primary/90 transition-colors"
            >
              Kembali ke Dashboard <i className="fas fa-home"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticatorSetup;

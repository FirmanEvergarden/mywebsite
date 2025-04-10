import React, { useEffect } from 'react';
import StepCard from '../components/StepCard';
import { activatePageAnimations } from '../lib/animationHelper.fixed';

const DigiflazzRegistration: React.FC = () => {
  // Aktifkan animasi saat komponen di-mount
  useEffect(() => {
    activatePageAnimations();
  }, []);
  const registrationSteps = [
    {
      number: 1,
      title: 'Kunjungi Website Resmi DigiFlazz',
      content: (
        <p className="text-gray-300 mb-4">
          Buka <a href="https://digiflazz.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://digiflazz.com</a> melalui browser.
        </p>
      )
    },
    {
      number: 2,
      title: 'Klik Tombol "Daftar"',
      content: (
        <p className="text-gray-300 mb-4">Biasanya tombol Daftar berada di pojok kanan atas halaman utama.</p>
      )
    },
    {
      number: 3,
      title: 'Pilih Tipe Akun: Buyer',
      content: (
        <>
          <p className="text-gray-300 mb-4">Pada halaman pendaftaran:</p>
          <div className="p-4 bg-gray-700 rounded-lg mb-4">
            <p className="font-medium">Pilih Tipe Akun: <span className="text-primary">Buyer</span></p>
            <p className="text-gray-300 mt-2 italic">Buyer cocok untuk Anda yang ingin melakukan pembelian produk digital seperti pulsa, paket data, token listrik, dll.</p>
          </div>
        </>
      )
    },
    {
      number: 4,
      title: 'Isi Data Pribadi',
      content: (
        <>
          <p className="text-gray-300 mb-4">Lengkapi informasi berikut:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Nama Lengkap</li>
            <li>Email Aktif</li>
            <li>Nomor HP Aktif</li>
            <li>Password (buat kombinasi kuat)</li>
            <li>Centang Saya menyetujui syarat & ketentuan</li>
            <li>Klik Daftar</li>
          </ul>
        </>
      )
    },
    {
      number: 5,
      title: 'Verifikasi Email',
      content: (
        <p className="text-gray-300 mb-4">Cek email masuk dari DigiFlazz, lalu klik tautan verifikasi untuk mengaktifkan akun Anda.</p>
      )
    },
    {
      number: 6,
      title: 'Login ke Dashboard DigiFlazz',
      content: (
        <p className="text-gray-300 mb-4">
          Setelah verifikasi, login ke <a href="https://digiflazz.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://digiflazz.com</a> menggunakan email dan password yang didaftarkan.
        </p>
      )
    },
    {
      number: 7,
      title: 'Lengkapi Data Perusahaan',
      content: (
        <>
          <p className="text-gray-300 mb-4">Masuk ke menu Akun &gt; Profil &gt; Perusahaan, isi data berikut:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Nama Perusahaan: (isi sesuai nama usaha kamu)</li>
            <li>Alamat Lengkap: (alamat usaha)</li>
            <li>Nama Pemilik/Perwakilan: (namamu)</li>
            <li>Nomor HP Perusahaan</li>
            <li>Email Perusahaan</li>
          </ul>
        </>
      )
    },
    {
      number: 8,
      title: 'Pilih Software > Software Lain > NodeJS',
      content: (
        <>
          <p className="text-gray-300 mb-4">Masih di halaman profil:</p>
          <ol className="list-decimal pl-5 space-y-2 text-gray-300">
            <li>Klik menu Software atau API</li>
            <li>Pilih Software Lain</li>
            <li>Ketik atau pilih NodeJS (menandakan kamu akan menggunakan NodeJS untuk mengakses API DigiFlazz)</li>
          </ol>
        </>
      )
    },
    {
      number: 9,
      title: 'Simpan Perubahan',
      content: (
        <p className="text-gray-300">Setelah semua data diisi, klik Simpan atau Update Profil.</p>
      )
    }
  ];

  return (
    <section id="digiflazz-registration" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto section-content">
          <div className="mb-12 text-center">
            <span className="inline-block px-4 py-1 bg-amber-900/40 text-primary rounded-full text-sm font-medium mb-4">Tutorial 1</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Mendaftar DigiFlazz sebagai Buyer</h2>
            <p className="text-lg text-gray-300">Panduan langkah demi langkah untuk mendaftar dan mengatur akun DigiFlazz Anda, termasuk pengisian data perusahaan.</p>
            
            {/* Ilustrasi DigiFlazz */}
            <div className="mt-8 bg-gray-800 rounded-xl p-6 border border-gray-700 max-w-lg mx-auto">
              <div className="w-full h-12 bg-primary/90 rounded-lg flex items-center justify-center mb-4">
                <div className="text-black font-bold text-xl">DigiFlazz</div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-gray-700 rounded-lg p-3 text-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                    </svg>
                  </div>
                  <div className="text-xs text-white">Pulsa</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 text-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  <div className="text-xs text-white">Paket Data</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 text-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div className="text-xs text-white">Token PLN</div>
                </div>
              </div>
              <div className="p-3 bg-gray-700 rounded-lg flex items-center justify-between">
                <div className="text-sm text-white">Saldo: <span className="text-primary font-medium">Rp 0</span></div>
                <button className="px-3 py-1 bg-primary text-black text-xs rounded-md hover:bg-primary/90 transition-colors">
                  Deposit
                </button>
              </div>
            </div>
          </div>
          
          {/* Steps */}
          <div className="space-y-8">
            {registrationSteps.map((step, index) => (
              <StepCard
                key={index}
                number={step.number}
                title={step.title}
                className={index % 2 === 0 ? "transform-gpu" : ""}
              >
                {step.content}
              </StepCard>
            ))}
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

export default DigiflazzRegistration;

import React, { useEffect } from 'react';
import StepCard from '../components/StepCard';
import CodeBlock from '../components/CodeBlock';
import { activatePageAnimations } from '../lib/animationHelper.fixed';

const MongoDbSetup: React.FC = () => {
  // Aktifkan animasi saat komponen di-mount
  useEffect(() => {
    activatePageAnimations();
  }, []);
  const mongoDBSteps = [
    {
      number: 1,
      title: 'Kunjungi Situs MongoDB',
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            Buka <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.mongodb.com</a><br />
            Klik tombol Sign Up di pojok kanan atas.
          </p>
          <div className="rounded-lg bg-gray-700 p-4 flex items-center justify-center">
            <svg className="w-full h-auto" viewBox="0 0 800 300">
              <rect width="100%" height="100%" rx="10" ry="10" fill="#f3f4f6" />
              <rect x="20" y="20" width="200" height="40" rx="5" ry="5" fill="#116149" />
              <rect x="660" y="20" width="120" height="40" rx="20" ry="20" fill="#00ed64" />
              <text x="700" y="45" fontFamily="Arial" fontSize="18" textAnchor="middle" fill="#000">Sign Up</text>
              <rect x="20" y="100" width="760" height="180" rx="5" ry="5" fill="#ffffff" />
              <circle cx="120" cy="140" r="50" fill="#13aa52" />
              <path d="M120 100 L120 180" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
              <path d="M120 180 L100 160" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
              <rect x="220" y="120" width="500" height="20" rx="5" ry="5" fill="#e0e0e0" />
              <rect x="220" y="160" width="400" height="20" rx="5" ry="5" fill="#e0e0e0" />
              <rect x="220" y="200" width="300" height="40" rx="5" ry="5" fill="#00ed64" />
              <text x="350" y="225" fontFamily="Arial" fontSize="18" textAnchor="middle" fill="#000">Get Started Free</text>
            </svg>
          </div>
        </div>
      )
    },
    {
      number: 2,
      title: 'Daftar Akun MongoDB',
      content: (
        <>
          <p className="text-gray-300 mb-4">Isi formulir pendaftaran:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Nama Lengkap</li>
            <li>Email Aktif</li>
            <li>Password</li>
            <li>Klik Sign Up</li>
          </ul>
          <p className="text-gray-300 mt-4">Atau daftar dengan akun Google/GitHub jika lebih praktis.</p>
        </>
      )
    },
    {
      number: 3,
      title: 'Verifikasi Email',
      content: (
        <p className="text-gray-300">Cek email masuk dari MongoDB dan klik tautan verifikasi.</p>
      )
    },
    {
      number: 4,
      title: 'Buat Project Baru',
      content: (
        <>
          <p className="text-gray-300 mb-4">Setelah login:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Klik New Project</li>
            <li>Beri nama project (misalnya: BotWhatsApp)</li>
            <li>Klik Next</li>
          </ul>
        </>
      )
    },
    {
      number: 5,
      title: 'Buat Cluster Gratis',
      content: (
        <>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li>Pilih Shared Cluster (Free)</li>
            <li>Lokasi server: Pilih region terdekat (misal: Singapore)</li>
            <li>Klik Create Cluster</li>
          </ul>
          <p className="text-gray-300 mt-4">Tunggu beberapa menit sampai cluster aktif.</p>
        </>
      )
    },
    {
      number: 6,
      title: 'Buat Username Database',
      content: (
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Masuk ke Database Access (menu kiri)</li>
          <li>Klik Add New Database User</li>
          <li>Username: bebas (misal: botuser)</li>
          <li>Password: bebas, simpan dengan baik</li>
          <li>Role: pilih Read and Write to Any Database</li>
          <li>Klik Add User</li>
        </ul>
      )
    },
    {
      number: 7,
      title: 'Izinkan IP Akses',
      content: (
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Masuk ke Network Access</li>
          <li>Klik Add IP Address</li>
          <li>Pilih Allow Access from Anywhere (0.0.0.0/0)</li>
          <li>Klik Confirm</li>
        </ul>
      )
    },
    {
      number: 8,
      title: 'Ambil Connection String (URI)',
      content: (
        <>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li>Masuk ke Database &gt; Connect &gt; Drivers</li>
            <li>Pilih Node.js</li>
            <li>Salin Connection URI seperti ini:</li>
          </ul>
          <CodeBlock>
            mongodb+srv://&lt;username&gt;:&lt;password&gt;@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
          </CodeBlock>
          <p className="text-gray-300 mt-4">Ganti &lt;username&gt; dan &lt;password&gt; dengan yang tadi kamu buat.</p>
        </>
      )
    }
  ];

  return (
    <section id="mongodb-setup" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-block px-4 py-1 bg-amber-900/40 text-primary rounded-full text-sm font-medium mb-4">Tutorial 2</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Membuat Akun MongoDB</h2>
            <p className="text-lg text-gray-300">Tutorial lengkap membuat akun MongoDB dan mengatur koneksi dengan NodeJS (MongoDB Driver).</p>
            
            {/* Ilustrasi MongoDB */}
            <div className="mt-8 flex flex-col md:flex-row gap-6 items-center justify-center">
              {/* MongoDB Logo dan Dashboard */}
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 w-full max-w-xs section-content">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-[#13AA52] rounded-lg p-3 flex items-center justify-center">
                    <svg viewBox="0 0 32 32" className="w-10 h-10 text-white" fill="currentColor">
                      <path d="M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244C16.057 24.21 15.796.086 15.9.087z"></path>
                      <path d="M15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.664-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614L15.9.034z"></path>
                      <path d="M16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453-.105-.174-.192-.383-.26-.575-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75-.017.174-.052.348-.087.523-.07.383-.157.732-.28 1.094-.105.28-.192.558-.21.854-.016.14-.087.244-.105.383 0 .104.175.436.28.523.056.043.155.096.18.265.086.14.105.28.87.436-.035.104-.1.174-.21.21-.122.07-.227.14-.21.315.017.96.052.19.1.28a1.17 1.17 0 0 0 .33.376.656.656 0 0 0 .41.174c.4 0 .558-.302.662-.642l.14-.68c.043-.21.087-.42.156-.628.07-.14.106-.28.122-.43z"></path>
                    </svg>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-white">MongoDB Atlas</h4>
                  <p className="text-gray-400 text-sm">Cloud Database Service</p>
                </div>
                <div className="space-y-2">
                  <div className="bg-gray-700 p-2 rounded-md text-gray-300 text-xs flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span>Cluster0 (Active)</span>
                  </div>
                  <div className="bg-gray-700 p-2 rounded-md text-gray-300 text-xs">
                    Connection String:
                    <div className="mt-1 bg-gray-800 p-1 rounded font-mono text-[10px] text-primary break-all">
                      mongodb+srv://user:******@cluster0.xxx.mongodb.net
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Steps */}
          <div className="space-y-8">
            {mongoDBSteps.map((step, index) => (
              <StepCard
                key={index}
                number={step.number}
                title={step.title}
                className=""
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

export default MongoDbSetup;

import { useEffect } from "react";
import { activatePageAnimations } from "@/lib/animationHelper";

const ConnectBot = () => {
  // Mengaktifkan animasi saat komponen di-mount
  useEffect(() => {
    activatePageAnimations();
  }, []);

  return (
    <section className="py-12 md:py-16 bg-gray-900 min-h-screen">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Cara Menghubungkan Bot ke WhatsApp</h1>
            <p className="text-gray-400">Panduan langkah demi langkah untuk menghubungkan bot WhatsApp ke perangkat Anda.</p>
          </div>

          {/* Langkah-langkah tutorial */}
          <div className="space-y-8">
            {/* Langkah 1 */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold mr-4">1</div>
                <h4 className="text-xl font-semibold text-white">Masukkan Nomor WhatsApp</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Setelah script dijalankan, akan muncul pesan: <span className="text-primary">"Silahkan masukkan nomor anda:"</span> 
                Masukkan nomor WhatsApp kamu yang ingin dijadikan bot. Gunakan kode negara di awal nomor. Contoh: 628xxxxxxx (jangan pakai 08xxx).
              </p>

              <div className="rounded-lg border border-gray-600 overflow-hidden">
                <div className="bg-gray-700 p-2 text-gray-200 flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm">Console - Pterodactyl</span>
                </div>
                <div className="bg-gray-800 p-4">
                  <div className="text-gray-300 font-mono">
                    <p>{`> Starting Bot`}</p>
                    <p>{`> Using WhatsApp API v2.2346.52`}</p>
                    <p>{`> Connecting service...`}</p>
                    <p className="text-white mt-3">Silahkan masukkan nomor anda:</p>
                    <div className="mt-1 flex items-center">
                      <span className="text-primary mr-1">{`>`}</span>
                      <span className="text-white">628123456789</span>
                      <span className="h-4 w-1 bg-primary animate-blink ml-1"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Langkah 2 */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold mr-4">2</div>
                <h4 className="text-xl font-semibold text-white">Catat Kode Pemasangan</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Tunggu beberapa saat, lalu akan muncul tulisan: <span className="text-primary">"Kode Pemasangan: xxx - xxx"</span> 
                Catat atau salin kode ini untuk digunakan pada langkah berikutnya.
              </p>

              <div className="rounded-lg border border-gray-600 overflow-hidden">
                <div className="bg-gray-700 p-2 text-gray-200 flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm">Console - Pterodactyl</span>
                </div>
                <div className="bg-gray-800 p-4">
                  <div className="text-gray-300 font-mono">
                    <p>{`> Starting Bot`}</p>
                    <p>{`> Using WhatsApp API v2.2346.52`}</p>
                    <p>{`> Connecting service...`}</p>
                    <p>{`> Nomor anda: 628123456789`}</p>
                    <p>{`> Generating pairing code...`}</p>
                    <div className="mt-3 p-3 bg-primary/10 border border-primary/30 rounded-md flex flex-col items-center">
                      <p className="text-white font-semibold">Kode Pemasangan:</p>
                      <p className="text-primary text-2xl font-bold mt-1">123-456</p>
                    </div>
                    <p className="mt-3 text-yellow-400">Masukkan kode ini di aplikasi WhatsApp Anda.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Langkah 3 */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold mr-4">3</div>
                <h4 className="text-xl font-semibold text-white">Tautkan Perangkat WhatsApp</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Buka aplikasi WhatsApp di HP kamu. Ketuk ikon titik tiga di kanan atas, lalu pilih "Perangkat Tertaut".
              </p>

              <div className="rounded-lg border border-gray-600 overflow-hidden">
                <div className="bg-gray-700 p-2 text-gray-200 flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm">WhatsApp - Mobile App</span>
                </div>
                <div className="bg-gray-800 p-4">
                  <div className="max-w-xs mx-auto bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
                    {/* Header WhatsApp */}
                    <div className="bg-gray-800 p-3 flex justify-between items-center">
                      <div className="text-white font-medium">WhatsApp</div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-gray-300 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                      </div>
                    </div>
                    
                    {/* Dropdown menu */}
                    <div className="bg-gray-700 p-2 rounded-md shadow-lg ml-auto mr-2 w-48">
                      <div className="text-white p-2 hover:bg-gray-600 rounded">Grup baru</div>
                      <div className="text-white p-2 hover:bg-gray-600 rounded">Siaran baru</div>
                      <div className="text-white p-2 hover:bg-gray-600 rounded bg-primary/10 border-l-2 border-primary">Perangkat tertaut</div>
                      <div className="text-white p-2 hover:bg-gray-600 rounded">Pesan berbintang</div>
                      <div className="text-white p-2 hover:bg-gray-600 rounded">Setelan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Langkah 4 */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold mr-4">4</div>
                <h4 className="text-xl font-semibold text-white">Masukkan Kode Pemasangan</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Tekan tombol "Tautkan perangkat", lalu pilih "Tautkan dengan nomor telepon". Masukkan kode pemasangan yang muncul di console tadi.
              </p>

              <div className="rounded-lg border border-gray-600 overflow-hidden">
                <div className="bg-gray-700 p-2 text-gray-200 flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm">WhatsApp - Mobile App</span>
                </div>
                <div className="bg-gray-800 p-4">
                  <div className="max-w-xs mx-auto bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
                    {/* Header WhatsApp */}
                    <div className="bg-gray-800 p-3 flex justify-between items-center">
                      <div className="text-white font-medium">Tautkan dengan nomor telepon</div>
                    </div>
                    
                    {/* Input kode */}
                    <div className="p-4">
                      <div className="text-white text-sm mb-3">Masukkan kode pemasangan 8 digit</div>
                      
                      <div className="grid grid-cols-6 gap-2 mb-5">
                        <div className="col-span-1 h-10 bg-gray-800 border border-primary rounded-md flex items-center justify-center text-white">1</div>
                        <div className="col-span-1 h-10 bg-gray-800 border border-primary rounded-md flex items-center justify-center text-white">2</div>
                        <div className="col-span-1 h-10 bg-gray-800 border border-primary rounded-md flex items-center justify-center text-white">3</div>
                        <div className="col-span-1 h-10 bg-gray-800 border border-gray-600 rounded-md flex items-center justify-center text-white">-</div>
                        <div className="col-span-1 h-10 bg-gray-800 border border-primary rounded-md flex items-center justify-center text-white">4</div>
                        <div className="col-span-1 h-10 bg-gray-800 border border-primary rounded-md flex items-center justify-center text-white">5</div>
                      </div>
                      
                      <div className="h-9 w-full bg-primary rounded-md flex items-center justify-center text-black font-medium">
                        Tautkan
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Langkah 5 */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold mr-4">5</div>
                <h4 className="text-xl font-semibold text-white">Tunggu Bot Terhubung</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Tunggu proses koneksi, dan bot akan langsung terhubung ke WhatsApp kamu.
              </p>

              <div className="rounded-lg border border-gray-600 overflow-hidden">
                <div className="bg-gray-700 p-2 text-gray-200 flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm">Console - Pterodactyl</span>
                </div>
                <div className="bg-gray-800 p-4">
                  <div className="text-gray-300 font-mono">
                    <p>{`> Starting Bot`}</p>
                    <p>{`> Using WhatsApp API v2.2346.52`}</p>
                    <p>{`> Connecting service...`}</p>
                    <p>{`> Nomor anda: 628123456789`}</p>
                    <p>{`> Generating pairing code: 123-456`}</p>
                    <p>{`> Menunggu pengguna memasukkan kode...`}</p>
                    <p>{`> Perangkat terhubung!`}</p>
                    <p className="text-green-400 font-bold">{`> Bot WhatsApp berhasil dijalankan!`}</p>
                    <p>{`> Status: Online`}</p>
                    <p>{`> Menunggu perintah...`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <a 
              href="/" 
              className="px-6 py-3 bg-primary text-white flex items-center gap-2 rounded-lg shadow hover:bg-primary/90 transition-colors"
            >
              Kembali ke Dashboard <i className="fas fa-home"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectBot;
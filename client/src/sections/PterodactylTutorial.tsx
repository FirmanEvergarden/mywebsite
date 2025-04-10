import React from 'react';
import CodeBlock from '../components/CodeBlock';

const PterodactylTutorial: React.FC = () => {
  return (
    <section id="pterodactyl-tutorial" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-block px-4 py-1 bg-gray-800 text-primary rounded-full text-sm font-medium mb-4">Tutorial 5</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Cara Menggunakan Script di Server Pterodactyl</h2>
            <p className="text-lg text-gray-300">Panduan lengkap mengupload dan menjalankan script WhatsApp Bot pada server Pterodactyl untuk pemula</p>
          </div>
          
          {/* Content */}
          <div className="bg-gray-800 rounded-xl shadow-sm p-8 section-content border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 text-white">Panduan Step-by-Step Menjalankan Script di Server Pterodactyl</h3>
            <p className="text-gray-300 mb-6">Petunjuk lengkap cara mengupload dan menjalankan script WhatsApp Bot pada server Pterodactyl yang sudah kamu beli.</p>
            
            <div className="space-y-10">
              {/* Langkah 1 */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold mr-4">1</div>
                  <h4 className="text-xl font-semibold text-white">Login ke akun Server atau Panel yang sudah kamu beli</h4>
                </div>
                <p className="text-gray-300 mb-4">Buka link panel Pterodactyl yang diberikan oleh penyedia server, lalu masukkan username dan password yang sudah diberikan.</p>
                
                <div className="rounded-lg border border-gray-600 overflow-hidden">
                  <div className="bg-gray-800 p-4 text-gray-200">
                    <div className="mx-auto max-w-sm bg-gray-900 rounded-lg p-5 border border-gray-700">
                      <div className="text-center mb-6">
                        <h2 className="text-white text-xl font-semibold mb-2">Login to Continue</h2>
                        <div className="mx-auto w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                          <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label className="block text-gray-400 text-sm font-medium mb-2">
                          USERNAME OR EMAIL
                        </label>
                        <input type="text" className="w-full h-10 px-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:border-primary focus:outline-none" />
                      </div>
                      
                      <div className="mb-6">
                        <label className="block text-gray-400 text-sm font-medium mb-2">
                          PASSWORD
                        </label>
                        <input type="password" className="w-full h-10 px-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:border-primary focus:outline-none" />
                      </div>
                      
                      <button className="w-full h-10 bg-primary hover:bg-primary/90 text-black font-medium rounded-md transition-colors">
                        LOGIN
                      </button>
                      
                      <div className="text-center mt-4">
                        <a href="#" className="text-sm text-gray-400 hover:text-primary">Forgot Password?</a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-gray-700 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-gray-200"><span className="font-semibold text-yellow-400">Tip:</span> Pastikan menyimpan informasi login dengan aman dan jangan bagikan dengan orang lain.</p>
                </div>
              </div>
              
              {/* Langkah 2 */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold mr-4">2</div>
                  <h4 className="text-xl font-semibold text-white">Pilih server yang tersedia</h4>
                </div>
                <p className="text-gray-300 mb-4">Setelah login, kamu akan melihat daftar server yang tersedia. Klik pada server yang ingin kamu gunakan, misalnya "Js Firman".</p>
                
                <div className="rounded-lg border border-gray-600 overflow-hidden">
                  <div className="bg-gray-700 p-2 text-gray-200 flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm">Server List - Pterodactyl</span>
                  </div>
                  <div className="bg-gray-800 p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-4 h-4 bg-primary rounded-sm mr-2"></div>
                      <div className="text-white">Servers</div>
                    </div>
                    
                    <div className="space-y-3 mt-4">
                      <div className="bg-gray-700 p-3 rounded-md hover:bg-gray-600 transition-colors flex items-center">
                        <div className="w-8 h-8 bg-gray-600 rounded-md flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
                        </div>
                        <div className="flex-grow">
                          <div className="text-gray-300">Server 1</div>
                          <div className="text-xs text-gray-500">Node: Jakarta 1</div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-green-500 flex-shrink-0"></div>
                      </div>
                      
                      <div className="bg-primary/10 p-3 rounded-md border border-primary/30 flex items-center">
                        <div className="w-8 h-8 bg-primary/30 rounded-md flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
                        </div>
                        <div className="flex-grow">
                          <div className="text-white font-medium">Js Firman</div>
                          <div className="text-xs text-gray-400">Node: Singapore 1 • Online</div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-green-500 flex-shrink-0"></div>
                      </div>
                      
                      <div className="bg-gray-700 p-3 rounded-md hover:bg-gray-600 transition-colors flex items-center">
                        <div className="w-8 h-8 bg-gray-600 rounded-md flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
                        </div>
                        <div className="flex-grow">
                          <div className="text-gray-300">Server 3</div>
                          <div className="text-xs text-gray-500">Node: Jakarta 2</div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-green-500 flex-shrink-0"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Langkah 3 */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold mr-4">3</div>
                  <h4 className="text-xl font-semibold text-white">Upload file script ke server</h4>
                </div>
                <p className="text-gray-300 mb-4">Masuk ke menu "File", lalu upload file script bot yang sudah kamu punya (biasanya dalam format .zip).</p>
                
                <div className="rounded-lg border border-gray-600 overflow-hidden">
                  <div className="bg-gray-700 p-2 text-gray-200 flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm">File Manager - Pterodactyl</span>
                  </div>
                  <div className="bg-gray-800 p-4">
                    <div className="flex mb-4">
                      <div className="bg-gray-700 px-3 py-2 rounded-lg mr-2 text-white text-sm border-b-2 border-primary">File</div>
                      <div className="bg-gray-700/50 px-3 py-2 rounded-lg mr-2 text-gray-400 text-sm">Console</div>
                      <div className="bg-gray-700/50 px-3 py-2 rounded-lg mr-2 text-gray-400 text-sm">Settings</div>
                    </div>
                    
                    <div className="flex mb-4">
                      <div className="flex">
                        <div className="bg-primary hover:bg-primary/90 text-black font-medium px-3 py-1 rounded-md mr-2 text-sm flex items-center transition-colors">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                          Upload
                        </div>
                        <div className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm flex items-center transition-colors">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                          New
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg p-3 border border-gray-700">
                      {/* Tampilan kecil hanya menampilkan nama file */}
                      <div className="block sm:hidden">
                        <div className="py-2 border-b border-gray-700">
                          <div className="text-gray-400 text-sm font-medium">File ditemukan:</div>
                        </div>
                        
                        <div className="p-2 hover:bg-gray-800 text-white">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            <span>node_modules</span>
                          </div>
                        </div>
                        
                        <div className="p-2 hover:bg-gray-800 text-white">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            <span>package.json</span>
                          </div>
                        </div>
                        
                        <div className="p-2 bg-primary/10 border-l-2 border-primary">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <svg className="w-5 h-5 mr-2 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                              <span>bot-script.zip</span>
                            </div>
                            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                          </div>
                          <div className="flex mt-1 text-xs text-gray-300">
                            <span className="mr-2">5.7 MB</span>
                            <span>Just now</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Tampilan besar dengan tabel lengkap */}
                      <div className="hidden sm:block">
                        <div className="flex items-center justify-between p-2 border-b border-gray-700">
                          <div className="w-1/2 text-gray-400 text-sm">Name</div>
                          <div className="w-1/6 text-gray-400 text-sm">Size</div>
                          <div className="w-1/4 text-gray-400 text-sm">Modified</div>
                          <div className="w-1/12 text-gray-400 text-sm"></div>
                        </div>
                        
                        <div className="flex items-center justify-between p-2 hover:bg-gray-800 text-white">
                          <div className="w-1/2 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            <span>node_modules</span>
                          </div>
                          <div className="w-1/6 text-sm text-gray-300">dir</div>
                          <div className="w-1/4 text-sm text-gray-300">Aug 15, 2023</div>
                          <div className="w-1/12"></div>
                        </div>
                        
                        <div className="flex items-center justify-between p-2 hover:bg-gray-800 text-white">
                          <div className="w-1/2 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            <span>package.json</span>
                          </div>
                          <div className="w-1/6 text-sm text-gray-300">1.2 KB</div>
                          <div className="w-1/4 text-sm text-gray-300">Aug 15, 2023</div>
                          <div className="w-1/12"></div>
                        </div>
                        
                        <div className="flex items-center justify-between p-2 hover:bg-gray-800 text-white bg-primary/10 border-l-2 border-primary">
                          <div className="w-1/2 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                            <span>bot-script.zip</span>
                          </div>
                          <div className="w-1/6 text-sm text-gray-300">5.7 MB</div>
                          <div className="w-1/4 text-sm text-gray-300">Just now</div>
                          <div className="w-1/12 flex justify-end">
                            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Langkah 4 */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold mr-4">4</div>
                  <h4 className="text-xl font-semibold text-white">Ekstrak file yang sudah diupload</h4>
                </div>
                <p className="text-gray-300 mb-4">Tunggu sampai file selesai terupload. Setelah itu, klik titik tiga di samping nama file, lalu pilih "Unarchive" (ekstrak file).</p>
                
                <div className="rounded-lg border border-gray-600 overflow-hidden">
                  <div className="bg-gray-700 p-2 text-gray-200 flex items-center">
                    <div className="flex space-x-2 mr-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm">File Actions - Pterodactyl</span>
                  </div>
                  <div className="bg-gray-800 p-4">
                    {/* File item */}
                    <div className="bg-gray-900 rounded-lg p-3 border border-gray-700 mb-4">
                      <div className="flex flex-wrap items-center p-2 hover:bg-gray-800 text-white">
                        <div className="flex items-center w-full sm:w-1/2 mb-2 sm:mb-0">
                          <svg className="w-5 h-5 mr-2 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                          <span>bot-script.zip</span>
                        </div>
                        <div className="flex items-center justify-between w-full sm:w-1/2">
                          <div className="flex space-x-4">
                            <span className="text-sm text-gray-300">5.7 MB</span>
                            <span className="text-sm text-gray-300">Just now</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Menu */}
                    <div className="mx-auto max-w-xs bg-gray-700 rounded-md shadow-lg p-2 border border-gray-600 z-10">
                      <div className="text-white py-1 px-2 hover:bg-gray-600 rounded-md text-sm flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                        Rename
                      </div>
                      <div className="text-white py-1 px-2 hover:bg-gray-600 rounded-md text-sm flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
                        Copy
                      </div>
                      <div className="text-white py-1 px-2 hover:bg-gray-600 rounded-md text-sm flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        Delete
                      </div>
                      <div className="bg-primary/20 text-primary py-1 px-2 hover:bg-primary/30 rounded-md text-sm flex items-center font-medium">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        Unarchive
                      </div>
                    </div>
                    
                    <div className="mt-4 w-full h-16 bg-primary/10 rounded-lg border border-primary/30 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2"></div>
                      <span className="text-primary">Mengekstrak file...</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-gray-700 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-gray-200"><span className="font-semibold text-yellow-400">Catatan:</span> Proses ekstraksi ini bisa memakan waktu beberapa saat tergantung dari ukuran file. Bersabarlah dan jangan refresh halaman.</p>
                </div>
              </div>
              
              {/* Langkah 5 */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold mr-4">5</div>
                  <h4 className="text-xl font-semibold text-white">Atur Startup Command</h4>
                </div>
                <p className="text-gray-300 mb-4">Geser ke menu "Startup", lalu scroll ke bawah dan pastikan tulisan di Startup Command adalah "npm start". Kalau belum sesuai, cukup hapus tulisan lama dan ganti jadi npm start.</p>
                
                <div className="rounded-lg border border-gray-600 overflow-hidden">
                  <div className="bg-gray-700 p-2 text-gray-200 flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm">Startup Configuration - Pterodactyl</span>
                  </div>
                  <div className="bg-gray-800 p-4">
                    <div className="flex mb-4">
                      <div className="bg-gray-700/50 px-3 py-2 rounded-lg mr-2 text-gray-400 text-sm">File</div>
                      <div className="bg-gray-700/50 px-3 py-2 rounded-lg mr-2 text-gray-400 text-sm">Console</div>
                      <div className="bg-gray-700 px-3 py-2 rounded-lg mr-2 text-white text-sm border-b-2 border-primary">Startup</div>
                      <div className="bg-gray-700/50 px-3 py-2 rounded-lg mr-2 text-gray-400 text-sm">Settings</div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                      <h5 className="text-lg font-medium text-white mb-2">Startup Command</h5>
                      <p className="text-gray-400 text-sm mb-4">The following startup command will be used to start your server.</p>
                      
                      <div className="border border-gray-700 rounded-md bg-gray-800 p-3 flex items-center">
                        <input 
                          type="text" 
                          readOnly
                          value="npm start" 
                          className="w-full bg-transparent text-primary font-mono outline-none" 
                        />
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                      </div>
                      
                      <div className="mt-6 flex justify-end">
                        <button className="bg-primary text-gray-900 font-medium px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-gray-700 rounded-lg border-l-4 border-primary">
                  <p className="text-gray-200"><span className="font-semibold text-primary">Penting:</span> Pastikan perintah startup adalah <code className="bg-gray-800 px-2 py-0.5 rounded text-primary">npm start</code>, ini penting untuk memastikan script kamu bisa berjalan dengan benar.</p>
                </div>
              </div>
              
              {/* Langkah 6 */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold mr-4">6</div>
                  <h4 className="text-xl font-semibold text-white">Jalankan Script</h4>
                </div>
                <p className="text-gray-300 mb-4">Terakhir, buka menu Console, klik tombol Start, dan tunggu sampai proses install selesai. Setelah itu, script sudah siap digunakan!</p>
                
                <div className="rounded-lg border border-gray-600 overflow-hidden">
                  <div className="bg-gray-700 p-2 text-gray-200 flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm">Console - Pterodactyl</span>
                  </div>
                  <div className="bg-gray-900 p-4">
                    <div className="flex mb-4">
                      <div className="bg-gray-800/50 px-3 py-2 rounded-lg mr-2 text-gray-400 text-sm">File</div>
                      <div className="bg-gray-800 px-3 py-2 rounded-lg mr-2 text-white text-sm border-b-2 border-primary">Console</div>
                      <div className="bg-gray-800/50 px-3 py-2 rounded-lg mr-2 text-gray-400 text-sm">Startup</div>
                      <div className="bg-gray-800/50 px-3 py-2 rounded-lg mr-2 text-gray-400 text-sm">Settings</div>
                    </div>
                    
                    <div className="mb-3 flex">
                      <button className="bg-green-600 text-white font-medium px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center mr-2">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Start
                      </button>
                      <button className="bg-gray-700 text-white font-medium px-4 py-2 rounded-md hover:bg-gray-600 transition-colors flex items-center mr-2" disabled>
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"></path></svg>
                        Stop
                      </button>
                      <button className="bg-gray-700 text-white font-medium px-4 py-2 rounded-md hover:bg-gray-600 transition-colors flex items-center" disabled>
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                        Restart
                      </button>
                    </div>
                    
                    <div className="bg-black rounded-lg p-3 h-64 font-mono text-sm overflow-y-auto">
                      <div className="text-gray-400">$ npm start</div>
                      <div className="text-green-400 mt-1">{'> bot-whatsapp@1.0.0 start'}</div>
                      <div className="text-green-400">{'> node index.js'}</div>
                      <div className="text-white mt-3">[INFO] Menginstall dependensi...</div>
                      <div className="text-white">added 856 packages, and audited 857 packages in 15s</div>
                      <div className="text-white">195 packages are looking for funding</div>
                      <div className="text-blue-400 mt-2">[BOT] Initializing WhatsApp connection...</div>
                      <div className="text-blue-400">[BOT] Bot siap, silahkan scan QR Code</div>
                      <div className="text-primary mt-1">[QR] QR Code telah digenerate</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
                  <p className="text-gray-200"><span className="font-semibold text-green-400">Selamat!</span> Script bot WhatsApp kamu sekarang sudah berhasil dijalankan. Untuk menggunakan bot, kamu perlu menscan QR Code yang muncul di console dengan WhatsApp di HP kamu.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <a 
              href="/connect-bot" 
              className="px-6 py-3 bg-primary text-white flex items-center gap-2 rounded-lg shadow hover:bg-primary/90 transition-colors"
            >
              Cara Menghubungkan Bot <i className="fas fa-link"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PterodactylTutorial };
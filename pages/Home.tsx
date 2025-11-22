import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Star, Zap, Award, Brain } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pb-12">
      {/* Hero Section */}
      <div className="relative bg-amber-400 overflow-hidden rounded-b-[3rem] shadow-xl">
        <div className="absolute inset-0 bg-batik-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-amber-900 sm:text-5xl md:text-6xl">
              <span className="block">Sugeng Rawuh wonten</span>
              <span className="block text-white drop-shadow-md mt-2">Sinau Aksara Jawa</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-amber-800 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl font-medium">
              Mari belajar warisan budaya leluhur dengan cara yang menyenangkan, modern, dan interaktif!
            </p>
            <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
              <div className="rounded-md shadow">
                <Link
                  to="/nglegena"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-amber-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 shadow-lg transform hover:scale-105 transition-transform"
                >
                  Mulai Belajar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Pilih Menu Belajar
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Menu 1 */}
          <Link to="/nglegena" className="group">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100 hover:border-blue-400 transition-all h-full flex flex-col items-center text-center group-hover:shadow-2xl">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aksara Nglegena</h3>
              <p className="text-gray-600">Pelajari 20 huruf dasar aksara Jawa lengkap dengan cara bacanya.</p>
            </div>
          </Link>

          {/* Menu 2 */}
          <Link to="/pasangan" className="group">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100 hover:border-green-400 transition-all h-full flex flex-col items-center text-center group-hover:shadow-2xl">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pasangan</h3>
              <p className="text-gray-600">Belajar mematikan vokal dengan pasangan aksara.</p>
            </div>
          </Link>

          {/* Menu 3 */}
          <Link to="/sandhangan" className="group">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100 hover:border-purple-400 transition-all h-full flex flex-col items-center text-center group-hover:shadow-2xl">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sandhangan</h3>
              <p className="text-gray-600">Tanda bunyi vokal dan tanda mati lainnya.</p>
            </div>
          </Link>

           {/* Menu 4 - AI */}
           <Link to="/contoh-ai" className="group">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-100 hover:border-red-400 transition-all h-full flex flex-col items-center text-center group-hover:shadow-2xl">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Brain size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contoh Kata AI</h3>
              <p className="text-gray-600">Generator kata otomatis menggunakan kecerdasan buatan.</p>
            </div>
          </Link>

          {/* Menu 5 - Game */}
          <Link to="/kuis-ai" className="group lg:col-span-2">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 shadow-lg border-2 border-orange-300 hover:border-orange-600 transition-all h-full flex flex-row items-center justify-between group-hover:shadow-2xl text-white">
              <div className="flex-1 pr-4">
                <h3 className="text-2xl font-bold mb-2">Kuis Interaktif</h3>
                <p className="text-orange-100">Uji kemampuanmu dengan soal-soal yang dibuat otomatis oleh AI! Kumpulkan skor tertinggi.</p>
              </div>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm">
                <Award size={40} className="text-white" />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Home;
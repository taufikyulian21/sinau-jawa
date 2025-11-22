import React from 'react';
import { User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-amber-500">
        <div className="bg-amber-50 p-8 text-center">
          <div className="w-24 h-24 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
            <User size={48} className="text-amber-700" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Tentang Pembuat</h2>
        </div>
        
        <div className="p-8 text-center space-y-6">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Nama Pembuat</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">Guruh Saputra</p>
          </div>
          
          <div>
             <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Status</p>
            <p className="text-xl text-gray-800 mt-1">Siswa Kelas 6</p>
          </div>

          <div>
             <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Sekolah</p>
            <p className="text-xl text-gray-800 mt-1">SD Negeri Batur 01</p>
            <p className="text-lg text-gray-600">Kecamatan Getasan</p>
          </div>

          <div className="pt-8 border-t border-gray-100 mt-8">
            <p className="text-gray-500 italic">
              "Aplikasi ini dibuat untuk membantu teman-teman melestarikan budaya Jawa melalui teknologi."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
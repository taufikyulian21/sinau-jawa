import React from 'react';
import { SANDHANGAN } from '../constants';
import AksaraCard from '../components/AksaraCard';

const Sandhangan: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-purple-800">Sandhangan</h2>
        <p className="text-gray-600 mt-2">Tanda bunyi vokal dan tanda baca lainnya</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {SANDHANGAN.map((char, index) => (
          <AksaraCard key={index} data={char} />
        ))}
      </div>
    </div>
  );
};

export default Sandhangan;
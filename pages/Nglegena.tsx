import React from 'react';
import { NGLEGENA } from '../constants';
import AksaraCard from '../components/AksaraCard';

const Nglegena: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-amber-800">Aksara Nglegena</h2>
        <p className="text-gray-600 mt-2">20 Huruf dasar dalam Aksara Jawa (Ha-Na-Ca-Ra-Ka)</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {NGLEGENA.map((char, index) => (
          <AksaraCard key={index} data={char} />
        ))}
      </div>
    </div>
  );
};

export default Nglegena;
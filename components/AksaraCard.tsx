import React from 'react';
import { AksaraChar } from '../types';

interface AksaraCardProps {
  data: AksaraChar;
  showPasangan?: boolean;
  onClick?: () => void;
}

const AksaraCard: React.FC<AksaraCardProps> = ({ data, showPasangan = false, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-md border-2 border-amber-200 hover:border-amber-500 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="bg-gradient-to-b from-amber-50 to-white p-6 text-center">
        <div className="h-24 flex items-center justify-center mb-2">
          <span className="text-5xl font-javanese text-amber-800">
            {showPasangan ? (data.pasangan || '-') : data.char}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-1">{data.latin}</h3>
        <p className="text-sm text-gray-500 italic">{data.description}</p>
      </div>
      <div className="bg-amber-100 px-4 py-2 text-center text-xs font-semibold text-amber-800 uppercase tracking-wider">
        {showPasangan ? 'Pasangan' : 'Aksara'}
      </div>
    </div>
  );
};

export default AksaraCard;
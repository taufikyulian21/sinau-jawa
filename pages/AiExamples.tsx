import React, { useState } from 'react';
import { generateWordExamples } from '../services/geminiService';
import { WordExample } from '../types';
import { Sparkles, RefreshCw } from 'lucide-react';

const AiExamples: React.FC = () => {
  const [words, setWords] = useState<WordExample[]>([]);
  const [loading, setLoading] = useState(false);
  const [topic, setTopic] = useState('hewan');

  const handleGenerate = async () => {
    setLoading(true);
    const newWords = await generateWordExamples(topic);
    setWords(newWords);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-red-700 flex items-center justify-center gap-2">
          <Sparkles className="text-amber-400" />
          Contoh Kata AI
          <Sparkles className="text-amber-400" />
        </h2>
        <p className="text-gray-600 mt-2">Minta AI membuatkan contoh kata dalam Aksara Jawa!</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-t-4 border-red-500">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Topik (misal: hewan, buah, sekolah)"
            className="w-full md:w-64 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 focus:outline-none"
          />
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full md:w-auto px-6 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 disabled:bg-gray-400 transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <RefreshCw className="animate-spin" size={18} />
                Sedang Membuat...
              </>
            ) : (
              'Buat Contoh Baru'
            )}
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        {words.map((word, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow border border-gray-100 flex items-center justify-between hover:bg-red-50 transition-colors">
            <div className="flex-1">
              <div className="font-javanese text-4xl mb-2 text-gray-800">{word.javanese}</div>
              <div className="text-lg font-bold text-red-700">{word.latin}</div>
            </div>
            <div className="text-right text-gray-500 italic border-l-2 border-gray-200 pl-4">
              "{word.meaning}"
            </div>
          </div>
        ))}
        
        {words.length === 0 && !loading && (
          <div className="text-center text-gray-400 py-10">
            Belum ada contoh. Ketik topik dan klik tombol di atas!
          </div>
        )}
      </div>
    </div>
  );
};

export default AiExamples;
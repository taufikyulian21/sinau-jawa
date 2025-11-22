import React, { useState, useEffect } from 'react';
import { generateQuizQuestions } from '../services/geminiService';
import { QuizQuestion } from '../types';
import { Brain, CheckCircle, XCircle, Trophy, Play } from 'lucide-react';

const AiQuiz: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [gameActive, setGameActive] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [completed, setCompleted] = useState(false);

  const startGame = async () => {
    setLoading(true);
    setCompleted(false);
    setScore(0);
    setCurrentIndex(0);
    const newQuestions = await generateQuizQuestions(5);
    setQuestions(newQuestions);
    setLoading(false);
    if (newQuestions.length > 0) {
      setGameActive(true);
    }
  };

  const handleAnswer = (answer: string) => {
    if (showFeedback) return;
    setSelectedAnswer(answer);
    setShowFeedback(true);
    
    if (answer === questions[currentIndex].correctAnswer) {
      setScore(s => s + 10);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
    } else {
      setGameActive(false);
      setCompleted(true);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 flex items-center justify-center gap-2">
          <Brain className="text-amber-500" />
          Kuis Pintar AI
        </h2>
      </div>

      {!gameActive && !completed && (
        <div className="bg-white rounded-2xl shadow-xl p-10 text-center border-b-8 border-blue-500">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Play size={48} className="text-blue-600 ml-2" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Siap Menguji Pengetahuanmu?</h3>
          <p className="text-gray-600 mb-8">AI akan membuatkan 5 soal unik untukmu secara otomatis.</p>
          <button
            onClick={startGame}
            disabled={loading}
            className="px-8 py-4 bg-blue-600 text-white text-xl font-bold rounded-full hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg disabled:bg-gray-400"
          >
            {loading ? 'Sedang Menyiapkan Soal...' : 'Mulai Kuis'}
          </button>
        </div>
      )}

      {completed && (
        <div className="bg-white rounded-2xl shadow-xl p-10 text-center border-b-8 border-yellow-500">
          <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <Trophy size={48} className="text-yellow-600" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Hebat!</h3>
          <p className="text-xl text-gray-600 mb-6">Skor Akhir Kamu</p>
          <div className="text-6xl font-extrabold text-blue-600 mb-8">{score} / {questions.length * 10}</div>
          <button
            onClick={startGame}
            className="px-8 py-3 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 transition-colors"
          >
            Main Lagi
          </button>
        </div>
      )}

      {gameActive && questions.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 h-2">
            <div 
              className="bg-blue-500 h-2 transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-bold text-gray-400 uppercase">Soal {currentIndex + 1}/{questions.length}</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">Skor: {score}</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 leading-relaxed font-javanese">
              {questions[currentIndex].question}
            </h3>

            <div className="space-y-3">
              {questions[currentIndex].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  disabled={showFeedback}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between ${
                    showFeedback
                      ? option === questions[currentIndex].correctAnswer
                        ? 'bg-green-100 border-green-500 text-green-800'
                        : option === selectedAnswer
                          ? 'bg-red-100 border-red-500 text-red-800'
                          : 'bg-gray-50 border-gray-200 opacity-50'
                      : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                  }`}
                >
                  <span className="font-medium text-lg">{option}</span>
                  {showFeedback && option === questions[currentIndex].correctAnswer && (
                    <CheckCircle className="text-green-600" />
                  )}
                  {showFeedback && option === selectedAnswer && option !== questions[currentIndex].correctAnswer && (
                    <XCircle className="text-red-600" />
                  )}
                </button>
              ))}
            </div>

            {showFeedback && (
              <div className="mt-8 animate-fade-in">
                <div className="bg-blue-50 p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                  <p className="font-bold text-blue-800">Penjelasan:</p>
                  <p className="text-blue-700">{questions[currentIndex].explanation}</p>
                </div>
                <button
                  onClick={nextQuestion}
                  className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
                >
                  {currentIndex === questions.length - 1 ? 'Lihat Hasil' : 'Soal Berikutnya'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AiQuiz;
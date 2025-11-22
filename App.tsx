import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Nglegena from './pages/Nglegena';
import Pasangan from './pages/Pasangan';
import Sandhangan from './pages/Sandhangan';
import AiExamples from './pages/AiExamples';
import AiQuiz from './pages/AiQuiz';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-java-bg flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nglegena" element={<Nglegena />} />
            <Route path="/pasangan" element={<Pasangan />} />
            <Route path="/sandhangan" element={<Sandhangan />} />
            <Route path="/contoh-ai" element={<AiExamples />} />
            <Route path="/kuis-ai" element={<AiQuiz />} />
            <Route path="/tentang" element={<About />} />
          </Routes>
        </main>
        <footer className="bg-amber-800 text-amber-100 py-6 text-center">
          <p>© 2025 Sinau Aksara Jawa. Karya Guruh Saputra.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
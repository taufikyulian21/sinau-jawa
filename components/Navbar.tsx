import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, BookOpen, Edit3, Brain, Info } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Beranda', icon: <Home size={20} /> },
    { path: '/nglegena', label: 'Nglegena', icon: <BookOpen size={20} /> },
    { path: '/pasangan', label: 'Pasangan', icon: <Edit3 size={20} /> },
    { path: '/sandhangan', label: 'Sandhangan', icon: <Edit3 size={20} /> },
    { path: '/contoh-ai', label: 'AI Contoh', icon: <Brain size={20} /> },
    { path: '/kuis-ai', label: 'Kuis Seru', icon: <Brain size={20} /> },
    { path: '/tentang', label: 'Tentang', icon: <Info size={20} /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-amber-400 shadow-lg sticky top-0 z-50 border-b-4 border-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-amber-700">
                 <span className="font-javanese text-2xl text-amber-700 font-bold pb-2">ꦲ</span>
              </div>
              <span className="font-bold text-xl text-amber-900 tracking-wide">Sinau Aksara</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                  isActive(item.path)
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-amber-900 hover:bg-amber-300'
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-900 hover:bg-amber-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-amber-300 border-t border-amber-500">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 ${
                  isActive(item.path)
                    ? 'bg-amber-600 text-white'
                    : 'text-amber-900 hover:bg-amber-400'
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
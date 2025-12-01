import { useState } from 'react';
import { Github, Linkedin, Mail, Instagram, Terminal } from 'lucide-react';
import TerminalComponent from './Terminal';

const BottomBar = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 lg:left-64 right-0 z-50 bg-white border-t border-blue-200 h-12 lg:h-8">
        {/* Left border line - hidden on mobile */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-blue-200"></div>
        <div className="flex items-center justify-between h-full px-4 lg:px-8">
          <div className="text-xs text-black font-mono hidden sm:inline">
            <span className="text-blue-600">$</span> <span className="hidden md:inline">Delivered 2 projects, tackled multiple challenges</span>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={() => setIsTerminalOpen(true)}
              className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition border border-blue-300"
              title="Open Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-blue-700" />
            </button>
            <a href="https://github.com/Sriya-Mukkawar" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition border border-blue-300">
              <Github className="w-3.5 h-3.5 text-blue-700" />
            </a>
            <a href="https://www.linkedin.com/in/sriyamukkawar/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition border border-blue-300">
              <Linkedin className="w-3.5 h-3.5 text-blue-700" />
            </a>
            <a href="mailto:mukkawarsriya@gmail.com" className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition border border-blue-300">
              <Mail className="w-3.5 h-3.5 text-blue-700" />
            </a>
            <a href="https://www.instagram.com/sriyaaaaaaaaaa._/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition border border-blue-300">
              <Instagram className="w-3.5 h-3.5 text-blue-700" />
            </a>
          </div>
        </div>
      </div>
      <TerminalComponent isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </>
  );
};

export default BottomBar;


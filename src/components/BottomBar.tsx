import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 left-64 right-0 z-50 bg-black border-t border-gray-800 h-8">
      {/* Left border line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800"></div>
      <div className="flex items-center justify-between h-full px-8">
        <div className="text-xs text-gray-300">
          Delivered 2 projects, tackled multiple challenges
        </div>
        <div className="flex items-center gap-2">
            <a href="#" className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
              <Github className="w-3.5 h-3.5 text-gray-300" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
              <Linkedin className="w-3.5 h-3.5 text-gray-300" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
              <Twitter className="w-3.5 h-3.5 text-gray-300" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
              <Instagram className="w-3.5 h-3.5 text-gray-300" />
            </a>
          </div>
        </div>
      </div>
  );
};

export default BottomBar;


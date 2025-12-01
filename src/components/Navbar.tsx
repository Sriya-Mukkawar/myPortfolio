import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTab } from '../contexts/TabContext';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { activeTab, setActiveTab } = useTab();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      if (hours === 0) hours = 12; // the hour '0' should be '12'
      const hoursStr = hours.toString().padStart(2, '0');
      setCurrentTime(`${hoursStr}:${minutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleTabChange = (tab: 'sriya.info' | 'work.done' | 'blog.share' | 'type.fun') => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-blue-200"
    >
      {/* Left border line extending full height - hidden on mobile */}
      <div className="hidden lg:block absolute left-64 top-0 bottom-0 w-px bg-blue-200"></div>
      <div className="max-w-full mx-auto">
        <div className="flex items-center h-12 lg:h-8">
          {/* Left section */}
          <div className="hidden lg:flex items-center px-4 lg:px-8 w-64 flex-shrink-0">
            <span className="text-xs lg:text-sm text-black">Welcome to my world!</span>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden ml-4 p-2 text-black hover:bg-blue-50 rounded transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          {/* Center section - navigation links at left edge of middle section */}
          <div className="hidden lg:flex flex-1 items-center border-r border-blue-200 px-0">
            <div className="flex items-center h-full">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  handleTabChange('sriya.info');
                }}
                className={`text-sm font-medium px-6 h-full flex items-center border-r border-blue-200 transition ${
                  activeTab === 'sriya.info' 
                    ? 'bg-blue-50 text-black border-b-2' 
                    : 'text-black hover:text-gray-700 hover:bg-blue-50/50'
                }`}
                style={activeTab === 'sriya.info' ? { borderBottomColor: '#1e3a8a' } : {}}
              >
                sriya.info
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  handleTabChange('work.done');
                }}
                className={`text-sm font-medium px-6 h-full flex items-center border-r border-blue-200 transition ${
                  activeTab === 'work.done' 
                    ? 'bg-blue-50 text-black border-b-2' 
                    : 'text-black hover:text-gray-700 hover:bg-blue-50/50'
                }`}
                style={activeTab === 'work.done' ? { borderBottomColor: '#1e3a8a' } : {}}
              >
                work.done
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  handleTabChange('blog.share');
                }}
                className={`text-sm font-medium px-6 h-full flex items-center border-r border-blue-200 transition ${
                  activeTab === 'blog.share' 
                    ? 'bg-blue-50 text-black border-b-2' 
                    : 'text-black hover:text-gray-700 hover:bg-blue-50/50'
                }`}
                style={activeTab === 'blog.share' ? { borderBottomColor: '#1e3a8a' } : {}}
              >
                blog.share
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  handleTabChange('type.fun');
                }}
                className={`text-sm font-medium px-6 h-full flex items-center transition ${
                  activeTab === 'type.fun' 
                    ? 'bg-blue-50 text-black border-b-2' 
                    : 'text-black hover:text-gray-700 hover:bg-blue-50/50'
                }`}
                style={activeTab === 'type.fun' ? { borderBottomColor: '#1e3a8a' } : {}}
              >
                type.fun
              </button>
            </div>
          </div>
          
          {/* Right section */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-6 px-4 lg:px-8 flex-shrink-0 ml-auto">
            <div className="flex items-center gap-2 bg-blue-100 px-2 py-0.5 rounded-md border border-blue-300">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-3 h-3 rounded-full bg-blue-400/30 blur-sm"></div>
                <div className="relative w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
              <span className="text-xs text-blue-700 font-medium hidden lg:inline">Open to new work</span>
            </div>
            <span className="text-xs lg:text-sm text-black hidden xl:inline">Hyderabad, India</span>
            <span className="text-xs lg:text-sm font-mono text-black hidden lg:inline">My time: {currentTime}</span>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-blue-200 bg-white"
          >
            <div className="flex flex-col">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleTabChange('sriya.info');
                }}
                className={`px-6 py-3 text-left text-sm font-medium transition ${
                  activeTab === 'sriya.info' 
                    ? 'bg-blue-50 text-black border-l-4 border-blue-600' 
                    : 'text-black hover:bg-blue-50/50'
                }`}
              >
                sriya.info
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleTabChange('work.done');
                }}
                className={`px-6 py-3 text-left text-sm font-medium transition ${
                  activeTab === 'work.done' 
                    ? 'bg-blue-50 text-black border-l-4 border-blue-600' 
                    : 'text-black hover:bg-blue-50/50'
                }`}
              >
                work.done
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleTabChange('blog.share');
                }}
                className={`px-6 py-3 text-left text-sm font-medium transition ${
                  activeTab === 'blog.share' 
                    ? 'bg-blue-50 text-black border-l-4 border-blue-600' 
                    : 'text-black hover:bg-blue-50/50'
                }`}
              >
                blog.share
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleTabChange('type.fun');
                }}
                className={`px-6 py-3 text-left text-sm font-medium transition ${
                  activeTab === 'type.fun' 
                    ? 'bg-blue-50 text-black border-l-4 border-blue-600' 
                    : 'text-black hover:bg-blue-50/50'
                }`}
              >
                type.fun
              </button>
              <div className="px-6 py-3 border-t border-blue-200 flex items-center justify-between">
                <span className="text-xs text-black">Hyderabad, India</span>
                <span className="text-xs font-mono text-black">My time: {currentTime}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;


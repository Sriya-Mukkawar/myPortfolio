import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTab } from '../contexts/TabContext';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState('');
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

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800"
    >
      {/* Left border line extending full height */}
      <div className="absolute left-64 top-0 bottom-0 w-px bg-gray-800"></div>
      <div className="max-w-full mx-auto">
        <div className="flex items-center h-8">
          {/* Left section */}
          <div className="flex items-center px-8 w-64 flex-shrink-0">
            <span className="text-sm text-gray-400">Welcome to my world!</span>
          </div>
          
          {/* Center section - navigation links at left edge of middle section */}
          <div className="flex-1 flex items-center border-r border-gray-800 px-0">
            <div className="flex items-center h-full">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('sriya.info');
                }}
                className={`text-sm font-medium px-6 h-full flex items-center border-r border-gray-800 transition ${
                  activeTab === 'sriya.info' 
                    ? 'bg-gray-900 text-white border-b-2' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
                style={activeTab === 'sriya.info' ? { borderBottomColor: '#EDEDA8' } : {}}
              >
                sriya.info
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('work.done');
                }}
                className={`text-sm font-medium px-6 h-full flex items-center border-r border-gray-800 transition ${
                  activeTab === 'work.done' 
                    ? 'bg-gray-900 text-white border-b-2' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
                style={activeTab === 'work.done' ? { borderBottomColor: '#EDEDA8' } : {}}
              >
                work.done
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('blog.share');
                }}
                className={`text-sm font-medium px-6 h-full flex items-center transition ${
                  activeTab === 'blog.share' 
                    ? 'bg-gray-900 text-white border-b-2' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
                style={activeTab === 'blog.share' ? { borderBottomColor: '#EDEDA8' } : {}}
              >
                blog.share
              </button>
            </div>
          </div>
          
          {/* Right section */}
          <div className="flex items-center space-x-6 px-8 flex-shrink-0">
            <div className="flex items-center gap-2 bg-green-900/40 px-2.5 py-0.5 rounded-md border border-green-800/50">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-3 h-3 rounded-full bg-green-400/30 blur-sm"></div>
                <div className="relative w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              <span className="text-xs text-green-400 font-medium">Open to new work</span>
            </div>
            <span className="text-sm text-gray-400">Hyderabad, India</span>
            <span className="text-sm font-mono text-gray-400">My time: {currentTime}</span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;


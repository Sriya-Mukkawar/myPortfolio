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
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-purple-200"
    >
      {/* Left border line extending full height */}
      <div className="absolute left-64 top-0 bottom-0 w-px bg-purple-200"></div>
      <div className="max-w-full mx-auto">
        <div className="flex items-center h-8">
          {/* Left section */}
          <div className="flex items-center px-8 w-64 flex-shrink-0">
            <span className="text-sm text-black">Welcome to my world!</span>
          </div>
          
          {/* Center section - navigation links at left edge of middle section */}
          <div className="flex-1 flex items-center border-r border-purple-200 px-0">
            <div className="flex items-center h-full">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('sriya.info');
                }}
                className={`text-sm font-medium px-6 h-full flex items-center border-r border-purple-200 transition ${
                  activeTab === 'sriya.info' 
                    ? 'bg-purple-50 text-black border-b-2' 
                    : 'text-black hover:text-gray-700 hover:bg-purple-50/50'
                }`}
                style={activeTab === 'sriya.info' ? { borderBottomColor: '#9333ea' } : {}}
              >
                sriya.info
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('work.done');
                }}
                className={`text-sm font-medium px-6 h-full flex items-center border-r border-purple-200 transition ${
                  activeTab === 'work.done' 
                    ? 'bg-purple-50 text-black border-b-2' 
                    : 'text-black hover:text-gray-700 hover:bg-purple-50/50'
                }`}
                style={activeTab === 'work.done' ? { borderBottomColor: '#9333ea' } : {}}
              >
                work.done
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('blog.share');
                }}
                className={`text-sm font-medium px-6 h-full flex items-center border-r border-purple-200 transition ${
                  activeTab === 'blog.share' 
                    ? 'bg-purple-50 text-black border-b-2' 
                    : 'text-black hover:text-gray-700 hover:bg-purple-50/50'
                }`}
                style={activeTab === 'blog.share' ? { borderBottomColor: '#9333ea' } : {}}
              >
                blog.share
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('type.fun');
                }}
                className={`text-sm font-medium px-6 h-full flex items-center transition ${
                  activeTab === 'type.fun' 
                    ? 'bg-purple-50 text-black border-b-2' 
                    : 'text-black hover:text-gray-700 hover:bg-purple-50/50'
                }`}
                style={activeTab === 'type.fun' ? { borderBottomColor: '#9333ea' } : {}}
              >
                type.fun
              </button>
            </div>
          </div>
          
          {/* Right section */}
          <div className="flex items-center space-x-6 px-8 flex-shrink-0">
            <div className="flex items-center gap-2 bg-purple-100 px-2.5 py-0.5 rounded-md border border-purple-300">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-3 h-3 rounded-full bg-purple-400/30 blur-sm"></div>
                <div className="relative w-2 h-2 rounded-full bg-purple-600"></div>
              </div>
              <span className="text-xs text-purple-700 font-medium">Open to new work</span>
            </div>
            <span className="text-sm text-black">Hyderabad, India</span>
            <span className="text-sm font-mono text-black">My time: {currentTime}</span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;


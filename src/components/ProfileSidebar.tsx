import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, Mail, Briefcase, MapPin, Languages } from 'lucide-react';
import profileImage from '../assets/me.jpeg';

const ProfileSidebar = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [scrambledText, setScrambledText] = useState<{ [key: string]: string }>({});
  const intervalRefs = useRef<{ [key: string]: number }>({});

  const buttonConfigs = [
    {
      id: 'download',
      defaultText: 'Download CV',
      hoverText: 'Get my resume',
      icon: Download,
      className: 'bg-gray-800 text-gray-200',
      hoverClassName: 'bg-gray-700',
    },
    {
      id: 'schedule',
      defaultText: 'Schedule a call',
      hoverText: 'Book a meeting',
      icon: Calendar,
      className: 'bg-white text-gray-900',
      hoverClassName: 'bg-gray-100',
    },
    {
      id: 'work',
      defaultText: 'Work with me',
      hoverText: 'Let\'s collaborate',
      icon: Mail,
      className: 'bg-gray-800 text-gray-200',
      hoverClassName: 'bg-gray-700',
    },
  ];

  useEffect(() => {
    return () => {
      // Cleanup intervals on unmount
      Object.values(intervalRefs.current).forEach(interval => clearInterval(interval));
    };
  }, []);

  const handleMouseEnter = (buttonId: string, text: string) => {
    setHoveredButton(buttonId);
    let iteration = 0;
    const maxIterations = 8;
    
    intervalRefs.current[buttonId] = setInterval(() => {
      let scrambled = '';
      const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      
      for (let i = 0; i < text.length; i++) {
        if (iteration > i * 1.5) {
          scrambled += text[i];
        } else {
          scrambled += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      
      setScrambledText(prev => ({
        ...prev,
        [buttonId]: scrambled
      }));
      
      iteration += 0.8;
      if (iteration >= maxIterations) {
        clearInterval(intervalRefs.current[buttonId]);
        setScrambledText(prev => ({
          ...prev,
          [buttonId]: text
        }));
      }
    }, 30);
  };

  const handleMouseLeave = (buttonId: string) => {
    setHoveredButton(null);
    if (intervalRefs.current[buttonId]) {
      clearInterval(intervalRefs.current[buttonId]);
    }
    setScrambledText(prev => ({
      ...prev,
      [buttonId]: ''
    }));
  };

  return (
    <aside className="w-64 flex-shrink-0 border-r border-purple-200 h-full overflow-hidden bg-white relative">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="h-full flex flex-col p-8 pb-0"
      >
        {/* Profile Image */}
        <div className="mb-6">
          <div className="w-32 h-32 rounded-full overflow-visible mx-auto mb-4 border-2 border-gray-700 group/image relative cursor-pointer">
            <motion.img
              src={profileImage}
              alt="Sriya Mukkawar"
              className="w-full h-full object-cover rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ filter: 'brightness(1)' }}
            />
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: 'linear-gradient(to top right, rgba(147, 51, 234, 0.2), transparent, rgba(168, 85, 247, 0.2))' }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 pointer-events-none"
              style={{ borderColor: 'rgba(147, 51, 234, 0.5)' }}
              initial={{ opacity: 0, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 bg-white/5 pointer-events-none rounded-full"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            {/* Waving Bitmoji */}
            <motion.div
              className="absolute -top-8 right-0 pointer-events-none z-10"
              initial={{ opacity: 0, scale: 0, y: 10 }}
              whileHover={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="text-4xl"
                animate={{
                  rotate: [0, 14, -8, 14, -8, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 0.2,
                  ease: "easeInOut"
                }}
              >
                👋
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Name and Role */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-black mb-1">Sriya Mukkawar</h2>
          <p className="text-gray-600">Full Stack Developer</p>
        </div>

        {/* Bio */}
        <p className="text-black text-sm mb-8 text-center">
          I'm a passionate full stack developer focused on creating clean, efficient, and scalable solutions.
        </p>

        {/* Details */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-black text-sm">
            <Briefcase className="w-4 h-4 text-purple-600" />
            <span>Full Stack Developer</span>
          </div>
          <div className="flex items-center gap-3 text-black text-sm">
            <MapPin className="w-4 h-4 text-purple-600" />
            <span>21n, Hyderabad</span>
          </div>
          <div className="flex items-center gap-3 text-black text-sm">
            <Languages className="w-4 h-4 text-purple-600" />
            <span>English, Hindi, Telugu</span>
          </div>
          <div className="flex items-center gap-3 text-black text-sm">
            <Mail className="w-4 h-4 text-purple-600" />
            <span>Available for opportunities</span>
          </div>
        </div>

        {/* Spacer to push buttons to bottom */}
        <div className="flex-1"></div>
      </motion.div>
      
      {/* Buttons - positioned at absolute bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-8 pt-0">
        <div className="border-t border-purple-200 pt-4 w-full">
          <div className="space-y-3">
          {buttonConfigs.map((config) => {
            const Icon = config.icon;
            const isHovered = hoveredButton === config.id;
            
            return (
              <a
                key={config.id}
                href={config.id === 'download' ? 'https://drive.google.com/file/d/1auTY7m0-YvVTp4fjOYxBpvw4OdWM4aBt/view?usp=sharing' : config.id === 'work' ? 'mailto:mukkawarsriya@gmail.com' : '#'}
                target={config.id === 'download' ? '_blank' : undefined}
                rel={config.id === 'download' ? 'noopener noreferrer' : undefined}
                onMouseEnter={() => handleMouseEnter(config.id, config.defaultText)}
                onMouseLeave={() => handleMouseLeave(config.id)}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition text-sm font-medium relative overflow-hidden ${
                  config.id === 'download' || config.id === 'work' 
                    ? 'bg-purple-100 text-purple-800 hover:bg-purple-200 border border-purple-300' 
                    : 'bg-purple-800 text-white hover:bg-purple-900'
                }`}
              >
                <span className={`absolute inset-0 flex items-center justify-center gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                  <Icon className="w-4 h-4" />
                  {config.defaultText}
                </span>
                <span className={`absolute inset-0 flex items-center justify-center gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                  <Icon className="w-4 h-4" />
                  {scrambledText[config.id] || config.defaultText}
                </span>
              </a>
            );
          })}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar;

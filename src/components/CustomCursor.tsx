import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'BUTTON' || 
                           target.tagName === 'A' || 
                           target.closest('button') || 
                           target.closest('a') ||
                           target.closest('[role="button"]') ||
                           window.getComputedStyle(target).cursor === 'pointer';
      
      if (isInteractive) {
        setIsHovering(true);
        setCursorText('<>');
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Main cursor - coding bracket style */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="relative">
          {/* Outer glow */}
          <div
            className="absolute inset-0 rounded-full blur-md opacity-30"
            style={{
              background: isHovering 
                ? 'radial-gradient(circle, #a855f7, transparent)' 
                : 'radial-gradient(circle, #9333ea, transparent)',
            }}
          />
          
          {/* Main cursor circle */}
          <motion.div
            className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
            style={{
              borderColor: isHovering ? '#a855f7' : '#9333ea',
              backgroundColor: isHovering ? 'rgba(168, 85, 247, 0.1)' : 'rgba(147, 51, 234, 0.05)',
            }}
            animate={{
              scale: isHovering ? 1.5 : 1,
            }}
          >
            {cursorText && (
              <motion.span
                className="text-xs font-mono font-bold"
                style={{ color: '#9333ea' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {cursorText}
              </motion.span>
            )}
            
            {/* Typing cursor indicator */}
            {!cursorText && (
              <motion.div
                className="w-1 h-4 bg-purple-600"
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              />
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Trail effect for coding theme */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          delay: 0.05,
        }}
      >
        <div
          className="w-2 h-2 rounded-full opacity-50"
          style={{
            background: 'radial-gradient(circle, #c084fc, transparent)',
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;


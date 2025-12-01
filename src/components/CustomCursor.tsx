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
                ? 'radial-gradient(circle, #1e40af, transparent)' 
                : 'radial-gradient(circle, #1e3a8a, transparent)',
            }}
          />
          
          {/* Main cursor circle */}
          <motion.div
            className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
            style={{
              borderColor: isHovering ? '#1e40af' : '#1e3a8a',
              backgroundColor: isHovering ? 'rgba(30, 64, 175, 0.1)' : 'rgba(30, 58, 138, 0.05)',
            }}
            animate={{
              scale: isHovering ? 1.5 : 1,
            }}
          >
            {cursorText && (
              <motion.span
                className="text-xs font-mono font-bold"
                style={{ color: '#1e3a8a' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {cursorText}
              </motion.span>
            )}
            
            {/* Typing cursor indicator */}
            {!cursorText && (
              <motion.div
                className="w-1 h-4 bg-blue-600"
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
            background: 'radial-gradient(circle, #2563eb, transparent)',
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;


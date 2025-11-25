import { useState, useEffect, useRef } from 'react';

interface PixelatedRevealProps {
  image: string;
  hoverImage?: string;
  alt: string;
  gridSize?: number;
}

const PixelatedReveal = ({ image, hoverImage, alt, gridSize = 20 }: PixelatedRevealProps) => {
  const [revealedPixels, setRevealedPixels] = useState<Set<number>>(new Set());
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<number | null>(null);
  
  // Use hoverImage if provided, otherwise use a different version of the same image
  const revealImage = hoverImage || image;

  useEffect(() => {
    if (isHovered) {
      const totalPixels = gridSize * gridSize;
      let revealed = new Set<number>();
      
      intervalRef.current = window.setInterval(() => {
        // Reveal many more pixels per iteration for much faster effect
        for (let i = 0; i < 30; i++) {
          const randomPixel = Math.floor(Math.random() * totalPixels);
          revealed.add(randomPixel);
        }
        setRevealedPixels(new Set(revealed));
        
        if (revealed.size >= totalPixels * 0.9) {
          // Reveal all remaining pixels
          for (let i = 0; i < totalPixels; i++) {
            revealed.add(i);
          }
          setRevealedPixels(new Set(revealed));
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        }
      }, 5); // Much faster - 5ms interval
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setRevealedPixels(new Set());
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, gridSize]);

  const pixelWidth = 100 / gridSize;
  const pixelHeight = 100 / gridSize;
  const totalPixels = gridSize * gridSize;

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base: Original image - always visible when not hovered */}
      <img
        src={image}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      {/* Base: NEW image that will be revealed - only visible when hovered */}
      <img
        src={revealImage}
        alt={alt}
        className={`w-full h-full object-cover absolute inset-0 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Grid overlay that covers the NEW image and disappears pixel by pixel */}
      <div className={`absolute inset-0 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        {Array.from({ length: totalPixels }, (_, i) => {
          const row = Math.floor(i / gridSize);
          const col = i % gridSize;
          const isRevealed = revealedPixels.has(i);
          
          return (
            <div
              key={i}
              className={`absolute transition-opacity duration-75 ${
                isRevealed ? 'opacity-0' : 'opacity-100'
              }`}
              style={{
                left: `${col * pixelWidth}%`,
                top: `${row * pixelHeight}%`,
                width: `${pixelWidth}%`,
                height: `${pixelHeight}%`,
                backgroundImage: `url(${revealImage})`,
                backgroundSize: `${gridSize * 100}%`,
                backgroundPosition: `${(col / (gridSize - 1)) * 100}% ${(row / (gridSize - 1)) * 100}%`,
                imageRendering: 'pixelated',
                filter: 'blur(1px) contrast(1.3)',
                backgroundColor: '#1A1A1A',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PixelatedReveal;


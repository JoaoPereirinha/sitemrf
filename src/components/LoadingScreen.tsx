import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC<{ onLoadingComplete: () => void }> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = Math.min(oldProgress + 1, 100);
        if (newProgress === 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 500); // Give a small delay after reaching 100%
        }
        return newProgress;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <img src="/logomrf.png" alt="MRF Logo" className="h-24 mb-8 animate-pulse" />
      
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-visible relative">
        <div 
          className="h-full bg-[#D95B29] rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
        <div 
          className="absolute -top-6 transition-all duration-300"
          style={{ left: `${progress}%`, transform: 'translateX(-50%) scaleX(-1)' }}
        >
          <span className="text-3xl" role="img" aria-label="truck">
            🚛
          </span>
        </div>
      </div>
      
      <p className="mt-12 text-lg font-medium text-navy-900">
        A carregar... {progress}%
      </p>
    </div>
  );
};

import React, { useEffect, useState } from 'react';

const HolidayBanner: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden flex items-center justify-center">
      <img
        src="/avisoferias.jpg"
        alt="Aviso de férias"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/60" />
      <div
        className="relative z-10 text-center px-6 text-white transition-all duration-1000 ease-out"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        <p className="text-lg sm:text-2xl md:text-3xl font-light tracking-wide drop-shadow-lg leading-relaxed">
          Estaremos encerrados de 10 a 15 de Agosto
        </p>
        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-bold tracking-wider drop-shadow-2xl leading-tight">
          Boas Férias
        </h1>
      </div>
    </section>
  );
};

export default HolidayBanner;

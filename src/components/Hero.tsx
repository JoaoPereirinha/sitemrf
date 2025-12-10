import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface Slide {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    imageUrl: "/balanco_banner_site.jpg",
    title: "Trinta e Um de Dezembro até dia Três de Janeiro",
    description: "Informamos os nossos estimados clientes que iremos estar encerrados para balanço."
  },
  {
    id: 2,
    imageUrl: "/Slide1.png",
    title: "Confiança e Experiência ao Seu Serviço",
    description: "Com mais de 35 anos no mercado, a Mário Ribeiro & Filhos garante qualidade no serviço prestado ao seu cliente."
  },
  {
    id: 3,
    imageUrl: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg",
    title: "Materiais de Qualidade para a Sua Obra",
    description: "Revendedores de marcas de confiança e de renome no mercado nacional."
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const scrollToProducts = () => {
    const productsSection = document.querySelector('#produtos');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContacts = () => {
    const contactsSection = document.querySelector('#contactos');
    contactsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAboutUs = () => {
    const aboutUsSection = document.querySelector('#sobre-nos');
    aboutUsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMarcas = () => {
    const marcasSection = document.querySelector('#marcas');
    marcasSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl text-white mb-8">
                  {slide.description}
                </p>
                <button
                  className="btn-primary"
                  onClick={index === 0 ? scrollToContacts : index === 1 ? scrollToAboutUs : index === 2 ? scrollToMarcas : undefined}
                >
                  {index === 0 ? 'Contacte-nos' : index === 1 ? 'Sobre Nós' : index === 2 ? 'Marcas' : 'Saiba Mais'}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/30 text-white hover:bg-white/50 transition-colors"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/30 text-white hover:bg-white/50 transition-colors"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
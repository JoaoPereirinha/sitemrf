import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Brand {
  id: number;
  name: string;
  imageUrl: string;
  websiteUrl: string;
}

const brands: Brand[] = [
  {
    id: 1,
    name: "Artebel",
    imageUrl: "/Artebel.png",
    websiteUrl: "https://www.artebel.pt"
  },
  {
    id: 2,
    name: "Weber",
    imageUrl: "/Weber.png",
    websiteUrl: "https://www.saint-gobain.pt/produtos-weber"
  },
  {
    id: 3,
    name: "Secil",
    imageUrl: "/Secil.png",
    websiteUrl: "https://www.secil.pt/pt/home"
  },
  {
    id: 4,
    name: "Love",
    imageUrl: "/Love.png",
    websiteUrl: "https://lovetiles.com/pt"
  },
  {
    id: 5,
    name: "Margres",
    imageUrl: "/Margres.png",
    websiteUrl: "https://www.solzaima.pt"
  },
  {
    id: 6,
    name: "Sanindusa",
    imageUrl: "/Sanindusa.png",
    websiteUrl: "https://sanindusa.com/pt"
  }
];

const Brands: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const titleRef = useScrollAnimation();
  const descRef = useScrollAnimation();
  const navigate = useNavigate();

  const handleCatalogClick = () => {
    navigate('/catalogo');
    window.scrollTo(0, 0);
  };

  return (
    <section id="marcas" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 ref={titleRef} className="section-title mb-12">Marcas de Confiança</h2>
        
        <p ref={descRef} className="text-lg mb-8 max-w-3xl animate-on-scroll">
          Trabalhamos apenas com as melhores marcas do mercado, garantindo qualidade, durabilidade e assistência técnica para todos os produtos que comercializamos.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => {
            const ref = useScrollAnimation({ threshold: 0.1 });
            return (
              <div 
                key={brand.id}
                ref={ref}
                className={`card group overflow-hidden cursor-pointer animate-on-scroll delay-${index * 100}`}
                onMouseEnter={() => setHoveredId(brand.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <a 
                  href={brand.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={brand.imageUrl} 
                      alt={brand.name} 
                      className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${hoveredId === brand.id ? 'opacity-100' : 'opacity-0'}`}>
                      <span className="text-white font-medium">Visitar Website</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-navy-800">{brand.name}</h3>
                    <p className="text-gray-600">{brand.description}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={handleCatalogClick} 
            className="btn-primary"
          >
            Todas as Marcas
          </button>
        </div>
      </div>
    </section>
  );
};

export default Brands;
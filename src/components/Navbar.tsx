import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isCatalogPage = location.pathname === '/catalogo';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    if (path.startsWith('/')) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (isCatalogPage) {
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.querySelector(path);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(path);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/logomrf.png" 
            alt="Mário Ribeiro e Filhos" 
            className="h-16 cursor-pointer my-2" 
            onClick={() => handleNavigation('/')}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          <button onClick={() => handleNavigation('/')} className="nav-link-active">Home</button>
          <button onClick={() => handleNavigation('/carreiras')} className="nav-link">Carreiras</button>
          {!isCatalogPage && (
            <>
              <button onClick={() => handleNavigation('#sobre-nos')} className="nav-link">Sobre Nós</button>
              <button onClick={() => handleNavigation('#produtos')} className="nav-link">Produtos</button>
              <button onClick={() => handleNavigation('#marcas')} className="nav-link">Marcas</button>
              <button onClick={() => handleNavigation('#contactos')} className="nav-link">Contactos</button>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#D95B29] focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom py-4 flex flex-col space-y-3">
          <button onClick={() => handleNavigation('/')} className="nav-link-active text-left">Home</button>
          <button onClick={() => handleNavigation('/carreiras')} className="nav-link text-left">Carreiras</button>
          {!isCatalogPage && (
            <>
              <button onClick={() => handleNavigation('#sobre-nos')} className="nav-link text-left">Sobre Nós</button>
              <button onClick={() => handleNavigation('#produtos')} className="nav-link text-left">Produtos</button>
              <button onClick={() => handleNavigation('#marcas')} className="nav-link text-left">Marcas</button>
              <button onClick={() => handleNavigation('#contactos')} className="nav-link text-left">Contactos</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
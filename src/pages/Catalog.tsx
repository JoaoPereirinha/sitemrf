import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Grid3X3, Droplets, Mountain, Building, Home, Paintbrush, Shield, TreePine, Flame, Flower, Filter } from 'lucide-react';

interface Brand {
  id: number;
  name: string;
  imageUrl: string;
  description?: string;
  websiteUrl: string;
  categories: string[]; // Invisible categories for filtering
}

// Define product categories with icons - aligned with Products component
const productCategories = [
  { id: 'ceramicos', name: 'Cerâmicos', icon: Grid3X3 },
  { id: 'sanitarios', name: 'Sanitários', icon: Droplets },
  { id: 'cimentos-argamassas', name: 'Cimentos e Argamassas', icon: Mountain },
  { id: 'blocos-tijolos', name: 'Blocos, Tijolos e Telhas', icon: Building },
  { id: 'janelas-sotao', name: 'Janelas de Sótão', icon: Home },
  { id: 'drogaria', name: 'Drogaria', icon: Paintbrush },
  { id: 'impermeabilizacao', name: 'Impermeabilização e Isolamentos', icon: Shield },
  { id: 'madeiras', name: 'Madeiras e Revestimentos de Fachadas', icon: TreePine },
  { id: 'aquecimento', name: 'Aquecimento e Climatização', icon: Flame },
  { id: 'jardim', name: 'Jardim', icon: Flower }
];

const brands: Brand[] = [
  {
    id: 1,
    name: "CIN",
    imageUrl: "/CIN.png",
    websiteUrl: "https://cin.com/deco/pt/pt/produtos",
    categories: ["drogaria", "impermeabilizacao"]
  },
  {
    id: 2,
    name: "Weber",
    imageUrl: "/Weber.png",
    websiteUrl: "https://www.saint-gobain.pt/produtos-weber",
    categories: ["cimentos-argamassas", "impermeabilizacao"]
  },
  {
    id: 3,
    name: "Cinca",
    imageUrl: "/Cinca.png",
    websiteUrl: "https://www.cinca.pt/index.php?id=8",
    categories: ["ceramicos"]
  },
  {
    id: 4,
    name: "Love",
    imageUrl: "/Love.png",
    websiteUrl: "https://lovetiles.com/pt",
    categories: ["ceramicos"]
  },
  {
    id: 5,
    name: "Solzaima",
    imageUrl: "/Solzaima.png",
    websiteUrl: "https://www.solzaima.pt",
    categories: ["aquecimento"]
  },
  {
    id: 6,
    name: "Sanindusa",
    imageUrl: "/Sanindusa.png",
    websiteUrl: "https://sanindusa.com/pt",
    categories: ["sanitarios"]
  },
  {
    id: 7,
    name: "Secil",
    imageUrl: "/Secil.png",
    websiteUrl: "https://www.secil.pt/pt/home",
    categories: ["cimentos-argamassas"]
  },
  {
    id: 8,
    name: "Teka",
    imageUrl: "/Teka.png",
    websiteUrl: "https://www.teka.com/pt-pt/",
    categories: ["sanitarios"]
  },
  {
    id: 9,
    name: "Velux",
    imageUrl: "/Velux.png",
    websiteUrl: "https://www.velux.pt",
    categories: ["janelas-sotao"]
  },
  {
    id: 10,
    name: "Bruma",
    imageUrl: "/Bruma.png",
    websiteUrl: "https://www.bruma.pt",
    categories: ["sanitarios"]
  },
  {
    id: 11,
    name: "Corticeira Amorim",
    imageUrl: "/Amorim.png",
    websiteUrl: "https://www.amorim.com/pt/",
    categories: ["madeiras"]
  },
  {
    id: 12,
    name: "Cerâmica do Alto",
    imageUrl: "/CeramicaDoAlto.png",
    websiteUrl: "https://www.facebook.com/p/Sociedade-Ceramica-do-Alto-Lda-100042885596349/?locale=pt_PT",
    categories: ["blocos-tijolos"]
  },
  {
    id: 13,
    name: "Wicanders",
    imageUrl: "/Wicanders.png",
    websiteUrl: "https://www.wicanders.pt",
    categories: ["madeiras"]
  },
  {
    id: 14,
    name: "Artebel",
    imageUrl: "/Artebel.png",
    websiteUrl: "https://www.artebel.pt",
    categories: ["blocos-tijolos"]
  },
  {
    id: 15,
    name: "Sika",
    imageUrl: "/Sika.png",
    websiteUrl: "https://prt.sika.com",
    categories: ["drogaria", "impermeabilizacao"]
  },
  {
    id: 16,
    name: "Pecol",
    imageUrl: "/Pecol.png",
    websiteUrl: "https://pecol.pt",
    categories: ["drogaria"]
  },
  {
    id: 17,
    name: "Odem",
    imageUrl: "/Odem.png",
    websiteUrl: "https://odem.pt/",
    categories: ["drogaria"]
  },
  {
    id: 18,
    name: "Rubi",
    imageUrl: "/Rubi.png",
    websiteUrl: "https://www.rubi.com/pt",
    categories: ["drogaria"]
  },
  {
    id: 19,
    name: "Danosa",
    imageUrl: "/Danosa.png",
    websiteUrl: "https://www.danosa.com/pt-pt/",
    categories: ["impermeabilizacao"]
  },
  {
    id: 20,
    name: "Gedy",
    imageUrl: "/Gedy.jpg",
    websiteUrl: "https://www.gedy.com/en/",
    categories: ["sanitarios"]
  },
  {
    id: 21,
    name: "Margres",
    imageUrl: "/Margres.png",
    websiteUrl: "https://margres.com/pt",
    categories: ["ceramicos"]
  },
  {
    id: 22,
    name: "Revigres",
    imageUrl: "/Revigres.png",
    websiteUrl: "https://www.revigres.pt/",
    categories: ["ceramicos"]
  },
  {
    id: 23,
    name: "Pavigres",
    imageUrl: "/Pavigres.png",
    websiteUrl: "https://pavigres.com/",
    categories: ["ceramicos"]
  },
  {
    id: 24,
    name: "Kerion",
    imageUrl: "/Kerion.png",
    websiteUrl: "https://www.kerion.pt/",
    categories: ["ceramicos"]
  },
  {
    id: 25,
    name: "Aleluia",
    imageUrl: "/Aleluia.png",
    websiteUrl: "https://aleluia.pt/",
    categories: ["ceramicos"]
  },
  {
    id: 26,
    name: "Primus Vitória",
    imageUrl: "/PrimusVitoria.png",
    websiteUrl: "https://primusvitoria.com/",
    categories: ["ceramicos"]
  },
  {
    id: 27,
    name: "Recer",
    imageUrl: "/Recer.jpg",
    websiteUrl: "https://www.recer.pt/",
    categories: ["ceramicos"]
  },
  {
    id: 28,
    name: "Gresco",
    imageUrl: "/Gresco.jpg",
    websiteUrl: "https://www.gresco.pt/pt/",
    categories: ["ceramicos"]
  },
  {
    id: 29,
    name: "Gresart",
    imageUrl: "/Gresart.jpg",
    websiteUrl: "https://gresart.com/pt",
    categories: ["ceramicos"]
  },
  {
    id: 30,
    name: "Rubicer",
    imageUrl: "/Rubicer.jpg",
    websiteUrl: "https://www.rubicer.pt/",
    categories: ["ceramicos", "sanitarios"]
  },
  {
    id: 31,
    name: "Mijares",
    imageUrl: "/Mijares.png",
    websiteUrl: "https://www.azulejosmijares.com/",
    categories: ["ceramicos"]
  },
  {
    id: 32,
    name: "Certeca",
    imageUrl: "/Certeca.jpg",
    websiteUrl: "https://www.certeca.pt/index.php",
    categories: ["ceramicos"]
  },
  {
    id: 33,
    name: "Ecoceramic",
    imageUrl: "/Ecoceramic.jpg",
    websiteUrl: "https://www.ecoceramic.es/",
    categories: ["ceramicos"]
  },
  {
    id: 34,
    name: "Ceragni",
    imageUrl: "/Ceragni.png",
    websiteUrl: "https://www.ceragni.com/index.php/pt/",
    categories: ["ceramicos"]
  },
  {
    id: 35,
    name: "Dominó",
    imageUrl: "/Domino.png",
    websiteUrl: "https://www.domino.pt/pt",
    categories: ["ceramicos"]
  },
  {
    id: 36,
    name: "Euronit",
    imageUrl: "/Euronit.png",
    websiteUrl: "https://www.euronit.pt/pt-pt/",
    categories: ["blocos-tijolos"]
  },
  {
    id: 37,
    name: "Secolite",
    imageUrl: "/Secolite.jpg",
    websiteUrl: "https://secolite.eu/pt",
    categories: ["madeiras"]
  },
  {
    id: 38,
    name: "Onduline",
    imageUrl: "/Onduline.png",
    websiteUrl: "https://pt.onduline.com/pt-pt/profissional",
    categories: ["blocos-tijolos"]
  },
  {
    id: 39,
    name: "Cedral",
    imageUrl: "/Cedral.png",
    websiteUrl: "https://www.cedral.world/pt-pt/fachadas/",
    categories: ["madeiras"]
  },
  {
    id: 40,
    name: "Equitone",
    imageUrl: "/Equitone.png",
    websiteUrl: "https://www.equitone.com/pt-pt/",
    categories: ["madeiras"]
  },
  {
    id: 41,
    name: "Banhoazis",
    imageUrl: "/Banhoazis.png",
    websiteUrl: "https://banhoazis.pt/pt",
    categories: ["sanitarios"]
  },
  {
    id: 42,
    name: "Móveis A.M",
    imageUrl: "/Moveisam.png",
    websiteUrl: "https://www.moveisam.com",
    categories: ["sanitarios"]
  },
  {
    id: 43,
    name: "Toscca",
    imageUrl: "/Toscca.png",
    websiteUrl: "https://www.toscca.com",
    categories: ["madeiras"]
  },
  {
    id: 44,
    name: "Delabie",
    imageUrl: "/Delabie.png",
    websiteUrl: "https://www.delabie.pt",
    categories: ["sanitarios"]
  },
  {
    id: 45,
    name: "OLI",
    imageUrl: "/Oli.png",
    websiteUrl: "https://www.oli-world.com/pt/",
    categories: ["sanitarios"]
  },
  {
    id: 46,
    name: "Menacho",
    imageUrl: "/Menacho.png",
    websiteUrl: "https://menacho.com",
    categories: ["sanitarios"]
  },
  {
    id: 47,
    name: "Kitbanho",
    imageUrl: "/Kitbanho.png",
    websiteUrl: "https://kitbanho.com/pt",
    categories: ["sanitarios"]
  },
  {
    id: 48,
    name: "Vulcano",
    imageUrl: "/Vulcano.jpg",
    websiteUrl: "https://www.vulcano.pt/inicio/",
    categories: ["aquecimento"]
  },
  {
    id: 49,
    name: "Jointec",
    imageUrl: "/Jointec.jpg",
    websiteUrl: "https://www.jointec.pt",
    categories: ["drogaria"]
  },
  {
    id: 50,
    name: "Tuozi",
    imageUrl: "/Tuozi.webp",
    websiteUrl: "https://tuozi.pt",
    categories: ["jardim"]
  },
  {
    id: 51,
    name: "H-DUO",
    imageUrl: "/Hduo.png",
    websiteUrl: "https://www.h-duo.com",
    categories: ["sanitarios"]
  },
  {
    id: 52,
    name: "Valadares",
    imageUrl: "/Valadares.png",
    websiteUrl: "https://www.archvaladares.com",
    categories: ["sanitarios"]
  },
  {
    id: 53,
    name: "Showerbox",
    imageUrl: "/Showerbox.jpg",
    websiteUrl: "https://showerbox.pt",
    categories: ["sanitarios"]
  },
  {
    id: 54,
    name: "Aquassent",
    imageUrl: "/Aquassent.jpg",
    websiteUrl: "https://aquassent.es",
    categories: ["sanitarios"]
  },
  {
    id: 55,
    name: "W7",
    imageUrl: "/W7.png",
    websiteUrl: "https://w7.pt",
    categories: ["sanitarios"]
  },
  {
    id: 56,
    name: "Equilibrio Positivo",
    imageUrl: "/Equilibrio.jpg",
    websiteUrl: "https://eqpositivo.pt",
    categories: ["sanitarios"]
  },
  {
    id: 57,
    name: "A. J. Nogueira",
    imageUrl: "/Aj.jpg",
    websiteUrl: "https://www.ajnogueira.com/ajn/",
    categories: ["sanitarios"]
  },
  {
    id: 58,
    name: "JNF",
    imageUrl: "/Jnf.webp",
    websiteUrl: "https://jnf.pt/pt",
    categories: ["drogaria"]
  },
  {
    id: 59,
    name: "Topcer",
    imageUrl: "/Topcer.jpg",
    websiteUrl: "https://www.topcer.com/index.php",
    categories: ["ceramicos"]
  },
  {
    id: 60,
    name: "Italbox",
    imageUrl: "/Italbox.png",
    websiteUrl: "https://italbox.pt/pt",
    categories: ["sanitarios"]
  },
  {
    id: 61,
    name: "Coelho da Silva",
    imageUrl: "/Cs.jpg",
    websiteUrl: "https://www.coelhodasilva.com",
    categories: ["blocos-tijolos"]
  },
  {
    id: 62,
    name: "Umbelino Monteiro",
    imageUrl: "/Jumb.png",
    websiteUrl: "https://www.umbelino.pt/pt/home/",
    categories: ["blocos-tijolos"]
  },
  {
    id: 63,
    name: "Cerâmica Sotelha",
    imageUrl: "/Sotelha.png",
    websiteUrl: "https://www.sotelha.pt",
    categories: ["blocos-tijolos"]
  },
  {
    id: 64,
    name: "Spral",
    imageUrl: "/Spral.png",
    websiteUrl: "https://www.spral.pt",
    categories: ["blocos-tijolos"]
  },
  {
    id: 65,
    name: "Wurth",
    imageUrl: "/Wurth.png",
    websiteUrl: "https://eshop.wurth.pt/pt/PT/EUR/",
    categories: ["drogaria"]
  },
  {
    id: 66,
    name: "SPAX",
    imageUrl: "/Spax.png",
    websiteUrl: "https://www.spax.com/gb-en.html",
    categories: ["drogaria"]
  },
  {
    id: 67,
    name: "DeWalt",
    imageUrl: "/DeWalt.png",
    websiteUrl: "https://www.dewalt.pt",
    categories: ["drogaria"]
  },
  {
    id: 68,
    name: "Bosch",
    imageUrl: "/Bosch.png",
    websiteUrl: "https://www.bosch.pt",
    categories: ["drogaria"]
  },
  {
    id: 69,
    name: "Stanley",
    imageUrl: "/Stanley.png",
    websiteUrl: "https://www.stanleyworks.pt",
    categories: ["drogaria"]
  },
  {
    id: 70,
    name: "Concretex",
    imageUrl: "/Concretex.png",
    websiteUrl: "https://www.concretex.pt",
    categories: ["blocos-tijolos"]
  },
  {
    id: 71,
    name: "Novus Cover",
    imageUrl: "/Novus.webp",
    websiteUrl: "https://www.novuscover.com",
    categories: ["madeiras"]
  },
  {
    id: 72,
    name: "Skuba",
    imageUrl: "/Skuba.png",
    websiteUrl: "https://www.stanleyworks.pt",
    categories: ["madeiras"]
  },
  {
    id: 73,
    name: "Arkitek",
    imageUrl: "/Arkitek.png",
    websiteUrl: "https://arkitek.pt",
    categories: ["madeiras"]
  },
  {
    id: 74,
    name: "Globaldis",
    imageUrl: "/Globaldis.png",
    websiteUrl: "https://www.globaldis.pt/pt",
    categories: ["madeiras"]
  },
    {
    id: 75,
    name: "Amop",
    imageUrl: "/amop.png",
    websiteUrl: "https://www.grupoamop.com",
    categories: ["ceramicos", "jardim"]
  },
  {
    id: 76,
    name: "Macel",
    imageUrl: "/Macel.png",
    websiteUrl: "https://macel.pt",
    categories: ["ceramicos", "jardim"]
  }
];

const Catalog: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Check for category parameter in URL on component mount
  useEffect(() => {
    const categoryParam = searchParams.get('categoria');
    if (categoryParam && productCategories.find(cat => cat.id === categoryParam)) {
      setSelectedCategory(categoryParam);
      // Keep filters closed by default - user can open if needed
      setShowFilters(false);
      // Remove the parameter from URL after setting the filter
      setSearchParams({});
    }
  }, [searchParams, setSearchParams]);

  // Filter brands based on search term and category
  const filteredBrands = useMemo(() => {
    const sortedBrands = [...brands].sort((a, b) =>
      a.name.localeCompare(b.name, 'pt', { sensitivity: 'base' })
    );
    
    let filtered = sortedBrands;
    
    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(brand =>
        brand.name.toLowerCase().includes(searchLower) ||
        (brand.description || '').toLowerCase().includes(searchLower)
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(brand =>
        brand.categories.includes(selectedCategory)
      );
    }
    
    return filtered;
  }, [searchTerm, selectedCategory]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
  };

  const selectedCategoryName = selectedCategory 
    ? productCategories.find(cat => cat.id === selectedCategory)?.name 
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24">
        <section className="section-padding">
          <div className="container-custom">
            {/* Desktop Layout */}
            <div className="hidden md:block">
              <div className="flex justify-between items-start mb-8">
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Catálogo de Marcas</h1>
                  <p className="text-lg text-gray-600 max-w-3xl">
                    Descubra a nossa seleção completa de marcas de referência no mercado da construção.
                    Cada marca foi cuidadosamente escolhida para garantir a máxima qualidade e satisfação dos nossos clientes.
                  </p>
                </div>

                {/* Search and Filter Controls - positioned at the top right */}
                <div className="flex items-start gap-3 ml-8">
                  {/* Search Box - smaller and positioned to the right */}
                  <div className="w-64">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Pesquisar marcas..."
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D95B29] focus:border-[#D95B29] shadow-sm"
                    />
                  </div>

                  {/* Category Filter Toggle - Orange button with just icon */}
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center justify-center w-10 h-10 bg-[#D95B29] text-white rounded-md hover:bg-[#C24D22] transition-colors shadow-sm"
                    title="Filtrar por Categoria"
                  >
                    <Filter className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="block md:hidden">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-navy-900 mb-6">Catálogo de Marcas</h1>
                <p className="text-lg text-gray-600 mb-6">
                  Descubra a nossa seleção completa de marcas de referência no mercado da construção.
                  Cada marca foi cuidadosamente escolhida para garantir a máxima qualidade e satisfação dos nossos clientes.
                </p>

                {/* Search and Filter Controls - below text on mobile */}
                <div className="flex items-center gap-3">
                  {/* Search Box */}
                  <div className="flex-1">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Pesquisar marcas..."
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D95B29] focus:border-[#D95B29] shadow-sm"
                    />
                  </div>

                  {/* Category Filter Toggle - Orange button with just icon */}
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center justify-center w-10 h-10 bg-[#D95B29] text-white rounded-md hover:bg-[#C24D22] transition-colors shadow-sm"
                    title="Filtrar por Categoria"
                  >
                    <Filter className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            {showFilters && (
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-navy-800">Categorias de Produtos</h3>
                  {/* Clear Filters inside the menu */}
                  {(searchTerm || selectedCategory) && (
                    <button
                      onClick={clearFilters}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors text-sm"
                    >
                      Limpar Filtros
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {productCategories.map((category) => {
                    const IconComponent = category.icon;
                    const isSelected = selectedCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(isSelected ? "" : category.id)}
                        className={`flex items-center gap-2 p-3 rounded-lg border transition-all duration-200 text-left ${
                          isSelected
                            ? 'bg-[#D95B29] text-white border-[#D95B29]'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-[#D95B29] hover:text-[#D95B29]'
                        }`}
                      >
                        <IconComponent className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm font-medium">{category.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Results Info */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-gray-600">
                  Mostrando {filteredBrands.length} {filteredBrands.length === 1 ? 'marca' : 'marcas'}
                  {searchTerm && ` para a pesquisa "${searchTerm}"`}
                  {selectedCategoryName && ` na categoria "${selectedCategoryName}"`}
                </p>
                {(searchTerm || selectedCategory) && (
                  <p className="text-sm text-gray-500 mt-1">
                    Total de marcas disponíveis: {brands.length}
                  </p>
                )}
              </div>
            </div>

            {/* No Results Message */}
            {filteredBrands.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">
                  Nenhuma marca encontrada com os filtros aplicados.
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-primary"
                >
                  Limpar Filtros
                </button>
              </div>
            )}

            {/* Brands Grid */}
            {filteredBrands.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBrands.map((brand) => (
                  <div 
                    key={brand.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    onMouseEnter={() => setHoveredId(brand.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <a 
                      href={brand.websiteUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="h-48 bg-white-100 p-4 flex items-center justify-center relative">
                        <img
                          src={brand.imageUrl}
                          alt={brand.name}
                          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${hoveredId === brand.id ? 'opacity-100' : 'opacity-0'}`}>
                          <span className="text-white font-medium">Visitar Website</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h2 className="text-2xl font-semibold text-navy-900 mb-2">{brand.name}</h2>
                        {brand.description && <p className="text-gray-600">{brand.description}</p>}
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Catalog;
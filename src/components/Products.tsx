import React from 'react';
import { Grid3X3, Droplets, Mountain, Building, Home, Paintbrush, Shield, TreePine, Flame, Flower } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProductCategory {
  id: number;
  title: string;
  icon: React.ReactNode;
  items: string[];
  categoryId: string; // ID for filtering in catalog
}

const productCategories: ProductCategory[] = [
  {
    id: 1,
    title: "Cerâmicos",
    icon: <Grid3X3 className="w-8 h-8 text-[#D95B29]" />,
    categoryId: "ceramicos",
    items: [
      "Pavimentos Cerâmicos",
      "Revestimentos",
      "Pedras Naturais"
    ]
  },
  {
    id: 2,
    title: "Sanitários",
    icon: <Droplets className="w-8 h-8 text-[#D95B29]" />,
    categoryId: "sanitarios",
    items: [
      "Sanitas e bidés",
      "Bases de duche",
      "Móveis para casas de banho",
      "Lavatórios",
      "Espelhos",
      "Resguardos"
    ]
  },
  {
    id: 3,
    title: "Cimentos e argamassas",
    icon: <Mountain className="w-8 h-8 text-[#D95B29]" />,
    categoryId: "cimentos-argamassas",
    items: [
      "Areias e agregados",
      "Argamassas",
      "Cimentos",
      "Gessos",
      "Placas de gesso e acessórios",
      "Colas e juntas"
    ]
  },
  {
    id: 4,
    title: "Blocos, tijolos e telhas",
    icon: <Building className="w-8 h-8 text-[#D95B29]" />,
    categoryId: "blocos-tijolos",
    items: [
      "Tijolo cerâmico",
      "Blocos de betão/ térmico",
      "Pavê e lancil",
      "Isoargila",
      "Vigotas e abobadilhas",
      "Telhas de cerâmica",
      "Telhas de fibrocimento",
      "Painel de sanduíche"
    ]
  },
  {
    id: 5,
    title: "Janelas de Sótão",
    icon: <Home className="w-8 h-8 text-[#D95B29]" />,
    categoryId: "janelas-sotao",
    items: [
      "Janelas",
      "Rufos",
      "Cortinas",
      "Estores para janelas"
    ]
  },
  {
    id: 6,
    title: "Drogaria",
    icon: <Paintbrush className="w-8 h-8 text-[#D95B29]" />,
    categoryId: "drogaria",
    items: [
      "Tintas (afinação de cor)",
      "Acessórios de pichelaria",
      "Acessórios de eletricidade",
      "Ferramentas elétricas e manuais",
      "Parafusos e pregos",
      "Redes, arames e acessórios"
    ]
  },
  {
    id: 7,
    title: "Impermeabilização e isolamentos",
    icon: <Shield className="w-8 h-8 text-[#D95B29]" />,
    categoryId: "impermeabilizacao",
    items: [
      "Impermeabilização",
      "Isolamento térmico",
      "Isolamento acústico",
      "Caixas de estore c/ isolamento"
    ]
  },
  {
    id: 8,
    title: "Madeiras e revestimentos de fachadas",
    icon: <TreePine className="w-8 h-8 text-[#D95B29]" />,
    categoryId: "madeiras",
    items: [
      "Painéis de cofragem",
      "Pavimentos vinílicos",
      "Pavimentos de madeira",
      "Pavimentos flutuantes"
    ]
  },
  {
    id: 9,
    title: "Aquecimento e climatização",
    icon: <Flame className="w-8 h-8 text-[#D95B29]" />,
    categoryId: "aquecimento",
    items: [
      "Ar condicionado",
      "Salamandras pellets/ lenha",
      "Recuperadores pellets/lenha",
      "Bombas de calor",
      "Esquentadores/cilindros"
    ]
  },
  {
    id: 10,
    title: "Jardim",
    icon: <Flower className="w-8 h-8 text-[#D95B29]" />,
    categoryId: "jardim",
    items: [
      "Vasos de cimento",
      "Estátuas de cimento",
      "Churrasqueiras",
      "Relva artificial",
      "Substratos vegetais para jardim"
    ]
  }
];

const Products: React.FC = () => {
  const titleRef = useScrollAnimation();
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/catalogo?categoria=${categoryId}`);
    window.scrollTo(0, 0);
  };

  return (
    <section id="produtos" className="section-padding bg-white">
      <div className="container-custom">
        <h2 ref={titleRef} className="section-title mb-12">Os Nossos Produtos</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => {
            const ref = useScrollAnimation({ threshold: 0.1 });
            return (
              <div 
                key={category.id} 
                ref={ref}
                className={`card p-6 animate-on-scroll delay-${index * 100} group cursor-pointer hover:shadow-xl transition-all duration-300`}
                onClick={() => handleCategoryClick(category.categoryId)}
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-lg font-semibold text-navy-800 group-hover:text-[#D95B29] transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-2">
                  {category.items.map((item, index) => (
                    <li key={index} className="text-gray-600 group-hover:text-gray-700 transition-colors">
                      • {item}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 text-sm text-[#D95B29] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver marcas desta categoria →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
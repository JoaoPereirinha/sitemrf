import React from 'react';
import { Building2, Users, Award, Clock } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="sobre-nos" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title mb-12">Sobre Nós</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg leading-relaxed">
              Desde 1988, a <strong>Mário Ribeiro e Filhos, LDA</strong> tem sido a referência em materiais de construção na região. Fundada por Mário Ribeiro, a empresa cresceu com os valores de qualidade, confiança e excelência no atendimento.
            </p>
            <p className="text-lg leading-relaxed">
              Hoje, gerida pela segunda geração da família, continuamos comprometidos em fornecer os melhores produtos e soluções para todos os tipos de projetos de construção, desde pequenas reformas até grandes empreendimentos.
            </p>
            <p className="text-lg leading-relaxed">
              A nossa equipa de profissionais qualificados está sempre pronta para oferecer o melhor aconselhamento técnico, garantindo que encontre exatamente o que precisa para o seu projeto.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="card p-6 group hover:-translate-y-2 transition-transform duration-300">
              <Building2 className="w-12 h-12 text-[#D95B29] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 text-[#D95B29]">As Nossas Instalações</h3>
              <p className="text-gray-600">400m² de exposição, 900m² de drogaria e 6000m² de armazém para melhor servir os nossos clientes.</p>
            </div>
            
            <div className="card p-6 group hover:-translate-y-2 transition-transform duration-300">
              <Users className="w-12 h-12 text-[#D95B29] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 text-[#D95B29]">Equipa Qualificada</h3>
              <p className="text-gray-600">Profissionais com experiência no sector da construção.</p>
            </div>
            
            <div className="card p-6 group hover:-translate-y-2 transition-transform duration-300">
              <Award className="w-12 h-12 text-[#D95B29] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 text-[#D95B29]">Qualidade Garantida</h3>
              <p className="text-gray-600">Trabalhamos apenas com as melhores marcas e produtos certificados.</p>
            </div>
            
            <div className="card p-6 group hover:-translate-y-2 transition-transform duration-300">
              <Clock className="w-12 h-12 text-[#D95B29] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 text-[#D95B29]">35+ Anos de Experiência</h3>
              <p className="text-gray-600">Mais de três décadas dedicadas ao sector da construção.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
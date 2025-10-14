import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8">Política de Privacidade</h1>
          <h1 className="text-4xl md:text-5xl font-bold text-[#D95B29] mb-8">Política de Privacidade</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#D95B29] mb-4">1. Introdução</h2>
              <p className="text-gray-700 mb-4">
                A Mário Ribeiro e Filhos, LDA compromete-se a proteger a privacidade dos utilizadores do seu site. 
                A presente Política de Privacidade descreve como são recolhidos, utilizados e protegidos os dados pessoais fornecidos através deste site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#D95B29] mb-4">2. Dados que Recolhemos</h2>
              <p className="text-gray-700 mb-4">Podemos recolher os seguintes tipos de dados:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Nome completo</li>
                <li>Endereço de email</li>
                <li>Número de telefone</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#D95B29] mb-4">3. Finalidade da Recolha</h2>
              <p className="text-gray-700 mb-4">Os dados recolhidos destinam-se exclusivamente a responder a pedidos de contacto efetuados pelo utilizador.</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#D95B29] mb-4">4. Não Utilização de Cookies</h2>
              <p className="text-gray-700 mb-4">
                Este site não utiliza cookies para recolha de dados pessoais.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#D95B29] mb-4">5. Partilha de Dados</h2>
              <p className="text-gray-700 mb-4">Os dados fornecidos não são partilhados com terceiros, sendo utilizados apenas internamente para os fins acima descritos.</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#D95B29] mb-4">6. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Para questões relacionadas com a privacidade dos seus dados, pode contactar-nos através de:
              </p>
              <ul className="list-none pl-6 mb-4 text-gray-700">
                <li>Email: geral@mrf.pt</li>
                <li>Telefone: +351 234 799 810</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#D95B29] mb-4">7. Atualizações à Política de Privacidade</h2>
              <p className="text-gray-700 mb-4">
                Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre 
                disponível no nosso website.
              </p>
              <p className="text-gray-700">
                Última atualização: {new Date().toLocaleDateString('pt-PT')}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PrivacyPolicy;
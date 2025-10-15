import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Users, Award, Clock, MapPin, Mail, Phone, Building2, Heart, TrendingUp, Shield, Briefcase, CheckCircle } from 'lucide-react';

const Careers: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    cv: null as File | null,
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: fileInput.files ? fileInput.files[0] : null
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      alert('Por favor, aceite a política de privacidade para continuar.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'cv' && value !== null) {
          formDataToSend.append(key, value.toString());
        }
      });
      
      if (formData.cv) {
        formDataToSend.append('cv', formData.cv);
      }

      const response = await fetch('https://formcarry.com/s/hAMS4R44_xA', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          message: '',
          cv: null,
          privacy: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-[#D95B29]" />,
      title: "Ambiente Familiar",
      description: "Trabalhe numa empresa familiar onde cada pessoa é valorizada e respeitada."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#D95B29]" />,
      title: "Crescimento Profissional",
      description: "Oportunidades de desenvolvimento e progressão na carreira."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#D95B29]" />,
      title: "Estabilidade",
      description: "Mais de 35 anos no mercado garantem estabilidade e segurança no emprego."
    },
    {
      icon: <Users className="w-8 h-8 text-[#D95B29]" />,
      title: "Equipa Unida",
      description: "Faça parte de uma equipa experiente e colaborativa."
    }
  ];

  const openPositions = [
    {
      title: "Colaborador(a) para drogaria (Atendimento ao público)",
      type: "Full-time",
      description: "Procuramos colaborador(a) dinâmico/a para atendimento ao público na nossa drogaria.",
      requirements: [
        "Boa capacidade de comunicação e relacionamento interpessoal",
        "Simpatia e proatividade no atendimento ao cliente",
        "Conhecimentos de materiais de construção (preferencial)"
      ],
      link: "/carreiras/drogaria"
    },
    {
      title: "Operador/a de Armazém",
      type: "Full-time",
      description: "Necessitamos de operador/a de armazém para gestão de stock e preparação de encomendas.",
      requirements: [
        "Experiência em gestão de armazém",
        "Carta de empilhador (preferencial)",
        "Capacidade de organização"
      ],
      link: "/carreiras/armazem"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24">
        {/* Why Work With Us */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="section-title mb-12 text-center">Porquê Trabalhar Connosco?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="card p-6 text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-navy-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-navy-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-navy-800 text-center">O Que Oferecemos</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D95B29] rounded-full"></div>
                    <span>Contrato de trabalho estável</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D95B29] rounded-full"></div>
                    <span>Formação contínua</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D95B29] rounded-full"></div>
                    <span>Ambiente de trabalho positivo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D95B29] rounded-full"></div>
                    <span>Horário de trabalho equilibrado</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D95B29] rounded-full"></div>
                    <span>Oportunidades de crescimento</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D95B29] rounded-full"></div>
                    <span>Reconhecimento do trabalho</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D95B29] rounded-full"></div>
                    <span>Proximidade com a gestão</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D95B29] rounded-full"></div>
                    <span>Localização conveniente</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title mb-4 text-center">Vagas Disponíveis</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Estamos atualmente à procura de profissionais para as seguintes posições
            </p>

            <div className="max-w-4xl mx-auto space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-6 h-6 text-[#D95B29]" />
                      <div>
                        <h3 className="text-xl font-semibold text-navy-800">{position.title}</h3>
                        <span className="text-sm text-gray-600">{position.type}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{position.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-navy-800 mb-2">Requisitos:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => navigate(position.link)}
                    className="btn-primary"
                  >
                    Ver Detalhes e Candidatar-me
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spontaneous Application Form */}
        <section id="application-form" className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="section-title">Candidaturas Espontâneas</h2>
                <p className="text-lg text-gray-600 mt-4">
                  Não encontrou a posição ideal? Envie-nos a sua candidatura espontânea.
                  Estamos sempre à procura de talentos para a nossa equipa.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-6 text-navy-800">Informações de Contacto</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="w-6 h-6 text-[#D95B29] mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-navy-800 mb-1">Morada</h4>
                          <p className="text-gray-700">Rua Principal 382<br />3840-265 Gafanha do Areão, Portugal</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="w-6 h-6 text-[#D95B29] mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-navy-800 mb-1">Telefone</h4>
                          <p className="text-gray-700">+351 234 799 810</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Mail className="w-6 h-6 text-[#D95B29] mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-navy-800 mb-1">Email</h4>
                          <p className="text-gray-700">geral@mrf.pt</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="w-6 h-6 text-[#D95B29] mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-navy-800 mb-1">Horário</h4>
                          <p className="text-gray-700">
                            Segunda a Sexta: 8:30 - 12:30 & 14:00 - 19:00<br />
                            Sábado: 8:30 - 12:30
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-navy-800 mb-3">Dica</h4>
                    <p className="text-gray-600 text-sm">
                      Pode também entregar o seu CV pessoalmente na nossa loja durante o horário de funcionamento. 
                      A nossa equipa terá todo o gosto em conhecê-lo!
                    </p>
                  </div>
                </div>

                {/* Application Form */}
                <div>
                  <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-6 text-navy-800">Formulário de Candidatura Espontânea</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D95B29] focus:border-[#D95B29]"
                          placeholder="O seu nome completo"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D95B29] focus:border-[#D95B29]"
                          placeholder="O seu email"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D95B29] focus:border-[#D95B29]"
                          placeholder="O seu telefone"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Área de Interesse *</label>
                        <input
                          type="text"
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D95B29] focus:border-[#D95B29]"
                          placeholder="Ex: Vendas, Armazém, Administrativo, etc."
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Experiência Profissional</label>
                        <select
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D95B29] focus:border-[#D95B29]"
                        >
                          <option value="">Selecione a sua experiência</option>
                          <option value="sem-experiencia">Sem experiência</option>
                          <option value="1-2-anos">1-2 anos</option>
                          <option value="3-5-anos">3-5 anos</option>
                          <option value="5-10-anos">5-10 anos</option>
                          <option value="mais-10-anos">Mais de 10 anos</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">Curriculum Vitae</label>
                        <input
                          type="file"
                          id="cv"
                          name="cv"
                          onChange={handleInputChange}
                          accept=".pdf,.doc,.docx"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D95B29] focus:border-[#D95B29]"
                        />
                        <p className="text-xs text-gray-500 mt-1">Formatos aceites: PDF, DOC, DOCX (máx. 5MB)</p>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Mensagem <span className="text-xs text-gray-500">(opcional)</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D95B29] focus:border-[#D95B29]"
                          placeholder="Conte-nos um pouco sobre si e porque quer trabalhar connosco..."
                        ></textarea>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          id="privacy"
                          name="privacy"
                          type="checkbox"
                          checked={formData.privacy}
                          onChange={handleInputChange}
                          required
                          className="h-4 w-4 text-[#D95B29] focus:ring-[#D95B29] border-gray-300 rounded"
                        />
                        <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                          Concordo com a Política de Privacidade *
                        </label>
                      </div>
                      
                      <div>
                        <button 
                          type="submit" 
                          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'A enviar candidatura...' : 'Enviar Candidatura'}
                        </button>
                        
                        {submitStatus === 'success' && (
                          <p className="mt-4 text-green-600 text-sm">Candidatura enviada com sucesso! Entraremos em contacto brevemente.</p>
                        )}
                        
                        {submitStatus === 'error' && (
                          <p className="mt-4 text-red-600 text-sm">Ocorreu um erro. Por favor, tente novamente ou contacte-nos diretamente.</p>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Careers;
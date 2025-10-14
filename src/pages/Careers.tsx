import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Users, Award, Clock, MapPin, Mail, Phone, Building2, Heart, TrendingUp, Shield } from 'lucide-react';

const Careers: React.FC = () => {
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

  const positions = [
    "Vendedor/a",
    "Técnico/a Comercial",
    "Operador/a de Armazém",
    "Administrativo/a",
    "Motorista",
    "Outra posição"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-[#D95B29] text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Junte-se à Nossa Equipa
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Há mais de 35 anos que construímos o futuro com as melhores pessoas. 
                Venha fazer parte da família Mário Ribeiro & Filhos.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#D95B29]" />
                  <span>Empresa familiar desde 1988</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#D95B29]" />
                  <span>Equipa experiente</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#D95B29]" />
                  <span>Líder no sector</span>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  <h3 className="text-xl font-semibold mb-3 text-[#D95B29]">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-orange-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#D95B29] text-center">O Que Oferecemos</h3>
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

        {/* Application Form */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="section-title">Candidate-se Agora</h2>
                <p className="text-lg text-gray-600 mt-4">
                  Envie-nos a sua candidatura e faça parte da nossa equipa de sucesso.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-6 text-[#D95B29]">Informações de Contacto</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="w-6 h-6 text-[#D95B29] mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-[#D95B29] mb-1">Morada</h4>
                          <p className="text-gray-700">Rua Principal 382<br />3840-265 Gafanha do Areão, Portugal</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="w-6 h-6 text-[#D95B29] mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-[#D95B29] mb-1">Telefone</h4>
                          <p className="text-gray-700">+351 234 799 810</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Mail className="w-6 h-6 text-[#D95B29] mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-[#D95B29] mb-1">Email</h4>
                          <p className="text-gray-700">geral@mrf.pt</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="w-6 h-6 text-[#D95B29] mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-[#D95B29] mb-1">Horário</h4>
                          <p className="text-gray-700">
                            Segunda a Sexta: 8:30 - 12:30 & 14:00 - 19:00<br />
                            Sábado: 8:30 - 12:30
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-[#D95B29] mb-3">Dica</h4>
                    <p className="text-gray-600 text-sm">
                      Pode também entregar o seu CV pessoalmente na nossa loja durante o horário de funcionamento. 
                      A nossa equipa terá todo o gosto em conhecê-lo!
                    </p>
                  </div>
                </div>

                {/* Application Form */}
                <div>
                  <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-6 text-[#D95B29]">Formulário de Candidatura</h3>
                    
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
                        <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Posição de Interesse *</label>
                        <select
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D95B29] focus:border-[#D95B29]"
                        >
                          <option value="">Selecione uma posição</option>
                          {positions.map((position) => (
                            <option key={position} value={position}>{position}</option>
                          ))}
                        </select>
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
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
      title: "Colaborador de Armazém",
      type: "Full-time",
      description: "Necessitamos de colaborador de armazém para gestão de stock e preparação de encomendas.",
      requirements: [
        "Experiência em gestão de armazém",
        "Carta de empilhador (preferencial)",
        "Capacidade de organização"
      ],
      link: "/carreiras/armazem"
    }
  ];

  const spontaneousPositions = [
    {
      title: "Atendimento ao Cliente - Exposição",
      type: "Candidatura Espontânea",
      description: "Área de trabalho focada em atendimento especializado na nossa exposição de materiais.",
      requirements: [
        "Gosto por design e decoração",
        "Boa apresentação",
        "Capacidade de comunicação"
      ],
      link: "/carreiras/exposicao"
    },
    {
      title: "Motorista",
      type: "Candidatura Espontânea",
      description: "Oportunidade para profissionais com carta de condução de pesados.",
      requirements: [
        "Carta de condução categoria C",
        "Experiência em distribuição",
        "Conhecimento da região"
      ],
      link: "/carreiras/motorista"
    },
    {
      title: "Administrativo",
      type: "Candidatura Espontânea",
      description: "Funções de apoio administrativo e gestão de processos internos.",
      requirements: [
        "Conhecimentos de MS Office",
        "Boa capacidade de organização",
        "Experiência em funções similares"
      ],
      link: "/carreiras/administrativo"
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

        {/* Spontaneous Applications */}
        <section id="application-form" className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Outras Oportunidades</h2>
              <p className="text-lg text-gray-600 mt-4">
                Explore outras áreas de trabalho na nossa empresa. Candidate-se à posição que mais se adequa ao seu perfil.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {spontaneousPositions.map((position, index) => (
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

        {/* Contact Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="section-title">Informações de Contacto</h2>
                <p className="text-lg text-gray-600 mt-4">
                  Prefere entregar o seu CV pessoalmente? Visite-nos durante o nosso horário de funcionamento.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#D95B29] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-800 mb-1">Morada</h4>
                    <p className="text-gray-700">Rua Principal 455, Gaf. do Areão<br />3840-265 Gaf. da Boa-Hora Portugal</p>
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
                    <p className="text-gray-700">marioribeiro@mrf.pt</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center bg-navy-50 p-6 rounded-lg">
                <Clock className="w-8 h-8 text-[#D95B29] mx-auto mb-3" />
                <h4 className="font-semibold text-navy-800 mb-2">Horário de Funcionamento</h4>
                <p className="text-gray-700">
                  Segunda a Sexta: 8:30 - 12:30 & 14:00 - 19:00<br />
                  Sábado: 8:30 - 12:30
                </p>
                <p className="text-gray-600 text-sm mt-4">
                  Pode entregar o seu CV pessoalmente na nossa loja durante o horário de funcionamento.
                </p>
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
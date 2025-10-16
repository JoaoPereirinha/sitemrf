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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-r from-navy-900 to-navy-800 text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Junte-se à Nossa Equipa</h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-200 max-w-3xl mx-auto">
              Faça parte de uma história de sucesso com mais de 35 anos
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Na Mário Ribeiro e Filhos valorizamos cada membro da nossa equipa. Oferecemos um ambiente de trabalho familiar, oportunidades de crescimento e a estabilidade de uma empresa consolidada.
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="section-title mb-4 text-center">Porquê Trabalhar Connosco?</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Descubra os benefícios de fazer parte da nossa equipa
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-8 text-center group hover:border-[#D95B29] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-navy-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-navy-50 to-gray-50 rounded-2xl p-10 shadow-lg">
              <h3 className="text-3xl font-bold mb-8 text-navy-800 text-center">O Que Oferecemos</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 group">
                    <CheckCircle className="w-6 h-6 text-[#D95B29] flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">Contrato de trabalho estável</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <CheckCircle className="w-6 h-6 text-[#D95B29] flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">Formação contínua</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <CheckCircle className="w-6 h-6 text-[#D95B29] flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">Ambiente de trabalho positivo</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <CheckCircle className="w-6 h-6 text-[#D95B29] flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">Horário de trabalho equilibrado</span>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 group">
                    <CheckCircle className="w-6 h-6 text-[#D95B29] flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">Oportunidades de crescimento</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <CheckCircle className="w-6 h-6 text-[#D95B29] flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">Reconhecimento do trabalho</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <CheckCircle className="w-6 h-6 text-[#D95B29] flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">Proximidade com a gestão</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <CheckCircle className="w-6 h-6 text-[#D95B29] flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">Localização conveniente</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="inline-block bg-[#D95B29] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ESTAMOS A CONTRATAR
              </div>
              <h2 className="section-title mb-4">Vagas Disponíveis</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Estamos atualmente à procura de profissionais para as seguintes posições
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#D95B29] hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-orange-50 rounded-xl group-hover:bg-[#D95B29] transition-colors">
                        <Briefcase className="w-7 h-7 text-[#D95B29] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-navy-800 mb-1">{position.title}</h3>
                        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">{position.type}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg mb-6">{position.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-navy-800 mb-3 text-lg">Requisitos:</h4>
                    <ul className="space-y-3">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-3 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => navigate(position.link)}
                    className="btn-primary w-full md:w-auto text-center"
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
              <div className="inline-block bg-navy-800 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                CANDIDATURA ESPONTÂNEA
              </div>
              <h2 className="section-title">Outras Oportunidades</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Explore outras áreas de trabalho na nossa empresa. Candidate-se à posição que mais se adequa ao seu perfil.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {spontaneousPositions.map((position, index) => (
                <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#D95B29] hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-navy-50 rounded-xl group-hover:bg-navy-800 transition-colors">
                        <Briefcase className="w-7 h-7 text-navy-800 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-navy-800 mb-1">{position.title}</h3>
                        <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">{position.type}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg mb-6">{position.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-navy-800 mb-3 text-lg">Requisitos:</h4>
                    <ul className="space-y-3">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-3 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => navigate(position.link)}
                    className="btn-primary w-full md:w-auto text-center"
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
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="section-title">Informações de Contacto</h2>
                <p className="text-lg text-gray-600 mt-4">
                  Prefere entregar o seu CV pessoalmente? Visite-nos durante o nosso horário de funcionamento.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#D95B29] transition-all duration-300">
                  <MapPin className="w-8 h-8 text-[#D95B29] mb-3" />
                  <h4 className="font-bold text-navy-800 mb-2 text-lg">Morada</h4>
                  <p className="text-gray-700">Rua Principal 455, Gaf. do Areão<br />3840-265 Gaf. da Boa-Hora Portugal</p>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#D95B29] transition-all duration-300">
                  <Phone className="w-8 h-8 text-[#D95B29] mb-3" />
                  <h4 className="font-bold text-navy-800 mb-2 text-lg">Telefone</h4>
                  <p className="text-gray-700">+351 234 799 810</p>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#D95B29] transition-all duration-300">
                  <Mail className="w-8 h-8 text-[#D95B29] mb-3" />
                  <h4 className="font-bold text-navy-800 mb-2 text-lg">Email</h4>
                  <p className="text-gray-700">marioribeiro@mrf.pt</p>
                </div>
              </div>

              <div className="mt-8 text-center bg-gradient-to-br from-navy-50 to-gray-50 p-8 rounded-2xl border-2 border-gray-100">
                <Clock className="w-10 h-10 text-[#D95B29] mx-auto mb-4" />
                <h4 className="font-bold text-navy-800 mb-4 text-xl">Horário de Funcionamento</h4>
                <p className="text-gray-700 text-lg mb-2">
                  Segunda a Sexta: 8:30 - 12:30 & 14:00 - 19:00<br />
                  Sábado: 8:30 - 12:30
                </p>
                <p className="text-gray-600 mt-6 bg-white p-4 rounded-lg">
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
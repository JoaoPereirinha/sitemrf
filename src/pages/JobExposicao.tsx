import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { ArrowLeft, CheckCircle, Clock, MapPin, Briefcase, Users, Award, TrendingUp } from 'lucide-react';

const JobExposicao: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Atendimento ao Cliente - Exposição',
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
          position: 'Atendimento ao Cliente - Exposição',
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24">
        <section className="section-padding bg-white">
          <div className="container-custom max-w-6xl">
            <button
              onClick={() => navigate('/carreiras')}
              className="flex items-center gap-2 text-[#D95B29] hover:text-[#1a365d] transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar às Vagas
            </button>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h1 className="text-4xl font-bold text-navy-800 mb-4">
                    Atendimento ao Cliente - Exposição
                  </h1>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-[#D95B29]" />
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#D95B29]" />
                      <span>Gafanha do Areão</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#D95B29]" />
                      <span>Candidatura Espontânea</span>
                    </div>
                  </div>
                </div>

                <div className="bg-navy-50 rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-navy-800 mb-4">Sobre a Posição</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Procuramos colaborador(a) dinâmico(a) e com sentido estético para integrar a equipa de atendimento
                    na nossa área de exposição. Esta posição combina vendas com consultoria especializada em materiais de construção.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    O(a) candidato(a) ideal terá gosto por design e decoração, excelentes competências de comunicação
                    e capacidade para ajudar os clientes a visualizar e concretizar os seus projetos.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-navy-800 mb-4">Responsabilidades</h2>
                  <ul className="space-y-3">
                    {[
                      'Atendimento personalizado aos clientes na área de exposição',
                      'Apresentação e demonstração de produtos expostos',
                      'Aconselhamento sobre escolhas de materiais e acabamentos',
                      'Elaboração de orçamentos e propostas comerciais',
                      'Acompanhamento de projetos desde a conceção até à venda',
                      'Manutenção da organização e apresentação da exposição',
                      'Gestão de amostras e catálogos',
                      'Identificação de novas oportunidades de venda'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-navy-800 mb-4">Requisitos</h2>
                  <ul className="space-y-3">
                    {[
                      'Excelente apresentação e capacidade de comunicação',
                      'Gosto por design, decoração e materiais de construção',
                      'Experiência em vendas ou atendimento ao cliente (preferencial)',
                      'Criatividade e sentido estético apurado',
                      'Capacidade de trabalhar por objetivos',
                      'Proatividade e orientação para resultados',
                      'Conhecimentos de informática na ótica do utilizador'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#D95B29] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-navy-800 mb-4">O Que Oferecemos</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: <Award className="w-6 h-6" />, text: 'Contrato de trabalho estável' },
                      { icon: <TrendingUp className="w-6 h-6" />, text: 'Comissões sobre vendas' },
                      { icon: <Users className="w-6 h-6" />, text: 'Ambiente de trabalho criativo' },
                      { icon: <Clock className="w-6 h-6" />, text: 'Horário de trabalho equilibrado' },
                      { icon: <Award className="w-6 h-6" />, text: 'Formação especializada' },
                      { icon: <Users className="w-6 h-6" />, text: 'Oportunidades de crescimento' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                        <div className="text-[#D95B29]">{item.icon}</div>
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                  <h3 className="text-xl font-semibold text-navy-800 mb-6">Candidate-se a esta Vaga</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome Completo *
                      </label>
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
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
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
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone *
                      </label>
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
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                        Experiência Profissional
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D95B29] focus:border-[#D95B29]"
                      >
                        <option value="">Selecione</option>
                        <option value="sem-experiencia">Sem experiência</option>
                        <option value="1-2-anos">1-2 anos</option>
                        <option value="3-5-anos">3-5 anos</option>
                        <option value="5-10-anos">5-10 anos</option>
                        <option value="mais-10-anos">Mais de 10 anos</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
                        Curriculum Vitae
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="cv"
                          name="cv"
                          onChange={handleInputChange}
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                        />
                        <label
                          htmlFor="cv"
                          className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-md hover:border-[#D95B29] transition-colors cursor-pointer bg-gray-50 hover:bg-gray-100"
                        >
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <span className="text-sm text-gray-600">
                            {formData.cv ? formData.cv.name : 'Escolher ficheiro ou arrastar aqui'}
                          </span>
                        </label>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (máx. 5MB)</p>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D95B29] focus:border-[#D95B29]"
                        placeholder="Conte-nos sobre si..."
                      ></textarea>
                    </div>

                    <div className="flex items-start">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        checked={formData.privacy}
                        onChange={handleInputChange}
                        required
                        className="h-4 w-4 text-[#D95B29] focus:ring-[#D95B29] border-gray-300 rounded mt-1"
                      />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                        Concordo com a Política de Privacidade *
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'A enviar...' : 'Enviar Candidatura'}
                    </button>

                    {submitStatus === 'success' && (
                      <p className="text-green-600 text-sm text-center">
                        Candidatura enviada com sucesso!
                      </p>
                    )}

                    {submitStatus === 'error' && (
                      <p className="text-red-600 text-sm text-center">
                        Ocorreu um erro. Tente novamente.
                      </p>
                    )}
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

export default JobExposicao;

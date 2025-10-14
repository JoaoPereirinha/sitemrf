import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handlePrivacyClick = () => {
    window.scrollTo(0, 0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
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
      const response = await fetch('https://formcarry.com/s/hAMS4R44_xA', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
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
    <section id="contactos" className="section-padding bg-navy-50">
      <div className="container-custom">
        <h2 className="section-title mb-12">Contactos</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-up">
            <p className="text-lg">
              Estamos sempre disponíveis para ajudar. Entre em contacto connosco através dos seguintes meios ou visite-nos na nossa loja.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-[#D95B29] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#D95B29] mb-1">Morada</h3>
                  <p className="text-gray-700">Rua Principal 382<br />3840-265 Gafanha do Areão, Portugal</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-[#D95B29] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#D95B29] mb-1">Telefone</h3>
                  <div className="text-gray-700">
                    <div className="mb-2">
                      +351 234 799 810 (Salão de exposições)
                      <div className="text-xs text-gray-500">Chamada para a rede fixa nacional</div>
                    </div>
                    <div className="mb-2">
                      +351 234 799 815 (Drogaria)
                      <div className="text-xs text-gray-500">Chamada para a rede fixa nacional</div>
                    </div>
                    <div>
                      +351 967 816 713 (Contacto Móvel)
                      <div className="text-xs text-gray-500">Chamada para rede móvel nacional</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-[#D95B29] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#D95B29] mb-1">Email</h3>
                  <p className="text-gray-700">geral@mrf.pt</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-[#D95B29] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#D95B29] mb-1">Horário</h3>
                  <p className="text-gray-700">
                    Segunda a Sexta: 8:30 - 12:30 & 14:00 - 19:00<br />
                    Sábado: 8:30 - 12:30<br />
                    Domingo e Feriados: Fechado
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="font-semibold text-[#D95B29] mb-4">Siga-nos</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/p/Mário-Ribeiro-e-Filhos-Lda-100057233178577/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="p-2 bg-orange-100 rounded-full text-[#D95B29] hover:bg-orange-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/marioribeiroefilhos?igsh=Z2RsazFwcjM4N24x" target="_blank" rel="noopener noreferrer" className="p-2 bg-orange-100 rounded-full text-[#D95B29] hover:bg-orange-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-[#D95B29]">Envie-nos uma Mensagem</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D95B29] focus:border-[#D95B29]"
                    placeholder="O seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
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
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
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
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D95B29] focus:border-[#D95B29]"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="orcamento">Pedido de Orçamento</option>
                    <option value="informacao">Informação sobre Produtos</option>
                    <option value="reclamacao">Reclamação</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem <span className="text-xs text-gray-500">(máximo 500 caracteres)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={500}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D95B29] focus:border-[#D95B29]"
                    placeholder="A sua mensagem"
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
                    Concordo com a <Link to="/politica-de-privacidade" onClick={handlePrivacyClick} className="text-[#D95B29] hover:underline">Política de Privacidade</Link>
                  </label>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'A enviar...' : 'Enviar Mensagem'}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <p className="mt-4 text-green-600 text-sm">Mensagem enviada com sucesso!</p>
                  )}
                  
                  {submitStatus === 'error' && (
                    <p className="mt-4 text-red-600 text-sm">Ocorreu um erro. Por favor, tente novamente.</p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.918154668027!2d-8.77266768783136!3d40.52242987130342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23b91532d1ddfb%3A0x5f63fe88d8f5515f!2sM%C3%A1rio%20Ribeiro%20%26%20Filhos!5e1!3m2!1spt-PT!2spt!4v1748984408439!5m2!1spt-PT!2spt" 
              width="100%" 
              height="450" 
              style={{border: 0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Loja"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
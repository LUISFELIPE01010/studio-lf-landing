
import { Instagram, MessageCircle, ArrowRight, Sparkles, Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center animate-fade-in relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Último Passo para o Sucesso</span>
        </div>

        <h2 className="text-4xl md:text-7xl font-sf font-light text-white mb-8 leading-tight">
          Pronto para ter uma 
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
            landing page que impressiona
          </span>
          <br />
          e <span className="text-green-400 font-medium">vende</span>?
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-16 font-sf font-light max-w-4xl mx-auto leading-relaxed">
          Entre em contato agora e transforme sua ideia em uma página que gera resultados reais. 
          Resposta em menos de 2 horas, garantido.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <MessageCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h4 className="text-lg font-sf font-semibold text-white mb-2">Resposta Rápida</h4>
            <p className="text-gray-400 text-sm">Retorno em até 2 horas</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h4 className="text-lg font-sf font-semibold text-white mb-2">Orçamento Gratuito</h4>
            <p className="text-gray-400 text-sm">Sem compromisso</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h4 className="text-lg font-sf font-semibold text-white mb-2">Projeto Único</h4>
            <p className="text-gray-400 text-sm">100% personalizado</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="https://wa.me/5513991808329"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-5 rounded-2xl text-xl font-sf font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Chamar no WhatsApp</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="https://instagram.com/lf_ataides"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-5 rounded-2xl text-xl font-sf font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3"
          >
            <Instagram className="w-6 h-6" />
            <span>Ver no Instagram</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-sf font-bold text-white mb-4">Oferta Especial - Limitada</h3>
          <p className="text-lg text-gray-300 mb-6">
            Primeiros 10 clientes deste mês ganham consultoria de estratégia digital gratuita (valor R$ 200)
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
              Apenas 3 vagas restantes
            </div>
            <div className="text-green-400 font-semibold">
              Economia total: R$ 200
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <p className="text-gray-400 font-sf font-light mb-4">
            Studio Luis Felipe © 2024 - Landing pages que convertem
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span>✓ Satisfação garantida</span>
            <span>✓ Suporte incluso</span>
            <span>✓ Revisões ilimitadas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

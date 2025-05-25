
import { ArrowDown, Sparkles, Zap, Target, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-16 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Value Proposition */}
          <div className="order-2 lg:order-1 text-center lg:text-left animate-scale-in">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Web Designer Especialista</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sf font-extralight text-gray-900 leading-none tracking-tight mb-6">
              <span className="block text-blue-600 font-medium">Landing Pages</span>
              <span className="block">que convertem</span>
              <span className="block bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
                visitantes em clientes
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-sf font-light max-w-2xl">
              Páginas minimalistas, rápidas e profissionais que <strong className="text-blue-600">realmente vendem</strong>. 
              Entrega garantida em até 3 dias com suporte completo.
            </p>

            {/* Benefits quick list */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Entrega em 3 dias</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>100% Responsivo</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Revisões ilimitadas</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/5513991808329?text=Quero%20uma%20landing%20page%20que%20converte%20visitantes%20em%20clientes" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-sf font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <span>Quero Minha Página Agora</span>
                <ArrowDown className="w-5 h-5 ml-2 transform rotate-[-45deg] group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#portfolio" 
                className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl text-lg font-sf font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Ver Projetos
              </a>
            </div>
          </div>

          {/* Right side - Visual elements */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-sf font-medium text-gray-900">Foco em Conversão</p>
                  <p className="text-sm text-gray-600">Páginas que vendem</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-sf font-medium text-gray-900">Entrega Rápida</p>
                  <p className="text-sm text-gray-600">Em até 3 dias</p>
                </div>
              </div>
            </div>
            
            {/* Contact info visible above fold */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
              <p className="text-blue-800 font-sf font-medium text-center">
                💬 WhatsApp: <a href="https://wa.me/5513991808329" className="underline hover:no-underline">(13) 99180-8329</a>
              </p>
              <p className="text-blue-700 text-sm text-center mt-1">Resposta em até 2 horas</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;

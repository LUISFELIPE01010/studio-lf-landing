
import { ArrowDown, Sparkles, Zap, Target } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Title */}
          <div className="order-1 lg:order-1 text-center lg:text-left animate-scale-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-sf font-extralight text-gray-900 leading-none tracking-tight">
              <span className="block">Studio</span>
              <span className="block bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
                Luis Felipe
              </span>
            </h1>
          </div>

          {/* Right side - Text content */}
          <div className="order-2 lg:order-2 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Web Designer Especialista</span>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-sf font-light">
              Landing pages minimalistas que <span className="text-blue-600 font-medium">realmente vendem</span>. 
              Crio páginas modernas, rápidas e personalizadas para impulsionar negócios de forma 
              profissional e eficiente.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
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
                  <p className="text-sm text-gray-600">Em até 7 dias</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5513991808329?text=Olá%2C+quero+uma+landing+page+profissional"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-sf font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <span>Quero minha landing page</span>
                <ArrowDown className="w-5 h-5 ml-2 transform rotate-[-45deg] group-hover:translate-x-1 transition-transform" />
              </a>
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


import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-sf font-light text-gray-900 mb-8 leading-tight">
          Studio Luis Felipe
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-sf font-light">
          Landing pages minimalistas que vendem. Crio páginas modernas, rápidas e personalizadas para impulsionar negócios de forma profissional e eficiente.
        </p>
        
        <a
          href="https://wa.me/5513991808329?text=Olá%2C+quero+uma+landing+page+profissional"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-sf font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Quero uma landing page
        </a>
      </div>
      
      <div className="absolute bottom-10 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;

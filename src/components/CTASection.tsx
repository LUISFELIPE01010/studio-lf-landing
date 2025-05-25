
import { Instagram } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-4xl md:text-6xl font-sf font-light text-white mb-8 leading-tight">
          Pronto para ter uma landing page que impressiona e vende?
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 font-sf font-light">
          Entre em contato agora e transforme sua ideia em uma página que gera resultados
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://wa.me/5513991808329"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-sf font-medium hover:bg-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            WhatsApp
          </a>
          
          <a
            href="https://instagram.com/lf_ataides"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-full text-lg font-sf font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 font-sf font-light">
            Studio Luis Felipe © 2024 - Landing pages que convertem
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

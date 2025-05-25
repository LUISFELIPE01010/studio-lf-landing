
import { ArrowUp, ArrowDown } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "🎯",
      title: "Design focado em conversão",
      description: "Cada elemento é pensado para gerar mais vendas e leads para seu negócio"
    },
    {
      icon: "📱",
      title: "Layouts modernos e responsivos",
      description: "Páginas que funcionam perfeitamente em todos os dispositivos"
    },
    {
      icon: "⚡",
      title: "Entrega rápida",
      description: "Seu projeto pronto em até 7 dias úteis com qualidade garantida"
    },
    {
      icon: "💬",
      title: "Suporte direto via WhatsApp",
      description: "Comunicação direta e suporte durante todo o processo"
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sf font-light text-gray-900 mb-6">
            Por que escolher o Studio Luis Felipe?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-sf font-medium text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 font-sf font-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

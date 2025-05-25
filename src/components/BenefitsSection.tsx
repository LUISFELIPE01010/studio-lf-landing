
import { Target, Smartphone, Clock, MessageCircle, Zap, Shield, Award, TrendingUp } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Design focado em conversão",
      description: "Cada elemento é estrategicamente posicionado para maximizar vendas e leads para seu negócio",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Smartphone,
      title: "100% Responsivo",
      description: "Páginas que funcionam perfeitamente em todos os dispositivos - mobile, tablet e desktop",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Clock,
      title: "Entrega expressa",
      description: "Seu projeto pronto em até 7 dias úteis com qualidade profissional garantida",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: MessageCircle,
      title: "Suporte via WhatsApp",
      description: "Comunicação direta e suporte personalizado durante todo o processo de criação",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Zap,
      title: "Performance otimizada",
      description: "Páginas super rápidas e otimizadas para SEO, garantindo melhor posicionamento no Google",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Shield,
      title: "Código limpo e seguro",
      description: "Desenvolvimento seguindo as melhores práticas e padrões de segurança web",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Award,
      title: "Garantia de qualidade",
      description: "Revisões ilimitadas até você ficar 100% satisfeito com o resultado final",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "ROI comprovado",
      description: "Clientes reportam aumento médio de 300% nas conversões após implementação",
      color: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Award className="w-4 h-4" />
            <span>Diferenciais Exclusivos</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-sf font-light text-gray-900 mb-6 leading-tight">
            Por que escolher o <br />
            <span className="text-blue-600 font-medium">
              Studio Luis Felipe?
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sf font-light">
            Mais do que criar páginas bonitas, entrego soluções completas que transformam 
            visitantes em clientes e impulsionam o crescimento do seu negócio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group hover:transform hover:scale-105 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-sf font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 font-sf font-light leading-relaxed">
                  {benefit.description}
                </p>

                <div className="mt-6 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-blue-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-sf font-bold mb-4">
              Pronto para revolucionar seu negócio online?
            </h3>
            <p className="text-xl font-sf font-light mb-8 opacity-90">
              Junte-se a mais de 50 empreendedores que já transformaram suas vendas
            </p>
            <a
              href="https://wa.me/5513991808329?text=Quero+saber+mais+sobre+os+diferenciais"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-2xl font-sf font-semibold hover:bg-gray-100 transition-colors"
            >
              <span>Descobrir Mais Vantagens</span>
              <Target className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

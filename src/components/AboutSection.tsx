import { Award, Clock, Users, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, number: "50+", label: "Clientes Atendidos" },
    { icon: Award, number: "98%", label: "Taxa de Satisfação" },
    { icon: Clock, number: "3", label: "Dias de Entrega" },
    { icon: TrendingUp, number: "300%", label: "Aumento Médio em Vendas" }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Award className="w-4 h-4" />
              <span>Sobre o Profissional</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-sf font-light text-gray-900 mb-8 leading-tight">
              Quem sou eu?
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed font-sf font-light">
              <p>
                Me chamo <span className="text-blue-600 font-medium">Luis Felipe</span>, sou web designer com 21 anos e 
                especialista em criação de landing pages que realmente convertem.
              </p>
              
              <p>
                Meu foco é ajudar empreendedores, autônomos e empresas a transformarem suas ideias 
                em sites que <span className="text-blue-600 font-medium">geram resultado real</span>. 
                Cada página é pensada com estratégia, design e performance.
              </p>

              <p>
                Acredito que uma landing page não é apenas um site bonito, mas sim uma 
                <span className="text-blue-600 font-medium"> ferramenta de vendas poderosa</span> que 
                trabalha 24/7 para o seu negócio.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <p className="text-3xl font-sf font-bold text-gray-900 mb-1">{stat.number}</p>
                  <p className="text-sm text-gray-600 font-sf">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-scale-in relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative">
              <img
                src="/lovable-uploads/91d02c4a-fd00-4310-8217-6e0669ae2292.png"
                alt="Luis Felipe - Web Designer"
                className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

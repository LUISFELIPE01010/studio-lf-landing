import { Award } from "lucide-react";
const AboutSection = () => {
  return <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white relative">
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

            <blockquote className="mt-8 p-6 border-l-4 border-blue-600 rounded-sm bg-slate-50">
              <p className="text-xl md:text-2xl font-sf font-medium italic text-blue-600">
                "Acredito que grandes transformações começam com uma boa primeira impressão. E é isso que eu construo"
              </p>
            </blockquote>
          </div>
          
          <div className="animate-scale-in relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative max-w-md mx-auto">
              <img src="/lovable-uploads/91d02c4a-fd00-4310-8217-6e0669ae2292.png" alt="Luis Felipe - Web Designer" className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;

const AboutSection = () => {
  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-sf font-light text-gray-900 mb-8">
              Quem sou eu?
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf font-light">
              Me chamo Luis Felipe, sou web designer com 21 anos e especialista em criação de landing pages. Meu foco é ajudar empreendedores, autônomos e empresas a transformarem suas ideias em sites que geram resultado. Cada página é pensada com estratégia, design e performance.
            </p>
          </div>
          
          <div className="animate-scale-in">
            <img
              src="/lovable-uploads/91d02c4a-fd00-4310-8217-6e0669ae2292.png"
              alt="Luis Felipe - Web Designer"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

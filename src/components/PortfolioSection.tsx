
import { ExternalLink, ArrowRight, Star, Zap } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Landing Page E-commerce",
      description: "Página de vendas para loja online especializada em produtos digitais",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      results: "+400% em conversões",
      category: "E-commerce",
      tags: ["Responsivo", "Alta Conversão", "Mobile First"]
    },
    {
      id: 2,
      title: "Página de Serviços Premium",
      description: "Site institucional para empresa de consultoria empresarial",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      results: "+250% em leads",
      category: "Serviços",
      tags: ["Profissional", "Clean Design", "SEO Otimizado"]
    },
    {
      id: 3,
      title: "Landing Page SaaS",
      description: "Página de captura para software B2B com foco em conversão",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      results: "+350% em cadastros",
      category: "SaaS",
      tags: ["Moderno", "Interativo", "Analytics"]
    }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Star className="w-4 h-4" />
            <span>Projetos que Impressionam</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-sf font-light text-gray-900 mb-6 leading-tight">
            Projetos Recentes
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sf font-light">
            Cada projeto é único e desenvolvido com foco total em resultados. 
            Veja alguns exemplos de landing pages que transformaram negócios.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group animate-fade-in-up hover:transform hover:scale-105 transition-all duration-500 ${
                index === 1 ? 'sm:col-span-2 lg:col-span-1 lg:scale-110 lg:z-10' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Screenshot da ${project.title} - ${project.description}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-sf font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 font-sf font-light mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 mb-6">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-600 font-sf font-medium">{project.results}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-sf font-medium hover:bg-blue-700 transition-colors group">
                    <span>Ver Detalhes</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://wa.me/5513991808329?text=Quero+minha+landing+page"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-sf font-medium hover:bg-blue-700 transition-colors"
          >
            <span>Quero minha landing page</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

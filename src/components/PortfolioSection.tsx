
import { ExternalLink, ArrowRight, Star, Zap, Globe, TrendingUp } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Landing Page E-commerce",
      description: "Página de vendas para loja online especializada em produtos digitais com checkout integrado",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      results: "+400% em conversões",
      category: "E-commerce",
      tags: ["Responsivo", "Alta Conversão", "Mobile First"],
      url: "#"
    },
    {
      id: 2,
      title: "Página de Serviços Premium",
      description: "Site institucional para empresa de consultoria empresarial com geração de leads qualificados",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      results: "+250% em leads",
      category: "Serviços",
      tags: ["Profissional", "Clean Design", "SEO Otimizado"],
      url: "#"
    },
    {
      id: 3,
      title: "Landing Page SaaS",
      description: "Página de captura para software B2B com foco em conversão e trial gratuito",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      results: "+350% em cadastros",
      category: "SaaS",
      tags: ["Moderno", "Interativo", "Analytics"],
      url: "#"
    },
    {
      id: 4,
      title: "Página de Curso Online",
      description: "Landing page para curso digital com vídeo de vendas e formulário otimizado",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      results: "+300% em vendas",
      category: "Educação",
      tags: ["Vídeo Integrado", "Formulário Otimizado", "Mobile Ready"],
      url: "#"
    },
    {
      id: 5,
      title: "Site para Coach",
      description: "Página profissional para coach com agendamento online e captura de leads",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      results: "+280% em agendamentos",
      category: "Coaching",
      tags: ["Agendamento Online", "Captura de Leads", "Profissional"],
      url: "#"
    },
    {
      id: 6,
      title: "Landing Page para App",
      description: "Página de download para aplicativo mobile com foco em conversão de instalações",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      results: "+450% downloads",
      category: "Mobile App",
      tags: ["App Store Links", "Screenshots", "Social Proof"],
      url: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Projetos que Impressionam</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-sf font-light text-gray-900 mb-6 leading-tight">
            Projetos Recentes
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sf font-light">
            Cada projeto é único e desenvolvido com foco total em resultados. 
            Veja alguns exemplos de landing pages que transformaram negócios.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group animate-fade-in-up hover:transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-blue-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Globe className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-sf font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 font-sf font-light mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-green-600 font-sf font-medium text-sm">{project.results}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-sf font-medium hover:bg-blue-700 transition-colors group text-sm">
                    <span>Ver Projeto</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5513991808329?text=Vi%20seus%20projetos%20e%20quero%20uma%20landing%20page%20profissional"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-sf font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <span>Quero Uma Página Como Essas</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;


const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Landing Page E-commerce",
      description: "Página de vendas para loja online com alta conversão",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Página de Serviços",
      description: "Site institucional para empresa de consultoria",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Landing Page SaaS",
      description: "Página de captura para software B2B",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sf font-light text-gray-900 mb-6">
            Projetos Recentes
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-xl font-sf font-medium text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 font-sf font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

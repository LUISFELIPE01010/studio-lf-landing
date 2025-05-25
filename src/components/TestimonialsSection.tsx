
const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "Empreendedora Digital",
      comment: "O Luis Felipe criou uma landing page incrível para meu negócio. As vendas aumentaram 300% no primeiro mês!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b367?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "João Santos",
      role: "Coach Executivo",
      comment: "Profissional excepcional! Entregou tudo no prazo e a página ficou exatamente como eu imaginava.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Ana Costa",
      role: "Consultora de Marketing",
      comment: "Design moderno e funcional. Recomendo o trabalho do Luis Felipe para qualquer empresa.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sf font-light text-gray-900 mb-6">
            O que dizem meus clientes
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-sf font-medium text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="font-sf font-light text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 font-sf font-light leading-relaxed">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


import { Star, Quote, TrendingUp } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "Empreendedora Digital",
      company: "Silva Marketing",
      comment: "O Luis Felipe criou uma landing page incrível para meu negócio. As vendas aumentaram 300% no primeiro mês! O design é limpo, profissional e realmente converte. Recomendo muito!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b367?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      result: "+300% vendas"
    },
    {
      id: 2,
      name: "João Santos",
      role: "Coach Executivo",
      company: "Santos Coaching",
      comment: "Profissional excepcional! Entregou tudo no prazo prometido e a página ficou exatamente como eu imaginava. O número de leads qualificados triplicou desde o lançamento.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      result: "+250% leads"
    },
    {
      id: 3,
      name: "Ana Costa",
      role: "Consultora de Marketing",
      company: "Costa Consultoria",
      comment: "Design moderno e funcional. A página é super rápida e responsiva. Meus clientes ficaram impressionados com a qualidade. Já indiquei para vários colegas.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      result: "+400% conversão"
    },
    {
      id: 4,
      name: "Carlos Mendes",
      role: "Dono de E-commerce",
      company: "TechStore Online",
      comment: "A landing page que o Luis criou para o lançamento do nosso produto foi um sucesso total. Design impecável e otimização perfeita. Vendemos 50% mais que o esperado!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      result: "+500% vendas"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Clientes Satisfeitos</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-sf font-light text-gray-900 mb-6">
            O que dizem meus clientes
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sf font-light">
            Depoimentos reais de empreendedores que transformaram seus negócios com landing pages profissionais.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-sf font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="font-sf font-light text-gray-600 text-sm">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 font-sf font-light leading-relaxed pl-6 italic">
                  {testimonial.comment}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-green-600 font-sf font-semibold">
                  Resultado: {testimonial.result}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5513991808329?text=Vi%20os%20depoimentos%20e%20quero%20resultados%20assim%20também"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-sf font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <span>Quero Resultados Como Estes</span>
            <Star className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

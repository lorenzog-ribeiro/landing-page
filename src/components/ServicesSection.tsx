import { Wallet, PiggyBank, TrendingUp, LineChart, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        icon: Wallet,
        title: "Planejamento Financeiro",
        description: "Organize suas finanças com um plano personalizado para alcançar seus objetivos de curto, médio e longo prazo.",
    },
    {
        icon: PiggyBank,
        title: "Controle de Gastos",
        description: "Aprenda a gerenciar seu orçamento de forma inteligente e elimine desperdícios sem abrir mão da qualidade de vida.",
    },
    {
        icon: TrendingUp,
        title: "Investimentos",
        description: "Descubra as melhores estratégias de investimento adequadas ao seu perfil e objetivos financeiros.",
    },
    {
        icon: LineChart,
        title: "Análise de Dívidas",
        description: "Estratégias eficientes para sair das dívidas e recuperar sua saúde financeira de forma sustentável.",
    },
    {
        icon: Users,
        title: "Finanças para Casais",
        description: "Alinhe os objetivos financeiros do casal e construam juntos um futuro financeiro sólido.",
    },
    {
        icon: BookOpen,
        title: "Educação Financeira",
        description: "Desenvolva conhecimentos e hábitos que transformarão sua relação com o dinheiro para sempre.",
    },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-[#f1efeb]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <p className="text-lg text-muted-foreground">
            Oferecemos consultoria personalizada para cada momento da sua jornada financeira, do
            planejamento básico aos investimentos mais sofisticados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2 border border-white"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#f4eee3] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

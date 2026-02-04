import { CheckCircle2, Award, Clock, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import bolsitoLogo from "@/assets/bolsito.png";

const benefits = [
    "Metodologia desenvolvida por profissionais da área",
    "Atendimento 100% online e personalizado",
    "Acompanhamento contínuo dos seus resultados",
    "Material exclusivo de educação financeira",
    "Plano de ação claro e objetivo",
    "Suporte via WhatsApp durante todo o processo",
];

const stats = [
    { icon: Award, value: "10+", label: "Anos de Experiência" },
    { icon: Clock, value: "24h", label: "Resposta Garantida" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-[#f8f6f2]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold mb-4">Por que Escolher</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Transformamos vidas através da{" "}
              <span className="text-primary">educação financeira</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              O Educando Seu Bolso nasceu com a missão de democratizar o acesso à educação financeira
              de qualidade. Acreditamos que todos podem alcançar a liberdade financeira com o
              conhecimento certo.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                asChild
                className="rounded-xl px-6 h-12 shadow-soft hover:opacity-95"
                style={{ backgroundImage: "linear-gradient(135deg,#f6ad1b,#d67800)", color: "#3b2500" }}
              >
                <a href="https://minhaagendavirtual.com.br/educandoseubolso" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 w-5 h-5" />
                  Agendar Consultoria
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-xl px-6 h-12 border-primary text-primary hover:bg-primary/5"
              >
                <a href="http://wa.me/5531999189537" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-[32px] overflow-hidden shadow-hero">
              <div className="aspect-[4/3] bg-gradient-card flex items-center justify-center">
                <div className="text-center text-white p-10">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur rounded-full mx-auto mb-6 flex items-center justify-center">
                    <img src={bolsitoLogo} alt="Bolsito" className="w-16 h-16 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Educando Seu Bolso</h3>
                  <p className="text-white/80">Sua jornada para a liberdade financeira</p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-10 left-6 right-6">
              <div className="bg-white rounded-3xl p-6 shadow-card border border-white">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

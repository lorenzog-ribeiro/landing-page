import { ArrowRight, TrendingUp, Shield, Target, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const barHeights = [52, 64, 58, 70, 66, 78, 74, 82, 90, 96];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -right-10 top-10 w-[420px] h-[420px] bg-white/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.10) 0, transparent 35%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.07) 0, transparent 40%)" }} />
      </div>

      <div className="container mx-auto px-4 pt-28 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/12 border border-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse-soft" />
              <span className="text-sm font-semibold">Consultoria Financeira Pessoal</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Transforme sua relação com o{" "}
              <span className="relative inline-block">
                dinheiro
                <span className="absolute -bottom-3 left-0 w-full h-3 bg-gradient-accent rounded-full blur-[1px]" />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl">
              Consultoria especializada para você conquistar sua liberdade financeira com planejamento inteligente e acompanhamento personalizado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                variant="default"
                size="lg"
                asChild
                className="rounded-xl px-6 h-12 shadow-soft hover:opacity-95"
                style={{ backgroundImage: "linear-gradient(135deg,#f6ad1b,#d67800)", color: "#3b2500" }}
              >
                <a href="https://minhaagendavirtual.com.br/educandoseubolso" target="_blank" rel="noopener noreferrer">
                  Quero Minha Consultoria
                  <ArrowRight className="ml-2" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-xl px-6 h-12 border-white/80 text-white bg-white/10 hover:bg-white/20"
              >
                <a href="http://wa.me/5531999189537" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-10 text-white/90">
              <div>
                <div className="text-3xl md:text-4xl font-extrabold leading-none">10+</div>
                <div className="text-sm mt-1">Anos de Experiência</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-[36px] p-6 bg-white/8 border border-white/15 backdrop-blur-xl shadow-hero">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                  <TrendingUp className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-semibold leading-tight">Seu Patrimônio</p>
                  <span className="text-white/70 text-sm">Crescimento projetado</span>
                </div>
              </div>

              <div className="relative bg-white/4 border border-white/15 rounded-[26px] px-6 pt-6 pb-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                <div className="h-48 flex items-end gap-3 relative z-10">
                  {barHeights.map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-orange-400/90 via-orange-300/90 to-yellow-200/70 rounded-t-2xl"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-white/70 text-sm mt-4 relative z-10">
                  <span>Jan</span>
                  <span>Dez</span>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-card w-60 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Shield className="text-primary w-6 h-6" />
                </div>
                <div>
                  <div className="text-foreground font-semibold text-xs">Reserva de Emergência</div>
                  <div className="text-primary text-xs font-semibold">✓ Meta atingida</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-8 bg-white rounded-2xl p-4 shadow-card w-64 animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                  <Target className="text-amber-500 w-6 h-6" />
                </div>
                <div>
                  <div className="text-foreground font-semibold text-sm">Metas Financeiras</div>
                  <div className="text-muted-foreground text-xs">3 de 4 concluídas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-4 bg-white/70 rounded-full" />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;

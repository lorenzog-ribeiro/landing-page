import { ArrowRight, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
    return (
        <section id="contato" className="py-24 bg-gradient-hero relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center text-primary-foreground">
                    <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse-soft" />
                        <span className="text-sm font-medium">Comece sua transformação hoje</span>
                    </span>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Pronto para conquistar sua{" "}
                        <span className="relative inline-block">
                            liberdade financeira?
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                                <path d="M2 8C80 2 220 2 298 8" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>

                    <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                        Agende uma conversa gratuita e descubra como podemos ajudar você a
                        alcançar seus objetivos financeiros.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button
                            variant="default"
                            size="lg"
                            asChild
                            className="rounded-xl px-6 h-12 shadow-soft hover:opacity-95"
                            style={{ backgroundImage: "linear-gradient(135deg,#f6ad1b,#d67800)", color: "#3b2500" }}
                        >
                            <a href="https://minhaagendavirtual.com.br/educandoseubolso" target="_blank" rel="noopener noreferrer">
                                <Calendar className="mr-2" />
                                Agendar Consultoria
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

                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/80">
                        <a
                            href="https://www.instagram.com/educandoseubolso/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                        >
                            <MessageCircle className="w-5 h-5" />
                            @educandoseubolso
                        </a>
                        <a
                            href="https://educandoseubolso.blog.br/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                        >
                            educandoseubolso.blog.br
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;

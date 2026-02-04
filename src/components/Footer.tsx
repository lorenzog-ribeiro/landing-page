import { Instagram, Globe, Mail } from "lucide-react";
import bolsitoLogo from "@/assets/bolsito.png";

const Footer = () => {
    return (
        <footer className="bg-foreground text-primary-foreground py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <img src={bolsitoLogo} alt="Bolsito" className="w-10 h-10 object-contain" />
                            <span className="font-bold text-lg">Educando Seu Bolso</span>
                        </div>
                        <p className="text-primary-foreground/70 mb-6 max-w-sm">
                            Transformando a relação das pessoas com o dinheiro através de
                            educação financeira de qualidade e consultoria personalizada.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/educandoseubolso/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://educandoseubolso.blog.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Globe className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:contato@educandoseubolso.com.br"
                                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Links Rápidos</h4>
                        <ul className="space-y-3 text-primary-foreground/70">
                            <li><a href="#inicio" className="hover:text-primary-foreground transition-colors">Início</a></li>
                            <li><a href="#servicos" className="hover:text-primary-foreground transition-colors">Serviços</a></li>
                            <li><a href="#sobre" className="hover:text-primary-foreground transition-colors">Sobre Nós</a></li>
                            <li><a href="#contato" className="hover:text-primary-foreground transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-4">Serviços</h4>
                        <ul className="space-y-3 text-primary-foreground/70">
                            <li><a href="#servicos" className="hover:text-primary-foreground transition-colors">Planejamento Financeiro</a></li>
                            <li><a href="#servicos" className="hover:text-primary-foreground transition-colors">Controle de Gastos</a></li>
                            <li><a href="#servicos" className="hover:text-primary-foreground transition-colors">Investimentos</a></li>
                            <li><a href="#servicos" className="hover:text-primary-foreground transition-colors">Consultoria para Casais</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-primary-foreground/60 text-sm">
                        © 2026 Educando Seu Bolso. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6 text-sm text-primary-foreground/60">
                        <a href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidade</a>
                        <a href="#" className="hover:text-primary-foreground transition-colors">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

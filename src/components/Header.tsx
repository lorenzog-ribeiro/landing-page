import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import bolsitoLogo from "@/assets/bolsito.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/85 backdrop-blur-xl shadow-soft py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={bolsitoLogo} alt="Bolsito" className="w-10 h-10 object-contain" />
          <span
            className={`font-semibold text-lg tracking-tight ${isScrolled ? "text-foreground" : "text-white"
              }`}
          >
            Educando Seu Bolso
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-accent ${isScrolled ? "text-foreground" : "text-white"
                }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            variant={isScrolled ? "outline" : "secondary"}
            size="sm"
            className={`rounded-full px-5 font-semibold ${isScrolled
                ? "border-primary/40 text-primary hover:bg-primary/5"
                : "bg-white/10 text-white border border-white/40 hover:bg-white/20"
              }`}
          >
            <a href="https://minhaagendavirtual.com.br/educandoseubolso" target="_blank" rel="noopener noreferrer">
              Agendar Consulta
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} size={26} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} size={26} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 glass-effect shadow-card p-4 animate-fade-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="default" className="mt-2 rounded-full">
              <a href="https://minhaagendavirtual.com.br/educandoseubolso" target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactCard = ({ icon: Icon, title, value, link, isEmail = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (isEmail) {
      window.location.href = `mailto:${value}`;
    } else if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className="relative p-6 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300"
      style={{
        background:
          "linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(220, 80, 60, 0.03) 100%)",
        border: "1px solid rgba(212, 175, 55, 0.2)",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
      }}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute -inset-1 rounded-2xl blur-xl"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(212, 175, 55, 0.3), rgba(255, 165, 0, 0.2), rgba(220, 80, 60, 0.2))",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 500ms ease-in-out",
          pointerEvents: "none",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(212, 175, 55, 0.05), rgba(220, 80, 60, 0.05))",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 300ms ease-in-out",
          pointerEvents: "none",
        }}
      />

      {/* Bottom glow on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{
          background: "linear-gradient(to top, rgba(212, 175, 55, 0.1), transparent)",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 300ms ease-in-out",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
            style={{
              boxShadow: isHovered
                ? "0 0 20px rgba(212, 175, 55, 0.6), inset 0 0 15px rgba(212, 175, 55, 0.2)"
                : "0 0 10px rgba(212, 175, 55, 0.2)",
              transition: "all 300ms ease-in-out",
            }}
          >
            <Icon
              className="w-5 h-5 text-background transition-all duration-300"
              style={{
                transform: isHovered ? "scale(1.2)" : "scale(1)",
              }}
            />
          </div>
          <h3
            className="font-semibold transition-colors duration-300"
            style={{
              color: isHovered ? "hsl(43 85% 58%)" : "inherit",
            }}
          >
            {title}
          </h3>
        </div>
        <p
          className="font-semibold transition-colors duration-300"
          style={{
            color: isHovered ? "inherit" : "rgb(155, 140, 120)",
          }}
        >
          {value}
        </p>
        {title === "Localização" && (
          <p
            className="text-xs mt-2 transition-colors duration-300"
            style={{
              color: isHovered ? "inherit" : "rgb(155, 140, 120)",
              opacity: isHovered ? 1 : 0.8,
            }}
          >
            Atendemos todo o Brasil
          </p>
        )}
      </div>
    </div>
  );
};

const FinalSection = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 bg-background overflow-hidden">
      {/* Tech line separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Background glow */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(220, 80, 60, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main CTA */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Entre em contato conosco para uma consulta inicial. Vamos analisar seu caso e oferecer a melhor solução jurídica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-background font-semibold flex items-center gap-2"
              onClick={() => window.open('https://wa.me/5555996202400?text=Olá! Gostaria de marcar uma consulta.', '_blank')}
            >
              <Send className="w-5 h-5" />
              Marcar Consulta
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 font-semibold"
              onClick={() => window.open('https://wa.me/5555996202400?text=Olá! Gostaria de enviar uma mensagem.', '_blank')}
            >
              Enviar Mensagem
            </Button>
          </div>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <ContactCard
            icon={Phone}
            title="WhatsApp"
            value="+55 (55) 99620-2400"
            link="https://wa.me/5555996202400"
          />
          <ContactCard
            icon={Mail}
            title="Email"
            value="elizandragirardon@gmail.com"
            isEmail={true}
          />
          <ContactCard
            icon={MapPin}
            title="Localização"
            value="Santa Maria, RS"
          />
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Sobre Nós</h4>
              <p className="text-sm text-muted-foreground">
                Escritório de advocacia especializado em direito civil, comercial e administrativo, com anos de experiência no mercado.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-primary/20 text-center text-sm text-muted-foreground">
            <p>© 2026 Dra. Elizandra Girardon. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com excelência em advocacia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;

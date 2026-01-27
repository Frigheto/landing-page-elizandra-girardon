import { Button } from "@/components/ui/button";
import TransitionLink from "@/components/TransitionLink";

const Header = () => {
  const navItems = ["Início", "Áreas de Atuação", "Serviços", "Sobre", "Quem Somos"];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <nav
        className="card-glass px-6 py-3 flex items-center justify-between"
        style={{
          background: "linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--secondary) / 0.16))",
          boxShadow: "0 12px 30px hsl(var(--foreground) / 0.08), inset 0 1px 0 hsl(var(--primary) / 0.25)",
          borderColor: "hsl(var(--border))",
        }}
      >
        <div className="flex items-center gap-3">
          {/* Logo with enhanced glow */}
          <div 
            className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg flex-shrink-0 relative overflow-hidden"
            style={{ 
              boxShadow: '0 0 20px hsl(var(--primary) / 0.35), 0 0 32px hsl(var(--accent) / 0.35)'
            }}
          >
            <img 
              src="/images/logo.png" 
              alt="Logo Elizandra Girardon"
              className="w-full h-full object-cover"
              style={{
                objectFit: 'cover',
                objectPosition: '50% 50%',
                transform: 'scale(2.0)',
              }}
            />
          </div>
          
          {/* Text content */}
          <div className="flex flex-col gap-0">
            <span className="text-xs font-medium text-muted-foreground">Elizandra Girardon</span>
            <span className="font-heading text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Advocacia</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item === "Quem Somos" ? (
              <TransitionLink
                key={item}
                to="/quem-somos"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {item}
              </TransitionLink>
            ) : (
              <a
                key={item}
                href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {item}
              </a>
            )
          ))}
        </div>

        <Button
          variant="outline"
          className="bg-transparent border-border hover:bg-secondary text-foreground rounded-full px-6"
          onClick={() => window.open('https://wa.me/5555996202400?text=Olá! Gostaria de analisar meu caso.', '_blank')}
        >
          Analise seu caso
        </Button>
      </nav>
    </header>
  );
};

export default Header;

import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AreaDetail {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  longDescription: string;
  items: string[];
  whatsappMessage: string;
}

interface AreaDetailPageProps {
  area: AreaDetail;
}

const AreaDetailPage = ({ area }: AreaDetailPageProps) => {
  const navigate = useNavigate();
  const Icon = area.icon;
  const whatsappLink = `https://wa.me/5555996202400?text=${encodeURIComponent(area.whatsappMessage)}`;

  if (!area) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header com botão voltar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
        <nav className="card-glass px-6 py-3 flex items-center justify-between" style={{
          background: "linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--secondary) / 0.16))",
          boxShadow: "0 12px 30px hsl(var(--foreground) / 0.08), inset 0 1px 0 hsl(var(--primary) / 0.25)",
          borderColor: "hsl(var(--border))",
        }}>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Voltar</span>
          </button>
          <span className="text-lg font-heading font-semibold text-primary">Elizandra Girardon</span>
          <div className="w-20" />
        </nav>
      </header>

      <main className="pt-32 pb-20">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Hero Section */}
          <div className="mb-12 text-center animate-in">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground">
                {area.title}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {area.description}
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Left Column - Description */}
            <div className="lg:col-span-2 animate-in">
              <div className="bg-card/40 backdrop-blur-xl border border-primary/30 rounded-3xl p-8 mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4 text-foreground">
                  Sobre esta área
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {area.longDescription}
                </p>
              </div>

              <div className="bg-card/40 backdrop-blur-xl border border-primary/30 rounded-3xl p-8">
                <h2 className="text-2xl font-heading font-semibold mb-6 text-foreground">
                  O que cobrimos
                </h2>
                <ul className="space-y-4">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - CTA */}
            <div className="animate-in">
              <div className="sticky top-32 bg-gradient-to-br from-primary/10 to-accent/5 border-2 border-primary/50 rounded-3xl p-8">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
                  Precisa de ajuda?
                </h3>
                <p className="text-muted-foreground mb-8">
                  Clique no botão abaixo para enviar uma mensagem e conversarmos sobre seu caso.
                </p>
                <Button
                  onClick={() => window.open(whatsappLink, "_blank")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 text-lg font-semibold transition-all duration-300"
                  style={{
                    boxShadow: "0 0 22px hsl(var(--primary) / 0.38)"
                  }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Envie uma mensagem
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Responderemos no WhatsApp em breve
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-3xl p-12 text-center animate-in border border-primary/20">
            <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">
              Agende uma consulta
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para atender você com experiência e dedicação. Entre em contato conosco.
            </p>
            <Button
              onClick={() => window.open(whatsappLink, "_blank")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-12 py-6 text-lg transition-all duration-300"
              style={{
                boxShadow: "0 0 22px hsl(var(--primary) / 0.38)"
              }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Conversar no WhatsApp
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AreaDetailPage;

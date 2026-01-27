import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { usePageTransition } from "@/hooks/usePageTransition";

interface TeamMember {
  name: string;
  oab: string;
  image: string;
}

// Aguardando nomes corretos da equipe
const teamMembers: TeamMember[] = [];

const QuemSomosPage = () => {
  const { startTransition } = usePageTransition();

  const handleNavigateHome = () => {
    startTransition();
    setTimeout(() => {
      window.scrollTo(0, 0);
      window.location.href = '/';
    }, 700);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header com botão voltar */}
      <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4 pt-6">
        <nav className="card-glass px-6 py-3 flex items-center justify-between rounded-2xl" style={{
          background: "linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--secondary) / 0.16))",
          boxShadow: "0 12px 30px hsl(var(--foreground) / 0.08), inset 0 1px 0 hsl(var(--primary) / 0.25)",
          borderColor: "hsl(var(--border))",
        }}>
          <button
            onClick={handleNavigateHome}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Voltar</span>
          </button>
          <span className="text-lg font-heading font-semibold text-primary">Elizandra Girardon</span>
          <div className="w-20" />
        </nav>
      </header>

      <main className="pt-24 pb-20">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16 animate-in">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Nossa Equipe</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mt-4 mb-6">
              Quem Somos
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça os profissionais dedicados que fazem parte do nosso escritório,
              prontos para defender seus direitos com excelência e comprometimento.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center animate-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Photo */}
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-primary/20 shadow-lg hover:border-primary/40 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback para placeholder se a imagem não existir
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=200&background=c9a961&color=1a1a1a&bold=true`;
                    }}
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                  {member.name}
                </h3>

                {/* OAB */}
                {member.oab && (
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.oab}
                  </p>
                )}

                {/* Button */}
                <Button
                  variant="outline"
                  className="rounded-full px-6 border-foreground/80 text-foreground hover:bg-foreground hover:text-background transition-all"
                >
                  CONHEÇA
                </Button>
              </div>
            ))}
          </div>

          {/* About Section */}
          <div className="bg-card/50 backdrop-blur-xl border border-primary/25 rounded-3xl p-10 md:p-16 text-center animate-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
              Nosso Compromisso
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              O escritório Elizandra Girardon Advocacia é formado por profissionais qualificados
              e comprometidos com a defesa dos direitos de nossos clientes. Atuamos com ética,
              transparência e dedicação em todas as áreas do Direito Bancário, Execuções e Direito do Agronegócio.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuemSomosPage;

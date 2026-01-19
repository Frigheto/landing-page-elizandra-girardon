import { Shield, Users, Award, CheckCircle2, Zap, Target } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Shield,
      title: "Experiência",
      description: "Especialistas em negociações com instituições bancárias",
      number: "15+",
    },
    {
      icon: Users,
      title: "Atendimento",
      description: "Humanizado e personalizado para cada caso",
      number: "500+",
    },
    {
      icon: Target,
      title: "Atuação",
      description: "Múltiplas áreas do Direito Bancário",
      number: "6",
    },
  ];

  const diferenciais = [
    "Escritório especializado em Direito Bancário",
    "Método estruturado de atendimento",
    "Acompanhamento ativo do seu caso",
  ];

  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      {/* Tech line separator on top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <style>{`
        @keyframes redFlash {
          0%, 100% { opacity: 0; }
          25% { opacity: 0.3; }
          75% { opacity: 0; }
        }
        @keyframes redFlashAlt {
          0%, 100% { opacity: 0; }
          40% { opacity: 0.25; }
          60% { opacity: 0; }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>

      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 150% 80% at 50% 20%, hsl(var(--primary) / 0.12) 0%, hsl(var(--accent) / 0.1) 30%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Stats & Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h2 className="font-heading text-5xl lg:text-6xl font-medium mb-4">
                <span className="text-primary">Dra. Elizandra</span>
                <br />
                <span className="text-foreground">Girardon</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Especialista em Direito Bancário com abordagem humanizada e resultados comprovados.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="relative group"
                    style={{
                      animation: `floatUp ${3 + idx * 0.5}s ease-in-out infinite`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="relative bg-card/40 backdrop-blur-xl border border-primary/30 p-5 rounded-2xl hover:border-primary/60 transition-all duration-300 text-center">
                      <div className="text-primary text-2xl font-bold mb-2">
                        {stat.number}
                      </div>
                      <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
                      <h3 className="text-foreground text-sm font-semibold mb-1">
                        {stat.title}
                      </h3>
                      <p className="text-muted-foreground text-xs line-clamp-2">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Diferenciais */}
            <div
              className="p-8 rounded-3xl border-2 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.08), hsl(var(--accent) / 0.1))",
                borderImage:
                  "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent))) 1",
              }}
            >
              {/* Subtle glow inside */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                      "radial-gradient(ellipse at top right, hsl(var(--primary) / 0.12), transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-2xl font-medium text-foreground mb-4">
                      Diferenciais
                    </h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {diferenciais.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Image Showcase */}
          <div className="relative h-[600px] lg:h-[700px]">
            {/* Animated background elements */}
            <div className="absolute inset-0">
              {/* Red flash effect */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse 100% 110% at 50% 50%, hsl(var(--accent) / 0.18) 0%, hsl(var(--accent) / 0.1) 20%, transparent 70%)",
                  filter: "blur(80px)",
                  animation: "redFlash 4s ease-in-out infinite",
                }}
              />

              {/* Orange/Gold flash */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse 90% 100% at 50% 45%, hsl(var(--primary) / 0.12) 0%, hsl(var(--accent) / 0.12) 25%, transparent 65%)",
                  filter: "blur(60px)",
                  animation: "redFlashAlt 3.5s ease-in-out infinite 0.5s",
                }}
              />

              {/* Geometric accent lines */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
              <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent" />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/40 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-accent/40 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-accent/40 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/40 rounded-br-3xl" />
            </div>

            {/* Main image container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                {/* Image with dissolution effect on all sides */}
                <img
                  src="/images/advogada.jpg"
                  alt="Dra. Elizandra Girardon"
                  className="w-full h-full object-cover"
                  style={{
                    maskImage:
                      "radial-gradient(ellipse 75% 85% at 50% 45%, black 0%, black 40%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 75% 85% at 50% 45%, black 0%, black 40%, transparent 100%)",
                  }}
                />

                {/* Full radial dissolution overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 80% at 50% 45%, transparent 0%, transparent 30%, hsl(var(--foreground) / 0.12) 50%, hsl(var(--foreground) / 0.28) 70%, hsl(var(--foreground) / 0.48) 85%, hsl(var(--foreground) / 0.6) 100%)",
                  }}
                />

                {/* Tech overlay grid */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 24%, hsl(var(--primary) / 0.1) 25%, hsl(var(--primary) / 0.1) 26%, transparent 27%, transparent 74%, hsl(var(--primary) / 0.1) 75%, hsl(var(--primary) / 0.1) 76%, transparent 77%, transparent), linear-gradient(180deg, transparent 24%, hsl(var(--primary) / 0.1) 25%, hsl(var(--primary) / 0.1) 26%, transparent 27%, transparent 74%, hsl(var(--primary) / 0.1) 75%, hsl(var(--primary) / 0.1) 76%, transparent 77%, transparent)",
                    backgroundSize: "50px 50px",
                  }}
                />

                {/* Holographic shimmer effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 0%, hsl(var(--primary) / 0.14) 25%, transparent 50%, hsl(var(--accent) / 0.12) 75%, transparent 100%)",
                    animation: "shimmer 3s ease-in-out infinite",
                  }}
                />
              </div>
            </div>

            {/* Floating badges */}
            <div
              className="absolute -top-6 -right-6 bg-gradient-to-br from-primary to-accent text-primary-foreground px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-xl"
              style={{ animation: "floatUp 3.5s ease-in-out infinite" }}
            >
              <Zap className="w-5 h-5" />
              Especialista
            </div>

            <div
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-accent to-primary text-primary-foreground px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-xl"
              style={{ animation: "floatUp 4s ease-in-out infinite 0.3s" }}
            >
              <CheckCircle2 className="w-5 h-5" />
              Certificado
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

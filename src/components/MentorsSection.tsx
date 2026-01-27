import { CreditCard, FileText, AlertCircle, Briefcase, Scale, TrendingDown, Sparkles, Gavel, Landmark, Wheat, Shield, TrendingUp, ArrowRight } from "lucide-react";
import TransitionLink from "@/components/TransitionLink";

const services = [
  {
    id: 1,
    icon: Scale,
    title: "Direito Bancário",
    description: "Atuação especializada em todas as questões envolvendo relações com instituições financeiras",
    items: ["Contratos bancários", "Tarifas e juros abusivos", "Revisão de financiamentos"],
    featured: true,
    route: "/direito-bancario"
  },
  {
    id: 2,
    icon: Gavel,
    title: "Execuções",
    description: "Defesa estratégica em processos de execução e cobrança judicial",
    items: ["Defesa em execuções", "Embargos executivos", "Negociação de dívidas"],
    featured: true,
    route: "/execucoes"
  },
  {
    id: 3,
    icon: Wheat,
    title: "Direito do Agronegócio",
    description: "Assessoria jurídica especializada para o setor do agronegócio",
    items: ["Contratos rurais", "Financiamento agrícola", "Questões fundiárias"],
    featured: true,
    route: "/direito-agronegocio"
  },
  {
    id: 4,
    icon: CreditCard,
    title: "Empréstimos e Financiamentos",
    description: "Revisão de contratos, tarifas e juros abusivos, empréstimo consignado, RMC e RCC",
    items: ["Contratos bancários", "Tarifas abusivas", "Juros excessivos"],
    route: "/emprestimos-financiamentos"
  },
  {
    id: 5,
    icon: AlertCircle,
    title: "Cartões e Crédito",
    description: "Problemas com limites, juros elevados, alterações não autorizadas e vendas casadas",
    items: ["Juros elevados", "Limite sem autorização", "Venda casada e contratações indevidas"],
    route: "/cartoes-credito"
  },
  {
    id: 7,
    icon: TrendingDown,
    title: "Superendividamento",
    description: "Planejamento de reorganização financeira e mediação com instituições",
    items: ["Múltiplas dívidas", "Reorganização financeira", "Renegociação"],
    route: "/superendividamento"
  },
  {
    id: 8,
    icon: Briefcase,
    title: "Fraudes e Golpes",
    description: "Boletos falsos, transferências indevidas, clonagem de cartão e empréstimos fraudulentos",
    items: ["Golpe do Pix", "Boletos falsos", "Clonagem", "Golpes financeiros"],
    route: "/fraudes-golpes"
  },
  {
    id: 9,
    icon: Landmark,
    title: "Contas e Serviços Bancários",
    description: "Tarifas indevidas, devolução de valores e movimentações duvidosas",
    items: ["Tarifas indevidas"],
    route: "/contas-servicos-bancarios"
  },
  {
    id: 10,
    icon: Shield,
    title: "Execuções Bancárias",
    description: "Defesa do seu mínimo existencial e patrimonial em processos de execução",
    items: ["Impenhorabilidade de salário", "Impenhorabilidade do bem de família", "Impenhorabilidade do veículo", "Impenhorabilidade dos valores poupados"],
    route: "/execucoes-bancarias"
  },
  {
    id: 11,
    icon: TrendingUp,
    title: "Prorrogação/Alongamento de Dívidas Rurais",
    description: "Defesa do direito do produtor rural em pagar o que é justo e adequado",
    items: ["Renegociação junto a bancos", "Defesa do direito do produtor rural"],
    route: "/dividas-rurais"
  },
];

const MentorsSection = () => {
  return (
    <section id="areas-de-atuacao" className="py-32 relative overflow-hidden">
      {/* Multiple background glows for enhanced lighting */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 150% 100% at 50% 0%, hsl(var(--accent) / 0.12) 0%, hsl(var(--primary) / 0.08) 40%, transparent 80%)",
          filter: "blur(100px)",
        }}
      />
      
      {/* Additional red glow from right */}
      <div
        className="absolute -right-40 top-1/3 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--accent) / 0.14) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      
      {/* Additional gold glow from left */}
      <div
        className="absolute -left-40 bottom-1/4 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center scroll-animate">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
              style={{
                boxShadow: "0 0 30px hsl(var(--primary) / 0.35), 0 0 40px hsl(var(--accent) / 0.25)"
              }}>
              <Sparkles className="w-6 h-6 text-background" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 32px hsl(var(--primary) / 0.28)"
              }}>
              Áreas de Atuação
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nossa equipe está pronta para atender você com experiência, agilidade e dedicação.
          </p>
        </div>

        {/* Services Grid */}
        <div id="servicos" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative scroll-animate-fast"
                style={{
                  animation: "fadeInUp 0.6s ease-out forwards",
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                {/* Animated glow background - intensified for featured */}
                <div className={`absolute -inset-2 bg-gradient-to-br from-primary/25 via-orange-400/15 to-red-600/20 rounded-3xl blur-2xl transition-all duration-500 group-hover:scale-110 ${service.featured ? 'opacity-60 group-hover:opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.16), hsl(var(--primary) / 0.12))",
                    animation: service.featured ? "glow-pulse 3s ease-in-out infinite" : "glow-pulse 3s ease-in-out infinite",
                  }}
                />
                
                {/* Secondary glow layer */}
                <div className={`absolute -inset-1 bg-gradient-to-t from-primary/12 via-transparent to-accent/12 rounded-2xl blur-xl transition-all duration-500 ${service.featured ? 'opacity-50 group-hover:opacity-100' : 'opacity-0 group-hover:opacity-75'}`} />
                
                {/* Card */}
                <div className={`relative h-full p-8 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 group-hover:bg-background/90 ${service.featured ? 'border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-accent/5' : 'border border-primary/20 bg-card/90'} group-hover:border-primary/70`}
                  style={{
                    background: service.featured ? "linear-gradient(135deg, hsl(var(--primary) / 0.12), hsl(var(--accent) / 0.08))" : "hsl(var(--card) / 0.9)",
                  }}>
                  {/* Background gradient with shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-background to-background/50" />
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, transparent 0%, hsl(var(--primary) / 0.14) 25%, transparent 50%, hsl(var(--accent) / 0.12) 75%, transparent 100%)",
                      animation: "shimmer 3s ease-in-out infinite",
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon container with enhanced glow */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-5 group-hover:from-primary/50 group-hover:to-accent/50 transition-all duration-300 relative"
                      style={{
                        boxShadow: "0 0 20px hsl(var(--primary) / 0.2), inset 0 0 20px hsl(var(--primary) / 0.12)",
                      }}>
                      {/* Icon glow on hover */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/40 to-accent/40 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
                      <Icon className="w-7 h-7 text-primary relative z-10 group-hover:drop-shadow-lg transition-all" />
                    </div>
                    
                    {/* Title with glow */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-5 group-hover:text-foreground/80 transition-colors">
                      {service.description}
                    </p>
                    
                    {/* Items with enhanced styling */}
                    <ul className="space-y-2 mb-6">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors flex items-start">
                          <span className="text-primary mr-3 font-bold group-hover:text-accent transition-colors">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Button */}
                    {service.route && (
                      <TransitionLink
                        to={service.route}
                        className="w-full py-2 px-4 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      >
                        Saiba mais
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </TransitionLink>
                    )}
                  </div>
                  
                  {/* Top accent line with glow */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: "0 0 16px hsl(var(--primary) / 0.4), inset 0 0 16px hsl(var(--primary) / 0.18)"
                    }}
                  />
                  
                  {/* Bottom glow effect on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% {
            filter: blur(20px);
            opacity: 0;
          }
          50% {
            filter: blur(30px);
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default MentorsSection;

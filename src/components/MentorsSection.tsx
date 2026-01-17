import { CreditCard, FileText, AlertCircle, Briefcase, Scale, TrendingDown, Sparkles } from "lucide-react";

const services = [
  {
    id: 1,
    icon: CreditCard,
    title: "Empréstimos e Financiamentos",
    description: "Revisão de contratos, taxas e juros abusivos, empréstimo consignado, RMC e RCC",
    items: ["Contratos bancários", "Taxas abusivas", "Juros excessivos"]
  },
  {
    id: 2,
    icon: AlertCircle,
    title: "Cartões e Crédito",
    description: "Problemas com limites, juros elevados, alterações não autorizadas e vendas casadas",
    items: ["Juros elevados", "Limite sem autorização", "Venda casada"]
  },
  {
    id: 3,
    icon: FileText,
    title: "Negativação Indevida",
    description: "Inclusão indevida no SPC/Serasa, cobranças de dívidas inexistentes e débitos não autorizados",
    items: ["SPC/Serasa indevido", "Cobranças irregulares", "Débitos automáticos"]
  },
  {
    id: 4,
    icon: TrendingDown,
    title: "Superendividamento",
    description: "Planejamento de reorganização financeira e mediação com instituições",
    items: ["Múltiplas dívidas", "Reorganização financeira", "Renegociação"]
  },
  {
    id: 5,
    icon: Briefcase,
    title: "Fraudes e Golpes",
    description: "Boletos falsos, transferências indevidas, clonagem de cartão e empréstimos fraudulentos",
    items: ["Boletos falsos", "Clonagem", "Golpes financeiros"]
  },
  {
    id: 6,
    icon: Scale,
    title: "Contas e Serviços Bancários",
    description: "Tarifas indevidas, devolução de valores e movimentações duvidosas",
    items: ["Tarifas indevidas", "Valores a devolver", "Cobrança de mora"]
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
            "radial-gradient(ellipse 150% 100% at 50% 0%, rgba(220, 80, 60, 0.08) 0%, rgba(212, 175, 55, 0.04) 40%, transparent 80%)",
          filter: "blur(100px)",
        }}
      />
      
      {/* Additional red glow from right */}
      <div
        className="absolute -right-40 top-1/3 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(220, 80, 60, 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      
      {/* Additional gold glow from left */}
      <div
        className="absolute -left-40 bottom-1/4 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
              style={{
                boxShadow: "0 0 30px rgba(212, 175, 55, 0.4), 0 0 60px rgba(220, 80, 60, 0.2)"
              }}>
              <Sparkles className="w-6 h-6 text-background" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 40px rgba(212, 175, 55, 0.3)"
              }}>
              Áreas de Atuação
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Atendimento especializado em Direito Bancário com foco em soluções práticas e efetivas para seu caso.
          </p>
        </div>

        {/* Services Grid */}
        <div id="servicos" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative"
                style={{
                  animation: "fadeInUp 0.6s ease-out forwards",
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                {/* Animated glow background */}
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/25 via-orange-400/15 to-red-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                  style={{
                    animation: "glow-pulse 3s ease-in-out infinite",
                  }}
                />
                
                {/* Secondary glow layer */}
                <div className="absolute -inset-1 bg-gradient-to-t from-red-600/10 via-transparent to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-all duration-500" />
                
                {/* Card */}
                <div className="relative h-full p-8 rounded-2xl overflow-hidden border border-primary/20 backdrop-blur-md transition-all duration-300 group-hover:border-primary/70 group-hover:bg-background/90"
                  style={{
                    background: "rgba(8, 8, 8, 0.6)",
                  }}>
                  {/* Background gradient with shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-background to-background/50" />
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, transparent 0%, rgba(212, 175, 55, 0.1) 25%, transparent 50%, rgba(220, 80, 60, 0.08) 75%, transparent 100%)",
                      animation: "shimmer 3s ease-in-out infinite",
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon container with enhanced glow */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-5 group-hover:from-primary/50 group-hover:to-accent/50 transition-all duration-300 relative"
                      style={{
                        boxShadow: "0 0 20px rgba(212, 175, 55, 0.2), inset 0 0 20px rgba(212, 175, 55, 0.1)",
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
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors flex items-start">
                          <span className="text-primary mr-3 font-bold group-hover:text-accent transition-colors">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Top accent line with glow */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: "0 0 20px rgba(212, 175, 55, 0.5), inset 0 0 20px rgba(212, 175, 55, 0.2)"
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

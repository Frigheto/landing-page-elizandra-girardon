import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-32 overflow-hidden min-h-[600px]">
      {/* Video Background Banner */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-55"
          style={{ 
            filter: 'brightness(1) contrast(1.3) saturate(1.2) hue-rotate(-5deg)',
            objectPosition: '50% 35%',
            transform: 'scale(1.1)'
          }}
        >
          <source src="/images/balanca-justica.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay with gradient fade for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/95" />
        {/* Golden glow effect from video */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.2) 0%, transparent 70%)',
          filter: 'blur(50px)'
        }} />
        {/* Red/Orange accent glow for video feel */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 40% 30%, hsl(var(--accent) / 0.16) 0%, transparent 60%)',
          filter: 'blur(60px)'
        }} />
      </div>

      <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
          <span className="text-primary text-lg">✦</span>
          <span className="text-sm text-primary/90">Especializado em Direito Bancário</span>
        </div>

        {/* Heading */}
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight">
          Defenda seus{" "}
          <span className="text-primary" style={{ textShadow: '0 0 28px hsl(var(--primary) / 0.42)' }}>direitos</span>
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Atendimento humanizado e personalizado em Direito Bancário.
          Experiência em negociações com bancos e planejamento de reorganização financeira.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg transition-all duration-300" 
            style={{ boxShadow: '0 0 22px hsl(var(--primary) / 0.38)' }} 
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 36px hsl(var(--primary) / 0.5)'} 
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 22px hsl(var(--primary) / 0.38)'}
            onClick={() => window.open('https://wa.me/5555996202400?text=Olá! Gostaria de analisar meu caso.', '_blank')}
          >
            <Scale className="w-5 h-5 mr-2" />
            Analise seu caso
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-primary/50 hover:bg-primary/10 text-foreground rounded-full px-8 py-6 text-lg transition-all duration-300"
            onClick={() => document.getElementById('areas-de-atuacao')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Saiba mais
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Hero;

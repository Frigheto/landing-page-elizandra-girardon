import { Users } from "lucide-react";

const TeamSection = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 bg-background overflow-hidden">
      {/* Tech line separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Users className="w-6 h-6 text-background" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Nosso Time
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma equipe dedicada e experiente pronta para defender seus direitos
          </p>
        </div>

        {/* Team image showcase */}
        <div className="relative mb-8">
          {/* Outer glow container */}
          <div
            className="relative mx-auto max-w-4xl aspect-video rounded-3xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(220, 80, 60, 0.05) 100%)",
              padding: "2px",
            }}
          >
            {/* Inner content */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-background flex items-center justify-center">
              {/* Background pattern */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 24%, rgba(212, 175, 55, 0.05) 25%, rgba(212, 175, 55, 0.05) 26%, transparent 27%, transparent 74%, rgba(212, 175, 55, 0.05) 75%, rgba(212, 175, 55, 0.05) 76%, transparent 77%, transparent), linear-gradient(180deg, transparent 24%, rgba(212, 175, 55, 0.05) 25%, rgba(212, 175, 55, 0.05) 26%, transparent 27%, transparent 74%, rgba(212, 175, 55, 0.05) 75%, rgba(212, 175, 55, 0.05) 76%, transparent 77%, transparent)",
                  backgroundSize: "50px 50px",
                  opacity: 0.5,
                }}
              />

              {/* Image placeholder - users can replace with actual team photo */}
              <div className="relative w-full h-full">
                <img
                  src="/images/team.jpg"
                  alt="Equipe do Escritório"
                  className="w-full h-full object-cover"
                  style={{
                    maskImage:
                      "radial-gradient(ellipse 95% 90% at 50% 50%, black 0%, black 50%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 95% 90% at 50% 50%, black 0%, black 50%, transparent 100%)",
                  }}
                />

                {/* Radial dissolution overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 95% 90% at 50% 50%, transparent 0%, transparent 40%, rgba(5, 5, 5, 0.1) 60%, rgba(5, 5, 5, 0.3) 80%, rgba(5, 5, 5, 0.6) 90%, hsl(0 0% 5%) 100%)",
                  }}
                />

                {/* Shimmer effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 0%, rgba(212, 175, 55, 0.08) 25%, transparent 50%, rgba(220, 80, 60, 0.06) 75%, transparent 100%)",
                    animation: "shimmer 3s ease-in-out infinite",
                  }}
                />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/40 rounded-tl-3xl" />
                <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-accent/40 rounded-tr-3xl" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-accent/40 rounded-bl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/40 rounded-br-3xl" />
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div
            className="absolute -top-6 -left-6 bg-gradient-to-br from-primary to-accent text-primary-foreground px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-xl"
            style={{ animation: "floatUp 3.5s ease-in-out infinite" }}
          >
            <Users className="w-5 h-5" />
            {/* Count will be dynamic */}
            Profissionais
          </div>
        </div>

        {/* Bottom tech line separator */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <style>{`
        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamSection;

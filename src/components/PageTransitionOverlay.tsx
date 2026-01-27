import { usePageTransition } from '@/hooks/usePageTransition';
import { useEffect } from 'react';

const PageTransitionOverlay = () => {
  const { isTransitioning, endTransition } = usePageTransition();

  useEffect(() => {
    if (isTransitioning) {
      // Reseta a transição após a animação terminar (1000ms)
      const timer = setTimeout(() => {
        endTransition();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, endTransition]);

  return (
    <>
      <div
        className={`fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: isTransitioning 
            ? 'linear-gradient(90deg, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.4), hsl(var(--primary) / 0.2))'
            : 'linear-gradient(90deg, hsl(var(--primary) / 0), hsl(var(--accent) / 0), hsl(var(--primary) / 0))',
          backgroundSize: '200% 100%',
          animation: isTransitioning ? 'gradientMigration 1000ms ease-in-out forwards' : 'none',
        }}
      />
      
      {/* Overlay de fundo para suportar o gradiente */}
      <div
        className="fixed inset-0 z-[9998] bg-background pointer-events-none"
        style={{
          opacity: 0,
          animation: isTransitioning ? 'backgroundFade 1000ms ease-in-out forwards' : 'none',
        }}
      />

      <style>{`
        @keyframes gradientMigration {
          0% {
            background-position: 200% 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            background-position: -200% 0;
            opacity: 0;
          }
        }
        @keyframes backgroundFade {
          0% {
            opacity: 0;
          }
          15% {
            opacity: 0.95;
          }
          60% {
            opacity: 0.95;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default PageTransitionOverlay;

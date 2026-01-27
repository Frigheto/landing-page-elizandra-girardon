import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import MentorsSection from "@/components/MentorsSection";
import TeamSection from "@/components/TeamSection";
import FinalSection from "@/components/FinalSection";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-animate-fast, .scroll-fade, .scroll-slide-left, .scroll-slide-right, .scroll-scale');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <MentorsSection />
        <TeamSection />
        <FinalSection />
      </main>
    </div>
  );
};

export default Index;

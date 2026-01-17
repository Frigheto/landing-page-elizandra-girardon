import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import MentorsSection from "@/components/MentorsSection";
import TeamSection from "@/components/TeamSection";
import FinalSection from "@/components/FinalSection";

const Index = () => {
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

import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { SlopesSection } from '@/components/sections/SlopesSection';
import { ResortSection } from '@/components/sections/ResortSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <SlopesSection />
        <ResortSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import Header from '@/components/Header';
import HeroSection from '@/sections/HeroSection';
import LogoMarquee from '@/components/LogoMarquee';
import FeaturesSection from '@/sections/FeaturesSection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <LogoMarquee />
        <FeaturesSection />
      </main>
    </div>
  );
}

export default App;

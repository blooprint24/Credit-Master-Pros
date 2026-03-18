import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import SocialProof from './components/sections/SocialProof';
import HowItWorks from './components/sections/HowItWorks';
import ServicePackages from './components/sections/ServicePackages';
import LeadSection from './components/sections/LeadSection';
import FAQ from './components/sections/FAQ';
import CTASection from './components/sections/CTASection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <ServicePackages />
        <LeadSection />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import BlogSection from "./components/BlogSection";
import CaseStudies from "./components/CaseStudies";
import CoreBanking from "./components/CoreBanking";
import DigitalBanking from "./components/DigitalBanking";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import Navbar from "./components/Navbar";
import PaperlessCTA from "./components/PaperlessCTA";
import Solutions from "./components/Solutions";

function App() {
  return (
    <div className="figma-frame mx-auto min-h-screen overflow-hidden text-white">
      <div className="fixed-frame-7">
        <Navbar />
      </div>
      <main className="scrolls-frame-13">
        <Hero />
        <Solutions />
        <CoreBanking />
        <PaperlessCTA />
        <LogoStrip />
        <DigitalBanking />
        <BlogSection />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
}

export default App;

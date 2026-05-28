import BlogSection from "./components/BlogSection";
import CaseStudies from "./components/CaseStudies";
import CoreBanking from "./components/CoreBanking";
import CoreBenefits from "./components/CoreBenefits";
import Footer from "./components/Footer";
import Frame43 from "./components/Frame43";
import Frame79 from "./components/Frame79";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PaperlessCTA from "./components/PaperlessCTA";
import Solutions from "./components/Solutions";

const scrollFrames = [
  Hero,
  Solutions,
  CoreBanking,
  CoreBenefits,
  PaperlessCTA,
  Frame79,
  BlogSection,
  CaseStudies,
  Frame43,
  Footer,
];

function App() {
  return (
    <div className="figma-frame mx-auto min-h-screen overflow-hidden text-white">
      <div className="fixed-frame-7">
        <Navbar />
      </div>
      <main className="scrolls-frame-13">
        {scrollFrames.map((Frame) => (
          <Frame key={Frame.name} />
        ))}
      </main>
    </div>
  );
}

export default App;

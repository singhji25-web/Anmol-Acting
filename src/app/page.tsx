import Starfield from "@/components/Starfield";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Headshots from "@/components/Headshots";
import DemoReel from "@/components/DemoReel";
import Resume from "@/components/Resume";
import Training from "@/components/Training";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed background layers: gradient wash + animated canvas starfield */}
      <div aria-hidden className="galaxy-bg fixed inset-0 -z-20" />
      <Starfield />

      <Nav />

      <main className="relative flex-1">
        <Hero />
        <div className="section-fade">
          <Headshots />
          <DemoReel />
          <Resume />
          <Training />
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}

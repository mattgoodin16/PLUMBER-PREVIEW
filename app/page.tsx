import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import BottomCTA from "../components/BottomCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <BottomCTA />
    </>
  );
}

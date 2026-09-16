import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Services from "../components/Services";
import CommercialCTA from "../components/CommercialCTA";
import BlogPreview from "../components/BlogPreview";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Services />
      <CommercialCTA />
      <BlogPreview />
      <Contact />
    </>
  );
}

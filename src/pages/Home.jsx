import Hero from "../components/sections/Hero/Hero";
import About from "../components/sections/About/About";
import Artists from "../components/sections/Artists/Artists";
import Schedule from "../components/sections/Schedule/Schedule";
import Pricing from "../components/sections/Pricing/Pricing";
import Contact from "../components/sections/Contact/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Artists />
      <Schedule />
      <Pricing />
      <Contact />
    </>
  );
}

export default Home;

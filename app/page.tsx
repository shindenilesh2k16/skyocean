import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Products from "@/components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <HeroSlider />

      <Products />

      <About />

      <Contact />

      <Footer />
    </main>
  );
}
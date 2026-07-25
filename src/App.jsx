import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <Gallery />
      <Testimonials />
      <Appointment />
      <Contact />
      <Footer />

      <ScrollTop />
      <WhatsAppButton />
    </>
  );
}

export default App;
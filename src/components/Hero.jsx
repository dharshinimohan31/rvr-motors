import { motion } from "framer-motion";
import hero from "../assets/hero.png";

function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-8 lg:px-20 w-full">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-red-500 tracking-[6px] uppercase font-semibold"
        >
          Professional Multi-Brand Car Care
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-5xl md:text-7xl font-extrabold leading-tight mt-4"
        >
          Precision Care.
          <br />
          Performance Assured.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-300 text-lg mt-6 max-w-xl"
        >
          Professional detailing, ceramic coating, paint protection film,
          polishing, denting & painting, car washing, and premium car sales —
          all under one roof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-5 mt-10 flex-wrap"
        >
          <button
            onClick={() => scrollToSection("appointment")}
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-white font-semibold transition duration-300 cursor-pointer"
          >
            Book Appointment
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-white font-semibold transition duration-300 cursor-pointer"
          >
            Explore Services
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce text-sm">
        ↓ Scroll
      </div>
    </section>
  );
}

export default Hero;
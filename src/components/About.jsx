import { motion } from "framer-motion";

function About() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-red-600 uppercase tracking-[5px] font-semibold">
            About RVR Motors
          </p>

          <h2 className="text-5xl font-bold mt-4 leading-tight">
            Excellence in Every
            <span className="text-red-600"> Detail.</span>
          </h2>

          <p className="text-gray-400 mt-8 leading-8">
            At RVR Motors, we provide professional automotive care for every vehicle. Whether you own a hatchback, sedan, SUV, or luxury car, our skilled technicians deliver exceptional detailing, ceramic coating, polishing, paint protection, and maintenance services using premium products and advanced techniques.
          </p>

          <p className="text-gray-400 mt-6 leading-8">
            Whether you're protecting your investment or preparing your vehicle
            for sale, we ensure every car leaves our workshop looking and
            performing at its very best.
          </p>

          <button className="mt-10 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-semibold transition">
            Learn More
          </button>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-zinc-900 rounded-3xl p-8 text-center border border-zinc-800">
            <h3 className="text-5xl font-bold text-red-600">1000+</h3>
            <p className="mt-4 text-gray-300">Happy Customers</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 text-center border border-zinc-800">
            <h3 className="text-5xl font-bold text-red-600">10+</h3>
            <p className="mt-4 text-gray-300">Years Experience</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 text-center border border-zinc-800">
            <h3 className="text-5xl font-bold text-red-600">500+</h3>
            <p className="mt-4 text-gray-300">Ceramic Coatings</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 text-center border border-zinc-800">
            <h3 className="text-5xl font-bold text-red-600">250+</h3>
            <p className="mt-4 text-gray-300">Luxury Cars Sold</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
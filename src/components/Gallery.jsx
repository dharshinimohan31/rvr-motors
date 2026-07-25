import { motion } from "framer-motion";

import car1 from "../assets/gallery/car1.png";
import car2 from "../assets/gallery/car2.png";
import car3 from "../assets/gallery/car3.png";
import car4 from "../assets/gallery/car4.png";
import car5 from "../assets/gallery/car5.png";
import car6 from "../assets/gallery/car6.png";

const images = [car1, car2, car3, car4, car5, car6];

function Gallery() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-red-600 uppercase tracking-[5px] font-semibold">
            Gallery
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Our Luxury <span className="text-red-600">Collection</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Explore some of our professional detailing, ceramic coating, and all brand
            automotive care projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl group"
            >
              <img
                src={img}
                alt={`Luxury Car ${index + 1}`}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;
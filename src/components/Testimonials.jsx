import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul S.",
    review:
      "Excellent detailing service! My Hyundai Creta looks brand new.",
    car: "Hyundai Creta",
  },
  {
    name: "Priya K.",
    review:
      "Professional ceramic coating for my Honda City. Highly recommended!",
    car: "Honda City",
  },
  {
    name: "Arun M.",
    review:
      "Outstanding workmanship on my BMW. Great attention to detail.",
    car: "BMW 3 Series",
  },
];

function Testimonials() {
  return (
    <section className="bg-[#090909] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-red-600 uppercase tracking-[5px] font-semibold">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold mt-4">
            What Our <span className="text-red-600">Customers Say</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Customer satisfaction is our highest priority.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-red-600 transition"
            >
              <div className="flex gap-1 text-yellow-400 mb-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-300 leading-7">
                "{item.review}"
              </p>

              <h3 className="mt-8 text-xl font-semibold">
                {item.name}
              </h3>

              <p className="text-red-600 mt-2">
                {item.car}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
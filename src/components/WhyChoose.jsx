import {
  FaAward,
  FaShieldAlt,
  FaClock,
  FaCarSide,
  FaUsers,
  FaTools,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaAward size={40} />,
    title: "Quality You Can Trust",
    desc: "We use premium-quality products and advanced equipment to deliver outstanding results for every vehicle.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Reliable Protection",
    desc: "Long-lasting ceramic coating, paint protection, and detailing solutions to keep your vehicle looking its best.",
  },
  {
    icon: <FaClock size={40} />,
    title: "On-Time Delivery",
    desc: "Quick turnaround without compromising on quality or attention to detail.",
  },
  {
    icon: <FaCarSide size={40} />,
    title: "Multi-Brand Expertise",
    desc: "Professional care for hatchbacks, sedans, SUVs, premium, and luxury vehicles of all major brands.",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Customer Satisfaction",
    desc: "Hundreds of happy customers trust us for reliable, transparent, and professional automotive care.",
  },
  {
    icon: <FaTools size={40} />,
    title: "Modern Technology",
    desc: "Professional tools, skilled technicians, and the latest techniques ensure exceptional results every time.",
  },
];

function WhyChoose() {
  return (
    <section className="bg-[#090909] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-red-600 uppercase tracking-[5px] font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Experience the <span className="text-red-600">RVR Difference</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            At RVR Motors, we combine expert craftsmanship, premium-quality
            products, and exceptional customer service to deliver professional
            automotive care for every vehicle, regardless of brand or model.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-600 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-red-600 mb-6">{feature.icon}</div>

              <h3 className="text-2xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
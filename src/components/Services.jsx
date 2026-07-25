import {
  FaCar,
  FaSprayCan,
  FaShieldAlt,
  FaCrown,
  FaPaintRoller,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    icon: <FaShieldAlt size={40} />,
    title: "Ceramic Coating",
    desc: "Long-lasting protection with a deep glossy finish.",
  },
  {
    icon: <FaPaintRoller size={40} />,
    title: "Paint Protection Film",
    desc: "Protect your car from scratches, chips, and road debris.",
  },
  {
    icon: <FaSprayCan size={40} />,
    title: "Car Detailing",
    desc: "Complete interior and exterior detailing for a showroom finish.",
  },
  {
    icon: <FaCar size={40} />,
    title: "Premium Car Sales",
    desc: "Buy inspected and certified luxury pre-owned cars.",
  },
  {
    icon: <FaCrown size={40} />,
    title: "Luxury Polishing",
    desc: "Restore shine with premium polishing techniques.",
  },
  {
    icon: <FaTools size={40} />,
    title: "General Service",
    desc: "Reliable maintenance and mechanical services.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-[#090909] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Our <span className="text-red-600">Services</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Premium automotive solutions for every luxury vehicle.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-600 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-red-600 mb-6">{service.icon}</div>

              <h3 className="text-2xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-center text-gray-400 mt-8">
                Professional services available for all car brands and models.
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;
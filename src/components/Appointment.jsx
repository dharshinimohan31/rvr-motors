import { useState } from "react";
import { motion } from "framer-motion";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `🚗 *RVR Motors Appointment Booking*

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}
🚘 Vehicle: ${formData.vehicle}
🛠 Service: ${formData.service}
📅 Preferred Date: ${formData.date}

📝 Message:
${formData.message}`;

    const whatsappURL = `https://wa.me/919952172579?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="appointment" className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-red-600 uppercase tracking-[5px] font-semibold">
            Book Appointment
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Schedule Your <span className="text-red-600">Service</span>
          </h2>

          <p className="text-gray-400 mt-6">
            Fill in your details and we'll contact you through WhatsApp.
          </p>
        </motion.div>

        <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800">
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-zinc-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-red-600"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-zinc-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-red-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-zinc-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-red-600"
            />

            <input
              type="text"
              name="vehicle"
              placeholder="Vehicle Model"
              value={formData.vehicle}
              onChange={handleChange}
              required
              className="bg-zinc-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-red-600"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="bg-zinc-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="">Select Service</option>
              <option>Ceramic Coating</option>
              <option>Paint Protection Film</option>
              <option>Car Detailing</option>
              <option>Luxury Polishing</option>
              <option>General Service</option>
            </select>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="bg-zinc-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-red-600"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Additional Message"
              value={formData.message}
              onChange={handleChange}
              className="md:col-span-2 bg-zinc-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-red-600"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 bg-red-600 hover:bg-red-700 py-4 rounded-xl font-semibold text-lg transition"
            >
              Book via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Appointment;
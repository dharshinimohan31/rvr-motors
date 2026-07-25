import { motion } from "framer-motion";

function Appointment() {
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
            Fill in your details and we'll get back to you shortly.
          </p>
        </motion.div>

        <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800">

          <form className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="bg-zinc-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-red-600"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-zinc-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-red-600"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-zinc-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-red-600"
            />

            <input
              type="text"
              placeholder="Vehicle Model"
              className="bg-zinc-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-red-600"
            />

            <select className="bg-zinc-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-red-600">
              <option>Select Service</option>
              <option>Ceramic Coating</option>
              <option>Paint Protection Film</option>
              <option>Car Detailing</option>
              <option>Luxury Polishing</option>
              <option>General Service</option>
            </select>

            <input
              type="date"
              className="bg-zinc-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-red-600"
            />

            <textarea
              rows="5"
              placeholder="Additional Message"
              className="md:col-span-2 bg-zinc-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-red-600"
            ></textarea>

            <button
              className="md:col-span-2 bg-red-600 hover:bg-red-700 py-4 rounded-xl font-semibold text-lg transition"
            >
              Book Appointment
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Appointment;
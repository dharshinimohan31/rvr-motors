import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
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
            Contact Us
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Get In <span className="text-red-600">Touch</span>
          </h2>

          <p className="text-gray-400 mt-6">
            We'd love to hear from you. Contact us for appointments and inquiries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          <div className="space-y-8">

            <div className="flex items-center gap-5 bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
              <FaPhoneAlt className="text-red-600 text-2xl" />
              <div>
                <h3 className="font-semibold text-xl">Phone</h3>
                <p className="text-gray-400">+91 99521 72579</p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
              <FaEnvelope className="text-red-600 text-2xl" />
              <div>
                <h3 className="font-semibold text-xl">Email</h3>
                <p className="text-gray-400">rvrokit01@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
              <FaMapMarkerAlt className="text-red-600 text-2xl" />
              <div>
                <h3 className="font-semibold text-xl">Address</h3>
                <p className="text-gray-400 leading-7">
  No. 265/1,<br />
  Near Ganesh Nagar,<br />
  Kadachanendhal,<br />
  Madurai – 625107,<br />
  Tamil Nadu, India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
              <FaClock className="text-red-600 text-2xl" />
              <div>
                <h3 className="font-semibold text-xl">Working Hours</h3>
                <p className="text-gray-400">
                  Mon – Sat : 9:00 AM – 7:00 PM
                </p>
              </div>
            </div>

          </div>

          <div className="rounded-3xl overflow-hidden border border-zinc-800">
            <iframe
              src="https://maps.google.com/maps?q=9°58'54.6%22N+78°09'39.2%22E&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
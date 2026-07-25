import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-800 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold">
            RVR <span className="text-red-600">Motors</span>
          </h2>

          <p className="text-gray-400 mt-2">
            Professional Multi-Brand Automotive Care
          </p>
        </div>

        {/* Social Media */}
        <div className="flex gap-6 text-2xl">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/rvr.motor/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition duration-300"
          >
            <FaInstagram />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919952172579"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-500 transition duration-300"
          >
            <FaWhatsapp />
          </a>

        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center">
          © 2026 RVR Motors. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
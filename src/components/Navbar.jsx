import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="RVR Motors"
            className="h-12 w-auto"
          />

          <div>
            <h1 className="text-white text-2xl font-bold">
              RVR <span className="text-red-500">Motors</span>
            </h1>

            <p className="text-gray-300 text-xs">
              Premium Car Care
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li>
            <a href="#home" className="hover:text-yellow-500 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-yellow-500 transition">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-yellow-500 transition">
              Services
            </a>
          </li>

          <li>
            <a href="#gallery" className="hover:text-yellow-500 transition">
              Gallery
            </a>
          </li>

          <li>
            <a href="#appointment" className="hover:text-yellow-500 transition">
              Appointment
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-yellow-500 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-black md:hidden text-white px-6 py-5 space-y-4">
          <a
            href="#home"
            className="block hover:text-red-500"
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="#about"
            className="block hover:text-red-500"
            onClick={closeMenu}
          >
            About
          </a>

          <a
            href="#services"
            className="block hover:text-red-500"
            onClick={closeMenu}
          >
            Services
          </a>

          <a
            href="#gallery"
            className="block hover:text-red-500"
            onClick={closeMenu}
          >
            Gallery
          </a>

          <a
            href="#appointment"
            className="block hover:text-red-500"
            onClick={closeMenu}
          >
            Appointment
          </a>

          <a
            href="#contact"
            className="block hover:text-red-500"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
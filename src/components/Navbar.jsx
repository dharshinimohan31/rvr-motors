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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 shadow-lg"
          : "bg-transparent"
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
          <li><a href="#" className="hover:text-yellow-500">Home</a></li>
          <li><a href="#" className="hover:text-yellow-500">About</a></li>
          <li><a href="#" className="hover:text-yellow-500">Services</a></li>
          <li><a href="#" className="hover:text-yellow-500">Gallery</a></li>
          <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
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
          <a href="#" className="block hover:text-red-500">Home</a>
          <a href="#" className="block hover:text-red-500">About</a>
          <a href="#" className="block hover:text-red-500">Services</a>
          <a href="#" className="block hover:text-red-500">Gallery</a>
          <a href="#" className="block hover:text-red-500">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
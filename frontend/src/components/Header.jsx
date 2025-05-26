import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-01.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-4 shadow-md rounded-b-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo + Name */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Samsasali Logo"
            className="h-10 w-10 object-cover rounded-full border-2 border-white shadow"
          />
          <span className="text-2xl font-extrabold tracking-wide">Samsasali</span>
        </Link>

        {/* Hamburger Button (mobile only) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="px-4 py-2 rounded-full font-medium transition duration-300 hover:bg-amber-100 hover:text-yellow-700"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="px-4 py-2 rounded-full font-medium transition duration-300 hover:bg-amber-100 hover:text-yellow-700"
          >
            Products
          </Link>
          <Link
            to="/services"
            className="px-4 py-2 rounded-full font-medium transition duration-300 hover:bg-amber-100 hover:text-yellow-700"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-full font-medium transition duration-300 hover:bg-amber-100 hover:text-yellow-700"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2 px-4">
          <Link
            to="/"
            className="block bg-white text-yellow-700 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-100 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block bg-white text-yellow-700 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-100 transition"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/services"
            className="block bg-white text-yellow-700 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-100 transition"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block bg-white text-yellow-700 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-100 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;


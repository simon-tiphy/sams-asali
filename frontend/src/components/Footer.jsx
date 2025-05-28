import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, ArrowUp } from "lucide-react";
import logo from "../assets/logo-01.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-yellow-700 text-white py-10 px-6 rounded-t-2xl">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo + About */}
        <div className="space-y-4">
          <div className="flex justify-center md:justify-start items-center space-x-2">
            <img src={logo} alt="Samsasali Logo" className="h-12 w-12 rounded-full border-2 border-white" />
            <h2 className="text-2xl font-bold">Samsasali</h2>
          </div>
          <p className="text-sm opacity-80">Quality honey, hives, and beekeeping services made with care in every drop.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-300 transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-yellow-300 transition">Products</Link></li>
            <li><Link to="/services" className="hover:text-yellow-300 transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect with us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-yellow-300 transition"><Facebook /></a>
            <a href="#" aria-label="Instagram" className="hover:text-yellow-300 transition"><Instagram /></a>
            <a href="mailto:simontiphy@gmail.com" className="hover:text-yellow-300 transition"><Mail /></a>
            <a href="https://wa.me/254795778490" aria-label="WhatsApp" className="hover:text-yellow-300 transition"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-6 w-6" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-yellow-500 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm opacity-75">&copy; {new Date().getFullYear()} Samsasali. All rights reserved.</p>
        <button
          onClick={scrollToTop}
          className="mt-4 md:mt-0 bg-white text-yellow-700 px-3 py-1 rounded-full flex items-center gap-1 hover:bg-yellow-300 transition"
        >
          <ArrowUp size={16} /> Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;

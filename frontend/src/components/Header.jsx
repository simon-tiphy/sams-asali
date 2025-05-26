// import { Link } from "react-router-dom";
// import logo from "../assets/logo-01.png"; // ✅ Make sure this path is correct

// function Header() {
//   return (
//     <header className="bg-yellow-600 text-white px-6 py-4 shadow">
//       <div className="flex justify-between items-center max-w-6xl mx-auto">
        
//         {/* Logo + Text */}
//         <Link to="/" className="flex items-center space-x-2">
//           <img
//             src={logo}
//             alt="Samsasali Logo"
//             className="h-10 w-10 object-cover rounded-full" // You can tweak size/style
//           />
//           <span className="text-2xl font-bold">Samsasali</span>
//         </Link>

//         {/* Navigation */}
//         <nav className="space-x-4">
//           <Link to="/" className="hover:underline">Home</Link>
//           <Link to="/products" className="hover:underline">Products</Link>
//           <Link to="/services" className="hover:underline">Services</Link>
//           <Link to="/contact" className="hover:underline">Contact</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;


import { Link } from "react-router-dom";
import logo from "../assets/logo-01.png";

function Header() {
  return (
    <header className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-4 shadow-md rounded-b-2xl">
      <div className="flex justify-between items-center max-w-6xl mx-auto">

        {/* Logo + Text */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src={logo}
            alt="Samsasali Logo"
            className="h-12 w-12 object-cover rounded-full shadow-lg border-2 border-white transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-3xl font-extrabold tracking-wide group-hover:text-yellow-100 transition duration-300">
            Samsasali
          </span>
        </Link>

        {/* Navigation */}
        <nav className="space-x-4">
          {[
            { to: "/", label: "Home" },
            { to: "/products", label: "Products" },
            { to: "/services", label: "Services" },
            { to: "/contact", label: "Contact" },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className="text-white hover:bg-white hover:text-yellow-600 px-4 py-2 rounded-full transition duration-300 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;

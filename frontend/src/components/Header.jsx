// import React from 'react';
// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <header className="bg-yellow-100 shadow-md">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-yellow-700">Samsasali</h1>
//         <nav className="space-x-4">
//           <Link to="/" className="text-gray-700 hover:text-yellow-700 font-medium">Home</Link>
//           <Link to="/products" className="text-gray-700 hover:text-yellow-700 font-medium">Products</Link>
//           <Link to="/services" className="text-gray-700 hover:text-yellow-700 font-medium">Services</Link>
//           <Link to="/contact" className="text-gray-700 hover:text-yellow-700 font-medium">Contact</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;


import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-yellow-600 text-white px-6 py-4 shadow">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Samsasali</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/products" className="hover:underline">Products</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

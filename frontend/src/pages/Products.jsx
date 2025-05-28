// src/pages/Products.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Import your images
import raw1 from "../assets/product3.png";
import raw2 from "../assets/product3.png";
import proc1 from "../assets/product1.png";
import proc2 from "../assets/product1.png";
import org1 from "../assets/product2.png";
import org2 from "../assets/product1.png";

const allProducts = [
  {
    id: 1,
    name: "Raw Honey 1kg",
    category: "Raw",
    price: 1299, // KSh 1,299
    rating: 4.8,
    images: [raw1, raw2],
    description:
      "Our purest raw honey, hand-harvested and minimally processed to preserve all the natural enzymes and nutrients.",
  },
  {
    id: 2,
    name: "Processed Honey 1kg",
    category: "Processed",
    price: 1599, // KSh 1,599
    rating: 4.5,
    images: [proc1, proc2],
    description:
      "Smooth and crystal-clear, our processed honey is filtered to perfection—ideal for everyday use and baking.",
  },
  {
    id: 3,
    name: "Organic Honey 500g",
    category: "Organic",
    price: 949, // KSh 949
    rating: 4.7,
    images: [org1, org2],
    description:
      "Certified organic honey from pesticide-free hives—rich in flavor and goodness.",
  },
  // …add more products as needed, importing their images similarly
];

// Animation variants
const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Products() {
  const [filter, setFilter] = useState("All");
  const [quickView, setQuickView] = useState(null);

  const filtered = allProducts.filter((p) =>
    filter === "All" ? true : p.category === filter
  );

  return (
    <div className="bg-[#121212] text-white py-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-8"
        >
          Our Products
        </motion.h1>

        {/* Filters */}
        <div className="flex justify-center space-x-4 mb-12">
          {["All", "Raw", "Processed", "Organic"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                filter === cat
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-yellow-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-lg border border-yellow-500/30 flex flex-col"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center mb-4">
                  <span className="text-xl font-bold text-yellow-400">
                    KSh {product.price.toLocaleString()}
                  </span>
                  <div className="ml-auto flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-sm ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-600"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="text-gray-400 text-sm ml-1">
                      ({product.rating})
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 flex-grow">{product.description}</p>
                <div className="mt-6 flex space-x-2">
                  <button
                    onClick={() => setQuickView(product)}
                    className="px-4 py-2 bg-yellow-500 text-black rounded-lg font-medium hover:bg-yellow-400 transition"
                  >
                    Quick View
                  </button>
                  <Link
                    to="/contact"
                    className="px-4 py-2 border border-yellow-500 text-yellow-400 rounded-lg font-medium hover:bg-yellow-500 hover:text-black transition"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickView && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1e1e1e] rounded-2xl overflow-hidden max-w-lg w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h3 className="text-2xl font-semibold text-yellow-300">
                  {quickView.name}
                </h3>
                <button
                  onClick={() => setQuickView(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  &times;
                </button>
              </div>
              <div className="p-4">
                <img
                  src={quickView.images[0]}
                  alt={quickView.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-300 mb-4">{quickView.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-yellow-400">
                    KSh {quickView.price.toLocaleString()}
                  </span>
                  <Link
                    to="/contact"
                    className="px-6 py-2 bg-yellow-500 text-black rounded-lg font-medium hover:bg-yellow-400 transition"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";

const products = [
  {
    img: product1,
    name: "Raw Honey 500ml",
    desc: "Unfiltered and straight from the hive, packed with nutrients.",
    price: "KSh 600",
  },
  {
    img: product2,
    name: "Processed Honey 1L",
    desc: "Triple-filtered for a smooth taste and long shelf life.",
    price: "KSh 1000",
  },
  {
    img: product3,
    name: "Organic Honey 250ml",
    desc: "Certified organic, perfect for tea and home remedies.",
    price: "KSh 400",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function Products() {
  return (
    <div className="bg-white text-gray-800 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-800 mb-4">Our Honey Collection</h1>
        <p className="text-lg text-gray-600">
          Choose from our range of raw, processed, and organic honey products.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {products.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="bg-yellow-50 rounded-lg shadow-lg p-5 hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-56 w-full object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-2">{item.desc}</p>
            <p className="text-lg font-bold text-yellow-700">{item.price}</p>
            <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition">
              Buy Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

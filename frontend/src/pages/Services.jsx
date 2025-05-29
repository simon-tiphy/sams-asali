// src/pages/Services.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import your images
import harvestingImg from "../assets/harvesting.jpg";
import beehivesImg from "../assets/Beehives..jpg";
import relocationImg from "../assets/relocation.jpg";
import gearsImg from "../assets/gears.jpg";

const services = [
  {
    title: "Honey Harvesting",
    description:
      "We offer 100% assurance on organic honey harvesting. The honey is carefully harvested to retain its natural flavor, nutrients, and medicinal value.",
    image: harvestingImg,
  },
  {
    title: "Beehive Leasing & Sales",
    description:
      "Rent or own a top-quality beehive. Our packages come with professional setup and support for first-time beekeepers.",
    image: beehivesImg,
  },
  {
    title: "Bee Relocation Services",
    description:
      "We specialize in the safe and eco-friendly relocation of bee colonies from residential or commercial areas.",
    image: relocationImg,
  },
  {
    title: "Beekeeping Gear",
    description:
      "Stay protected with our range of professional beekeeping suits, gloves, and harvesting tools.",
    image: gearsImg,
  },
];

export default function Services() {
  return (
    <div className="bg-[#121212] bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600  text-white py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-yellow-400 mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1e1e1e] rounded-2xl shadow-lg border border-yellow-500/30 overflow-hidden flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-yellow-300 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-block bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg shadow hover:bg-yellow-400 transition"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

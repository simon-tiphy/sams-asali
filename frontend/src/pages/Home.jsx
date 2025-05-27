import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import heroVideo from "../assets/herovideo.webp";
import heroImg from "../assets/cover.jpg";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import beeSuit from "../assets/beesuit.jpg";
import hive from "../assets/Beehives..jpg";
import relocation from "../assets/relocation.jpg";
import ctaImg from "../assets/call.jpg"; // New background for the call to action section

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2, // increased from 1
      ease: "easeOut", // smooth easing
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4, // was 0.2, now slower
    },
  },
};

// Testimonials Data
const testimonials = [
  {
    text: "I’ve been buying honey from Samsasali for over a year — it’s the purest I’ve ever tasted. 🍯💛",
    author: "Sarah M., Nakuru",
  },
  {
    text: "Their bee relocation service was fast and safe. Highly recommend! 🐝👏",
    author: "David K., Eldoret",
  },
  {
    text: "I love their harvesting gear. Great quality and affordable prices! 🧤🔥",

    author: "Linet W., Nairobi",
  },
  {
    text: "Amazing honey and excellent customer service. I'm a fan for life! 🌼😊",
    author: "Joseph N., Kisumu",
  },
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000); // 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#212529] text-yellow-300 overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        transition={{ duration: 2, ease: "easeInOut" }}
        variants={fadeInUp}
        className="relative min-h-screen flex items-center justify-center px-6"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
          poster={heroImg}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="" />
        <motion.div
          className="relative max-w-4xl text-center z-10"
          variants={fadeInUp}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg text-white">
            Nature’s Purest Honey — Straight from the Hive
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md text-yellow-200">
            At Samsasali, we deliver the finest raw and processed honey along
            with expert bee services and premium harvesting gear.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/products"
            className="inline-block bg-yellow-500 text-[#212529] font-semibold px-8 py-4 rounded shadow-lg hover:bg-yellow-400 transition"
          >
            Browse Products
          </motion.a>
        </motion.div>
      </motion.section>

      {/* About Us */}
      <motion.section
        className="py-24 bg-[#121212] text-white"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-[#FBBF24] mb-6">
              About Samsasali
            </h2>
            <p className="leading-relaxed text-gray-300 text-lg">
              Based in Kenya, Samsasali is more than just a honey brand — we are
              passionate beekeepers, educators, and suppliers. From raw and
              processed honey to hive leasing, bee relocation, and premium
              harvesting gear, we serve with purpose and purity.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <img
              src={beeSuit}
              alt="Beekeeper suit"
              className="rounded-2xl shadow-2xl object-cover w-full h-72 border border-[#FBBF24]"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Products */}
      <motion.section
        className="py-24 bg-[#121212] text-white"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#FBBF24] mb-14">
            Our Bestsellers
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[product1, product2, product3].map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="bg-black rounded-2xl p-6 shadow-lg hover:shadow-[#FBBF24]/70 border border-[#2c2c2c] transition"
              >
                <img
                  src={img}
                  alt="product"
                  className="h-52 w-full object-cover rounded-lg mb-5 border border-[#FBBF24]/20"
                />
                <h3 className="text-xl font-semibold text-[#FBBF24]">
                  Honey Product
                </h3>
                <p className="text-gray-300 mt-2 mb-4">
                  Pure & natural — straight from our farms.
                </p>
                <motion.a
                  href="/products"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-yellow-500 text-[#212529] font-semibold px-6 py-2 rounded-full shadow-md hover:bg-yellow-400 transition"
                >
                  View Product
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        className="py-24 bg-[#121212] text-white"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.0, ease: "easeInOut" }}
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#FBBF24] mb-14">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                img: hive,
                title: "Hive Sales & Rentals",
                desc: "Buy or lease beehives, tailored to your environment.",
              },
              {
                img: relocation,
                title: "Bee Relocation",
                desc: "Safe, expert relocation of wild hives from your home or farm.",
              },
              {
                img: beeSuit,
                title: "Harvesting Gear",
                desc: "We stock suits, smokers, and tools for beginner & pro beekeepers.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-black rounded-2xl p-6 shadow-md border border-[#2c2c2c] hover:shadow-[#FBBF24]/50 transition duration-300"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-48 w-full object-cover rounded-lg mb-4 border border-[#FBBF24]/10"
                />
                <h3 className="text-xl font-bold text-[#FBBF24] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">{service.desc}</p>
                <motion.a
                  href="/services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-yellow-500 text-[#212529] font-semibold px-6 py-2 rounded-full shadow-md hover:bg-yellow-400 transition"
                >
                  Learn More
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-24 bg-[#121212] text-white"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.0, ease: "easeInOut" }}
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#FBBF24] mb-10">
            What Customers Say
          </h2>

          <div className="relative h-36 md:h-40">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute w-full"
              >
                <p className="italic text-gray-300 text-lg max-w-2xl mx-auto">
                  “{testimonials[current].text}”
                </p>
                <p className="mt-6 font-bold text-[#FBBF24]">
                  — {testimonials[current].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-24 bg-[#121212] text-yellow-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Partner with Nature — Choose Samsasali
            </h2>
            <p className="text-lg text-yellow-200 leading-relaxed">
              We’re more than just honey producers. From eco-friendly beekeeping
              to high-quality gear and relocation services — we’re your trusted
              partner in every step of the beekeeping journey.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-yellow-500 text-[#121212] font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-400 transition"
            >
              Contact Us Today
            </motion.a>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="w-full"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={ctaImg}
              alt="Call to Action visual"
              className="rounded-2xl shadow-xl border border-yellow-500 object-cover w-full h-80 md:h-96"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;

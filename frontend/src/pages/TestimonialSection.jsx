import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "I’ve been buying honey from Samsasali for over a year 🍯 — it’s the purest I’ve ever tasted! Their bee relocation team is so professional 🐝.",
    name: "— Sarah M., Nakuru",
  },
  {
    quote: "The harvesting gear is top-notch! 🧤 As a beginner, I felt safe and confident thanks to Samsasali's equipment and support. 🙌",
    name: "— John K., Eldoret",
  },
  {
    quote: "We leased a hive from them and it's been amazing 💛. The team is super responsive and so passionate about beekeeping 🌼.",
    name: "— Amina W., Machakos",
  },
];

function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="py-24 bg-[#121212] text-white"
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1.0, ease: "easeInOut" }}
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#FBBF24] mb-8">What Customers Say</h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <p className="italic text-gray-300 text-lg max-w-2xl mx-auto">
              “{testimonials[index].quote}”
            </p>
            <p className="mt-6 font-bold text-[#FBBF24]">{testimonials[index].name}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

export default TestimonialSection;
<motion.section
  className="py-24 bg-[#121212] text-white"
  initial="hidden"
  whileInView="visible"
  transition={{ duration: 1.0, ease: "easeInOut" }}
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-[#FBBF24] mb-10">What Customers Say</h2>

    <motion.div
      key={current}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
    >
      <p className="italic text-gray-300 text-lg max-w-2xl mx-auto">
        “{testimonials[current].text}”
      </p>
      <p className="mt-6 font-bold text-[#FBBF24]">— {testimonials[current].author}</p>
    </motion.div>
  </div>
</motion.section>
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="bg-[#121212] text-white min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-[#1e1e1e] p-8 rounded-2xl shadow-lg border border-yellow-500/30"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Get in Touch
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-yellow-300">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-md bg-[#2a2a2a] border border-yellow-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-yellow-300">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-md bg-[#2a2a2a] border border-yellow-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-yellow-300">Message</label>
              <textarea
                rows="5"
                required
                className="w-full px-4 py-3 rounded-md bg-[#2a2a2a] border border-yellow-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info + Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-[#1e1e1e] p-6 rounded-2xl shadow-lg border border-yellow-500/30">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              Contact Information
            </h3>
            <p className="text-gray-300">
              <strong>Address:</strong> Nairobi, Kenya
            </p>
            <p className="text-gray-300">
              <strong>Phone:</strong> <a href="tel:+254795778490" className="text-yellow-300 hover:underline">+254 795778490</a>
            </p>
            <p className="text-gray-300">
              <strong>Email:</strong> <a href="mailto:simontiphy@gmail.com" className="text-yellow-300 hover:underline">simontiphy@gmail.com</a>
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg border border-yellow-500/30">
            <iframe
              title="Samsasali Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.3183219441175!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10dfce6c0001%3A0x7a9c51b5a3bb6ae7!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1653061214067!5m2!1sen!2ske"
              width="100%"
              height="250"
              loading="lazy"
              className="border-0 w-full h-64"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;

// import heroImg from "../assets/golden-honey-drips-against-amber-background-showcasing-sweetness-photo.jpeg";
// // import heroImg from "../assets/hero-honey.jpg";
// import product1 from "../assets/product1.png";
// import product2 from "../assets/product2.png";
// import product3 from "../assets/product3.png";
// import beeSuit from "../assets/beesuit.jpg";
// import hive from "../assets/Beehives..jpg";
// import relocation from "../assets/relocation.jpg";

// function Home() {
//   return (
//     <div className="bg-white text-gray-800">

//       {/* Hero */}
//       <section className="bg-yellow-100 py-12">
//         <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
//             <h1 className="text-4xl md:text-5xl font-bold text-yellow-800 mb-4 leading-tight">
//               Nature’s Purest Honey — Straight from the Hive
//             </h1>
//             <p className="text-lg text-yellow-700 mb-6">
//               At Samsasali, we deliver the finest raw and processed honey along with expert bee services and premium harvesting gear.
//             </p>
//             <a href="/products" className="bg-yellow-600 text-white px-6 py-3 rounded shadow hover:bg-yellow-700 transition">
//               Browse Products
//             </a>
//           </div>
//           <div className="md:w-1/2">
//             <img src={heroImg} alt="Honey jars" className="rounded-lg shadow-xl" />
//           </div>
//         </div>
//       </section>

//       {/* About Us */}
//       <section className="py-16 bg-white">
//         <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
//           <div>
//             <h2 className="text-3xl font-semibold text-yellow-700 mb-4">About Samsasali</h2>
//             <p className="text-gray-700 leading-relaxed">
//               Based in Kenya, Samsasali is more than just a honey brand — we are passionate beekeepers, educators, and suppliers. We sell both raw and packaged honey, offer hive leasing and bee relocation, and supply high-quality harvesting equipment like bee suits and smokers.
//             </p>
//           </div>
//           <div>
//             <img src={beeSuit} alt="Beekeeper suit" className="rounded shadow-md" />
//           </div>
//         </div>
//       </section>

//       {/* Products Preview */}
//       <section className="bg-yellow-50 py-16">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-semibold text-yellow-800 mb-10">Our Bestsellers</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[{img: product1, name: "Raw Honey 500ml"}, {img: product2, name: "Processed Honey 1L"}, {img: product3, name: "Organic Honey 250ml"}].map((item, i) => (
//               <div key={i} className="bg-white rounded shadow hover:shadow-lg transition p-4">
//                 <img src={item.img} alt={item.name} className="h-48 w-full object-cover rounded mb-4" />
//                 <h3 className="text-lg font-semibold">{item.name}</h3>
//                 <p className="text-yellow-700 mt-2">Pure & natural — straight from our farms.</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="py-16 bg-white">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-semibold text-yellow-800 mb-10">What We Offer</h2>
//           <div className="grid md:grid-cols-3 gap-8 text-left">
//             {[{
//               img: hive,
//               title: "Hive Sales & Rentals",
//               desc: "Buy or lease beehives, tailored to your environment."
//             }, {
//               img: relocation,
//               title: "Bee Relocation",
//               desc: "Safe, expert relocation of wild hives from your home or farm."
//             }, {
//               img: beeSuit,
//               title: "Harvesting Gear",
//               desc: "We stock suits, smokers, and tools for beginner & pro beekeepers."
//             }].map((service, i) => (
//               <div key={i} className="rounded shadow p-4 hover:shadow-md transition">
//                 <img src={service.img} alt={service.title} className="h-40 w-full object-cover rounded mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//                 <p className="text-gray-600">{service.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="bg-yellow-100 py-12">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-2xl font-semibold text-yellow-800 mb-6">What Customers Say</h2>
//           <p className="italic text-gray-700">
//             “I’ve been buying honey from Samsasali for over a year — it’s the purest I’ve ever tasted. Plus their bee relocation team is so professional.”
//           </p>
//           <p className="mt-4 font-bold text-yellow-900">— Sarah M., Nakuru</p>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="bg-yellow-700 py-12 text-center text-white">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-4">Partner with Nature — Choose Samsasali</h2>
//         <p className="mb-6">Whether you're a customer, farmer, or beekeeper — we’re here to help.</p>
//         <a href="/contact" className="bg-white text-yellow-700 px-6 py-3 rounded shadow hover:bg-yellow-100 transition">
//           Contact Us Today
//         </a>
//       </section>

//     </div>
//   );
// }

// export default Home;



// import { motion } from "framer-motion";
// import heroImg from "../assets/golden-honey-drips-against-amber-background-showcasing-sweetness-photo.jpeg";
// import product1 from "../assets/product1.png";
// import product2 from "../assets/product2.png";
// import product3 from "../assets/product3.png";
// import beeSuit from "../assets/beesuit.jpg";
// import hive from "../assets/Beehives..jpg";
// import relocation from "../assets/relocation.jpg";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0 },
// };

// function Home() {
//   return (
//     <div className="bg-gray-900 text-yellow-300">

//       {/* Hero - Fullscreen dark background */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.6 }}
//         transition={{ duration: 1 }}
//         variants={fadeInUp}
//         className="relative min-h-screen flex items-center justify-center px-6"
//         style={{
//           backgroundImage: `url(${heroImg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           filter: "brightness(0.5)", // darken background image
//         }}
//       >
//         {/* Black overlay with some transparency */}
//         <div className="absolute inset-0 bg-black bg-opacity-75"></div>

//         {/* Content */}
//         <div className="relative max-w-4xl text-center text-yellow-400 z-10">
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
//             Nature’s Purest Honey — Straight from the Hive
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
//             At Samsasali, we deliver the finest raw and processed honey along with expert bee services and premium harvesting gear.
//           </p>
//           <a
//             href="/products"
//             className="inline-block bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded shadow-lg hover:bg-yellow-400 transition"
//           >
//             Browse Products
//           </a>
//         </div>
//       </motion.section>

//       {/* About Us */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 1, delay: 0.2 }}
//         variants={fadeInUp}
//         className="py-16 bg-gray-800"
//       >
//         <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
//           <div>
//             <h2 className="text-3xl font-semibold text-yellow-400 mb-4">About Samsasali</h2>
//             <p className="text-yellow-300 leading-relaxed">
//               Based in Kenya, Samsasali is more than just a honey brand — we are passionate beekeepers, educators, and suppliers. We sell both raw and packaged honey, offer hive leasing and bee relocation, and supply high-quality harvesting equipment like bee suits and smokers.
//             </p>
//           </div>
//           <div>
//             <img src={beeSuit} alt="Beekeeper suit" className="rounded shadow-lg" />
//           </div>
//         </div>
//       </motion.section>

//       {/* Products Preview */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 1, delay: 0.4 }}
//         variants={fadeInUp}
//         className="bg-gray-900 py-16"
//       >
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-semibold text-yellow-400 mb-10">Our Bestsellers</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[{img: product1, name: "Raw Honey 500ml"}, {img: product2, name: "Processed Honey 1L"}, {img: product3, name: "Organic Honey 250ml"}].map((item, i) => (
//               <div key={i} className="bg-gray-800 rounded shadow hover:shadow-yellow-400 transition p-4">
//                 <img src={item.img} alt={item.name} className="h-48 w-full object-cover rounded mb-4" />
//                 <h3 className="text-lg font-semibold text-yellow-300">{item.name}</h3>
//                 <p className="text-yellow-400 mt-2">Pure & natural — straight from our farms.</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Services */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 1, delay: 0.6 }}
//         variants={fadeInUp}
//         className="py-16 bg-gray-800"
//       >
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-semibold text-yellow-400 mb-10">What We Offer</h2>
//           <div className="grid md:grid-cols-3 gap-8 text-left">
//             {[{
//               img: hive,
//               title: "Hive Sales & Rentals",
//               desc: "Buy or lease beehives, tailored to your environment."
//             }, {
//               img: relocation,
//               title: "Bee Relocation",
//               desc: "Safe, expert relocation of wild hives from your home or farm."
//             }, {
//               img: beeSuit,
//               title: "Harvesting Gear",
//               desc: "We stock suits, smokers, and tools for beginner & pro beekeepers."
//             }].map((service, i) => (
//               <div key={i} className="rounded shadow-lg p-4 hover:shadow-yellow-400 transition bg-gray-900">
//                 <img src={service.img} alt={service.title} className="h-40 w-full object-cover rounded mb-4" />
//                 <h3 className="text-xl font-semibold mb-2 text-yellow-300">{service.title}</h3>
//                 <p className="text-yellow-400">{service.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Testimonials */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 1, delay: 0.8 }}
//         variants={fadeInUp}
//         className="bg-gray-900 py-12"
//       >
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-2xl font-semibold text-yellow-400 mb-6">What Customers Say</h2>
//           <p className="italic text-yellow-300 max-w-xl mx-auto">
//             “I’ve been buying honey from Samsasali for over a year — it’s the purest I’ve ever tasted. Plus their bee relocation team is so professional.”
//           </p>
//           <p className="mt-4 font-bold text-yellow-500">— Sarah M., Nakuru</p>
//         </div>
//       </motion.section>

//       {/* Call to Action */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 1, delay: 1 }}
//         variants={fadeInUp}
//         className="bg-yellow-600 py-12 text-center text-gray-900"
//       >
//         <h2 className="text-2xl md:text-3xl font-semibold mb-4">
//           Partner with Nature — Choose Samsasali
//         </h2>
//         <p className="mb-6 max-w-xl mx-auto text-yellow-900">
//           Whether you're a customer, farmer, or beekeeper — we’re here to help.
//         </p>
//         <a
//           href="/contact"
//           className="bg-gray-900 text-yellow-400 px-6 py-3 rounded shadow hover:bg-gray-800 transition"
//         >
//           Contact Us Today
//         </a>
//       </motion.section>

//     </div>
//   );
// }

// export default Home;


import { motion } from "framer-motion";
import heroVideo from "../assets/herovideo.webp";       // Your video file
import heroImg from "../assets/gradient-hexagonal-background_23-2148956844.avif";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import beeSuit from "../assets/beesuit.jpg";
import hive from "../assets/Beehives..jpg";
import relocation from "../assets/relocation.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

function Home() {
  return (
    <div className="bg-[#212529] text-yellow-300">

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1 }}
        variants={fadeInUp}
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
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
        <div className="relative max-w-4xl text-center z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg text-yellow-300">
            Nature’s Purest Honey — Straight from the Hive
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md text-yellow-200">
            At Samsasali, we deliver the finest raw and processed honey along with expert bee services and premium harvesting gear.
          </p>
          <a
            href="/products"
            className="inline-block bg-yellow-500 text-[#212529] font-semibold px-8 py-4 rounded shadow-lg hover:bg-yellow-400 transition"
          >
            Browse Products
          </a>
        </div>
      </motion.section>

      {/* About Us */}
      <section className="py-20 bg-[#212529]">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">About Samsasali</h2>
            <p className="text-yellow-200 leading-relaxed">
              Based in Kenya, Samsasali is more than just a honey brand — we are passionate beekeepers, educators, and suppliers. We sell both raw and packaged honey, offer hive leasing and bee relocation, and supply high-quality harvesting equipment like bee suits and smokers.
            </p>
          </div>
          <div>
            <img src={beeSuit} alt="Beekeeper suit" className="rounded shadow-lg object-cover w-full h-64" />
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-[#212529]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-12">Our Bestsellers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: product1, name: "Raw Honey 500ml" },
              { img: product2, name: "Processed Honey 1L" },
              { img: product3, name: "Organic Honey 250ml" },
            ].map((item, i) => (
              <div key={i} className="bg-[#343A40] rounded shadow-lg hover:shadow-yellow-400 transition p-6">
                <img src={item.img} alt={item.name} className="h-48 w-full object-cover rounded mb-4" />
                <h3 className="text-xl font-semibold text-yellow-300">{item.name}</h3>
                <p className="text-yellow-100 mt-2">Pure & natural — straight from our farms.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#212529]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
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
              <div key={i} className="rounded shadow-lg bg-[#343A40] p-6 hover:shadow-yellow-400 transition">
                <img src={service.img} alt={service.title} className="h-40 w-full object-cover rounded mb-4" />
                <h3 className="text-xl font-bold text-yellow-300 mb-2">{service.title}</h3>
                <p className="text-yellow-200">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#212529]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">What Customers Say</h2>
          <p className="italic text-yellow-200 text-lg max-w-xl mx-auto">
            “I’ve been buying honey from Samsasali for over a year — it’s the purest I’ve ever tasted. Plus their bee relocation team is so professional.”
          </p>
          <p className="mt-4 font-bold text-yellow-300">— Sarah M., Nakuru</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-600 text-center text-[#212529]">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Partner with Nature — Choose Samsasali</h2>
        <p className="mb-8 text-xl max-w-2xl mx-auto">
          Whether you're a customer, farmer, or beekeeper — we’re here to help.
        </p>
        <a href="/contact" className="bg-[#212529] text-yellow-300 px-8 py-4 rounded font-bold hover:bg-[#343A40] transition">
          Contact Us Today
        </a>
      </section>
    </div>
  );
}

export default Home;

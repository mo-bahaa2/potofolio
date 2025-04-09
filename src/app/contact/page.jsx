"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // Hide toast after 3 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className="min-h-screen bg-[#020618] text-white p-10 relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-xl z-50 flex items-center gap-3"
          >
            <span className="text-lg">✅</span>
            <span className="text-sm font-medium">
              Thanks! Your message has been sent successfully.
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative text-5xl md:text-6xl font-extrabold text-center text-transparent pb-10 bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]"
      >
        Contact Me
        <span className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-2/3 h-8 rounded-full blur-2xl bg-cyan-400/20 "></span>
      </motion.h1>

      <p className="text-center mb-10 text-gray-300 max-w-2xl mx-auto">
        I'm currently available to take on new projects, so feel free to send me a message about anything
        that you want me to work on. You can contact me anytime.
      </p>

      <div className="flex flex-col md:flex-row gap-10 justify-center items-start">
        {/* Social Links */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <a href="https://github.com/mo-bahaa2" className="flex items-center gap-2 hover:text-cyan-400 transition">
            <FaGithub size={24} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/mohamed-bahaa-salah-b9a914275/" className="flex items-center gap-2 hover:text-cyan-400 transition">
            <FaLinkedin size={24} /> LinkedIn
          </a>
          <a href="https://www.behance.net/mohamedbahaa40" className="flex items-center gap-2 hover:text-cyan-400 transition">
            <FaBehance size={24} /> Behance
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          onSubmit={() => setSubmitted(true)}
          action="https://formspree.io/f/xldjajno"
          method="POST"
          className="bg-[#0e1229] p-6 rounded-xl w-full max-w-md space-y-4 shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded-lg bg-[#1b1e3a] text-white outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-lg bg-[#1b1e3a] text-white outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-2 rounded-lg bg-[#1b1e3a] text-white outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 transition w-full py-2 rounded-lg font-bold hover:cursor-pointer"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}

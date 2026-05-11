"use client";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPaintBrush, FaCode, FaRocket, FaBriefcase } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Interactive Design Systems",
        "Responsive Design",
        "Usability Testing",
        "Brand Identity Design"
      ],
      icon: FaPaintBrush,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Building modern and responsive web applications",
      features: [
        "React & Next.js Development",
        "Responsive Web Design",
        "Performance Optimization",
        "Cross-browser Compatibility",
        "API Integration",
        "State Management (Redux, Zustand)"
      ],
      icon: FaCode,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 3,
      title: "Full Stack Development",
      description: "Complete web solutions from frontend to backend",
      features: [
        "MERN Stack Development",
        "Database Design & Management",
        "RESTful API Development",
        "Authentication & Authorization",
        "Deployment & Hosting",
        "Maintenance & Support"
      ],
      icon: FaRocket,
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "Freelance Projects",
      description: "Custom solutions tailored to your business needs",
      features: [
        "Custom Website Development",
        "E-commerce Solutions",
        "Landing Pages",
        "Portfolio Websites",
        "Business Websites",
        "Consultation & Support"
      ],
      icon: FaBriefcase,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020618] py-16 px-4">
      {/* Page Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative text-5xl md:text-6xl font-extrabold text-center text-transparent pb-10 bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]"
      >
        My Services
        <span className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-2/3 h-8 rounded-full blur-2xl bg-cyan-400/20"></span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-gray-300 max-w-2xl mx-auto mb-16"
      >
        I offer a wide range of services to help bring your ideas to life. From design to development, I've got you covered.
      </motion.p>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group bg-[#0e1229] rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              {/* Hover glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Service Header */}
              <div className="relative z-10 flex flex-col mb-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                  <IconComponent className="text-cyan-400 text-3xl drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>

              {/* Features List */}
              <div className="relative z-10 space-y-3 mt-2 flex-grow">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <FaCheckCircle className="text-cyan-500/80 text-sm drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="relative z-10 mt-8">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center bg-[#020618] text-cyan-400 border border-cyan-500/30 font-semibold py-3 px-4 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300"
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action Section */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Let's work together to bring your vision to life. Contact me today to discuss your project requirements.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full hover:shadow-xl transition-all"
        >
          Contact Me Now
        </motion.a>
      </motion.div> */}
    </div>
  );
}
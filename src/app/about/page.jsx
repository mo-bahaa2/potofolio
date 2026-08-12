"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import Skills from '../_skills/page';

const certificateAchievements = [
  // Nexera Achievements
  { src: "/achement/first nexera.png", title: "1st Place — Nexera Challenge S1" },
  { src: "/achement/sec nexera.png", title: "2nd Place — Nexera Challenge S2" },
  { src: "/achement/mintor nexera.png", title: "UI/UX Mentor at Nexera" },

  // Internships
  { src: "/achement/qaydny.jpeg", title: "Qayedny Internship Program" },
  { src: "/achement/vconnect.jpeg", title: "UI/UX Internship — V.Connct" },

  // University & Competitions
  { src: "/achement/WhatsApp Image 2026-05-22 at 11.49.30 PM.jpeg", title: "1st Place — IS402 Best Project" },
  { src: "/achement/graduation certificat.jpeg", title: "2nd Place — Best Graduation Project" },
  { src: "/achement/M.Bahaa ( iEEE )-1.png", title: "Front-End Final Project — IEEE MUST" },
  { src: "/achement/Ecpc.jpg", title: "Honorable Mention — ICPC ECPC 2024" },
  { src: "/achement/Mohamed_Bahaa_Certificate_UI - UX Trainie_2025-1.png", title: "GDG On Campus UI/UX Trainee" },

  // Certificates & Diplomas
  { src: "/achement/ui ux certificat.jpeg", title: "Figma for UI/UX Design — Udemy" },
  { src: "/achement/ui_ux udemy.png", title: "Figma UI/UX Crash Course — Udemy" },
  { src: "/achement/FrontEnd.jpg", title: "Frontend Development Diploma — Route" },
  { src: "/achement/UI-Ux.jpg", title: "UX/UI E-commerce Workshop" }
];

export default function About() {
  const [selectedCert, setSelectedCert] = useState(null);

  return <>

    <div id="about" className='min-h-screen bg-[#020618] py-9   '>
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]"
      >
        About Me
        <span className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-2/3 h-8 rounded-full blur-2xl bg-cyan-400/20"></span>
      </motion.h1>


      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=' flex flex-col md:flex-row items-center justify-center gap-2.5 mx-auto p-14'>
        {/* image */}
        <div className=' md:w-4/12'>
          <Image src="/me.png"
            width={800}
            height={800}
            alt='Mohamed Bahaa - UI/UX Designer & Front-End Developer'
            className='none rounded-3xl md:w-full' />
        </div>
        {/* about me */}
        <div className='pt-5 md:pt-0 md:w-6/12'>
          <p className='text-white text-xl'>
            I’m a UI/UX Designer and Front-End Developer passionate about crafting intuitive, visually engaging, and user-centered digital experiences.
            My main focus is understanding user behavior, solving real problems through design, and turning ideas into seamless interfaces.
            <br/><br/>
            I create modern, responsive designs and bring them to life using React and front-end technologies. 
            I also leverage AI-powered tools to enhance my design process, generate ideas faster, and build smarter, more efficient solutions.
            <br/><br/>
            With a strong eye for detail and a deep interest in user psychology, I aim to design products that are not just beautiful — but meaningful and easy to use.
          </p>
        </div>

      </motion.div>

      {/* --- MY ACHIEVEMENTS (MARQUEE) --- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 max-w-7xl mx-auto px-4 md:px-20 mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Achievements</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A collection of my certificates, awards, and milestones across various competitions and platforms.
        </p>

        <div className="relative flex overflow-hidden w-full group py-8">
          <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-[#020618] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-[#020618] to-transparent z-10 pointer-events-none"></div>

          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-infinite {
              animation: marquee 50s linear infinite;
              display: flex;
              width: max-content;
            }
            .group:hover .animate-marquee-infinite {
              animation-play-state: paused;
            }
          `}</style>

          <div className="animate-marquee-infinite">
            {[0, 1].map((key) => (
              <div key={key} className="flex gap-6 pr-6">
                {certificateAchievements.map((cert, index) => {
                  const rotations = ["rotate-1", "-rotate-2", "rotate-2", "-rotate-1", "rotate-0"];
                  const rotation = rotations[index % rotations.length];

                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedCert(cert)}
                      className={`w-72 sm:w-80 flex-shrink-0 bg-white/[0.03] border border-white/10 p-4 rounded-3xl flex flex-col items-center backdrop-blur-sm shadow-xl shadow-black/20 hover:!rotate-0 hover:scale-105 hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] transition-all duration-300 relative group/card cursor-pointer ${rotation}`}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      <div className="relative w-full h-48 md:h-52 mb-5 rounded-2xl overflow-hidden bg-black/40 border border-white/5 z-10">
                        <Image
                          src={cert.src}
                          alt={cert.title}
                          fill
                          className="object-cover group-hover/card:scale-110 transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, 300px"
                        />
                        <div className="absolute inset-0 bg-cyan-500/0 group-hover/card:bg-cyan-500/10 transition-colors duration-500 pointer-events-none"></div>
                      </div>
                      <h3 className="text-white text-center font-bold text-base md:text-lg whitespace-normal leading-tight h-12 flex items-center justify-center w-full px-2 relative z-10 group-hover/card:text-cyan-300 transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </motion.div>


      {/* Experience Section */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative mt-20 text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]"
      >
        Experience
        <span className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-2/3 h-8 rounded-full blur-2xl bg-cyan-400/20"></span>
      </motion.h1>

      <div className="max-w-4xl mx-auto p-10 mt-10">
        <div className="relative border-l-4 border-cyan-500/50 ml-3 md:ml-0">
          {/* Experience Item 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-10 ml-8 relative"
          >
            <div className="absolute -left-[46px] top-1.5 w-6 h-6 bg-cyan-500 rounded-full border-4 border-[#020618] shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
            <div className="bg-[#0e1229] p-6 rounded-xl shadow-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-4">
                <h3 className="text-2xl font-bold text-white">UI/UX Designer Intern</h3>
                <span className="text-cyan-400 font-medium bg-cyan-500/10 px-3 py-1 rounded-full text-sm w-fit min-w-max">28 Dec 2025 - 28 Mar 2026 (3 months)</span>
              </div>
              <h4 className="text-lg text-gray-300 mb-4 font-semibold">V.CONNCT</h4>
              <ul className="text-gray-400 leading-relaxed list-disc list-inside space-y-2">
                <li>Designed clean and user-friendly UI screens following basic UX principles.</li>
                <li>Worked on improving user flows to make navigation simpler and more intuitive.</li>
                <li>Applied feedback to refine designs and enhance usability.</li>
                <li>Used AI tools to support ideation and improve design workflow.</li>
                <li>Contributed to designing interfaces within an ERP system.</li>
              </ul>
            </div>
          </motion.div>

          {/* Experience Item 2 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-10 ml-8 relative"
          >
            <div className="absolute -left-[46px] top-1.5 w-6 h-6 bg-cyan-500 rounded-full border-4 border-[#020618] shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
            <div className="bg-[#0e1229] p-6 rounded-xl shadow-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-4">
                <h3 className="text-2xl font-bold text-white">UX Designer Intern</h3>
                <span className="text-cyan-400 font-medium bg-cyan-500/10 px-3 py-1 rounded-full text-sm w-fit min-w-max">Jun 2025 - Sep 2025 (4 months)</span>
              </div>
              <h4 className="text-lg text-gray-300 mb-4 font-semibold">Qayedny</h4>
              <ul className="text-gray-400 leading-relaxed list-disc list-inside space-y-2">
                <li>Worked on improving user journeys and UI consistency across platforms.</li>
                <li>Conducted user research, wireframing, and usability testing.</li>
                <li>Collaborated with developers to ensure smooth implementation.</li>
              </ul>
            </div>
          </motion.div>

          {/* Experience Item 3 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-10 ml-8 relative"
          >
            <div className="absolute -left-[46px] top-1.5 w-6 h-6 bg-cyan-500 rounded-full border-4 border-[#020618] shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
            <div className="bg-[#0e1229] p-6 rounded-xl shadow-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-4">
                <h3 className="text-2xl font-bold text-white">Freelance UI/UX & Front-End Projects</h3>
                <span className="text-cyan-400 font-medium bg-cyan-500/10 px-3 py-1 rounded-full text-sm w-fit min-w-max">2025</span>
              </div>
              <ul className="text-gray-400 leading-relaxed list-disc list-inside space-y-2 mt-4">
                <li><strong className="text-gray-300">Edubot (UI/UX):</strong> Educational web platform powered by AI. Designed a system for teachers to upload books, create chats, generate quizzes, and help students with summaries & explanations.</li>
                <li><strong className="text-gray-300">Live News Platform (UI/UX):</strong> Designed a modern news platform with dashboards for analytics, real-time updates, and user-friendly navigation.</li>
                <li><strong className="text-gray-300">Donuts Shop Website (Front-End):</strong> Developed a fully responsive e-commerce website for a donuts shop using HTML, CSS, and JavaScript, focusing on performance and modern design.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative mt-20 text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]"
      >
        Skills
        <span className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-2/3 h-8 rounded-full blur-2xl bg-cyan-400/20"></span>
      </motion.h1>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className='pt-5'>
        <Skills />
      </motion.div>
    </div>

    {/* --- CERTIFICATE MODAL --- */}
    <AnimatePresence>
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#020618] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white/80 hover:bg-white/20 hover:text-white transition-colors backdrop-blur-md"
            >
              ✕
            </button>

            <div className="relative w-full h-[50vh] sm:h-[65vh] md:h-[75vh] bg-black/50">
              <Image
                src={selectedCert.src}
                alt={selectedCert.title}
                fill
                className="object-contain p-2"
                sizes="100vw"
              />
            </div>

            <div className="p-4 sm:p-6 bg-slate-900/90 border-t border-white/10 text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 px-8">{selectedCert.title}</h3>
              <p className="text-cyan-400 text-xs sm:text-sm font-medium">Achievement & Certification</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </>;
}

"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import Skills from '../_skills/page';
export default function About() {
  return <>

    <div className='min-h-screen bg-[#020618] py-9   '>
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
          <Image src="/prof.png"
            width={500}
            height={500}
            alt='profile image'
            className='none rounded-3xl md:w-80' />
        </div>
        {/* about me */}
        <div className='pt-5 md:pt-0 md:w-6/12'>
          <p className='text-white text-xl'>
            I’m a UI/UX Designer and Front-End Developer passionate about crafting intuitive, visually engaging, and user-centered digital experiences.

            My main focus is understanding user behavior, solving real problems through design, and turning ideas into seamless interfaces. I create modern, responsive designs and bring them to life using React and front-end technologies.

            I also leverage AI-powered tools to enhance my design process, generate ideas faster, and build smarter, more efficient solutions.

            With a strong eye for detail and a deep interest in user psychology, I aim to design products that are not just beautiful — but meaningful and easy to use.
          </p>
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
                <span className="text-cyan-400 font-medium bg-cyan-500/10 px-3 py-1 rounded-full text-sm w-fit min-w-max">28 Dec 2025 - 28 Mar 2026</span>
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

  </>
}

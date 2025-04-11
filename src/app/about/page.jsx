"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import Skills from '../_skills/page';
export default function About() {
  return <>

    <div className='min-h-screen bg-[#020618] py-9  '>
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
            Motivated Computer Science student with strong skills in software development, FrontEnd , C++,
            Python, object-oriented programming (OOP), data structures, fundamental ui/ux, and design
            patterns. Passionate about creating efficient, innovative software solutions and integrating
            software with hardware when possible. Eager to apply my knowledge and experience to
            challenging projects that leverage both technical problem-solving and collaboration within a
            dynamic development team.
          </p>
        </div>

      </motion.div>


      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]"
      >
        skills
        <span className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-2/3 h-8 rounded-full blur-2xl bg-cyan-400/20"></span>
      </motion.h1>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='pt-5'>
          <Skills/>
      </motion.div>
    </div>

  </>
}

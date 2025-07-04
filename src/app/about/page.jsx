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
            I am a motivated male Computer Science student with a strong foundation in software development,
            Front-End technologies, C++, Python, object-oriented programming (OOP), data structures, basic UI/UX principles,
             and design patterns. I am passionate about building efficient and innovative software solutions, and I enjoy integrating software with hardware when possible. I am eager to apply my knowledge and hands-on experience to real-world projects that demand strong problem-solving skills and teamwork within a dynamic development environment.


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
        <Skills />
      </motion.div>
    </div>

  </>
}

'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link';
import { FaArrowLeft, FaExternalLinkAlt, FaLinkedin } from 'react-icons/fa';

export default function MustProject() {
  const screens = [
    { src: '/International Student Sector Platform/screencapture-international-student-must-vercel-app-2026-08-11-13_25_07.png', alt: 'Home Page' },
    { src: '/International Student Sector Platform/screencapture-international-student-must-vercel-app-academics-2026-08-11-13_29_37.png', alt: 'Academics Page' },
    { src: '/International Student Sector Platform/screencapture-international-student-must-vercel-app-activities-2026-08-11-13_27_41.png', alt: 'Activities Page' },
    { src: '/International Student Sector Platform/screencapture-international-student-must-vercel-app-facilities-2026-08-11-13_30_56.png', alt: 'Facilities Page' },
  ];

  return (
    <div className="min-h-screen bg-[#020618] py-24 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <Link href="/projects" className="inline-flex items-center text-cyan-500 hover:text-cyan-400 mb-8 transition-colors font-semibold">
          <FaArrowLeft className="mr-2" /> Back to Portfolio
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/40 border border-white/5 rounded-3xl p-8 md:p-12"
        >
          {/* Header */}
          <div className="flex flex-wrap items-center gap-4 mb-8 border-b border-white/10 pb-8">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">International Student Sector Platform</h1>
            <span className="px-4 py-1.5 bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 rounded-full text-sm font-bold">
              1st Place Award
            </span>
            <span className="px-4 py-1.5 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-sm font-bold">
              UI/UX & Front-End
            </span>
            <h2 className="w-full text-xl text-cyan-400 mt-2 font-medium">MUST University</h2>
          </div>

          {/* Links / Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="https://international-student-must.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 text-white rounded-xl font-bold hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/20"
            >
              <FaExternalLinkAlt /> View Live Website
            </a>
            <a 
              href="https://www.linkedin.com/posts/mohamed-bahaa-salah-b9a914275_must-informationtechnology-uiux-ugcPost-7463694964208689152-HjL2/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEM7rqYBUdWc9g1hjzlG0JPa6QHubYIJww0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-xl font-bold hover:bg-[#005582] transition-colors shadow-lg shadow-[#0077b5]/20"
            >
              <FaLinkedin className="text-xl" /> View LinkedIn Post
            </a>
          </div>

          {/* UI Screens Preview */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-cyan-500 pl-4">Platform Full Page Screenshots</h3>
            
            <div className="flex flex-col gap-8">
              {screens.map((screen, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full bg-slate-800 rounded-2xl relative overflow-hidden border border-white/10 shadow-lg"
                >
                  <img 
                    src={screen.src} 
                    alt={screen.alt} 
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

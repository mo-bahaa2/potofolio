'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link';
import { FaArrowLeft, FaClock } from 'react-icons/fa';

export default function EdubotProject() {
  const screens = [
    { src: '/EduBot/DashBoard.png', alt: 'Dashboard' },
    { src: '/EduBot/Teachers.png', alt: 'Teachers' },
    { src: '/EduBot/AI Bots.png', alt: 'AI Bots' },
    { src: '/EduBot/chatBot page.png', alt: 'Chatbot Page' },
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Edubot</h1>
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-sm font-bold">
              Freelance
            </span>
            <span className="px-4 py-1.5 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full text-sm font-bold">
              UI/UX
            </span>
            <h2 className="w-full text-xl text-cyan-400 mt-2 font-medium">AI-Powered Educational Platform</h2>
          </div>

          {/* Cover Image */}
          <div className="w-full aspect-video md:aspect-[21/9] relative rounded-2xl overflow-hidden mb-12 shadow-[0_0_30px_rgba(6,182,212,0.1)] border border-white/10">
            <Image 
              src="/EduBot.png" 
              alt="Edubot Cover" 
              fill 
              className="object-cover object-top"
              priority
            />
          </div>
          
          {/* Case Study Notice */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-transparent border-l-4 border-yellow-500 rounded-r-xl p-6 mb-12 flex items-start gap-4">
            <FaClock className="text-yellow-400 text-2xl flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-yellow-400 font-bold text-xl mb-2">Case Study in Progress</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                The full comprehensive case study for Edubot is currently being prepared and will be published soon on Behance. Meanwhile, please take a look at some of the core UI screens designed for the platform below.
              </p>
            </div>
          </div>

          {/* UI Screens Preview */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8 border-l-4 border-cyan-500 pl-4">UI Screens Preview</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {screens.map((screen, index) => {
                const isLast = index === screens.length - 1;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group cursor-pointer"
                  >
                    <div className="bg-slate-800 rounded-2xl aspect-[4/3] relative overflow-hidden flex items-center justify-center border border-white/10 shadow-lg group-hover:border-cyan-500/50 transition-colors">
                      <Image 
                        src={screen.src} 
                        alt={screen.alt} 
                        fill 
                        className={`object-cover object-top ${isLast ? 'blur-sm scale-105' : 'group-hover:scale-105 transition-transform duration-500'}`} 
                      />
                      
                      {/* Dark overlay */}
                      {!isLast && <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>}

                      {/* Blur Effect and Counter on Last Item */}
                      {isLast && (
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-10 transition-colors hover:bg-black/50">
                          <span className="text-5xl font-extrabold text-white drop-shadow-lg mb-2">+40</span>
                          <span className="text-xl font-bold text-cyan-400">More Screens</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

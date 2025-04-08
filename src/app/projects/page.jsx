'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

export default function Projects() {

  const cards = [
    { id: 1, src: '/frehCart.png', name: 'E-commerce web', demo: 'https://fresh-cart-ecru-tau.vercel.app/', github: 'https://github.com/mo-bahaa2/fresh-cart' },
    { id: 2, src: '/danisels.png', name: 'danisels', demo: 'https://mo-bahaa2.github.io/Daniels/', github: 'https://github.com/mo-bahaa2/Daniels' },
    { id: 3, src: '/gamereviewer.png', name: 'game reviewer', demo: 'https://mo-bahaa2.github.io/Game-review/', github: 'https://github.com/mo-bahaa2/Game-review' },
    { id: 4, src: '/quize_app.png', name: 'quize app', demo: 'https://mo-bahaa2.github.io/Quize-App/', github: 'https://github.com/mo-bahaa2/Quize-App' },
    { id: 5, src: '/start_fream _work.png', name: 'react fream work', demo: 'https://react-fream-work.vercel.app/', github: 'https://github.com/mo-bahaa2/React-freamWork.git' },
    { id: 6, src: '/wather.png', name: 'weather app', demo: 'https://mo-bahaa2.github.io/wather/', github: 'https://github.com/mo-bahaa2/wather' },
    { id: 7, src: '/random_qoute.png', name: 'random qoute', demo: 'https://mo-bahaa2.github.io/Random-Quote/', github: 'https://github.com/mo-bahaa2/Random-Quote.git' },
    { id: 8, src: '/bookmark.png', name: 'bookmark', demo: 'https://mo-bahaa2.github.io/Bookmark/', github: 'https://github.com/mo-bahaa2/Bookmark.git' },
  ]

  return (
    <section className='min-h-screen bg-[#020618] py-16'>
      <div className='px-4 md:px-20'>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-5xl md:text-6xl font-extrabold text-center text-transparent pb-10 bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]"
        >
          my projects
          <span className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-2/3 h-8 rounded-full blur-2xl bg-cyan-400/20 "></span>
        </motion.h1>
        <div className='flex flex-wrap justify-center gap-8'>
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white/10 border border-white/10 backdrop-blur rounded-2xl p-4 flex flex-col items-center'
            >
              <a href={card.demo} target='_blank' rel='noopener noreferrer'>
                <Image
                  src={card.src}
                  alt={card.name}
                  width={300}
                  height={200}
                  className='rounded-lg object-cover w-full h-[180px]'
                />
              </a>
              <h3 className='text-white text-lg font-semibold mt-4 capitalize text-center'>{card.name}</h3>

              <div className='flex gap-3 mt-3'>
                <a
                  href={card.demo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
                >
                  Live Demo
                </a>
                <a
                  href={card.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm px-4 py-1 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition'
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white/10 border border-white/10 backdrop-blur rounded-2xl p-4 flex flex-col items-center'>
            <a href='https://www.behance.net/gallery/222158451/Comfort-Trip' target='_blank' rel='noopener noreferrer'>
              <Image
                src='/MacBook Air - 2.png'
                alt='trip ui/ux'
                width={300}
                height={200}
                className='rounded-lg object-cover w-full h-[180px]'
              />
            </a>
            <h3 className='text-white text-lg font-semibold mt-4 capitalize text-center'>project ui/ux</h3>
            <div className='flex gap-3 mt-3'>
              <a
                href='https://www.behance.net/gallery/222158451/Comfort-Trip'
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
              >
                Design
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

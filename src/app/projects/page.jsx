'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

export default function Projects() {
  // Development Projects Array
  const devProjects = [
    { 
      id: 1, 
      src: '/frehCart.png', 
      name: 'E-commerce web', 
      demo: 'https://fresh-cart-ecru-tau.vercel.app/', 
      github: 'https://github.com/mo-bahaa2/fresh-cart',
      isFreelance: false 
    },
    { 
      id: 2, 
      src: '/cozie.png', 
      name: 'Cozy-classic', 
      demo: 'https://mo-bahaa2.github.io/Cozy-classic/index.html', 
      github: 'https://github.com/mo-bahaa2/Cozy-classic.git',
      isFreelance: true 
    },
    { 
      id: 3, 
      src: '/gamereviewer.png', 
      name: 'game reviewer', 
      demo: 'https://mo-bahaa2.github.io/Game-review/', 
      github: 'https://github.com/mo-bahaa2/Game-review',
      isFreelance: false 
    },
    { 
      id: 4, 
      src: '/quize_app.png', 
      name: 'quize app', 
      demo: 'https://mo-bahaa2.github.io/Quize-App/', 
      github: 'https://github.com/mo-bahaa2/Quize-App',
      isFreelance: false 
    },
    { 
      id: 5, 
      src: '/start_fream _work.png', 
      name: 'react framework', 
      demo: 'https://react-fream-work.vercel.app/', 
      github: 'https://github.com/mo-bahaa2/React-freamWork.git',
      isFreelance: false 
    },
    { 
      id: 6, 
      src: '/wather.png', 
      name: 'weather app', 
      demo: 'https://mo-bahaa2.github.io/wather/', 
      github: 'https://github.com/mo-bahaa2/wather',
      isFreelance: false 
    },
    { 
      id: 7, 
      src: '/random_qoute.png', 
      name: 'random quote', 
      demo: 'https://mo-bahaa2.github.io/Random-Quote/', 
      github: 'https://github.com/mo-bahaa2/Random-Quote.git',
      isFreelance: false 
    },
    { 
      id: 8, 
      src: '/bookmark.png', 
      name: 'bookmark', 
      demo: 'https://mo-bahaa2.github.io/Bookmark/', 
      github: 'https://github.com/mo-bahaa2/Bookmark.git',
      isFreelance: false 
    },
    {
      id: 9, 
      src: '/danisels.png', 
      name: 'danisels', 
      demo: 'https://mo-bahaa2.github.io/Daniels/', 
      github: 'https://github.com/mo-bahaa2/Daniels',
      isFreelance: false 
    }
  ];

  // Design Projects Array
  const designProjects = [
    {
      id: 1,
      src: '/MacBook Air - 2.png',
      name: 'Comfort Trip UI/UX',
      demo: 'https://www.behance.net/gallery/222158451/Comfort-Trip',
      isFreelance: false
    },
    {
      id: 2,
      src: '/cover.png',
      name: 'Motorji',
      demo: 'https://www.behance.net/gallery/227124473/Motorji',
      isFreelance: false
    },
    {
      id: 3,
      src: '/Frame 190.png',
      name: 'Soria News',
      demo: 'https://www.behance.net/gallery/229326663/Soria-News',
      isFreelance: true
    },
  ];

  // Project Card Component
  const ProjectCard = ({ project, index, type = 'dev' }) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className='bg-white/10 border border-white/10 backdrop-blur rounded-2xl p-4 flex flex-col items-center relative hover:bg-white/20 transition-colors'
    >
      {/* Freelance Badge - Top Right */}
      {project.isFreelance && (
        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
          <span className="w-2 h-2 bg-white rounded-full mr-1"></span>
          Freelance
        </div>
      )}
      
      {/* Project Image */}
      <a href={project.demo} target='_blank' rel='noopener noreferrer' className="w-full">
        <Image
          src={project.src}
          alt={project.name}
          width={300}
          height={200}
          className='rounded-lg object-cover w-full h-[150px] sm:h-[180px] hover:scale-105 transition-transform'
        />
      </a>
      
      {/* Project Name */}
      <h3 className='text-white text-lg font-semibold mt-4 capitalize text-center'>{project.name}</h3>

      {/* Action Buttons */}
      <div className='flex gap-3 mt-3 w-full'>
        <a
          href={project.demo}
          target='_blank'
          rel='noopener noreferrer'
          className='text-sm px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex-1 text-center'
        >
          {type === 'dev' ? 'Live Demo' : 'View Design'}
        </a>
        
        {type === 'dev' && project.github && (
          <a
            href={project.github}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm px-4 py-1 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition flex-1 text-center'
          >
            GitHub
          </a>
        )}
      </div>
      
      {/* Freelance Indicator - Bottom */}
      {project.isFreelance && (
        <div className="mt-2 flex items-center justify-center text-green-400 text-sm w-full">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Freelance Project
        </div>
      )}
    </motion.div>
  );

  return (
    <section id="projects" className='min-h-screen bg-[#020618] py-16'>
      <div className='px-4 md:px-20 max-w-7xl mx-auto'>
        {/* Main Title */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-5xl md:text-6xl font-extrabold text-center text-transparent pb-10 bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]"
        >
          My Projects
          <span className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-2/3 h-8 rounded-full blur-2xl bg-cyan-400/20"></span>
        </motion.h1>
        
        {/* Development Projects Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-cyan-400">Development Projects</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {devProjects.map((project, index) => (
              <ProjectCard 
                project={project} 
                index={index} 
                key={`dev-${project.id}`} 
                type="dev" 
              />
            ))}
          </div>
        </motion.div>

        {/* Design Projects Section */}
        {designProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-cyan-400">Design Projects</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {designProjects.map((project, index) => (
                <ProjectCard 
                  project={project} 
                  index={index} 
                  key={`design-${project.id}`} 
                  type="design" 
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Development Projects Array
  const devProjects = [
    { 
      id: 1, 
      src: '/frehCart.png', 
      name: 'E-commerce web', 
      demo: 'https://fresh-cart-ecru-tau.vercel.app/', 
      github: 'https://github.com/mo-bahaa2/fresh-cart',
      category: 'frontend',
      isFreelance: false 
    },
    { 
      id: 2, 
      src: '/cozie.png', 
      name: 'Cozy-classic', 
      demo: 'https://mo-bahaa2.github.io/Cozy-classic/index.html', 
      github: 'https://github.com/mo-bahaa2/Cozy-classic.git',
      category: 'frontend',
      isFreelance: true 
    },
    { 
      id: 3, 
      src: '/gamereviewer.png', 
      name: 'game reviewer', 
      demo: 'https://mo-bahaa2.github.io/Game-review/', 
      github: 'https://github.com/mo-bahaa2/Game-review',
      category: 'frontend',
      isFreelance: false 
    },
    { 
      id: 4, 
      src: '/quize_app.png', 
      name: 'quize app', 
      demo: 'https://mo-bahaa2.github.io/Quize-App/', 
      github: 'https://github.com/mo-bahaa2/Quize-App',
      category: 'frontend',
      isFreelance: false 
    },
    { 
      id: 5, 
      src: '/start_fream _work.png', 
      name: 'react framework', 
      demo: 'https://react-fream-work.vercel.app/', 
      github: 'https://github.com/mo-bahaa2/React-freamWork.git',
      category: 'frontend',
      isFreelance: false 
    },
    { 
      id: 6, 
      src: '/wather.png', 
      name: 'weather app', 
      demo: 'https://mo-bahaa2.github.io/wather/', 
      github: 'https://github.com/mo-bahaa2/wather',
      category: 'frontend',
      isFreelance: false 
    },
    { 
      id: 7, 
      src: '/random_qoute.png', 
      name: 'random quote', 
      demo: 'https://mo-bahaa2.github.io/Random-Quote/', 
      github: 'https://github.com/mo-bahaa2/Random-Quote.git',
      category: 'frontend',
      isFreelance: false 
    },
    { 
      id: 8, 
      src: '/bookmark.png', 
      name: 'bookmark', 
      demo: 'https://mo-bahaa2.github.io/Bookmark/', 
      github: 'https://github.com/mo-bahaa2/Bookmark.git',
      category: 'frontend',
      isFreelance: false 
    },
    {
      id: 9, 
      src: '/danisels.png', 
      name: 'danisels', 
      demo: 'https://mo-bahaa2.github.io/Daniels/', 
      github: 'https://github.com/mo-bahaa2/Daniels',
      category: 'frontend',
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
      category: 'uiux',
      isFreelance: false
    },
    {
      id: 2,
      src: '/cover.png',
      name: 'Motorji',
      demo: 'https://www.behance.net/gallery/227124473/Motorji',
      category: 'uiux',
      isFreelance: false
    },
    {
      id: 3,
      src: '/Frame 190.png',
      name: 'Soria News',
      demo: 'https://www.behance.net/gallery/229326663/Soria-News',
      category: 'uiux',
      isFreelance: true
    },
  ];

  // Combine all projects
  const allProjects = [...devProjects, ...designProjects];

  // Filter projects based on active filter
  const filteredProjects = allProjects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'freelance') return project.isFreelance;
    return project.category === activeFilter;
  });

  // Filter buttons data
  const filters = [
    { id: 'all', label: 'All Projects', count: allProjects.length },
    { id: 'frontend', label: 'Frontend', count: devProjects.length },
    { id: 'uiux', label: 'UI/UX', count: designProjects.length },
    { id: 'freelance', label: 'Freelance', count: allProjects.filter(p => p.isFreelance).length }
  ];

  // Project Card Component
  const ProjectCard = ({ project, index }) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className='bg-white/10 border border-white/10 backdrop-blur rounded-2xl p-4 flex flex-col items-center relative hover:bg-white/20 transition-colors'
    >
      {/* Freelance Badge */}
      {project.isFreelance && (
        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center z-10">
          <span className="w-2 h-2 bg-white rounded-full mr-1"></span>
          Freelance
        </div>
      )}
      
      {/* Category Badge */}
      <div className={`absolute -top-2 -left-2 text-white text-xs font-bold px-2 py-1 rounded-full z-10 ${
        project.category === 'uiux' ? 'bg-purple-500' : 'bg-blue-500'
      }`}>
        {project.category === 'uiux' ? 'UI/UX' : 'Frontend'}
      </div>
      
      {/* Project Image */}
      <a href={project.demo} target='_blank' rel='noopener noreferrer' className="w-full mt-2">
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
          {project.category === 'uiux' ? 'View Design' : 'Live Demo'}
        </a>
        
        {project.github && (
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

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {filter.label} <span className="ml-1 text-sm">({filter.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              project={project} 
              index={index} 
              key={`${activeFilter}-${project.id}-${project.category}`}
            />
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 mt-12"
          >
            <p className="text-xl">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
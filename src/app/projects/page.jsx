'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion";
import { FaTrophy, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from 'next/link';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSubFilter, setActiveSubFilter] = useState('all'); // 'all', 'Front-End', 'UI/UX'

  // Handle main filter change and reset sub-filter
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setActiveSubFilter('all');
  };

  // Academic & Competition Projects
  const featuredProjects = [
    {
      id: "feat-1",
      title: "Automated Spatial Platform for Crop Monitoring & Requirements Estimation",
      subtitle: "Graduation Project • With the National Authority for Remote Sensing & Space Sciences (NARSS)",
      roles: ["Team Leader", "UI/UX Designer"],
      award: "2nd Place, Best Graduation Projects",
      description: [
        "Led the project team through analysis and product design activities, coordinating tasks and ensuring timely delivery.",
        "Conducted stakeholder research and translated business requirements into user-centered system designs (Context Diagrams, DFDs, Activity Diagrams, User Flows, ERD).",
        "Designed dashboards and GIS-based interfaces for Admin, Analyst, and Decision-Maker roles, focusing on usability and decision support."
      ],
      icon: <FaTrophy className="text-yellow-400 text-3xl" />
    },
    {
      id: "feat-2",
      title: "International Student Sector Platform",
      subtitle: "Faculty of IT, MUST",
      roles: ["UI/UX Designer", "Front-End Developer"],
      award: "1st Place, IS402 Course Project Competition",
      description: [
        "Contributed as both UI/UX Designer and Front-End Developer on a platform centralizing academic, administrative, and campus services for international students.",
        "Designed the end-to-end user experience and built responsive, user-friendly interfaces, including secure role-based authentication, student registration/profile management, and an admin dashboard."
      ],
      // Using an Image component for MUST logo. 
      // NOTE: Make sure the uploaded image is saved as 'must_logo.png' in the 'public' folder.
      icon: <Image src="/must_logo.png" alt="MUST Logo" width={40} height={40} className="object-contain" />
    }
  ];

  // Old + New Projects
  const portfolioProjects = [
    // --- NEWLY ADDED FROM CV ---
    { 
      id: "new-minders", 
      src: '/magazine_minders.png', 
      name: 'Minders Magazine — App-like Reading Experience', 
      demo: 'https://minders-magazine.vercel.app/', 
      github: null,
      type: 'personal',
      category: ['Front-End', 'UI/UX'],
      skills: ['UI/UX', 'React', 'TypeScript', 'Tailwind', 'Framer Motion', 'PWA']
    },
    { 
      id: "new-1", 
      src: '/EduBot.png', 
      name: 'Edubot — AI-Powered Educational Platform', 
      demo: '/projects/edubot', // Custom internal page
      github: null,
      type: 'freelance',
      category: 'UI/UX',
      skills: ['UI/UX', 'Figma', 'Prototyping'],
      isInternal: true
    },
    { 
      id: "new-3", 
      src: '/AMAN.png', 
      name: 'Aman — Missing Person Reporting App', 
      demo: '/projects/aman', // Custom internal page
      github: null,
      type: 'freelance',
      category: 'UI/UX',
      skills: ['UI/UX', 'Wireframing', 'Prototyping'],
      isInternal: true
    },
    {
      id: "old-ui-0",
      src: '/winner2.png',
      name: 'UI UX Challenges Problems Solving session 2',
      demo: 'https://www.behance.net/gallery/249939807/winner-NEXERA-CHALLANGE-Session2',
      type: 'personal',
      category: 'UI/UX',
      skills: ['UI/UX']
    },
    {
      id: "old-ui-1",
      src: '/winner1.png',
      name: 'UI UX Challenges Problems Solving session 1',
      demo: 'https://www.behance.net/gallery/241167183/ENXERA-Challenge-uiux-problem-solving',
      type: 'personal',
      category: 'UI/UX',
      skills: ['UI/UX']
    },
    { 
      id: "new-4", 
      src: '/cover.png', 
      name: 'TastyBites — Food Ordering App', 
      demo: '#', 
      github: null,
      type: 'personal',
      category: 'Front-End', // assuming front-end or full-stack based on skills
      skills: ['React', 'Django', 'REST API']
    },

    // --- OLD FRONTEND PROJECTS ---
    { 
      id: "old-dev-1", 
      src: '/cozie.png', 
      name: 'Cozy-classic', 
      demo: 'https://mo-bahaa2.github.io/Cozy-classic/index.html', 
      github: 'https://github.com/mo-bahaa2/Cozy-classic.git',
      type: 'freelance',
      category: 'Front-End',
      skills: ['Front-End']
    },
    { 
      id: "old-dev-2", 
      src: '/frehCart.png', 
      name: 'E-commerce web', 
      demo: 'https://fresh-cart-ecru-tau.vercel.app/', 
      github: 'https://github.com/mo-bahaa2/fresh-cart',
      type: 'personal',
      category: 'Front-End',
      skills: ['Front-End', 'React']
    },
    { 
      id: "old-dev-3", 
      src: '/wather.png', 
      name: 'weather app', 
      demo: 'https://mo-bahaa2.github.io/wather/', 
      github: 'https://github.com/mo-bahaa2/wather',
      type: 'personal',
      category: 'Front-End',
      skills: ['Front-End']
    },
    { 
      id: "old-dev-4", 
      src: '/gamereviewer.png', 
      name: 'game reviewer', 
      demo: 'https://mo-bahaa2.github.io/Game-review/', 
      github: 'https://github.com/mo-bahaa2/Game-review',
      type: 'personal',
      category: 'Front-End',
      skills: ['Front-End']
    },
    { 
      id: "old-dev-5", 
      src: '/quize_app.png', 
      name: 'quize app', 
      demo: 'https://mo-bahaa2.github.io/Quize-App/', 
      github: 'https://github.com/mo-bahaa2/Quize-App',
      type: 'personal',
      category: 'Front-End',
      skills: ['Front-End']
    },
    { 
      id: "old-dev-6", 
      src: '/start_fream _work.png', 
      name: 'react framework', 
      demo: 'https://react-fream-work.vercel.app/', 
      github: 'https://github.com/mo-bahaa2/React-freamWork.git',
      type: 'personal',
      category: 'Front-End',
      skills: ['Front-End', 'React']
    },
    { 
      id: "old-dev-7", 
      src: '/random_qoute.png', 
      name: 'random quote', 
      demo: 'https://mo-bahaa2.github.io/Random-Quote/', 
      github: 'https://github.com/mo-bahaa2/Random-Quote.git',
      type: 'personal',
      category: 'Front-End',
      skills: ['Front-End']
    },
    { 
      id: "old-dev-8", 
      src: '/bookmark.png', 
      name: 'bookmark', 
      demo: 'https://mo-bahaa2.github.io/Bookmark/', 
      github: 'https://github.com/mo-bahaa2/Bookmark.git',
      type: 'personal',
      category: 'Front-End',
      skills: ['Front-End']
    },
    {
      id: "old-dev-9", 
      src: '/danisels.png', 
      name: 'danisels', 
      demo: 'https://mo-bahaa2.github.io/Daniels/', 
      github: 'https://github.com/mo-bahaa2/Daniels',
      type: 'personal',
      category: 'Front-End',
      skills: ['Front-End']
    },

    // --- OLD UI/UX PROJECTS ---
    {
      id: "old-ui-2",
      src: '/Frame 190.png',
      name: 'Soria News',
      demo: 'https://www.behance.net/gallery/229326663/Soria-News',
      type: 'freelance',
      category: 'UI/UX',
      skills: ['UI/UX']
    },
    {
      id: "old-ui-3",
      src: '/MacBook Air - 2.png',
      name: 'Comfort Trip UI/UX',
      demo: 'https://www.behance.net/gallery/222158451/Comfort-Trip',
      type: 'personal',
      category: 'UI/UX',
      skills: ['UI/UX']
    },
    {
      id: "old-ui-4",
      src: '/cover.png',
      name: 'Motorji',
      demo: 'https://www.behance.net/gallery/227124473/Motorji',
      type: 'personal',
      category: 'UI/UX',
      skills: ['UI/UX']
    }
  ];

  const filteredProjects = portfolioProjects.filter(project => {
    // Primary Filter
    if (activeFilter !== 'all' && project.type !== activeFilter) return false;
    
    // Secondary Filter (Only applies when 'personal' or 'freelance' is selected, if they want to filter further)
    if (activeSubFilter !== 'all') {
      if (Array.isArray(project.category)) {
        if (!project.category.includes(activeSubFilter)) return false;
      } else {
        if (project.category !== activeSubFilter) return false;
      }
    }

    return true;
  });

  const filters = [
    { id: 'all', label: 'All Projects', count: portfolioProjects.length },
    { id: 'freelance', label: 'Freelance', count: portfolioProjects.filter(p => p.type === 'freelance').length },
    { id: 'personal', label: 'Personal', count: portfolioProjects.filter(p => p.type === 'personal').length }
  ];

  const getSubFiltersCount = (category) => {
    return portfolioProjects.filter(p => p.type === activeFilter && (Array.isArray(p.category) ? p.category.includes(category) : p.category === category)).length;
  };

  return (
    <section id="projects" className='min-h-screen bg-[#020618] py-20 overflow-hidden'>
      <div className='px-4 md:px-20 max-w-7xl mx-auto'>
        
        {/* --- FEATURED ACADEMIC PROJECTS --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Achievements</span>
          </h2>

          <div className="flex flex-col gap-8">
            {featuredProjects.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-3xl hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                  <div className="bg-slate-900/50 w-16 h-16 flex items-center justify-center rounded-2xl border border-white/5 overflow-hidden flex-shrink-0">
                    {item.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{item.title}</h3>
                    </div>
                    
                    <p className="text-cyan-400 font-medium mb-4">{item.subtitle}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm font-semibold rounded-full border border-yellow-500/30 flex items-center gap-2">
                        {item.award}
                      </span>
                      {item.roles.map(role => (
                        <span key={role} className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full border border-white/10">
                          {role}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-3">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-gray-400 flex items-start gap-3 leading-relaxed">
                          <span className="text-cyan-500 mt-1.5">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- PORTFOLIO GRID --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Portfolio</span>
          </h2>

          {/* Primary Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {filter.label} <span className="ml-1.5 opacity-60 text-sm">({filter.count})</span>
              </button>
            ))}
          </div>

          {/* Secondary Sub-Filters for Personal & Freelance */}
          <AnimatePresence>
            {activeFilter === 'personal' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-wrap justify-center gap-3 mb-12 overflow-hidden"
              >
                <button
                  onClick={() => setActiveSubFilter('all')}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSubFilter === 'all'
                      ? 'bg-white/20 text-white border border-white/30'
                      : 'bg-transparent border border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                  }`}
                >
                  All ({portfolioProjects.filter(p => p.type === 'personal').length})
                </button>
                <button
                  onClick={() => setActiveSubFilter('Front-End')}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSubFilter === 'Front-End'
                      ? 'bg-blue-500/30 text-blue-300 border border-blue-500/50'
                      : 'bg-transparent border border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                  }`}
                >
                  Front-End ({getSubFiltersCount('Front-End')})
                </button>
                <button
                  onClick={() => setActiveSubFilter('UI/UX')}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSubFilter === 'UI/UX'
                      ? 'bg-purple-500/30 text-purple-300 border border-purple-500/50'
                      : 'bg-transparent border border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                  }`}
                >
                  UI/UX ({getSubFiltersCount('UI/UX')})
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Projects Grid */}
          <motion.div layout className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className='group bg-slate-900/40 border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-300 flex flex-col'
                >
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                    <Image
                      src={project.src}
                      alt={project.name}
                      fill
                      className='object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out'
                    />
                    
                    {/* Tags */}
                    <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md border ${
                        project.type === 'freelance' 
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' 
                          : 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                      }`}>
                        {project.type === 'freelance' ? 'Freelance' : 'Personal'}
                      </span>
                      <span className="px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md border bg-slate-800/50 text-gray-300 border-white/10">
                        {Array.isArray(project.category) ? project.category.join(' & ') : project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className='text-white text-xl font-bold mb-3 line-clamp-2'>{project.name}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      {project.skills.map(skill => (
                        <span key={skill} className="text-xs font-medium text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className='flex gap-3 pt-4 border-t border-white/5'>
                      {project.isInternal ? (
                        <Link
                          href={project.demo}
                          className='flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 text-white text-sm font-medium rounded-xl hover:bg-cyan-500 hover:text-white transition-colors group/btn'
                        >
                          <span>View UI Screens</span>
                          <FaExternalLinkAlt className="text-xs opacity-50 group-hover/btn:opacity-100" />
                        </Link>
                      ) : (
                        <a
                          href={project.demo}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 text-white text-sm font-medium rounded-xl hover:bg-cyan-500 hover:text-white transition-colors group/btn'
                        >
                          <span>View Project</span>
                          <FaExternalLinkAlt className="text-xs opacity-50 group-hover/btn:opacity-100" />
                        </a>
                      )}
                      
                      {project.github && (
                        <a
                          href={project.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='px-4 flex items-center justify-center bg-white/5 text-gray-300 text-lg rounded-xl hover:bg-white/10 hover:text-white transition-colors'
                          title="View Source Code"
                        >
                          <FaGithub />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
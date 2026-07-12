'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { HiOutlineHome, HiOutlineUser, HiOutlineBriefcase, HiOutlineFolder, HiOutlineEnvelope } from 'react-icons/hi2'
import { motion } from 'framer-motion'

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const desktopLinkClass = (path) => 
    `block py-2 px-3 rounded-sm md:p-0 transition-all duration-300 ease-in-out border-b-2 ${
      pathname === path 
        ? 'text-blue-600 border-blue-600 dark:text-white md:dark:text-blue-400' 
        : 'text-gray-900 border-transparent hover:border-blue-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-400'
    }`;

  const navItems = [
    { name: 'Home', path: '/', icon: <HiOutlineHome className="w-[24px] h-[24px] stroke-[1.5]" /> },
    { name: 'About', path: '/about', icon: <HiOutlineUser className="w-[24px] h-[24px] stroke-[1.5]" /> },
    { name: 'Services', path: '/services', icon: <HiOutlineBriefcase className="w-[24px] h-[24px] stroke-[1.5]" /> },
    { name: 'Projects', path: '/projects', icon: <HiOutlineFolder className="w-[24px] h-[24px] stroke-[1.5]" /> },
    { name: 'Contact', path: '/contact', icon: <HiOutlineEnvelope className="w-[24px] h-[24px] stroke-[1.5]" /> },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900 relative z-50 md:shadow-none">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center md:justify-between mx-auto p-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-4xl font-semibold whitespace-nowrap text-blue-600 dark:text-white">MB</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:block w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navItems.filter(item => item.name !== 'Contact').map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className={mounted ? desktopLinkClass(item.path) : desktopLinkClass('')}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Connect Me (Hidden on mobile) */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/contact"
              className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 transition"
            >
              Connect Me
            </Link>
          </div>
        </div>
      </nav>

      {/* Floating Glassmorphic Bottom Mobile Navbar */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-md">
        <div className="flex items-center justify-between px-2 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
          {navItems.map((item) => {
            const isActive = mounted && pathname === item.path;
            return (
              <Link 
                key={item.path} 
                href={item.path} 
                className="relative flex flex-col items-center justify-center w-16 h-14 rounded-2xl z-10 transition-transform active:scale-95"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {isActive && (
                  <motion.div 
                    layoutId="mobile-active-tab" 
                    className="absolute inset-0 bg-blue-100/80 dark:bg-blue-900/40 rounded-2xl -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <div className={`transition-all duration-300 flex flex-col items-center justify-center ${
                  isActive 
                    ? 'text-blue-600 dark:text-blue-400 -translate-y-0.5' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300'
                }`}>
                  {item.icon}
                  <span 
                    className={`text-[10px] font-semibold mt-1 transition-all duration-300 ${
                      isActive 
                        ? 'opacity-100 max-h-4' 
                        : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  );
}
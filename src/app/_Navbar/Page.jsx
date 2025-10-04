'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path) => 
    `block py-2 px-3 rounded-sm md:p-0 transition-all duration-300 ease-in-out border-b-2 ${
      pathname === path 
        ? 'text-blue-600 border-blue-600 dark:text-white md:dark:text-blue-400' 
        : 'text-gray-900 border-transparent hover:border-blue-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-400'
    }`;

  const handleCloseMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-4xl font-semibold whitespace-nowrap text-blue-600 dark:text-white">MB</span>
        </Link>

        {/* Mobile Right Controls (Hamburger + Button) */}
        <div className="flex md:hidden items-center gap-2">
          <Link 
            href="/contact"
            className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 transition"
            onClick={handleCloseMenu}
          >
            Connect Me
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" className={linkClass('/')} onClick={handleCloseMenu}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={linkClass('/about')} onClick={handleCloseMenu}>About</Link>
            </li>
            <li>
              <Link href="/services" className={linkClass('/services')} onClick={handleCloseMenu}>Services</Link>
            </li>
            <li>
              <Link href="/projects" className={linkClass('/projects')} onClick={handleCloseMenu}>Projects</Link>
            </li>
            <li>
              <Link href="/contact" className={linkClass('/contact')} onClick={handleCloseMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
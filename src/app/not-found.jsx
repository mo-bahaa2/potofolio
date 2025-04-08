"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from 'react'

export default function Notfound() {
    return <>

        <div className="min-h-screen flex items-center justify-center bg-[#020618] px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center max-w-xl"
            >
                <h1 className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.6)] mb-6">
                    404
                </h1>
                <p className="text-white text-2xl md:text-3xl font-semibold mb-4">
                    Page Not Found
                </p>
                <p className="text-white/60 mb-6">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
                <Link href="/" className="inline-block px-6 py-3 bg-cyan-500 text-white font-bold rounded-2xl shadow-md hover:bg-cyan-600 transition">
                    Go Back Home
                </Link>
            </motion.div>
        </div>
    </>
}

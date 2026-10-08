"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// اختيار 4 شخصيات وتوزيعهم في الأربع زوايا حوالين النص
const characters = [
  { src: "/Illustration/Developer Working on Laptop.png", alt: "Coding", position: "top-[10%] left-[5%] md:top-[15%] md:left-[15%]" },
  { src: "/Illustration/Designer Creating Wireframe.png", alt: "Designing", position: "top-[10%] right-[5%] md:top-[15%] md:right-[15%]" },
  { src: "/Illustration/Developer Coffee Break.png", alt: "Coffee", position: "bottom-[10%] left-[5%] md:bottom-[15%] md:left-[15%]" },
  { src: "/Illustration/Developer Celebrating Success.png", alt: "Success", position: "bottom-[10%] right-[5%] md:bottom-[15%] md:right-[15%]" }
];

export default function SplashScreen() {
  const [phase, setPhase] = useState("entering"); 

  useEffect(() => {
    // التوقيتات: بعد 2.5 ثانية هيبدأ يعمل Zoom In ويختفي
    const t1 = setTimeout(() => setPhase("exiting"), 2500); 
    // بعد 3.2 ثانية بيتشال تماماً من الـ DOM عشان الموقع يشتغل
    const t2 = setTimeout(() => setPhase("done"), 3200); 
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        key="cinematic-splash"
        // تأثير الـ Glassmorphism في الخلفية بيخلي الموقع وراها مزغلل بشكل شيك جداً
        animate={phase === "exiting" ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0e1229]/90 backdrop-blur-2xl overflow-hidden"
      >
        {/* النص المركزي */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={
            phase === "exiting" 
              ? { opacity: 0, scale: 1.2, filter: "blur(10px)" } 
              : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] tracking-tight leading-tight md:leading-snug">
            Where Logic
            <br />
            Meets Art
          </h1>
        </motion.div>

        {/* الكروت/الشخصيات العائمة */}
        {characters.map((char, index) => (
          <motion.div
            key={index}
            className={`absolute ${char.position} w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 z-20 pointer-events-none`}
            // حركة الدخول والخروج (Scale & Opacity)
            initial={{ opacity: 0, scale: 0 }}
            animate={
              phase === "exiting"
                ? { 
                    opacity: 0, 
                    scale: 6, // الـ Zoom In السريع جداً تجاه الكاميرا
                    filter: "blur(15px)" 
                  }
                : { 
                    opacity: 1, 
                    scale: 1, 
                    filter: "blur(0px)" 
                  }
            }
            transition={{
              duration: phase === "exiting" ? 0.7 : 0.8,
              delay: phase === "exiting" ? 0 : index * 0.15, // Staggered Animation
              ease: phase === "exiting" ? "easeIn" : "backOut",
            }}
          >
            {/* حركة العومان البطيئة والمستمرة (Floating) */}
            <motion.div
              animate={phase === "exiting" ? {} : { y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5, // كل شخصية بتعوم بتوقيت مختلف عشان يبان طبيعي
              }}
              className="w-full h-full relative"
            >
              <Image
                src={char.src}
                alt={char.alt}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function AchievementCard({ cert, rotationClass, onClick }) {
  const ref = useRef(null);

  // إحداثيات الماوس للـ 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs للحركة عشان تكون ناعمة جداً ومفيهاش تقطيع
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  // تحويل حركة الماوس لزوايا ميلان (Rotate)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // تحويل حركة الماوس عشان اللمعة (Glare) تتحرك معاه
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // حساب الماوس فين بالظبط من مركز الكارت
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    // تصفير الميلان لما الماوس يخرج
    x.set(0);
    y.set(0);
  };

  // شكل الـ Border Radius الجديد (شكل غير متماثل بيدي طابع Premium جداً ومختلف)
  // زاويتين مدورين جداً وزاويتين حادين شوية
  const cardShape = "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl";
  const imageShape = "rounded-tl-[2.2rem] rounded-br-[2.2rem] rounded-tr-md rounded-bl-md";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      // استخدام المتغير cardShape لتطبيق الشكل الجديد
      className={`w-72 sm:w-80 flex-shrink-0 bg-[#0e1229]/80 border border-white/10 p-4 flex flex-col items-center backdrop-blur-md shadow-2xl hover:bg-[#1a2040] hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-colors duration-300 relative group/card cursor-pointer ${cardShape} ${rotationClass}`}
    >
      {/* لمعة الإزاز اللي بتتحرك (Glare Effect) */}
      <motion.div
        className={`absolute inset-0 z-30 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 overflow-hidden ${cardShape}`}
      >
        <motion.div 
          className="absolute"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 50%)",
            left: glareX,
            top: glareY,
            transform: "translate(-50%, -50%)",
            width: "200%",
            height: "200%",
          }}
        />
      </motion.div>

      {/* إضاءة ثابتة خفيفة ورا الكارت */}
      <div 
        className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" 
        style={{ transform: "translateZ(30px)" }}
      ></div>
      
      {/* صورة الشهادة بالشكل الجديد الموازي لشكل الكارت */}
      <div 
        className={`relative w-full h-48 md:h-52 mb-5 overflow-hidden bg-black/40 border border-white/5 z-10 ${imageShape}`}
        style={{ transform: "translateZ(50px)" }} // رفع الصورة في الـ 3D
      >
        <Image
          src={cert.src}
          alt={cert.title}
          fill
          className="object-cover group-hover/card:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, 300px"
        />
        <div className="absolute inset-0 bg-cyan-500/0 group-hover/card:bg-cyan-500/10 transition-colors duration-500 pointer-events-none"></div>
      </div>
      
      {/* النص المرفوع في الـ 3D */}
      <h3 
        className="text-white text-center font-bold text-base md:text-lg whitespace-normal leading-tight h-12 flex items-center justify-center w-full px-2 relative z-10 group-hover/card:text-cyan-300 transition-colors drop-shadow-md"
        style={{ transform: "translateZ(30px)" }}
      >
        {cert.title}
      </h3>
    </motion.div>
  );
}

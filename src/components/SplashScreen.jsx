"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// هنحدد التلات مراحل: قهوة -> شغل -> نجاح
const stages = [
  { id: 1, src: "/Illustration/Developer Coffee Break.png", alt: "Coffee Break" },
  { id: 2, src: "/Illustration/Developer Working on Laptop.png", alt: "Working" },
  { id: 3, src: "/Illustration/Developer Celebrating Success.png", alt: "Success" }
];

export default function SplashScreen() {
  const [stageIndex, setStageIndex] = useState(0);
  const [isExpanding, setIsExpanding] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // التقليب بين الصور
    if (stageIndex < stages.length - 1) {
      const timer = setTimeout(() => {
        setStageIndex((prev) => prev + 1);
      }, 1200); // 1.2 ثانية لكل صورة
      return () => clearTimeout(timer);
    }
    // لما نوصل لآخر صورة (الاحتفال)
    else if (stageIndex === stages.length - 1 && !isExpanding) {
      const timer = setTimeout(() => {
        setIsExpanding(true); // نبدأ حركة التكبير والختام
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [stageIndex, isExpanding]);

  useEffect(() => {
    // إخفاء الـ SplashScreen بالكامل بعد حركة التكبير
    if (isExpanding) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isExpanding]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          // الـ Fade out النهائي خالص للشاشة السوداء
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#09090b] overflow-hidden"
        >
          <motion.div
            // الدائرة البيضاء اللي الصور بتتعرض جواها
            initial={{ width: 280, height: 280, scale: 0, borderRadius: "50%" }}
            animate={
              isExpanding
                ? { scale: 30, opacity: 0 } // بتكبر جداً وبتختفي
                : { scale: 1, opacity: 1 } // حجمها الطبيعي
            }
            transition={{
              duration: isExpanding ? 1 : 0.8,
              ease: isExpanding ? "circIn" : "backOut",
            }}
            className="relative flex items-center justify-center bg-white shadow-[0_0_50px_rgba(255,255,255,0.05)]"
          >
            {/* عرض الصور وتقليبهم */}
            {!isExpanding && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={stageIndex}
                  // حركة دخول وخروج الصور كانها بتلف 3D
                  initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-52 h-52 md:w-60 md:h-60"
                >
                  <Image
                    src={stages[stageIndex].src}
                    alt={stages[stageIndex].alt}
                    fill
                    className="object-contain drop-shadow-xl"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

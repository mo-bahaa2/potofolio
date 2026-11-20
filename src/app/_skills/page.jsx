"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const skills = [
    { name: "HTML", icon: "/image/skill-icons--html.svg" },
    { name: "CSS", icon: "/image/devicon--css3.svg" },
    { name: "JavaScript", icon: "/image/vscode-icons--file-type-js-official.svg" },
    { name: "Tailwind", icon: "/image/devicon--tailwindcss.svg" },
    { name: "Bootstrap", icon: "/image/devicon--bootstrap.svg" },
    { name: "jQuery", icon: "/image/devicon--jquery.svg" },
    { name: "SASS", icon: "/image/material-icon-theme--sass.svg" }, { name: "React", icon: "/image/devicon--react.svg" },
    { name: "Next.js", icon: "/image/devicon--nextjs.svg" },
    { name: "Figma", icon: "/image/logos--figma.svg" },
    { name: "Webflow", icon: "/image/logos--webflow.svg" },
    { name: "Miro", icon: "/image/logos--miro-icon.svg" }
];

export default function Skills() {
    return (
        <div className="mt-8 px-4 md:px-20 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-white/10 border border-white/10 backdrop-blur rounded-xl sm:rounded-2xl p-3.5 sm:p-5 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform duration-300 min-h-[105px]"
                    >
                        <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={44}
                            height={44}
                            className="mb-2 w-9 h-9 sm:w-11 sm:h-11 object-contain"
                        />
                        <p className="text-white text-xs sm:text-sm md:text-base font-medium text-center">{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

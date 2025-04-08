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

];

export default function Skills() {
    return (
        <div className="mt-10 px-4 md:px-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white/10 border border-white/10 backdrop-blur rounded-2xl p-4 flex flex-col items-center shadow-md hover:scale-105 transition-transform duration-300"
                    >
                        <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={50}
                            height={50}
                            className="mb-2"
                        />
                        <p className="text-white text-sm md:text-base font-medium">{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

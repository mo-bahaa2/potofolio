"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import FolderCard from "./FolderCard";

// ==========================================
// DATA: PREVIEWS & DETAILS
// ==========================================

const projectFolderFiles = [
    { name: "Minders Magazine", meta: "React · Framer", image: "/magazine_minders.png", href: "https://minders-magazine.vercel.app/" },
    { name: "EduBot Platform", meta: "AI Educational UI/UX", image: "/edubot-cover.png", href: "https://www.behance.net/gallery/258523873/Edu-Bot" },
    { name: "Aman App", meta: "Missing Person UI/UX", image: "/AMAN.png", href: "/projects/aman" },
    { name: "Soria News", meta: "Mobile UI/UX", image: "/Frame 190.png", href: "/projects" },
];

const certificatesList = [
    {
        id: "cert-1",
        title: "Frontend Development Diploma",
        issuer: "Route IT Training Center",
        date: "2024",
        tag: "Development",
        src: "/achement/FrontEnd.jpg",
        skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind"],
    },
    {
        id: "cert-2",
        title: "User Experience Design",
        issuer: "Edraak Platform",
        date: "2024",
        tag: "UI/UX",
        src: "/achement/edrak_ux .jpg",
        skills: ["User Research", "Wireframing", "Usability Testing"],
    },
    {
        id: "cert-3",
        title: "Figma for UI/UX Design",
        issuer: "Udemy Certified",
        date: "2024",
        tag: "UI/UX",
        src: "/achement/ui ux certificat.jpeg",
        skills: ["Figma", "Design Systems", "Prototyping"],
    },
    {
        id: "cert-4",
        title: "Figma UI/UX Crash Course",
        issuer: "Udemy Certified",
        date: "2024",
        tag: "UI/UX",
        src: "/achement/ui_ux udemy.png",
        skills: ["Auto Layout", "Components", "Variants"],
    },
    {
        id: "cert-5",
        title: "UX/UI E-commerce Workshop",
        issuer: "Design Studio",
        date: "2024",
        tag: "Workshop",
        src: "/achement/UI-Ux.jpg",
        skills: ["E-commerce UX", "Checkout Flows", "Conversion Optimization"],
    },
    {
        id: "cert-6",
        title: "UI/UX Internship Program",
        issuer: "V.Connct",
        date: "2024",
        tag: "Internship",
        src: "/achement/vconnect.jpeg",
        skills: ["Web App Design", "Client Handoff", "Team Collaboration"],
    },
    {
        id: "cert-7",
        title: "UI/UX Trainee & Contributor",
        issuer: "GDG On Campus — MUST",
        date: "2025",
        tag: "Community",
        src: "/achement/Mohamed_Bahaa_Certificate_UI - UX Trainie_2025-1.png",
        skills: ["Google Tech", "Design Sprints", "Mentorship"],
    },
    {
        id: "cert-8",
        title: "Front-End Final Project",
        issuer: "IEEE MUST Student Branch",
        date: "2023",
        tag: "Development",
        src: "/achement/M.Bahaa ( iEEE )-1.png",
        skills: ["JavaScript", "DOM Manipulation", "Responsive Web"],
    },
    {
        id: "cert-9",
        title: "Qayedny Internship Program",
        issuer: "Qayedny",
        date: "2024",
        tag: "Internship",
        src: "/achement/qaydny.jpeg",
        skills: ["Product Design", "Interactive Prototypes"],
    },
];

const awardsList = [
    {
        id: "award-1",
        title: "1st Place — Nexera Challenge Session 1",
        rank: "🥇 1st Place Winner",
        issuer: "Nexera Tech Community",
        date: "2024",
        tag: "Competition",
        src: "/achement/first nexera.png",
        description: "Won 1st Place in a highly competitive UI/UX design challenge focused on rapid problem-solving, intuitive user journeys, and high-fidelity interactive prototyping.",
        link: "https://www.behance.net/gallery/241167183/ENXERA-Challenge-uiux-problem-solving",
    },
    {
        id: "award-2",
        title: "2nd Place — Nexera Challenge Session 2",
        rank: "🥈 2nd Place Winner",
        issuer: "Nexera Tech Community",
        date: "2024",
        tag: "Competition",
        src: "/achement/sec nexera.png",
        description: "Awarded 2nd Place in the advanced round of UX problem-solving challenges, designing complex user flows and micro-interactions under strict evaluation.",
        link: "https://www.behance.net/gallery/249939807/winner-NEXERA-CHALLANGE-Session2",
    },
    {
        id: "award-3",
        title: "2nd Place — Best Graduation Project",
        rank: "🥈 2nd Place Nationwide",
        issuer: "National Authority for Remote Sensing & Space Sciences (NARSS)",
        date: "2024",
        tag: "National Competition",
        src: "/achement/graduation certificat.jpeg",
        description: "Automated Spatial Platform for Crop Monitoring & Requirements Estimation. Led the product UI/UX design and stakeholder requirements analysis with NARSS scientists.",
    },
    {
        id: "award-4",
        title: "1st Place — IS402 Course Project Competition",
        rank: "🥇 1st Place",
        issuer: "Faculty of IT, MUST",
        date: "2024",
        tag: "University Award",
        src: "/achement/WhatsApp Image 2026-05-22 at 11.49.30 PM.jpeg",
        description: "Centralized Academic & Campus Services Platform for International Students at MUST. Designed UI/UX and developed front-end interfaces.",
    },
    {
        id: "award-5",
        title: "Honorable Mention — ICPC ECPC 2024",
        rank: "🏅 Honorable Mention",
        issuer: "Egyptian Collegiate Programming Contest",
        date: "2024",
        tag: "Problem Solving",
        src: "/achement/Ecpc.jpg",
        description: "Competed in the prestigious regional algorithmic problem solving competition representing MUST university.",
    },
    {
        id: "award-6",
        title: "UI/UX Mentor Recognition",
        rank: "⭐ Mentor",
        issuer: "Nexera Tech Community",
        date: "2025",
        tag: "Mentorship",
        src: "/achement/mintor nexera.png",
        description: "Recognized as a UI/UX mentor guiding aspiring designers through user research, Figma mastery, and design thinking workflows.",
    },
];

// Preview sheets for Folder Cards
const certificateFolderFiles = certificatesList.slice(0, 4).map((c) => ({
    name: c.title,
    meta: `${c.issuer} · ${c.date}`,
    image: c.src,
}));

const awardFolderFiles = awardsList.slice(0, 4).map((a) => ({
    name: a.title,
    meta: a.rank,
    image: a.src,
}));

// ==========================================
// COMPONENT
// ==========================================

export default function SelectedWorksAndHonors() {
    const router = useRouter();

    // Modal state: null | 'certificates' | 'awards'
    const [modalType, setModalType] = useState(null);

    // Expanded single item preview inside modal (or directly opened from sheet)
    const [previewItem, setPreviewItem] = useState(null);

    // Close modals on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                if (previewItem) {
                    setPreviewItem(null);
                } else {
                    setModalType(null);
                }
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [previewItem]);

    // Navigate to projects
    const goToProjects = () => {
        router.push("/projects");
    };

    return (
        <section className="relative py-16 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-center mb-16 relative z-10"
            >
                {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium mb-4">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    Interactive 3D
                </div> */}
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                    Selected{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
                        Works &amp; Honors
                    </span>
                </h2>
                <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-4">
                    Hover over each folder to peek at the sheets inside. Click a folder to explore projects or inspect certificates &amp; awards.
                </p>
            </motion.div>

            {/* 3 Glass Folder Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-8 justify-items-center relative z-10">
                {/* FOLDER 1: PROJECTS */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0 }}
                    className="flex flex-col items-center"
                >
                    <FolderCard
                        label="Projects"
                        meta={14}
                        tone="dark"
                        files={projectFolderFiles}
                        width={320}
                        appearDelay={0}
                        onSelect={goToProjects}
                        menu={[
                            {
                                label: "Explore All Projects →",
                                onSelect: goToProjects,
                            },
                        ]}
                    />
                    <button
                        type="button"
                        onClick={goToProjects}
                        className="mt-5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 group cursor-pointer"
                    >
                        <span>Explore Projects</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </motion.div>

                {/* FOLDER 2: CERTIFICATES */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="flex flex-col items-center"
                >
                    <FolderCard
                        label="Certificates"
                        meta={certificatesList.length}
                        tone="dark"
                        files={certificateFolderFiles}
                        width={320}
                        appearDelay={120}
                        onSelect={() => setModalType("certificates")}
                        menu={[
                            {
                                label: "View All Certificates",
                                onSelect: () => setModalType("certificates"),
                            },
                        ]}
                    />
                    <button
                        type="button"
                        onClick={() => setModalType("certificates")}
                        className="mt-5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 group cursor-pointer"
                    >
                        <span>View {certificatesList.length} Certificates</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </motion.div>

                {/* FOLDER 3: AWARDS */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col items-center md:col-span-2 lg:col-span-1"
                >
                    <FolderCard
                        label="Awards"
                        meta={awardsList.length}
                        tone="dark"
                        files={awardFolderFiles}
                        width={320}
                        appearDelay={240}
                        onSelect={() => setModalType("awards")}
                        menu={[
                            {
                                label: "View All Awards",
                                onSelect: () => setModalType("awards"),
                            },
                        ]}
                    />
                    <button
                        type="button"
                        onClick={() => setModalType("awards")}
                        className="mt-5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 group cursor-pointer"
                    >
                        <span>View {awardsList.length} Awards &amp; Honors</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </motion.div>
            </div>

            {/* ========================================================= */}
            {/* MODAL: CERTIFICATES & AWARDS VIEWER                       */}
            {/* ========================================================= */}
            <AnimatePresence>
                {modalType && (
                    <motion.div
                        key="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
                        onClick={() => {
                            setModalType(null);
                            setPreviewItem(null);
                        }}
                    >
                        <motion.div
                            key="modal-content"
                            initial={{ scale: 0.92, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.92, opacity: 0, y: 20 }}
                            transition={{ type: "spring", stiffness: 320, damping: 28 }}
                            className="relative w-full max-w-5xl bg-[#090d1f] border border-cyan-500/25 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.18)] max-h-[90vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex flex-col gap-3 px-4 sm:px-6 py-4 border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-lg flex-shrink-0">
                                            {modalType === "certificates" ? "📜" : "🏆"}
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white">
                                                {modalType === "certificates" ? "Certificates & Diplomas" : "Awards & Honors"}
                                            </h3>
                                            <p className="text-[11px] sm:text-xs text-gray-400">
                                                {modalType === "certificates"
                                                    ? `${certificatesList.length} verified credentials and certificates`
                                                    : `${awardsList.length} competition wins and honors`}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setModalType(null);
                                            setPreviewItem(null);
                                        }}
                                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors cursor-pointer flex-shrink-0 text-base"
                                        aria-label="Close"
                                    >
                                        ✕
                                    </button>
                                </div>

                                {/* Quick Switch Tabs (Visible on both mobile & desktop) */}
                                <div className="flex bg-white/5 rounded-xl p-1 border border-white/10 w-full sm:w-fit self-start">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setModalType("certificates");
                                            setPreviewItem(null);
                                        }}
                                        className={`flex-1 sm:flex-initial px-3.5 py-1.5 text-xs rounded-lg font-medium transition-colors cursor-pointer min-h-[34px] ${modalType === "certificates"
                                                ? "bg-cyan-500/20 text-cyan-300 font-semibold shadow-sm"
                                                : "text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        Certificates ({certificatesList.length})
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setModalType("awards");
                                            setPreviewItem(null);
                                        }}
                                        className={`flex-1 sm:flex-initial px-3.5 py-1.5 text-xs rounded-lg font-medium transition-colors cursor-pointer min-h-[34px] ${modalType === "awards"
                                                ? "bg-cyan-500/20 text-cyan-300 font-semibold shadow-sm"
                                                : "text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        Awards ({awardsList.length})
                                    </button>
                                </div>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                                {/* CERTIFICATES GRID */}
                                {modalType === "certificates" && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                        {certificatesList.map((cert) => (
                                            <div
                                                key={cert.id}
                                                onClick={() => setPreviewItem(cert)}
                                                className="group bg-[#0d1225] border border-white/5 hover:border-cyan-500/40 rounded-2xl overflow-hidden p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer flex flex-col justify-between"
                                            >
                                                <div>
                                                    <div className="relative w-full h-44 rounded-xl overflow-hidden bg-black/40 mb-3">
                                                        <Image
                                                            src={cert.src}
                                                            alt={cert.title}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                            sizes="(max-width: 768px) 100vw, 33vw"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                                                            <span className="text-xs text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                                                                Click to zoom 🔍
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[10px] uppercase tracking-wider font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                                                        {cert.tag}
                                                    </span>
                                                    <h4 className="text-white font-bold text-sm mt-2 line-clamp-2">
                                                        {cert.title}
                                                    </h4>
                                                    <p className="text-gray-400 text-xs mt-1">
                                                        {cert.issuer} {cert.date && `• ${cert.date}`}
                                                    </p>
                                                </div>

                                                {cert.skills && (
                                                    <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-white/5">
                                                        {cert.skills.slice(0, 3).map((skill, sIdx) => (
                                                            <span
                                                                key={sIdx}
                                                                className="text-[10px] text-gray-400 bg-white/5 px-1.5 py-0.5 rounded"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                        {cert.skills.length > 3 && (
                                                            <span className="text-[10px] text-gray-500">
                                                                +{cert.skills.length - 3}
                                                            </span>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* AWARDS GRID */}
                                {modalType === "awards" && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {awardsList.map((award) => (
                                            <div
                                                key={award.id}
                                                onClick={() => setPreviewItem(award)}
                                                className="group bg-[#0d1225] border border-white/5 hover:border-yellow-500/40 rounded-2xl overflow-hidden p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/10 cursor-pointer flex flex-col justify-between"
                                            >
                                                <div>
                                                    <div className="relative w-full h-48 rounded-xl overflow-hidden bg-black/40 mb-3">
                                                        <Image
                                                            src={award.src}
                                                            alt={award.title}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                            sizes="(max-width: 768px) 100vw, 50vw"
                                                        />
                                                        <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm border border-yellow-500/30 text-yellow-300 text-xs font-bold px-2.5 py-1 rounded-lg">
                                                            {award.rank}
                                                        </div>
                                                    </div>
                                                    <span className="text-[10px] uppercase tracking-wider font-bold text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded">
                                                        {award.tag}
                                                    </span>
                                                    <h4 className="text-white font-bold text-base mt-2">
                                                        {award.title}
                                                    </h4>
                                                    <p className="text-gray-400 text-xs mt-1">
                                                        {award.issuer} {award.date && `• ${award.date}`}
                                                    </p>
                                                    {award.description && (
                                                        <p className="text-gray-300 text-xs mt-2 line-clamp-3 leading-relaxed">
                                                            {award.description}
                                                        </p>
                                                    )}
                                                </div>

                                                {award.link && (
                                                    <div className="mt-3 pt-3 border-t border-white/5 flex justify-end">
                                                        <a
                                                            href={award.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="text-xs font-semibold text-yellow-400 hover:text-yellow-300 transition-colors inline-flex items-center gap-1"
                                                        >
                                                            <span>View Behance Case Study</span>
                                                            <span>↗</span>
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ========================================================= */}
            {/* LIGHTBOX: FULL IMAGE PREVIEW                              */}
            {/* ========================================================= */}
            <AnimatePresence>
                {previewItem && (
                    <motion.div
                        key="lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
                        onClick={() => setPreviewItem(null)}
                    >
                        <motion.div
                            key="lightbox-card"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="relative max-w-4xl w-full bg-[#0b1022] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Top Bar */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/60">
                                <div>
                                    <h4 className="text-white font-bold text-base sm:text-lg">
                                        {previewItem.title}
                                    </h4>
                                    <p className="text-xs text-cyan-400">
                                        {previewItem.issuer} {previewItem.date && `• ${previewItem.date}`}
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setPreviewItem(null)}
                                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                                    aria-label="Close"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Image Preview */}
                            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black/60 flex items-center justify-center p-2">
                                <Image
                                    src={previewItem.src}
                                    alt={previewItem.title}
                                    fill
                                    className="object-contain p-2"
                                    sizes="100vw"
                                />
                            </div>

                            {/* Bottom description / links */}
                            {previewItem.description && (
                                <div className="p-4 sm:p-5 border-t border-white/10 bg-slate-900/40">
                                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                                        {previewItem.description}
                                    </p>
                                    {previewItem.link && (
                                        <a
                                            href={previewItem.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 mt-2.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                                        >
                                            <span>Explore External Verification / Project Link</span>
                                            <span>↗</span>
                                        </a>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}


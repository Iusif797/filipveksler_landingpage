"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="header1">
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="gradient-text">FILIP</span>{" "}
          <span className="gradient-text-alt">VEKSLER</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle"
        >
          <span className="role-badge">SCIENTIST</span>
          <span className="separator"></span>
          <span className="role-badge">EDUCATOR</span>
          <span className="separator"></span>
          <span className="role-badge">CONSULTANT</span>
        </motion.div>
      </div>
    </header>
  );
}

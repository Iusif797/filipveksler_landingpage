"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="header1">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hero-content"
      >
        <h1 className="hero-title">
          <span className="gradient-text">FILIP</span>{" "}
          <span className="gradient-text-alt">VEKSLER</span>
        </h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-subtitle"
        >
          <span className="role-badge">SCIENTIST</span>
          <span className="separator"></span>
          <span className="role-badge">EDUCATOR</span>
          <span className="separator"></span>
          <span className="role-badge">CONSULTANT</span>
        </motion.div>
      </motion.div>
    </header>
  );
}

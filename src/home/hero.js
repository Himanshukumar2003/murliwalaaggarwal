"use client";

import { motion } from "motion/react";
import React from "react";
import { MorphingText } from "@/components/ui/morphing-text";

export default function HeroVideoSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/murliwala.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌑 Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-20 flex items-center justify-center text-center text-white"
      >
        <div>
          {/* 🔥 Heading Animation */}
          <h1
            className="text-[64px] md:text-[104px] font-bold "
            animate={{
              opacity: [1, 0.7, 1],
              y: [-10, 0, -10],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Made With
          </h1>

          <MorphingText
            className="text-yellow-500     text-[55px] md:text-[70px] lg:text-[104px] font-bold"
            texts={["Hygiene", "Pureness", "Love"]}
          />

          {/* 🔥 Paragraph Animation */}
          <p
            className="text-xl md:text-3xl mt-2"
            animate={{
              opacity: [1, 0.5, 1],
              y: [-5, 0, -5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            From sourcing to preparation, purity comes first.<br></br> Made with
            love, so you can consume with complete peace of mind.
          </p>

          {/* 🔥 Button Animation */}
          <motion.a
            href="#"
            className="mt-6 inline-block px-8 py-3 text-lg font-semibold text-black bg-white hover:bg-primary hover:text-white transition-colors"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            VIEW THE MENU
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

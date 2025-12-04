"use client";

import { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "motion/react";
import React from "react";
export default function VerticalDualSlider() {
  const images = ["/img/2.jpg", "/img/1.jpg", "/img/4.jpg"];
  const imagesTwo = ["/img/3.jpg", "/img/4.jpg", "/img/5.jpg"];

  return (
    <div className="flex   relative  justify-evenly bg-black">
      <ImagesSlider
        className="w-full h-screen"
        overlayClassName={"bg-transparent"}
        images={images}
      ></ImagesSlider>

      <div className="">
        <div className="absolute inset-0 bg-black z-22 opacity-30"></div>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex z-55 items-center justify-center text-center text-white"
        >
          <div>
            {/* 🔥 Heading Loop Animation */}
            <motion.h1
              className="text-[104px] "
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
              Sweet Desert
            </motion.h1>

            {/* 🔥 Paragraph Loop Animation */}
            <motion.p
              className="text-3xl "
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
              MADE WITH LOVE
            </motion.p>

            {/* 🔥 Button Loop Animation (pulse + slight bounce) */}
            <motion.a
              href="#"
              className="mt-6 font-font-main inline-block px-8 py-3 text-lg font-semibold text-black bg-[#FFFFFF] hover:bg-primary hover:text-white transition-colors"
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
      </div>

      <ImagesSlider
        className="w-full h-screen"
        overlayClassName={"bg-transparent"}
        images={imagesTwo}
      ></ImagesSlider>
    </div>
  );
}

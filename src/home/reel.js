"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";
import Heading from "@/components/ui/heading";

export default function VideoSwiper() {
  const swiperRef = useRef(null);

  const videos = [
    "/video/murliwala.mp4",
    "/video/murliwala.mp4",
    "/video/murliwala.mp4",
    "/video/murliwala.mp4",
    "/video/murliwala.mp4",
    "/video/murliwala.mp4",
    "/video/murliwala.mp4",
    "/video/murliwala.mp4",
  ];

  const handlePlay = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handlePause = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="container max-w-7xl mx-auto">
        <Heading
          tag="Sweet Treats"
          title="Our Specialties"
          subtitle="Handcrafted with love and the finest ingredients"
        />

        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            567: {
              slidesPerView: 1,
            },
            786: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={20}
          className="w-full"
        >
          {videos.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full  flex items-center justify-center">
                <video
                  className="w-full  object-cover h-[400px]   rounded-2xl"
                  controls
                  playsInline
                  onPlay={handlePlay}
                  onPause={handlePause}
                  onEnded={handlePause}
                >
                  <source src={src} type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

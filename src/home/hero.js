"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";

const banners = ["/img/Banner-3.png", "/img/Banner-4.png"];

export default function HeroVideoSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFFBEB] h-auto md:h-[calc(100vh-120px)]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        loop
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {banners.map((img, index) => (
          <SwiperSlide key={index}>
            {/* IMPORTANT CHANGE HERE */}
            <div className="w-full h-auto md:h-[calc(100vh-120px)]">
              <Image
                src={img}
                alt="Banner"
                width={5000}
                height={5000}
                className="w-full h-auto md:h-full "
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

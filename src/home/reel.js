"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";
import Heading from "@/components/ui/heading";
import { useQuery } from "@tanstack/react-query";
import http from "@/utils/http";
import { endpoints } from "@/utils/endpoints";
import Loader from "@/components/loader";

export default function VideoSwiper() {
  const swiperRef = useRef(null);

  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await http().get(endpoints.stories.getAll);
      return res?.data?.stories ?? [];
    },
  });

  // ⛔ video play → swiper stop
  const handlePlay = () => {
    swiperRef.current?.autoplay?.stop();
  };

  // ▶ video pause/end → swiper start
  const handlePause = () => {
    swiperRef.current?.autoplay?.start();
  };

  if (isLoading) return <Loader />;
  if (isError)
    return (
      error?.response?.data?.message ??
      error?.message ??
      "Something went wrong."
    );

  // ✅ agar data hi nahi hai → section render hi nahi hoga
  if (!data.length) return null;

  return (
    <section className="py-16 px-4">
      <div className="container max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            567: { slidesPerView: 1 },
            786: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          spaceBetween={20}
          className="w-full"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full flex justify-center">
                <iframe
                  width="560"
                  height="400"
                  className="rounded-[20px]"
                  src={item.link}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onMouseEnter={handlePlay} // 🛑 hover / play
                  onMouseLeave={handlePause} // ▶ leave / pause
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { SectionHeading } from "@/components/section-heading";
import { siteData } from "@/lib/site-data";

export function GallerySection() {
  const shuffledGallery = useMemo(() => {
    const arr = [...siteData.gallery];

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }, []);

  return (
    <section
      id="gallery"
      className="mx-auto max-w-7xl px-4 py-24 md:px-6"
    >
      <SectionHeading
        eyebrow="Memories"
        title="Wedding Memories"
        description="Swipe to explore our memories."
      />

      <div className="mt-16">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop
          grabCursor
          centeredSlides
        >
          {shuffledGallery.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="cursor-pointer"
              >
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/10
                    bg-black/10
                    shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                  "
                >
                  <Image
                    src={image}
                    alt={`Memory ${index + 1}`}
                    width={1600}
                    height={900}
                    priority={index < 2}
                    className="
                      w-full
                      rounded-[28px]
                      transition-transform
                      duration-700
                      hover:scale-105
                    "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
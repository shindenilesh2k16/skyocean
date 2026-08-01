"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const banners = [
  {
    image: "/banner1.png",
    mobileImage: "/mobilebanner1.png",
    alt: "SKYOCEAN Pure Water",
  },
  {
    image: "/banner2.png",
    mobileImage: "/mobilebanner2.jpg",
    alt: "SKYOCEAN Premium Drinking Water",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setActive((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActive((prev) =>
      prev === banners.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative w-full overflow-hidden">

      {/* Banner */}
      <div className="relative w-full aspect-[9/16] md:aspect-[16/6]">

          {/* Desktop Banner */}
        <Image
          src={banners[active].image}
          alt={banners[active].alt}
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover object-center"
        />

        {/* Mobile Banner */}
        <Image
          src={banners[active].mobileImage}
          alt={banners[active].alt}
          fill
          priority
          sizes="100vw"
          className="block md:hidden object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Buttons */}
        <div
          className="
          absolute
          bottom-[8%]
          left-1/2
          -translate-x-1/2
          md:left-[10%]
          md:translate-x-0
          md:bottom-[15%]
          flex flex-wrap gap-4
        "
        >

          <Link
            href="#products"
            className="rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-sky-700"
          >
            Explore Products
          </Link>

          <Link
            href="#contact"
            className="rounded-xl border-2 border-white bg-black/20 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
          >
            Contact Us
          </Link>

        </div>
      </div>

      {/* Previous */}
      <button
        onClick={previousSlide}
        aria-label="Previous banner"
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-3xl text-white backdrop-blur-sm transition hover:bg-black/60"
      >
        ‹
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        aria-label="Next banner"
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-3xl text-white backdrop-blur-sm transition hover:bg-black/60"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            aria-label={`Go to banner ${index + 1}`}
            className={`h-3 rounded-full transition-all ${
              active === index
                ? "w-8 bg-white"
                : "w-3 bg-white/60"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
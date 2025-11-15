"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import React, { useState, useId, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface SlideData {
  title: string;
  button?: string;
  src?: string;
  video?: string; // ✅ Added video support
  component?: React.ReactNode;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
  variant?: "desktop" | "mobile";
}

const Slide = ({ slide, index, current, handleSlideClick, variant = "desktop" }: SlideProps) => {
  const { src, video, title, component } = slide;
  const isComponent = Boolean(component);
  const isVideo = Boolean(video);
  const baseLi = "relative shrink-0 flex items-center justify-center";
  const desktopLiStyle: React.CSSProperties = { width: "calc(var(--cardW) + var(--gapR))" };

  return (
    <li
      className={
        variant === "mobile"
          ? `${baseLi} flex-none w-full px-3`
          : `${baseLi} px-4 sm:px-6`
      }
      onClick={() => handleSlideClick(index)}
      aria-current={current === index}
      style={variant === "desktop" ? desktopLiStyle : undefined}
    >
      <div
        className="relative bg-[#0A0A0A] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 mx-auto w-full"
        style={{
          aspectRatio: variant === "mobile" ? "9 / 16" : "16 / 9",
          width: variant === "desktop" ? "var(--cardW)" : "100%",
          maxWidth: variant === "mobile" ? "calc(100vw - 2rem)" : undefined,
        }}
      >
        {/* 🔥 VIDEO SUPPORT */}
        {isVideo && !isComponent && (
          <>
            <video
              src={video}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-black/15 to-transparent" />
          </>
        )}

        {/* IMAGE */}
        {!isComponent && !isVideo && (
          <>
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt={title}
              src={src}
              loading="eager"
              decoding="sync"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-black/15 to-transparent" />
          </>
        )}

        {/* COMPONENT */}
        {isComponent && (
          <div className="absolute inset-0 bg-black">{component}</div>
        )}

        {/* TEXT CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-end p-6 sm:p-8 text-center">
          <article className="w-full max-w-xl">
            <h3 className="text-xs sm:text-sm tracking-widest text-white/80 uppercase"></h3>
            <h2 className="mt-1 text-2xl md:text-4xl lg:text-5xl font-semibold text-white drop-shadow">
              {title}
            </h2>
            <p className="mt-3 text-white/80 text-sm md:text-base">
              24/7 trading agent for market analysis, automated execution, and risk-first rebalancing.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                to="/wishlist"
                className="bg-slate-800 group relative shadow-2xl shadow-zinc-900 rounded-full p-2 text-sm font-semibold leading-6 text-white inline-block"
              >
                <span className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1.5 px-6 ring-1 ring-white/10">
                  <span>Get Access</span>
                </span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </li>
  );
};

interface CarouselControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => (
  <button
    className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200/70 dark:bg-neutral-800/70 backdrop-blur border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
      type === "previous" ? "rotate-180" : ""
    }`}
    title={title}
    onClick={handleClick}
    aria-label={title}
  >
    <IconArrowNarrowRight className="text-neutral-700 dark:text-neutral-100" />
  </button>
);

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(() => Math.floor(slides.length / 2));
  const id = useId();

  const CARD_WIDTH_CLAMP = "clamp(280px, 80vw, 1200px)";
  const GAP_REM = 2;

  const mobileViewportRef = useRef<HTMLDivElement | null>(null);
  const mobileTrackRef = useRef<HTMLUListElement | null>(null);

  const [mobileStep, setMobileStep] = useState(0);

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) setCurrent(index);
  };

  const AUTOPLAY_MS = 6500;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const measure = () => {
      const vp = mobileViewportRef.current;
      if (!vp) return;
      setMobileStep(vp.clientWidth);
    };

    measure();

    const vp = mobileViewportRef.current;
    let ro: ResizeObserver | null = null;
    if (vp && "ResizeObserver" in window) {
      ro = new ResizeObserver(() => measure());
      ro.observe(vp);
    }

    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);

    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
      if (ro) ro.disconnect();
    };
  }, []);

  const mobileTransform = mobileStep
    ? `translateX(${-current * mobileStep}px)`
    : undefined;

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-black"
      aria-labelledby={`carousel-heading-${id}`}
      style={
        {
          "--cardW": CARD_WIDTH_CLAMP,
          "--gapR": `${GAP_REM}rem`,
        } as React.CSSProperties
      }
    >
      <style>{`
        .carousel-mobile-scroll {
          display: flex;
          transition: transform 0.7s ease-out;
          will-change: transform;
          user-select: none;
          overflow: visible !important;
        }
        .carousel-mobile-scroll::-webkit-scrollbar { display: none; }
        .carousel-mobile-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-snap-type: none !important;
        }
      `}</style>

      {/* Mobile track */}
      <div ref={mobileViewportRef} className="md:hidden relative w-full h-full overflow-hidden">
        <ul
          ref={mobileTrackRef}
          className="carousel-mobile-scroll"
          style={{ transform: mobileTransform }}
          role="listbox"
          aria-live="polite"
        >
          {slides.map((slide, index) => (
            <Slide
              key={`m-${index}`}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
              variant="mobile"
            />
          ))}
        </ul>
      </div>

      {/* Desktop track */}
      <ul
        className="hidden md:flex absolute inset-0 items-center h-full transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translateX(calc(${-current} * (var(--cardW) + var(--gapR)) + (50vw - (var(--cardW) / 2))))`,
        }}
        role="listbox"
        aria-live="polite"
      >
        {slides.map((slide, index) => (
          <Slide
            key={`d-${index}`}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
            variant="desktop"
          />
        ))}
      </ul>

      {/* Desktop controls */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center justify-center">
        <CarouselControl type="previous" title="Go to previous slide" handleClick={handlePreviousClick} />
        <CarouselControl type="next" title="Go to next slide" handleClick={handleNextClick} />
      </div>
    </div>
  );
}

export default Carousel;

"use client";
import { IconArrowNarrowRight, IconArrowNarrowLeft } from "@tabler/icons-react";
import React, { useState, useId, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface SlideData {
  title: string;
  button?: string;
  src?: string;
  video?: string;
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
        // UPDATED: bg-[#121317] for the card + subtle border and shadow to separate from main bg
        className="relative bg-[#121317] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/10 mx-auto w-full transition-all duration-500"
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
              className="absolute inset-0 w-full h-full object-cover opacity-90" // Slight opacity to blend
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#121317] via-transparent to-transparent" />
          </>
        )}

        {/* IMAGE */}
        {!isComponent && !isVideo && (
          <>
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-90"
              alt={title}
              src={src}
              loading="eager"
              decoding="sync"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#121317] via-transparent to-transparent" />
          </>
        )}

        {/* COMPONENT */}
        {isComponent && (
          <div className="absolute inset-0 bg-[#121317]">{component}</div>
        )}

        {/* TEXT CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-end p-8 sm:p-12 text-center z-20">
          <article className="w-full max-w-2xl">
            <h2 className="mt-1 text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
              {title}
            </h2>
            <p className="mt-4 text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              24/7 trading agent for market analysis, automated execution, and risk-first rebalancing.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                to="/wishlist"
                className="bg-slate-800 group relative shadow-2xl shadow-zinc-950 rounded-full p-1 text-sm font-semibold leading-6 text-white inline-block"
              >
                <span className="relative flex space-x-2 items-center z-10 rounded-full bg-[#121317] py-2 px-8 ring-1 ring-white/10 hover:bg-zinc-900 transition-all duration-300">
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
  // UPDATED: Better UI for controls (dark glassmorphism)
  <button
    className={`w-12 h-12 flex items-center mx-2 justify-center bg-zinc-900/50 hover:bg-zinc-800 backdrop-blur-md border border-white/10 rounded-full focus:ring-2 focus:ring-zinc-500 focus:outline-none transition-all duration-300 group`}
    title={title}
    onClick={handleClick}
    aria-label={title}
  >
    {type === "previous" ? (
      <IconArrowNarrowLeft className="text-zinc-400 group-hover:text-white transition-colors" size={24} />
    ) : (
      <IconArrowNarrowRight className="text-zinc-400 group-hover:text-white transition-colors" size={24} />
    )}
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

  const AUTOPLAY_MS = 8500;

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
    // UPDATED: bg-[#121317]
    <div
      className="relative w-full h-full overflow-hidden bg-[#121317]"
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
          transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
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
        className="hidden md:flex absolute inset-0 items-center h-full transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1) will-change-transform"
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

      {/* Desktop controls - Clean Dark UI */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center justify-center gap-4 z-30">
        <CarouselControl type="previous" title="Go to previous slide" handleClick={handlePreviousClick} />
        <CarouselControl type="next" title="Go to next slide" handleClick={handleNextClick} />
      </div>
    </div>
  );
}

export default Carousel;
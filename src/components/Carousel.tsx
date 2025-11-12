// components/Carousel.tsx
"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import React, { useState, useId } from "react";
import { Link } from "react-router-dom";

interface SlideData {
  title: string;
  button?: string;
  src?: string;
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
  const { src, title, component } = slide;
  const isComponent = Boolean(component);

  const baseLi = "relative shrink-0 flex items-center justify-center px-4 sm:px-6";

  // Desktop keeps width by track variables; mobile is fluid (no fixed width)
  const desktopLiStyle: React.CSSProperties = { width: "calc(var(--cardW) + var(--gapR))" };

  return (
    <li
      className={
        variant === "mobile"
          ? `${baseLi} snap-center flex-none basis-full w-full max-w-full`
          : baseLi
      }
      onClick={() => handleSlideClick(index)}
      aria-current={current === index}
      style={variant === "desktop" ? desktopLiStyle : undefined}
    >
      {/* 16:9 Landscape Card */}
      <div
        className="relative bg-[#0A0A0A] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 mx-auto"
        style={{ aspectRatio: "16 / 9", width: variant === "desktop" ? "var(--cardW)" : "100%" }}
      >
        {!isComponent && (
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

        {isComponent && <div className="absolute inset-0 bg-black">{component}</div>}

        {/* Universal overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-end p-6 sm:p-8 text-center">
          <article className="w-full max-w-xl">
            <h3 className="text-xs sm:text-sm tracking-widest text-white/80 uppercase">Sally AI</h3>
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
const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => {
  return (
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
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(() => Math.floor(slides.length / 2));
  const id = useId();

  // Desktop center-mode sizing
  const CARD_WIDTH_CLAMP = "clamp(280px, 80vw, 1200px)";
  const GAP_REM = 2;

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };
  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };
  const handleSlideClick = (index: number) => {
    if (current !== index) setCurrent(index);
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-black"
      aria-labelledby={`carousel-heading-${id}`}
      style={
        {
          // @ts-ignore
          "--cardW": CARD_WIDTH_CLAMP,
          // @ts-ignore
          "--gapR": `${GAP_REM}rem`,
        } as React.CSSProperties
      }
    >
      {/* Mobile track: fluid, full-width cards with snap */}
      <div className="md:hidden relative w-full">
        <ul
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-3 py-2 select-none"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollPadding: "0 12px",
          }}
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

      {/* Desktop track: center-mode */}
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

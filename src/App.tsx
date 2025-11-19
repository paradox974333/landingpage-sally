"use client";

import React, { useEffect, useState, useRef, useId } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { X, Play, Maximize2, Activity, Database, Cpu, ShieldAlert } from "lucide-react";

// --------------------------------------------------------------------------
// IMPORTED COMPONENTS (Assuming these exist in your project)
// --------------------------------------------------------------------------
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./components/resizable-navbar";

import FeaturesSection from "./components/FeaturesSection";
import { WishlistForm } from "./components/WishlistForm";
import Hyperspeed from "./components/Hyperspeed";

/* -------------------------------------------------------------------------- /
/                                CAROUSEL LOGIC                              /
/ -------------------------------------------------------------------------- */

const Slide = ({ slide, index, current, handleSlideClick, variant = "desktop" }) => {
  const { src, video, title, component } = slide;
  const isComponent = Boolean(component);
  const isVideo = Boolean(video);
  const baseLi = "relative shrink-0 flex items-center justify-center";
  const desktopLiStyle = { width: "calc(var(--cardW) + var(--gapR))" };

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
        // BG COLOR: #121317
        className="relative bg-[#121317] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/10 mx-auto w-full transition-all duration-500"
        style={{
          aspectRatio: variant === "mobile" ? "9 / 16" : "16 / 8",
          width: variant === "desktop" ? "var(--cardW)" : "100%",
          maxWidth: variant === "mobile" ? "calc(100vw - 2rem)" : undefined,
        }}
      >
        {/* VIDEO SUPPORT */}
        {isVideo && !isComponent && (
          <>
            <video
              src={video}
              className="absolute inset-0 w-full h-full object-cover opacity-90"
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
            <h2 className="mt-1 text-3xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
              {title}
            </h2>
            <p className="mt-4 text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              24/7 trading agent for market analysis, automated execution, and risk-first rebalancing.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="https://sally.imperialx.io"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 group relative shadow-2xl shadow-zinc-950 rounded-full p-1 text-sm font-semibold leading-6 text-white inline-block"
              >
                <span className="relative flex space-x-2 items-center z-10 rounded-full bg-[#121317] py-2 px-8 ring-1 ring-white/10 hover:bg-zinc-900 transition-all duration-300">
                  <span>Launch</span>
                </span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </li>
  );
};

function Carousel({ slides }) {
  const [current, setCurrent] = useState(() => Math.floor(slides.length / 2));
  const id = useId();

  const CARD_WIDTH_CLAMP = "clamp(300px, 95vw, 1600px)";
  const GAP_REM = 2;

  const mobileViewportRef = useRef(null);
  const mobileTrackRef = useRef(null);
  const [mobileStep, setMobileStep] = useState(0);

  const handleSlideClick = (index) => {
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
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const mobileTransform = mobileStep
    ? `translateX(${-current * mobileStep}px)`
    : undefined;

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-[#121317]"
      aria-labelledby={`carousel-heading-${id}`}
      style={{
        "--cardW": CARD_WIDTH_CLAMP,
        "--gapR": `${GAP_REM}rem`,
      }}
    >
      <style>{`.carousel-mobile-scroll { display: flex; transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1); will-change: transform; user-select: none; overflow: visible !important; } .carousel-mobile-scroll::-webkit-scrollbar { display: none; } .carousel-mobile-scroll { -ms-overflow-style: none; scrollbar-width: none; scroll-snap-type: none !important; }`}</style>

      {/* Mobile track */}
      <div ref={mobileViewportRef} className="md:hidden relative w-full h-full overflow-hidden">
        <ul
          ref={mobileTrackRef}
          className="carousel-mobile-scroll"
          style={{ transform: mobileTransform }}
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
    </div>
  );
}

/* -------------------------------- NAVBAR -------------------------------- */
function NavbarDemo() {
  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Capabilities", link: "#capabilities" },
    { name: "How It Works", link: "#how-it-works" },
    { name: "About", link: "https://imperialx.io/whitepaper" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-transparent relative">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://sally.imperialx.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full p-2 text-sm font-semibold leading-6 text-white shadow-2xl shadow-zinc-900 ring-1 ring-white/10 bg-slate-800"
            >
              <span className="relative flex items-center space-x-2 rounded-full bg-zinc-950 py-1.5 px-6 ring-1 ring-white/10">
                <span>Launch</span>
              </span>
            </a>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 text-lg py-2"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}

            <div className="flex w-full flex-col gap-4 mt-4">
              <a
                href="https://sally.imperialx.io"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center rounded-2xl bg-zinc-950 text-white py-3 ring-1 ring-white/10 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Launch
              </a>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

/* ----------------------------- CAROUSEL DEMO WRAPPER ----------------------------- */
export function CarouselDemo() {
  const slideData = [
    {
      title: "SALLY AI",
      component: (
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x121317,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
          }}
        />
      ),
    },
  ];

  return (
    <div className="relative w-full h-[90vh] md:h-screen flex items-center justify-center bg-[#121317] py-0 md:py-8">
      <Carousel slides={slideData} />
    </div>
  );
}

/* ---------------------- SECTION: WHAT SALLY CAN DO ---------------------- */
function WhatSallyCanDo() {
  // Modal Logic moved here
  const [modalOpen, setModalOpen] = useState(false);
  const [mediaType, setMediaType] = useState(null);
  const [mediaSrc, setMediaSrc] = useState("");

  const openModal = (type, src) => {
    setMediaType(type);
    setMediaSrc(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setMediaType(null);
    setMediaSrc("");
  };

  const capabilities = [
    {
      title: "Multi-Venue Surveillance",
      desc: "Simultaneously monitors on-chain mempools and off-chain social sentiment (X, Discord, Telegram) to identify liquidity shifts.",
    },
    {
      title: "Autonomous Execution",
      desc: "Executes complex entry and exit strategies without human intervention, adhering to strict slippage and gas constraints.",
    },
    {
      title: "Portfolio Rebalancing",
      desc: "Dynamically adjusts asset weightings based on real-time volatility metrics and exposure analysis.",
    },
    {
      title: "Sentiment Synthesis",
      desc: "Converts qualitative social data into quantitative 'Fear & Greed' indices for actionable alpha generation.",
    },
  ];

  return (
    <>
      {/* Modal Overlay */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center">
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            <div 
              className="w-full h-full overflow-hidden rounded-lg border border-zinc-800 shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()} 
            >
              {mediaType === "video" ? (
                <video
                  src={mediaSrc}
                  className="w-full h-auto max-h-[85vh] object-contain"
                  autoPlay
                  controls
                  playsInline
                />
              ) : (
                <img
                  src={mediaSrc}
                  alt="Expanded View"
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}

      <section id="capabilities" className="w-full bg-[#121317] py-16 md:py-24 px-4 sm:px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              What Sally Can Do
            </h2>
            <p className="text-zinc-400 max-w-3xl mx-auto text-base md:text-lg">
              Sally is an all-in-one AI that watches the market nonstop, makes trades automatically, and keeps your portfolio balanced, all while putting safety and risk control first.
            </p>
          </div>

          {/* --- PART 1: DEEP DIVE FEATURES (Crash & Signal) --- */}
          
          {/* ROW 1: Crash Detection */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-20 lg:mb-24">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div 
                className="group relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-purple-900/20 cursor-pointer hover:border-purple-500/50 transition-all duration-300"
                onClick={() => openModal("video", "Trading Agent.mp4")}
              >
                <video
                  src="Trading Agent.mp4"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full p-4">
                     <Play className="text-white fill-white" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs text-white border border-white/10 flex items-center gap-1">
                  <Maximize2 size={12} /> Click to Expand
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
                <ShieldAlert className="text-purple-500" size={32} />
                Crash Detection
              </h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                Utilizing an asynchronous event loop, Sally ingests real-time order book depth and tick-level data. The system applies 
                <span className="text-purple-400 font-medium"> Gaussian Process Regression</span> to predict liquidity hollows, allowing the 
                <span className="text-white font-semibold"> Crash Detection Agent</span> to preemptively trigger circuit breakers. 
                By calculating the Sharpe Ratio in real-time against implied volatility surfaces, she minimizes drawdown during black swan events.
              </p>
              <ul className="space-y-3 text-zinc-500 font-mono text-xs md:text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                  Latency: &lt;50ms Execution Time
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                  Throughput: 10k+ events/sec
                </li>
              </ul>
            </div>
          </div>

          {/* ROW 2: Signal Generation */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-24">
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
                <Activity className="text-blue-500" size={32} />
                Signal Generation
              </h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                The <span className="text-white font-semibold">Signal Agent</span> operates on a proprietary MCP framework. It tokenizes unstructured social data into high-dimensional vector embeddings. 
                Using <span className="text-purple-400 font-medium">Cosine Similarity</span> algorithms and Transformer-based NLP models, Sally correlates semantic sentiment shifts with on-chain volume spikes.
                This allows for the probabilistic determination of alpha generation before price action confirms the trend.
              </p>
              <ul className="space-y-3 text-zinc-500 font-mono text-xs md:text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
                  Architecture: Model Context Protocol (MCP)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
                  Logic: Stochastic Differential Equations
                </li>
              </ul>
            </div>
            
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
              <div 
                className="group relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-blue-900/20 cursor-pointer hover:border-blue-500/50 transition-all duration-300"
                onClick={() => openModal("image", "Trading Agent.png")}
              >
                <img
                  src="Trading Agent.png"
                  alt="Signal Agent Interface"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full p-4">
                     <Maximize2 className="text-white" size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- PART 2: GRID CAPABILITIES --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-zinc-800 p-6 md:p-8 transition-all hover:border-zinc-600 hover:bg-zinc-900/80"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl transition-all group-hover:bg-purple-500/20"></div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                  {cap.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed relative z-10">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

/* ---------------------- SECTION: HOW SALLY WORKS ---------------------- */
function HowSallyWorks() {
  return (
    <section id="how-it-works" className="w-full bg-[#121317] py-16 md:py-24 px-4 sm:px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            How Sally Works
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto text-base md:text-lg">
             Powered by continuous market intelligence, Sally is an all-in-one system designed to process vast datasets for precision trading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-zinc-800 to-transparent -z-10"></div>

            {/* Step 1 */}
            <div className="bg-[#121317] p-6 rounded-2xl border border-zinc-800 text-center z-10">
                <div className="w-16 h-16 mx-auto bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-700 mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    <Database className="text-purple-400" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">1. Massive Data Ingestion</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                    Sally aggregates petabytes of historical and real-time market data. We analyze order books, wallet movements, and social sentiment streams simultaneously, ensuring no market signal goes unnoticed.
                </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#121317] p-6 rounded-2xl border border-zinc-800 text-center z-10">
                <div className="w-16 h-16 mx-auto bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-700 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    <Cpu className="text-blue-400" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">2. Intelligent Processing</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                    Using proprietary risk-first governance models, the system processes data through stochastic calculus and vector embeddings. This allows Sally to separate noise from high-probability alpha opportunities in milliseconds.
                </p>
            </div>

             {/* Step 3 */}
             <div className="bg-[#121317] p-6 rounded-2xl border border-zinc-800 text-center z-10">
                <div className="w-16 h-16 mx-auto bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-700 mb-6 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                    <Activity className="text-green-400" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">3. Hyper-Velocity Execution</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                    Once a signal is validated against safety parameters, Sally executes the trade autonomously. The system continuously monitors the position, ready to rebalance or exit to protect capital.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- SECTION: POWERED BY ---------------------- */
function PoweredBy() {
    return (
        <section className="w-full bg-[#121317] py-12 md:py-20 px-4 border-t border-zinc-900 flex flex-col items-center justify-center">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-8">
                    Powered By
                </h2>
                <div className="relative w-full flex justify-center">
                   {/* Assuming lab.png is in your public assets folder */}
                   <img 
                    src="lab.png" 
                    alt="Sally Powered By Labs" 
                    className="w-full max-w-3xl h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-500"
                   />
                </div>
            </div>
        </section>
    );
}

/* ---------------------- SECTION: FOOTER ---------------------- */
function Footer() {
  return (
    <footer className="w-full bg-[#121317] border-t border-zinc-900 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="logo.png" 
                alt="Imperial X Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-2xl font-bold text-white tracking-tighter">Imperial X</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Building the next generation of autonomous financial agents.
              <br />
              Secure. Intelligent. Always on.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><Link to="#" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Architecture</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Security</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><Link to="#" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Imperial X Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------- HOME ---------------------------------- */
function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="w-screen bg-[#121317] text-white min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'Space Grotesk', 'Inter', 'Poppins', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap'); * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; } html, body { margin: 0; padding: 0; overflow-x: hidden; width: 100vw; max-width: 100vw; } html { scroll-behavior: smooth; }`}</style>

      <header className="w-full z-50 bg-transparent fixed top-0 left-0">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <NavbarDemo />
        </div>
      </header>

      <main
        className="w-full"
        style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 4.5rem)" }}
      >
        {/* HERO CAROUSEL */}
        <section className="relative w-full h-auto md:h-screen overflow-hidden bg-[#121317]">
          <CarouselDemo />
        </section>

        {/* INTRO */}
        <section
          id="intro"
          className="w-full bg-[#121317] py-16 md:py-24 px-4"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Introducing Sally
            </h2>
            <p className="mt-6 text-base md:text-xl text-zinc-300 leading-relaxed">
              SALLY AI is an all-in-one, next-generation trading system that delivers autonomous, hyper-velocity auto-trading, infused with continuous market intelligence and precision-engineered, risk-first governance.
            </p>
            <div className="mt-10">
              <a 
                href="https://sally.imperialx.io"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block"
              >
                <button className="bg-slate-800 group relative shadow-2xl shadow-zinc-900 rounded-full p-2 text-sm font-semibold leading-6 text-white inline-block">
                  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-8 ring-1 ring-white/10 hover:bg-zinc-900 transition-colors">
                    <span>Launch</span>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="w-full bg-[#121317] py-16 md:py-24 px-4">
          <FeaturesSection />
        </section>

        {/* WHAT SALLY CAN DO (Includes Crash/Signal & Grid) */}
        <WhatSallyCanDo />

        {/* HOW SALLY WORKS */}
        <HowSallyWorks />

        {/* POWERED BY */}
        <PoweredBy />

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

/* ---------------------------------- APP ---------------------------------- */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wishlist" element={<WishlistForm />} />
    </Routes>
  );
}
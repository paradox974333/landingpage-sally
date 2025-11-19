"use client";

import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

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
import { Carousel } from "./components/Carousel";
import Hyperspeed from "./components/Hyperspeed";

// ✅ FIXED — default import
import SallyMCPSection from "./components/SallyMCPSection";

/* -------------------------------- NAVBAR -------------------------------- */
function NavbarDemo() {
  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Capabilities", link: "#capabilities" },
    { name: "Architecture", link: "#architecture" },
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
            <NavbarButton variant="secondary">Login</NavbarButton>

            <Link
              to="/wishlist"
              className="inline-flex items-center justify-center rounded-full p-2 text-sm font-semibold leading-6 text-white shadow-2xl shadow-zinc-900 ring-1 ring-white/10 bg-slate-800"
            >
              <span className="relative flex items-center space-x-2 rounded-full bg-zinc-950 py-1.5 px-6 ring-1 ring-white/10">
                <span>Get Access</span>
              </span>
            </Link>
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
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}

            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>

              <Link
                to="/wishlist"
                className="w-full inline-flex items-center justify-center rounded-2xl bg-zinc-950 text-white py-3 ring-1 ring-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Access
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

/* ----------------------------- CAROUSEL DEMO ----------------------------- */
export function CarouselDemo() {
  const slideData = [
    {
      title: "CRASH DETECTION AGENT",
      button: "Explore Component",
      video: "Trading Agent.mp4",
    },
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
              background: 0x000000,
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
    {
      title: "SIGNAL AGENT",
      button: "Explore Component",
      src: "Trading Agent.png",
    },
  ];

  return (
    <div className="relative w-full h-auto md:h-screen flex items-center justify-center bg-black py-4 md:py-8">
      <Carousel slides={slideData} />
    </div>
  );
}

/* ---------------------- NEW SECTION: WHAT SALLY CAN DO ---------------------- */
function WhatSallyCanDo() {
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
    <section id="capabilities" className="w-full bg-black py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            What Sally Can Do
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Beyond simple alerts, Sally is a fully autonomous agent capable of end-to-end market participation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8 transition-all hover:border-zinc-600 hover:bg-zinc-900/80"
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
  );
}

/* ---------------------- NEW SECTION: HOW SALLY WORKS ---------------------- */
function HowSallyWorks() {
  return (
    <section id="architecture" className="w-full bg-[#050505] py-16 md:py-24 px-4 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            How Sally Works
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
            Sally leverages a high-throughput Model Context Protocol (MCP) architecture to process thousands of data points per second, utilizing stochastic calculus for risk modeling and vector embeddings for semantic signal detection.
          </p>
        </div>

        {/* ROW 1: Crash Detection (Video) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-purple-900/20">
              {/* Reusing the video from hero */}
              <video
                src="Trading Agent.mp4"
                className="w-full h-auto object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Heuristic Anomaly & Crash Detection
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Utilizing an asynchronous event loop, Sally ingests real-time order book depth and tick-level data. The system applies 
              <span className="text-purple-400 font-medium"> Gaussian Process Regression</span> to predict liquidity hollows, allowing the 
              <span className="text-white font-semibold"> Crash Detection Agent</span> to preemptively trigger circuit breakers. 
              By calculating the Sharpe Ratio in real-time against implied volatility surfaces, she minimizes drawdown during black swan events.
            </p>
            <ul className="space-y-2 text-zinc-500 font-mono text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Latency: &lt;50ms Execution Time
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Throughput: 10k+ events/sec
              </li>
            </ul>
          </div>
        </div>

        {/* ROW 2: Signal Agent (Image) */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              High-Dimensional Vector Signal Analysis
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              The <span className="text-white font-semibold">Signal Agent</span> operates on a proprietary MCP framework. It tokenizes unstructured social data into high-dimensional vector embeddings. 
              Using <span className="text-purple-400 font-medium">Cosine Similarity</span> algorithms and Transformer-based NLP models, Sally correlates semantic sentiment shifts with on-chain volume spikes.
              This allows for the probabilistic determination of alpha generation before price action confirms the trend.
            </p>
            <ul className="space-y-2 text-zinc-500 font-mono text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Architecture: Model Context Protocol (MCP)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Logic: Stochastic Differential Equations
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-blue-900/20">
              {/* Reusing the image from hero */}
              <img
                src="Trading Agent.png"
                alt="Signal Agent Interface"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
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
      className="w-screen bg-black text-white min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'Space Grotesk', 'Inter', 'Poppins', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        html, body { margin: 0; padding: 0; overflow-x: hidden; width: 100vw; max-width: 100vw; }
        html { scroll-behavior: smooth; }
      `}</style>

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
        <section className="relative w-full h-auto md:h-screen overflow-hidden bg-black">
          <CarouselDemo />
        </section>

        {/* INTRO */}
        <section
          id="intro"
          className="w-full bg-gradient-to-b from-black via-[#0D0716] to-black py-14 sm:py-20 px-3 sm:px-4"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Introducing Sally
            </h2>
            <p className="mt-4 text-base md:text-xl text-gray-300">
              An AI trading agent for market analysis, automated execution, and
              dynamic portfolio rebalancing—built to operate 24/7 with risk-first controls.
            </p>
            <div className="mt-8">
              <Link to="/wishlist" className="inline-block">
                <button className="bg-slate-800 group relative shadow-2xl shadow-zinc-900 rounded-full p-2 text-sm font-semibold leading-6 text-white inline-block">
                  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1.5 px-6 ring-1 ring-white/10">
                    <span>Get Access</span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="w-full bg-black py-10 md:py-16 px-3 sm:px-4">
          <FeaturesSection />
        </section>

        {/* ⭐ NEW SECTION: WHAT SALLY CAN DO */}
        <WhatSallyCanDo />

        {/* ⭐ NEW SECTION: HOW SALLY WORKS (Technical + Reused Media) */}
        <HowSallyWorks />

        {/* MCP SECTION */}
        <SallyMCPSection />
      </main>
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
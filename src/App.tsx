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

// ---------------- NAVBAR ----------------
function NavbarDemo() {
  const navItems = [
    { name: "Features", link: "#features" },
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

// ---------------- CAROUSEL DEMO (16:9 landscape) ----------------
export function CarouselDemo() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Hyperspeed",
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
      title: "Desert Whispers",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="relative w-full h-auto md:h-screen flex items-center justify-center bg-black py-4 md:py-8">
      <Carousel slides={slideData} />
    </div>
  );
}

// ---------------- HOME ----------------
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
        html, body {
          margin: 0; padding: 0; 
          overflow-x: hidden;
          width: 100vw; 
          max-width: 100vw;
        }
        html { scroll-behavior: smooth; }
      `}</style>

      <header className="w-full z-50 bg-transparent fixed top-0 left-0">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <NavbarDemo />
        </div>
      </header>

      <main
        className="w-full"
        style={{
          paddingTop: "calc(env(safe-area-inset-top, 0px) + 4.5rem)",
        }}
      >
        <section className="relative w-full h-auto md:h-screen overflow-hidden bg-black">
          <CarouselDemo />
        </section>

        <section
          id="intro"
          className="w-full bg-gradient-to-b from-black via-[#0D0716] to-black py-14 sm:py-20 px-3 sm:px-4"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Introducing Sally</h2>
            <p className="mt-4 text-base md:text-xl text-gray-300">
              An AI trading agent for market analysis, automated execution, and dynamic portfolio rebalancing—built to operate 24/7 with risk-first controls.
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

        <section id="features" className="w-full bg-black py-10 md:py-16 px-3 sm:px-4">
          <FeaturesSection />
        </section>
      </main>
    </div>
  );
}

// ---------------- APP ENTRY ----------------
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wishlist" element={<WishlistForm />} />
    </Routes>
  );
}

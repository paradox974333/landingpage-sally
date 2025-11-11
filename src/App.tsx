"use client";

import React from "react";
import { useEffect, useState, useMemo } from "react";
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
import Hyperspeed from "./components/Hyperspeed";
import TextType from "./components/TextType";
import logo from "./logo.svg";
import { hyperspeedPresets } from "./presets/hyperspeedPresets";
import FeaturesSection from "./components/FeaturesSection";

// Apple Cards Carousel (embedded component)
import { Carousel, Card } from "@/components/apple-cards-carousel";

import DecryptedText from './components/DecryptedText';

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-black">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white font-sans mb-8">
        Discover Sally's Capabilities
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ title, features }: { title: string; features: string[] }) => {
  return (
    <>
      {features.map((feature, index) => (
        <div
          key={`content-${index}`}
          className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-gray-300 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-white text-2xl md:text-3xl block mb-4">
              {title}
            </span>
            {feature}
          </p>
        </div>
      ))}
    </>
  );
};

const data = [
  {
    category: "Market Intelligence",
    title: "Real-Time Market Analysis",
    src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        title="Real-Time Market Analysis"
        features={[
          "Sally continuously processes live market feeds, economic indicators, and price movements across multiple exchanges. With advanced data fusion capabilities, she identifies trading opportunities in milliseconds, ensuring you never miss a profitable moment.",
          "Using predictive market modeling and machine learning algorithms, Sally forecasts future trends based on historical patterns and real-time data. This proactive approach allows you to stay ahead of market movements and make informed decisions.",
          "Integration with major trading platforms including Binance, Coinbase, and more ensures seamless data access and execution across all your preferred exchanges. Sally works where you work, with zero friction.",
        ]}
      />
    ),
  },
  {
    category: "Risk Management",
    title: "Intelligent Risk Controls",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        title="Intelligent Risk Controls"
        features={[
          "Sally implements dynamic stop-loss rules and smart position limits to protect your capital during volatile market conditions. Risk management isn't an afterthought—it's built into every decision Sally makes.",
          "Advanced portfolio diversification algorithms distribute your investments intelligently across multiple assets, balancing risk and reward. Sally continuously monitors exposure levels and automatically adjusts positions to maintain your desired risk profile.",
          "Real-time monitoring of Value at Risk (VaR), drawdown metrics, and exposure thresholds ensures you're always operating within safe parameters. Sally's guardrails prevent catastrophic losses while maximizing upside potential.",
        ]}
      />
    ),
  },
  {
    category: "Automation",
    title: "24/7 Autonomous Trading",
    src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=3532&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        title="24/7 Autonomous Trading"
        features={[
          "Sally operates around the clock without breaks, emotions, or fatigue. While you sleep, she's monitoring markets, executing strategies, and capturing opportunities across global time zones. True 24/7 trading intelligence.",
          "Automated execution with low-latency order placement ensures Sally can act on trading signals faster than any human trader. In volatile markets where milliseconds matter, speed is your competitive advantage.",
          "Multi-asset support enables Sally to trade across stocks, crypto, forex, and commodities simultaneously. Diversify your trading strategies across asset classes without managing multiple platforms or bots.",
        ]}
      />
    ),
  },
  {
    category: "Strategy",
    title: "Adaptive Trading Strategies",
    src: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        title="Adaptive Trading Strategies"
        features={[
          "Sally employs reinforcement learning to continuously improve her strategies based on real market outcomes. Every trade becomes a learning opportunity, refining her approach over time to maximize profitability.",
          "Real-time strategy switching allows Sally to adapt to changing market conditions by seamlessly transitioning between trading approaches. Whether the market is trending, ranging, or volatile, Sally adjusts her tactics automatically.",
          "Comprehensive backtesting against historical data validates strategies before live deployment. Sally simulates thousands of market scenarios to ensure your strategies are robust and profitable across different conditions.",
        ]}
      />
    ),
  },
  {
    category: "Insights",
    title: "Sentiment Analysis & Signals",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        title="Sentiment Analysis & Signals"
        features={[
          "Sally analyzes social media trends, news sentiment, and market chatter to gauge real-time market sentiment. By understanding the emotional pulse of the market, she can anticipate movements before they happen.",
          "Advanced natural language processing identifies key market-moving events and incorporates them into trading decisions. Sally reads between the lines, extracting actionable insights from news feeds and social platforms.",
          "Explainable AI provides transparent reasoning behind every decision. You'll always understand why Sally made a particular trade, building trust and enabling you to learn from her strategies.",
        ]}
      />
    ),
  },
  {
    category: "Portfolio",
    title: "Dynamic Portfolio Rebalancing",
    src: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        title="Dynamic Portfolio Rebalancing"
        features={[
          "Sally automatically rebalances your portfolio to maintain optimal asset allocation as market conditions change. This systematic approach reduces overexposure to any single asset and maintains your desired risk-reward balance.",
          "Intelligent capital allocation ensures your funds are always working efficiently. Sally identifies underperforming positions and reallocates capital to higher-opportunity trades, maximizing portfolio performance.",
          "Customizable rebalancing rules let you define your preferred allocation strategy, risk tolerance, and trading frequency. Sally executes your vision with precision while you focus on the bigger picture.",
        ]}
      />
    ),
  },
];

// Navbar Component
function NavbarDemo() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
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
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 150);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const hyperspeedConfig = useMemo(
    () => ({
      ...hyperspeedPresets.six,
      pixelRatio: Math.min(window.devicePixelRatio, 1.5),
      speedUp: isMobile ? 1.5 : 1.8,
      totalSideLightSticks: isMobile ? 10 : 12,
      lightPairsPerRoadWay: isMobile ? 10 : 12,
      fov: isMobile ? 75 : 80,
      roadWidth: isMobile ? 8 : 9,
      carLightsFade: isMobile ? 0.3 : 0.35,
      movingAwaySpeed: isMobile ? [40, 60] as [number, number] : [50, 70] as [number, number],
      movingCloserSpeed: isMobile ? [-80, -120] as [number, number] : [-100, -130] as [number, number],
    }),
    [isMobile]
  );

  return (
    <div
      className="w-full bg-black"
      style={{ fontFamily: "'Space Grotesk', 'Inter', 'Poppins', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        #hero-canvas { display: block !important; width: 100% !important; height: 100% !important; margin: 0 !important; padding: 0 !important; will-change: transform; transform: translateZ(0); backface-visibility: hidden; perspective: 1000px; }
        canvas { display: block; width: 100%; height: 100%; will-change: transform; transform: translateZ(0); }
        @media (max-width: 768px) { canvas { image-rendering: auto; } }
      `}</style>

      {/* Hero Section */}
      <div
        className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-black"
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          maxWidth: "100%",
          margin: 0,
          padding: 0,
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        <div
          id="hero-canvas"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            backgroundColor: "#000",
            overflow: "hidden",
          }}
        >
          <Hyperspeed effectOptions={hyperspeedConfig} />
        </div>

        <div className="absolute top-0 left-0 w-full z-20">
          <NavbarDemo />
        </div>

        <div
          className="relative z-10 w-full max-w-7xl mx-auto text-center px-4 flex flex-col items-center justify-center gap-12"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            padding: "0 1rem",
          }}
        >
          <div
            style={{
              animation: "fadeInUp 1s ease-out 0s forwards",
              opacity: 0,
              marginTop: isMobile ? "0" : "60px",
            }}
          >
            <div
              style={{
                fontSize: isMobile ? "clamp(2rem, 10vw, 6rem)" : "clamp(5rem, 15vw, 12rem)",
                fontWeight: 900,
                color: "white",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                fontFamily: "'Space Grotesk', sans-serif",
                textShadow: "0 0 30px rgba(0, 0, 0, 0.8), 0 0 60px rgba(0, 0, 0, 0.6)",
                WebkitTextStroke: "0.5px rgba(255, 255, 255, 0.1)",
              }}
            >
              <TextType text={["Sally AI"]} typingSpeed={400} pauseDuration={0} showCursor={true} cursorCharacter="|" />
            </div>
          </div>

          <div
            style={{
              animation: "fadeInUp 1s ease-out 0.8s forwards",
              opacity: 0,
              marginTop: "10px",
            }}
          >
            <div
              style={{
                fontSize: isMobile ? "clamp(0.875rem, 5vw, 2rem)" : "clamp(1.5rem, 8vw, 3.5rem)",
                color: "white",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                textShadow: "0 0 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.6)",
                WebkitTextStroke: "0.3px rgba(255, 255, 255, 0.05)",
              }}
            >
              <TextType text={["Advanced Trading Intelligence"]} typingSpeed={80} pauseDuration={0} showCursor={true} cursorCharacter="_" />
            </div>
          </div>

          <div
            style={{
              animation: "fadeInUp 0.8s ease-out 1.4s forwards",
              opacity: 0,
            }}
          >
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-2 text-sm font-semibold leading-6 text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1.5 px-6 ring-1 ring-white/10 ">
    <span>Get Access</span>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button>

          </div>
        </div>
      </div>

      {/* Replacing ScrollReveal section with DecryptedText usages */}
      <section
  id="reveal-bridge"
  className="w-full bg-gradient-to-b from-black via-[#0D0716] to-black"
>
  <div className="max-w-4xl mx-auto px-4 py-24 md:py-40 text-white text-center">
    <div style={{ marginTop: "6rem", fontSize: "1.75rem", lineHeight: 1.5 }}>
      <DecryptedText
        text={`The market never sleeps.
Every second, prices breathe, rise, collapse, and rise again.
Millions trade — but only few truly understand the movement.

And now… the game changes`}
        animateOn="view"
        revealDirection="start"
        speed={40}
        sequential={true}
      />
    </div>
  </div>
</section>


      {/* Centered Intro between hero and features */}
      <section id="intro" className="w-full bg-gradient-to-b from-black via-[#0D0716] to-black py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Introducing Sally</h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            An AI trading agent for market analysis, automated execution, and dynamic portfolio rebalancing—built to operate 24/7 with risk-first controls.
          </p>
        </div>
      </section>

      {/* Features grid */}
      <section id="features" className="w-full bg-black py-10 md:py-16 px-4">
        <FeaturesSection />
      </section>

      {/* Apple Cards Carousel (seamlessly integrated) */}
      <section id="carousel" className="w-full bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <AppleCardsCarouselDemo />
      </section>
    </div>
  );
};

export default App;

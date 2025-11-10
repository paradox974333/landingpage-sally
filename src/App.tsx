import CardNav from './components/CardNav';
import Hyperspeed from './components/Hyperspeed';
import TextType from './components/TextType';
import { Carousel } from './components/Carousel';
import { FeaturesSection } from './components/FeaturesSection';
import { HeroParallax } from './components/hero-parallax';
import logo from './logo.svg';
import { hyperspeedPresets } from './presets/hyperspeedPresets';
import { useEffect, useState, useMemo } from 'react';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 150);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = useMemo(() => [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", href: "#about-company", ariaLabel: "About Company" },
        { label: "Careers", href: "#about-careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "#featured-projects", ariaLabel: "Featured Projects" },
        { label: "Case Studies", href: "#case-studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:hello@example.com", ariaLabel: "Email us" },
        { label: "Twitter", href: "https://twitter.com", ariaLabel: "Twitter" },
        { label: "LinkedIn", href: "https://linkedin.com", ariaLabel: "LinkedIn" }
      ]
    }
  ], []);

  // KEY FIX: Keep desktop settings LOWER or equal to mobile
  const hyperspeedConfig = useMemo(() => ({
    ...hyperspeedPresets.six,
    // Cap pixel ratio to prevent high-DPI rendering lag
    pixelRatio: Math.min(window.devicePixelRatio, 1.5),
    speedUp: isMobile ? 1.5 : 1.8,
    // CRITICAL: Use FEWER particles on desktop, not more
    totalSideLightSticks: isMobile ? 10 : 12,  // Was 30, now 12
    lightPairsPerRoadWay: isMobile ? 10 : 12,  // Was 30, now 12
    fov: isMobile ? 75 : 80,  // Slightly reduced
    roadWidth: isMobile ? 8 : 9,
    carLightsFade: isMobile ? 0.3 : 0.35,
    movingAwaySpeed: isMobile ? [40, 60] : [50, 70],
    movingCloserSpeed: isMobile ? [-80, -120] : [-100, -130],
  }), [isMobile]);

  const carouselSlides = useMemo(() => [
    {
      title: "AI-Powered Trading",
      button: "Explore AI",
      src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=800&fit=crop&q=75&fm=webp"
    },
    {
      title: "Real-Time Analytics",
      button: "View Dashboard",
      src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=800&fit=crop&q=75&fm=webp"
    },
    {
      title: "Smart Indicators",
      button: "Learn More",
      src: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=800&fit=crop&q=75&fm=webp"
    },
    {
      title: "Portfolio Manager",
      button: "Get Started",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop&q=75&fm=webp"
    }
  ], []);

  const products = useMemo(() => [
    {
      title: "AI Trading Bot",
      link: "#ai-trading-bot",
      thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=800&fit=crop&q=75&fm=webp",
    },
    {
      title: "Live Market Analytics",
      link: "#market-analytics",
      thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop&q=75&fm=webp",
    },
    {
      title: "Crypto Dashboard",
      link: "#crypto-dashboard",
      thumbnail: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200&h=800&fit=crop&q=75&fm=webp",
    },
    {
      title: "Technical Indicators",
      link: "#technical-indicators",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=75&fm=webp",
    },
    {
      title: "Bybit Integration",
      link: "#bybit-integration",
      thumbnail: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1200&h=800&fit=crop&q=75&fm=webp",
    },
    {
      title: "Risk Management",
      link: "#risk-management",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=75&fm=webp",
    },
    {
      title: "Real-Time Signals",
      link: "#real-time-signals",
      thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop&q=75&fm=webp",
    },
    {
      title: "Portfolio Tracker",
      link: "#portfolio-tracker",
      thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=800&fit=crop&q=75&fm=webp",
    },
    {
      title: "Fear & Greed Index",
      link: "#fear-greed-index",
      thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=800&fit=crop&q=75&fm=webp",
    },
    {
      title: "Smart Order Engine",
      link: "#smart-order-engine",
      thumbnail: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&h=800&fit=crop&q=75&fm=webp",
    },
    {
      title: "Backtesting Suite",
      link: "#backtesting-suite",
      thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop&q=75&fm=webp",
    },
    {
      title: "Trading Strategies",
      link: "#trading-strategies",
      thumbnail: "https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&h=800&fit=crop&q=75&fm=webp",
    },
    {
      title: "Market Sentiment",
      link: "#market-sentiment",
      thumbnail: "https://images.unsplash.com/photo-1612010167108-3e6b327405f0?w=1200&h=800&fit=crop&q=75&fm=webp",
    },
    {
      title: "Automated Alerts",
      link: "#automated-alerts",
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&q=75&fm=webp",
    },
    {
      title: "Performance Analytics",
      link: "#performance-analytics",
      thumbnail: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&h=800&fit=crop&q=75&fm=webp",
    },
  ], []);

  return (
    <div className="w-full bg-black" style={{ fontFamily: "'Space Grotesk', 'Inter', 'Poppins', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        html {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* CRITICAL FIX: Hardware acceleration for canvas */
        #hero-canvas {
          display: block !important;
          width: 100% !important;
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          /* Force GPU acceleration */
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        canvas {
          display: block;
          width: 100%;
          height: 100%;
          /* Force GPU rendering */
          will-change: transform;
          transform: translateZ(0);
        }

        @media (max-width: 768px) {
          canvas {
            image-rendering: auto;
          }
        }
      `}</style>

      {/* Hero Section */}
      <div 
        className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-black"
        style={{ 
          position: 'relative',
          width: '100vw',
          height: '100vh',
          maxWidth: '100%',
          margin: 0,
          padding: 0,
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
      >
        <div 
          id="hero-canvas"
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            backgroundColor: '#000',
            overflow: 'hidden'
          }}
        >
          <Hyperspeed effectOptions={hyperspeedConfig} />
        </div>

        <div className="absolute top-0 left-0 w-full z-20">
          <CardNav
            logo={logo}
            logoAlt="Company Logo"
            items={navItems}
            baseColor="#fff"
            menuColor="#000"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="power3.out"
          />
        </div>

        <div 
          className="relative z-10 w-full max-w-7xl mx-auto text-center px-4 flex flex-col items-center justify-center gap-12"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            padding: '0 1rem'
          }}
        >
          <div style={{ 
            animation: 'fadeInUp 1s ease-out 0s forwards', 
            opacity: 0,
            marginTop: isMobile ? '0' : '60px'
          }}>
            <div style={{ 
              fontSize: isMobile ? 'clamp(2rem, 10vw, 6rem)' : 'clamp(5rem, 15vw, 12rem)', 
              fontWeight: 900, 
              color: 'white', 
              letterSpacing: '-0.03em', 
              lineHeight: 1.1, 
              fontFamily: "'Space Grotesk', sans-serif", 
              textShadow: '0 0 30px rgba(0, 0, 0, 0.8), 0 0 60px rgba(0, 0, 0, 0.6)',
              WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.1)',
              margin: 0,
              padding: 0
            }}>
              <TextType 
                text={["Sally AI"]}
                typingSpeed={400}
                pauseDuration={0}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>
          </div>

          <div style={{ 
            animation: 'fadeInUp 1s ease-out 0.8s forwards', 
            opacity: 0,
            marginTop: '10px'
          }}>
            <div style={{ 
              fontSize: isMobile ? 'clamp(0.875rem, 5vw, 2rem)' : 'clamp(1.5rem, 8vw, 3.5rem)', 
              color: 'white', 
              fontFamily: "'Space Grotesk', sans-serif", 
              fontWeight: 600, 
              textShadow: '0 0 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.6)',
              WebkitTextStroke: '0.3px rgba(255, 255, 255, 0.05)',
              margin: 0,
              padding: 0
            }}>
              <TextType 
                text={["Advanced Trading Intelligence"]}
                typingSpeed={80}
                pauseDuration={0}
                showCursor={true}
                cursorCharacter="_"
              />
            </div>
          </div>

          <div style={{ animation: 'fadeInUp 0.8s ease-out 1.4s forwards', opacity: 0 }}>
            <button 
              className="mt-4 px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 bg-white text-black font-bold text-sm sm:text-base lg:text-lg rounded-lg hover:bg-gray-200 active:scale-95 transition-all duration-300" 
              style={{ 
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: isMobile ? '0.875rem' : '1rem',
                padding: isMobile ? '0.5rem 1.5rem' : '1rem 2.5rem'
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Hero Parallax Section */}
      <div className="w-full bg-gradient-to-b from-black via-[#0D0716] to-[#170D27]">
        <HeroParallax products={products} />
      </div>

      {/* Carousel Section */}
      <div className="relative overflow-hidden w-full min-h-screen bg-gradient-to-b from-[#170D27] via-[#0D0716] to-[#170D27] flex flex-col items-center justify-center py-20 px-4">
        <div className="text-center mb-20 z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Explore Trading Features
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Swipe through our cutting-edge AI capabilities
          </p>
        </div>

        <div className="w-full flex items-center justify-center z-10">
          <Carousel slides={carouselSlides} />
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-gradient-to-b from-[#170D27] via-[#0D0716] to-black">
        <FeaturesSection />
      </div>

      {/* Pricing Section */}
      <div className="w-full h-screen bg-gradient-to-b from-black to-[#0D0716] flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Choose Your Plan
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Pricing content coming soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;

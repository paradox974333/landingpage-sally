import CardNav from './components/CardNav';
import Hyperspeed from './components/Hyperspeed';
import TextType from './components/TextType';
import { Carousel } from './components/Carousel';
import { FeaturesSection } from './components/FeaturesSection'; // ADD THIS
import { ContainerScroll } from './components/container-scroll-animation';
import logo from './logo.svg';
import { hyperspeedPresets } from './presets/hyperspeedPresets';
import { useEffect, useState } from 'react';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
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
  ];

  const hyperspeedConfig = {
    ...hyperspeedPresets.six,
    speedUp: isMobile ? 1.5 : 2,
    totalSideLightSticks: isMobile ? 15 : 50,
    lightPairsPerRoadWay: isMobile ? 15 : 50,
    fov: isMobile ? 75 : 90,
    roadWidth: isMobile ? 8 : 10,
    carLightsFade: isMobile ? 0.3 : 0.4,
    movingAwaySpeed: isMobile ? [40, 60] : [60, 80],
    movingCloserSpeed: isMobile ? [-80, -120] : [-120, -160],
  };

  const carouselSlides = [
    {
      title: "AI-Powered Trading",
      button: "Explore AI",
      src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=800&fit=crop&q=80"
    },
    {
      title: "Real-Time Analytics",
      button: "View Dashboard",
      src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=800&fit=crop&q=80"
    },
    {
      title: "Smart Indicators",
      button: "Learn More",
      src: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=800&fit=crop&q=80"
    },
    {
      title: "Portfolio Manager",
      button: "Get Started",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop&q=80"
    }
  ];

  return (
    <div className="w-full bg-black" style={{ fontFamily: "'Space Grotesk', 'Inter', 'Poppins', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
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

        #hero-canvas {
          display: block !important;
          width: 100% !important;
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        canvas {
          display: block;
          width: 100%;
          height: 100%;
          image-rendering: -webkit-optimize-contrast;
        }

        @media (max-width: 768px) {
          canvas {
            image-rendering: pixelated;
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
          padding: 0
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

      {/* Carousel Section - KEPT */}
      <div className="relative overflow-hidden w-full min-h-screen bg-gradient-to-b from-black via-[#0D0716] to-[#170D27] flex flex-col items-center justify-center py-20 px-4">
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

      {/* NEW: Features Section - ADDED AFTER CAROUSEL */}
      <div className="w-full bg-gradient-to-b from-[#170D27] via-[#0D0716] to-black">
        <FeaturesSection />
      </div>

      {/* Container Scroll Section */}
      <div className="w-full bg-gradient-to-b from-black via-[#0D0716] to-black">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Sally AI Trading
                </span>
              </h1>
            </>
          }
        >
          <img
            src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1400&h=720&fit=crop&q=80"
            alt="Sally AI Trading Dashboard"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      {/* Pricing Section */}
      <div className="w-full h-screen bg-gradient-to-b from-[#0D0716] to-black flex flex-col items-center justify-center">
        {/* Rest of pricing section stays the same */}
      </div>
    </div>
  );
};

export default App;

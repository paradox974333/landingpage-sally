import CardNav from './components/CardNav';
import CardSwap, { Card } from './components/CardSwap';
import Hyperspeed from './components/Hyperspeed';
import TextType from './components/TextType';
import { Carousel } from './components/Carousel'; // Add this import
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

  // Carousel slides data - Trading themed
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

      {/* Hero Section with Hyperspeed Background */}
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

      {/* NEW: Carousel Section - After Hero */}
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

      {/* CardSwap Section */}
      <div className="w-full h-screen bg-gradient-to-b from-[#170D27] via-[#0D0716] to-black flex flex-col items-center justify-center py-8">
        <div className="w-full h-full flex flex-col items-center justify-center px-4">
          <div className="text-center mb-8">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Why Sally AI
            </h2>
            <p className="text-gray-400 text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Discover the power of intelligent trading
            </p>
          </div>

          <div style={{ height: '85vh', position: 'relative', width: '95%', maxWidth: '1600px', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '2rem', overflow: 'hidden' }}>
            <CardSwap
              width={600}
              height={700}
              cardDistance={100}
              verticalDistance={120}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <div className="p-16 h-full flex flex-col justify-between bg-gradient-to-br from-[#0D0716] to-[#170D27]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <div>
                    <div className="text-8xl mb-8">📊</div>
                    <h3 className="text-4xl font-bold text-white mb-8">Real-time Analysis</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">Get instant market insights powered by advanced AI algorithms. Analyze trends, patterns, and opportunities in real-time with unprecedented accuracy and speed.</p>
                  </div>
                  <button className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors w-full text-base">
                    Learn More
                  </button>
                </div>
              </Card>
              <Card>
                <div className="p-16 h-full flex flex-col justify-between bg-gradient-to-br from-[#170D27] to-[#271E37]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <div>
                    <div className="text-8xl mb-8">⚡</div>
                    <h3 className="text-4xl font-bold text-white mb-8">Smart Execution</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">Execute trades at perfect timing with machine learning precision. Never miss an opportunity with intelligent decision-making powered by neural networks.</p>
                  </div>
                  <button className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors w-full text-base">
                    Learn More
                  </button>
                </div>
              </Card>
              <Card>
                <div className="p-16 h-full flex flex-col justify-between bg-gradient-to-br from-[#271E37] to-[#0D0716]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <div>
                    <div className="text-8xl mb-8">🛡️</div>
                    <h3 className="text-4xl font-bold text-white mb-8">Risk Management</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">Protect your portfolio with intelligent risk assessment tools. Automated safeguards ensure your investments are always protected against market volatility.</p>
                  </div>
                  <button className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors w-full text-base">
                    Learn More
                  </button>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="w-full h-screen bg-gradient-to-b from-[#0D0716] to-black flex flex-col items-center justify-center">
        <div className="max-w-full h-full flex flex-col items-center justify-center px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Pricing Plans
            </h2>
            <p className="text-gray-400 text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Choose the perfect plan for your trading needs
            </p>
          </div>

          <div style={{ height: '75vh', position: 'relative', width: '100%', maxWidth: '1200px', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '1.5rem', overflow: 'hidden', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', padding: '32px', fontFamily: "'Space Grotesk', sans-serif" }}>
            <div className="flex-1 bg-gradient-to-br from-[#0D0716] to-[#170D27] rounded-lg p-8 border border-gray-700 hover:border-purple-500 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
              <p className="text-gray-400 mb-6">For beginners</p>
              <div className="text-4xl font-bold text-white mb-6">$29<span className="text-lg">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-300">✓ Real-time data</li>
                <li className="text-gray-300">✓ Basic analysis</li>
                <li className="text-gray-300">✓ Email support</li>
              </ul>
              <button className="w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-200 transition-colors">
                Get Started
              </button>
            </div>

            <div className="flex-1 bg-gradient-to-br from-[#170D27] to-[#271E37] rounded-lg p-8 border border-purple-500 hover:border-purple-400 transition-colors transform scale-105">
              <div className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">POPULAR</div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <p className="text-gray-400 mb-6">For active traders</p>
              <div className="text-4xl font-bold text-white mb-6">$79<span className="text-lg">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-300">✓ All Basic features</li>
                <li className="text-gray-300">✓ Advanced AI analysis</li>
                <li className="text-gray-300">✓ Priority support</li>
                <li className="text-gray-300">✓ Custom strategies</li>
              </ul>
              <button className="w-full bg-purple-600 text-white font-semibold py-2 rounded hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </div>

            <div className="flex-1 bg-gradient-to-br from-[#271E37] to-[#0D0716] rounded-lg p-8 border border-gray-700 hover:border-purple-500 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-gray-400 mb-6">For professionals</p>
              <div className="text-4xl font-bold text-white mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-300">✓ All Pro features</li>
                <li className="text-gray-300">✓ API access</li>
                <li className="text-gray-300">✓ Dedicated support</li>
                <li className="text-gray-300">✓ Custom solutions</li>
              </ul>
              <button className="w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-200 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

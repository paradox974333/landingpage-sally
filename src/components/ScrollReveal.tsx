import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  // Slow “between section” controls:
  start?: string;           // e.g. "top top"
  end?: string;             // e.g. "+=220%"
  scrub?: boolean | number; // e.g. 1.2
  pin?: boolean;            // e.g. true
  markers?: boolean;        // debug
  anticipatePin?: number;   // e.g. 1
  stagger?: number;         // e.g. 0.1
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.0,
  baseRotation = 4,
  blurStrength = 6,
  containerClassName = '',
  textClassName = '',
  start = 'top top',
  end = '+=220%',
  scrub = 1.9,
  pin = true,
  markers = false,
  anticipatePin = 1,
  stagger = 0.1,
  className = ''
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const timeoutId = setTimeout(() => {
      const scroller = scrollContainerRef?.current || undefined;

      // kill only our triggers
      triggersRef.current.forEach(t => t.kill());
      triggersRef.current = [];

      const baseTriggerOpts = {
        trigger: el,
        scroller,
        start,
        end,
        scrub,
        pin,
        markers,
        anticipatePin
      } as const;

      // container rotation unpins with same timing
      const rotationTween = gsap.fromTo(
        el,
        { transformOrigin: '0% 50%', rotate: baseRotation },
        {
          ease: 'none',
          rotate: 0,
          scrollTrigger: { ...baseTriggerOpts }
        }
      );
      if (rotationTween.scrollTrigger) {
        triggersRef.current.push(rotationTween.scrollTrigger);
      }

      const wordElements = el.querySelectorAll<HTMLElement>('.word');

      if (wordElements.length) {
        // opacity
        const opacityTween = gsap.fromTo(
          wordElements,
          { opacity: baseOpacity, willChange: 'opacity, filter' },
          {
            ease: 'none',
            opacity: 1,
            stagger,
            scrollTrigger: { ...baseTriggerOpts, pin: false }
          }
        );
        if (opacityTween.scrollTrigger) {
          triggersRef.current.push(opacityTween.scrollTrigger);
        }

        // blur
        if (enableBlur) {
          const blurTween = gsap.fromTo(
            wordElements,
            { filter: `blur(${blurStrength}px)` },
            {
              ease: 'none',
              filter: 'blur(0px)',
              stagger,
              scrollTrigger: { ...baseTriggerOpts, pin: false }
            }
          );
          if (blurTween.scrollTrigger) {
            triggersRef.current.push(blurTween.scrollTrigger);
          }
        }
      }

      ScrollTrigger.refresh();
    }, 60);

    return () => {
      clearTimeout(timeoutId);
      triggersRef.current.forEach(t => t.kill());
      triggersRef.current = [];
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    blurStrength,
    start,
    end,
    scrub,
    pin,
    markers,
    anticipatePin,
    stagger,
    children
  ]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName} ${className}`}>
      <p className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}>
        {splitText}
      </p>
    </h2>
  );
};

export default ScrollReveal;

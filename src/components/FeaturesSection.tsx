// components/FeaturesSection.jsx
import React from 'react';
import {
  IconChartLine,
  IconShieldCheck,
  IconRobot,
  IconBrain,
  IconNews,
  IconChartCandle,
  IconArrowsShuffle,
  IconApi,
} from '@tabler/icons-react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        // layout and borders
        'flex flex-col lg:border-r py-10 relative group/feature',
        (index === 0 || index === 4) && 'lg:border-l',
        index < 4 && 'lg:border-b',
        // higher-contrast borders for dark mode
        'border-neutral-300/10 dark:border-neutral-700',
      )}
    >
      {/* subtle elevated panel for legibility on black */}
      <div className="absolute inset-3 rounded-2xl bg-neutral-900/70 ring-1 ring-white/5 group-hover/feature:ring-blue-400/30 transition-all duration-300 pointer-events-none" />

      {/* directional hover glow to lift card on black */}
      {index < 4 ? (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 rounded-2xl bg-gradient-to-t from-white/5 via-transparent to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />
      )}

      <div className="mb-4 relative z-10 px-10 text-neutral-200">
        <div className="text-blue-400/90 drop-shadow-[0_0_12px_rgba(56,189,248,0.25)]">
          {icon}
        </div>
      </div>

      <div className="text-lg font-semibold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-600/60 group-hover/feature:bg-blue-400 transition-all duration-200 origin-center" />
        <span className="inline-block text-neutral-50 group-hover/feature:translate-x-2 transition duration-200">
          {title}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-neutral-200/90 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: 'Real‑Time Market Vision',
      description:
        'Live multi‑exchange data fusion transforms price, news, and sentiment into actionable signals in milliseconds.',
      icon: <IconChartLine size={28} stroke={1.6} />,
    },
    {
      title: 'Intelligent Risk Controls',
      description:
        'Dynamic stops, position limits, and exposure guards keep drawdowns contained and decisions disciplined.',
      icon: <IconShieldCheck size={28} stroke={1.6} />,
    },
    {
      title: '24/7 Autonomous Execution',
      description:
        'Low‑latency automation monitors, decides, and executes around the clock across assets and venues.',
      icon: <IconRobot size={28} stroke={1.6} />,
    },
    {
      title: 'Adaptive Strategy Engine',
      description:
        'Reinforcement‑driven learning pivots tactics as regimes shift—trend, range, or volatility breakouts.',
      icon: <IconBrain size={28} stroke={1.6} />,
    },
    {
      title: 'Sentiment & News Signals',
      description:
        'NLP parses headlines and social flow to surface market‑moving context before the candles show it.',
      icon: <IconNews size={28} stroke={1.6} />,
    },
    {
      title: 'Backtesting & Simulation',
      description:
        'Thousands of scenarios validated on historical data to stress‑test edge before capital is deployed.',
      icon: <IconChartCandle size={28} stroke={1.6} />,
    },
    {
      title: 'Dynamic Rebalancing',
      description:
        'Rules‑based capital allocation shifts into higher‑conviction setups while maintaining target risk.',
      icon: <IconArrowsShuffle size={28} stroke={1.6} />,
    },
    {
      title: 'Integrations & API',
      description:
        'Plug into major exchanges and tools with a clean API to orchestrate strategies end‑to‑end.',
      icon: <IconApi size={28} stroke={1.6} />,
    },
  ];

  return (
    <div className="relative z-10 py-10 max-w-7xl mx-auto">
      {/* subtle radial highlight to lift cards on pure black */}
      <div className="pointer-events-none absolute -inset-x-10 -top-10 h-48 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.10),transparent_65%)]" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ShieldAlert } from "lucide-react";

function RiskLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-screen bg-[#121317] text-white min-h-screen overflow-x-hidden"
      style={{
        fontFamily: "'Space Grotesk', 'Inter', 'Poppins', sans-serif",
      }}
    >
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
          * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
          html, body { margin: 0; padding: 0; overflow-x: hidden; width: 100vw; max-width: 100vw; }
          html { scroll-behavior: smooth; }`}
      </style>

      {/* Top bar */}
      <header className="w-full z-50 bg-[#121317]/95 backdrop-blur fixed top-0 left-0 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src="logo.png"
              alt="Imperial X Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-lg font-semibold tracking-tight">
              ImperialX Labs
            </span>
          </div>
          <Link
            to="/"
            className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      <main
        className="w-full pt-24 pb-20 px-4 sm:px-6"
        style={{
          paddingTop: "calc(env(safe-area-inset-top, 0px) + 5rem)",
        }}
      >
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>

      <footer className="w-full bg-[#121317] border-t border-zinc-900 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} ImperialX Labs Pvt Ltd. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-xs sm:text-sm text-zinc-500">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-zinc-700">•</span>
            <span>Sally AI · ImperialX Exchange</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function RiskDisclosure() {
  return (
    <RiskLayout>
      {/* Header */}
      <section className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-200 mb-4">
          <ShieldAlert className="w-4 h-4" />
          <span>Risk Disclosure</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          RISK DISCLOSURE STATEMENT
        </h1>
        <p className="mt-4 text-sm md:text-base text-zinc-400">
          Effective Date: [To Be Updated Upon Launch]
        </p>
        <p className="text-sm md:text-base text-zinc-400">
          Issued By: ImperialX Labs Pvt Ltd (“ImperialX”, “Sally”, “we”, “us”,
          “our”)
        </p>
      </section>

      {/* 1. INTRODUCTION */}
      <section className="space-y-4 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          1. INTRODUCTION
        </h2>
        <p>
          This Risk Disclosure Statement (“Disclosure”) outlines the significant
          risks associated with using ImperialX and its integrated AI automation
          system Sally, including trading tools, automation features, analytical
          systems, signals, and AI-generated insights.
        </p>
        <p>
          By using ImperialX or Sally, you acknowledge, understand, and accept
          all risks described herein. If you do not understand or accept these
          risks, you must not use the platform.
        </p>
      </section>

      {/* 2. NO FINANCIAL ADVICE */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          2. NO FINANCIAL ADVICE
        </h2>
        <p>Sally provides informational and analytical tools, not financial advice.</p>
        <p>ImperialX does not:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Provide investment or financial advice</li>
          <li>Offer portfolio management</li>
          <li>Guarantee profits or performance</li>
          <li>Act as a licensed financial advisor</li>
        </ul>
        <p>All decisions made using ImperialX or Sally are entirely your responsibility.</p>
      </section>

      {/* 3. TRADING IS INHERENTLY RISKY */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          3. TRADING IS INHERENTLY RISKY
        </h2>
        <p>
          Digital asset markets—including spot, futures, margin, perpetuals, and
          other derivatives—are highly volatile and can experience rapid and
          unpredictable changes.
        </p>
        <p>Trading involves substantial risks, including total loss of capital.</p>
        <p>These risks include but are not limited to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Extreme price swings</li>
          <li>Market crashes or black swan events</li>
          <li>Illiquid markets</li>
          <li>Manipulation or wash trading</li>
          <li>Rapid liquidation cascades</li>
          <li>Exchange congestion or outages</li>
          <li>Failed or delayed order execution</li>
        </ul>
        <p>You should trade only what you can afford to lose.</p>
      </section>

      {/* 4. CUSTODIAL EXCHANGE  USER ACTIONS OCCUR WITHIN IMPERIALX */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          4. CUSTODIAL EXCHANGE&nbsp; USER ACTIONS OCCUR WITHIN IMPERIALX
        </h2>
        <p>
          ImperialX operates as a custodial digital asset exchange, providing
          wallet services, execution infrastructure, and asset storage.
        </p>
        <p>
          All trades, orders, deposits, withdrawals, and AI-automated actions
          occur exclusively within your ImperialX account.
        </p>
        <p>Sally functions as an internal AI-powered system for:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Insights</li>
          <li>Signals</li>
          <li>Trading automation</li>
          <li>Risk detection</li>
          <li>Market analysis</li>
        </ul>
        <p>You remain fully responsible for:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Trading parameters, signals, triggers, and automation rules</li>
          <li>Use of leverage, margin, and exposure to liquidation</li>
          <li>Monitoring all trading activity—manual or automated</li>
          <li>Maintaining account security and 2FA</li>
          <li>Reviewing and controlling automated executions</li>
          <li>Disabling or modifying automations when needed</li>
        </ul>
        <p>
          Misconfiguration or risky settings may result in partial or total loss
          of funds.
        </p>
      </section>

      {/* 5. AUTOMATION RISKS */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          5. AUTOMATION RISKS
        </h2>
        <p>
          Using automated trading, bots, or workflows via Sally involves
          additional risks, including:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Incorrect or unsafe user-defined parameters</li>
          <li>Overlapping or conflicting automations</li>
          <li>Rapid-fire order execution during volatility</li>
          <li>Trigger misfires from fast market movements</li>
          <li>Execution delays due to system load</li>
          <li>Leverage amplifying losses</li>
          <li>Automated sequences executing unexpectedly</li>
        </ul>
        <p>Automation does not eliminate the need for active monitoring.</p>
      </section>

      {/* 6. AI-GENERATED CONTENT RISKS */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          6. AI-GENERATED CONTENT RISKS
        </h2>
        <p>Sally uses machine learning and statistical models to produce:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Signals</li>
          <li>Predictions</li>
          <li>Pattern analysis</li>
          <li>Insights</li>
          <li>Trend detection</li>
        </ul>
        <p>AI outputs may be:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Incorrect</li>
          <li>Outdated</li>
          <li>Incomplete</li>
          <li>Ambiguous</li>
          <li>Affected by modeling limitations</li>
        </ul>
        <p>
          AI-generated information is not financial advice, and must not be
          relied upon without independent verification.
        </p>
      </section>

      {/* 7. TECHNICAL & SYSTEM RISKS */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          7. TECHNICAL &amp; SYSTEM RISKS
        </h2>
        <p>Use of ImperialX and Sally may be affected by:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Software bugs or system failures</li>
          <li>Server congestion or downtime</li>
          <li>Delayed or inaccurate market data</li>
          <li>Network connectivity issues</li>
          <li>Device or browser incompatibility</li>
          <li>Failed automation triggers</li>
          <li>Unexpected system behavior</li>
          <li>Force majeure events (e.g., global outages)</li>
        </ul>
        <p>
          These may cause financial losses, missed opportunities, or unintended
          trades.
        </p>
        <p>ImperialX is not responsible for such technical failures.</p>
      </section>

      {/* 8. EXCHANGE RISKS */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          8. EXCHANGE RISKS
        </h2>
        <p>
          Because all trading occurs within ImperialX, the following risks may
          occur:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Liquidity shortages</li>
          <li>Delayed withdrawals or deposits due to network congestion</li>
          <li>Maintenance events</li>
          <li>Execution delays during peak volatility</li>
          <li>Market data desynchronization</li>
          <li>Internal system downtime</li>
        </ul>
        <p>
          ImperialX does not guarantee uninterrupted service or constant access.
        </p>
      </section>

      {/* 9. SECURITY RISKS */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          9. SECURITY RISKS
        </h2>
        <p>You face risks including:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Device malware</li>
          <li>Phishing attacks</li>
          <li>Weak passwords</li>
          <li>Poor 2FA security</li>
          <li>Unauthorized access</li>
          <li>Compromised networks</li>
          <li>Social engineering attacks</li>
        </ul>
        <p>
          ImperialX implements industry-grade security measures, but no system
          is impenetrable.
        </p>
        <p>You are responsible for securing your login credentials and devices.</p>
      </section>

      {/* 10. REGULATORY RISKS */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          10. REGULATORY RISKS
        </h2>
        <p>Cryptocurrency laws change frequently. You may be subject to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Regional restrictions</li>
          <li>Transaction reporting</li>
          <li>Taxation</li>
          <li>Trading bans</li>
          <li>Licensing requirements</li>
        </ul>
        <p>
          ImperialX does not guarantee compliance in all jurisdictions. You are
          responsible for understanding local regulations.
        </p>
      </section>

      {/* 11. NO GUARANTEES */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          11. NO GUARANTEES
        </h2>
        <p>ImperialX does not guarantee:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Profitability</li>
          <li>Accuracy of signals or indicators</li>
          <li>Prevention of losses</li>
          <li>Timely execution</li>
          <li>Continuous uptime</li>
          <li>Error-free operation</li>
          <li>Predictive accuracy of AI tools</li>
          <li>Future performance based on historical data</li>
        </ul>
        <p>
          All trading outcomes—positive or negative—are solely your
          responsibility.
        </p>
      </section>

      {/* 12. USER RESPONSIBILITY */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          12. USER RESPONSIBILITY
        </h2>
        <p>By using ImperialX or Sally, you confirm that:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>You understand the risks of digital asset trading</li>
          <li>You accept full responsibility for trades and automations</li>
          <li>You will monitor positions, margin, and open orders</li>
          <li>You understand the limitations of AI</li>
          <li>You use ImperialX voluntarily and at your own risk</li>
        </ul>
      </section>

      {/* 13. LIMITATION OF LIABILITY */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          13. LIMITATION OF LIABILITY
        </h2>
        <p>ImperialX shall not be liable for:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Trading losses</li>
          <li>Liquidations</li>
          <li>Loss of profits</li>
          <li>User configuration errors</li>
          <li>Automated or AI-driven trade outcomes</li>
          <li>Technical failures</li>
          <li>Delayed execution</li>
          <li>Data inaccuracies</li>
          <li>Account compromise caused by user negligence</li>
          <li>Any indirect, incidental, or consequential damages</li>
        </ul>
        <p>Your sole remedy is to discontinue use of the platform.</p>
      </section>

      {/* 14. ACKNOWLEDGEMENT */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          14. ACKNOWLEDGEMENT
        </h2>
        <p>By using ImperialX or Sally, you acknowledge that:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>You have read this Disclosure</li>
          <li>You understand and accept all associated risks</li>
          <li>You assume full responsibility for trading decisions</li>
          <li>You will not hold ImperialX liable for losses</li>
        </ul>
      </section>

      {/* 15. CONTACT INFORMATION */}
      <section className="space-y-4 mt-10 mb-4 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          15. CONTACT INFORMATION
        </h2>
        <p>For questions about this Risk Disclosure:</p>
        <p>
          ImperialX Labs Pvt Ltd
          <br />
          Email:{" "}
          <a
            href="mailto:support@imperialx.io"
            className="text-red-300 hover:text-red-200 underline underline-offset-2"
          >
            support@imperialx.io
          </a>
        </p>
      </section>
    </RiskLayout>
  );
}

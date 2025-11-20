"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ShieldAlert } from "lucide-react";

function TermsLayout({ children }: { children: React.ReactNode }) {
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

export default function TermsOfService() {
  return (
    <TermsLayout>
      {/* Hero / heading */}
      <section className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200 mb-4">
          <ShieldAlert className="w-4 h-4" />
          <span>Terms of Service</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          TERMS OF SERVICE
        </h1>
        <p className="mt-4 text-sm md:text-base text-zinc-400">
          Effective Date: 20/11/2025
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
          These Terms of Service (“Terms”) govern your access to and use of the
          ImperialX Exchange, including its custodial wallet infrastructure,
          trading services, mobile and web applications, APIs, software,
          content, automation systems, and the integrated AI engine known as
          Sally.
        </p>
        <p>By accessing or using ImperialX or Sally, you confirm that you:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Have read, understood, and agree to these Terms</li>
          <li>Are at least 18 years old</li>
          <li>Have the legal capacity to enter into binding agreements</li>
          <li>
            Agree to our Privacy Policy, Risk Disclosure, and all related
            policies
          </li>
        </ul>
        <p>If you do not agree, you must discontinue use immediately.</p>
      </section>

      {/* 2. DEFINITIONS */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          2. DEFINITIONS
        </h2>
        <p>
          “User”, “you” – Any individual or entity using ImperialX.
          <br />
          “ImperialX Exchange” – A custodial digital asset trading platform
          providing wallet, trading, settlement, and related services.
          <br />
          “Sally” – The native AI-powered automation, analytics, and trading
          logic engine integrated directly within the ImperialX Exchange.
          <br />
          “Digital Assets” – Cryptocurrencies, tokens, stablecoins, and other
          supported digital representations of value.
          <br />
          “Wallet Services” – Custodial storage, deposits, withdrawals, and
          transfers managed by ImperialX.
          <br />
          “Automations/Bots” – User-configured or AI-assisted trading rules
          executed within the user’s ImperialX account.
          <br />
          “Services” – All features, tools, functions, and offerings available
          through ImperialX and Sally.
        </p>
      </section>

      {/* 3. USER ELIGIBILITY */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          3. USER ELIGIBILITY
        </h2>
        <p>To use ImperialX, you must:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Be at least 18 years old</li>
          <li>Have the legal capacity to enter contracts</li>
          <li>Not be restricted under applicable laws</li>
          <li>
            Not be located in jurisdictions where digital asset trading is
            prohibited
          </li>
          <li>Provide accurate and complete account information</li>
        </ul>
        <p>
          ImperialX may refuse access or terminate accounts for non-compliance,
          risk concerns, or legal reasons.
        </p>
      </section>

      {/* 4. ACCOUNT REGISTRATION */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          4. ACCOUNT REGISTRATION
        </h2>
        <p>To access ImperialX or Sally, you must create an account.</p>
        <p>You agree to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Keep your login credentials secure</li>
          <li>Protect your password and 2FA</li>
          <li>Not share access with others</li>
          <li>Immediately notify us of unauthorized access</li>
        </ul>
        <p>You are responsible for all actions performed through your account.</p>
        <p>
          ImperialX may suspend or terminate accounts for security issues,
          violations, or fraudulent activity.
        </p>
      </section>

      {/* 5. CUSTODIAL EXCHANGE  USER FUNDS & ACTIONS */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          5. CUSTODIAL EXCHANGE&nbsp; USER FUNDS &amp; ACTIONS
        </h2>
        <p>ImperialX is a custodial exchange. This means:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>ImperialX safeguards and manages digital assets on your behalf</li>
          <li>
            Trades, deposits, withdrawals, and balances exist within your
            ImperialX account only
          </li>
          <li>No external exchange API integrations are used</li>
          <li>
            All automated trading actions executed by Sally occur exclusively
            inside ImperialX
          </li>
        </ul>
        <p>You remain fully responsible for:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Trading parameters, leverage, risk settings</li>
          <li>Any automations, bots, or rules you configure</li>
          <li>Monitoring positions and liquidation risks</li>
          <li>Ensuring your account security</li>
          <li>Disabling or modifying automations as needed</li>
        </ul>
        <p>
          ImperialX does not take responsibility for financial losses caused by
          user configurations.
        </p>
      </section>

      {/* 6. SALLY AUTOMATION & AI FEATURES */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          6. SALLY AUTOMATION &amp; AI FEATURES
        </h2>
        <p>Sally provides:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Market insights</li>
          <li>Trading automations</li>
          <li>Risk alerts</li>
          <li>Crash detection</li>
          <li>Signal logic</li>
          <li>News-driven analytics</li>
          <li>Machine learning-based recommendations</li>
        </ul>
        <p>You acknowledge and agree that:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>AI-generated content is informational only</li>
          <li>Sally may be inaccurate, delayed, probabilistic, or incomplete</li>
          <li>Sally does not guarantee outcomes or profitability</li>
          <li>You maintain full control over every automation</li>
        </ul>
        <p>
          ImperialX is not liable for losses caused by AI decisions or bot
          configurations.
        </p>
      </section>

      {/* 7. SERVICES OFFERED */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          7. SERVICES OFFERED
        </h2>
        <p>ImperialX provides, without limitation:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Custodial wallet services</li>
          <li>Spot trading</li>
          <li>Futures trading</li>
          <li>Margin trading</li>
          <li>Perpetual contracts</li>
          <li>Options (if activated)</li>
          <li>Staking and earn products</li>
          <li>P2P marketplace</li>
          <li>Fiat/crypto deposits &amp; withdrawals</li>
          <li>Internal transfers</li>
          <li>Sally-based AI automation &amp; analytics</li>
        </ul>
        <p>
          ImperialX may add, modify, restrict, or discontinue services at any
          time.
        </p>
      </section>

      {/* 8. PROHIBITED ACTIVITIES */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          8. PROHIBITED ACTIVITIES
        </h2>
        <p>You may NOT use ImperialX or Sally to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Conduct illegal or unauthorized transactions</li>
          <li>Perform market manipulation or wash trading</li>
          <li>Evade sanctions or engage in illicit finance</li>
          <li>Exploit platform vulnerabilities</li>
          <li>Attack ImperialX systems or infrastructure</li>
          <li>Use bots for harmful or malicious behavior</li>
          <li>Fraudulently impersonate others</li>
          <li>Attempt reverse engineering or data scraping</li>
        </ul>
        <p>Violations may result in:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Immediate account suspension</li>
          <li>Freezing of funds (where legally required)</li>
          <li>Permanent termination</li>
          <li>Reporting to authorities</li>
        </ul>
      </section>

      {/* 9. THIRD-PARTY SERVICES */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          9. THIRD-PARTY SERVICES
        </h2>
        <p>ImperialX may rely on third-party providers for:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Cloud hosting</li>
          <li>Email delivery</li>
          <li>Analytics</li>
          <li>Fraud detection</li>
          <li>Payment processing (when implemented)</li>
        </ul>
        <p>
          ImperialX does not integrate with external exchanges for trading. All
          trading occurs exclusively inside ImperialX.
        </p>
        <p>
          Each third-party service is governed by its own policies. ImperialX is
          not liable for third-party outages, failures, or errors.
        </p>
      </section>

      {/* 10. PAYMENTS & BILLING */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          10. PAYMENTS &amp; BILLING
        </h2>
        <p>ImperialX may provide paid products or subscriptions.</p>
        <p>Payment processors are not yet finalized and may include:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Stripe</li>
          <li>Razorpay</li>
          <li>Crypto gateways</li>
          <li>Other payment partners</li>
        </ul>
        <p>
          Pricing, refund terms, and billing cycles will be published before
          launch.
        </p>
      </section>

      {/* 11. USER RESPONSIBILITIES */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          11. USER RESPONSIBILITIES
        </h2>
        <p>You are solely responsible for:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Securing your devices and networks</li>
          <li>Maintaining password and 2FA security</li>
          <li>Monitoring your trading activity</li>
          <li>Reviewing all automations and bot settings</li>
          <li>Understanding the risks of digital asset trading</li>
          <li>Ensuring local regulatory compliance</li>
        </ul>
        <p>
          ImperialX is not liable for losses resulting from negligence on your
          part.
        </p>
      </section>

      {/* 12. DISCLAIMERS */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          12. DISCLAIMERS
        </h2>
        <p>
          ImperialX provides trading infrastructure and automation tools. We do
          not provide:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Investment advice</li>
          <li>Financial planning</li>
          <li>Portfolio management</li>
          <li>Guarantees of profits</li>
          <li>Market predictions</li>
        </ul>
        <p>
          Digital asset markets are volatile. You acknowledge that trading
          carries risk, including total loss of funds.
        </p>
        <p>
          ImperialX is not responsible for:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Trading losses</li>
          <li>Liquidations</li>
          <li>Platform downtime</li>
          <li>Incorrect market data</li>
          <li>User-configured automation errors</li>
          <li>Connectivity failures</li>
          <li>AI-generated inaccuracies</li>
        </ul>
        <p>Use ImperialX and Sally at your own risk.</p>
      </section>

      {/* 13. LIMITATION OF LIABILITY */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          13. LIMITATION OF LIABILITY
        </h2>
        <p>
          To the maximum extent allowed by law, ImperialX, its officers,
          employees, and affiliates are not liable for:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Loss of funds</li>
          <li>Loss of profits</li>
          <li>Indirect or consequential damages</li>
          <li>Liquidations</li>
          <li>AI/bot decisions</li>
          <li>System downtime</li>
          <li>Failures caused by user error</li>
        </ul>
        <p>
          Maximum liability shall not exceed the total fees paid by you to
          ImperialX in the preceding 12 months.
        </p>
      </section>

      {/* 14. TERMINATION */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          14. TERMINATION
        </h2>
        <p>We may suspend or terminate your account if:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>You violate these Terms</li>
          <li>Security threats are detected</li>
          <li>Fraudulent activity occurs</li>
          <li>Required by law or regulators</li>
        </ul>
        <p>You may close your account at any time.</p>
        <p>
          Some data may be retained for regulatory or legal requirements.
        </p>
      </section>

      {/* 15. INTELLECTUAL PROPERTY */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          15. INTELLECTUAL PROPERTY
        </h2>
        <p>
          All software, content, branding, AI models, designs, and materials on
          ImperialX and Sally belong exclusively to ImperialX Labs Pvt Ltd.
        </p>
        <p>
          Unauthorized copying, distribution, or resale is prohibited.
        </p>
      </section>

      {/* 16. GLOBAL ACCESS */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          16. GLOBAL ACCESS
        </h2>
        <p>ImperialX is accessible worldwide.</p>
        <p>
          Users must ensure use is legal in their jurisdiction. ImperialX does
          not guarantee universal regulatory compliance.
        </p>
      </section>

      {/* 17. AMENDMENTS */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          17. AMENDMENTS
        </h2>
        <p>ImperialX may update these Terms at any time.</p>
        <p>
          Material changes will be communicated via email or platform
          notification.
        </p>
        <p>Continued use constitutes acceptance of revised Terms.</p>
      </section>

      {/* 18. GOVERNING LAW */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          18. GOVERNING LAW
        </h2>
        <p>These Terms are governed by the laws of India.</p>
        <p>Jurisdiction for disputes shall lie in the courts of ‘karnataka,India’.</p>
      </section>

      {/* 19. CONTACT */}
      <section className="space-y-4 mt-10 mb-4 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          19. CONTACT
        </h2>
        <p>For questions, disputes, or support:</p>
        <p>
          ImperialX Labs Pvt Ltd
          <br />
          Email:{" "}
          <a
            href="mailto:support@imperialx.io"
            className="text-blue-300 hover:text-blue-200 underline underline-offset-2"
          >
            support@imperialx.io
          </a>
        </p>
      </section>
    </TermsLayout>
  );
}

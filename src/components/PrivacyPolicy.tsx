"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ShieldAlert } from "lucide-react";

// If NavbarDemo and Footer are in the same file as App,
// you can import them instead of redefining.
// import { NavbarDemo } from "./App";
// import { Footer } from "./App";

function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
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

      {/* Top nav (minimal for policy page). 
          If you already have <NavbarDemo />, you can use that instead. */}
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
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>

      {/* Simple footer for policy page */}
      <footer className="w-full bg-[#121317] border-t border-zinc-900 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} ImperialX Labs Pvt Ltd. All rights reserved.
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

export default function PrivacyPolicy() {
  return (
    <PrivacyPolicyLayout>
      {/* Header block */}
      <section className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-200 mb-4">
          <ShieldAlert className="w-4 h-4" />
          <span>Updated Privacy Policy</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          UPDATED PRIVACY POLICY
        </h1>
        <p className="mt-4 text-sm md:text-base text-zinc-400">
          Effective Date: 20/11/2025
        </p>
        <p className="text-sm md:text-base text-zinc-400">
          Issued By: ImperialX Labs Pvt Ltd (“ImperialX”, “Sally”, “we”, “us”, “our”)
        </p>
      </section>

      {/* INTRODUCTION */}
      <section className="space-y-4 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white mt-6">
          INTRODUCTION
        </h2>
        <p>
          ImperialX Labs Pvt Ltd (“ImperialX”) operates the ImperialX Exchange, a
          custodial digital asset trading platform, and Sally, its built-in AI
          automation and analytics layer.
        </p>
        <p>
          This Privacy Policy (“Policy”) explains how we collect, use, store,
          protect, and disclose your personal data when you:
        </p>
        <ul className="list-disc list-inside space-y-1 text-zinc-300">
          <li>Use the ImperialX Exchange, including wallet and trading services</li>
          <li>Access Sally’s AI models, tools, and automation features</li>
          <li>Create or manage your ImperialX account</li>
          <li>Interact through our website, app, dashboard, or API</li>
          <li>Communicate with us via email, support, or social channels</li>
        </ul>
        <p>Your privacy is important to us.</p>
        <p>
          By using ImperialX or Sally, you consent to the practices described in
          this Policy.
        </p>
      </section>

      {/* DATA CONTROLLER */}
      <section className="space-y-3 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          DATA CONTROLLER
        </h2>
        <p>The data controller responsible for your personal data is:</p>
        <p>
          ImperialX Labs Pvt Ltd
          <br />
          Registered Address: [Insert Registered Address]
          <br />
          Email:{" "}
          <a
            href="mailto:support@imperialx.ai"
            className="text-purple-300 hover:text-purple-200 underline underline-offset-2"
          >
            support@imperialx.ai
          </a>
        </p>
        <p>
          For privacy and data rights inquiries, contact our Data Protection
          Officer at:
          <br />
          <a
            href="mailto:privacy@imperialx.ai"
            className="text-purple-300 hover:text-purple-200 underline underline-offset-2"
          >
            privacy@imperialx.ai
          </a>
        </p>
      </section>

      {/* CATEGORIES OF PERSONAL DATA WE COLLECT */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          CATEGORIES OF PERSONAL DATA WE COLLECT
        </h2>
        <p>
          Because ImperialX is a full custodial exchange, we may collect the
          following categories of data:
        </p>

        {/* A. Main Account Data */}
        <h3 className="text-lg md:text-xl font-semibold text-white mt-4">
          A. Main Account Data
        </h3>
        <p>Used for account creation and identity management:</p>
        <ul className="list-disc list-inside space-y-1 text-zinc-300">
          <li>Name</li>
          <li>Username</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Country/region</li>
          <li>2FA and authentication data</li>
          <li>User ID</li>
        </ul>

        {/* B. Wallet & Trading Data */}
        <h3 className="text-lg md:text-xl font-semibold text-white mt-4">
          B. Wallet &amp; Trading Data (Custodial Exchange Data)
        </h3>
        <p>Collected automatically as part of ImperialX exchange operations:</p>
        <ul className="list-disc list-inside space-y-1 text-zinc-300">
          <li>Wallet balances</li>
          <li>Deposit &amp; withdrawal history</li>
          <li>Wallet addresses (internal or on-chain)</li>
          <li>Trading history (spot, futures, margin, etc.)</li>
          <li>Leverage, liquidations, open positions</li>
          <li>Order activity and status</li>
          <li>Cross-chain or internal transfers</li>
          <li>Automation, rule, and bot configurations within Sally</li>
          <li>Execution logs triggered by Sally</li>
        </ul>
        <p>
          We do not collect API keys from external exchanges, as all trading
          occurs within ImperialX.
        </p>

        {/* C. Technical Data */}
        <h3 className="text-lg md:text-xl font-semibold text-white mt-4">
          C. Technical Data
        </h3>
        <p>Automatically collected during platform usage:</p>
        <ul className="list-disc list-inside space-y-1 text-zinc-300">
          <li>IP address</li>
          <li>Device type, OS, model</li>
          <li>Browser type &amp; version</li>
          <li>Session identifiers</li>
          <li>Security events</li>
          <li>Crash logs, error logs</li>
          <li>Performance metrics</li>
        </ul>

        {/* D. Usage Data */}
        <h3 className="text-lg md:text-xl font-semibold text-white mt-4">
          D. Usage Data
        </h3>
        <p>Generated through in-app activity:</p>
        <ul className="list-disc list-inside space-y-1 text-zinc-300">
          <li>Buttons clicked, features used</li>
          <li>Automations created or modified</li>
          <li>Bots configured</li>
          <li>Settings applied</li>
          <li>Internal navigation events</li>
          <li>Analytical and behavioral data</li>
        </ul>

        {/* E. Marketing & Cookie Data */}
        <h3 className="text-lg md:text-xl font-semibold text-white mt-4">
          E. Marketing &amp; Cookie Data
        </h3>
        <p>Used for product personalization and optional marketing:</p>
        <ul className="list-disc list-inside space-y-1 text-zinc-300">
          <li>Analytics identifiers</li>
          <li>Attribution (campaign, referral, UTM data)</li>
          <li>Cookie identifiers</li>
          <li>Engagement &amp; interaction metrics</li>
          <li>Behavioral interest patterns</li>
        </ul>
        <p>Cookie usage is described in our Cookie Policy.</p>
      </section>

      {/* PURPOSES & LEGAL BASES */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          PURPOSES &amp; LEGAL BASES FOR DATA PROCESSING
        </h2>
        <p>We process your data to operate a secure and compliant exchange.</p>
        <p>Below is the purpose, example, and legal basis:</p>

        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950/60 mt-4">
          <table className="min-w-full text-left text-xs sm:text-sm text-zinc-200">
            <thead className="bg-zinc-900/80 text-zinc-300 uppercase tracking-wide">
              <tr>
                <th className="px-4 py-3">Purpose</th>
                <th className="px-4 py-3">Example</th>
                <th className="px-4 py-3">Legal Basis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              <tr>
                <td className="px-4 py-3">Account creation</td>
                <td className="px-4 py-3">Registering &amp; verifying user identity</td>
                <td className="px-4 py-3">Contract</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Providing exchange services</td>
                <td className="px-4 py-3">Wallet custody, trading execution</td>
                <td className="px-4 py-3">Contract</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Providing Sally features</td>
                <td className="px-4 py-3">
                  AI insights, trading automation
                </td>
                <td className="px-4 py-3">Contract / Legitimate interest</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Security &amp; fraud detection</td>
                <td className="px-4 py-3">Monitoring suspicious activity</td>
                <td className="px-4 py-3">Legitimate interest</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Communications</td>
                <td className="px-4 py-3">Alerts, updates, support messages</td>
                <td className="px-4 py-3">Contract / Legitimate interest</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Marketing (optional)</td>
                <td className="px-4 py-3">Newsletters, promotions</td>
                <td className="px-4 py-3">Consent</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Analytics &amp; improvements</td>
                <td className="px-4 py-3">Feature performance analysis</td>
                <td className="px-4 py-3">Legitimate interest</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Legal &amp; compliance</td>
                <td className="px-4 py-3">AML, fraud prevention, regulations</td>
                <td className="px-4 py-3">Legal obligation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>We only process the minimum required data for each purpose.</p>
      </section>

      {/* THIRD-PARTY SERVICES & DISCLOSURE */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          THIRD-PARTY SERVICES &amp; DISCLOSURE
        </h2>
        <p>We may share data with:</p>

        <h3 className="text-lg md:text-xl font-semibold text-white mt-2">
          A. Service Providers
        </h3>
        <p>Used for platform operations:</p>
        <ul className="list-disc list-inside space-y-1 text-zinc-300">
          <li>Cloud hosting (AWS, GCP, etc.)</li>
          <li>Analytics partners</li>
          <li>Payment processors (if applicable)</li>
          <li>Email delivery (SendGrid, Mailchimp)</li>
          <li>Logging &amp; crash monitoring</li>
          <li>Security vendors</li>
        </ul>

        <h3 className="text-lg md:text-xl font-semibold text-white mt-2">
          B. Legal &amp; Regulatory Authorities
        </h3>
        <p>Only when required by law.</p>

        <h3 className="text-lg md:text-xl font-semibold text-white mt-2">
          C. Internal ImperialX Teams
        </h3>
        <p>Strictly controlled, permission-based access.</p>

        <p>We do NOT:</p>
        <ul className="list-disc list-inside space-y-1 text-zinc-300">
          <li>✔ Sell personal data</li>
          <li>✔ Share trading/wallet data with advertisers</li>
          <li>✔ Transfer keys to external exchanges</li>
        </ul>
        <p>
          ImperialX does not integrate with third-party exchanges (e.g., no
          Bybit, Binance API).
        </p>
      </section>

      {/* INTERNATIONAL DATA TRANSFERS */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          INTERNATIONAL DATA TRANSFERS
        </h2>
        <p>
          Data may be stored or processed on secure cloud servers located
          internationally.
        </p>
        <p>
          We apply industry-standard safeguards and legal measures during all
          transfers.
        </p>
      </section>

      {/* SECURITY OF YOUR DATA */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          SECURITY OF YOUR DATA
        </h2>
        <p>We protect your personal data with:</p>
        <ul className="list-disc list-inside space-y-1 text-zinc-300">
          <li>Encryption (in transit &amp; at rest)</li>
          <li>Secure key management</li>
          <li>Multi-layer network security</li>
          <li>Role-based access control</li>
          <li>Regular penetration testing</li>
          <li>2FA for users</li>
          <li>Continuous monitoring</li>
        </ul>
        <p>
          No system can be 100% secure, but we follow best practices.
        </p>
      </section>

      {/* RETENTION OF PERSONAL DATA */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          RETENTION OF PERSONAL DATA
        </h2>
        <p>We retain data for as long as necessary to:</p>
        <ul className="list-disc list-inside space-y-1 text-zinc-300">
          <li>Provide exchange services</li>
          <li>Fulfill legal obligations</li>
          <li>Maintain accurate records</li>
          <li>Resolve disputes</li>
          <li>Enforce agreements</li>
        </ul>
        <p>Retention periods:</p>
        <ul className="list-disc list-inside space-y-1 text-zinc-300">
          <li>Wallet &amp; trading data: 6–7 years (regulatory)</li>
          <li>Technical logs: 30–180 days</li>
          <li>Marketing data: Until consent is withdrawn</li>
          <li>Automations &amp; Sally logs: Duration of account use</li>
          <li>Backups: Per secure backup lifecycle</li>
        </ul>
      </section>

      {/* AI PROCESSING & AUTOMATED DECISION MAKING */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          AI PROCESSING &amp; AUTOMATED DECISION MAKING
        </h2>
        <p>Sally may process user data to deliver:</p>
        <ul className="list-disc list-inside space-y-1 text-zinc-300">
          <li>Market insights</li>
          <li>Trading signals</li>
          <li>Crash detection</li>
          <li>Automation triggers</li>
          <li>Portfolio analysis</li>
        </ul>
        <p>
          AI assistance is not legally binding and does not execute trades
          without user-defined configuration.
        </p>
        <p>You maintain full control over all trading settings.</p>
      </section>

      {/* YOUR RIGHTS */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          YOUR RIGHTS
        </h2>
        <p>Depending on your jurisdiction, you may request:</p>
        <ul className="list-disc list-inside space-y-1 text-zinc-300">
          <li>Access to your information</li>
          <li>Correction of inaccurate data</li>
          <li>Deletion of your data</li>
          <li>Restrictions on processing</li>
          <li>Data portability</li>
          <li>Withdrawal of marketing consent</li>
          <li>Objection to certain processing</li>
        </ul>
        <p>
          Contact:{" "}
          <a
            href="mailto:privacy@imperialx.io"
            className="text-purple-300 hover:text-purple-200 underline underline-offset-2"
          >
            privacy@imperialx.io
          </a>
        </p>
        <p>We typically respond within 30 days.</p>
      </section>

      {/* GLOBAL ACCESS & AGE REQUIREMENT */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          GLOBAL ACCESS &amp; AGE REQUIREMENT
        </h2>
        <p>ImperialX services are accessible globally.</p>
        <p>Users must be 18 years or older.</p>
        <p>We do not knowingly collect data from minors.</p>
      </section>

      {/* LINKS TO THIRD-PARTY SITES */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          LINKS TO THIRD-PARTY SITES
        </h2>
        <p>ImperialX may link to educational materials or tools.</p>
        <p>We do not control external privacy practices.</p>
      </section>

      {/* CHANGES TO THIS POLICY */}
      <section className="space-y-4 mt-10 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          CHANGES TO THIS POLICY
        </h2>
        <p>The Policy may be updated as needed.</p>
        <p>
          Significant changes will be announced via email or system
          notification.
        </p>
      </section>

      {/* CONTACT */}
      <section className="space-y-4 mt-10 mb-4 text-sm md:text-base leading-relaxed text-zinc-300">
        <h2 className="text-xl md:text-2xl font-bold text-white">CONTACT</h2>
        <p>For questions, complaints, or data requests:</p>
        <p>
          ImperialX Labs Pvt Ltd
          <br />
          Email:{" "}
          <a
            href="mailto:privacy@imperialx.io"
            className="text-purple-300 hover:text-purple-200 underline underline-offset-2"
          >
            privacy@imperialx.io
          </a>
        </p>
      </section>
    </PrivacyPolicyLayout>
  );
}

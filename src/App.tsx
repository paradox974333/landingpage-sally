import './App.css'

const marketTopics = ['Crypto', 'Stocks', 'Commodities']

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
      <path d="M5 15 15 5M6 5h9v9" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SallyMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 32 32">
        <path d="M8 20.5c1.1 2.1 3.7 3.5 7.3 3.5 4.4 0 7.2-2 7.2-5.1 0-2.6-1.8-3.8-6.2-4.7l-2.1-.4c-2.5-.5-3.4-1-3.4-2.1 0-1.2 1.3-2 3.5-2 2 0 3.7.8 4.5 2.3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 7v3M22.5 8.5h3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#top" aria-label="Sally AI home">
            <SallyMark />
            <span>Sally<span className="brand-ai">AI</span></span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#what-you-learn">What you learn</a>
            <a href="#how-it-works">How it works</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="nav-cta" href="https://imperialx.io/" target="_blank" rel="noreferrer">
            Explore ImperialX <ArrowUpRight />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> MARKET RESEARCH, MADE HUMAN</div>
            <h1>Make sense of the market<span className="headline-period">.</span><br /><em>Then make your own call.</em></h1>
            <p className="hero-intro">Sally AI turns market movements into clear explanations and practical trading education—so you can learn what may be moving, why it matters, and where risk fits in.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="https://imperialx.io/" target="_blank" rel="noreferrer">Discover Sally AI <ArrowUpRight /></a>
              <a className="text-link" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a>
            </div>
            <div className="market-list" aria-label="Markets covered">
              <span>Explore ideas across</span>
              {marketTopics.map((topic) => <span className="market-pill" key={topic}>{topic}</span>)}
            </div>
          </div>

          <div className="hero-art" aria-label="Illustrative sample market explanation">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="insight-card">
              <div className="insight-topline"><span className="live-dot" /> A SAMPLE EXPLANATION <span className="insight-menu">···</span></div>
              <h2>What can sit behind a market move?</h2>
              <p className="insight-lede">One move can have several possible drivers. Start with context, not a conclusion.</p>
              <div className="chart-box">
                <div className="chart-label-row"><span>Illustrative market movement</span><span className="chart-label-muted">not live data</span></div>
                <svg className="illustration-chart" viewBox="0 0 420 126" role="img" aria-label="Decorative illustrative line chart">
                  <defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#b9d8bd" stopOpacity=".45" /><stop offset="100%" stopColor="#b9d8bd" stopOpacity="0" /></linearGradient></defs>
                  <path d="M0 100H420M0 66H420M0 32H420" className="chart-grid" />
                  <path d="M0 93 C24 89 26 75 48 79 S78 94 99 72 129 57 146 65 172 75 190 52 222 59 242 42 271 49 289 39 316 56 336 33 368 42 386 24 403 29 420 18V126H0Z" fill="url(#chartFill)" />
                  <path d="M0 93 C24 89 26 75 48 79 S78 94 99 72 129 57 146 65 172 75 190 52 222 59 242 42 271 49 289 39 316 56 336 33 368 42 386 24 403 29 420 18" className="chart-line" />
                  <circle cx="420" cy="18" r="4" className="chart-end" />
                </svg>
              </div>
              <div className="driver-list">
                <div className="driver-row"><span className="driver-number">01</span><span>Supply &amp; demand</span><span className="driver-mark">↗</span></div>
                <div className="driver-row"><span className="driver-number">02</span><span>News &amp; expectations</span><span className="driver-mark">↗</span></div>
                <div className="driver-row"><span className="driver-number">03</span><span>Broader market context</span><span className="driver-mark">↗</span></div>
              </div>
              <div className="insight-foot"><span className="sparkle">✳</span> Understand the possibilities. Decide for yourself.</div>
            </div>
            <div className="art-caption"><span className="caption-line" /> A clearer lens on market movements</div>
          </div>
        </section>

        <section className="ticker-band" aria-label="Sally AI focus">
          <div className="ticker-inner"><span>Curiosity over noise</span><span className="ticker-star">✳</span><span>Context over hot takes</span><span className="ticker-star">✳</span><span>Risk before reward</span><span className="ticker-star">✳</span><span>Curiosity over noise</span></div>
        </section>

        <section className="learn-section section-shell" id="what-you-learn">
          <div className="section-heading">
            <div className="eyebrow"><span className="eyebrow-dot" /> WHAT SALLY HELPS EXPLAIN</div>
            <h2>Clarity for the questions <em>behind the chart.</em></h2>
            <p>Markets are shaped by more than price. Build a stronger foundation by learning to look at the full picture.</p>
          </div>
          <div className="learning-grid">
            <article className="learning-card card-sage">
              <div className="card-top"><span className="card-index">01 / CONTEXT</span><span className="card-icon">↗</span></div>
              <div className="card-illustration context-illustration"><span className="context-ring ring-a" /><span className="context-ring ring-b" /><span className="context-center">WHY?</span><i className="context-node node-a" /><i className="context-node node-b" /><i className="context-node node-c" /></div>
              <h3>Understand what’s moving</h3>
              <p>Explore the forces that can influence crypto, stocks, and commodities—without reducing a complex market to one headline.</p>
              <a className="card-link" href="#how-it-works">Start with context <span>↗</span></a>
            </article>
            <article className="learning-card card-sand">
              <div className="card-top"><span className="card-index">02 / MECHANICS</span><span className="card-icon">◎</span></div>
              <div className="card-illustration mechanics-illustration"><span className="mechanic-block block-one">PRICE</span><span className="mechanic-connector">+</span><span className="mechanic-block block-two">PEOPLE</span><span className="mechanic-connector">+</span><span className="mechanic-block block-three">TIME</span></div>
              <h3>Learn how markets work</h3>
              <p>Get to grips with market structure, common terms, and the mechanics behind the movements you see.</p>
              <a className="card-link" href="#how-it-works">Build your foundation <span>↗</span></a>
            </article>
            <article className="learning-card card-lilac">
              <div className="card-top"><span className="card-index">03 / RISK</span><span className="card-icon">⌁</span></div>
              <div className="card-illustration risk-illustration"><div className="risk-scale"><span className="scale-label">POSITION SIZE</span><span className="scale-track"><i /></span><span className="scale-label scale-label-right">RISK LIMIT</span></div><div className="risk-note">Plan first.<br /><em>Then participate.</em></div></div>
              <h3>Put risk in the picture</h3>
              <p>Learn the role of risk management and position sizing as part of a thoughtful approach to trading.</p>
              <a className="card-link" href="#how-it-works">Learn risk basics <span>↗</span></a>
            </article>
          </div>
        </section>

        <section className="process-section" id="how-it-works">
          <div className="section-shell process-layout">
            <div className="process-intro">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> A MORE THOUGHTFUL WAY TO LEARN</div>
              <h2>From a market move<br />to <em>a better question.</em></h2>
              <p>Sally is a learning companion for market research and trading education. Use explanations to deepen your understanding—not to outsource your decisions.</p>
              <a className="button button-lime" href="https://imperialx.io/" target="_blank" rel="noreferrer">Explore ImperialX <ArrowUpRight /></a>
            </div>
            <div className="process-steps">
              <div className="process-step"><span className="step-no">01</span><div><h3>Notice the movement</h3><p>Start with what changed and the market it happened in.</p></div><span className="step-symbol">⌁</span></div>
              <div className="process-step"><span className="step-no">02</span><div><h3>Explore possible drivers</h3><p>Consider broader context, mechanics, and more than one explanation.</p></div><span className="step-symbol">✳</span></div>
              <div className="process-step"><span className="step-no">03</span><div><h3>Keep risk in view</h3><p>Build knowledge about uncertainty, position sizing, and risk management.</p></div><span className="step-symbol">↗</span></div>
              <div className="process-note"><span>✦</span> Learning first. Your decisions stay yours.</div>
            </div>
          </div>
        </section>

        <section className="faq-section section-shell" id="faq">
          <div className="faq-title"><div className="eyebrow"><span className="eyebrow-dot" /> GOOD TO KNOW</div><h2>Questions, <em>without the jargon.</em></h2><p>A few things to keep in mind as you explore.</p></div>
          <div className="faq-list">
            <details><summary>What is Sally AI? <span>+</span></summary><p>Sally AI provides market research and trading education. It helps explain market movements and teaches topics such as risk management, position sizing, and market mechanics.</p></details>
            <details><summary>Which markets does Sally cover? <span>+</span></summary><p>The learning focus spans crypto, stocks, and commodities.</p></details>
            <details><summary>Does Sally tell me what to buy or sell? <span>+</span></summary><p>This page presents Sally as a source of research and education, not a promise of outcomes or a substitute for your own judgment. Always verify information and consider your circumstances.</p></details>
          </div>
        </section>

        <section className="closing-section section-shell">
          <div className="closing-card"><div className="closing-sparkle">✳</div><div className="closing-copy"><div className="eyebrow eyebrow-light">LESS NOISE. MORE UNDERSTANDING.</div><h2>Stay curious.<br /><em>Keep your footing.</em></h2><p>Explore Sally AI and build your market knowledge one question at a time.</p></div><a className="button button-lime" href="https://imperialx.io/" target="_blank" rel="noreferrer">Visit ImperialX <ArrowUpRight /></a><span className="closing-orbit orbit-large" /><span className="closing-orbit orbit-small" /></div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a className="brand footer-brand" href="#top"><SallyMark /><span>Sally<span className="brand-ai">AI</span></span></a>
        <p className="footer-note">Market research &amp; trading education by ImperialX.</p>
        <p className="disclaimer">Educational content only. Not financial advice or a recommendation to buy or sell any asset. Markets involve risk; do your own research and consider seeking independent advice.</p>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Sally AI</span><a href="https://imperialx.io/" target="_blank" rel="noreferrer">imperialx.io <ArrowUpRight /></a></div>
      </footer>
    </>
  )
}

export default App

import { Link } from "wouter";
import { Footer } from "../components/Footer";

const services = [
  ["Web Development", "Premium websites built to feel sharp, fast, responsive, and conversion-focused."],
  ["E-commerce", "Online stores with clean product flows, payments, checkout, and launch support."],
  ["AI Automation", "Smart workflows that reduce manual work and make businesses move faster."],
  ["Custom Systems", "Dashboards, platforms, portals, and internal tools built around real operations."],
  ["Branding", "Visual identities and digital systems that make brands look serious everywhere."],
  ["Web3", "Modern interfaces and digital products for blockchain, crypto, and DeFi ideas."],
];

const process = [
  ["01", "Discover", "We understand your business, offer, users, and goals before designing anything."],
  ["02", "Design", "We create a premium interface direction that makes the brand feel sharp and credible."],
  ["03", "Build", "We develop the website, platform, automation, or system with clean execution."],
  ["04", "Launch", "We help deploy, test, optimize, and support the product after it goes live."],
];

export default function Home() {
  return (
    <>
      <style>{`
        .ahos-home {
          background: #05050a;
          color: #fff;
          overflow: hidden;
        }

        .ahos-wrap {
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;
          position: relative;
          z-index: 3;
        }

        .ahos-hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 160px 0 120px;
          background:
            radial-gradient(circle at 50% 28%, rgba(255,117,31,.16), transparent 34%),
            radial-gradient(circle at 15% 65%, rgba(255,117,31,.11), transparent 30%),
            radial-gradient(circle at 85% 35%, rgba(255,117,31,.12), transparent 30%),
            #05050a;
        }

        .hero-grid-bg {
          position: absolute;
          inset: 0;
          opacity: .12;
          background-image:
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px);
          background-size: 78px 78px;
          mask-image: radial-gradient(circle at center, black, transparent 75%);
          animation: moveGrid 20s linear infinite;
        }

        @keyframes moveGrid {
          from { transform: translateY(0); }
          to { transform: translateY(78px); }
        }

        .hero-glow {
          position: absolute;
          width: 760px;
          height: 760px;
          border-radius: 50%;
          background: rgba(255,117,31,.15);
          filter: blur(130px);
          animation: pulseGlow 6s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%,100% { transform: scale(1); opacity: .55; }
          50% { transform: scale(1.12); opacity: .95; }
        }

        .network {
          position: absolute;
          width: 420px;
          height: 520px;
          opacity: .75;
          pointer-events: none;
        }

        .network-left {
          left: -80px;
          top: 20%;
        }

        .network-right {
          right: -80px;
          top: 16%;
          transform: scaleX(-1);
        }

        .network span,
        .network i {
          position: absolute;
          display: block;
        }

        .network span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff751f;
          box-shadow: 0 0 18px rgba(255,117,31,.9);
          animation: nodePulse 3s ease-in-out infinite;
        }

        .network i {
          height: 1px;
          transform-origin: left center;
          background: linear-gradient(90deg, transparent, rgba(255,117,31,.55), transparent);
          animation: lineFlow 4s ease-in-out infinite;
        }

        .network span:nth-child(1) { left: 40px; top: 80px; }
        .network span:nth-child(2) { left: 190px; top: 40px; }
        .network span:nth-child(3) { left: 320px; top: 120px; }
        .network span:nth-child(4) { left: 100px; top: 240px; }
        .network span:nth-child(5) { left: 280px; top: 310px; }
        .network span:nth-child(6) { left: 70px; top: 430px; }

        .network i:nth-child(7) { left: 45px; top: 84px; width: 150px; transform: rotate(-15deg); }
        .network i:nth-child(8) { left: 194px; top: 44px; width: 150px; transform: rotate(32deg); }
        .network i:nth-child(9) { left: 104px; top: 244px; width: 190px; transform: rotate(20deg); }
        .network i:nth-child(10) { left: 44px; top: 84px; width: 230px; transform: rotate(42deg); }
        .network i:nth-child(11) { left: 75px; top: 434px; width: 220px; transform: rotate(-32deg); }
        .network i:nth-child(12) { left: 324px; top: 124px; width: 205px; transform: rotate(100deg); }

        @keyframes nodePulse {
          0%,100% { opacity: .45; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.45); }
        }

        @keyframes lineFlow {
          0%,100% { opacity: .25; }
          50% { opacity: .9; }
        }

        .hero-content {
          text-align: center;
          max-width: 1120px;
          margin: 0 auto;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 999px;
          border: 1px solid rgba(255,117,31,.32);
          background: rgba(255,117,31,.08);
          color: #ff751f;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-size: 12px;
          margin-bottom: 34px;
          backdrop-filter: blur(20px);
        }

        .badge span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff751f;
          box-shadow: 0 0 16px rgba(255,117,31,1);
        }

        .hero-title {
          margin: 0 auto;
          font-size: clamp(58px, 8vw, 122px);
          line-height: .9;
          letter-spacing: -.085em;
          font-weight: 900;
        }

        .hero-title strong {
          color: #ff751f;
          text-shadow:
            0 0 44px rgba(255,117,31,.5),
            0 0 120px rgba(255,117,31,.2);
        }

        .hero-sub {
          max-width: 760px;
          margin: 34px auto 0;
          color: rgba(255,255,255,.66);
          font-size: 20px;
          line-height: 1.8;
        }

        .actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 44px;
        }

        .btn {
          min-height: 56px;
          padding: 0 32px;
          border-radius: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: .08em;
          font-weight: 800;
          transition: .3s ease;
        }

        .btn.primary {
          color: #fff;
          background: linear-gradient(135deg,#ff9448,#ff5c00);
          box-shadow: 0 24px 80px rgba(255,117,31,.35);
        }

        .btn.secondary {
          color: rgba(255,255,255,.85);
          border: 1px solid rgba(255,255,255,.13);
          background: rgba(255,255,255,.045);
          backdrop-filter: blur(20px);
        }

        .btn:hover {
          transform: translateY(-4px);
        }

        .floating-tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 62px;
        }

        .floating-tags span {
          padding: 12px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255,117,31,.18);
          background: rgba(255,117,31,.055);
          color: rgba(255,255,255,.72);
          font-size: 13px;
          animation: floatTag 5s ease-in-out infinite;
        }

        .floating-tags span:nth-child(even) {
          animation-delay: 1s;
        }

        @keyframes floatTag {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .section {
          position: relative;
          padding: 120px 0;
        }

        .section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 80% 30%, rgba(255,117,31,.08), transparent 30%);
          pointer-events: none;
        }

        .section-head {
          max-width: 780px;
          margin-bottom: 54px;
        }

        .eyebrow {
          color: #ff751f;
          text-transform: uppercase;
          letter-spacing: .18em;
          font-size: 12px;
          margin-bottom: 16px;
        }

        h2 {
          margin: 0;
          font-size: clamp(38px, 5vw, 70px);
          line-height: .98;
          letter-spacing: -.06em;
        }

        .section-head p {
          color: rgba(255,255,255,.58);
          font-size: 17px;
          line-height: 1.75;
          margin-top: 20px;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .service-card {
          min-height: 270px;
          padding: 28px;
          border-radius: 32px;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.025));
          border: 1px solid rgba(255,255,255,.095);
          transition: .3s ease;
        }

        .service-card::after {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          right: -60px;
          bottom: -70px;
          background: rgba(255,117,31,.16);
          filter: blur(48px);
          opacity: 0;
          transition: .3s ease;
        }

        .service-card:hover {
          transform: translateY(-9px);
          border-color: rgba(255,117,31,.38);
        }

        .service-card:hover::after {
          opacity: 1;
        }

        .service-card small {
          color: #ff751f;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-size: 11px;
        }

        .service-card h3 {
          margin: 22px 0 14px;
          font-size: 28px;
          line-height: 1.05;
          letter-spacing: -.045em;
        }

        .service-card p {
          margin: 0;
          color: rgba(255,255,255,.57);
          line-height: 1.75;
        }

        .showcase {
          display: grid;
          grid-template-columns: .95fr 1.05fr;
          gap: 64px;
          align-items: center;
        }

        .showcase-panel {
          padding: 30px;
          border-radius: 38px;
          background:
            radial-gradient(circle at 80% 15%, rgba(255,117,31,.18), transparent 32%),
            linear-gradient(145deg, rgba(255,255,255,.09), rgba(255,255,255,.03));
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: 0 60px 150px rgba(0,0,0,.55);
        }

        .showcase-line {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 18px 0;
          border-bottom: 1px solid rgba(255,255,255,.08);
        }

        .showcase-line:last-child {
          border-bottom: 0;
        }

        .showcase-line strong {
          color: #fff;
        }

        .showcase-line span {
          color: #ff751f;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .process-card {
          padding: 26px;
          border-radius: 28px;
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,255,255,.09);
        }

        .process-card strong {
          display: block;
          color: #ff751f;
          margin-bottom: 24px;
        }

        .process-card h3 {
          margin: 0 0 10px;
          font-size: 23px;
          letter-spacing: -.035em;
        }

        .process-card p {
          margin: 0;
          color: rgba(255,255,255,.55);
          line-height: 1.65;
        }

        .cta {
          margin-top: 80px;
          padding: 56px;
          border-radius: 42px;
          background:
            radial-gradient(circle at 85% 20%, rgba(255,117,31,.34), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.11), rgba(255,255,255,.035));
          border: 1px solid rgba(255,255,255,.13);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 34px;
        }

        .cta p {
          max-width: 620px;
          color: rgba(255,255,255,.6);
          line-height: 1.75;
        }

        @media (max-width: 980px) {
          .network {
            opacity: .28;
          }

          .service-grid,
          .showcase,
          .process-grid {
            grid-template-columns: 1fr;
          }

          .cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 620px) {
          .ahos-wrap {
            width: min(100% - 36px, 1240px);
          }

          .ahos-hero {
            padding: 130px 0 90px;
          }

          .hero-title {
            font-size: 48px;
          }

          .hero-sub {
            font-size: 16px;
          }

          .network {
            display: none;
          }

          .section {
            padding: 86px 0;
          }

          .cta {
            padding: 32px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-grid-bg,
          .hero-glow,
          .network span,
          .network i,
          .floating-tags span {
            animation: none !important;
          }
        }
      `}</style>

      <main className="ahos-home">
        <section className="ahos-hero">
          <div className="hero-grid-bg" />
          <div className="hero-glow" />

          <div className="network network-left">
            <span /><span /><span /><span /><span /><span />
            <i /><i /><i /><i /><i /><i />
          </div>

          <div className="network network-right">
            <span /><span /><span /><span /><span /><span />
            <i /><i /><i /><i /><i /><i />
          </div>

          <div className="ahos-wrap hero-content">
            <div className="badge">
              <span />
              AHOS Digital Studio
            </div>

            <h1 className="hero-title">
              We build digital experiences that make brands <strong>impossible to ignore.</strong>
            </h1>

            <p className="hero-sub">
              AHOS creates premium websites, e-commerce platforms, brand systems,
              automations, and custom digital products for ambitious businesses.
            </p>

            <div className="actions">
              <Link href="/contact" className="btn primary">
                Start a Project
              </Link>
              <Link href="/services" className="btn secondary">
                Explore Services
              </Link>
            </div>

            <div className="floating-tags">
              <span>Websites</span>
              <span>E-commerce</span>
              <span>AI Automation</span>
              <span>Branding</span>
              <span>Web3</span>
              <span>Systems</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="ahos-wrap">
            <div className="section-head">
              <div className="eyebrow">What We Build</div>
              <h2>Digital systems with the polish of a brand and the power of software.</h2>
              <p>
                We combine strategy, design, development, and automation to create
                websites and systems that look premium and work properly.
              </p>
            </div>

            <div className="service-grid">
              {services.map(([title, text], index) => (
                <div className="service-card" key={title}>
                  <small>0{index + 1} / {title}</small>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="ahos-wrap showcase">
            <div className="section-head">
              <div className="eyebrow">Why AHOS</div>
              <h2>Not another template. A digital presence engineered around growth.</h2>
              <p>
                Every section, interaction, page, and system is designed to help your
                business look more credible, communicate faster, and convert better.
              </p>
            </div>

            <div className="showcase-panel">
              <div className="showcase-line">
                <strong>Visual Identity</strong>
                <span>Premium</span>
              </div>
              <div className="showcase-line">
                <strong>Website Structure</strong>
                <span>Conversion-focused</span>
              </div>
              <div className="showcase-line">
                <strong>Responsive Design</strong>
                <span>All devices</span>
              </div>
              <div className="showcase-line">
                <strong>Automation Layer</strong>
                <span>Optional</span>
              </div>
              <div className="showcase-line">
                <strong>Launch Support</strong>
                <span>Included</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="ahos-wrap">
            <div className="section-head">
              <div className="eyebrow">Process</div>
              <h2>From first idea to final launch, without the mess.</h2>
              <p>
                We keep the workflow clear, direct, and focused on building something
                that actually helps the business.
              </p>
            </div>

            <div className="process-grid">
              {process.map(([num, title, text]) => (
                <div className="process-card" key={title}>
                  <strong>{num}</strong>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>

            <div className="cta">
              <div>
                <div className="eyebrow">Start With AHOS</div>
                <h2>Ready to make your brand look serious online?</h2>
                <p>
                  Bring the idea. We’ll help shape it, design it, build it,
                  and launch it with the level of polish your business deserves.
                </p>
              </div>

              <Link href="/contact" className="btn primary">
                Contact AHOS
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

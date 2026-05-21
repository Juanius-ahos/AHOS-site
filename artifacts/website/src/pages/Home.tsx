import { useRef } from "react";
import { Link } from "wouter";
import { Footer } from "../components/Footer";

const services = [
  ["Web Development", "High-end websites built for speed, clarity, and conversion."],
  ["E-commerce", "Online stores with clean buying flows and polished product experiences."],
  ["AI Automation", "Smart workflows that reduce repetitive work and help teams move faster."],
  ["Custom Systems", "Dashboards, platforms, and tools built around your operations."],
  ["Branding", "Visual systems that make your business look serious everywhere."],
  ["Web3", "Modern digital products for crypto, blockchain, and DeFi ideas."],
];

const process = [
  ["01", "Strategy", "We define the business goal, audience, offer, and structure."],
  ["02", "Design", "We create the visual direction and interface experience."],
  ["03", "Build", "We develop the website, platform, automation, or system."],
  ["04", "Launch", "We test, optimize, deploy, and support after going live."],
];

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    heroRef.current?.style.setProperty("--x", `${e.clientX - rect.left}px`);
    heroRef.current?.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <>
      <style>{`
        .home {
          background: #050509;
          color: #fff;
          overflow: hidden;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .wrap {
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .hero {
          --x: 50%;
          --y: 50%;
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 160px 0 110px;
          background:
            radial-gradient(circle at var(--x) var(--y), rgba(255,117,31,.18), transparent 28%),
            radial-gradient(circle at 50% 30%, rgba(255,117,31,.14), transparent 36%),
            #050509;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(circle at center, black, transparent 72%);
          animation: gridMove 22s linear infinite;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 65%, #050509);
        }

        @keyframes gridMove {
          from { transform: translateY(0); }
          to { transform: translateY(80px); }
        }

        .network {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .9;
        }

        .network svg {
          position: absolute;
          width: 520px;
          max-width: 42vw;
          filter: drop-shadow(0 0 18px rgba(255,117,31,.32));
        }

        .network-left {
          left: -90px;
          top: 18%;
        }

        .network-right {
          right: -90px;
          bottom: 12%;
          transform: scaleX(-1);
        }

        .network line {
          stroke: rgba(255,117,31,.35);
          stroke-width: 1;
          stroke-dasharray: 8 12;
          animation: dash 9s linear infinite;
        }

        .network circle {
          fill: #ff751f;
          animation: pulseNode 3.4s ease-in-out infinite;
        }

        .network circle:nth-child(even) {
          animation-delay: 1.2s;
        }

        @keyframes dash {
          to { stroke-dashoffset: -140; }
        }

        @keyframes pulseNode {
          0%,100% { opacity: .45; r: 4; }
          50% { opacity: 1; r: 6; }
        }

        .hero-content {
          max-width: 1050px;
          text-align: center;
          margin: 0 auto;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(255,117,31,.08);
          border: 1px solid rgba(255,117,31,.32);
          color: #ff9448;
          text-transform: uppercase;
          letter-spacing: .18em;
          font-size: 11px;
          font-weight: 800;
          margin-bottom: 34px;
          backdrop-filter: blur(18px);
        }

        .badge span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff751f;
          box-shadow: 0 0 18px rgba(255,117,31,1);
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(58px, 9vw, 132px);
          line-height: .86;
          letter-spacing: -.09em;
          font-weight: 950;
        }

        .hero h1 em {
          font-style: normal;
          color: #ff751f;
          text-shadow:
            0 0 45px rgba(255,117,31,.5),
            0 0 120px rgba(255,117,31,.2);
        }

        .hero p {
          max-width: 740px;
          margin: 34px auto 0;
          color: rgba(255,255,255,.66);
          font-size: 19px;
          line-height: 1.8;
        }

        .actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 44px;
        }

        .btn {
          min-height: 56px;
          padding: 0 34px;
          border-radius: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: .09em;
          font-size: 12px;
          font-weight: 900;
          transition: .28s ease;
        }

        .btn-primary {
          color: #fff;
          background: linear-gradient(135deg, #ff9448, #ff4d00);
          box-shadow: 0 22px 70px rgba(255,117,31,.38);
        }

        .btn-secondary {
          color: rgba(255,255,255,.84);
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,255,255,.13);
          backdrop-filter: blur(18px);
        }

        .btn:hover {
          transform: translateY(-4px);
        }

        .hero-strip {
          margin-top: 70px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .hero-strip span {
          padding: 12px 18px;
          border-radius: 999px;
          color: rgba(255,255,255,.68);
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,255,255,.09);
          font-size: 13px;
        }

        .section {
          padding: 120px 0;
          position: relative;
        }

        .section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 80% 30%, rgba(255,117,31,.08), transparent 34%);
          pointer-events: none;
        }

        .section-head {
          max-width: 780px;
          margin-bottom: 56px;
        }

        .eyebrow {
          color: #ff751f;
          text-transform: uppercase;
          letter-spacing: .2em;
          font-size: 11px;
          font-weight: 900;
          margin-bottom: 18px;
        }

        h2 {
          margin: 0;
          font-size: clamp(40px, 5vw, 72px);
          line-height: .96;
          letter-spacing: -.065em;
          font-weight: 950;
        }

        .section-head p {
          margin: 22px 0 0;
          color: rgba(255,255,255,.58);
          font-size: 17px;
          line-height: 1.75;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .service {
          min-height: 280px;
          padding: 30px;
          border-radius: 32px;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.025));
          border: 1px solid rgba(255,255,255,.095);
          transition: .35s ease;
        }

        .service::after {
          content: "";
          position: absolute;
          right: -70px;
          bottom: -80px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: rgba(255,117,31,.18);
          filter: blur(55px);
          opacity: 0;
          transition: .35s ease;
        }

        .service:hover {
          transform: translateY(-10px);
          border-color: rgba(255,117,31,.42);
        }

        .service:hover::after {
          opacity: 1;
        }

        .service small {
          color: #ff751f;
          letter-spacing: .16em;
          text-transform: uppercase;
          font-size: 11px;
          font-weight: 900;
        }

        .service h3 {
          margin: 24px 0 14px;
          font-size: 28px;
          line-height: 1.05;
          letter-spacing: -.045em;
        }

        .service p {
          color: rgba(255,255,255,.56);
          line-height: 1.75;
          margin: 0;
        }

        .split {
          display: grid;
          grid-template-columns: .95fr 1.05fr;
          gap: 70px;
          align-items: center;
        }

        .studio-panel {
          padding: 34px;
          border-radius: 38px;
          background:
            radial-gradient(circle at 80% 20%, rgba(255,117,31,.18), transparent 36%),
            linear-gradient(145deg, rgba(255,255,255,.09), rgba(255,255,255,.025));
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: 0 60px 160px rgba(0,0,0,.58);
        }

        .panel-line {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 20px 0;
          border-bottom: 1px solid rgba(255,255,255,.08);
          color: rgba(255,255,255,.76);
        }

        .panel-line:last-child {
          border-bottom: 0;
        }

        .panel-line span {
          color: #ff9448;
        }

        .process {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .process-card {
          padding: 28px;
          border-radius: 30px;
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,255,255,.09);
        }

        .process-card strong {
          color: #ff751f;
          display: block;
          margin-bottom: 26px;
        }

        .process-card h3 {
          margin: 0 0 12px;
          font-size: 24px;
          letter-spacing: -.04em;
        }

        .process-card p {
          margin: 0;
          color: rgba(255,255,255,.55);
          line-height: 1.7;
          font-size: 14px;
        }

        .cta {
          margin-top: 80px;
          padding: 60px;
          border-radius: 42px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          background:
            radial-gradient(circle at 85% 25%, rgba(255,117,31,.34), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.105), rgba(255,255,255,.035));
          border: 1px solid rgba(255,255,255,.13);
        }

        .cta p {
          color: rgba(255,255,255,.6);
          line-height: 1.75;
          max-width: 620px;
        }

        @media (max-width: 980px) {
          .network {
            opacity: .3;
          }

          .services-grid,
          .split,
          .process {
            grid-template-columns: 1fr;
          }

          .cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 620px) {
          .wrap {
            width: min(100% - 36px, 1240px);
          }

          .hero {
            padding: 130px 0 80px;
          }

          .hero h1 {
            font-size: 48px;
          }

          .hero p {
            font-size: 16px;
          }

          .network {
            display: none;
          }

          .section {
            padding: 88px 0;
          }

          .cta {
            padding: 34px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero::before,
          .network line,
          .network circle {
            animation: none !important;
          }
        }
      `}</style>

      <main className="home">
        <section ref={heroRef} onMouseMove={handleMouseMove} className="hero">
          <div className="network">
            <svg className="network-left" viewBox="0 0 500 500">
              <line x1="70" y1="110" x2="230" y2="70" />
              <line x1="230" y1="70" x2="380" y2="160" />
              <line x1="70" y1="110" x2="150" y2="290" />
              <line x1="150" y1="290" x2="340" y2="340" />
              <line x1="380" y1="160" x2="340" y2="340" />
              <circle cx="70" cy="110" r="5" />
              <circle cx="230" cy="70" r="5" />
              <circle cx="380" cy="160" r="5" />
              <circle cx="150" cy="290" r="5" />
              <circle cx="340" cy="340" r="5" />
            </svg>

            <svg className="network-right" viewBox="0 0 500 500">
              <line x1="70" y1="110" x2="230" y2="70" />
              <line x1="230" y1="70" x2="380" y2="160" />
              <line x1="70" y1="110" x2="150" y2="290" />
              <line x1="150" y1="290" x2="340" y2="340" />
              <line x1="380" y1="160" x2="340" y2="340" />
              <circle cx="70" cy="110" r="5" />
              <circle cx="230" cy="70" r="5" />
              <circle cx="380" cy="160" r="5" />
              <circle cx="150" cy="290" r="5" />
              <circle cx="340" cy="340" r="5" />
            </svg>
          </div>

          <div className="wrap hero-content">
            <div className="badge">
              <span />
              AHOS Digital Studio
            </div>

            <h1>
              Digital experiences that make brands <em>impossible to ignore.</em>
            </h1>

            <p>
              We design and build premium websites, e-commerce platforms, brand systems,
              automations, and custom digital products for ambitious businesses.
            </p>

            <div className="actions">
              <Link href="/contact" className="btn btn-primary">
                Start a Project
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>

            <div className="hero-strip">
              <span>Websites</span>
              <span>E-commerce</span>
              <span>AI Automation</span>
              <span>Branding</span>
              <span>Web3</span>
              <span>Custom Systems</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What We Build</div>
              <h2>Premium digital systems with strategy, design, and engineering.</h2>
              <p>
                AHOS creates polished digital products that do more than look good.
                They communicate clearly, convert better, and support real business growth.
              </p>
            </div>

            <div className="services-grid">
              {services.map(([title, text], index) => (
                <div className="service" key={title}>
                  <small>0{index + 1} / {title}</small>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap split">
            <div className="section-head">
              <div className="eyebrow">Why AHOS</div>
              <h2>Not another template. A digital presence engineered to perform.</h2>
              <p>
                Every section, interaction, and system is built around credibility,
                clarity, conversion, and long-term usability.
              </p>
            </div>

            <div className="studio-panel">
              <div className="panel-line">
                <strong>Visual Direction</strong>
                <span>Premium</span>
              </div>
              <div className="panel-line">
                <strong>User Experience</strong>
                <span>Conversion-focused</span>
              </div>
              <div className="panel-line">
                <strong>Performance</strong>
                <span>Fast & responsive</span>
              </div>
              <div className="panel-line">
                <strong>Automation</strong>
                <span>Business-ready</span>
              </div>
              <div className="panel-line">
                <strong>Launch Support</strong>
                <span>Included</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Process</div>
              <h2>From idea to launch, without the chaos.</h2>
              <p>
                A clear workflow that keeps your project sharp, organized, and focused
                from the first discussion to the final release.
              </p>
            </div>

            <div className="process">
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
                  Bring the idea. We’ll help shape it, design it, build it, and launch it
                  with the level of polish your business deserves.
                </p>
              </div>

              <Link href="/contact" className="btn btn-primary">
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

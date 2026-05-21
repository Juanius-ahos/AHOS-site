import { Link } from "wouter";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";

const gateways = [
  {
    label: "Services",
    title: "Digital systems for modern brands",
    text: "Websites, e-commerce platforms, automations, and custom business tools built with strategy and precision.",
    href: "/services",
  },
  {
    label: "Blockchain",
    title: "Web3 infrastructure with real utility",
    text: "Blockchain products, smart contract experiences, token ecosystems, and decentralized platforms.",
    href: "/blockchain-services",
  },
  {
    label: "Careers",
    title: "Build with the AHOS team",
    text: "For people who want to create serious digital products, not just pretty screens.",
    href: "/careers",
  },
];

const signals = [
  "Strategy",
  "Interface Design",
  "Web Development",
  "E-commerce",
  "AI Automation",
  "Blockchain",
  "Custom Systems",
  "Launch Support",
];

const stats = [
  { value: "98%", label: "Client Satisfaction", metric: 98 },
  { value: "150+", label: "Projects Delivered", metric: 85 },
  { value: "24/7", label: "Support Coverage", metric: 92 },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        :root {
          --ahos-bg: #050505;
          --ahos-panel: #0d0d0f;
          --ahos-soft: rgba(255,255,255,.065);
          --ahos-line: rgba(255,255,255,.11);
          --ahos-text: #ffffff;
          --ahos-muted: rgba(255,255,255,.62);
          --ahos-faint: rgba(255,255,255,.38);
          --ahos-orange: #ff751f;
          --ahos-orange-soft: rgba(255,117,31,.18);
          --ahos-orange-glow: rgba(255,117,31,.35);
          --transition-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          --transition-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .home {
          min-height: 100vh;
          background: var(--ahos-bg);
          color: var(--ahos-text);
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        /* Custom cursor for professional feel */
        .custom-cursor {
          position: fixed;
          width: 24px;
          height: 24px;
          border: 1.5px solid var(--ahos-orange);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.2s var(--transition-smooth);
          transform: translate(-50%, -50%);
          opacity: 0;
        }

        .home:hover .custom-cursor {
          opacity: 0.4;
        }

        .custom-cursor.active {
          transform: translate(-50%, -50%) scale(0.5);
          background: var(--ahos-orange);
        }

        .wrap {
          width: min(1280px, calc(100% - 48px));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Enhanced gradient animations */
        .hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 180px 0 120px;
          isolation: isolate;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: -20%;
          background: 
            radial-gradient(circle at 78% 28%, var(--ahos-orange-soft), transparent 32%),
            radial-gradient(circle at 18% 76%, var(--ahos-orange-soft), transparent 32%),
            radial-gradient(circle at 45% 45%, rgba(255,117,31,.05), transparent 45%),
            linear-gradient(135deg, transparent 0%, #050505 85%);
          z-index: -3;
          animation: pulseGlow 12s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.02); }
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px);
          background-size: 80px 80px, 80px 80px;
          mask-image: linear-gradient(to bottom, transparent, black 12%, black 72%, transparent);
          opacity: 0.3;
          z-index: -2;
          animation: gridShift 30s linear infinite;
        }

        @keyframes gridShift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 80px); }
        }

        .hero-layout {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          align-items: center;
        }

        /* Enhanced typography animations */
        .kicker {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          color: var(--ahos-faint);
          text-transform: uppercase;
          letter-spacing: 0.25em;
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 36px;
          opacity: 0;
          animation: fadeInUp 0.8s var(--transition-smooth) forwards;
        }

        .kicker::before {
          content: "";
          width: 42px;
          height: 1px;
          background: linear-gradient(90deg, var(--ahos-orange), transparent);
          box-shadow: 0 0 8px var(--ahos-orange);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero h1 {
          margin: 0;
          max-width: 780px;
          font-size: clamp(58px, 10vw, 140px);
          line-height: 0.86;
          letter-spacing: -0.09em;
          font-weight: 950;
          opacity: 0;
          animation: fadeInUp 0.8s var(--transition-smooth) 0.1s forwards;
        }

        .hero h1 span {
          color: var(--ahos-orange);
          position: relative;
          display: inline-block;
        }

        .hero-copy {
          max-width: 610px;
          margin-top: 36px;
          color: var(--ahos-muted);
          font-size: 18px;
          line-height: 1.7;
          font-weight: 400;
          opacity: 0;
          animation: fadeInUp 0.8s var(--transition-smooth) 0.2s forwards;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 48px;
          opacity: 0;
          animation: fadeInUp 0.8s var(--transition-smooth) 0.3s forwards;
        }

        .btn {
          min-height: 56px;
          padding: 0 34px;
          border-radius: 2px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: all 0.35s var(--transition-smooth);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .btn-primary {
          color: #050505;
          background: #ffffff;
          border: none;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent);
          transition: left 0.5s ease;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-secondary {
          color: #ffffff;
          border: 1px solid var(--ahos-line);
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          border-color: var(--ahos-orange);
          background: rgba(255,117,31,0.08);
          transform: translateY(-2px);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          background: #f5f5f5;
        }

        /* Enhanced system cards */
        .system {
          position: relative;
          min-height: 620px;
          border-left: 1px solid var(--ahos-line);
          padding-left: 42px;
        }

        .system::before {
          content: "";
          position: absolute;
          left: -1px;
          top: 5%;
          width: 1px;
          height: 25%;
          background: linear-gradient(to bottom, var(--ahos-orange), transparent);
          box-shadow: 0 0 12px var(--ahos-orange);
          animation: scanVertical 8s ease-in-out infinite;
        }

        @keyframes scanVertical {
          0%, 100% { transform: translateY(0); opacity: 0.4; height: 25%; }
          50% { transform: translateY(280px); opacity: 0.8; height: 35%; }
        }

        .system-card {
          position: absolute;
          width: 340px;
          padding: 28px;
          border: 1px solid var(--ahos-line);
          background: rgba(12,12,14,0.85);
          backdrop-filter: blur(24px);
          border-radius: 4px;
          transition: all 0.4s var(--transition-smooth);
          cursor: pointer;
          animation: floatCard 10s ease-in-out infinite;
        }

        .system-card:hover {
          transform: translateY(-6px);
          border-color: var(--ahos-orange);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .system-card:nth-child(1) {
          top: 10px;
          right: 20px;
          animation-delay: 0s;
        }

        .system-card:nth-child(2) {
          top: 215px;
          left: -20px;
          animation-delay: -3s;
        }

        .system-card:nth-child(3) {
          bottom: 25px;
          right: 55px;
          animation-delay: -6s;
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--ahos-faint);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          margin-bottom: 24px;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--ahos-orange);
          box-shadow: 0 0 8px var(--ahos-orange);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .metric {
          font-size: 48px;
          line-height: 1;
          letter-spacing: -0.07em;
          font-weight: 900;
          margin-bottom: 14px;
        }

        .metric span {
          color: var(--ahos-orange);
          font-size: 32px;
        }

        .mini {
          color: var(--ahos-muted);
          line-height: 1.6;
          font-size: 14px;
          margin-bottom: 24px;
        }

        .bars {
          display: grid;
          gap: 10px;
        }

        .bars i {
          display: block;
          height: 4px;
          border-radius: 2px;
          background: rgba(255,255,255,0.08);
          overflow: hidden;
          position: relative;
        }

        .bars i::before {
          content: "";
          display: block;
          height: 100%;
          width: var(--w);
          background: linear-gradient(90deg, var(--ahos-orange), #ffaa66);
          border-radius: inherit;
          animation: fillBar 1.2s ease-out forwards;
        }

        @keyframes fillBar {
          from { width: 0; }
          to { width: var(--w); }
        }

        /* Enhanced sections */
        .section {
          position: relative;
          padding: 140px 0;
        }

        .section-label {
          color: var(--ahos-orange);
          text-transform: uppercase;
          letter-spacing: 0.25em;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 24px;
          position: relative;
          display: inline-block;
        }

        .section-label::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 32px;
          height: 1px;
          background: var(--ahos-orange);
        }

        .section-title {
          max-width: 820px;
          margin: 0;
          font-size: clamp(42px, 6vw, 88px);
          line-height: 0.94;
          letter-spacing: -0.07em;
          font-weight: 950;
        }

        .section-copy {
          max-width: 650px;
          color: var(--ahos-muted);
          font-size: 18px;
          line-height: 1.7;
          margin-top: 28px;
        }

        /* Enhanced gateway rows */
        .gateway {
          margin-top: 72px;
          border-top: 1px solid var(--ahos-line);
        }

        .gateway-row {
          position: relative;
          display: grid;
          grid-template-columns: 160px 1fr 60px;
          gap: 40px;
          align-items: center;
          padding: 48px 0;
          border-bottom: 1px solid var(--ahos-line);
          text-decoration: none;
          color: #ffffff;
          transition: all 0.4s var(--transition-smooth);
          cursor: pointer;
        }

        .gateway-row::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, var(--ahos-orange-soft), transparent 70%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .gateway-row:hover::before {
          opacity: 1;
        }

        .gateway-label {
          color: var(--ahos-orange);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 12px;
          font-weight: 700;
          position: relative;
          z-index: 2;
        }

        .gateway-title {
          margin: 0 0 10px;
          font-size: clamp(28px, 4vw, 56px);
          letter-spacing: -0.06em;
          line-height: 1;
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
        }

        .gateway-row:hover .gateway-title {
          transform: translateX(8px);
        }

        .gateway-text {
          color: var(--ahos-muted);
          line-height: 1.65;
          max-width: 700px;
          position: relative;
          z-index: 2;
        }

        .arrow {
          position: relative;
          z-index: 2;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid var(--ahos-line);
          display: grid;
          place-items: center;
          font-size: 20px;
          transition: all 0.4s var(--transition-bounce);
          background: rgba(255,255,255,0.02);
        }

        .gateway-row:hover .arrow {
          transform: translateX(8px);
          background: var(--ahos-orange);
          border-color: var(--ahos-orange);
          color: #050505;
        }

        /* Enhanced signals */
        .signals {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 60px;
          justify-content: center;
        }

        .signals span {
          padding: 12px 20px;
          border: 1px solid var(--ahos-line);
          border-radius: 2px;
          color: var(--ahos-muted);
          background: rgba(255,255,255,0.02);
          font-size: 13px;
          font-weight: 500;
          transition: all 0.3s var(--transition-smooth);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .signals span::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,117,31,0.15), transparent);
          transition: left 0.5s ease;
        }

        .signals span:hover {
          transform: translateY(-2px);
          border-color: var(--ahos-orange);
          color: var(--ahos-text);
        }

        .signals span:hover::before {
          left: 100%;
        }

        /* Enhanced statement section */
        .statement {
          padding: 160px 0;
          background: 
            radial-gradient(circle at 50% 50%, var(--ahos-orange-soft), transparent 45%),
            linear-gradient(to bottom, transparent, var(--ahos-bg));
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .statement::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--ahos-orange), transparent);
        }

        .statement h2 {
          margin: 0 auto;
          max-width: 1000px;
          font-size: clamp(48px, 8vw, 126px);
          line-height: 0.88;
          letter-spacing: -0.09em;
          font-weight: 950;
          background: linear-gradient(135deg, #ffffff, var(--ahos-orange));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .statement p {
          max-width: 650px;
          margin: 38px auto 0;
          color: var(--ahos-muted);
          font-size: 18px;
          line-height: 1.7;
        }

        /* Stats section */
        .stats-section {
          padding: 80px 0;
          border-top: 1px solid var(--ahos-line);
          border-bottom: 1px solid var(--ahos-line);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 60px;
          text-align: center;
        }

        .stat-item {
          position: relative;
        }

        .stat-number {
          font-size: 64px;
          font-weight: 950;
          letter-spacing: -0.05em;
          color: var(--ahos-orange);
          margin-bottom: 12px;
        }

        .stat-label {
          color: var(--ahos-muted);
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* Enhanced final CTA */
        .final-cta {
          padding: 140px 0 160px;
        }

        .final-box {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 50px;
          align-items: center;
          background: rgba(255,117,31,0.03);
          padding: 60px;
          border: 1px solid var(--ahos-line);
        }

        .final-box h2 {
          margin: 0;
          font-size: clamp(50px, 8vw, 118px);
          line-height: 0.88;
          letter-spacing: -0.09em;
          font-weight: 950;
        }

        .final-box h2 span {
          color: var(--ahos-orange);
          position: relative;
          display: inline-block;
        }

        /* Scroll animations */
        @keyframes scrollReveal {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .reveal {
          animation: scrollReveal 0.8s var(--transition-smooth) forwards;
        }

        /* Responsive design */
        @media (max-width: 1100px) {
          .hero-layout {
            gap: 50px;
          }
          
          .system-card {
            width: 300px;
          }
        }

        @media (max-width: 980px) {
          .hero-layout,
          .final-box {
            grid-template-columns: 1fr;
          }

          .system {
            min-height: auto;
            border-left: 0;
            padding-left: 0;
            margin-top: 60px;
          }

          .system-card {
            position: relative;
            inset: auto !important;
            width: 100%;
            max-width: 400px;
            margin: 0 auto 20px;
            animation: none;
          }

          .gateway-row {
            grid-template-columns: 1fr 60px;
            gap: 20px;
          }

          .gateway-label {
            grid-column: 1 / -1;
          }

          .final-box {
            text-align: center;
            padding: 40px;
          }
        }

        @media (max-width: 768px) {
          .wrap {
            width: min(100% - 32px, 1280px);
          }

          .hero {
            padding: 120px 0 80px;
          }

          .hero h1 {
            font-size: 54px;
          }

          .stats-grid {
            gap: 40px;
          }

          .stat-number {
            font-size: 48px;
          }

          .section {
            padding: 100px 0;
          }

          .statement {
            padding: 120px 0;
          }

          .final-cta {
            padding: 100px 0;
          }

          .final-box {
            padding: 30px;
          }
        }

        @media (max-width: 480px) {
          .actions {
            flex-direction: column;
          }
          
          .btn {
            width: 100%;
          }
          
          .gateway-row {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .arrow {
            margin: 0 auto;
          }
        }

        /* Reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      </style>`}

      <div 
        className="custom-cursor" 
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />

      <main className="home">
        <section className="hero">
          <div className="wrap hero-layout">
            <div>
              <div className="kicker">
                <span>AHOS / Digital Systems</span>
              </div>

              <h1>
                Engineering digital brands that <span>perform.</span>
              </h1>

              <p className="hero-copy">
                AHOS builds premium websites, platforms, automations, and digital
                infrastructure for businesses that want to look serious, move faster,
                and scale with confidence.
              </p>

              <div className="actions">
                <Link href="/contact" className="btn btn-primary">
                  Start a Project
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  Explore AHOS
                </Link>
              </div>
            </div>

            <div className="system" aria-hidden="true">
              {stats.map((stat, idx) => (
                <div className="system-card" key={idx}>
                  <div className="card-top">
                    <span>{stat.label}</span>
                    <span className="dot" />
                  </div>
                  <div className="metric">
                    {stat.value}
                  </div>
                  <div className="mini">
                    Performance metrics from our latest deployments and client feedback.
                  </div>
                  <div className="bars">
                    <i style={{ "--w": `${stat.metric}%` } as React.CSSProperties} />
                    <i style={{ "--w": `${stat.metric - 5}%` } as React.CSSProperties} />
                    <i style={{ "--w": `${stat.metric - 10}%` } as React.CSSProperties} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-label">AHOS Ecosystem</div>
            <h2 className="section-title">
              One studio. Multiple digital directions.
            </h2>
            <p className="section-copy">
              The homepage stays simple. Each area has its own dedicated space, so
              visitors can quickly move toward what they actually need.
            </p>

            <div className="gateway">
              {gateways.map((item) => (
                <Link href={item.href} className="gateway-row" key={item.label}>
                  <div className="gateway-label">{item.label}</div>
                  <div>
                    <h3 className="gateway-title">{item.title}</h3>
                    <div className="gateway-text">{item.text}</div>
                  </div>
                  <div className="arrow">→</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="wrap">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">150+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Coverage</div>
              </div>
            </div>
          </div>
        </section>

        <section className="statement">
          <div className="wrap">
            <h2>
              Not just websites. Digital infrastructure for brands that want more.
            </h2>
            <p>
              AHOS combines design, technology, automation, and strategy to create
              digital products that feel premium and work with purpose.
            </p>

            <div className="signals">
              {signals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="wrap final-box">
            <div>
              <div className="section-label">Start With AHOS</div>
              <h2>
                Build something <span>serious.</span>
              </h2>
              <p className="section-copy" style={{ marginTop: 20 }}>
                Ready to transform your digital presence? Let's create something extraordinary together.
              </p>
            </div>

            <Link href="/contact" className="btn btn-primary">
              Contact AHOS
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

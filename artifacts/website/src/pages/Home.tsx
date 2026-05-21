import { Link } from "wouter";
import { Footer } from "../components/Footer";

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

export default function Home() {
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
        }

        .home {
          min-height: 100vh;
          background: var(--ahos-bg);
          color: var(--ahos-text);
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow: hidden;
        }

        .home * {
          box-sizing: border-box;
        }

        .wrap {
          width: min(1180px, calc(100% - 44px));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 150px 0 100px;
          isolation: isolate;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: -20%;
          background:
            radial-gradient(circle at 78% 28%, rgba(255,117,31,.18), transparent 28%),
            radial-gradient(circle at 18% 76%, rgba(255,117,31,.08), transparent 28%),
            linear-gradient(to bottom, transparent 0%, #050505 92%);
          z-index: -3;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px);
          background-size: 100% 86px;
          mask-image: linear-gradient(to bottom, transparent, black 18%, black 62%, transparent);
          opacity: .35;
          z-index: -2;
        }

        .hero-layout {
          display: grid;
          grid-template-columns: 1.08fr .92fr;
          gap: 72px;
          align-items: center;
        }

        .kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: var(--ahos-faint);
          text-transform: uppercase;
          letter-spacing: .22em;
          font-size: 11px;
          font-weight: 800;
          margin-bottom: 32px;
        }

        .kicker::before {
          content: "";
          width: 36px;
          height: 1px;
          background: var(--ahos-orange);
          box-shadow: 0 0 22px var(--ahos-orange);
        }

        .hero h1 {
          margin: 0;
          max-width: 780px;
          font-size: clamp(58px, 9vw, 124px);
          line-height: .86;
          letter-spacing: -.085em;
          font-weight: 950;
        }

        .hero h1 span {
          color: var(--ahos-orange);
        }

        .hero-copy {
          max-width: 610px;
          margin-top: 32px;
          color: var(--ahos-muted);
          font-size: 18px;
          line-height: 1.8;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 42px;
        }

        .btn {
          min-height: 54px;
          padding: 0 28px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .13em;
          text-transform: uppercase;
          transition: transform .28s ease, border-color .28s ease, background .28s ease;
        }

        .btn-primary {
          color: #050505;
          background: #fff;
        }

        .btn-secondary {
          color: #fff;
          border: 1px solid var(--ahos-line);
          background: rgba(255,255,255,.035);
        }

        .btn:hover {
          transform: translateY(-3px);
        }

        .system {
          position: relative;
          min-height: 560px;
          border-left: 1px solid var(--ahos-line);
          padding-left: 34px;
        }

        .system::before {
          content: "";
          position: absolute;
          left: -1px;
          top: 8%;
          width: 1px;
          height: 28%;
          background: var(--ahos-orange);
          box-shadow: 0 0 34px var(--ahos-orange);
          animation: scan 5s ease-in-out infinite;
        }

        @keyframes scan {
          0%, 100% { transform: translateY(0); opacity: .4; }
          50% { transform: translateY(240px); opacity: 1; }
        }

        .system-card {
          position: absolute;
          width: 320px;
          padding: 22px;
          border: 1px solid var(--ahos-line);
          background: rgba(12,12,14,.72);
          backdrop-filter: blur(22px);
          border-radius: 24px;
          box-shadow: 0 40px 120px rgba(0,0,0,.45);
          animation: float 7s ease-in-out infinite;
        }

        .system-card:nth-child(1) {
          top: 10px;
          right: 20px;
        }

        .system-card:nth-child(2) {
          top: 205px;
          left: 0;
          animation-delay: -2s;
        }

        .system-card:nth-child(3) {
          bottom: 25px;
          right: 55px;
          animation-delay: -4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--ahos-faint);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .16em;
          margin-bottom: 22px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--ahos-orange);
          box-shadow: 0 0 18px var(--ahos-orange);
        }

        .metric {
          font-size: 42px;
          line-height: 1;
          letter-spacing: -.06em;
          font-weight: 900;
          margin-bottom: 10px;
        }

        .metric span {
          color: var(--ahos-orange);
        }

        .mini {
          color: var(--ahos-muted);
          line-height: 1.6;
          font-size: 14px;
        }

        .bars {
          display: grid;
          gap: 8px;
          margin-top: 20px;
        }

        .bars i {
          display: block;
          height: 7px;
          border-radius: 999px;
          background: rgba(255,255,255,.08);
          overflow: hidden;
        }

        .bars i::before {
          content: "";
          display: block;
          height: 100%;
          width: var(--w);
          background: linear-gradient(90deg, var(--ahos-orange), #fff);
          border-radius: inherit;
        }

        .section {
          position: relative;
          padding: 110px 0;
        }

        .section-label {
          color: var(--ahos-orange);
          text-transform: uppercase;
          letter-spacing: .22em;
          font-size: 11px;
          font-weight: 900;
          margin-bottom: 22px;
        }

        .section-title {
          max-width: 820px;
          margin: 0;
          font-size: clamp(42px, 6vw, 82px);
          line-height: .94;
          letter-spacing: -.07em;
          font-weight: 950;
        }

        .section-copy {
          max-width: 650px;
          color: var(--ahos-muted);
          font-size: 17px;
          line-height: 1.8;
          margin-top: 24px;
        }

        .gateway {
          margin-top: 62px;
          border-top: 1px solid var(--ahos-line);
        }

        .gateway-row {
          position: relative;
          display: grid;
          grid-template-columns: 180px 1fr 42px;
          gap: 34px;
          align-items: center;
          padding: 38px 0;
          border-bottom: 1px solid var(--ahos-line);
          text-decoration: none;
          color: #fff;
          overflow: hidden;
        }

        .gateway-row::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255,117,31,.12), transparent 65%);
          opacity: 0;
          transition: opacity .35s ease;
        }

        .gateway-row:hover::before {
          opacity: 1;
        }

        .gateway-label {
          color: var(--ahos-orange);
          text-transform: uppercase;
          letter-spacing: .18em;
          font-size: 11px;
          font-weight: 900;
          position: relative;
          z-index: 2;
        }

        .gateway-title {
          margin: 0 0 8px;
          font-size: clamp(28px, 4vw, 52px);
          letter-spacing: -.055em;
          line-height: 1;
          position: relative;
          z-index: 2;
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
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid var(--ahos-line);
          display: grid;
          place-items: center;
          transition: transform .3s ease, background .3s ease;
        }

        .gateway-row:hover .arrow {
          transform: translateX(8px);
          background: var(--ahos-orange);
          color: #050505;
        }

        .signals {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 52px;
        }

        .signals span {
          padding: 13px 16px;
          border: 1px solid var(--ahos-line);
          border-radius: 999px;
          color: var(--ahos-muted);
          background: rgba(255,255,255,.025);
          font-size: 13px;
        }

        .statement {
          padding: 140px 0;
          background:
            radial-gradient(circle at 50% 50%, rgba(255,117,31,.13), transparent 38%);
          text-align: center;
        }

        .statement h2 {
          margin: 0 auto;
          max-width: 1000px;
          font-size: clamp(48px, 8vw, 116px);
          line-height: .88;
          letter-spacing: -.085em;
          font-weight: 950;
        }

        .statement p {
          max-width: 620px;
          margin: 34px auto 0;
          color: var(--ahos-muted);
          font-size: 18px;
          line-height: 1.8;
        }

        .final-cta {
          padding: 120px 0 140px;
        }

        .final-box {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 40px;
          align-items: end;
          border-top: 1px solid var(--ahos-line);
          padding-top: 54px;
        }

        .final-box h2 {
          margin: 0;
          font-size: clamp(50px, 8vw, 108px);
          line-height: .88;
          letter-spacing: -.08em;
          font-weight: 950;
        }

        .final-box h2 span {
          color: var(--ahos-orange);
        }

        @media (max-width: 980px) {
          .hero-layout,
          .final-box {
            grid-template-columns: 1fr;
          }

          .system {
            min-height: 520px;
            border-left: 0;
            padding-left: 0;
          }

          .gateway-row {
            grid-template-columns: 1fr 42px;
          }

          .gateway-label {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 640px) {
          .wrap {
            width: min(100% - 30px, 1180px);
          }

          .hero {
            padding: 125px 0 70px;
          }

          .hero h1 {
            font-size: 54px;
          }

          .system {
            min-height: auto;
            display: grid;
            gap: 16px;
          }

          .system-card {
            position: relative;
            inset: auto !important;
            width: 100%;
            animation: none;
          }

          .section {
            padding: 82px 0;
          }

          .statement {
            padding: 100px 0;
          }

          .final-cta {
            padding: 90px 0 110px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .system::before,
          .system-card {
            animation: none !important;
          }
        }
      `}</style>

      <main className="home">
        <section className="hero">
          <div className="wrap hero-layout">
            <div>
              <div className="kicker">AHOS / Digital Systems</div>

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
              <div className="system-card">
                <div className="card-top">
                  <span>Launch System</span>
                  <span className="dot" />
                </div>
                <div className="metric">
                  98<span>%</span>
                </div>
                <div className="mini">
                  Performance-focused builds with responsive structure and clean deployment.
                </div>
                <div className="bars">
                  <i style={{ "--w": "91%" } as React.CSSProperties} />
                  <i style={{ "--w": "76%" } as React.CSSProperties} />
                  <i style={{ "--w": "84%" } as React.CSSProperties} />
                </div>
              </div>

              <div className="system-card">
                <div className="card-top">
                  <span>Automation Layer</span>
                  <span className="dot" />
                </div>
                <div className="metric">
                  AI<span>+</span>
                </div>
                <div className="mini">
                  Workflows designed to reduce repetitive tasks and support daily operations.
                </div>
                <div className="bars">
                  <i style={{ "--w": "68%" } as React.CSSProperties} />
                  <i style={{ "--w": "88%" } as React.CSSProperties} />
                  <i style={{ "--w": "57%" } as React.CSSProperties} />
                </div>
              </div>

              <div className="system-card">
                <div className="card-top">
                  <span>Brand Engine</span>
                  <span className="dot" />
                </div>
                <div className="metric">
                  24<span>/7</span>
                </div>
                <div className="mini">
                  Digital presence built to stay polished, clear, and reliable across channels.
                </div>
                <div className="bars">
                  <i style={{ "--w": "79%" } as React.CSSProperties} />
                  <i style={{ "--w": "94%" } as React.CSSProperties} />
                  <i style={{ "--w": "72%" } as React.CSSProperties} />
                </div>
              </div>
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

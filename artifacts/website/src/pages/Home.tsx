import { Link } from "wouter";
import { Footer } from "../components/Footer";

const services = [
  ["Web Development", "Websites that look premium and convert visitors into clients."],
  ["E-commerce", "Stores with clean product flows, payments, and launch support."],
  ["AI Automation", "Tools that remove repetitive work and speed up operations."],
  ["Custom Systems", "Dashboards, platforms, and internal tools built around your workflow."],
  ["Branding", "Visual systems that make your business look sharp everywhere."],
  ["Web3", "Modern interfaces for crypto, DeFi, and blockchain products."],
];

const modules = [
  ["Website System", "98%", "Optimized"],
  ["E-commerce Flow", "Ready", "Payments"],
  ["AI Automation", "Active", "Workflows"],
  ["Analytics Layer", "Live", "Tracking"],
];

const process = [
  "Strategy",
  "Interface",
  "Development",
  "Launch",
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
          z-index: 2;
        }

        .ahos-hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 150px 0 90px;
          background:
            radial-gradient(circle at 75% 22%, rgba(255,117,31,.22), transparent 32%),
            radial-gradient(circle at 16% 78%, rgba(255,117,31,.09), transparent 30%),
            #05050a;
        }

        .ahos-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
          background-size: 76px 76px;
          mask-image: radial-gradient(circle at 60% 40%, black, transparent 72%);
          animation: gridMove 18s linear infinite;
        }

        .ahos-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 60%, #05050a);
        }

        @keyframes gridMove {
          from { background-position: 0 0; }
          to { background-position: 76px 76px; }
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 70px;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 15px;
          border-radius: 999px;
          border: 1px solid rgba(255,117,31,.34);
          background: rgba(255,117,31,.08);
          color: #ff751f;
          font-size: 12px;
          letter-spacing: .13em;
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .badge i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff751f;
          box-shadow: 0 0 18px rgba(255,117,31,.95);
        }

        h1 {
          margin: 0;
          max-width: 850px;
          font-size: clamp(54px, 7vw, 104px);
          line-height: .92;
          letter-spacing: -.075em;
        }

        h1 span {
          color: #ff751f;
          text-shadow: 0 0 50px rgba(255,117,31,.35);
        }

        .hero-text {
          max-width: 640px;
          margin: 30px 0 0;
          color: rgba(255,255,255,.65);
          font-size: 18px;
          line-height: 1.75;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 40px;
        }

        .btn {
          min-height: 54px;
          padding: 0 30px;
          border-radius: 15px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: .08em;
          font-size: 13px;
          font-weight: 800;
          transition: .25s ease;
        }

        .btn.primary {
          color: #fff;
          background: linear-gradient(135deg, #ff9448, #ff5c00);
          box-shadow: 0 24px 70px rgba(255,117,31,.32);
        }

        .btn.secondary {
          color: rgba(255,255,255,.82);
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,255,255,.14);
        }

        .btn:hover {
          transform: translateY(-3px);
        }

        .proof-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 46px;
        }

        .proof {
          padding: 13px 15px;
          border-radius: 16px;
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,255,255,.09);
          color: rgba(255,255,255,.62);
          font-size: 13px;
        }

        .proof strong {
          color: #fff;
        }

        .os-shell {
          position: relative;
          padding: 18px;
          border-radius: 38px;
          background:
            linear-gradient(145deg, rgba(255,255,255,.18), rgba(255,255,255,.035)),
            rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.16);
          box-shadow:
            0 70px 160px rgba(0,0,0,.78),
            0 0 80px rgba(255,117,31,.16);
          backdrop-filter: blur(26px);
          animation: floatPanel 6s ease-in-out infinite;
        }

        @keyframes floatPanel {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .os-shell::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 38px;
          background: linear-gradient(135deg, rgba(255,117,31,.38), transparent 35%, rgba(255,255,255,.12));
          opacity: .55;
          pointer-events: none;
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          padding: 1px;
        }

        .os {
          border-radius: 28px;
          overflow: hidden;
          background: #090910;
          border: 1px solid rgba(255,255,255,.1);
        }

        .os-top {
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 18px;
          border-bottom: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.035);
        }

        .dots {
          display: flex;
          gap: 7px;
        }

        .dots span {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: rgba(255,255,255,.22);
        }

        .os-name {
          color: rgba(255,255,255,.58);
          font-size: 12px;
          letter-spacing: .14em;
          text-transform: uppercase;
        }

        .live {
          color: #ff751f;
          font-size: 12px;
        }

        .os-body {
          padding: 22px;
        }

        .main-module {
          min-height: 190px;
          border-radius: 24px;
          padding: 22px;
          background:
            radial-gradient(circle at 78% 25%, rgba(255,117,31,.28), transparent 32%),
            linear-gradient(135deg, rgba(255,117,31,.12), rgba(255,255,255,.04));
          border: 1px solid rgba(255,255,255,.1);
          position: relative;
          overflow: hidden;
        }

        .main-module::after {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          right: -50px;
          bottom: -70px;
          border-radius: 50%;
          background: rgba(255,117,31,.22);
          filter: blur(35px);
        }

        .main-module small {
          color: #ff751f;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-size: 11px;
        }

        .main-module h3 {
          margin: 16px 0 12px;
          max-width: 340px;
          font-size: 34px;
          line-height: 1;
          letter-spacing: -.055em;
        }

        .main-module p {
          max-width: 370px;
          margin: 0;
          color: rgba(255,255,255,.58);
          line-height: 1.6;
          font-size: 14px;
        }

        .module-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 12px;
          margin-top: 14px;
        }

        .module {
          padding: 16px;
          border-radius: 18px;
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,255,255,.08);
        }

        .module-top {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          color: rgba(255,255,255,.48);
          font-size: 12px;
          margin-bottom: 14px;
        }

        .module strong {
          display: block;
          color: #fff;
          font-size: 20px;
          margin-bottom: 8px;
        }

        .bar {
          height: 6px;
          border-radius: 999px;
          background: rgba(255,255,255,.08);
          overflow: hidden;
        }

        .bar i {
          display: block;
          width: 78%;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #ff751f, #ffb071);
          animation: load 2.2s ease-in-out infinite alternate;
        }

        @keyframes load {
          from { width: 52%; }
          to { width: 92%; }
        }

        .section {
          padding: 115px 0;
          position: relative;
        }

        .section-head {
          max-width: 760px;
          margin-bottom: 52px;
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
          font-size: clamp(38px, 5vw, 68px);
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
          grid-template-columns: repeat(3,1fr);
          gap: 18px;
        }

        .service-card {
          min-height: 255px;
          padding: 26px;
          border-radius: 30px;
          background:
            linear-gradient(145deg, rgba(255,255,255,.075), rgba(255,255,255,.025));
          border: 1px solid rgba(255,255,255,.09);
          transition: .25s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card::after {
          content: "";
          position: absolute;
          inset: auto -30px -60px auto;
          width: 160px;
          height: 160px;
          background: rgba(255,117,31,.13);
          filter: blur(45px);
          opacity: 0;
          transition: .25s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255,117,31,.36);
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
          margin: 20px 0 12px;
          font-size: 26px;
          line-height: 1.05;
          letter-spacing: -.045em;
        }

        .service-card p {
          color: rgba(255,255,255,.57);
          line-height: 1.7;
          margin: 0;
        }

        .split {
          display: grid;
          grid-template-columns: .95fr 1.05fr;
          gap: 60px;
          align-items: center;
        }

        .capability-list {
          display: grid;
          gap: 14px;
        }

        .capability {
          padding: 22px;
          border-radius: 24px;
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,255,255,.09);
          display: flex;
          gap: 18px;
          align-items: flex-start;
        }

        .capability span {
          color: #ff751f;
          font-weight: 900;
        }

        .capability h3 {
          margin: 0 0 7px;
          font-size: 20px;
        }

        .capability p {
          margin: 0;
          color: rgba(255,255,255,.55);
          line-height: 1.6;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 16px;
        }

        .process-card {
          padding: 25px;
          border-radius: 26px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.09);
        }

        .process-card strong {
          color: #ff751f;
          display: block;
          margin-bottom: 26px;
        }

        .process-card h3 {
          margin: 0;
          font-size: 22px;
          letter-spacing: -.035em;
        }

        .cta {
          margin-top: 80px;
          padding: 52px;
          border-radius: 38px;
          background:
            radial-gradient(circle at 82% 20%, rgba(255,117,31,.3), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.105), rgba(255,255,255,.035));
          border: 1px solid rgba(255,255,255,.13);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
        }

        .cta p {
          max-width: 580px;
          color: rgba(255,255,255,.58);
          line-height: 1.7;
        }

        @media (max-width: 980px) {
          .hero-grid,
          .service-grid,
          .split,
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
            padding-top: 125px;
          }

          h1 {
            font-size: 46px;
          }

          .module-grid {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 85px 0;
          }

          .cta {
            padding: 30px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ahos-hero::before,
          .os-shell,
          .bar i {
            animation: none !important;
          }
        }
      `}</style>

      <main className="ahos-home">
        <section className="ahos-hero">
          <div className="ahos-wrap hero-grid">
            <div>
              <div className="badge">
                <i />
                Digital Solutions Studio
              </div>

              <h1>
                We build the <span>digital layer</span> your business runs on.
              </h1>

              <p className="hero-text">
                AHOS designs and develops premium websites, e-commerce platforms,
                AI automations, and custom software systems for businesses ready to
                look serious, move faster, and scale properly.
              </p>

              <div className="actions">
                <Link href="/contact" className="btn primary">
                  Start a Project
                </Link>
                <Link href="/services" className="btn secondary">
                  Explore Services
                </Link>
              </div>

              <div className="proof-row">
                <div className="proof"><strong>Strategy</strong> before design</div>
                <div className="proof"><strong>Premium</strong> interfaces</div>
                <div className="proof"><strong>Launch</strong> support included</div>
              </div>
            </div>

            <div className="os-shell">
              <div className="os">
                <div className="os-top">
                  <div className="dots">
                    <span /><span /><span />
                  </div>
                  <div className="os-name">AHOS Operating System</div>
                  <div className="live">● LIVE</div>
                </div>

                <div className="os-body">
                  <div className="main-module">
                    <small>Project Command Center</small>
                    <h3>From idea to live system.</h3>
                    <p>
                      Strategy, design, development, automation, analytics, and launch
                      support connected in one clean workflow.
                    </p>
                  </div>

                  <div className="module-grid">
                    {modules.map(([name, value, tag]) => (
                      <div className="module" key={name}>
                        <div className="module-top">
                          <span>{name}</span>
                          <span>{tag}</span>
                        </div>
                        <strong>{value}</strong>
                        <div className="bar"><i /></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="ahos-wrap">
            <div className="section-head">
              <div className="eyebrow">What We Build</div>
              <h2>Software, websites, and systems that feel expensive.</h2>
              <p>
                We create the kind of digital presence that makes a business look
                established, trustworthy, and ready to grow.
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
          <div className="ahos-wrap split">
            <div className="section-head">
              <div className="eyebrow">Why AHOS</div>
              <h2>Not just pretty pages. Real digital infrastructure.</h2>
              <p>
                A serious website should do more than look nice. It should explain
                your offer, guide users, capture leads, support operations, and give
                your business a stronger digital engine.
              </p>
            </div>

            <div className="capability-list">
              <div className="capability">
                <span>01</span>
                <div>
                  <h3>Conversion-focused structure</h3>
                  <p>Every section has a purpose: trust, clarity, action, and sales.</p>
                </div>
              </div>
              <div className="capability">
                <span>02</span>
                <div>
                  <h3>Premium visual direction</h3>
                  <p>Dark, sharp, modern interfaces that make the brand feel serious.</p>
                </div>
              </div>
              <div className="capability">
                <span>03</span>
                <div>
                  <h3>Systems beyond the website</h3>
                  <p>Automation, dashboards, workflows, and tools built around growth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="ahos-wrap">
            <div className="section-head">
              <div className="eyebrow">Process</div>
              <h2>A clean workflow from first idea to final launch.</h2>
            </div>

            <div className="process-grid">
              {process.map((item, index) => (
                <div className="process-card" key={item}>
                  <strong>0{index + 1}</strong>
                  <h3>{item}</h3>
                </div>
              ))}
            </div>

            <div className="cta">
              <div>
                <div className="eyebrow">Start With AHOS</div>
                <h2>Ready to build something that actually looks serious?</h2>
                <p>
                  Bring the idea. We’ll help shape the strategy, design the interface,
                  build the system, and launch it properly.
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

import { Link } from "wouter";
import { Footer } from "../components/Footer";

const services = [
  {
    label: "Web Development",
    title: "Premium websites built to convert",
    text: "Fast, responsive, and polished websites designed around your business goals.",
  },
  {
    label: "E-commerce",
    title: "Online stores ready to sell",
    text: "Product pages, checkout flows, payment setup, and launch support.",
  },
  {
    label: "AI Automation",
    title: "Smarter workflows for serious teams",
    text: "Automation systems that reduce manual work and help businesses move faster.",
  },
  {
    label: "Branding",
    title: "Identity that feels sharp and consistent",
    text: "Visual direction, brand systems, and digital presence that look professional everywhere.",
  },
  {
    label: "Web3",
    title: "Modern blockchain experiences",
    text: "Clean interfaces and digital products for crypto, DeFi, and Web3 projects.",
  },
  {
    label: "Custom Systems",
    title: "Software built around your workflow",
    text: "Dashboards, internal platforms, and tools made for how your business actually works.",
  },
];

const process = [
  "Understand the business",
  "Design the experience",
  "Build the product",
  "Launch and improve",
];

export default function Home() {
  return (
    <>
      <style>{`
        .home {
          background: #06060b;
          color: white;
          overflow: hidden;
        }

        .hero {
          min-height: 100vh;
          padding: 150px 28px 90px;
          position: relative;
          background:
            radial-gradient(circle at 75% 20%, rgba(255,117,31,.2), transparent 34%),
            radial-gradient(circle at 20% 75%, rgba(255,117,31,.08), transparent 32%),
            #06060b;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(circle at center, black, transparent 72%);
        }

        .wrap {
          position: relative;
          z-index: 2;
          max-width: 1240px;
          margin: 0 auto;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 80px;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 15px;
          border-radius: 999px;
          border: 1px solid rgba(255,117,31,.3);
          background: rgba(255,117,31,.08);
          color: #ff751f;
          font-size: 12px;
          letter-spacing: .12em;
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .badge span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff751f;
          box-shadow: 0 0 18px rgba(255,117,31,.9);
        }

        h1 {
          max-width: 820px;
          margin: 0;
          font-size: clamp(52px, 7vw, 96px);
          line-height: .96;
          letter-spacing: -.07em;
        }

        h1 strong {
          color: #ff751f;
        }

        .hero p {
          max-width: 620px;
          margin-top: 28px;
          color: rgba(255,255,255,.64);
          font-size: 18px;
          line-height: 1.75;
        }

        .actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 38px;
        }

        .btn {
          min-height: 52px;
          padding: 0 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          transition: .25s ease;
        }

        .btn.primary {
          color: #fff;
          background: linear-gradient(135deg, #ff9348, #ff5c00);
          box-shadow: 0 20px 60px rgba(255,117,31,.28);
        }

        .btn.secondary {
          color: rgba(255,255,255,.82);
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,255,255,.13);
        }

        .btn:hover {
          transform: translateY(-3px);
        }

        .hero-panel {
          padding: 28px;
          border-radius: 34px;
          background: linear-gradient(145deg, rgba(255,255,255,.11), rgba(255,255,255,.035));
          border: 1px solid rgba(255,255,255,.13);
          box-shadow: 0 50px 140px rgba(0,0,0,.65);
          backdrop-filter: blur(24px);
        }

        .panel-top {
          display: flex;
          justify-content: space-between;
          color: rgba(255,255,255,.55);
          text-transform: uppercase;
          letter-spacing: .13em;
          font-size: 12px;
          margin-bottom: 24px;
        }

        .panel-card {
          padding: 22px;
          border-radius: 24px;
          background: rgba(0,0,0,.28);
          border: 1px solid rgba(255,255,255,.08);
          margin-bottom: 14px;
        }

        .panel-card small {
          color: #ff751f;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-size: 11px;
        }

        .panel-card h3 {
          margin: 10px 0 8px;
          font-size: 22px;
          letter-spacing: -.03em;
        }

        .panel-card p {
          margin: 0;
          color: rgba(255,255,255,.55);
          font-size: 14px;
          line-height: 1.6;
        }

        .section {
          padding: 110px 28px;
        }

        .section-head {
          max-width: 720px;
          margin-bottom: 48px;
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
          font-size: clamp(36px, 5vw, 64px);
          line-height: 1;
          letter-spacing: -.05em;
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
          min-height: 250px;
          padding: 26px;
          border-radius: 28px;
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,255,255,.09);
          transition: .25s ease;
        }

        .service-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,117,31,.35);
          background: rgba(255,117,31,.06);
        }

        .service-card small {
          color: #ff751f;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-size: 11px;
        }

        .service-card h3 {
          margin: 18px 0 12px;
          font-size: 25px;
          letter-spacing: -.04em;
        }

        .service-card p {
          color: rgba(255,255,255,.56);
          line-height: 1.7;
          margin: 0;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .process-card {
          padding: 24px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,.09);
          background: rgba(255,255,255,.04);
        }

        .process-card strong {
          color: #ff751f;
          display: block;
          margin-bottom: 18px;
        }

        .process-card h3 {
          margin: 0;
          font-size: 20px;
        }

        .cta {
          margin: 70px auto 0;
          padding: 46px;
          border-radius: 34px;
          background:
            radial-gradient(circle at 80% 20%, rgba(255,117,31,.22), transparent 32%),
            linear-gradient(135deg, rgba(255,255,255,.09), rgba(255,255,255,.035));
          border: 1px solid rgba(255,255,255,.12);
          display: flex;
          justify-content: space-between;
          gap: 30px;
          align-items: center;
        }

        .cta h2 {
          max-width: 680px;
        }

        .cta p {
          color: rgba(255,255,255,.58);
          line-height: 1.7;
          max-width: 560px;
        }

        @media (max-width: 980px) {
          .hero-grid,
          .service-grid,
          .process-grid {
            grid-template-columns: 1fr;
          }

          .cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 600px) {
          .hero {
            padding-top: 125px;
          }

          h1 {
            font-size: 46px;
          }

          .section {
            padding: 80px 20px;
          }

          .cta {
            padding: 28px;
          }
        }
      `}</style>

      <main className="home">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="badge">
                <span />
                Digital Solutions Studio
              </div>

              <h1>
                Digital products built to <strong>look sharp</strong>, work fast,
                and scale.
              </h1>

              <p>
                AHOS builds premium websites, e-commerce platforms, branding systems,
                AI automations, and custom digital tools for businesses that need more
                than a basic online presence.
              </p>

              <div className="actions">
                <Link href="/contact" className="btn primary">
                  Start a Project
                </Link>
                <Link href="/services" className="btn secondary">
                  View Services
                </Link>
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-top">
                <span>AHOS Studio</span>
                <span style={{ color: "#ff751f" }}>● Live</span>
              </div>

              <div className="panel-card">
                <small>Strategy</small>
                <h3>We understand your business first.</h3>
                <p>
                  Before designing anything, we define the goal, audience, offer,
                  and digital structure.
                </p>
              </div>

              <div className="panel-card">
                <small>Design & Build</small>
                <h3>Clean interfaces. Strong execution.</h3>
                <p>
                  We turn ideas into polished, responsive, and functional digital
                  products.
                </p>
              </div>

              <div className="panel-card">
                <small>Launch</small>
                <h3>Built to go live, not stay in drafts.</h3>
                <p>
                  We help with deployment, optimization, and support after launch.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What We Build</div>
              <h2>Everything your business needs to look serious online.</h2>
              <p>
                From websites to automation systems, AHOS creates digital assets that
                are designed to be useful, scalable, and visually premium.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <div className="service-card" key={service.label}>
                  <small>{service.label}</small>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Our Process</div>
              <h2>A clear process from idea to launch.</h2>
              <p>
                No random design. No messy execution. We follow a simple workflow that
                keeps the project focused from the first call to the final launch.
              </p>
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
                <h2>Have an idea? Let’s turn it into a real digital product.</h2>
                <p>
                  Whether you need a website, store, brand system, or automation tool,
                  we can help you structure it, build it, and launch it properly.
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

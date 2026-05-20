import { useEffect, useState } from "react";
import { Link } from "wouter";

const services = [
  {
    name: "Web Development",
    title: "High-end websites built to convert.",
    desc: "Custom websites with sharp visuals, clean structure, fast loading, responsive layouts, and strong calls to action.",
    items: ["Landing pages", "Corporate websites", "Performance optimization"],
  },
  {
    name: "eCommerce",
    title: "Online stores that feel premium.",
    desc: "Complete store setup with product pages, checkout flow, payment options, mobile-first design, and launch support.",
    items: ["Product catalog", "Payment setup", "Order flow"],
  },
  {
    name: "AI Automation",
    title: "Systems that reduce manual work.",
    desc: "AI-powered workflows for lead handling, client communication, task automation, and business operations.",
    items: ["AI assistants", "Lead workflows", "Integrations"],
  },
  {
    name: "Brand Systems",
    title: "A digital presence people trust.",
    desc: "A consistent brand experience across your website, visuals, messaging, and customer touchpoints.",
    items: ["Visual direction", "Messaging", "Design system"],
  },
];

export function HeroPhone() {
  const [active, setActive] = useState(0);
  const selected = services[active];

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % services.length);
    }, 4500);

    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <style>{`
        .hp {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at 78% 35%, rgba(255,117,31,0.13), transparent 32%),
            radial-gradient(circle at 18% 80%, rgba(255,117,31,0.06), transparent 30%),
            linear-gradient(180deg, #08080f 0%, #050507 100%);
          color: #fff;
          padding: 155px 42px 105px;
        }

        .hp::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at center, transparent 25%, rgba(0,0,0,0.62) 100%);
          pointer-events: none;
        }

        .hp-inner {
          position: relative;
          z-index: 2;
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 78px;
          align-items: center;
        }

        .hp-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255,117,31,0.28);
          background: rgba(255,117,31,0.06);
          color: #ff751f;
          font-size: 11px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          margin-bottom: 28px;
          backdrop-filter: blur(18px);
        }

        .hp-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff751f;
          box-shadow: 0 0 14px rgba(255,117,31,0.85);
        }

        .hp-title {
          max-width: 740px;
          margin: 0;
          font-size: clamp(54px, 6.6vw, 92px);
          line-height: 0.95;
          letter-spacing: -0.075em;
          text-shadow: 0 24px 90px rgba(0,0,0,0.75);
        }

        .hp-title span {
          color: #ff751f;
          text-shadow:
            0 0 30px rgba(255,117,31,0.38),
            0 0 80px rgba(255,117,31,0.12);
        }

        .hp-sub {
          max-width: 590px;
          margin-top: 30px;
          color: rgba(255,255,255,0.64);
          font-size: 17px;
          line-height: 1.85;
        }

        .hp-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 38px;
        }

        .hp-btn-primary,
        .hp-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 32px;
          border-radius: 14px;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0.09em;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .hp-btn-primary {
          background: linear-gradient(135deg, #ff9448, #ff5c00);
          color: #fff;
          box-shadow: 0 0 34px rgba(255,117,31,0.28);
        }

        .hp-btn-secondary {
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.82);
          backdrop-filter: blur(16px);
        }

        .hp-btn-primary:hover,
        .hp-btn-secondary:hover {
          transform: translateY(-3px);
        }

        .hp-service-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 34px;
        }

        .hp-service-tab {
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.035);
          color: rgba(255,255,255,0.45);
          border-radius: 999px;
          padding: 9px 14px;
          font-size: 10px;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          transition: 0.25s ease;
        }

        .hp-service-tab:hover,
        .hp-service-tab.active {
          color: #ff751f;
          border-color: rgba(255,117,31,0.45);
          background: rgba(255,117,31,0.09);
        }

        .hp-system {
          position: relative;
          min-height: 620px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hp-system-glow {
          position: absolute;
          width: 560px;
          height: 560px;
          border-radius: 999px;
          background: rgba(255,117,31,0.10);
          filter: blur(95px);
        }

        .hp-panel {
          position: relative;
          z-index: 2;
          width: min(100%, 520px);
          border-radius: 34px;
          padding: 24px;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.035));
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(28px);
          box-shadow:
            0 60px 150px rgba(0,0,0,0.78),
            inset 0 1px 0 rgba(255,255,255,0.12);
          animation: hpFloat 7s ease-in-out infinite;
        }

        @keyframes hpFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .hp-panel-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 26px;
        }

        .hp-panel-label {
          color: #ff751f;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .hp-panel-status {
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255,117,31,0.09);
          border: 1px solid rgba(255,117,31,0.18);
          color: #ff751f;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .hp-main-card {
          min-height: 360px;
          border-radius: 28px;
          padding: 28px;
          background:
            radial-gradient(circle at 82% 20%, rgba(255,117,31,0.15), transparent 28%),
            linear-gradient(145deg, rgba(255,255,255,0.095), rgba(255,255,255,0.026));
          border: 1px solid rgba(255,255,255,0.11);
          animation: hpContent 0.38s ease;
        }

        @keyframes hpContent {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hp-main-eyebrow {
          color: rgba(255,255,255,0.42);
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .hp-main-title {
          max-width: 380px;
          font-size: 34px;
          line-height: 1.05;
          letter-spacing: -0.055em;
          margin-bottom: 18px;
          color: #fff;
        }

        .hp-main-desc {
          max-width: 390px;
          color: rgba(255,255,255,0.62);
          font-size: 14px;
          line-height: 1.75;
          margin-bottom: 24px;
        }

        .hp-lines {
          display: grid;
          gap: 10px;
          margin-bottom: 26px;
        }

        .hp-line {
          height: 9px;
          border-radius: 999px;
          background: rgba(255,255,255,0.10);
        }

        .hp-line.one { width: 86%; }
        .hp-line.two { width: 64%; }
        .hp-line.three {
          width: 76%;
          background: #ff751f;
          box-shadow: 0 0 16px rgba(255,117,31,0.34);
        }

        .hp-item-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }

        .hp-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 14px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.035);
          color: rgba(255,255,255,0.76);
          font-size: 13px;
        }

        .hp-item-mark {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #ff751f;
          box-shadow: 0 0 10px rgba(255,117,31,0.6);
          flex-shrink: 0;
        }

        .hp-panel-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          margin-top: 18px;
          padding: 16px 18px;
          border-radius: 22px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
        }

        .hp-footer-copy strong {
          display: block;
          font-size: 13px;
          color: #fff;
          margin-bottom: 4px;
        }

        .hp-footer-copy span {
          color: rgba(255,255,255,0.46);
          font-size: 11px;
        }

        .hp-footer-pill {
          flex-shrink: 0;
          padding: 10px 13px;
          border-radius: 999px;
          background: #ff751f;
          color: #fff;
          font-size: 11px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
        }

        @media (max-width: 980px) {
          .hp {
            padding: 125px 22px 80px;
          }

          .hp-inner {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 52px;
          }

          .hp-title,
          .hp-sub {
            margin-left: auto;
            margin-right: auto;
          }

          .hp-actions,
          .hp-service-tabs {
            justify-content: center;
          }

          .hp-system {
            min-height: auto;
          }

          .hp-main-title,
          .hp-main-desc {
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 560px) {
          .hp-title {
            font-size: 44px;
          }

          .hp-panel {
            padding: 18px;
            border-radius: 28px;
          }

          .hp-main-card {
            padding: 22px;
          }

          .hp-main-title {
            font-size: 27px;
          }

          .hp-panel-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <section className="hp">
        <div className="hp-inner">
          <div>
            <div className="hp-badge">
              <span className="hp-dot" />
              AHOS · Premium Software Agency
            </div>

            <h1 className="hp-title">
              Digital products with an <span>Apple-level feel.</span>
            </h1>

            <p className="hp-sub">
              We design and build premium websites, eCommerce stores, automation
              systems, and brand experiences that feel sharp, modern, and ready
              to convert.
            </p>

            <div className="hp-actions">
              <Link href="/contact" className="hp-btn-primary">
                Start Project
              </Link>

              <Link href="/services" className="hp-btn-secondary">
                View Services
              </Link>
            </div>

            <div className="hp-service-tabs">
              {services.map((service, index) => (
                <button
                  key={service.name}
                  type="button"
                  className={`hp-service-tab ${active === index ? "active" : ""}`}
                  onClick={() => setActive(index)}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>

          <div className="hp-system">
            <div className="hp-system-glow" />

            <div className="hp-panel">
              <div className="hp-panel-top">
                <div className="hp-panel-label">AHOS System</div>
                <div className="hp-panel-status">Live Preview</div>
              </div>

              <div className="hp-main-card" key={selected.name}>
                <div className="hp-main-eyebrow">{selected.name}</div>
                <div className="hp-main-title">{selected.title}</div>
                <div className="hp-main-desc">{selected.desc}</div>

                <div className="hp-lines">
                  <div className="hp-line one" />
                  <div className="hp-line two" />
                  <div className="hp-line three" />
                </div>

                <div className="hp-item-grid">
                  {selected.items.map((item) => (
                    <div className="hp-item" key={item}>
                      <span className="hp-item-mark" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="hp-panel-footer">
                <div className="hp-footer-copy">
                  <strong>Strategy to launch</strong>
                  <span>Design, development, deployment, and support.</span>
                </div>
                <div className="hp-footer-pill">Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

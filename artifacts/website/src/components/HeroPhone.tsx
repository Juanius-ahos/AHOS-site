import { Link } from "wouter";

export function HeroPhone() {
  return (
    <>
      <style>{`
        .agency-hero {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 70% 25%, rgba(255,117,31,.18), transparent 35%),
            radial-gradient(circle at 20% 75%, rgba(255,117,31,.08), transparent 32%),
            #06060b;
          color: #fff;
          padding: 150px 32px 100px;
        }

        .agency-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(circle at 50% 40%, black, transparent 70%);
          pointer-events: none;
        }

        .agency-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,.78));
          pointer-events: none;
        }

        .agency-inner {
          position: relative;
          z-index: 2;
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 80px;
          align-items: center;
        }

        .agency-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 15px;
          border: 1px solid rgba(255,117,31,.28);
          border-radius: 999px;
          background: rgba(255,117,31,.08);
          color: #ff751f;
          font-size: 12px;
          letter-spacing: .12em;
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .agency-dot {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #ff751f;
          box-shadow: 0 0 18px rgba(255,117,31,.9);
        }

        .agency-title {
          margin: 0;
          max-width: 780px;
          font-size: clamp(52px, 7vw, 96px);
          line-height: .96;
          letter-spacing: -.07em;
          font-weight: 800;
        }

        .agency-title span {
          color: #ff751f;
        }

        .agency-sub {
          max-width: 610px;
          margin: 28px 0 0;
          color: rgba(255,255,255,.62);
          font-size: 18px;
          line-height: 1.75;
        }

        .agency-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 40px;
        }

        .agency-btn {
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

        .agency-btn.primary {
          background: linear-gradient(135deg, #ff9348, #ff5c00);
          color: #fff;
          box-shadow: 0 20px 60px rgba(255,117,31,.28);
        }

        .agency-btn.secondary {
          color: rgba(255,255,255,.82);
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.04);
          backdrop-filter: blur(16px);
        }

        .agency-btn:hover {
          transform: translateY(-3px);
        }

        .agency-proof {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 48px;
          max-width: 620px;
        }

        .agency-proof-card {
          padding: 18px;
          border-radius: 18px;
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,255,255,.09);
        }

        .agency-proof-card strong {
          display: block;
          font-size: 24px;
          color: #fff;
          margin-bottom: 6px;
        }

        .agency-proof-card span {
          color: rgba(255,255,255,.46);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .1em;
        }

        .agency-panel {
          position: relative;
          border-radius: 34px;
          padding: 28px;
          background:
            linear-gradient(145deg, rgba(255,255,255,.11), rgba(255,255,255,.035)),
            rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.13);
          box-shadow:
            0 50px 140px rgba(0,0,0,.65),
            inset 0 1px 0 rgba(255,255,255,.12);
          backdrop-filter: blur(24px);
        }

        .agency-panel-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 26px;
        }

        .agency-panel-title {
          font-size: 13px;
          color: rgba(255,255,255,.55);
          text-transform: uppercase;
          letter-spacing: .14em;
        }

        .agency-status {
          color: #ff751f;
          font-size: 12px;
        }

        .agency-service {
          padding: 22px;
          border-radius: 24px;
          background: rgba(0,0,0,.28);
          border: 1px solid rgba(255,255,255,.08);
          margin-bottom: 14px;
        }

        .agency-service:nth-child(3) {
          transform: translateX(24px);
        }

        .agency-service:nth-child(4) {
          transform: translateX(-12px);
        }

        .agency-service small {
          display: block;
          color: #ff751f;
          font-size: 11px;
          letter-spacing: .14em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .agency-service h3 {
          margin: 0 0 8px;
          font-size: 22px;
          letter-spacing: -.03em;
        }

        .agency-service p {
          margin: 0;
          color: rgba(255,255,255,.55);
          font-size: 14px;
          line-height: 1.6;
        }

        .agency-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 22px;
        }

        .agency-stack span {
          padding: 8px 11px;
          border-radius: 999px;
          background: rgba(255,117,31,.08);
          border: 1px solid rgba(255,117,31,.18);
          color: rgba(255,255,255,.65);
          font-size: 11px;
        }

        @media (max-width: 980px) {
          .agency-inner {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .agency-title,
          .agency-sub {
            max-width: 100%;
          }

          .agency-service:nth-child(3),
          .agency-service:nth-child(4) {
            transform: none;
          }
        }

        @media (max-width: 600px) {
          .agency-hero {
            padding: 125px 20px 80px;
          }

          .agency-title {
            font-size: 46px;
          }

          .agency-proof {
            grid-template-columns: 1fr;
          }

          .agency-panel {
            padding: 20px;
          }
        }
      `}</style>

      <section className="agency-hero">
        <div className="agency-inner">
          <div>
            <div className="agency-badge">
              <span className="agency-dot" />
              Available for new projects
            </div>

            <h1 className="agency-title">
              Digital products built to <span>look sharp</span>, work fast, and scale.
            </h1>

            <p className="agency-sub">
              AHOS is a digital solutions studio building websites, software, branding,
              Web3 platforms, and AI automations for businesses that need more than a basic online presence.
            </p>

            <div className="agency-actions">
              <Link href="/contact" className="agency-btn primary">
                Start a Project
              </Link>

              <Link href="/services" className="agency-btn secondary">
                View Services
              </Link>
            </div>

            <div className="agency-proof">
              <div className="agency-proof-card">
                <strong>01</strong>
                <span>Strategy</span>
              </div>
              <div className="agency-proof-card">
                <strong>02</strong>
                <span>Design & Build</span>
              </div>
              <div className="agency-proof-card">
                <strong>03</strong>
                <span>Launch Support</span>
              </div>
            </div>
          </div>

          <div className="agency-panel">
            <div className="agency-panel-top">
              <div className="agency-panel-title">AHOS Capabilities</div>
              <div className="agency-status">● Live Studio</div>
            </div>

            <div className="agency-service">
              <small>Web Development</small>
              <h3>Premium websites that convert</h3>
              <p>Fast, responsive, polished websites built around your brand and business goals.</p>
            </div>

            <div className="agency-service">
              <small>Custom Software</small>
              <h3>Systems built around your workflow</h3>
              <p>Dashboards, platforms, internal tools, and scalable digital products.</p>
            </div>

            <div className="agency-service">
              <small>AI & Automation</small>
              <h3>Less manual work. More output.</h3>
              <p>Smart automations and AI tools that help your business move faster.</p>
            </div>

            <div className="agency-stack">
              <span>Websites</span>
              <span>E-commerce</span>
              <span>Branding</span>
              <span>Web3</span>
              <span>AI Tools</span>
              <span>Automation</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

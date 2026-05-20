import { Link } from "wouter";

export function HeroPhone() {
  return (
    <>
      <style>{`
        .hp {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #07070f;
          color: white;
          padding: 150px 42px 90px;
        }

        .hp-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 72% 35%, rgba(255,117,31,0.22), transparent 32%),
            radial-gradient(circle at 20% 70%, rgba(255,117,31,0.12), transparent 30%),
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: auto, auto, 48px 48px, 48px 48px;
        }

        .hp-inner {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          align-items: center;
          gap: 70px;
        }

        .hp-badge {
          display: inline-flex;
          margin-bottom: 22px;
          padding: 8px 16px;
          border-radius: 999px;
          border: 1px solid rgba(255,117,31,0.35);
          background: rgba(255,117,31,0.09);
          color: #ff751f;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .hp-title {
          max-width: 680px;
          font-size: clamp(44px, 6vw, 78px);
          line-height: 0.98;
          letter-spacing: -0.06em;
          margin: 0;
        }

        .hp-title span {
          color: #ff751f;
          text-shadow: 0 0 34px rgba(255,117,31,0.45);
        }

        .hp-sub {
          margin-top: 26px;
          max-width: 570px;
          color: rgba(255,255,255,0.58);
          font-size: 17px;
          line-height: 1.8;
        }

        .hp-actions {
          margin-top: 34px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .hp-btn-primary,
        .hp-btn-ghost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 28px;
          border-radius: 14px;
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: 0.25s ease;
        }

        .hp-btn-primary {
          background: linear-gradient(135deg, #ff8a35, #ff5c00);
          color: #fff;
          box-shadow: 0 0 38px rgba(255,117,31,0.32);
        }

        .hp-btn-ghost {
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.76);
        }

        .hp-btn-primary:hover,
        .hp-btn-ghost:hover {
          transform: translateY(-3px);
        }

        .hp-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 34px;
        }

        .hp-chip {
          padding: 7px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,117,31,0.22);
          background: rgba(255,117,31,0.05);
          color: rgba(255,255,255,0.48);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .hp-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 560px;
        }

        .hp-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(255,117,31,0.22);
          filter: blur(70px);
          animation: hpPulse 4s ease-in-out infinite;
        }

        @keyframes hpPulse {
          0%,100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.12); opacity: 1; }
        }

        .hp-phone {
          position: relative;
          z-index: 2;
          width: 315px;
          border-radius: 46px;
          padding: 12px;
          background: linear-gradient(145deg, #1d1d25, #030307);
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow:
            0 45px 120px rgba(0,0,0,0.85),
            0 0 55px rgba(255,117,31,0.18);
          transform: rotate(4deg);
          animation: hpFloat 5s ease-in-out infinite;
        }

        @keyframes hpFloat {
          0%,100% { transform: rotate(4deg) translateY(0); }
          50% { transform: rotate(4deg) translateY(-18px); }
        }

        .hp-screen {
          min-height: 610px;
          border-radius: 36px;
          padding: 22px;
          background:
            radial-gradient(circle at top, rgba(255,117,31,0.22), transparent 38%),
            #0b0b14;
          border: 1px solid rgba(255,255,255,0.10);
          overflow: hidden;
        }

        .hp-notch {
          width: 95px;
          height: 25px;
          border-radius: 999px;
          background: #000;
          margin: 0 auto 24px;
        }

        .hp-app-label {
          color: #ff751f;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .hp-card {
          padding: 16px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.045);
          margin-bottom: 13px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.25);
        }

        .hp-card-title {
          font-size: 14px;
          color: white;
          margin-bottom: 10px;
        }

        .hp-bar {
          height: 7px;
          border-radius: 999px;
          background: rgba(255,255,255,0.1);
          overflow: hidden;
        }

        .hp-bar div {
          height: 100%;
          border-radius: 999px;
          background: #ff751f;
        }

        .hp-launch {
          margin-top: 18px;
          padding: 15px;
          border-radius: 18px;
          background: linear-gradient(135deg, #ff8a35, #ff5c00);
          text-align: center;
          font-size: 14px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: 0 0 28px rgba(255,117,31,0.3);
        }

        .hp-float-card {
          position: absolute;
          z-index: 3;
          padding: 13px 17px;
          border-radius: 18px;
          border: 1px solid rgba(255,117,31,0.28);
          background: rgba(5,5,12,0.72);
          backdrop-filter: blur(14px);
          color: rgba(255,255,255,0.85);
          font-size: 13px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.45);
        }

        .hp-float-left {
          left: 20px;
          top: 150px;
        }

        .hp-float-right {
          right: 5px;
          bottom: 150px;
        }

        @media (max-width: 950px) {
          .hp {
            padding: 130px 22px 70px;
          }

          .hp-inner {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }

          .hp-sub,
          .hp-title {
            margin-left: auto;
            margin-right: auto;
          }

          .hp-actions,
          .hp-chips {
            justify-content: center;
          }

          .hp-visual {
            min-height: 500px;
          }
        }

        @media (max-width: 520px) {
          .hp-phone {
            width: 265px;
          }

          .hp-screen {
            min-height: 520px;
          }

          .hp-float-card {
            display: none;
          }
        }
      `}</style>

      <section className="hp">
        <div className="hp-bg"></div>

        <div className="hp-inner">
          <div>
            <div className="hp-badge">Available for new projects</div>

            <h1 className="hp-title">
              Premium Websites, AI Systems & <span>Digital Products.</span>
            </h1>

            <p className="hp-sub">
              AHOS builds high-end digital experiences for brands that want to look sharper,
              move faster, and convert better.
            </p>

            <div className="hp-actions">
              <Link href="/contact" className="hp-btn-primary">
                Start a Project
              </Link>
              <Link href="/services" className="hp-btn-ghost">
                Explore Services
              </Link>
            </div>

            <div className="hp-chips">
              <span className="hp-chip">Websites</span>
              <span className="hp-chip">AI Tools</span>
              <span className="hp-chip">Branding</span>
              <span className="hp-chip">Automation</span>
            </div>
          </div>

          <div className="hp-visual">
            <div className="hp-glow"></div>

            <div className="hp-phone">
              <div className="hp-screen">
                <div className="hp-notch"></div>
                <div className="hp-app-label">AHOS Studio</div>

                {[
                  ["Web Development", "82%"],
                  ["AI Automation", "76%"],
                  ["Brand Systems", "88%"],
                  ["Web3 Solutions", "70%"],
                ].map(([title, width]) => (
                  <div className="hp-card" key={title}>
                    <div className="hp-card-title">{title}</div>
                    <div className="hp-bar">
                      <div style={{ width }}></div>
                    </div>
                  </div>
                ))}

                <div className="hp-launch">Launch Ready</div>
              </div>
            </div>

            <div className="hp-float-card hp-float-left">⚡ Fast Launch</div>
            <div className="hp-float-card hp-float-right">24/7 Support</div>
          </div>
        </div>
      </section>
    </>
  );
}

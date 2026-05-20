import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

const words = [
  "Experiences.",
  "Websites.",
  "Mobile Apps.",
  "Brands.",
  "Systems.",
  "Web3 Projects.",
  "Ideas.",
];

const phoneItems = [
  {
    label: "Web Development",
    title: "Premium website build",
    body: "Clean structure, responsive design, fast loading, and conversion-focused sections.",
  },
  {
    label: "eCommerce",
    title: "Online store setup",
    body: "Product pages, checkout flow, payment options, and launch support.",
  },
  {
    label: "AI Automation",
    title: "Smarter workflows",
    body: "Automations and tools that reduce manual work and help businesses move faster.",
  },
];

export function HeroPhone() {
  const wordRef = useRef<HTMLSpanElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
    let wordIndex = 0;
    let timeoutId = 0;
    let frameId = 0;

    function scramble(target: string) {
      let frame = 0;
      const total = 24;

      function update() {
        let output = "";

        for (let i = 0; i < target.length; i++) {
          output +=
            i < (frame / total) * target.length
              ? target[i]
              : chars[Math.floor(Math.random() * chars.length)];
        }

        el.textContent = output;

        if (frame < total) {
          frame++;
          frameId = requestAnimationFrame(update);
        } else {
          el.textContent = target;
          timeoutId = window.setTimeout(() => {
            wordIndex = (wordIndex + 1) % words.length;
            scramble(words[wordIndex]);
          }, 3000);
        }
      }

      update();
    }

    scramble(words[0]);

    return () => {
      window.clearTimeout(timeoutId);
      cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % phoneItems.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, []);

  const selected = phoneItems[active];

  return (
    <>
      <style>{`
        .hp {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at 74% 42%, rgba(255,117,31,0.12), transparent 35%),
            radial-gradient(circle at 22% 76%, rgba(255,117,31,0.07), transparent 34%),
            #07070f;
          color: #ffffff;
          padding: 150px 42px 105px;
        }

        .hp::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at center, transparent 24%, rgba(0,0,0,0.62) 100%);
          pointer-events: none;
        }

        .hp::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(rgba(255,117,31,0.16) 1px, transparent 1px);
          background-size: 42px 42px;
          opacity: 0.18;
          mask-image: radial-gradient(circle at 70% 45%, black 0%, transparent 58%);
          pointer-events: none;
        }

        .hp-inner {
          position: relative;
          z-index: 2;
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 80px;
          align-items: center;
        }

        .hp-copy {
          max-width: 760px;
        }

        .hp-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255,117,31,0.34);
          background: rgba(255,117,31,0.07);
          color: #ff751f;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 28px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .hp-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff751f;
          box-shadow: 0 0 14px rgba(255,117,31,0.9);
        }

        .hp-eyebrow {
          font-size: 10px;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          margin-bottom: 20px;
        }

        .hp-title {
          margin: 0;
          font-size: clamp(54px, 6.8vw, 88px);
          line-height: 1.02;
          letter-spacing: -0.055em;
          text-shadow: 0 24px 90px rgba(0,0,0,0.78);
        }

        .hp-title-top {
          display: block;
          color: rgba(255,255,255,0.96);
        }

        .hp-word-wrap {
          display: block;
          min-height: 1.08em;
          overflow: hidden;
        }

        .hp-word {
          display: block;
          color: #ff751f;
          white-space: nowrap;
          text-shadow:
            0 0 36px rgba(255,117,31,0.58),
            0 0 92px rgba(255,117,31,0.18);
        }

        .hp-line {
          width: 118px;
          height: 1px;
          margin: 28px 0 24px;
          background: linear-gradient(90deg, transparent, #ff751f, transparent);
          box-shadow: 0 0 18px rgba(255,117,31,0.45);
        }

        .hp-sub {
          max-width: 560px;
          color: rgba(255,255,255,0.58);
          font-size: 16px;
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
          min-height: 50px;
          padding: 0 30px;
          border-radius: 13px;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0.09em;
          transition: transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease;
        }

        .hp-btn-primary {
          background: linear-gradient(135deg, #ff9448, #ff5c00);
          color: #fff;
          box-shadow:
            0 0 34px rgba(255,117,31,0.30),
            inset 0 1px 0 rgba(255,255,255,0.22);
        }

        .hp-btn-secondary {
          color: rgba(255,255,255,0.78);
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .hp-btn-primary:hover,
        .hp-btn-secondary:hover {
          transform: translateY(-3px);
        }

        .hp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 30px;
        }

        .hp-tag {
          padding: 7px 13px;
          border-radius: 999px;
          border: 1px solid rgba(255,117,31,0.18);
          background: rgba(255,117,31,0.04);
          color: rgba(255,255,255,0.42);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .hp-visual {
          position: relative;
          min-height: 650px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hp-visual-glow {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 999px;
          background: rgba(255,117,31,0.12);
          filter: blur(90px);
        }

        .hp-network {
          position: absolute;
          width: 530px;
          height: 530px;
          opacity: 0.55;
        }

        .hp-network span {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: #ff751f;
          box-shadow: 0 0 12px rgba(255,117,31,0.65);
        }

        .hp-network i {
          position: absolute;
          height: 1px;
          transform-origin: left center;
          background: linear-gradient(90deg, transparent, rgba(255,117,31,0.28), transparent);
        }

        .hp-network .d1 { left: 70px; top: 155px; }
        .hp-network .d2 { right: 84px; top: 120px; }
        .hp-network .d3 { left: 112px; bottom: 130px; }
        .hp-network .d4 { right: 66px; bottom: 170px; }
        .hp-network .d5 { left: 248px; top: 78px; }

        .hp-network .l1 { left: 74px; top: 158px; width: 350px; transform: rotate(-6deg); }
        .hp-network .l2 { left: 116px; bottom: 133px; width: 330px; transform: rotate(-13deg); }
        .hp-network .l3 { left: 250px; top: 81px; width: 190px; transform: rotate(12deg); }
        .hp-network .l4 { left: 116px; bottom: 133px; width: 150px; transform: rotate(-63deg); }

        .hp-phone {
          position: relative;
          z-index: 3;
          width: 350px;
          border-radius: 54px;
          padding: 12px;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.24), rgba(255,255,255,0.055) 22%, #030306 72%);
          border: 1px solid rgba(255,255,255,0.20);
          box-shadow:
            0 60px 150px rgba(0,0,0,0.88),
            0 0 56px rgba(255,117,31,0.13),
            inset 0 1px 0 rgba(255,255,255,0.18);
          animation: hpFloat 7s ease-in-out infinite;
        }

        @keyframes hpFloat {
          0%, 100% { transform: translateY(0) rotate(1.5deg); }
          50% { transform: translateY(-10px) rotate(1.5deg); }
        }

        .hp-phone::before {
          content: "";
          position: absolute;
          right: -9px;
          top: 105px;
          width: 9px;
          height: 124px;
          border-radius: 0 10px 10px 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.04));
          opacity: 0.45;
        }

        .hp-screen {
          min-height: 625px;
          border-radius: 44px;
          padding: 24px;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 0%, rgba(255,117,31,0.18), transparent 34%),
            linear-gradient(180deg, rgba(255,255,255,0.065), rgba(255,255,255,0.018)),
            #090911;
          border: 1px solid rgba(255,255,255,0.10);
        }

        .hp-notch {
          width: 104px;
          height: 27px;
          border-radius: 999px;
          background: #000;
          margin: 0 auto 25px;
          box-shadow: inset 0 -1px 0 rgba(255,255,255,0.08);
        }

        .hp-app-label {
          color: #ff751f;
          font-size: 11px;
          letter-spacing: 0.23em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .hp-phone-card {
          border-radius: 30px;
          padding: 20px;
          border: 1px solid rgba(255,255,255,0.12);
          background: linear-gradient(145deg, rgba(255,255,255,0.088), rgba(255,255,255,0.028));
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          animation: hpFade 0.35s ease;
        }

        @keyframes hpFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hp-phone-kicker {
          color: rgba(255,255,255,0.42);
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .hp-phone-title {
          color: #fff;
          font-size: 24px;
          line-height: 1.1;
          letter-spacing: -0.035em;
          margin-bottom: 14px;
        }

        .hp-phone-body {
          color: rgba(255,255,255,0.64);
          font-size: 13px;
          line-height: 1.65;
          margin-bottom: 20px;
        }

        .hp-phone-preview {
          height: 145px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.10);
          background:
            radial-gradient(circle at 76% 26%, rgba(255,117,31,0.26), transparent 30%),
            linear-gradient(135deg, rgba(255,117,31,0.11), rgba(255,255,255,0.035));
          position: relative;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .hp-phone-preview::before {
          content: "";
          position: absolute;
          top: 18px;
          left: 18px;
          right: 18px;
          height: 18px;
          border-radius: 999px;
          background: rgba(0,0,0,0.22);
        }

        .hp-preview-line {
          position: absolute;
          left: 30px;
          height: 8px;
          border-radius: 999px;
          background: rgba(255,255,255,0.18);
        }

        .hp-preview-line.one { top: 58px; width: 55%; }
        .hp-preview-line.two { top: 82px; width: 38%; }
        .hp-preview-line.three {
          bottom: 26px;
          width: 76%;
          background: #ff751f;
          box-shadow: 0 0 14px rgba(255,117,31,0.36);
        }

        .hp-phone-list {
          display: grid;
          gap: 9px;
        }

        .hp-phone-list-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 12px;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.075);
          background: rgba(255,255,255,0.035);
          color: rgba(255,255,255,0.72);
          font-size: 12px;
        }

        .hp-phone-dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: #ff751f;
          box-shadow: 0 0 10px rgba(255,117,31,0.55);
          flex-shrink: 0;
        }

        .hp-phone-tabs {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
          margin-top: 14px;
        }

        .hp-phone-tab {
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.085);
          background: rgba(255,255,255,0.035);
          color: rgba(255,255,255,0.48);
          border-radius: 14px;
          padding: 10px 12px;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-align: left;
          transition: 0.22s ease;
        }

        .hp-phone-tab.active,
        .hp-phone-tab:hover {
          border-color: rgba(255,117,31,0.36);
          color: #ff751f;
          background: rgba(255,117,31,0.08);
        }

        @media (max-width: 980px) {
          .hp {
            padding: 125px 22px 80px;
          }

          .hp-inner {
            grid-template-columns: 1fr;
            gap: 46px;
            text-align: center;
          }

          .hp-copy,
          .hp-title,
          .hp-sub {
            margin-left: auto;
            margin-right: auto;
          }

          .hp-line {
            margin-left: auto;
            margin-right: auto;
          }

          .hp-actions,
          .hp-tags {
            justify-content: center;
          }

          .hp-visual {
            min-height: 610px;
          }
        }

        @media (max-width: 560px) {
          .hp-title {
            font-size: 44px;
          }

          .hp-phone {
            width: 290px;
          }

          .hp-screen {
            min-height: 585px;
            padding: 19px;
          }

          .hp-network {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hp-phone,
          .hp-phone-card {
            animation: none !important;
          }
        }
      `}</style>

      <section className="hp">
        <div className="hp-inner">
          <div className="hp-copy">
            <div className="hp-badge">
              <span className="hp-badge-dot" />
              Available for new projects
            </div>

            <div className="hp-eyebrow">AHOS · Digital Studio</div>

            <h1 className="hp-title">
              <span className="hp-title-top">We Build Digital</span>
              <span className="hp-word-wrap">
                <span className="hp-word" ref={wordRef}>
                  Experiences.
                </span>
              </span>
            </h1>

            <div className="hp-line" />

            <p className="hp-sub">
              We don't follow templates. We architect custom digital solutions —
              from strategy to launch — for businesses that are built to stand out.
            </p>

            <div className="hp-actions">
              <Link href="/contact" className="hp-btn-primary">
                Start a Project
              </Link>

              <Link href="/services" className="hp-btn-secondary">
                Explore Services
              </Link>
            </div>

            <div className="hp-tags">
              <span className="hp-tag">Web Dev</span>
              <span className="hp-tag">Mobile Apps</span>
              <span className="hp-tag">Branding</span>
              <span className="hp-tag">Automation</span>
              <span className="hp-tag">Web3 & DeFi</span>
              <span className="hp-tag">AI Systems</span>
            </div>
          </div>

          <div className="hp-visual">
            <div className="hp-visual-glow" />

            <div className="hp-network">
              <span className="d1" />
              <span className="d2" />
              <span className="d3" />
              <span className="d4" />
              <span className="d5" />
              <i className="l1" />
              <i className="l2" />
              <i className="l3" />
              <i className="l4" />
            </div>

            <div className="hp-phone">
              <div className="hp-screen">
                <div className="hp-notch" />

                <div className="hp-app-label">AHOS Studio</div>

                <div className="hp-phone-card" key={selected.label}>
                  <div className="hp-phone-kicker">{selected.label}</div>
                  <div className="hp-phone-title">{selected.title}</div>
                  <div className="hp-phone-body">{selected.body}</div>

                  <div className="hp-phone-preview">
                    <span className="hp-preview-line one" />
                    <span className="hp-preview-line two" />
                    <span className="hp-preview-line three" />
                  </div>

                  <div className="hp-phone-list">
                    <div className="hp-phone-list-item">
                      <span className="hp-phone-dot" />
                      Strategy and structure
                    </div>
                    <div className="hp-phone-list-item">
                      <span className="hp-phone-dot" />
                      Premium interface design
                    </div>
                    <div className="hp-phone-list-item">
                      <span className="hp-phone-dot" />
                      Launch and support
                    </div>
                  </div>
                </div>

                <div className="hp-phone-tabs">
                  {phoneItems.map((item, index) => (
                    <button
                      key={item.label}
                      type="button"
                      className={`hp-phone-tab ${active === index ? "active" : ""}`}
                      onClick={() => setActive(index)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

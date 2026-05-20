import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

const words = ["Experiences", "Websites", "AI Systems", "Brands", "Products"];

export function HeroPhone() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const section = canvas.parentElement;
    const ctx = canvas.getContext("2d");
    if (!section || !ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;

    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    }> = [];

    function resize() {
      width = canvas.width = section.clientWidth;
      height = canvas.height = section.clientHeight;
      nodes.length = 0;

      const count = window.innerWidth < 700 ? 26 : 52;

      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          r: Math.random() * 1 + 0.35,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }

      const maxDistance = window.innerWidth < 700 ? 95 : 135;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.16;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255,117,31,${opacity})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,117,31,0.45)";
        ctx.shadowColor = "rgba(255,117,31,0.25)";
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <style>{`
        .hp {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #07070f;
          color: white;
          padding: 150px 42px 105px;
        }

        .hp-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          opacity: 0.55;
        }

        .hp-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(circle at 72% 36%, rgba(255,117,31,0.18), transparent 35%),
            radial-gradient(circle at 20% 72%, rgba(255,80,20,0.10), transparent 34%),
            linear-gradient(180deg, rgba(255,255,255,0.025), transparent 28%, rgba(255,117,31,0.025));
        }

        .hp-vignette {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            radial-gradient(circle at center, transparent 18%, rgba(0,0,0,0.55) 100%),
            linear-gradient(90deg, rgba(7,7,15,0.06), transparent 42%, rgba(7,7,15,0.28));
        }

        .hp-inner {
          position: relative;
          z-index: 2;
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 76px;
          align-items: center;
        }

        .hp-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255,117,31,0.34);
          background: rgba(255,117,31,0.075);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          color: #ff751f;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 26px;
        }

        .hp-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff751f;
          box-shadow: 0 0 14px rgba(255,117,31,0.9);
        }

        .hp-title {
          max-width: 720px;
          font-size: clamp(50px, 6.4vw, 88px);
          line-height: 0.96;
          letter-spacing: -0.07em;
          margin: 0;
          text-shadow: 0 20px 80px rgba(0,0,0,0.72);
        }

        .hp-word-wrap {
          display: block;
          min-height: 1.05em;
          overflow: hidden;
        }

        .hp-word {
          display: inline-block;
          color: #ff751f;
          text-shadow:
            0 0 34px rgba(255,117,31,0.55),
            0 0 90px rgba(255,117,31,0.18);
          animation: hpWordIn 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes hpWordIn {
          from {
            opacity: 0;
            transform: translateY(22px);
            filter: blur(7px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .hp-sub {
          max-width: 590px;
          margin-top: 28px;
          color: rgba(255,255,255,0.63);
          font-size: 17px;
          line-height: 1.85;
        }

        .hp-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 36px;
        }

        .hp-btn-primary,
        .hp-btn-secondary {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 32px;
          border-radius: 15px;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0.09em;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .hp-btn-primary {
          background: linear-gradient(135deg, #ff9448, #ff5c00);
          color: #ffffff;
          box-shadow:
            0 0 38px rgba(255,117,31,0.34),
            inset 0 1px 0 rgba(255,255,255,0.22);
        }

        .hp-btn-primary::before {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 70%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent);
          transform: skewX(-20deg);
          transition: left 0.7s ease;
        }

        .hp-btn-primary:hover::before {
          left: 140%;
        }

        .hp-btn-secondary {
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.055);
          color: rgba(255,255,255,0.82);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .hp-btn-primary:hover,
        .hp-btn-secondary:hover {
          transform: translateY(-3px);
        }

        .hp-proof {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 30px;
          color: rgba(255,255,255,0.42);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .hp-proof span {
          padding: 8px 13px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.035);
          backdrop-filter: blur(14px);
        }

        .hp-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 660px;
          perspective: 1100px;
        }

        .hp-ambient {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: rgba(255,117,31,0.20);
          filter: blur(88px);
          opacity: 0.82;
        }

        .hp-orbit {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255,117,31,0.10);
        }

        .hp-orbit.one {
          width: 550px;
          height: 550px;
        }

        .hp-orbit.two {
          width: 430px;
          height: 430px;
          border-color: rgba(255,255,255,0.065);
        }

        .hp-phone {
          position: relative;
          z-index: 3;
          width: 335px;
          border-radius: 52px;
          padding: 12px;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.025) 22%, #030306 72%);
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow:
            0 50px 140px rgba(0,0,0,0.88),
            0 0 70px rgba(255,117,31,0.18),
            inset 0 1px 0 rgba(255,255,255,0.16);
          transform: rotate(2.5deg);
          animation: hpPhoneFloat 7s ease-in-out infinite;
        }

        @keyframes hpPhoneFloat {
          0%, 100% {
            transform: rotate(2.5deg) translateY(0);
          }
          50% {
            transform: rotate(2.5deg) translateY(-10px);
          }
        }

        .hp-screen {
          min-height: 625px;
          border-radius: 41px;
          padding: 24px;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 0%, rgba(255,117,31,0.26), transparent 35%),
            linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.018)),
            #090911;
          border: 1px solid rgba(255,255,255,0.10);
        }

        .hp-notch {
          width: 98px;
          height: 25px;
          border-radius: 999px;
          background: #000;
          margin: 0 auto 24px;
        }

        .hp-app-label {
          color: #ff751f;
          font-size: 11px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          margin-bottom: 19px;
        }

        .hp-showcase {
          display: grid;
          gap: 14px;
        }

        .hp-main-panel {
          padding: 18px;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.12);
          background:
            linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.028));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .hp-main-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 22px;
        }

        .hp-main-title {
          color: white;
          font-size: 15px;
        }

        .hp-main-status {
          color: #ff751f;
          font-size: 10px;
          letter-spacing: 0.16em;
        }

        .hp-preview {
          height: 160px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.10);
          background:
            radial-gradient(circle at 78% 24%, rgba(255,117,31,0.35), transparent 30%),
            linear-gradient(135deg, rgba(255,117,31,0.16), rgba(255,255,255,0.035));
          position: relative;
          overflow: hidden;
          margin-bottom: 18px;
        }

        .hp-preview::before {
          content: "";
          position: absolute;
          inset: 22px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(0,0,0,0.18);
        }

        .hp-preview-line {
          position: absolute;
          left: 42px;
          right: 42px;
          height: 8px;
          border-radius: 999px;
          background: rgba(255,255,255,0.16);
        }

        .hp-preview-line.one {
          top: 56px;
          width: 62%;
        }

        .hp-preview-line.two {
          top: 80px;
          width: 45%;
        }

        .hp-preview-line.three {
          top: 116px;
          width: 74%;
          background: #ff751f;
          box-shadow: 0 0 18px rgba(255,117,31,0.48);
        }

        .hp-tabs {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .hp-tab {
          padding: 13px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.045);
        }

        .hp-tab strong {
          display: block;
          color: white;
          font-size: 13px;
          margin-bottom: 6px;
        }

        .hp-tab span {
          color: rgba(255,255,255,0.45);
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .hp-launch {
          padding: 15px;
          border-radius: 20px;
          background: linear-gradient(135deg, #ff9448, #ff5c00);
          text-align: center;
          font-size: 13px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          box-shadow: 0 0 34px rgba(255,117,31,0.34);
        }

        .hp-glass {
          position: absolute;
          z-index: 4;
          width: 210px;
          padding: 18px;
          border-radius: 26px;
          border: 1px solid rgba(255,255,255,0.14);
          background: linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.035));
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.10),
            0 20px 58px rgba(0,0,0,0.45),
            0 0 28px rgba(255,117,31,0.07);
          animation: hpGlassFloat 7s ease-in-out infinite;
        }

        .hp-glass strong {
          display: block;
          color: white;
          font-size: 13px;
          margin-bottom: 8px;
        }

        .hp-glass span {
          color: rgba(255,255,255,0.56);
          font-size: 11px;
          line-height: 1.6;
        }

        .hp-glass.one {
          top: 130px;
          left: -12px;
        }

        .hp-glass.two {
          right: -24px;
          bottom: 170px;
          animation-delay: 1s;
        }

        @keyframes hpGlassFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @media (max-width: 980px) {
          .hp {
            padding: 125px 22px 80px;
          }

          .hp-inner {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 42px;
          }

          .hp-title,
          .hp-sub {
            margin-left: auto;
            margin-right: auto;
          }

          .hp-actions,
          .hp-proof {
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

          .hp-word-wrap {
            min-height: 1.15em;
          }

          .hp-phone {
            width: 274px;
          }

          .hp-screen {
            min-height: 550px;
            padding: 19px;
          }

          .hp-glass,
          .hp-orbit {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hp-phone,
          .hp-glass,
          .hp-word {
            animation: none !important;
          }
        }
      `}</style>

      <section className="hp">
        <canvas ref={canvasRef} className="hp-canvas" />
        <div className="hp-bg" />
        <div className="hp-vignette" />

        <div className="hp-inner">
          <div>
            <div className="hp-badge">
              <span className="hp-badge-dot" />
              Available for new projects
            </div>

            <h1 className="hp-title">
              We build digital
              <span className="hp-word-wrap">
                <span key={wordIndex} className="hp-word">
                  {words[wordIndex]}.
                </span>
              </span>
            </h1>

            <p className="hp-sub">
              AHOS creates premium websites, AI systems, automations, branding,
              and Web3 experiences for ambitious modern businesses.
            </p>

            <div className="hp-actions">
              <Link href="/contact" className="hp-btn-primary">
                Start Project
              </Link>

              <Link href="/services" className="hp-btn-secondary">
                Explore Services
              </Link>
            </div>

            <div className="hp-proof">
              <span>Strategy</span>
              <span>Design</span>
              <span>Development</span>
              <span>Automation</span>
            </div>
          </div>

          <div className="hp-visual">
            <div className="hp-ambient" />
            <div className="hp-orbit one" />
            <div className="hp-orbit two" />

            <div className="hp-phone">
              <div className="hp-screen">
                <div className="hp-notch" />

                <div className="hp-app-label">AHOS Studio System</div>

                <div className="hp-showcase">
                  <div className="hp-main-panel">
                    <div className="hp-main-top">
                      <span className="hp-main-title">Premium Website Build</span>
                      <span className="hp-main-status">LIVE</span>
                    </div>

                    <div className="hp-preview">
                      <span className="hp-preview-line one"></span>
                      <span className="hp-preview-line two"></span>
                      <span className="hp-preview-line three"></span>
                    </div>

                    <div className="hp-tabs">
                      <div className="hp-tab">
                        <strong>AI Workflow</strong>
                        <span>Automation</span>
                      </div>

                      <div className="hp-tab">
                        <strong>Brand System</strong>
                        <span>Identity</span>
                      </div>

                      <div className="hp-tab">
                        <strong>Web Platform</strong>
                        <span>Conversion</span>
                      </div>

                      <div className="hp-tab">
                        <strong>Web3 Layer</strong>
                        <span>Blockchain</span>
                      </div>
                    </div>
                  </div>

                  <div className="hp-launch">Launch Ready</div>
                </div>
              </div>
            </div>

            <div className="hp-glass one">
              <strong>Full Digital Build</strong>
              <span>Strategy, interface, development, deployment, and support.</span>
            </div>

            <div className="hp-glass two">
              <strong>Conversion Focused</strong>
              <span>Designed to look premium and guide visitors toward action.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

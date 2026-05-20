import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

const words = ["Experiences", "Websites", "AI Systems", "Brands", "Automations"];

export function HeroPhone() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, 2600);

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

      const count = window.innerWidth < 700 ? 34 : 72;

      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          r: Math.random() * 1.2 + 0.4,
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

      const maxDistance = window.innerWidth < 700 ? 105 : 150;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.24;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255,117,31,${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,117,31,0.65)";
        ctx.shadowColor = "rgba(255,117,31,0.35)";
        ctx.shadowBlur = 5;
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
          padding: 145px 42px 105px;
        }

        .hp-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          opacity: 0.75;
        }

        .hp-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(circle at 72% 34%, rgba(255,117,31,0.20), transparent 34%),
            radial-gradient(circle at 22% 70%, rgba(255,70,0,0.12), transparent 32%),
            linear-gradient(rgba(255,255,255,0.024) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.024) 1px, transparent 1px);
          background-size: auto, auto, 52px 52px, 52px 52px;
        }

        .hp-vignette {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(7,7,15,0.12), transparent 42%, rgba(7,7,15,0.25)),
            radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.52) 100%);
        }

        .hp-inner {
          position: relative;
          z-index: 2;
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 70px;
          align-items: center;
        }

        .hp-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255,117,31,0.34);
          background: rgba(255,117,31,0.08);
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
          font-size: clamp(48px, 6.2vw, 86px);
          line-height: 0.96;
          letter-spacing: -0.065em;
          margin: 0;
          text-shadow: 0 20px 80px rgba(0,0,0,0.7);
        }

        .hp-word-wrap {
          display: block;
          min-height: 1.04em;
          overflow: hidden;
        }

        .hp-word {
          display: inline-block;
          color: #ff751f;
          text-shadow:
            0 0 34px rgba(255,117,31,0.62),
            0 0 90px rgba(255,117,31,0.20);
          animation: hpWordIn 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes hpWordIn {
          from {
            opacity: 0;
            transform: translateY(26px);
            filter: blur(8px);
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
          color: rgba(255,255,255,0.62);
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
          padding: 16px 31px;
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

        .hp-metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          max-width: 580px;
          margin-top: 40px;
        }

        .hp-metric {
          padding: 17px 18px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.12);
          background: linear-gradient(180deg, rgba(255,255,255,0.075), rgba(255,255,255,0.026));
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .hp-metric strong {
          display: block;
          color: #ff751f;
          font-size: 23px;
          margin-bottom: 5px;
        }

        .hp-metric span {
          display: block;
          color: rgba(255,255,255,0.46);
          font-size: 10px;
          letter-spacing: 0.13em;
          text-transform: uppercase;
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
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(255,117,31,0.22);
          filter: blur(88px);
          opacity: 0.85;
        }

        .hp-orbit {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255,117,31,0.12);
        }

        .hp-orbit.one {
          width: 550px;
          height: 550px;
        }

        .hp-orbit.two {
          width: 430px;
          height: 430px;
          border-color: rgba(255,255,255,0.07);
        }

        .hp-phone {
          position: relative;
          z-index: 3;
          width: 330px;
          border-radius: 52px;
          padding: 12px;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.025) 22%, #030306 72%);
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow:
            0 50px 140px rgba(0,0,0,0.88),
            0 0 70px rgba(255,117,31,0.20),
            inset 0 1px 0 rgba(255,255,255,0.16);
          transform: rotate(3deg);
          animation: hpPhoneFloat 6s ease-in-out infinite;
        }

        @keyframes hpPhoneFloat {
          0%, 100% {
            transform: rotate(3deg) translateY(0);
          }
          50% {
            transform: rotate(3deg) translateY(-12px);
          }
        }

        .hp-screen {
          min-height: 625px;
          border-radius: 41px;
          padding: 24px;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 0%, rgba(255,117,31,0.28), transparent 36%),
            linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.018)),
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

        .hp-panel {
          padding: 16px;
          border-radius: 27px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.045);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .hp-panel-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 17px;
        }

        .hp-panel-title {
          font-size: 13px;
          color: #ffffff;
        }

        .hp-panel-status {
          color: #ff751f;
          font-size: 10px;
          letter-spacing: 0.16em;
        }

        .hp-service {
          padding: 15px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.10);
          background: linear-gradient(135deg, rgba(255,255,255,0.078), rgba(255,255,255,0.026));
          margin-bottom: 12px;
          box-shadow: 0 8px 26px rgba(0,0,0,0.24);
        }

        .hp-service:nth-child(2) {
          transform: translateX(-7px);
        }

        .hp-service:nth-child(3) {
          transform: translateX(8px);
        }

        .hp-service:nth-child(4) {
          transform: translateX(-4px);
        }

        .hp-service-name {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          font-size: 14px;
          color: white;
          margin-bottom: 10px;
        }

        .hp-service-name span:last-child {
          color: rgba(255,255,255,0.38);
          font-size: 11px;
        }

        .hp-bar {
          height: 7px;
          border-radius: 999px;
          background: rgba(255,255,255,0.10);
          overflow: hidden;
        }

        .hp-bar div {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #ff751f, #ff9a52);
          box-shadow: 0 0 16px rgba(255,117,31,0.42);
        }

        .hp-launch {
          margin-top: 18px;
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
          width: 205px;
          padding: 18px;
          border-radius: 26px;
          border: 1px solid rgba(255,255,255,0.14);
          background: linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.035));
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.10),
            0 20px 58px rgba(0,0,0,0.45),
            0 0 28px rgba(255,117,31,0.08);
          animation: hpGlassFloat 6s ease-in-out infinite;
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
          top: 118px;
          left: -8px;
        }

        .hp-glass.two {
          right: -20px;
          bottom: 160px;
          animation-delay: 0.8s;
        }

        .hp-glass.three {
          left: 60px;
          bottom: 34px;
          animation-delay: 1.4s;
        }

        @keyframes hpGlassFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
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
          .hp-sub,
          .hp-metrics {
            margin-left: auto;
            margin-right: auto;
          }

          .hp-actions {
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

          .hp-metrics {
            grid-template-columns: 1fr;
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

            <div className="hp-metrics">
              <div className="hp-metric">
                <strong>24/7</strong>
                <span>Support</span>
              </div>

              <div className="hp-metric">
                <strong>AI</strong>
                <span>Automation</span>
              </div>

              <div className="hp-metric">
                <strong>Web3</strong>
                <span>Solutions</span>
              </div>
            </div>
          </div>

          <div className="hp-visual">
            <div className="hp-ambient" />
            <div className="hp-orbit one" />
            <div className="hp-orbit two" />

            <div className="hp-phone">
              <div className="hp-screen">
                <div className="hp-notch" />

                <div className="hp-app-label">AHOS Operating System</div>

                <div className="hp-panel">
                  <div className="hp-panel-top">
                    <span className="hp-panel-title">Agency Stack</span>
                    <span className="hp-panel-status">LIVE</span>
                  </div>

                  {[
                    ["Web Development", "92%", "01"],
                    ["AI Systems", "78%", "02"],
                    ["Brand Systems", "86%", "03"],
                    ["Web3 Solutions", "72%", "04"],
                  ].map(([title, width, number]) => (
                    <div className="hp-service" key={title}>
                      <div className="hp-service-name">
                        <span>{title}</span>
                        <span>{number}</span>
                      </div>

                      <div className="hp-bar">
                        <div style={{ width }} />
                      </div>
                    </div>
                  ))}

                  <div className="hp-launch">Launch Ready</div>
                </div>
              </div>
            </div>

            <div className="hp-glass one">
              <strong>Fast Launch</strong>
              <span>Strategy, design, development, and deployment handled seamlessly.</span>
            </div>

            <div className="hp-glass two">
              <strong>AI Systems</strong>
              <span>Intelligent automations and scalable digital workflows.</span>
            </div>

            <div className="hp-glass three">
              <strong>Premium Interface</strong>
              <span>High-end visuals and conversion-focused experiences.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

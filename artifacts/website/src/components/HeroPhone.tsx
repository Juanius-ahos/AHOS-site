import { useEffect, useRef } from "react";
import { Link } from "wouter";

const words = ["Experiences.", "Platforms.", "Websites.", "Systems."];

export function HeroPhone() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wordRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let index = 0;
    let timeoutId = 0;
    let frameId = 0;

    function animate(target: string) {
      let frame = 0;
      const total = 26;

      function tick() {
        let text = "";

        for (let i = 0; i < target.length; i++) {
          text += i < (frame / total) * target.length
            ? target[i]
            : chars[Math.floor(Math.random() * chars.length)];
        }

        el.textContent = text;

        if (frame < total) {
          frame++;
          frameId = requestAnimationFrame(tick);
        } else {
          el.textContent = target;
          timeoutId = window.setTimeout(() => {
            index = (index + 1) % words.length;
            animate(words[index]);
          }, 2600);
        }
      }

      tick();
    }

    animate(words[0]);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const section = canvas.parentElement;
    const ctx = canvas.getContext("2d");
    if (!section || !ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;

    const nodes: Array<{ x: number; y: number; vx: number; vy: number; r: number }> = [];

    function resize() {
      w = canvas.width = section.clientWidth;
      h = canvas.height = section.clientHeight;
      nodes.length = 0;

      const count = window.innerWidth < 700 ? 14 : 26;

      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.06,
          vy: (Math.random() - 0.5) * 0.06,
          r: Math.random() * 1 + 0.35,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255,117,31,${(1 - d / 150) * 0.12})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,117,31,0.38)";
        ctx.shadowColor = "rgba(255,117,31,0.24)";
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
          color: #fff;
          padding: 150px 42px 105px;
        }

        .hp-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 78% 42%, rgba(255,117,31,0.10), transparent 36%),
            radial-gradient(circle at 18% 80%, rgba(255,117,31,0.06), transparent 34%),
            linear-gradient(180deg, #07070f 0%, #080811 55%, #05050a 100%);
        }

        .hp-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.55;
          pointer-events: none;
        }

        .hp-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at center, transparent 25%, rgba(0,0,0,0.64) 100%);
        }

        .hp-inner {
          position: relative;
          z-index: 2;
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 86px;
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
          backdrop-filter: blur(16px);
        }

        .hp-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff751f;
          box-shadow: 0 0 12px rgba(255,117,31,0.8);
        }

        .hp-title {
          max-width: 760px;
          margin: 0;
          font-size: clamp(54px, 6.6vw, 92px);
          line-height: 0.96;
          letter-spacing: -0.075em;
          text-shadow: 0 22px 80px rgba(0,0,0,0.75);
        }

        .hp-word-shell {
          display: block;
          height: 1.1em;
          overflow: hidden;
        }

        .hp-word {
          display: block;
          color: #ff751f;
          white-space: nowrap;
          text-shadow:
            0 0 28px rgba(255,117,31,0.36),
            0 0 70px rgba(255,117,31,0.10);
        }

        .hp-sub {
          max-width: 590px;
          margin-top: 28px;
          color: rgba(255,255,255,0.64);
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
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 32px;
          border-radius: 14px;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0.09em;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .hp-btn-primary {
          background: linear-gradient(135deg, #ff9448, #ff5c00);
          color: white;
          box-shadow: 0 0 30px rgba(255,117,31,0.26);
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

        .hp-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 30px;
        }

        .hp-strip span {
          padding: 8px 13px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.03);
          color: rgba(255,255,255,0.42);
          font-size: 10px;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .hp-visual {
          position: relative;
          min-height: 660px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hp-light {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: rgba(255,117,31,0.10);
          filter: blur(95px);
        }

        .hp-device {
          position: relative;
          z-index: 3;
          width: 390px;
          padding: 14px;
          border-radius: 34px;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.16), rgba(255,255,255,0.035)),
            #07070d;
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow:
            0 60px 150px rgba(0,0,0,0.86),
            0 0 54px rgba(255,117,31,0.10),
            inset 0 1px 0 rgba(255,255,255,0.13);
          animation: hpFloat 7s ease-in-out infinite;
        }

        @keyframes hpFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .hp-device-screen {
          border-radius: 26px;
          padding: 24px;
          min-height: 510px;
          background:
            radial-gradient(circle at 70% 0%, rgba(255,117,31,0.15), transparent 36%),
            linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.018)),
            #0a0a13;
          border: 1px solid rgba(255,255,255,0.09);
        }

        .hp-device-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
        }

        .hp-logo-mark {
          color: #ff751f;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .hp-live {
          padding: 6px 10px;
          border-radius: 999px;
          color: #ff751f;
          background: rgba(255,117,31,0.08);
          border: 1px solid rgba(255,117,31,0.16);
          font-size: 10px;
          letter-spacing: 0.12em;
        }

        .hp-device-title {
          font-size: 31px;
          line-height: 1.05;
          letter-spacing: -0.05em;
          margin-bottom: 10px;
        }

        .hp-device-sub {
          color: rgba(255,255,255,0.54);
          font-size: 14px;
          line-height: 1.55;
          margin-bottom: 24px;
        }

        .hp-preview-card {
          padding: 18px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(255,255,255,0.085), rgba(255,255,255,0.026));
          border: 1px solid rgba(255,255,255,0.10);
          margin-bottom: 14px;
        }

        .hp-preview-bar {
          height: 9px;
          border-radius: 999px;
          background: rgba(255,255,255,0.12);
          margin-bottom: 10px;
        }

        .hp-preview-bar.orange {
          width: 78%;
          background: #ff751f;
          box-shadow: 0 0 14px rgba(255,117,31,0.34);
        }

        .hp-preview-bar.w1 { width: 90%; }
        .hp-preview-bar.w2 { width: 58%; }

        .hp-grid-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 14px;
        }

        .hp-mini {
          padding: 16px;
          min-height: 120px;
          border-radius: 22px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .hp-mini-label {
          color: rgba(255,255,255,0.42);
          font-size: 10px;
          letter-spacing: 0.11em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .hp-mini-title {
          color: #fff;
          font-size: 15px;
          line-height: 1.25;
        }

        .hp-launch {
          padding: 15px;
          border-radius: 19px;
          background: linear-gradient(135deg, #ff9448, #ff5c00);
          text-align: center;
          font-size: 13px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          box-shadow: 0 0 28px rgba(255,117,31,0.22);
        }

        .hp-side-note {
          position: absolute;
          right: -12px;
          bottom: 115px;
          z-index: 5;
          width: 190px;
          padding: 17px;
          border-radius: 22px;
          background: rgba(255,255,255,0.065);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.45);
        }

        .hp-side-note strong {
          display: block;
          font-size: 13px;
          margin-bottom: 7px;
        }

        .hp-side-note span {
          display: block;
          color: rgba(255,255,255,0.56);
          font-size: 11px;
          line-height: 1.55;
        }

        @media (max-width: 980px) {
          .hp {
            padding: 125px 22px 80px;
          }

          .hp-inner {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 48px;
          }

          .hp-title,
          .hp-sub {
            margin-left: auto;
            margin-right: auto;
          }

          .hp-actions,
          .hp-strip {
            justify-content: center;
          }

          .hp-visual {
            min-height: auto;
          }

          .hp-side-note {
            display: none;
          }
        }

        @media (max-width: 560px) {
          .hp-title {
            font-size: 44px;
          }

          .hp-device {
            width: 300px;
          }

          .hp-device-screen {
            min-height: 470px;
            padding: 19px;
          }

          .hp-device-title {
            font-size: 25px;
          }
        }
      `}</style>

      <section className="hp">
        <div className="hp-bg" />
        <canvas ref={canvasRef} className="hp-canvas" />
        <div className="hp-vignette" />

        <div className="hp-inner">
          <div>
            <div className="hp-badge">
              <span className="hp-badge-dot" />
              AHOS · Software Agency
            </div>

            <h1 className="hp-title">
              We build digital
              <span className="hp-word-shell">
                <span className="hp-word" ref={wordRef}>
                  Experiences.
                </span>
              </span>
            </h1>

            <p className="hp-sub">
              Premium websites, eCommerce stores, automation systems, and digital
              platforms built with clean design, strong UX, and conversion in mind.
            </p>

            <div className="hp-actions">
              <Link href="/contact" className="hp-btn-primary">
                Start Project
              </Link>

              <Link href="/services" className="hp-btn-secondary">
                View Services
              </Link>
            </div>

            <div className="hp-strip">
              <span>Web Development</span>
              <span>eCommerce</span>
              <span>Automation</span>
              <span>Brand Systems</span>
            </div>
          </div>

          <div className="hp-visual">
            <div className="hp-light" />

            <div className="hp-device">
              <div className="hp-device-screen">
                <div className="hp-device-top">
                  <div className="hp-logo-mark">AHOS Studio</div>
                  <div className="hp-live">Live</div>
                </div>

                <div className="hp-device-title">
                  Premium digital product
                </div>

                <div className="hp-device-sub">
                  A complete launch system for modern brands: interface, store,
                  automation, and conversion flow.
                </div>

                <div className="hp-preview-card">
                  <div className="hp-preview-bar w1"></div>
                  <div className="hp-preview-bar w2"></div>
                  <div className="hp-preview-bar orange"></div>
                </div>

                <div className="hp-grid-cards">
                  <div className="hp-mini">
                    <div className="hp-mini-label">Build</div>
                    <div className="hp-mini-title">Website interface</div>
                  </div>

                  <div className="hp-mini">
                    <div className="hp-mini-label">Launch</div>
                    <div className="hp-mini-title">Store setup</div>
                  </div>

                  <div className="hp-mini">
                    <div className="hp-mini-label">Growth</div>
                    <div className="hp-mini-title">Automation flow</div>
                  </div>

                  <div className="hp-mini">
                    <div className="hp-mini-label">Support</div>
                    <div className="hp-mini-title">Ongoing care</div>
                  </div>
                </div>

                <div className="hp-launch">Launch Ready</div>
              </div>
            </div>

            <div className="hp-side-note">
              <strong>Built for conversion</strong>
              <span>Design, development, and launch handled as one polished system.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

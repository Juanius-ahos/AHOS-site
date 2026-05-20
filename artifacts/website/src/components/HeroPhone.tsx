import { useEffect, useRef } from "react";
import { Link } from "wouter";

export function HeroPhone() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wordRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    const ctx = canvas.getContext("2d");

    if (!parent || !ctx) return;

    let width = 0;
    let height = 0;
    let animation = 0;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }[] = [];

    function resize() {
      width = canvas.width = parent.clientWidth;
      height = canvas.height = parent.clientHeight;

      particles.length = 0;

      const count = window.innerWidth < 768 ? 40 : 85;

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          size: Math.random() * 2 + 1,
        });
      }
    }

    function render() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);

            ctx.strokeStyle = `rgba(255,117,31,${1 - dist / 150})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,117,31,0.8)";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#ff751f";
        ctx.fill();
      });

      animation = requestAnimationFrame(render);
    }

    resize();
    render();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const words = [
      "Experiences.",
      "Websites.",
      "AI Systems.",
      "Digital Brands.",
      "Automation.",
      "Web3 Products.",
    ];

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$#%";
    let current = 0;

    const el = wordRef.current;
    if (!el) return;

    function scramble(target: string) {
      let frame = 0;

      function update() {
        let output = "";

        for (let i = 0; i < target.length; i++) {
          if (i < frame / 3) {
            output += target[i];
          } else {
            output += chars[Math.floor(Math.random() * chars.length)];
          }
        }

        el.textContent = output;

        if (frame <= target.length * 3) {
          frame++;
          requestAnimationFrame(update);
        } else {
          el.textContent = target;
        }
      }

      update();
    }

    scramble(words[0]);

    const interval = setInterval(() => {
      current = (current + 1) % words.length;
      scramble(words[current]);
    }, 2600);

    return () => clearInterval(interval);
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
          padding: 140px 42px 100px;
        }

        .hp-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .hp-grid {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(circle at center, black 30%, transparent 90%);
        }

        .hp-glow {
          position: absolute;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,117,31,0.22), transparent 70%);
          top: 50%;
          left: 70%;
          transform: translate(-50%, -50%);
          filter: blur(60px);
        }

        .hp-inner {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hp-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255,117,31,0.28);
          background: rgba(255,117,31,0.08);
          backdrop-filter: blur(20px);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: #ff751f;
          margin-bottom: 26px;
        }

        .hp-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ff751f;
          box-shadow: 0 0 15px #ff751f;
        }

        .hp-title {
          font-size: clamp(54px, 7vw, 92px);
          line-height: 0.95;
          letter-spacing: -0.07em;
          margin: 0;
          max-width: 760px;
        }

        .hp-orange {
          color: #ff751f;
          text-shadow: 0 0 40px rgba(255,117,31,0.6);
        }

        .hp-word {
          display: inline-block;
          min-width: 280px;
        }

        .hp-sub {
          margin-top: 28px;
          max-width: 600px;
          color: rgba(255,255,255,0.6);
          font-size: 17px;
          line-height: 1.9;
        }

        .hp-actions {
          display: flex;
          gap: 14px;
          margin-top: 38px;
          flex-wrap: wrap;
        }

        .hp-btn-primary,
        .hp-btn-secondary {
          padding: 16px 30px;
          border-radius: 16px;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0.08em;
          transition: 0.25s ease;
        }

        .hp-btn-primary {
          background: linear-gradient(135deg, #ff9448, #ff5c00);
          color: white;
          box-shadow: 0 0 40px rgba(255,117,31,0.35);
        }

        .hp-btn-secondary {
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.82);
          backdrop-filter: blur(16px);
        }

        .hp-btn-primary:hover,
        .hp-btn-secondary:hover {
          transform: translateY(-3px);
        }

        .hp-metrics {
          margin-top: 40px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .hp-metric {
          padding: 18px 20px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          min-width: 140px;
        }

        .hp-metric strong {
          display: block;
          color: #ff751f;
          font-size: 24px;
          margin-bottom: 5px;
        }

        .hp-metric span {
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }

        .hp-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 700px;
        }

        .hp-ring {
          position: absolute;
          border: 1px solid rgba(255,117,31,0.12);
          border-radius: 50%;
          animation: spin 16s linear infinite;
        }

        .hp-ring.one {
          width: 560px;
          height: 560px;
        }

        .hp-ring.two {
          width: 420px;
          height: 420px;
          animation-direction: reverse;
          animation-duration: 22s;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .hp-phone {
          position: relative;
          z-index: 3;
          width: 340px;
          border-radius: 52px;
          padding: 12px;
          background: linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.03));
          border: 1px solid rgba(255,255,255,0.16);
          backdrop-filter: blur(30px);
          box-shadow:
            0 40px 140px rgba(0,0,0,0.85),
            0 0 80px rgba(255,117,31,0.22);
          transform: rotate(4deg);
          animation: floatPhone 5s ease-in-out infinite;
        }

        @keyframes floatPhone {
          0%,100% {
            transform: rotate(4deg) translateY(0);
          }
          50% {
            transform: rotate(4deg) translateY(-18px);
          }
        }

        .hp-screen {
          border-radius: 42px;
          min-height: 650px;
          padding: 24px;
          background:
            radial-gradient(circle at top, rgba(255,117,31,0.25), transparent 35%),
            rgba(9,9,17,0.96);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .hp-notch {
          width: 100px;
          height: 26px;
          background: black;
          border-radius: 999px;
          margin: 0 auto 24px;
        }

        .hp-app {
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #ff751f;
          margin-bottom: 22px;
        }

        .hp-card {
          padding: 16px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(16px);
          margin-bottom: 14px;
          animation: cardFloat 4s ease-in-out infinite;
        }

        .hp-card:nth-child(2) { transform: translateX(-8px); }
        .hp-card:nth-child(3) { transform: translateX(8px); }
        .hp-card:nth-child(4) { transform: translateX(-5px); }

        @keyframes cardFloat {
          0%,100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .hp-card-title {
          font-size: 14px;
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
          background: linear-gradient(90deg,#ff751f,#ff9d5c);
          box-shadow: 0 0 20px rgba(255,117,31,0.45);
        }

        .hp-launch {
          margin-top: 20px;
          padding: 16px;
          border-radius: 22px;
          background: linear-gradient(135deg,#ff9448,#ff5c00);
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          font-size: 13px;
          box-shadow: 0 0 35px rgba(255,117,31,0.35);
        }

        .hp-glass {
          position: absolute;
          z-index: 5;
          width: 210px;
          padding: 18px;
          border-radius: 26px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(26px);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 20px 60px rgba(0,0,0,0.45);
        }

        .hp-glass strong {
          display: block;
          margin-bottom: 8px;
          font-size: 13px;
        }

        .hp-glass span {
          color: rgba(255,255,255,0.55);
          font-size: 11px;
          line-height: 1.6;
        }

        .hp-glass.one {
          top: 120px;
          left: -10px;
        }

        .hp-glass.two {
          bottom: 130px;
          right: -20px;
        }

        .hp-glass.three {
          bottom: 10px;
          left: 60px;
        }

        @media (max-width: 980px) {
          .hp {
            padding: 120px 22px 80px;
          }

          .hp-inner {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hp-actions,
          .hp-metrics {
            justify-content: center;
          }

          .hp-sub,
          .hp-title {
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 560px) {
          .hp-phone {
            width: 280px;
          }

          .hp-screen {
            min-height: 560px;
          }

          .hp-glass {
            display: none;
          }

          .hp-title {
            font-size: 50px;
          }
        }
      `}</style>

      <section className="hp">
        <canvas ref={canvasRef} className="hp-canvas"></canvas>

        <div className="hp-grid"></div>
        <div className="hp-glow"></div>

        <div className="hp-inner">
          <div>
            <div className="hp-badge">
              <div className="hp-dot"></div>
              Available for new projects
            </div>

            <h1 className="hp-title">
              We build digital <br />
              <span className="hp-orange hp-word" ref={wordRef}>
                Experiences.
              </span>
            </h1>

            <p className="hp-sub">
              AHOS creates premium websites, AI systems, automations,
              branding, and Web3 experiences for ambitious modern businesses.
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

          <div className="hp-right">
            <div className="hp-ring one"></div>
            <div className="hp-ring two"></div>

            <div className="hp-phone">
              <div className="hp-screen">
                <div className="hp-notch"></div>

                <div className="hp-app">
                  AHOS Operating System
                </div>

                {[
                  ["Web Development", "92%"],
                  ["AI Systems", "78%"],
                  ["Brand Systems", "86%"],
                  ["Web3 Solutions", "72%"],
                ].map(([title, width]) => (
                  <div className="hp-card" key={title}>
                    <div className="hp-card-title">{title}</div>

                    <div className="hp-bar">
                      <div style={{ width }}></div>
                    </div>
                  </div>
                ))}

                <div className="hp-launch">
                  Launch Ready
                </div>
              </div>
            </div>

            <div className="hp-glass one">
              <strong>Fast Launch</strong>
              <span>
                Strategy, design, development, and deployment handled seamlessly.
              </span>
            </div>

            <div className="hp-glass two">
              <strong>AI Systems</strong>
              <span>
                Intelligent automations and scalable digital workflows.
              </span>
            </div>

            <div className="hp-glass three">
              <strong>Premium Interface</strong>
              <span>
                High-end visuals and conversion-focused experiences.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

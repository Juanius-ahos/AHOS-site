import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

const words = ["Experiences.", "Websites.", "Stores.", "Systems.", "Brands."];

const services = [
  {
    name: "Web Development",
    title: "Premium Website Build",
    tag: "Launch-ready website",
    desc: "High-end responsive websites with clear structure, strong CTAs, fast performance, and a premium visual identity.",
    points: ["Responsive UI", "SEO structure", "Fast deployment"],
  },
  {
    name: "eCommerce",
    title: "Online Store Setup",
    tag: "Sell online professionally",
    desc: "Complete eCommerce setup with product pages, checkout flow, multiple payment options, and launch support.",
    points: ["Product pages", "Checkout setup", "Order flow"],
  },
  {
    name: "AI Automation",
    title: "AI Workflow System",
    tag: "Automate operations",
    desc: "Smart workflows and AI tools that reduce repetitive work, organize leads, and support daily business operations.",
    points: ["Lead workflows", "AI assistant", "Integrations"],
  },
  {
    name: "Brand Systems",
    title: "Premium Brand Interface",
    tag: "Look trusted instantly",
    desc: "A sharper digital presence with consistent visuals, better messaging, and a professional brand experience.",
    points: ["Visual direction", "Messaging", "Design system"],
  },
];

export function HeroPhone() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wordRef = useRef<HTMLSpanElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let wordIndex = 0;
    let timeoutId: number;
    let frameId: number;

    function scramble(target: string) {
      let frame = 0;
      const total = 24;

      function update() {
        let output = "";

        for (let i = 0; i < target.length; i++) {
          if (i < (frame / total) * target.length) {
            output += target[i];
          } else {
            output += chars[Math.floor(Math.random() * chars.length)];
          }
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
          }, 2500);
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
    const canvas = canvasRef.current;
    if (!canvas) return;

    const section = canvas.parentElement;
    const ctx = canvas.getContext("2d");
    if (!section || !ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;

    const dots: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    }> = [];

    function resize() {
      w = canvas.width = section.clientWidth;
      h = canvas.height = section.clientHeight;
      dots.length = 0;

      const count = window.innerWidth < 700 ? 16 : 30;

      for (let i = 0; i < count; i++) {
        dots.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
          r: Math.random() * 1 + 0.35,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
      }

      const max = 125;

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < max) {
            const opacity = (1 - dist / max) * 0.14;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(255,117,31,${opacity})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,117,31,0.42)";
        ctx.shadowColor = "rgba(255,117,31,0.24)";
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

  const selected = services[active];

  return (
    <>
      <style>{`
        .hp {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #07070f;
          color: white;
          padding: 150px 42px 100px;
        }

        .hp-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 74% 42%, rgba(255,117,31,0.105), transparent 35%),
            radial-gradient(circle at 18% 78%, rgba(255,117,31,0.07), transparent 33%),
            linear-gradient(180deg, #07070f 0%, #080811 55%, #05050a 100%);
        }

        .hp-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at center, transparent 24%, rgba(0,0,0,0.60) 100%);
          z-index: 2;
        }

        .hp-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          opacity: 0.48;
          pointer-events: none;
        }

        .hp-inner {
          position: relative;
          z-index: 3;
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          gap: 80px;
          align-items: center;
        }

        .hp-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255,117,31,0.32);
          background: rgba(255,117,31,0.065);
          color: #ff751f;
          font-size: 11px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          margin-bottom: 28px;
          backdrop-filter: blur(18px);
        }

        .hp-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff751f;
          box-shadow: 0 0 14px rgba(255,117,31,0.8);
        }

        .hp-title {
          max-width: 720px;
          margin: 0;
          font-size: clamp(52px, 6.4vw, 90px);
          line-height: 0.96;
          letter-spacing: -0.07em;
          text-shadow: 0 22px 80px rgba(0,0,0,0.72);
        }

        .hp-word-box {
          display: block;
          width: min(720px, 100%);
          height: 1.08em;
          overflow: hidden;
        }

        .hp-word {
          display: block;
          color: #ff751f;
          text-shadow:
            0 0 28px rgba(255,117,31,0.42),
            0 0 70px rgba(255,117,31,0.12);
          white-space: nowrap;
        }

        .hp-sub {
          max-width: 580px;
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
          border-radius: 15px;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0.09em;
          transition: 0.25s ease;
        }

        .hp-btn-primary {
          background: linear-gradient(135deg, #ff9448, #ff5c00);
          color: white;
          box-shadow: 0 0 30px rgba(255,117,31,0.28);
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

        .hp-services {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 30px;
        }

        .hp-service-btn {
          cursor: pointer;
          padding: 9px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.032);
          color: rgba(255,255,255,0.44);
          font-size: 10px;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          transition: 0.22s ease;
        }

        .hp-service-btn:hover,
        .hp-service-btn.active {
          border-color: rgba(255,117,31,0.45);
          background: rgba(255,117,31,0.10);
          color: #ff751f;
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
          background: rgba(255,117,31,0.105);
          filter: blur(92px);
        }

        .hp-phone {
          position: relative;
          z-index: 3;
          width: 365px;
          padding: 12px;
          border-radius: 58px;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.30), rgba(255,255,255,0.07) 18%, #030306 72%);
          border: 1px solid rgba(255,255,255,0.22);
          box-shadow:
            0 60px 150px rgba(0,0,0,0.90),
            0 0 54px rgba(255,117,31,0.12),
            inset 0 1px 0 rgba(255,255,255,0.18);
          transform: rotate(1.5deg);
          animation: hpPhoneFloat 6.5s ease-in-out infinite;
        }

        @keyframes hpPhoneFloat {
          0%, 100% {
            transform: rotate(1.5deg) translateY(0);
          }
          50% {
            transform: rotate(1.5deg) translateY(-9px);
          }
        }

        .hp-phone::before {
          content: "";
          position: absolute;
          right: -10px;
          top: 105px;
          width: 10px;
          height: 125px;
          border-radius: 0 10px 10px 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.04));
          opacity: 0.48;
        }

        .hp-screen {
          min-height: 635px;
          padding: 24px;
          border-radius: 47px;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 0%, rgba(255,117,31,0.16), transparent 34%),
            linear-gradient(180deg, rgba(255,255,255,0.075), rgba(255,255,255,0.018)),
            #090911;
          border: 1px solid rgba(255,255,255,0.10);
        }

        .hp-notch {
          width: 104px;
          height: 27px;
          border-radius: 999px;
          background: #000;
          margin: 0 auto 24px;
        }

        .hp-app-label {
          color: #ff751f;
          font-size: 11px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .hp-phone-title {
          font-size: 24px;
          line-height: 1.08;
          letter-spacing: -0.035em;
          margin-bottom: 8px;
          color: #ffffff;
        }

        .hp-phone-tag {
          color: rgba(255,255,255,0.54);
          font-size: 13px;
          line-height: 1.5;
          margin-bottom: 18px;
        }

        .hp-preview {
          padding: 18px;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,0.12);
          background: linear-gradient(135deg, rgba(255,255,255,0.085), rgba(255,255,255,0.028));
          backdrop-filter: blur(20px);
          animation: hpContentIn 0.35s ease;
        }

        @keyframes hpContentIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hp-browser {
          height: 150px;
          border-radius: 24px;
          background:
            radial-gradient(circle at 78% 24%, rgba(255,117,31,0.24), transparent 32%),
            linear-gradient(135deg, rgba(255,117,31,0.11), rgba(255,255,255,0.035));
          border: 1px solid rgba(255,255,255,0.11);
          position: relative;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .hp-browser-top {
          position: absolute;
          top: 18px;
          left: 18px;
          right: 18px;
          height: 18px;
          border-radius: 999px;
          background: rgba(0,0,0,0.24);
        }

        .hp-browser-line {
          position: absolute;
          left: 30px;
          height: 8px;
          border-radius: 999px;
          background: rgba(255,255,255,0.18);
        }

        .hp-browser-line.one {
          top: 58px;
          width: 55%;
        }

        .hp-browser-line.two {
          top: 82px;
          width: 38%;
        }

        .hp-browser-line.three {
          bottom: 27px;
          width: 76%;
          background: #ff751f;
          box-shadow: 0 0 14px rgba(255,117,31,0.36);
        }

        .hp-description {
          min-height: 96px;
          padding: 16px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.70);
          font-size: 13px;
          line-height: 1.7;
          margin-bottom: 13px;
        }

        .hp-point-list {
          display: grid;
          gap: 8px;
        }

        .hp-point {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 15px;
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.72);
          font-size: 12px;
        }

        .hp-point-dot {
          width: 6px;
          height: 6px;
          border-radius: 99px;
          background: #ff751f;
          box-shadow: 0 0 10px rgba(255,117,31,0.6);
          flex-shrink: 0;
        }

        .hp-launch {
          margin-top: 14px;
          padding: 15px;
          border-radius: 20px;
          background: linear-gradient(135deg, #ff9448, #ff5c00);
          text-align: center;
          font-size: 13px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          box-shadow: 0 0 28px rgba(255,117,31,0.24);
        }

        @media (max-width: 980px) {
          .hp {
            padding: 125px 22px 80px;
          }

          .hp-inner {
            grid-template-columns: 1fr;
            gap: 42px;
            text-align: center;
          }

          .hp-title,
          .hp-sub {
            margin-left: auto;
            margin-right: auto;
          }

          .hp-actions,
          .hp-services {
            justify-content: center;
          }

          .hp-phone {
            transform: rotate(0deg);
          }
        }

        @media (max-width: 560px) {
          .hp-title {
            font-size: 44px;
          }

          .hp-word-box {
            height: 1.15em;
          }

          .hp-phone {
            width: 290px;
          }

          .hp-screen {
            min-height: 590px;
            padding: 19px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hp-phone,
          .hp-preview {
            animation: none !important;
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
              AHOS · Digital Studio
            </div>

            <h1 className="hp-title">
              We build digital
              <span className="hp-word-box">
                <span className="hp-word" ref={wordRef}>
                  Experiences.
                </span>
              </span>
            </h1>

            <p className="hp-sub">
              Premium websites, eCommerce stores, AI automations, and brand
              systems built for businesses that want to look sharper and convert
              better.
            </p>

            <div className="hp-actions">
              <Link href="/contact" className="hp-btn-primary">
                Start Project
              </Link>

              <Link href="/services" className="hp-btn-secondary">
                Explore Services
              </Link>
            </div>

            <div className="hp-services">
              {services.map((service, index) => (
                <button
                  key={service.name}
                  type="button"
                  className={`hp-service-btn ${active === index ? "active" : ""}`}
                  onClick={() => setActive(index)}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>

          <div className="hp-visual">
            <div className="hp-light" />

            <div className="hp-phone">
              <div className="hp-screen">
                <div className="hp-notch" />

                <div className="hp-app-label">AHOS Studio</div>

                <div key={selected.name} className="hp-preview">
                  <div className="hp-phone-title">{selected.title}</div>
                  <div className="hp-phone-tag">{selected.tag}</div>

                  <div className="hp-browser">
                    <div className="hp-browser-top"></div>
                    <div className="hp-browser-line one"></div>
                    <div className="hp-browser-line two"></div>
                    <div className="hp-browser-line three"></div>
                  </div>

                  <div className="hp-description">{selected.desc}</div>

                  <div className="hp-point-list">
                    {selected.points.map((point) => (
                      <div className="hp-point" key={point}>
                        <span className="hp-point-dot" />
                        {point}
                      </div>
                    ))}
                  </div>

                  <div className="hp-launch">Ready for Launch</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

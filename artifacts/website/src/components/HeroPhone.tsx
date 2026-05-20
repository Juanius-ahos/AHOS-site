import { useEffect, useRef } from "react";
import { Link } from "wouter";

const words = ["Experiences.", "Websites.", "Brands.", "Systems.", "Stores."];

export function HeroPhone() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const phoneRef = useRef<HTMLDivElement | null>(null);
  const wordRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let wordIndex = 0;
    let timeoutId: number;

    function scramble(target: string) {
      let frame = 0;
      const total = 28;

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
          requestAnimationFrame(update);
        } else {
          el.textContent = target;
          timeoutId = window.setTimeout(() => {
            wordIndex = (wordIndex + 1) % words.length;
            scramble(words[wordIndex]);
          }, 2300);
        }
      }

      update();
    }

    scramble(words[0]);

    return () => window.clearTimeout(timeoutId);
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

      const count = window.innerWidth < 700 ? 18 : 34;

      for (let i = 0; i < count; i++) {
        dots.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          r: Math.random() * 1.1 + 0.35,
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

      const max = 130;

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < max) {
            const opacity = (1 - dist / max) * 0.16;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(255,117,31,${opacity})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,117,31,0.48)";
        ctx.shadowColor = "rgba(255,117,31,0.3)";
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

  useEffect(() => {
    const phone = phoneRef.current;
    if (!phone) return;

    const desktop =
      window.matchMedia("(hover: hover)").matches &&
      window.matchMedia("(pointer: fine)").matches;

    if (!desktop) return;

    function move(e: MouseEvent) {
      const rect = phone.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      phone.style.transform = `
        rotateZ(2deg)
        rotateX(${-y * 8}deg)
        rotateY(${x * 10}deg)
        translateY(-8px)
      `;
    }

    function leave() {
      phone.style.transform = "rotateZ(2deg) rotateX(0deg) rotateY(0deg)";
    }

    phone.addEventListener("mousemove", move);
    phone.addEventListener("mouseleave", leave);

    return () => {
      phone.removeEventListener("mousemove", move);
      phone.removeEventListener("mouseleave", leave);
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
          padding: 150px 42px 100px;
        }

        .hp-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 76% 42%, rgba(255,117,31,0.13), transparent 34%),
            radial-gradient(circle at 20% 78%, rgba(255,117,31,0.08), transparent 32%),
            linear-gradient(180deg, #07070f 0%, #080811 52%, #05050a 100%);
        }

        .hp-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.58) 100%);
          z-index: 2;
        }

        .hp-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          opacity: 0.55;
          pointer-events: none;
        }

        .hp-inner {
          position: relative;
          z-index: 3;
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 80px;
          align-items: center;
        }

        .hp-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255,117,31,0.35);
          background: rgba(255,117,31,0.07);
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
          box-shadow: 0 0 14px rgba(255,117,31,0.9);
        }

        .hp-title {
          max-width: 720px;
          margin: 0;
          font-size: clamp(52px, 6.4vw, 90px);
          line-height: 0.96;
          letter-spacing: -0.07em;
          text-shadow: 0 22px 80px rgba(0,0,0,0.72);
        }

        .hp-word {
          display: block;
          min-height: 1.05em;
          color: #ff751f;
          text-shadow:
            0 0 34px rgba(255,117,31,0.52),
            0 0 90px rgba(255,117,31,0.16);
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
          box-shadow: 0 0 34px rgba(255,117,31,0.34);
        }

        .hp-btn-secondary {
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.045);
          color: rgba(255,255,255,0.82);
          backdrop-filter: blur(16px);
        }

        .hp-btn-primary:hover,
        .hp-btn-secondary:hover {
          transform: translateY(-3px);
        }

        .hp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 30px;
        }

        .hp-tags span {
          padding: 8px 13px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.032);
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
          perspective: 1200px;
        }

        .hp-light {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: rgba(255,117,31,0.13);
          filter: blur(90px);
        }

        .hp-phone {
          position: relative;
          z-index: 3;
          width: 355px;
          padding: 12px;
          border-radius: 58px;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.28), rgba(255,255,255,0.06) 18%, #030306 72%);
          border: 1px solid rgba(255,255,255,0.22);
          box-shadow:
            0 60px 150px rgba(0,0,0,0.9),
            0 0 64px rgba(255,117,31,0.15),
            inset 0 1px 0 rgba(255,255,255,0.18);
          transform: rotateZ(2deg);
          transform-style: preserve-3d;
          transition: transform 0.16s ease-out;
          will-change: transform;
        }

        .hp-phone::before {
          content: "";
          position: absolute;
          right: -10px;
          top: 105px;
          width: 10px;
          height: 125px;
          border-radius: 0 10px 10px 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.25), rgba(255,255,255,0.04));
          opacity: 0.5;
        }

        .hp-screen {
          min-height: 630px;
          padding: 24px;
          border-radius: 47px;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 0%, rgba(255,117,31,0.20), transparent 34%),
            linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.018)),
            #090911;
          border: 1px solid rgba(255,255,255,0.10);
          transform: translateZ(24px);
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
          font-size: 25px;
          line-height: 1.08;
          letter-spacing: -0.04em;
          margin-bottom: 18px;
        }

        .hp-phone-title span {
          display: block;
          margin-top: 6px;
          color: rgba(255,255,255,0.50);
          font-size: 13px;
          letter-spacing: 0;
        }

        .hp-preview {
          padding: 18px;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,0.12);
          background: linear-gradient(135deg, rgba(255,255,255,0.085), rgba(255,255,255,0.028));
          backdrop-filter: blur(20px);
        }

        .hp-browser {
          height: 165px;
          border-radius: 24px;
          background:
            radial-gradient(circle at 78% 24%, rgba(255,117,31,0.32), transparent 32%),
            linear-gradient(135deg, rgba(255,117,31,0.13), rgba(255,255,255,0.035));
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
          background: rgba(0,0,0,0.22);
        }

        .hp-browser-line {
          position: absolute;
          left: 30px;
          height: 8px;
          border-radius: 999px;
          background: rgba(255,255,255,0.18);
        }

        .hp-browser-line.one {
          top: 60px;
          width: 55%;
        }

        .hp-browser-line.two {
          top: 84px;
          width: 38%;
        }

        .hp-browser-line.three {
          bottom: 28px;
          width: 76%;
          background: #ff751f;
          box-shadow: 0 0 16px rgba(255,117,31,0.45);
        }

        .hp-features {
          display: grid;
          gap: 10px;
        }

        .hp-feature {
          display: grid;
          grid-template-columns: 36px 1fr;
          gap: 12px;
          align-items: center;
          padding: 13px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.04);
        }

        .hp-icon {
          width: 36px;
          height: 36px;
          border-radius: 13px;
          border: 1px solid rgba(255,117,31,0.18);
          background: rgba(255,117,31,0.10);
          position: relative;
        }

        .hp-icon::after {
          content: "";
          position: absolute;
          inset: 11px;
          border-radius: 6px;
          border: 1px solid rgba(255,117,31,0.8);
        }

        .hp-feature strong {
          display: block;
          font-size: 13px;
          color: white;
          margin-bottom: 4px;
        }

        .hp-feature span {
          color: rgba(255,255,255,0.45);
          font-size: 10px;
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
          box-shadow: 0 0 30px rgba(255,117,31,0.30);
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
          .hp-tags {
            justify-content: center;
          }

          .hp-phone {
            transform: rotateZ(0deg) !important;
          }
        }

        @media (max-width: 560px) {
          .hp-title {
            font-size: 44px;
          }

          .hp-phone {
            width: 286px;
          }

          .hp-screen {
            min-height: 570px;
            padding: 19px;
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
              <span className="hp-word" ref={wordRef}>
                Experiences.
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

            <div className="hp-tags">
              <span>Web Development</span>
              <span>eCommerce</span>
              <span>Automation</span>
              <span>Brand Systems</span>
            </div>
          </div>

          <div className="hp-visual">
            <div className="hp-light" />

            <div className="hp-phone" ref={phoneRef}>
              <div className="hp-screen">
                <div className="hp-notch" />

                <div className="hp-app-label">AHOS Studio</div>

                <div className="hp-phone-title">
                  Premium Web Build
                  <span>Landing page · eCommerce · Automation</span>
                </div>

                <div className="hp-preview">
                  <div className="hp-browser">
                    <div className="hp-browser-top"></div>
                    <div className="hp-browser-line one"></div>
                    <div className="hp-browser-line two"></div>
                    <div className="hp-browser-line three"></div>
                  </div>

                  <div className="hp-features">
                    <div className="hp-feature">
                      <div className="hp-icon"></div>
                      <div>
                        <strong>Conversion-first pages</strong>
                        <span>Clear structure, strong CTAs, responsive UX.</span>
                      </div>
                    </div>

                    <div className="hp-feature">
                      <div className="hp-icon"></div>
                      <div>
                        <strong>Store & payment setup</strong>
                        <span>Products, checkout, payments, and launch support.</span>
                      </div>
                    </div>

                    <div className="hp-feature">
                      <div className="hp-icon"></div>
                      <div>
                        <strong>Automation-ready systems</strong>
                        <span>Workflows, integrations, and smart business tools.</span>
                      </div>
                    </div>
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

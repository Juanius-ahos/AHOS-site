import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

const words = ["Experiences", "Websites", "eCommerce", "AI Systems", "Brands"];

export function HeroPhone() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const phoneRef = useRef<HTMLDivElement | null>(null);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, 3000);

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

      const count = window.innerWidth < 700 ? 18 : 36;

      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          r: Math.random() * 1.15 + 0.35,
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

      const maxDistance = window.innerWidth < 700 ? 90 : 125;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.22;
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
        ctx.fillStyle = "rgba(255,117,31,0.58)";
        ctx.shadowColor = "rgba(255,117,31,0.32)";
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

  useEffect(() => {
    const phone = phoneRef.current;
    if (!phone) return;

    const canHover =
      window.matchMedia("(hover: hover)").matches &&
      window.matchMedia("(pointer: fine)").matches;

    if (!canHover) return;

    function onMove(e: MouseEvent) {
      const rect = phone.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 12;
      const rotateX = -((y / rect.height) - 0.5) * 12;

      phone.style.transform = `rotateZ(2deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    }

    function onLeave() {
      phone.style.transform = "rotateZ(2deg) rotateX(0deg) rotateY(0deg) translateY(0)";
    }

    phone.addEventListener("mousemove", onMove);
    phone.addEventListener("mouseleave", onLeave);

    return () => {
      phone.removeEventListener("mousemove", onMove);
      phone.removeEventListener("mouseleave", onLeave);
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
          opacity: 0.62;
        }

        .hp-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(circle at 72% 38%, rgba(255,117,31,0.18), transparent 34%),
            radial-gradient(circle at 18% 76%, rgba(255,80,20,0.09), transparent 34%),
            linear-gradient(180deg, rgba(255,255,255,0.018), transparent 35%, rgba(255,117,31,0.022));
        }

        .hp-vignette {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            radial-gradient(circle at center, transparent 18%, rgba(0,0,0,0.58) 100%),
            linear-gradient(90deg, rgba(7,7,15,0.04), transparent 45%, rgba(7,7,15,0.28));
        }

        .hp-inner {
          position: relative;
          z-index: 2;
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.03fr 0.97fr;
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
          font-size: clamp(50px, 6.35vw, 88px);
          line-height: 0.96;
          letter-spacing: -0.07em;
          margin: 0;
          text-shadow: 0 20px 80px rgba(0,0,0,0.72);
        }

        .hp-word-wrap {
          display: block;
          min-height: 1.06em;
          overflow: hidden;
        }

        .hp-word {
          display: inline-block;
          color: #ff751f;
          text-shadow:
            0 0 34px rgba(255,117,31,0.55),
            0 0 90px rgba(255,117,31,0.18);
          animation: hpWordIn 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes hpWordIn {
          from {
            opacity: 0;
            transform: translateY(18px);
            filter: blur(5px);
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
          perspective: 1200px;
        }

        .hp-ambient {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: rgba(255,117,31,0.19);
          filter: blur(90px);
          opacity: 0.82;
        }

        .hp-network {
          position: absolute;
          width: 560px;
          height: 560px;
          opacity: 0.85;
          pointer-events: none;
        }

        .hp-network-dot {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: #ff751f;
          box-shadow: 0 0 12px rgba(255,117,31,0.75);
        }

        .hp-network-line {
          position: absolute;
          height: 1px;
          transform-origin: left center;
          background: linear-gradient(90deg, rgba(255,117,31,0.0), rgba(255,117,31,0.34), rgba(255,117,31,0.0));
        }

        .hp-network-dot.d1 { left: 70px; top: 160px; }
        .hp-network-dot.d2 { right: 85px; top: 120px; }
        .hp-network-dot.d3 { left: 115px; bottom: 125px; }
        .hp-network-dot.d4 { right: 60px; bottom: 180px; }
        .hp-network-dot.d5 { left: 245px; top: 70px; }

        .hp-network-line.l1 {
          left: 74px; top: 163px; width: 350px; transform: rotate(-7deg);
        }

        .hp-network-line.l2 {
          left: 120px; bottom: 128px; width: 330px; transform: rotate(-15deg);
        }

        .hp-network-line.l3 {
          left: 248px; top: 73px; width: 195px; transform: rotate(13deg);
        }

        .hp-network-line.l4 {
          left: 116px; bottom: 128px; width: 160px; transform: rotate(-65deg);
        }

        .hp-phone-wrap {
          position: relative;
          z-index: 3;
          transform-style: preserve-3d;
        }

        .hp-phone {
          position: relative;
          width: 350px;
          border-radius: 56px;
          padding: 12px;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.26), rgba(255,255,255,0.06) 18%, #030306 72%);
          border: 1px solid rgba(255,255,255,0.22);
          box-shadow:
            0 60px 150px rgba(0,0,0,0.9),
            0 0 74px rgba(255,117,31,0.18),
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
          top: 95px;
          width: 10px;
          height: 130px;
          border-radius: 0 10px 10px 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.25), rgba(255,255,255,0.04));
          opacity: 0.45;
        }

        .hp-phone::after {
          content: "";
          position: absolute;
          left: 34px;
          right: 34px;
          bottom: -10px;
          height: 18px;
          border-radius: 999px;
          background: rgba(255,117,31,0.20);
          filter: blur(20px);
        }

        .hp-screen {
          min-height: 635px;
          border-radius: 45px;
          padding: 24px;
          overflow: hidden;
          background:
            radial-gradient(circle at 48% 0%, rgba(255,117,31,0.23), transparent 34%),
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
          box-shadow: inset 0 -1px 0 rgba(255,255,255,0.08);
        }

        .hp-app-label {
          color: #ff751f;
          font-size: 11px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          margin-bottom: 17px;
        }

        .hp-phone-title {
          font-size: 24px;
          line-height: 1.08;
          letter-spacing: -0.04em;
          margin-bottom: 18px;
        }

        .hp-phone-title span {
          color: rgba(255,255,255,0.54);
          font-size: 13px;
          letter-spacing: 0;
        }

        .hp-showcase {
          display: grid;
          gap: 14px;
        }

        .hp-hero-card {
          padding: 18px;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.12);
          background:
            linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.028));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .hp-hero-card-top {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          align-items: center;
          margin-bottom: 16px;
        }

        .hp-hero-card-title {
          font-size: 14px;
          color: #ffffff;
        }

        .hp-hero-card-pill {
          padding: 5px 9px;
          border-radius: 999px;
          background: rgba(255,117,31,0.12);
          color: #ff751f;
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .hp-store-preview {
          display: grid;
          grid-template-columns: 82px 1fr;
          gap: 14px;
          align-items: center;
        }

        .hp-product {
          height: 92px;
          border-radius: 20px;
          background:
            radial-gradient(circle at 50% 22%, rgba(255,255,255,0.20), transparent 28%),
            linear-gradient(135deg, rgba(255,117,31,0.25), rgba(255,255,255,0.04));
          border: 1px solid rgba(255,255,255,0.12);
          position: relative;
          overflow: hidden;
        }

        .hp-product::before {
          content: "";
          position: absolute;
          left: 28px;
          right: 28px;
          top: 22px;
          height: 42px;
          border-radius: 12px;
          background: rgba(0,0,0,0.32);
          border: 1px solid rgba(255,255,255,0.10);
        }

        .hp-product-copy strong {
          display: block;
          color: #ffffff;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .hp-product-copy span {
          display: block;
          color: rgba(255,255,255,0.48);
          font-size: 11px;
          line-height: 1.5;
        }

        .hp-progress {
          height: 7px;
          border-radius: 999px;
          background: rgba(255,255,255,0.10);
          overflow: hidden;
          margin-top: 13px;
        }

        .hp-progress div {
          height: 100%;
          width: 82%;
          border-radius: 999px;
          background: linear-gradient(90deg, #ff751f, #ff9a52);
          box-shadow: 0 0 16px rgba(255,117,31,0.42);
        }

        .hp-feature-list {
          display: grid;
          gap: 10px;
        }

        .hp-feature {
          display: grid;
          grid-template-columns: 34px 1fr 16px;
          align-items: center;
          gap: 12px;
          padding: 13px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.04);
        }

        .hp-feature-icon {
          width: 34px;
          height: 34px;
          border-radius: 12px;
          background: rgba(255,117,31,0.11);
          border: 1px solid rgba(255,117,31,0.18);
        }

        .hp-feature-copy strong {
          display: block;
          color: white;
          font-size: 13px;
          margin-bottom: 4px;
        }

        .hp-feature-copy span {
          color: rgba(255,255,255,0.44);
          font-size: 10px;
        }

        .hp-arrow {
          color: rgba(255,255,255,0.35);
          font-size: 18px;
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
          width: 220px;
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
          top: 110px;
          left: -8px;
        }

        .hp-glass.two {
          right: -18px;
          bottom: 150px;
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

          .hp-phone {
            transform: rotateZ(0deg) !important;
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
            width: 284px;
          }

          .hp-screen {
            min-height: 575px;
            padding: 19px;
          }

          .hp-network,
          .hp-glass {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
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
              AHOS creates high-performance websites, eCommerce stores, AI
              automations, and premium brand systems for ambitious businesses.
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
              <span>Web Development</span>
              <span>eCommerce</span>
              <span>AI Automation</span>
              <span>Brand Systems</span>
            </div>
          </div>

          <div className="hp-visual">
            <div className="hp-ambient" />

            <div className="hp-network">
              <span className="hp-network-dot d1" />
              <span className="hp-network-dot d2" />
              <span className="hp-network-dot d3" />
              <span className="hp-network-dot d4" />
              <span className="hp-network-dot d5" />
              <span className="hp-network-line l1" />
              <span className="hp-network-line l2" />
              <span className="hp-network-line l3" />
              <span className="hp-network-line l4" />
            </div>

            <div className="hp-phone-wrap">
              <div className="hp-phone" ref={phoneRef}>
                <div className="hp-screen">
                  <div className="hp-notch" />

                  <div className="hp-app-label">AHOS Studio</div>

                  <div className="hp-phone-title">
                    eCommerce Build
                    <br />
                    <span>Conversion-focused interface</span>
                  </div>

                  <div className="hp-showcase">
                    <div className="hp-hero-card">
                      <div className="hp-hero-card-top">
                        <span className="hp-hero-card-title">Online Store Setup</span>
                        <span className="hp-hero-card-pill">Premium</span>
                      </div>

                      <div className="hp-store-preview">
                        <div className="hp-product" />

                        <div className="hp-product-copy">
                          <strong>Modern storefront</strong>
                          <span>
                            Product pages, payments, responsive design, and launch support.
                          </span>

                          <div className="hp-progress">
                            <div />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="hp-feature-list">
                      <div className="hp-feature">
                        <div className="hp-feature-icon" />
                        <div className="hp-feature-copy">
                          <strong>Website Development</strong>
                          <span>Fast, responsive, and conversion-ready.</span>
                        </div>
                        <div className="hp-arrow">›</div>
                      </div>

                      <div className="hp-feature">
                        <div className="hp-feature-icon" />
                        <div className="hp-feature-copy">
                          <strong>Payments & Checkout</strong>
                          <span>Multiple payment options and order flows.</span>
                        </div>
                        <div className="hp-arrow">›</div>
                      </div>

                      <div className="hp-feature">
                        <div className="hp-feature-icon" />
                        <div className="hp-feature-copy">
                          <strong>Analytics & Automation</strong>
                          <span>Performance tracking and smart workflows.</span>
                        </div>
                        <div className="hp-arrow">›</div>
                      </div>
                    </div>

                    <div className="hp-launch">Ready for Launch</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hp-glass one">
              <strong>Premium Web Builds</strong>
              <span>Custom websites and stores designed to convert visitors into clients.</span>
            </div>

            <div className="hp-glass two">
              <strong>Complete Setup</strong>
              <span>Design, development, payments, analytics, and support in one place.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

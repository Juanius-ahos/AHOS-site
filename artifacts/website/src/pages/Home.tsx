import { useEffect, useRef, useState, useCallback } from "react";

const SERVICES = [
  { num: "01", title: "Web Development", text: "Premium websites built to feel sharp, fast, responsive, and conversion-focused." },
  { num: "02", title: "E-commerce", text: "Online stores with clean product flows, payments, checkout, and launch support." },
  { num: "03", title: "AI Automation", text: "Smart workflows that reduce manual work and make businesses move faster." },
  { num: "04", title: "Custom Systems", text: "Dashboards, platforms, portals, and internal tools built around real operations." },
  { num: "05", title: "Branding", text: "Visual identities and digital systems that make brands look serious everywhere." },
  { num: "06", title: "Web3", text: "Modern interfaces and digital products for blockchain, crypto, and DeFi ideas." },
];

const PROCESS = [
  { num: "01", title: "Discover", text: "We understand your business, offer, users, and goals before designing anything." },
  { num: "02", title: "Design", text: "We create a premium interface direction that makes the brand feel sharp and credible." },
  { num: "03", title: "Build", text: "We develop the website, platform, automation, or system with clean execution." },
  { num: "04", title: "Launch", text: "We help deploy, test, optimize, and support the product after it goes live." },
];

const STATS = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 4, suffix: "x", label: "Avg. Revenue Lift" },
  { value: 14, suffix: "d", label: "Average Turnaround" },
];

const TICKER_ITEMS = [
  "Web Development", "E-commerce", "AI Automation", "Branding", "Web3", "Custom Systems",
  "Web Development", "E-commerce", "AI Automation", "Branding", "Web3", "Custom Systems",
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCounter(target: number, active: boolean, duration = 1800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const raf = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [active, target, duration]);
  return val;
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, inView } = useInView(0.4);
  const count = useCounter(value, inView);
  return (
    <div ref={ref} style={{ textAlign: "center", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(32px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
      <div style={{ fontSize: "clamp(52px,6vw,88px)", fontWeight: 900, letterSpacing: "-0.06em", lineHeight: 1, background: "linear-gradient(135deg,#fff 30%,rgba(255,117,31,0.9))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        {count}{suffix}
      </div>
      <div style={{ marginTop: 10, color: "rgba(255,255,255,0.5)", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.14em" }}>{label}</div>
    </div>
  );
}

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 110;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      alpha: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p, i) => {
        p.pulse += 0.012;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const a = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,117,31,${a})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(255,117,31,${0.09 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />;
}

function FilmGrain() {
  return (
    <div style={{
      position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999, opacity: 0.032,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat", backgroundSize: "128px 128px",
    }} />
  );
}

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -300, y: -300 });
  const curr = useRef({ x: -300, y: -300 });
  useEffect(() => {
    const move = (e: MouseEvent) => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", move);
    let raf: number;
    const animate = () => {
      curr.current.x += (pos.current.x - curr.current.x) * 0.08;
      curr.current.y += (pos.current.y - curr.current.y) * 0.08;
      if (ref.current) {
        ref.current.style.transform = `translate(${curr.current.x - 300}px,${curr.current.y - 300}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div ref={ref} style={{
      position: "fixed", top: 0, left: 0, width: 600, height: 600, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(255,117,31,0.09) 0%, transparent 70%)",
      pointerEvents: "none", zIndex: 1, willChange: "transform",
    }} />
  );
}

function SectionReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(48px)",
      transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const { ref, inView } = useInView(0.1);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", padding: "36px 32px", borderRadius: 28,
        background: hovered
          ? "linear-gradient(145deg,rgba(255,117,31,0.12),rgba(255,255,255,0.06))"
          : "linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))",
        border: `1px solid ${hovered ? "rgba(255,117,31,0.45)" : "rgba(255,255,255,0.08)"}`,
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        transform: inView
          ? hovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)"
          : "translateY(40px)",
        opacity: inView ? 1 : 0,
        transitionDelay: `${index * 80}ms`,
        cursor: "default", overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", right: -40, bottom: -40, width: 200, height: 200,
        background: "rgba(255,117,31,0.18)", filter: "blur(60px)",
        opacity: hovered ? 1 : 0, transition: "opacity 0.4s ease",
      }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
          <span style={{ color: "#ff751f", fontFamily: "monospace", fontSize: 11, letterSpacing: "0.2em", opacity: 0.8 }}>{service.num}</span>
          <div style={{
            width: 32, height: 32, borderRadius: "50%",
            border: "1px solid rgba(255,117,31,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            opacity: hovered ? 1 : 0.3, transition: "opacity 0.3s ease",
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2v6" stroke="#ff751f" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <h3 style={{ margin: "0 0 14px", fontSize: "clamp(20px,2vw,26px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1 }}>{service.title}</h3>
        <p style={{ margin: 0, color: "rgba(255,255,255,0.52)", lineHeight: 1.75, fontSize: 14 }}>{service.text}</p>
      </div>
    </div>
  );
}

function ProcessStep({ step, index }: { step: typeof PROCESS[0]; index: number }) {
  const { ref, inView } = useInView(0.1);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", gap: 28, alignItems: "flex-start",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-30px)",
        transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${index * 120}ms`,
        padding: "28px 0",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div style={{
        flexShrink: 0, width: 52, height: 52, borderRadius: "50%",
        background: hovered ? "rgba(255,117,31,0.2)" : "rgba(255,255,255,0.05)",
        border: `1px solid ${hovered ? "rgba(255,117,31,0.5)" : "rgba(255,255,255,0.1)"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 11, color: "#ff751f", fontFamily: "monospace", letterSpacing: "0.1em",
        transition: "all 0.35s ease",
      }}>
        {step.num}
      </div>
      <div>
        <h3 style={{ margin: "0 0 8px", fontSize: "clamp(18px,2vw,24px)", fontWeight: 800, letterSpacing: "-0.04em" }}>{step.title}</h3>
        <p style={{ margin: 0, color: "rgba(255,255,255,0.52)", lineHeight: 1.75, fontSize: 14 }}>{step.text}</p>
      </div>
    </div>
  );
}

function HeroTitle() {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => { setTimeout(() => setRevealed(true), 200); }, []);
  const line1 = "We build digital";
  const line2 = "experiences that make";
  const line3 = "brands impossible";
  const line4 = "to ignore.";
  return (
    <h1 style={{
      margin: "0 auto", fontSize: "clamp(52px,7.5vw,118px)", lineHeight: 0.9,
      letterSpacing: "-0.08em", fontWeight: 900, overflow: "hidden",
    }}>
      {[line1, line2, line3, line4].map((line, li) => (
        <span key={li} style={{ display: "block", overflow: "hidden" }}>
          <span style={{
            display: "block",
            transform: revealed ? "translateY(0)" : "translateY(110%)",
            transition: `transform 1s cubic-bezier(0.16,1,0.3,1) ${li * 100 + 300}ms`,
            color: li === 3 ? "#ff751f" : "#fff",
            textShadow: li === 3 ? "0 0 60px rgba(255,117,31,0.45), 0 0 140px rgba(255,117,31,0.2)" : "none",
          }}>
            {line}
          </span>
        </span>
      ))}
    </h1>
  );
}

function Ticker() {
  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "18px 0", margin: "80px 0 0" }}>
      <div style={{ display: "flex", gap: 56, animation: "ticker 22s linear infinite", whiteSpace: "nowrap" }}>
        {TICKER_ITEMS.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 20, color: "rgba(255,255,255,0.38)", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.18em", flexShrink: 0 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#ff751f", flexShrink: 0, boxShadow: "0 0 10px rgba(255,117,31,0.8)" }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ShowcasePanel() {
  const { ref, inView } = useInView(0.1);
  const items = [
    ["Visual Identity", "Premium"],
    ["Website Structure", "Conversion-focused"],
    ["Responsive Design", "All devices"],
    ["Automation Layer", "Optional"],
    ["Launch Support", "Included"],
  ];
  return (
    <div
      ref={ref}
      style={{
        padding: "2px", borderRadius: 36,
        background: "linear-gradient(145deg,rgba(255,117,31,0.35),rgba(255,255,255,0.08),rgba(255,117,31,0.12))",
        opacity: inView ? 1 : 0, transform: inView ? "translateX(0) rotateY(0deg)" : "translateX(40px) rotateY(8deg)",
        transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.2s",
        perspective: "1000px",
      }}
    >
      <div style={{
        borderRadius: 35, padding: "32px",
        background: "radial-gradient(circle at 80% 15%,rgba(255,117,31,0.14),transparent 40%), linear-gradient(145deg,rgba(14,14,22,0.97),rgba(8,8,14,0.99))",
        backdropFilter: "blur(30px)",
      }}>
        <div style={{ marginBottom: 28, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5c5c" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)", marginLeft: 12 }} />
        </div>
        {items.map(([label, val], i) => (
          <div key={i} style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "18px 0", borderBottom: i < items.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
          }}>
            <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, fontWeight: 500 }}>{label}</span>
            <span style={{
              padding: "5px 14px", borderRadius: 999,
              background: "rgba(255,117,31,0.12)", border: "1px solid rgba(255,117,31,0.3)",
              color: "#ff9448", fontSize: 12, letterSpacing: "0.06em",
            }}>{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AhosHome() {
  const [scrollY, setScrollY] = useState(0);
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    setHeroReady(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: "#06060e", color: "#fff", minHeight: "100vh", fontFamily: "'Inter',system-ui,sans-serif", overflowX: "hidden" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap');
        * { box-sizing: border-box; }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes floatBadge { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes orb1 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(40px,-30px) scale(1.1)} 66%{transform:translate(-20px,20px) scale(0.95)} }
        @keyframes orb2 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-50px,40px) scale(1.05)} 66%{transform:translate(30px,-20px) scale(1.12)} }
        @keyframes orb3 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(20px,50px) scale(0.9)} 66%{transform:translate(-40px,-30px) scale(1.08)} }
        @keyframes badgePulse { 0%,100%{box-shadow:0 0 0 0 rgba(255,117,31,0.4)} 50%{box-shadow:0 0 0 8px rgba(255,117,31,0)} }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #06060e; }
        ::-webkit-scrollbar-thumb { background: rgba(255,117,31,0.4); border-radius: 2px; }
      `}</style>

      <FilmGrain />
      <CursorGlow />

      {/* Scanline */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, height: 2,
        background: "linear-gradient(90deg,transparent,rgba(255,117,31,0.15),transparent)",
        animation: "scanline 8s linear infinite", pointerEvents: "none", zIndex: 10, opacity: 0.6,
      }} />

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center",
        background: scrollY > 60 ? "rgba(6,6,14,0.88)" : "transparent",
        backdropFilter: scrollY > 60 ? "blur(24px)" : "none",
        borderBottom: scrollY > 60 ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.5s ease",
      }}>
        <div style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.04em" }}>
          <span style={{ color: "#ff751f" }}>AHOS</span>
          <span style={{ color: "rgba(255,255,255,0.55)", marginLeft: 6, fontWeight: 400, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase" }}>Studio</span>
        </div>
        <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {["Services", "Work", "Process", "Contact"].map(item => (
            <a key={item} href="#" style={{
              color: "rgba(255,255,255,0.5)", fontSize: 13, textDecoration: "none",
              textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500,
              transition: "color 0.2s ease",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >{item}</a>
          ))}
          <a href="#" style={{
            padding: "10px 24px", borderRadius: 12,
            background: "linear-gradient(135deg,#ff9448,#ff5c00)",
            color: "#fff", fontSize: 12, textDecoration: "none", fontWeight: 800,
            textTransform: "uppercase", letterSpacing: "0.08em",
            boxShadow: "0 8px 32px rgba(255,117,31,0.35)",
            transition: "all 0.3s ease",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(255,117,31,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(255,117,31,0.35)"; }}
          >Start a Project</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", padding: "160px 48px 0", overflow: "hidden" }}>

        {/* Background orbs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div style={{ position: "absolute", width: 900, height: 900, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,117,31,0.13),transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-55%)", animation: "orb1 18s ease-in-out infinite" }} />
          <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,117,31,0.10),transparent 70%)", top: "20%", left: "10%", animation: "orb2 24s ease-in-out infinite" }} />
          <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,60,0,0.08),transparent 70%)", bottom: "10%", right: "8%", animation: "orb3 20s ease-in-out infinite" }} />
        </div>

        {/* Grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)",
          transform: `translateY(${scrollY * 0.15}px)`,
        }} />

        <Particles />

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 1200, width: "100%", margin: "0 auto" }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "10px 20px", borderRadius: 999,
            border: "1px solid rgba(255,117,31,0.35)",
            background: "rgba(255,117,31,0.08)",
            backdropFilter: "blur(20px)", marginBottom: 44,
            opacity: heroReady ? 1 : 0, transform: heroReady ? "translateY(0)" : "translateY(-20px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s",
            animation: "floatBadge 5s ease-in-out infinite",
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff751f", boxShadow: "0 0 12px rgba(255,117,31,1)", animation: "badgePulse 2s ease-in-out infinite" }} />
            <span style={{ color: "#ff9448", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700 }}>AHOS Digital Studio</span>
          </div>

          <HeroTitle />

          <div style={{
            maxWidth: 680, margin: "40px auto 0",
            color: "rgba(255,255,255,0.58)", fontSize: 19, lineHeight: 1.85,
            opacity: heroReady ? 1 : 0, transform: heroReady ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.8s",
          }}>
            AHOS creates premium websites, e-commerce platforms, brand systems,
            automations, and custom digital products for ambitious businesses.
          </div>

          <div style={{
            display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginTop: 48,
            opacity: heroReady ? 1 : 0, transform: heroReady ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 1s",
          }}>
            <a href="#" style={{
              minHeight: 56, padding: "0 36px", borderRadius: 16,
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              background: "linear-gradient(135deg,#ff9448,#ff5000)",
              color: "#fff", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em",
              fontWeight: 800, textDecoration: "none",
              boxShadow: "0 20px 60px rgba(255,117,31,0.4), 0 4px 16px rgba(255,117,31,0.3)",
              transition: "all 0.35s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 30px 80px rgba(255,117,31,0.55), 0 4px 20px rgba(255,117,31,0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(255,117,31,0.4), 0 4px 16px rgba(255,117,31,0.3)"; }}
            >
              Start a Project
              <svg style={{ marginLeft: 10 }} width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2v7" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </a>
            <a href="#" style={{
              minHeight: 56, padding: "0 36px", borderRadius: 16,
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(20px)", color: "rgba(255,255,255,0.82)",
              fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700,
              textDecoration: "none", transition: "all 0.35s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
            >
              Explore Services
            </a>
          </div>

          {/* Scroll hint */}
          <div style={{
            marginTop: 72, display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
            opacity: heroReady ? 0.4 : 0, transition: "opacity 1s ease 1.5s",
          }}>
            <div style={{ width: 1, height: 52, background: "linear-gradient(to bottom, rgba(255,117,31,0.8), transparent)", animation: "scanline 2s ease-in-out infinite" }} />
            <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.22em", color: "rgba(255,255,255,0.4)" }}>Scroll</span>
          </div>
        </div>

        <Ticker />
      </section>

      {/* STATS */}
      <section style={{ padding: "100px 48px", position: "relative" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24,
            padding: "56px 48px", borderRadius: 36,
            background: "linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            {STATS.map((s, i) => (
              <StatItem key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "80px 48px 120px", position: "relative" }}>
        <div style={{ position: "absolute", right: 0, top: "20%", width: 600, height: 600, background: "radial-gradient(circle,rgba(255,117,31,0.07),transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionReveal>
            <div style={{ marginBottom: 64 }}>
              <div style={{ color: "#ff751f", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: 11, marginBottom: 16, fontWeight: 700 }}>What We Build</div>
              <h2 style={{ margin: "0 0 20px", fontSize: "clamp(36px,5vw,68px)", lineHeight: 0.95, letterSpacing: "-0.06em", fontWeight: 900, maxWidth: 780 }}>
                Digital systems with the polish of a brand and the power of software.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.8, maxWidth: 600, margin: 0 }}>
                We combine strategy, design, development, and automation to create
                websites and systems that look premium and work properly.
              </p>
            </div>
          </SectionReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
            {SERVICES.map((s, i) => <ServiceCard key={i} service={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* WHY AHOS */}
      <section style={{ padding: "80px 48px 120px", position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: "30%", width: 500, height: 500, background: "radial-gradient(circle,rgba(255,117,31,0.07),transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <SectionReveal>
            <div style={{ color: "#ff751f", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: 11, marginBottom: 16, fontWeight: 700 }}>Why AHOS</div>
            <h2 style={{ margin: "0 0 20px", fontSize: "clamp(36px,4.5vw,62px)", lineHeight: 0.95, letterSpacing: "-0.06em", fontWeight: 900 }}>
              Not another template. A digital presence engineered around growth.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.8, margin: "0 0 36px" }}>
              Every section, interaction, page, and system is designed to help your
              business look more credible, communicate faster, and convert better.
            </p>
            <a href="#" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              color: "#ff9448", fontSize: 13, textDecoration: "none", fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.1em",
            }}>
              Learn how we work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="#ff9448" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </SectionReveal>
          <ShowcasePanel />
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "80px 48px 120px", position: "relative" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          <SectionReveal>
            <div style={{ color: "#ff751f", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: 11, marginBottom: 16, fontWeight: 700 }}>Process</div>
            <h2 style={{ margin: "0 0 20px", fontSize: "clamp(36px,4.5vw,62px)", lineHeight: 0.95, letterSpacing: "-0.06em", fontWeight: 900 }}>
              From first idea to final launch, without the mess.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.8, margin: 0 }}>
              We keep the workflow clear, direct, and focused on building something
              that actually helps the business.
            </p>
          </SectionReveal>
          <div>
            {PROCESS.map((step, i) => <ProcessStep key={i} step={step} index={i} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 48px 120px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionReveal>
            <div style={{
              padding: "80px 72px", borderRadius: 44, position: "relative", overflow: "hidden",
              background: "linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))",
              border: "1px solid rgba(255,255,255,0.1)",
            }}>
              <div style={{ position: "absolute", right: -80, top: -80, width: 500, height: 500, background: "radial-gradient(circle,rgba(255,117,31,0.22),transparent 60%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", left: -40, bottom: -40, width: 300, height: 300, background: "radial-gradient(circle,rgba(255,60,0,0.1),transparent 60%)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 48 }}>
                <div style={{ maxWidth: 620 }}>
                  <div style={{ color: "#ff751f", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: 11, marginBottom: 20, fontWeight: 700 }}>Start with AHOS</div>
                  <h2 style={{ margin: "0 0 20px", fontSize: "clamp(36px,4.5vw,62px)", lineHeight: 0.95, letterSpacing: "-0.06em", fontWeight: 900 }}>
                    Ready to make your brand look serious online?
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                    Bring the idea. We'll help shape it, design it, build it,
                    and launch it with the level of polish your business deserves.
                  </p>
                </div>
                <a href="#" style={{
                  flexShrink: 0, padding: "22px 40px", borderRadius: 20,
                  background: "linear-gradient(135deg,#ff9448,#ff5000)",
                  color: "#fff", fontSize: 12, fontWeight: 800,
                  textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none",
                  boxShadow: "0 24px 70px rgba(255,117,31,0.45)",
                  display: "flex", alignItems: "center", gap: 12,
                  transition: "all 0.35s ease", whiteSpace: "nowrap",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 36px 90px rgba(255,117,31,0.6)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 24px 70px rgba(255,117,31,0.45)"; }}
                >
                  Contact AHOS
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H6M13 3v7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.07)", padding: "48px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        maxWidth: 1200, margin: "0 auto",
      }}>
        <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: "-0.04em" }}>
          <span style={{ color: "#ff751f" }}>AHOS</span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 400, fontSize: 11, marginLeft: 8, textTransform: "uppercase", letterSpacing: "0.12em" }}>Digital Studio</span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>
          © 2025 AHOS. All rights reserved.
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {["Twitter", "LinkedIn", "Instagram"].map(s => (
            <a key={s} href="#" style={{
              color: "rgba(255,255,255,0.35)", fontSize: 12, textDecoration: "none",
              textTransform: "uppercase", letterSpacing: "0.1em",
              transition: "color 0.2s ease",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#ff9448")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
            >{s}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}

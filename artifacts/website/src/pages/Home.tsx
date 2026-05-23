import { useEffect } from "react";
import { Link } from "wouter";
import { Footer } from "../components/Footer";

const services = [
  {
    number: "01",
    title: "Custom Software",
    text: "Tailored platforms, dashboards, internal tools, and business systems built around the way your company actually works.",
    tags: ["Platforms", "Dashboards", "APIs"],
    href: "/services",
  },
  {
    number: "02",
    title: "Web Development",
    text: "Premium websites, landing pages, and business platforms designed to look sharp, load fast, and convert clearly.",
    tags: ["Websites", "Landing Pages", "E-commerce"],
    href: "/services",
    featured: true,
  },
  {
    number: "03",
    title: "AI Automation",
    text: "Workflow automations, AI tools, integrations, and operational systems that remove repetitive work and save time.",
    tags: ["AI Tools", "Workflows", "Integrations"],
    href: "/services",
  },
  {
    number: "04",
    title: "Web3 & Blockchain",
    text: "Blockchain interfaces, token systems, smart contract experiences, and decentralized products built with clarity.",
    tags: ["Smart Contracts", "Web3", "DeFi"],
    href: "/blockchain-services",
  },
];

const projects = [
  ["SpeeAligner", "Dental Tech"],
  ["YourProvider", "Security & Automation"],
  ["ido taxi", "Transport App"],
  ["DigitalTrans", "Tech Partner"],
  ["defi.app", "DeFi Protocol"],
  ["abs.xyz", "L2 Web3 Platform"],
  ["$ABAS", "Token Project"],
  ["$HOOT", "Meme Token"],
];

const stats = [
  ["Custom", "Built Around Your Business"],
  ["24/7", "Support Availability"],
  ["Fast", "Launch-Focused Delivery"],
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    text: "A focused consultation where we understand your goals, define the product, and map a clear plan.",
    bullets: ["Free consultation", "Project brief", "Clear timeline"],
  },
  {
    number: "02",
    title: "Design & Build",
    text: "We craft your interface, develop the system, and keep the work structured through clean milestones.",
    bullets: ["Premium UI", "Clean code", "Milestone updates"],
  },
  {
    number: "03",
    title: "Launch & Support",
    text: "We deploy, test, monitor, and support the product so it stays reliable after launch.",
    bullets: ["Deployment", "Monitoring", "Ongoing support"],
  },
];

const stackItems = [
  "Web Development",
  "Custom Software",
  "E-commerce",
  "AI Automation",
  "Brand Systems",
  "Web3",
  "Launch Support",
  "Digital Strategy",
];

export default function Home() {
  useEffect(() => {
    const loadInstagram = () => {
      const existingScript = document.querySelector<HTMLScriptElement>(
        'script[src="https://www.instagram.com/embed.js"]'
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
        return;
      }

      if ((window as any).instgrm?.Embeds) {
        (window as any).instgrm.Embeds.process();
      }
    };

    loadInstagram();
  }, []);

  return (
    <>
      <style>{`
        :root {
          --bg: #040404;
          --bg-2: #090909;
          --text: #ffffff;
          --muted: rgba(255,255,255,.68);
          --soft: rgba(255,255,255,.46);
          --faint: rgba(255,255,255,.24);
          --line: rgba(255,255,255,.12);
          --line-hot: rgba(255,117,31,.34);
          --panel: rgba(255,255,255,.055);
          --panel-2: rgba(255,255,255,.085);
          --orange: #ff751f;
          --orange-2: #ff9a4a;
          --orange-soft: rgba(255,117,31,.16);
          --shadow: 0 42px 140px rgba(0,0,0,.66);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: var(--bg); }

        .home {
          min-height: 100vh;
          overflow: hidden;
          color: var(--text);
          background:
            radial-gradient(circle at 72% 8%, rgba(255,117,31,.14), transparent 34%),
            radial-gradient(circle at 18% 78%, rgba(255,117,31,.055), transparent 30%),
            linear-gradient(180deg, #040404 0%, #090909 48%, #040404 100%);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
        }

        .home a { color: inherit; }

        .wrap {
          width: min(1180px, calc(100% - 44px));
          margin: 0 auto;
          position: relative;
          z-index: 3;
        }

        .noise,
        .grid,
        .aurora,
        .vignette {
          position: fixed;
          inset: 0;
          pointer-events: none;
        }

        .noise {
          z-index: 1;
          opacity: .035;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E");
        }

        .grid {
          z-index: 0;
          opacity: .14;
          background:
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.026) 1px, transparent 1px);
          background-size: 88px 88px;
          mask-image: radial-gradient(circle at 50% 28%, black, transparent 72%);
        }

        .aurora {
          z-index: 0;
          opacity: .78;
          background:
            radial-gradient(circle at 72% 28%, rgba(255,117,31,.13), transparent 30%),
            linear-gradient(115deg, transparent 0 46%, rgba(255,117,31,.048) 50%, transparent 56%);
          animation: auroraMove 12s ease-in-out infinite alternate;
        }

        .vignette {
          z-index: 2;
          background: radial-gradient(circle at center, transparent 0 48%, rgba(0,0,0,.54) 100%);
        }

        @keyframes auroraMove {
          from { transform: translate3d(-1%, -1%, 0) scale(1); }
          to { transform: translate3d(1.2%, 1%, 0) scale(1.035); }
        }

        .eyebrow,
        .section-kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: var(--orange);
          text-transform: uppercase;
          letter-spacing: .22em;
          font-size: 11px;
          font-weight: 900;
        }

        .eyebrow::before,
        .section-kicker::before {
          content: "";
          width: 42px;
          height: 1px;
          background: linear-gradient(90deg, var(--orange), transparent);
        }

        .btn {
          min-height: 56px;
          padding: 0 28px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid var(--line);
          text-decoration: none;
          color: #fff;
          background: rgba(255,255,255,.045);
          backdrop-filter: blur(14px);
          text-transform: uppercase;
          letter-spacing: .13em;
          font-size: 12px;
          font-weight: 900;
          transition: transform .3s ease, border-color .3s ease, background .3s ease, box-shadow .3s ease;
        }

        .btn::after { content: "→"; font-size: 15px; }

        .btn-primary {
          background: linear-gradient(135deg, var(--orange), var(--orange-2));
          color: #070707;
          border-color: rgba(255,117,31,.95);
          box-shadow: 0 18px 60px rgba(255,117,31,.2);
        }

        .btn:hover {
          transform: translateY(-3px);
          border-color: rgba(255,117,31,.55);
          background: rgba(255,117,31,.08);
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #ff8731, #ffb06b);
          box-shadow: 0 24px 80px rgba(255,117,31,.3);
        }

        .reveal {
          animation: revealUp linear both;
          animation-timeline: view();
          animation-range: entry 0% cover 32%;
        }

        @keyframes revealUp {
          from { opacity: .35; transform: translateY(46px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes rise {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 135px 0 86px;
          isolation: isolate;
        }

        .hero::after {
          content: "";
          position: absolute;
          left: -10%;
          right: -10%;
          bottom: 0;
          height: 28%;
          background: linear-gradient(to top, var(--bg), transparent);
          z-index: 2;
          pointer-events: none;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 520px;
          align-items: center;
          gap: 86px;
        }

        .hero-badge {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 14px;
          margin-bottom: 22px;
          border-radius: 999px;
          border: 1px solid rgba(255,117,31,.28);
          background: rgba(255,117,31,.08);
          color: var(--orange);
          text-transform: uppercase;
          letter-spacing: .13em;
          font-size: 11px;
          font-weight: 900;
          animation: rise .75s ease both;
        }

        .hero-badge i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--orange);
          box-shadow: 0 0 0 0 rgba(255,117,31,.6);
          animation: ping 2s ease-out infinite;
        }

        @keyframes ping {
          0% { box-shadow: 0 0 0 0 rgba(255,117,31,.65); }
          70% { box-shadow: 0 0 0 9px rgba(255,117,31,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,117,31,0); }
        }

        .hero .eyebrow {
          margin-bottom: 22px;
          animation: rise .75s ease .08s both;
        }

        .hero-title {
          max-width: 880px;
          margin: 0;
          font-size: clamp(54px, 7.6vw, 104px);
          line-height: .88;
          letter-spacing: -.075em;
          text-transform: uppercase;
          font-weight: 950;
          animation: rise .75s ease .16s both;
        }

        .hero-title .muted-word { color: rgba(255,255,255,.56); }
        .hero-title .accent-word {
          color: var(--orange);
          text-shadow: 0 0 48px rgba(255,117,31,.32);
        }

        .hero-copy {
          max-width: 650px;
          margin: 30px 0 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.82;
          animation: rise .75s ease .24s both;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 38px;
          animation: rise .75s ease .32s both;
        }

        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 30px;
          animation: rise .75s ease .4s both;
        }

        .hero-tags span {
          padding: 10px 14px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 999px;
          background: rgba(255,255,255,.032);
          color: rgba(255,255,255,.56);
          text-transform: uppercase;
          letter-spacing: .13em;
          font-size: 11px;
          font-weight: 800;
        }

        .phone-stage {
          position: relative;
          min-height: 650px;
          display: grid;
          place-items: center;
          perspective: 1400px;
          animation: rise .85s ease .18s both;
        }

        .phone-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,117,31,.17), transparent 64%);
          filter: blur(8px);
          animation: glowPulse 5.8s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%,100% { transform: scale(.96); opacity: .68; }
          50% { transform: scale(1.04); opacity: .9; }
        }

        .phone-orbit {
          position: absolute;
          width: 540px;
          height: 540px;
          border-radius: 50%;
          border: 1px solid rgba(255,117,31,.12);
          box-shadow: inset 0 0 90px rgba(255,117,31,.028);
        }

        .phone-orbit::before,
        .phone-orbit::after {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--orange);
          box-shadow: 0 0 22px rgba(255,117,31,.75);
        }

        .phone-orbit::before { top: 46px; left: 130px; }
        .phone-orbit::after { right: 92px; bottom: 78px; }

        .iphone {
          position: relative;
          z-index: 4;
          width: 318px;
          height: 646px;
          border-radius: 54px;
          padding: 12px;
          background:
            linear-gradient(145deg, #5a5d64 0%, #1c1d20 28%, #050505 52%, #2d3036 100%);
          border: 1px solid rgba(255,255,255,.28);
          box-shadow:
            0 55px 140px rgba(0,0,0,.72),
            0 0 0 8px rgba(255,255,255,.022),
            inset 0 0 0 1px rgba(255,255,255,.18),
            inset 10px 0 24px rgba(255,255,255,.08),
            inset -12px 0 28px rgba(0,0,0,.7);
          transform: rotateX(5deg) rotateY(-9deg) rotateZ(1deg);
          animation: phoneFloat 6s ease-in-out infinite;
        }

        .iphone::before {
          content: "";
          position: absolute;
          top: 110px;
          left: -4px;
          width: 4px;
          height: 76px;
          border-radius: 6px 0 0 6px;
          background: linear-gradient(#333, #111);
        }

        .iphone::after {
          content: "";
          position: absolute;
          top: 150px;
          right: -4px;
          width: 4px;
          height: 96px;
          border-radius: 0 6px 6px 0;
          background: linear-gradient(#333, #111);
        }

        @keyframes phoneFloat {
          0%,100% { transform: rotateX(5deg) rotateY(-9deg) rotateZ(1deg) translateY(0); }
          50% { transform: rotateX(5deg) rotateY(-9deg) rotateZ(1deg) translateY(-12px); }
        }

        .iphone-screen {
          position: relative;
          height: 100%;
          overflow: hidden;
          border-radius: 43px;
          background:
            radial-gradient(circle at 72% 12%, rgba(255,117,31,.18), transparent 30%),
            linear-gradient(180deg, #171717 0%, #070707 58%, #111 100%);
          border: 1px solid rgba(255,255,255,.13);
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,.06),
            inset 0 20px 50px rgba(255,255,255,.035);
        }

        .iphone-screen::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px);
          background-size: 38px 38px;
          opacity: .22;
        }

        .iphone-screen::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, rgba(255,255,255,.12), transparent 26%, transparent 62%, rgba(255,255,255,.035));
          opacity: .22;
          pointer-events: none;
        }

        .dynamic-island {
          position: absolute;
          left: 50%;
          top: 14px;
          width: 104px;
          height: 30px;
          transform: translateX(-50%);
          border-radius: 999px;
          background: #030303;
          z-index: 6;
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,.08),
            0 8px 18px rgba(0,0,0,.45);
        }

        .phone-content {
          position: relative;
          z-index: 3;
          height: 100%;
          padding: 62px 18px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .phone-top-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgba(255,255,255,.62);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: .16em;
          font-weight: 900;
        }

        .phone-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          margin-top: 24px;
          padding: 9px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255,117,31,.34);
          background: rgba(255,117,31,.12);
          color: var(--orange);
          text-transform: uppercase;
          letter-spacing: .14em;
          font-size: 10px;
          font-weight: 950;
        }

        .phone-status-pill::before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--orange);
          box-shadow: 0 0 16px rgba(255,117,31,.8);
        }

        .phone-title {
          margin-top: 22px;
          font-size: 34px;
          line-height: .98;
          letter-spacing: -.05em;
          font-weight: 950;
          text-wrap: balance;
        }

        .phone-subtitle {
          max-width: 250px;
          margin-top: 14px;
          color: rgba(255,255,255,.76);
          font-size: 12.5px;
          line-height: 1.58;
        }

        .phone-list {
          display: grid;
          gap: 10px;
          margin-top: 22px;
        }

        .phone-card {
          display: grid;
          grid-template-columns: 30px 1fr auto;
          align-items: center;
          gap: 10px;
          padding: 12px;
          border-radius: 18px;
          background: rgba(8,8,8,.72);
          border: 1px solid rgba(255,255,255,.15);
          color: rgba(255,255,255,.95);
          font-size: 12.5px;
          font-weight: 850;
          backdrop-filter: blur(18px);
        }

        .phone-card small {
          color: rgba(255,255,255,.48);
          font-size: 10px;
          font-weight: 950;
        }

        .phone-card strong {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .phone-card i {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--orange);
          box-shadow: 0 0 18px rgba(255,117,31,.8);
        }

        .phone-bottom {
          padding: 16px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(255,117,31,.2), rgba(0,0,0,.5));
          border: 1px solid rgba(255,117,31,.25);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.08);
        }

        .phone-bottom small {
          display: block;
          color: rgba(255,255,255,.56);
          text-transform: uppercase;
          letter-spacing: .16em;
          font-size: 9px;
          font-weight: 900;
          margin-bottom: 8px;
        }

        .phone-bottom strong {
          display: block;
          font-size: 19px;
          line-height: 1.14;
          letter-spacing: -.035em;
        }

        .ticker {
          position: relative;
          z-index: 4;
          overflow: hidden;
          border-block: 1px solid rgba(255,255,255,.09);
          background: rgba(255,255,255,.022);
          backdrop-filter: blur(10px);
        }

        .ticker-track {
          display: flex;
          width: max-content;
          animation: marquee 34s linear infinite;
        }

        .ticker span {
          padding: 24px 34px;
          white-space: nowrap;
          color: rgba(255,255,255,.58);
          text-transform: uppercase;
          letter-spacing: .18em;
          font-size: 13px;
          font-weight: 900;
        }

        .ticker b { color: var(--orange); }
        @keyframes marquee { to { transform: translateX(-50%); } }

        .logo-strip {
          position: relative;
          z-index: 4;
          padding: 72px 0 18px;
        }

        .logo-head {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 26px;
          color: rgba(255,255,255,.44);
          text-transform: uppercase;
          letter-spacing: .18em;
          font-size: 11px;
          font-weight: 900;
        }

        .logo-head::before,
        .logo-head::after {
          content: "";
          height: 1px;
          flex: 1;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.12), transparent);
        }

        .logo-viewport {
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, black 12%, black 88%, transparent);
        }

        .logo-track {
          display: flex;
          width: max-content;
          gap: 18px;
          animation: logoMove 42s linear infinite;
        }

        @keyframes logoMove { to { transform: translateX(-50%); } }

        .project-logo {
          min-width: 230px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 18px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 18px;
          background: rgba(255,255,255,.032);
        }

        .project-mark {
          width: 38px;
          height: 38px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255,117,31,.25);
          background: rgba(255,117,31,.08);
          color: var(--orange);
          font-weight: 950;
        }

        .project-name {
          font-size: 15px;
          font-weight: 850;
          letter-spacing: -.02em;
        }

        .project-type {
          margin-top: 3px;
          color: rgba(255,255,255,.42);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .12em;
        }

        .section {
          position: relative;
          z-index: 4;
          padding: 120px 0;
        }

        .section-head {
          display: grid;
          grid-template-columns: minmax(0, .9fr) minmax(280px, .45fr);
          gap: 54px;
          align-items: end;
          margin-bottom: 58px;
        }

        .section-title {
          margin: 18px 0 0;
          font-size: clamp(44px, 7vw, 88px);
          line-height: .92;
          letter-spacing: -.07em;
          text-transform: uppercase;
          font-weight: 950;
        }

        .section-title span,
        .final h2 span,
        .showcase-title span {
          color: var(--orange);
        }

        .section-copy {
          margin: 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.78;
        }

        .services-shell {
          display: grid;
          grid-template-columns: .95fr 1.05fr;
          gap: 18px;
        }

        .featured-service,
        .service-card,
        .stat-card,
        .process-step,
        .showcase-panel,
        .social-card {
          position: relative;
          border: 1px solid rgba(255,255,255,.11);
          background:
            radial-gradient(circle at 80% 0%, rgba(255,117,31,.105), transparent 34%),
            linear-gradient(145deg, rgba(255,255,255,.068), rgba(255,255,255,.023));
          box-shadow: 0 26px 90px rgba(0,0,0,.32);
          overflow: hidden;
        }

        .featured-service {
          min-height: 560px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 34px;
          border-radius: 34px;
          text-decoration: none;
          transition: transform .32s ease, border-color .32s ease;
        }

        .featured-service:hover,
        .service-card:hover,
        .social-card:hover {
          transform: translateY(-7px);
          border-color: rgba(255,117,31,.46);
        }

        .popular-badge {
          width: fit-content;
          padding: 9px 13px;
          border-radius: 999px;
          border: 1px solid rgba(255,117,31,.28);
          background: rgba(255,117,31,.08);
          color: var(--orange);
          text-transform: uppercase;
          letter-spacing: .13em;
          font-size: 10px;
          font-weight: 950;
        }

        .service-number {
          color: rgba(255,255,255,.34);
          font-size: 13px;
          letter-spacing: .16em;
          font-weight: 950;
        }

        .featured-service h3 {
          margin: 0 0 18px;
          font-size: clamp(44px, 5vw, 66px);
          line-height: .94;
          letter-spacing: -.065em;
        }

        .featured-service p,
        .service-card p {
          color: rgba(255,255,255,.68);
          line-height: 1.72;
          margin: 0;
        }

        .tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
        }

        .tag-row span {
          padding: 8px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.035);
          color: rgba(255,255,255,.52);
          font-size: 11px;
          font-weight: 800;
        }

        .service-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .service-card {
          min-height: 270px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 28px;
          border-radius: 28px;
          color: #fff;
          text-decoration: none;
          transition: transform .32s ease, border-color .32s ease;
        }

        .service-card h3 {
          margin: 0 0 12px;
          font-size: 28px;
          line-height: 1.02;
          letter-spacing: -.045em;
        }

        .service-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--orange);
          text-transform: uppercase;
          letter-spacing: .12em;
          font-size: 11px;
          font-weight: 950;
        }

        .stats-section {
          position: relative;
          z-index: 4;
          padding: 32px 0 114px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .stat-card {
          border-radius: 26px;
          padding: 34px 28px;
          text-align: center;
        }

        .stat-number {
          color: var(--orange);
          font-size: clamp(42px, 5vw, 62px);
          line-height: 1;
          letter-spacing: -.045em;
          font-weight: 950;
          text-shadow: 0 0 32px rgba(255,117,31,.28);
        }

        .stat-label {
          margin-top: 12px;
          color: rgba(255,255,255,.58);
          text-transform: uppercase;
          letter-spacing: .14em;
          font-size: 12px;
          font-weight: 900;
        }

        .showcase {
          position: relative;
          z-index: 4;
          padding: 112px 0;
        }

        .showcase-panel {
          min-height: 620px;
          display: grid;
          grid-template-columns: .78fr 1.22fr;
          gap: 56px;
          align-items: center;
          padding: 56px;
          border-radius: 42px;
        }

        .showcase-title {
          margin: 18px 0 0;
          font-size: clamp(44px, 7vw, 86px);
          line-height: .91;
          letter-spacing: -.07em;
          text-transform: uppercase;
        }

        .showcase-copy {
          margin: 25px 0 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.8;
        }

        .interface-preview {
          position: relative;
          min-height: 430px;
          border-radius: 32px;
          border: 1px solid rgba(255,255,255,.13);
          background: rgba(5,5,5,.72);
          backdrop-filter: blur(20px);
          box-shadow: 0 30px 120px rgba(0,0,0,.52);
          overflow: hidden;
          transform: rotateX(4deg) rotateY(-5deg);
        }

        .preview-top {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 0 20px;
          border-bottom: 1px solid rgba(255,255,255,.1);
          color: rgba(255,255,255,.52);
          text-transform: uppercase;
          letter-spacing: .15em;
          font-size: 10px;
          font-weight: 950;
        }

        .preview-body {
          display: grid;
          gap: 14px;
          padding: 22px;
        }

        .preview-block {
          min-height: 86px;
          padding: 18px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.045);
        }

        .preview-block.large { min-height: 170px; }

        .preview-label {
          color: rgba(255,255,255,.48);
          text-transform: uppercase;
          letter-spacing: .16em;
          font-size: 10px;
          font-weight: 900;
        }

        .preview-title {
          margin-top: 10px;
          font-size: 30px;
          font-weight: 950;
          letter-spacing: -.05em;
        }

        .preview-line {
          height: 8px;
          margin-top: 18px;
          border-radius: 999px;
          background: rgba(255,255,255,.08);
          overflow: hidden;
        }

        .preview-line span {
          display: block;
          height: 100%;
          width: var(--w);
          border-radius: inherit;
          background: linear-gradient(90deg, var(--orange), var(--orange-2));
        }

        .process {
          position: relative;
          z-index: 4;
          padding: 112px 0;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 58px;
        }

        .process-step {
          min-height: 430px;
          padding: 32px;
          border-radius: 30px;
        }

        .step-number {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          border: 1px solid rgba(255,117,31,.32);
          background: rgba(255,117,31,.08);
          color: var(--orange);
          font-size: 13px;
          font-weight: 950;
          letter-spacing: .12em;
        }

        .process-step h3 {
          margin: 54px 0 14px;
          font-size: 34px;
          letter-spacing: -.052em;
        }

        .process-step p {
          margin: 0;
          color: rgba(255,255,255,.68);
          line-height: 1.72;
          font-size: 15px;
        }

        .bullet-list {
          display: grid;
          gap: 11px;
          margin-top: 28px;
        }

        .bullet-list span {
          display: flex;
          align-items: center;
          gap: 9px;
          color: rgba(255,255,255,.58);
          font-size: 13px;
          font-weight: 750;
        }

        .bullet-list span::before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--orange);
          box-shadow: 0 0 14px rgba(255,117,31,.7);
        }

        .social-section {
          position: relative;
          z-index: 4;
          padding: 112px 0;
        }

        .social-grid {
          display: grid;
          grid-template-columns: .82fr 1.18fr;
          gap: 56px;
          align-items: center;
        }

        .social-list {
          display: grid;
          gap: 14px;
          margin-top: 34px;
        }

        .social-card {
          display: grid;
          grid-template-columns: 48px 1fr auto;
          align-items: center;
          gap: 16px;
          padding: 16px 18px;
          border-radius: 18px;
          text-decoration: none;
          transition: transform .3s ease, border-color .3s ease;
        }

        .social-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 16px;
          border: 1px solid rgba(255,117,31,.24);
          background: rgba(255,117,31,.08);
          color: var(--orange);
          font-weight: 950;
        }

        .social-name {
          font-size: 17px;
          font-weight: 850;
        }

        .social-handle {
          margin-top: 4px;
          color: rgba(255,255,255,.44);
          font-size: 13px;
        }

        .reel-box {
          min-height: 560px;
          display: grid;
          place-items: center;
          border-radius: 36px;
          border: 1px solid rgba(255,255,255,.12);
          background:
            radial-gradient(circle at 50% 30%, rgba(255,117,31,.16), transparent 38%),
            linear-gradient(145deg, rgba(255,255,255,.075), rgba(255,255,255,.024));
          box-shadow: var(--shadow);
          overflow: hidden;
          padding: 28px;
        }

        .instagram-frame {
          width: min(390px, 100%);
          min-height: 500px;
          display: grid;
          place-items: center;
          border-radius: 28px;
          background: rgba(0,0,0,.38);
          border: 1px solid rgba(255,255,255,.1);
          padding: 14px;
        }

        .instagram-media {
          background: #fff !important;
          border: 0 !important;
          border-radius: 22px !important;
          margin: 0 auto !important;
          max-width: 360px !important;
          min-width: 260px !important;
          width: 100% !important;
        }

        .final {
          position: relative;
          z-index: 4;
          padding: 132px 0 154px;
          text-align: center;
        }

        .final::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(1000px, 92vw);
          height: min(1000px, 92vw);
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,117,31,.13), transparent 62%);
          z-index: -1;
        }

        .final .section-kicker { justify-content: center; }

        .final h2 {
          max-width: 1060px;
          margin: 24px auto 0;
          font-size: clamp(54px, 9vw, 122px);
          line-height: .86;
          letter-spacing: -.085em;
          text-transform: uppercase;
        }

        .final p {
          max-width: 650px;
          margin: 31px auto 0;
          color: var(--muted);
          line-height: 1.82;
          font-size: 17px;
        }

        .final .actions { justify-content: center; }

        @media (max-width: 1120px) {
          .hero-grid,
          .services-shell,
          .showcase-panel,
          .social-grid,
          .section-head {
            grid-template-columns: 1fr;
          }

          .phone-stage {
            min-height: 610px;
            max-width: 640px;
            margin: 0 auto;
            width: 100%;
          }

          .stats-grid,
          .process-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 820px) {
          .service-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 740px) {
          .wrap { width: min(100% - 28px, 1180px); }

          .hero { padding: 118px 0 74px; }
          .hero-title { font-size: 50px; letter-spacing: -.065em; }
          .hero-copy, .section-copy, .showcase-copy, .final p { font-size: 15px; }

          .actions { width: 100%; }
          .btn { width: 100%; }

          .hero-tags span {
            flex: 1 1 calc(50% - 10px);
            text-align: center;
            font-size: 10px;
          }

          .phone-stage { min-height: 540px; }
          .phone-glow { width: 390px; height: 390px; }
          .phone-orbit { width: 390px; height: 390px; }

          .iphone {
            width: 264px;
            height: 538px;
            transform: none;
            animation: phoneFloatMobile 5s ease-in-out infinite;
            border-radius: 46px;
          }

          @keyframes phoneFloatMobile {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .iphone-screen { border-radius: 36px; }
          .dynamic-island { width: 88px; height: 27px; }
          .phone-content { padding: 58px 15px 17px; }
          .phone-title { font-size: 28px; }
          .phone-subtitle { font-size: 11.5px; }
          .phone-card { padding: 10px; font-size: 11.5px; grid-template-columns: 26px 1fr auto; }
          .phone-bottom strong { font-size: 17px; }

          .section, .showcase, .process, .social-section, .final { padding: 88px 0; }
          .section-title, .showcase-title { font-size: 43px; }

          .featured-service {
            min-height: 430px;
            padding: 24px;
            border-radius: 28px;
          }

          .featured-service h3 { font-size: 40px; }

          .service-card {
            min-height: 260px;
            padding: 24px;
            border-radius: 26px;
          }

          .showcase-panel {
            min-height: auto;
            padding: 24px;
            border-radius: 28px;
          }

          .interface-preview {
            min-height: 400px;
            transform: none;
          }

          .project-logo { min-width: 210px; }
          .process-step { min-height: auto; }
          .reel-box { min-height: 560px; padding: 16px; }
          .instagram-frame { min-height: 500px; padding: 10px; }
        }

        @supports not (animation-timeline: view()) {
          .reveal { animation-timeline: auto; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <main className="home">
        <div className="noise" />
        <div className="grid" />
        <div className="aurora" />
        <div className="vignette" />

        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="hero-badge"><i /> Available for new projects</div>
              <div className="eyebrow">AHOS / Digital Studio</div>
              <h1 className="hero-title">
                Premium digital products <span className="muted-word">built to</span> <span className="accent-word">perform.</span>
              </h1>
              <p className="hero-copy">
                AHOS designs and builds high-performing websites, e-commerce platforms,
                automation systems, Web3 interfaces, and custom software for businesses
                that need a serious digital presence.
              </p>

              <div className="actions">
                <Link href="/contact" className="btn btn-primary">Start a Project</Link>
                <Link href="/services" className="btn">Explore Services</Link>
              </div>

              <div className="hero-tags">
                <span>Web Dev</span>
                <span>Automation</span>
                <span>Web3</span>
                <span>AI Systems</span>
              </div>
            </div>

            <div className="phone-stage" aria-hidden="true">
              <div className="phone-glow" />
              <div className="phone-orbit" />

              <div className="iphone">
                <div className="iphone-screen">
                  <div className="dynamic-island" />
                  <div className="phone-content">
                    <div>
                      <div className="phone-top-label">
                        <span>AHOS OS</span>
                        <span>Live</span>
                      </div>
                      <div className="phone-status-pill">Project Mode</div>
                      <div className="phone-title">Your digital launch system.</div>
                      <div className="phone-subtitle">
                        Websites, stores, automations, and platforms designed under one premium brand experience.
                      </div>
                      <div className="phone-list">
                        {services.map((service) => (
                          <div className="phone-card" key={service.title}>
                            <small>{service.number}</small>
                            <strong>{service.title}</strong>
                            <i />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="phone-bottom">
                      <small>Current Focus</small>
                      <strong>Premium launch experience</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...stackItems, ...stackItems, ...stackItems, ...stackItems].map((item, index) => (
              <span key={`${item}-${index}`}><b>✦</b> {item}</span>
            ))}
          </div>
        </div>

        <section className="logo-strip reveal">
          <div className="wrap">
            <div className="logo-head">Projects we've been part of</div>
            <div className="logo-viewport">
              <div className="logo-track">
                {[...projects, ...projects].map(([name, type], index) => (
                  <div className="project-logo" key={`${name}-${index}`}>
                    <div className="project-mark">{name.charAt(0).replace("$", "A")}</div>
                    <div>
                      <div className="project-name">{name}</div>
                      <div className="project-type">{type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="section-kicker">What We Do</div>
                <h2 className="section-title">Four capabilities. <span>One studio.</span></h2>
              </div>
              <p className="section-copy">
                Stop juggling disconnected providers. Software, websites, automation,
                and Web3 systems are planned together, designed together, and built to work together.
              </p>
            </div>

            <div className="services-shell">
              {services.filter((service) => service.featured).map((service) => (
                <Link href={service.href} className="featured-service" key={service.title}>
                  <div>
                    <div className="popular-badge">Most Popular</div>
                  </div>
                  <div>
                    <div className="service-number">{service.number}</div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <div className="tag-row">
                      {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                </Link>
              ))}

              <div className="service-grid">
                {services.filter((service) => !service.featured).map((service) => (
                  <Link href={service.href} className="service-card" key={service.title}>
                    <div className="service-footer">
                      <span>{service.number}</span>
                      <span>Explore</span>
                    </div>
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                      <div className="tag-row">
                        {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section reveal">
          <div className="wrap stats-grid">
            {stats.map(([number, label]) => (
              <div className="stat-card" key={label}>
                <div className="stat-number">{number}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="showcase reveal">
          <div className="wrap showcase-panel">
            <div>
              <div className="section-kicker">Cinematic Systems</div>
              <h2 className="showcase-title">Not another <span>generic website.</span></h2>
              <p className="showcase-copy">
                AHOS builds digital infrastructure that feels premium on the surface and works properly underneath:
                fast pages, clean flows, integrated systems, clear messaging, and user experiences that support business goals.
              </p>
              <div className="actions">
                <Link href="/services" className="btn btn-primary">View Capabilities</Link>
              </div>
            </div>

            <div className="interface-preview" aria-hidden="true">
              <div className="preview-top">
                <span>AHOS Interface Layer</span>
                <span>Active</span>
              </div>
              <div className="preview-body">
                <div className="preview-block large">
                  <div className="preview-label">Website System</div>
                  <div className="preview-title">Premium experience</div>
                  <div className="preview-line"><span style={{ "--w": "92%" } as React.CSSProperties} /></div>
                </div>
                <div className="preview-block">
                  <div className="preview-label">Performance</div>
                  <div className="preview-title">Fast & responsive</div>
                  <div className="preview-line"><span style={{ "--w": "86%" } as React.CSSProperties} /></div>
                </div>
                <div className="preview-block">
                  <div className="preview-label">Launch</div>
                  <div className="preview-title">Ready to scale</div>
                  <div className="preview-line"><span style={{ "--w": "78%" } as React.CSSProperties} /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="process reveal">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="section-kicker">Our Process</div>
                <h2 className="section-title">Three steps from idea to <span>live product.</span></h2>
              </div>
              <p className="section-copy">
                Simple, transparent, and structured from the first call to launch and support.
              </p>
            </div>

            <div className="process-grid">
              {processSteps.map((step) => (
                <div className="process-step" key={step.number}>
                  <div className="step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <div className="bullet-list">
                    {step.bullets.map((bullet) => <span key={bullet}>{bullet}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="social-section reveal">
          <div className="wrap social-grid">
            <div>
              <div className="section-kicker">Stay Connected</div>
              <h2 className="section-title">Follow AHOS <span>online.</span></h2>
              <p className="section-copy">
                Keep up with our latest projects, launches, ideas, and behind-the-scenes updates.
              </p>

              <div className="social-list">
                <a className="social-card" href="https://www.instagram.com/ahos.xyz/" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon">IG</div>
                  <div><div className="social-name">Instagram</div><div className="social-handle">@ahos.xyz</div></div>
                  <span>→</span>
                </a>
                <a className="social-card" href="https://www.linkedin.com/company/ahos-xyz" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon">IN</div>
                  <div><div className="social-name">LinkedIn</div><div className="social-handle">AHOS-xyz</div></div>
                  <span>→</span>
                </a>
                <a className="social-card" href="https://www.youtube.com/@ahos_xyz" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon">YT</div>
                  <div><div className="social-name">YouTube</div><div className="social-handle">@ahos_xyz</div></div>
                  <span>→</span>
                </a>
              </div>
            </div>

            <div className="reel-box">
              <div className="instagram-frame">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/p/DYCHbRttmb2/"
                  data-instgrm-version="14"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="final reveal">
          <div className="wrap">
            <div className="section-kicker">Start With AHOS</div>
            <h2>Launch a digital presence that feels <span>premium.</span></h2>
            <p>
              Whether you need a premium website, an e-commerce platform, a custom tool,
              or a full digital system, AHOS turns the idea into a product that looks sharp and works with purpose.
            </p>
            <div className="actions">
              <Link href="/contact" className="btn btn-primary">Contact AHOS</Link>
              <Link href="/careers" className="btn">Join the Team</Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

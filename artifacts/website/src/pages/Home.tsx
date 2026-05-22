import { Link } from "wouter";
import { Footer } from "../components/Footer";

const services = [
  {
    eyebrow: "01 / Websites",
    title: "Premium websites that make brands look serious.",
    text: "High-end websites, landing pages, and business platforms with strong design, clean structure, and conversion-focused pages.",
    href: "/services",
  },
  {
    eyebrow: "02 / E-commerce",
    title: "Online stores built to sell clearly.",
    text: "Product pages, checkout flows, payment-ready stores, and customer journeys made for modern digital brands.",
    href: "/services",
  },
  {
    eyebrow: "03 / Automation",
    title: "Smart systems that save time.",
    text: "AI automations, dashboards, internal tools, CRM flows, and business systems that remove manual work.",
    href: "/services",
  },
  {
    eyebrow: "04 / Blockchain",
    title: "Web3 products with real usability.",
    text: "Blockchain interfaces, smart contract experiences, token systems, and decentralized platforms built with purpose.",
    href: "/blockchain-services",
  },
];

const phoneCards = [
  "Web Development",
  "E-commerce Setup",
  "AI Automation",
  "Blockchain Systems",
];

const stackItems = [
  "Web Development",
  "E-commerce",
  "AI Automation",
  "Blockchain",
  "Digital Strategy",
  "Custom Platforms",
  "Launch Support",
  "Brand Systems",
];

const processSteps = [
  ["01", "Discover", "We understand your business, offer, audience, and what the digital product needs to achieve."],
  ["02", "Design", "We create a premium visual direction with clean hierarchy, strong spacing, and clear user flow."],
  ["03", "Build", "We engineer the website, platform, automation, or system with responsive and scalable code."],
  ["04", "Launch", "We test, refine, publish, and support the product after it goes live."],
];

export default function Home() {
  return (
    <>
      <style>{`
        :root {
          --bg: #050505;
          --bg2: #0a0a0b;
          --text: #ffffff;
          --muted: rgba(255,255,255,.68);
          --soft: rgba(255,255,255,.46);
          --line: rgba(255,255,255,.12);
          --panel: rgba(255,255,255,.055);
          --orange: #ff751f;
          --orange2: #ff9a4b;
          --shadow: 0 40px 140px rgba(0,0,0,.65);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: var(--bg); }

        .home {
          min-height: 100vh;
          overflow: hidden;
          color: var(--text);
          background:
            radial-gradient(circle at 74% 16%, rgba(255,117,31,.18), transparent 34%),
            radial-gradient(circle at 18% 78%, rgba(255,117,31,.08), transparent 28%),
            linear-gradient(180deg, #050505 0%, #0a0a0b 48%, #050505 100%);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .wrap {
          width: min(1220px, calc(100% - 44px));
          margin: 0 auto;
          position: relative;
          z-index: 3;
        }

        .noise,
        .grid,
        .vignette {
          position: fixed;
          inset: 0;
          pointer-events: none;
        }

        .noise {
          z-index: 1;
          opacity: .07;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E");
        }

        .grid {
          z-index: 0;
          opacity: .28;
          background:
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.032) 1px, transparent 1px);
          background-size: 86px 86px;
          mask-image: radial-gradient(circle at 50% 30%, black, transparent 72%);
        }

        .vignette {
          z-index: 2;
          background: radial-gradient(circle at center, transparent 0 48%, rgba(0,0,0,.48) 100%);
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 145px 0 90px;
          isolation: isolate;
        }

        .hero::after {
          content: "";
          position: absolute;
          left: -10%;
          right: -10%;
          bottom: 0;
          height: 30%;
          background: linear-gradient(to top, var(--bg), transparent);
          z-index: 2;
          pointer-events: none;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 520px;
          align-items: center;
          gap: 76px;
        }

        .eyebrow,
        .section-kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: var(--orange);
          text-transform: uppercase;
          letter-spacing: .23em;
          font-size: 11px;
          font-weight: 950;
        }

        .eyebrow { margin-bottom: 28px; animation: rise .8s ease both; }
        .eyebrow::before,
        .section-kicker::before {
          content: "";
          width: 42px;
          height: 1px;
          background: linear-gradient(90deg, var(--orange), transparent);
        }

        .hero-title {
          max-width: 850px;
          margin: 0;
          font-size: clamp(56px, 8.4vw, 120px);
          line-height: .84;
          letter-spacing: -.08em;
          text-transform: uppercase;
          font-weight: 950;
        }

        .hero-title span {
          color: var(--orange);
          text-shadow: 0 0 50px rgba(255,117,31,.36);
        }

        .hero-copy {
          max-width: 650px;
          margin: 32px 0 0;
          color: var(--muted);
          font-size: 18px;
          line-height: 1.82;
          animation: rise .8s ease .12s both;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 42px;
          animation: rise .8s ease .22s both;
        }

        .btn {
          min-height: 56px;
          padding: 0 28px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--line);
          text-decoration: none;
          color: #fff;
          background: rgba(255,255,255,.045);
          backdrop-filter: blur(14px);
          text-transform: uppercase;
          letter-spacing: .14em;
          font-size: 12px;
          font-weight: 950;
          transition: .32s ease;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--orange), var(--orange2));
          color: #070707;
          border-color: rgba(255,117,31,.9);
          box-shadow: 0 18px 60px rgba(255,117,31,.24);
        }

        .btn:hover {
          transform: translateY(-4px);
          border-color: rgba(255,117,31,.55);
        }

        .btn-primary:hover {
          box-shadow: 0 24px 80px rgba(255,117,31,.34);
        }

        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
          animation: rise .8s ease .32s both;
        }

        .hero-tags span {
          padding: 10px 14px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 999px;
          background: rgba(255,255,255,.032);
          color: var(--soft);
          text-transform: uppercase;
          letter-spacing: .13em;
          font-size: 12px;
          font-weight: 800;
        }

        @keyframes rise {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .phone-stage {
          position: relative;
          min-height: 650px;
          display: grid;
          place-items: center;
          perspective: 1200px;
          animation: rise .9s ease .15s both;
        }

        .phone-glow {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,117,31,.22), transparent 62%);
          filter: blur(10px);
          animation: glowPulse 4.5s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%,100% { transform: scale(.96); opacity: .76; }
          50% { transform: scale(1.08); opacity: 1; }
        }

        .phone-orbit {
          position: absolute;
          width: 560px;
          height: 560px;
          border-radius: 50%;
          border: 1px solid rgba(255,117,31,.18);
          animation: rotate 24s linear infinite;
        }

        .phone-orbit::before,
        .phone-orbit::after {
          content: "";
          position: absolute;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--orange);
          box-shadow: 0 0 22px rgba(255,117,31,.8);
        }

        .phone-orbit::before { top: 46px; left: 130px; }
        .phone-orbit::after { right: 92px; bottom: 78px; }

        @keyframes rotate { to { transform: rotate(360deg); } }

        .iphone {
          position: relative;
          z-index: 4;
          width: 305px;
          height: 620px;
          border-radius: 48px;
          padding: 13px;
          background: linear-gradient(145deg, #2b2b2d, #050505 45%, #1c1c1e);
          border: 1px solid rgba(255,255,255,.18);
          box-shadow:
            0 44px 120px rgba(0,0,0,.62),
            0 0 0 8px rgba(255,255,255,.025),
            inset 0 0 0 1px rgba(255,255,255,.16);
          transform: rotateX(7deg) rotateY(-12deg) rotateZ(2deg);
          animation: phoneFloat 5.5s ease-in-out infinite;
        }

        @keyframes phoneFloat {
          0%,100% { transform: rotateX(7deg) rotateY(-12deg) rotateZ(2deg) translateY(0); }
          50% { transform: rotateX(7deg) rotateY(-12deg) rotateZ(2deg) translateY(-16px); }
        }

        .iphone-screen {
          position: relative;
          height: 100%;
          overflow: hidden;
          border-radius: 38px;
          background:
            radial-gradient(circle at 70% 18%, rgba(255,117,31,.24), transparent 32%),
            linear-gradient(180deg, #151515, #070707 55%, #111);
          border: 1px solid rgba(255,255,255,.09);
        }

        .iphone-screen::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.028) 1px, transparent 1px);
          background-size: 36px 36px;
          opacity: .4;
        }

        .dynamic-island {
          position: absolute;
          left: 50%;
          top: 13px;
          width: 92px;
          height: 28px;
          transform: translateX(-50%);
          border-radius: 999px;
          background: #050505;
          z-index: 5;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.06);
        }

        .phone-content {
          position: relative;
          z-index: 3;
          height: 100%;
          padding: 62px 20px 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .phone-top-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--soft);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: .16em;
          font-weight: 900;
        }

        .phone-logo {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          margin-top: 24px;
          background: linear-gradient(135deg, var(--orange), var(--orange2));
          color: #070707;
          font-weight: 950;
          box-shadow: 0 16px 46px rgba(255,117,31,.34);
        }

        .phone-title {
          margin-top: 22px;
          font-size: 38px;
          line-height: .95;
          letter-spacing: -.055em;
          font-weight: 950;
        }

        .phone-subtitle {
          margin-top: 16px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.6;
        }

        .phone-list {
          display: grid;
          gap: 10px;
          margin-top: 26px;
        }

        .phone-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px;
          border-radius: 18px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.09);
          color: rgba(255,255,255,.86);
          font-size: 13px;
          font-weight: 800;
        }

        .phone-card span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--orange);
          box-shadow: 0 0 18px rgba(255,117,31,.8);
        }

        .phone-bottom {
          padding: 16px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(255,117,31,.18), rgba(255,255,255,.045));
          border: 1px solid rgba(255,117,31,.22);
        }

        .phone-bottom small {
          display: block;
          color: var(--soft);
          text-transform: uppercase;
          letter-spacing: .16em;
          font-size: 9px;
          font-weight: 900;
          margin-bottom: 8px;
        }

        .phone-bottom strong {
          display: block;
          font-size: 20px;
          line-height: 1.1;
          letter-spacing: -.04em;
        }

        .floating-badge {
          position: absolute;
          z-index: 6;
          width: 210px;
          padding: 18px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,.13);
          background: rgba(8,8,9,.78);
          backdrop-filter: blur(22px);
          box-shadow: 0 24px 80px rgba(0,0,0,.48);
        }

        .floating-badge.one { top: 90px; right: -18px; animation: badgeA 5s ease-in-out infinite; }
        .floating-badge.two { left: -10px; bottom: 122px; animation: badgeB 5.5s ease-in-out infinite; }

        .floating-badge small {
          color: var(--soft);
          text-transform: uppercase;
          letter-spacing: .16em;
          font-size: 10px;
          font-weight: 900;
        }

        .floating-badge strong {
          display: block;
          margin-top: 10px;
          font-size: 22px;
          line-height: 1.08;
          letter-spacing: -.04em;
        }

        @keyframes badgeA {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        @keyframes badgeB {
          0%,100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(14px) translateX(8px); }
        }

        .ticker {
          position: relative;
          z-index: 4;
          overflow: hidden;
          border-block: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.025);
          backdrop-filter: blur(10px);
        }

        .ticker-track {
          display: flex;
          width: max-content;
          animation: marquee 24s linear infinite;
        }

        .ticker span {
          padding: 24px 34px;
          white-space: nowrap;
          color: rgba(255,255,255,.68);
          text-transform: uppercase;
          letter-spacing: .18em;
          font-size: 13px;
          font-weight: 950;
        }

        .ticker b { color: var(--orange); }
        @keyframes marquee { to { transform: translateX(-50%); } }

        .section {
          position: relative;
          z-index: 4;
          padding: 128px 0;
        }

        .section-head {
          display: grid;
          grid-template-columns: minmax(0, .95fr) minmax(280px, .45fr);
          gap: 54px;
          align-items: end;
          margin-bottom: 62px;
        }

        .section-title {
          margin: 18px 0 0;
          font-size: clamp(44px, 7vw, 94px);
          line-height: .9;
          letter-spacing: -.075em;
          text-transform: uppercase;
          font-weight: 950;
        }

        .section-copy {
          margin: 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.8;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .service-card {
          position: relative;
          min-height: 350px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 32px;
          overflow: hidden;
          border-radius: 34px;
          border: 1px solid rgba(255,255,255,.11);
          background:
            radial-gradient(circle at 86% 12%, rgba(255,117,31,.15), transparent 34%),
            linear-gradient(145deg, rgba(255,255,255,.085), rgba(255,255,255,.025));
          color: #fff;
          text-decoration: none;
          box-shadow: 0 28px 95px rgba(0,0,0,.34);
          transition: .36s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255,117,31,.46);
        }

        .service-card::after {
          content: "";
          position: absolute;
          right: -76px;
          bottom: -76px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          border: 1px solid rgba(255,117,31,.25);
        }

        .service-eyebrow {
          position: relative;
          z-index: 2;
          color: var(--orange);
          font-size: 11px;
          font-weight: 950;
          letter-spacing: .18em;
          text-transform: uppercase;
        }

        .service-body { position: relative; z-index: 2; }

        .service-card h3 {
          margin: 0 0 16px;
          max-width: 520px;
          font-size: clamp(30px, 4vw, 48px);
          line-height: .98;
          letter-spacing: -.055em;
        }

        .service-card p {
          max-width: 590px;
          margin: 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.72;
        }

        .service-arrow {
          position: relative;
          z-index: 2;
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.04);
          transition: .3s ease;
        }

        .service-card:hover .service-arrow {
          background: var(--orange);
          color: #050505;
          transform: translateX(8px);
        }

        .showcase {
          position: relative;
          z-index: 4;
          padding: 126px 0;
        }

        .showcase-panel {
          position: relative;
          min-height: 640px;
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 56px;
          align-items: center;
          overflow: hidden;
          padding: 56px;
          border-radius: 42px;
          border: 1px solid rgba(255,255,255,.13);
          background:
            radial-gradient(circle at 82% 42%, rgba(255,117,31,.18), transparent 35%),
            linear-gradient(140deg, rgba(255,255,255,.085), rgba(255,255,255,.024));
          box-shadow: var(--shadow);
        }

        .showcase h2 {
          margin: 18px 0 0;
          font-size: clamp(44px, 7vw, 90px);
          line-height: .9;
          letter-spacing: -.075em;
          text-transform: uppercase;
        }

        .showcase p {
          margin: 25px 0 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.82;
        }

        .interface-preview {
          position: relative;
          min-height: 430px;
          border-radius: 32px;
          border: 1px solid rgba(255,255,255,.13);
          background: rgba(5,5,5,.72);
          backdrop-filter: blur(24px);
          box-shadow: 0 30px 120px rgba(0,0,0,.52);
          overflow: hidden;
          transform: rotateX(6deg) rotateY(-7deg);
        }

        .preview-top {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          border-bottom: 1px solid rgba(255,255,255,.1);
          color: var(--soft);
          text-transform: uppercase;
          letter-spacing: .16em;
          font-size: 11px;
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
        .preview-label { color: var(--soft); text-transform: uppercase; letter-spacing: .16em; font-size: 10px; font-weight: 900; }
        .preview-title { margin-top: 10px; font-size: 30px; font-weight: 950; letter-spacing: -.05em; }

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
          background: linear-gradient(90deg, var(--orange), var(--orange2));
        }

        .process {
          position: relative;
          z-index: 4;
          padding: 118px 0;
        }

        .process-line {
          margin-top: 62px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,.105);
          background: rgba(255,255,255,.105);
        }

        .process-step {
          min-height: 248px;
          padding: 30px;
          background: rgba(7,7,7,.96);
        }

        .process-step b { color: var(--orange); letter-spacing: .18em; font-size: 12px; }
        .process-step h3 { margin: 48px 0 12px; font-size: 28px; letter-spacing: -.048em; }
        .process-step p { margin: 0; color: var(--muted); line-height: 1.72; font-size: 14px; }

        .final {
          position: relative;
          z-index: 4;
          padding: 138px 0 158px;
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
          background: radial-gradient(circle, rgba(255,117,31,.16), transparent 62%);
          z-index: -1;
        }

        .final .section-kicker { justify-content: center; }
        .final h2 {
          max-width: 1060px;
          margin: 24px auto 0;
          font-size: clamp(54px, 9vw, 126px);
          line-height: .84;
          letter-spacing: -.09em;
          text-transform: uppercase;
        }
        .final h2 span { color: var(--orange); }
        .final p { max-width: 640px; margin: 31px auto 0; color: var(--muted); line-height: 1.82; font-size: 17px; }
        .final .actions { justify-content: center; }

        @media (max-width: 1080px) {
          .hero-grid,
          .section-head,
          .showcase-panel { grid-template-columns: 1fr; }
          .phone-stage { min-height: 620px; max-width: 640px; margin: 0 auto; width: 100%; }
          .services-grid,
          .process-line { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 740px) {
          .wrap { width: min(100% - 28px, 1220px); }
          .hero { padding: 122px 0 74px; }
          .hero-title { font-size: 55px; letter-spacing: -.075em; }
          .hero-copy, .section-copy, .showcase p, .final p { font-size: 15px; }
          .actions { width: 100%; }
          .btn { width: 100%; }
          .hero-tags span { flex: 1 1 calc(50% - 12px); text-align: center; }
          .phone-stage { min-height: 560px; }
          .iphone { width: 270px; height: 550px; transform: none; animation: phoneFloatMobile 5s ease-in-out infinite; }
          @keyframes phoneFloatMobile {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
          .phone-orbit { width: 420px; height: 420px; }
          .floating-badge { width: 178px; padding: 14px; }
          .floating-badge.one { top: 56px; right: 0; }
          .floating-badge.two { left: 0; bottom: 84px; }
          .floating-badge strong { font-size: 18px; }
          .services-grid, .process-line { grid-template-columns: 1fr; }
          .section, .showcase, .process, .final { padding: 88px 0; }
          .section-title, .showcase h2 { font-size: 45px; }
          .service-card { min-height: 320px; padding: 24px; border-radius: 26px; }
          .showcase-panel { min-height: auto; padding: 24px; border-radius: 28px; }
          .interface-preview { min-height: 400px; transform: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation: none !important; transition: none !important; }
        }
      `}</style>

      <main className="home">
        <div className="noise" />
        <div className="grid" />
        <div className="vignette" />

        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="eyebrow">AHOS / Software Agency</div>
              <h1 className="hero-title">
                Digital systems built for <span>growth.</span>
              </h1>
              <p className="hero-copy">
                AHOS creates premium websites, e-commerce platforms, automation systems,
                blockchain products, and digital infrastructure for brands that want to look
                professional and move faster.
              </p>

              <div className="actions">
                <Link href="/contact" className="btn btn-primary">Start a Project</Link>
                <Link href="/services" className="btn">Explore Services</Link>
              </div>

              <div className="hero-tags">
                <span>Strategy</span>
                <span>Design</span>
                <span>Engineering</span>
                <span>Launch</span>
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
                        <span>LIVE</span>
                      </div>
                      <div className="phone-logo">A</div>
                      <div className="phone-title">Build your digital system.</div>
                      <div className="phone-subtitle">
                        Websites, stores, automations, and platforms engineered under one clean brand experience.
                      </div>
                      <div className="phone-list">
                        {phoneCards.map((item) => (
                          <div className="phone-card" key={item}>{item}<span /></div>
                        ))}
                      </div>
                    </div>

                    <div className="phone-bottom">
                      <small>Current Mode</small>
                      <strong>Premium launch experience</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-badge one">
                <small>Interface</small>
                <strong>Clean, premium, conversion-ready.</strong>
              </div>

              <div className="floating-badge two">
                <small>System</small>
                <strong>Built to scale beyond the homepage.</strong>
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

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="section-kicker">What AHOS Builds</div>
                <h2 className="section-title">Premium digital execution from idea to launch.</h2>
              </div>
              <p className="section-copy">
                Every project is built with brand clarity, clean interfaces, strong architecture,
                and a launch plan that makes the final product feel serious.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <Link href={service.href} className="service-card" key={service.eyebrow}>
                  <div className="service-eyebrow">{service.eyebrow}</div>
                  <div className="service-body">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <div className="service-arrow">→</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="showcase">
          <div className="wrap showcase-panel">
            <div>
              <div className="section-kicker">Cinematic Systems</div>
              <h2>Not another generic website.</h2>
              <p>
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
                <span>ACTIVE</span>
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

        <section className="process">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="section-kicker">The AHOS Method</div>
                <h2 className="section-title">Built with structure. Delivered with polish.</h2>
              </div>
              <p className="section-copy">
                A clear workflow that turns your idea into a clean, premium, working digital product.
              </p>
            </div>

            <div className="process-line">
              {processSteps.map(([number, title, text]) => (
                <div className="process-step" key={number}>
                  <b>{number}</b>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="final">
          <div className="wrap">
            <div className="section-kicker">Start With AHOS</div>
            <h2>Build something <span>serious.</span></h2>
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

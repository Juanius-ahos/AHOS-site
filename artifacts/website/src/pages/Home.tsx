import { Link } from "wouter";
import { Footer } from "../components/Footer";

const services = [
  {
    eyebrow: "01 / Web Systems",
    title: "Premium websites built to convert.",
    text: "High-end landing pages, business websites, and digital experiences with strong visual identity, fast performance, and clear conversion paths.",
    href: "/services",
  },
  {
    eyebrow: "02 / Commerce",
    title: "E-commerce engines for serious brands.",
    text: "Online stores, product flows, payment-ready experiences, customer journeys, and post-launch support designed for growth.",
    href: "/services",
  },
  {
    eyebrow: "03 / Automation",
    title: "AI-powered workflows that save time.",
    text: "Smart automations, internal tools, dashboards, CRM flows, and business systems that reduce manual work and improve operations.",
    href: "/services",
  },
  {
    eyebrow: "04 / Blockchain",
    title: "Web3 infrastructure with real purpose.",
    text: "Smart contract experiences, decentralized platforms, token ecosystems, and blockchain interfaces designed around usability.",
    href: "/blockchain-services",
  },
];

const orbitItems = ["Strategy", "Design", "Code", "Launch", "Scale"];
const stackItems = ["Web Development", "E-commerce", "Automation", "AI Systems", "Blockchain", "Custom Platforms"];

export default function Home() {
  return (
    <>
      <style>{`
        :root {
          --ahos-bg: #050505;
          --ahos-bg-2: #090909;
          --ahos-card: rgba(255, 255, 255, 0.055);
          --ahos-card-strong: rgba(255, 255, 255, 0.09);
          --ahos-line: rgba(255, 255, 255, 0.12);
          --ahos-line-strong: rgba(255, 117, 31, 0.42);
          --ahos-text: #ffffff;
          --ahos-muted: rgba(255, 255, 255, 0.68);
          --ahos-faint: rgba(255, 255, 255, 0.42);
          --ahos-orange: #ff751f;
          --ahos-orange-2: #ff9d55;
          --ahos-orange-soft: rgba(255, 117, 31, 0.2);
          --ahos-shadow: 0 40px 140px rgba(0, 0, 0, 0.62);
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: var(--ahos-bg);
        }

        .home {
          min-height: 100vh;
          overflow: hidden;
          color: var(--ahos-text);
          background:
            radial-gradient(circle at 78% 12%, rgba(255,117,31,.17), transparent 34%),
            radial-gradient(circle at 16% 26%, rgba(255,117,31,.08), transparent 25%),
            linear-gradient(180deg, #050505 0%, #080808 48%, #050505 100%);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .home a {
          color: inherit;
        }

        .wrap {
          width: min(1200px, calc(100% - 44px));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .noise,
        .cinema-lines,
        .cursor-glow {
          pointer-events: none;
          position: fixed;
          inset: 0;
          z-index: 0;
        }

        .noise {
          opacity: .08;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E");
        }

        .cinema-lines {
          opacity: .34;
          background:
            linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
          background-size: 96px 96px;
          mask-image: radial-gradient(circle at 50% 30%, black 0%, transparent 68%);
        }

        .cursor-glow {
          background: radial-gradient(circle at 70% 22%, rgba(255,117,31,.16), transparent 28%);
          animation: glowDrift 9s ease-in-out infinite alternate;
        }

        @keyframes glowDrift {
          from { transform: translate3d(-2%, -1%, 0) scale(1); }
          to { transform: translate3d(3%, 2%, 0) scale(1.08); }
        }

        .hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 140px 0 90px;
          isolation: isolate;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: auto -10% 0;
          height: 32%;
          background: linear-gradient(to top, var(--ahos-bg), transparent);
          z-index: 1;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 520px;
          gap: 70px;
          align-items: center;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
          color: var(--ahos-faint);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .24em;
          text-transform: uppercase;
          animation: riseIn .8s ease both;
        }

        .eyebrow::before {
          content: "";
          width: 42px;
          height: 1px;
          background: linear-gradient(90deg, var(--ahos-orange), transparent);
        }

        .hero-title {
          max-width: 790px;
          margin: 0;
          font-size: clamp(56px, 9vw, 126px);
          line-height: .82;
          letter-spacing: -.09em;
          font-weight: 950;
          text-transform: uppercase;
        }

        .hero-title .line {
          display: block;
          overflow: hidden;
        }

        .hero-title .line span {
          display: block;
          animation: titleReveal 1s cubic-bezier(.2,.8,.2,1) both;
        }

        .hero-title .line:nth-child(2) span { animation-delay: .09s; }
        .hero-title .line:nth-child(3) span { animation-delay: .18s; }

        .hero-title em {
          color: var(--ahos-orange);
          font-style: normal;
          text-shadow: 0 0 45px rgba(255,117,31,.28);
        }

        @keyframes titleReveal {
          from { transform: translateY(112%) rotate(2deg); opacity: 0; }
          to { transform: translateY(0) rotate(0); opacity: 1; }
        }

        @keyframes riseIn {
          from { transform: translateY(18px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .hero-copy {
          max-width: 650px;
          margin: 34px 0 0;
          color: var(--ahos-muted);
          font-size: 18px;
          line-height: 1.8;
          animation: riseIn .8s ease .24s both;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 42px;
          animation: riseIn .8s ease .34s both;
        }

        .btn {
          min-height: 56px;
          padding: 0 28px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid var(--ahos-line);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-size: 12px;
          font-weight: 950;
          transition: transform .35s ease, border-color .35s ease, background .35s ease, color .35s ease;
          will-change: transform;
        }

        .btn-primary {
          background: #fff;
          color: #050505;
          border-color: #fff;
          box-shadow: 0 18px 60px rgba(255,255,255,.12);
        }

        .btn-primary:hover {
          transform: translateY(-4px);
          background: var(--ahos-orange);
          border-color: var(--ahos-orange);
        }

        .btn-ghost {
          background: rgba(255,255,255,.04);
          color: #fff;
          backdrop-filter: blur(16px);
        }

        .btn-ghost:hover {
          transform: translateY(-4px);
          border-color: var(--ahos-orange);
          background: rgba(255,117,31,.11);
        }

        .hero-proof {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
          color: var(--ahos-faint);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .13em;
          animation: riseIn .8s ease .46s both;
        }

        .hero-proof span {
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 999px;
          padding: 10px 14px;
          background: rgba(255,255,255,.03);
        }

        .visual-stage {
          position: relative;
          min-height: 620px;
          perspective: 1200px;
          animation: riseIn .9s ease .18s both;
        }

        .orbital-system {
          position: absolute;
          inset: 24px 0 0;
          border-radius: 42px;
          background:
            radial-gradient(circle at 50% 50%, rgba(255,117,31,.18), transparent 32%),
            linear-gradient(145deg, rgba(255,255,255,.09), rgba(255,255,255,.025));
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: var(--ahos-shadow), inset 0 0 80px rgba(255,117,31,.06);
          overflow: hidden;
          transform: rotateX(7deg) rotateY(-9deg);
        }

        .orbital-system::before {
          content: "";
          position: absolute;
          inset: -35%;
          background: conic-gradient(from 180deg, transparent, rgba(255,117,31,.32), transparent, rgba(255,255,255,.1), transparent);
          animation: spin 16s linear infinite;
        }

        .orbital-system::after {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: 41px;
          background:
            radial-gradient(circle at 50% 46%, transparent 0 28%, rgba(5,5,5,.58) 45%, rgba(5,5,5,.95) 100%),
            linear-gradient(180deg, rgba(255,255,255,.055), rgba(255,255,255,.018));
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .core {
          position: absolute;
          left: 50%;
          top: 48%;
          width: 190px;
          height: 190px;
          transform: translate(-50%, -50%);
          z-index: 3;
          border-radius: 50%;
          background:
            radial-gradient(circle at 40% 36%, #fff, var(--ahos-orange) 18%, rgba(255,117,31,.22) 36%, rgba(255,117,31,.05) 64%, transparent 72%);
          box-shadow: 0 0 80px rgba(255,117,31,.42), inset 0 0 45px rgba(255,255,255,.18);
          animation: breathe 3.8s ease-in-out infinite;
        }

        .core::before,
        .core::after {
          content: "";
          position: absolute;
          inset: -44px;
          border-radius: inherit;
          border: 1px solid rgba(255,117,31,.32);
          animation: pulseRing 3.8s ease-in-out infinite;
        }

        .core::after {
          inset: -86px;
          animation-delay: .55s;
          border-color: rgba(255,255,255,.12);
        }

        @keyframes breathe {
          0%,100% { transform: translate(-50%, -50%) scale(.96); }
          50% { transform: translate(-50%, -50%) scale(1.04); }
        }

        @keyframes pulseRing {
          0%,100% { transform: scale(.96); opacity: .55; }
          50% { transform: scale(1.06); opacity: 1; }
        }

        .orbit {
          position: absolute;
          left: 50%;
          top: 48%;
          z-index: 4;
          width: 380px;
          height: 380px;
          margin: -190px 0 0 -190px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.1);
          animation: spin 18s linear infinite;
        }

        .orbit:nth-of-type(2) {
          width: 485px;
          height: 485px;
          margin: -242.5px 0 0 -242.5px;
          animation-duration: 26s;
          animation-direction: reverse;
          opacity: .72;
        }

        .orbit-node {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--ahos-orange);
          box-shadow: 0 0 30px rgba(255,117,31,.8);
        }

        .orbit-node:nth-child(1) { left: 50%; top: -5px; }
        .orbit-node:nth-child(2) { right: 28px; bottom: 62px; }
        .orbit-node:nth-child(3) { left: 22px; bottom: 88px; }

        .floating-panel {
          position: absolute;
          z-index: 6;
          width: 230px;
          padding: 18px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,.13);
          background: rgba(11,11,12,.78);
          backdrop-filter: blur(22px);
          box-shadow: 0 24px 70px rgba(0,0,0,.42);
        }

        .floating-panel.one {
          top: 62px;
          right: -12px;
          animation: floatA 5s ease-in-out infinite;
        }

        .floating-panel.two {
          left: -12px;
          bottom: 100px;
          animation: floatB 5.6s ease-in-out infinite;
        }

        .floating-panel.three {
          right: 54px;
          bottom: 38px;
          animation: floatA 6.3s ease-in-out infinite reverse;
        }

        @keyframes floatA {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }

        @keyframes floatB {
          0%,100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(16px) translateX(8px); }
        }

        .panel-label {
          display: flex;
          justify-content: space-between;
          color: var(--ahos-faint);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        .panel-title {
          margin-top: 14px;
          font-size: 22px;
          font-weight: 950;
          letter-spacing: -.04em;
        }

        .panel-line {
          height: 7px;
          margin-top: 14px;
          overflow: hidden;
          border-radius: 99px;
          background: rgba(255,255,255,.08);
        }

        .panel-line span {
          display: block;
          height: 100%;
          width: var(--w);
          border-radius: inherit;
          background: linear-gradient(90deg, var(--ahos-orange), var(--ahos-orange-2));
        }

        .ticker {
          position: relative;
          z-index: 3;
          border-block: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.025);
          overflow: hidden;
        }

        .ticker-track {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
        }

        .ticker span {
          padding: 24px 34px;
          color: rgba(255,255,255,.68);
          font-size: 13px;
          font-weight: 900;
          letter-spacing: .18em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .ticker b {
          color: var(--ahos-orange);
          font-weight: 950;
        }

        @keyframes marquee {
          to { transform: translateX(-50%); }
        }

        .section {
          position: relative;
          z-index: 2;
          padding: 120px 0;
        }

        .section-head {
          display: grid;
          grid-template-columns: minmax(0, .95fr) minmax(280px, .45fr);
          gap: 48px;
          align-items: end;
          margin-bottom: 58px;
        }

        .section-kicker {
          color: var(--ahos-orange);
          font-size: 11px;
          font-weight: 950;
          letter-spacing: .24em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .section-title {
          margin: 0;
          font-size: clamp(44px, 7vw, 92px);
          line-height: .9;
          letter-spacing: -.075em;
          font-weight: 950;
          text-transform: uppercase;
        }

        .section-copy {
          margin: 0;
          color: var(--ahos-muted);
          font-size: 17px;
          line-height: 1.75;
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
          padding: 30px;
          overflow: hidden;
          border-radius: 34px;
          border: 1px solid rgba(255,255,255,.1);
          background:
            linear-gradient(140deg, rgba(255,255,255,.085), rgba(255,255,255,.025)),
            radial-gradient(circle at 88% 12%, rgba(255,117,31,.14), transparent 36%);
          text-decoration: none;
          box-shadow: 0 25px 90px rgba(0,0,0,.32);
          transition: transform .45s cubic-bezier(.2,.8,.2,1), border-color .35s ease, background .35s ease;
        }

        .service-card::before {
          content: "";
          position: absolute;
          inset: -1px;
          opacity: 0;
          background: radial-gradient(circle at var(--x, 70%) var(--y, 20%), rgba(255,117,31,.28), transparent 34%);
          transition: opacity .35s ease;
        }

        .service-card::after {
          content: "";
          position: absolute;
          right: -70px;
          bottom: -70px;
          width: 210px;
          height: 210px;
          border-radius: 50%;
          border: 1px solid rgba(255,117,31,.24);
          box-shadow: inset 0 0 55px rgba(255,117,31,.08);
          transition: transform .45s ease;
        }

        .service-card:hover {
          transform: translateY(-8px) scale(1.01);
          border-color: rgba(255,117,31,.42);
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-card:hover::after {
          transform: scale(1.22) rotate(18deg);
        }

        .service-eyebrow,
        .service-body,
        .service-arrow {
          position: relative;
          z-index: 2;
        }

        .service-eyebrow {
          color: var(--ahos-orange);
          font-size: 11px;
          font-weight: 950;
          letter-spacing: .18em;
          text-transform: uppercase;
        }

        .service-card h3 {
          max-width: 500px;
          margin: 0 0 16px;
          font-size: clamp(30px, 4vw, 48px);
          line-height: .98;
          letter-spacing: -.055em;
          font-weight: 950;
        }

        .service-card p {
          max-width: 570px;
          margin: 0;
          color: var(--ahos-muted);
          font-size: 15px;
          line-height: 1.7;
        }

        .service-arrow {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.13);
          background: rgba(255,255,255,.04);
          transition: transform .35s ease, background .35s ease;
        }

        .service-card:hover .service-arrow {
          transform: translateX(8px);
          background: var(--ahos-orange);
          color: #050505;
        }

        .showcase {
          padding: 130px 0;
          position: relative;
          z-index: 2;
        }

        .showcase-panel {
          position: relative;
          min-height: 650px;
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 50px;
          align-items: center;
          overflow: hidden;
          border-radius: 42px;
          border: 1px solid rgba(255,255,255,.12);
          background:
            radial-gradient(circle at 78% 42%, rgba(255,117,31,.18), transparent 35%),
            linear-gradient(140deg, rgba(255,255,255,.08), rgba(255,255,255,.025));
          box-shadow: var(--ahos-shadow);
          padding: 52px;
        }

        .showcase-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(circle at 72% 50%, black, transparent 68%);
          opacity: .7;
        }

        .showcase-content,
        .dashboard {
          position: relative;
          z-index: 2;
        }

        .showcase h2 {
          margin: 0;
          font-size: clamp(44px, 7vw, 90px);
          line-height: .9;
          letter-spacing: -.075em;
          text-transform: uppercase;
        }

        .showcase p {
          margin: 24px 0 0;
          color: var(--ahos-muted);
          line-height: 1.8;
          font-size: 17px;
        }

        .dashboard {
          min-height: 440px;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(5,5,5,.72);
          backdrop-filter: blur(24px);
          box-shadow: 0 30px 120px rgba(0,0,0,.5);
          overflow: hidden;
          transform: rotateX(6deg) rotateY(-7deg);
        }

        .dash-top {
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          border-bottom: 1px solid rgba(255,255,255,.1);
          color: var(--ahos-faint);
          font-size: 11px;
          font-weight: 950;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        .dash-dots {
          display: flex;
          gap: 7px;
        }

        .dash-dots i {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: rgba(255,255,255,.22);
        }

        .dash-body {
          padding: 22px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .dash-card {
          min-height: 130px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.045);
          padding: 18px;
          overflow: hidden;
        }

        .dash-card.wide {
          grid-column: 1 / -1;
          min-height: 170px;
        }

        .dash-label {
          color: var(--ahos-faint);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        .dash-value {
          margin-top: 10px;
          font-size: 32px;
          font-weight: 950;
          letter-spacing: -.05em;
        }

        .wave {
          height: 72px;
          margin-top: 18px;
          border-radius: 18px;
          background:
            linear-gradient(110deg, transparent 0 12%, rgba(255,117,31,.68) 12% 15%, transparent 15% 28%, rgba(255,117,31,.45) 28% 31%, transparent 31% 47%, rgba(255,117,31,.75) 47% 50%, transparent 50% 68%, rgba(255,117,31,.5) 68% 71%, transparent 71%),
            linear-gradient(180deg, rgba(255,117,31,.12), rgba(255,255,255,.02));
          animation: waveMove 5s linear infinite;
        }

        @keyframes waveMove {
          to { background-position: 220px 0, 0 0; }
        }

        .process {
          padding: 115px 0;
          position: relative;
          z-index: 2;
        }

        .process-line {
          margin-top: 60px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 30px;
          overflow: hidden;
          background: rgba(255,255,255,.1);
        }

        .process-step {
          min-height: 240px;
          padding: 28px;
          background: rgba(7,7,7,.96);
        }

        .process-step b {
          color: var(--ahos-orange);
          font-size: 12px;
          letter-spacing: .18em;
          text-transform: uppercase;
        }

        .process-step h3 {
          margin: 44px 0 12px;
          font-size: 26px;
          letter-spacing: -.045em;
        }

        .process-step p {
          margin: 0;
          color: var(--ahos-muted);
          line-height: 1.7;
          font-size: 14px;
        }

        .final {
          position: relative;
          z-index: 2;
          padding: 130px 0 150px;
          text-align: center;
        }

        .final::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(980px, 92vw);
          height: min(980px, 92vw);
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,117,31,.16), transparent 62%);
          z-index: -1;
        }

        .final h2 {
          max-width: 1000px;
          margin: 0 auto;
          font-size: clamp(54px, 9vw, 126px);
          line-height: .84;
          letter-spacing: -.09em;
          text-transform: uppercase;
        }

        .final h2 span {
          color: var(--ahos-orange);
        }

        .final p {
          max-width: 620px;
          margin: 30px auto 0;
          color: var(--ahos-muted);
          line-height: 1.8;
          font-size: 17px;
        }

        .final .hero-actions {
          justify-content: center;
        }

        @media (max-width: 1040px) {
          .hero-grid,
          .section-head,
          .showcase-panel {
            grid-template-columns: 1fr;
          }

          .visual-stage {
            min-height: 560px;
            max-width: 620px;
            margin: 0 auto;
            width: 100%;
          }

          .services-grid,
          .process-line {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 720px) {
          .wrap {
            width: min(100% - 28px, 1200px);
          }

          .hero {
            padding: 120px 0 70px;
          }

          .hero-title {
            font-size: 54px;
          }

          .hero-copy,
          .section-copy,
          .showcase p,
          .final p {
            font-size: 15px;
          }

          .visual-stage {
            min-height: 470px;
          }

          .orbital-system {
            inset: 10px 0 0;
            transform: none;
            border-radius: 30px;
          }

          .core {
            width: 140px;
            height: 140px;
          }

          .orbit {
            width: 270px;
            height: 270px;
            margin: -135px 0 0 -135px;
          }

          .orbit:nth-of-type(2) {
            width: 350px;
            height: 350px;
            margin: -175px 0 0 -175px;
          }

          .floating-panel {
            width: 190px;
            padding: 14px;
          }

          .floating-panel.one { right: 12px; top: 44px; }
          .floating-panel.two { left: 12px; bottom: 78px; }
          .floating-panel.three { display: none; }

          .services-grid,
          .process-line,
          .dash-body {
            grid-template-columns: 1fr;
          }

          .service-card {
            min-height: 310px;
            padding: 24px;
            border-radius: 26px;
          }

          .showcase,
          .section,
          .process,
          .final {
            padding: 86px 0;
          }

          .showcase-panel {
            min-height: auto;
            padding: 24px;
            border-radius: 28px;
          }

          .dashboard {
            min-height: 420px;
            transform: none;
          }

          .process-line {
            border-radius: 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <main className="home">
        <div className="noise" />
        <div className="cinema-lines" />
        <div className="cursor-glow" />

        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-content">
              <div className="eyebrow">AHOS / Software Agency</div>

              <h1 className="hero-title" aria-label="Digital systems built to move brands forward">
                <span className="line"><span>Digital</span></span>
                <span className="line"><span>systems built</span></span>
                <span className="line"><span>to <em>move.</em></span></span>
              </h1>

              <p className="hero-copy">
                AHOS designs and engineers premium websites, e-commerce platforms,
                automations, blockchain experiences, and custom systems for brands
                that want to look sharper, operate faster, and scale with confidence.
              </p>

              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary">Start a Project →</Link>
                <Link href="/services" className="btn btn-ghost">Explore Services</Link>
              </div>

              <div className="hero-proof">
                <span>Strategy</span>
                <span>Design</span>
                <span>Engineering</span>
                <span>Launch</span>
              </div>
            </div>

            <div className="visual-stage" aria-hidden="true">
              <div className="orbital-system" />
              <div className="core" />

              <div className="orbit">
                <span className="orbit-node" />
                <span className="orbit-node" />
                <span className="orbit-node" />
              </div>
              <div className="orbit">
                <span className="orbit-node" />
                <span className="orbit-node" />
                <span className="orbit-node" />
              </div>

              <div className="floating-panel one">
                <div className="panel-label"><span>Build</span><span>Live</span></div>
                <div className="panel-title">Conversion-ready interface</div>
                <div className="panel-line"><span style={{ "--w": "92%" } as React.CSSProperties} /></div>
              </div>

              <div className="floating-panel two">
                <div className="panel-label"><span>System</span><span>Active</span></div>
                <div className="panel-title">Automation pipeline</div>
                <div className="panel-line"><span style={{ "--w": "78%" } as React.CSSProperties} /></div>
              </div>

              <div className="floating-panel three">
                <div className="panel-label"><span>Launch</span><span>Ready</span></div>
                <div className="panel-title">Scalable digital product</div>
                <div className="panel-line"><span style={{ "--w": "88%" } as React.CSSProperties} /></div>
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
                Every project is built with brand clarity, clean interfaces, strong
                architecture, and a launch plan that makes the final product feel serious.
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
            <div className="showcase-content">
              <div className="section-kicker">Cinematic Systems</div>
              <h2>Not another generic website.</h2>
              <p>
                AHOS builds digital infrastructure that feels premium on the surface
                and works properly underneath: fast pages, clean flows, integrated
                systems, clear messaging, and a user experience that supports business goals.
              </p>
              <div className="hero-actions">
                <Link href="/services" className="btn btn-primary">View Capabilities →</Link>
              </div>
            </div>

            <div className="dashboard" aria-hidden="true">
              <div className="dash-top">
                <div className="dash-dots"><i /><i /><i /></div>
                <span>AHOS Control Layer</span>
              </div>
              <div className="dash-body">
                <div className="dash-card">
                  <div className="dash-label">Interface</div>
                  <div className="dash-value">Premium</div>
                  <div className="panel-line"><span style={{ "--w": "91%" } as React.CSSProperties} /></div>
                </div>
                <div className="dash-card">
                  <div className="dash-label">Performance</div>
                  <div className="dash-value">Fast</div>
                  <div className="panel-line"><span style={{ "--w": "86%" } as React.CSSProperties} /></div>
                </div>
                <div className="dash-card wide">
                  <div className="dash-label">System Activity</div>
                  <div className="wave" />
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
                The process stays simple: understand the business, design the experience,
                build the system, then launch with support.
              </p>
            </div>

            <div className="process-line">
              <div className="process-step">
                <b>01</b>
                <h3>Discover</h3>
                <p>We define the offer, audience, goals, pages, flows, and technical direction.</p>
              </div>
              <div className="process-step">
                <b>02</b>
                <h3>Design</h3>
                <p>We create a premium visual system with strong hierarchy and brand consistency.</p>
              </div>
              <div className="process-step">
                <b>03</b>
                <h3>Engineer</h3>
                <p>We build the website, platform, automation, or system with clean architecture.</p>
              </div>
              <div className="process-step">
                <b>04</b>
                <h3>Launch</h3>
                <p>We prepare the final product, test it, publish it, and support what comes next.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="final">
          <div className="wrap">
            <div className="section-kicker">Start With AHOS</div>
            <h2>Build something <span>serious.</span></h2>
            <p>
              Whether you need a premium website, an e-commerce platform, a custom tool,
              or a full digital system, AHOS turns the idea into a product that looks sharp
              and works with purpose.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">Contact AHOS →</Link>
              <Link href="/careers" className="btn btn-ghost">Join the Team</Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

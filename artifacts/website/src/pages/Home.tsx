import { Link } from "wouter";
import { Footer } from "../components/Footer";

const services = [
  {
    eyebrow: "01 / Signature Websites",
    title: "Premium digital homes for serious brands.",
    text: "Cinematic landing pages, corporate websites, and high-converting digital experiences designed with sharp messaging and polished execution.",
    href: "/services",
  },
  {
    eyebrow: "02 / E-commerce Systems",
    title: "Stores that feel premium and sell clearly.",
    text: "Product journeys, checkout-ready storefronts, payment flows, customer experiences, and launch support built around conversion.",
    href: "/services",
  },
  {
    eyebrow: "03 / AI & Automation",
    title: "Operational systems that remove friction.",
    text: "Automated workflows, dashboards, internal tools, CRM flows, and AI-supported systems that help businesses move faster.",
    href: "/services",
  },
  {
    eyebrow: "04 / Blockchain Products",
    title: "Web3 experiences designed for real users.",
    text: "Smart contract interfaces, token ecosystems, decentralized platforms, and blockchain products with usability at the center.",
    href: "/blockchain-services",
  },
];

const stackItems = [
  "Brand Systems",
  "Web Development",
  "E-commerce",
  "AI Automation",
  "Blockchain",
  "Custom Platforms",
  "Launch Support",
  "Digital Strategy",
];

const processSteps = [
  {
    number: "01",
    title: "Decode",
    text: "We understand the business, the offer, the audience, and what the digital product needs to achieve.",
  },
  {
    number: "02",
    title: "Design",
    text: "We create a premium interface direction with strong hierarchy, clear flow, and consistent AHOS-level polish.",
  },
  {
    number: "03",
    title: "Engineer",
    text: "We build clean, scalable, responsive systems that look sharp and work properly across devices.",
  },
  {
    number: "04",
    title: "Launch",
    text: "We test, refine, publish, and support the product so it is ready for real users and real business goals.",
  },
];

export default function Home() {
  return (
    <>
      <style>{`
        :root {
          --ahos-bg: #040404;
          --ahos-bg-2: #080808;
          --ahos-card: rgba(255, 255, 255, 0.06);
          --ahos-card-strong: rgba(255, 255, 255, 0.105);
          --ahos-line: rgba(255, 255, 255, 0.115);
          --ahos-line-hot: rgba(255, 117, 31, 0.48);
          --ahos-text: #ffffff;
          --ahos-muted: rgba(255, 255, 255, 0.69);
          --ahos-soft: rgba(255, 255, 255, 0.48);
          --ahos-faint: rgba(255, 255, 255, 0.34);
          --ahos-orange: #ff751f;
          --ahos-orange-2: #ff9d55;
          --ahos-orange-3: #ffb579;
          --ahos-orange-soft: rgba(255, 117, 31, 0.19);
          --ahos-radius-xl: 42px;
          --ahos-shadow: 0 46px 160px rgba(0, 0, 0, 0.68);
        }

        * { box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          background: var(--ahos-bg);
        }

        .home {
          min-height: 100vh;
          overflow: hidden;
          color: var(--ahos-text);
          background:
            radial-gradient(circle at 78% 8%, rgba(255,117,31,.18), transparent 34%),
            radial-gradient(circle at 12% 24%, rgba(255,117,31,.075), transparent 26%),
            radial-gradient(circle at 50% 118%, rgba(255,117,31,.08), transparent 35%),
            linear-gradient(180deg, #040404 0%, #090909 46%, #040404 100%);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .home a { color: inherit; }

        .wrap {
          width: min(1220px, calc(100% - 44px));
          margin: 0 auto;
          position: relative;
          z-index: 3;
        }

        .noise,
        .cinema-grid,
        .ambient-glow,
        .vignette {
          pointer-events: none;
          position: fixed;
          inset: 0;
        }

        .noise {
          z-index: 1;
          opacity: .075;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
        }

        .cinema-grid {
          z-index: 0;
          opacity: .42;
          background:
            linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
          background-size: 92px 92px;
          mask-image: radial-gradient(circle at 52% 26%, black 0%, transparent 68%);
        }

        .ambient-glow {
          z-index: 0;
          background:
            radial-gradient(circle at 76% 22%, rgba(255,117,31,.18), transparent 28%),
            radial-gradient(circle at 28% 76%, rgba(255,117,31,.08), transparent 30%);
          animation: ambientMove 10s ease-in-out infinite alternate;
        }

        .vignette {
          z-index: 2;
          background: radial-gradient(circle at center, transparent 0 48%, rgba(0,0,0,.42) 100%);
        }

        @keyframes ambientMove {
          from { transform: translate3d(-1.6%, -1%, 0) scale(1); }
          to { transform: translate3d(2.4%, 1.6%, 0) scale(1.08); }
        }

        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 150px 0 96px;
          isolation: isolate;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: auto -12% 0;
          height: 34%;
          z-index: 2;
          background: linear-gradient(to top, var(--ahos-bg), transparent);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 540px;
          gap: 78px;
          align-items: center;
        }

        .eyebrow,
        .section-kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: var(--ahos-soft);
          font-size: 11px;
          font-weight: 950;
          letter-spacing: .24em;
          text-transform: uppercase;
        }

        .eyebrow {
          margin-bottom: 28px;
          animation: riseIn .85s ease both;
        }

        .eyebrow::before,
        .section-kicker::before {
          content: "";
          width: 42px;
          height: 1px;
          background: linear-gradient(90deg, var(--ahos-orange), transparent);
        }

        .hero-title {
          max-width: 850px;
          margin: 0;
          font-size: clamp(58px, 9vw, 134px);
          line-height: .79;
          letter-spacing: -.095em;
          font-weight: 950;
          text-transform: uppercase;
        }

        .hero-title .line {
          display: block;
          overflow: hidden;
          padding-right: .08em;
        }

        .hero-title .line span {
          display: block;
          animation: titleReveal 1.05s cubic-bezier(.17,.84,.24,1) both;
        }

        .hero-title .line:nth-child(2) span { animation-delay: .08s; }
        .hero-title .line:nth-child(3) span { animation-delay: .16s; }

        .hero-title em {
          color: var(--ahos-orange);
          font-style: normal;
          text-shadow: 0 0 55px rgba(255,117,31,.36);
        }

        @keyframes titleReveal {
          from { transform: translateY(115%) rotate(2deg); opacity: 0; }
          to { transform: translateY(0) rotate(0); opacity: 1; }
        }

        @keyframes riseIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .hero-copy {
          max-width: 690px;
          margin: 34px 0 0;
          color: var(--ahos-muted);
          font-size: 18px;
          line-height: 1.82;
          animation: riseIn .85s ease .24s both;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 42px;
          animation: riseIn .85s ease .34s both;
        }

        .btn {
          position: relative;
          min-height: 56px;
          padding: 0 28px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          overflow: hidden;
          border: 1px solid var(--ahos-line);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-size: 12px;
          font-weight: 950;
          isolation: isolate;
          transition: transform .35s cubic-bezier(.2,.8,.2,1), border-color .35s ease, background .35s ease, color .35s ease;
          will-change: transform;
        }

        .btn::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: 0;
          background: linear-gradient(110deg, transparent, rgba(255,255,255,.28), transparent);
          transform: translateX(-120%);
          transition: transform .7s ease, opacity .35s ease;
        }

        .btn:hover::before {
          opacity: 1;
          transform: translateX(120%);
        }

        .btn-primary {
          background: #fff;
          color: #050505;
          border-color: #fff;
          box-shadow: 0 18px 70px rgba(255,255,255,.14);
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
          background: rgba(255,117,31,.115);
        }

        .hero-proof {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 34px;
          color: var(--ahos-faint);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .13em;
          animation: riseIn .85s ease .46s both;
        }

        .hero-proof span {
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 999px;
          padding: 10px 14px;
          background: rgba(255,255,255,.032);
          backdrop-filter: blur(10px);
        }

        .visual-stage {
          position: relative;
          min-height: 640px;
          perspective: 1300px;
          animation: riseIn .95s ease .18s both;
        }

        .orbital-shell {
          position: absolute;
          inset: 18px 0 0;
          border-radius: var(--ahos-radius-xl);
          background:
            radial-gradient(circle at 52% 48%, rgba(255,117,31,.2), transparent 30%),
            linear-gradient(145deg, rgba(255,255,255,.095), rgba(255,255,255,.026));
          border: 1px solid rgba(255,255,255,.13);
          box-shadow: var(--ahos-shadow), inset 0 0 90px rgba(255,117,31,.065);
          overflow: hidden;
          transform: rotateX(7deg) rotateY(-10deg) rotateZ(.5deg);
        }

        .orbital-shell::before {
          content: "";
          position: absolute;
          inset: -40%;
          background: conic-gradient(from 180deg, transparent, rgba(255,117,31,.32), transparent, rgba(255,255,255,.12), transparent);
          animation: spin 17s linear infinite;
        }

        .orbital-shell::after {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: 41px;
          background:
            radial-gradient(circle at 50% 47%, transparent 0 27%, rgba(5,5,5,.56) 45%, rgba(5,5,5,.96) 100%),
            linear-gradient(180deg, rgba(255,255,255,.055), rgba(255,255,255,.018));
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        .system-mesh {
          position: absolute;
          inset: 82px 44px;
          z-index: 4;
          opacity: .58;
          background-image:
            radial-gradient(circle, rgba(255,117,31,.9) 0 2px, transparent 3px),
            linear-gradient(58deg, transparent 0 48%, rgba(255,117,31,.18) 49% 51%, transparent 52%),
            linear-gradient(122deg, transparent 0 48%, rgba(255,255,255,.12) 49% 51%, transparent 52%);
          background-size: 74px 74px, 150px 150px, 170px 170px;
          mask-image: radial-gradient(circle at center, black, transparent 70%);
          animation: meshDrift 12s ease-in-out infinite alternate;
        }

        @keyframes meshDrift {
          from { transform: translate3d(-8px, 5px, 0); }
          to { transform: translate3d(10px, -8px, 0); }
        }

        .core {
          position: absolute;
          left: 50%;
          top: 48%;
          width: 196px;
          height: 196px;
          transform: translate(-50%, -50%);
          z-index: 6;
          border-radius: 50%;
          background:
            radial-gradient(circle at 39% 34%, #fff 0 4%, var(--ahos-orange-3) 5% 13%, var(--ahos-orange) 18%, rgba(255,117,31,.24) 37%, rgba(255,117,31,.055) 64%, transparent 73%);
          box-shadow: 0 0 90px rgba(255,117,31,.48), inset 0 0 45px rgba(255,255,255,.2);
          animation: breathe 3.8s ease-in-out infinite;
        }

        .core::before,
        .core::after {
          content: "";
          position: absolute;
          border-radius: inherit;
          border: 1px solid rgba(255,117,31,.34);
        }

        .core::before {
          inset: -46px;
          animation: pulseRing 3.8s ease-in-out infinite;
        }

        .core::after {
          inset: -92px;
          border-color: rgba(255,255,255,.13);
          animation: pulseRing 3.8s ease-in-out .55s infinite;
        }

        @keyframes breathe {
          0%,100% { transform: translate(-50%, -50%) scale(.965); }
          50% { transform: translate(-50%, -50%) scale(1.04); }
        }

        @keyframes pulseRing {
          0%,100% { transform: scale(.96); opacity: .5; }
          50% { transform: scale(1.07); opacity: 1; }
        }

        .orbit {
          position: absolute;
          left: 50%;
          top: 48%;
          z-index: 7;
          width: 386px;
          height: 386px;
          margin: -193px 0 0 -193px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.105);
          animation: spin 19s linear infinite;
        }

        .orbit.secondary {
          width: 496px;
          height: 496px;
          margin: -248px 0 0 -248px;
          animation-duration: 28s;
          animation-direction: reverse;
          opacity: .74;
        }

        .orbit-node {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--ahos-orange);
          box-shadow: 0 0 30px rgba(255,117,31,.86);
        }

        .orbit-node:nth-child(1) { left: 50%; top: -5px; }
        .orbit-node:nth-child(2) { right: 30px; bottom: 64px; }
        .orbit-node:nth-child(3) { left: 24px; bottom: 88px; }

        .floating-panel {
          position: absolute;
          z-index: 9;
          width: 238px;
          padding: 18px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(10,10,11,.78);
          backdrop-filter: blur(24px);
          box-shadow: 0 24px 80px rgba(0,0,0,.46);
        }

        .floating-panel.one { top: 62px; right: -10px; animation: floatA 5.2s ease-in-out infinite; }
        .floating-panel.two { left: -14px; bottom: 104px; animation: floatB 5.8s ease-in-out infinite; }
        .floating-panel.three { right: 55px; bottom: 34px; animation: floatA 6.4s ease-in-out infinite reverse; }

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
          font-weight: 950;
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
          margin-top: 15px;
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
          box-shadow: 0 0 22px rgba(255,117,31,.35);
        }

        .ticker {
          position: relative;
          z-index: 4;
          border-block: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.025);
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .ticker-track {
          display: flex;
          width: max-content;
          animation: marquee 24s linear infinite;
        }

        .ticker span {
          padding: 24px 34px;
          color: rgba(255,255,255,.68);
          font-size: 13px;
          font-weight: 950;
          letter-spacing: .18em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .ticker b { color: var(--ahos-orange); font-weight: 950; }
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

        .section-kicker { margin-bottom: 18px; color: var(--ahos-orange); }

        .section-title {
          margin: 0;
          font-size: clamp(44px, 7vw, 94px);
          line-height: .89;
          letter-spacing: -.078em;
          font-weight: 950;
          text-transform: uppercase;
        }

        .section-copy {
          margin: 0;
          color: var(--ahos-muted);
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
          min-height: 365px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 32px;
          overflow: hidden;
          border-radius: 34px;
          border: 1px solid rgba(255,255,255,.105);
          background:
            linear-gradient(140deg, rgba(255,255,255,.09), rgba(255,255,255,.025)),
            radial-gradient(circle at 88% 12%, rgba(255,117,31,.16), transparent 36%);
          text-decoration: none;
          box-shadow: 0 25px 92px rgba(0,0,0,.34);
          transition: transform .45s cubic-bezier(.2,.8,.2,1), border-color .35s ease, background .35s ease;
        }

        .service-card::before {
          content: "";
          position: absolute;
          inset: -1px;
          opacity: 0;
          background: radial-gradient(circle at 76% 18%, rgba(255,117,31,.29), transparent 34%);
          transition: opacity .35s ease;
        }

        .service-card::after {
          content: "";
          position: absolute;
          right: -72px;
          bottom: -72px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          border: 1px solid rgba(255,117,31,.25);
          box-shadow: inset 0 0 58px rgba(255,117,31,.08);
          transition: transform .45s ease;
        }

        .service-card:hover {
          transform: translateY(-8px) scale(1.01);
          border-color: rgba(255,117,31,.44);
        }

        .service-card:hover::before { opacity: 1; }
        .service-card:hover::after { transform: scale(1.22) rotate(18deg); }

        .service-eyebrow,
        .service-body,
        .service-arrow { position: relative; z-index: 2; }

        .service-eyebrow {
          color: var(--ahos-orange);
          font-size: 11px;
          font-weight: 950;
          letter-spacing: .18em;
          text-transform: uppercase;
        }

        .service-card h3 {
          max-width: 520px;
          margin: 0 0 16px;
          font-size: clamp(30px, 4vw, 49px);
          line-height: .98;
          letter-spacing: -.056em;
          font-weight: 950;
        }

        .service-card p {
          max-width: 590px;
          margin: 0;
          color: var(--ahos-muted);
          font-size: 15px;
          line-height: 1.72;
        }

        .service-arrow {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.13);
          background: rgba(255,255,255,.04);
          transition: transform .35s ease, background .35s ease, color .35s ease;
        }

        .service-card:hover .service-arrow {
          transform: translateX(8px);
          background: var(--ahos-orange);
          color: #050505;
        }

        .showcase {
          position: relative;
          z-index: 4;
          padding: 126px 0;
        }

        .showcase-panel {
          position: relative;
          min-height: 680px;
          display: grid;
          grid-template-columns: .82fr 1.18fr;
          gap: 56px;
          align-items: center;
          overflow: hidden;
          border-radius: var(--ahos-radius-xl);
          border: 1px solid rgba(255,255,255,.13);
          background:
            radial-gradient(circle at 78% 42%, rgba(255,117,31,.2), transparent 35%),
            linear-gradient(140deg, rgba(255,255,255,.085), rgba(255,255,255,.024));
          box-shadow: var(--ahos-shadow);
          padding: 56px;
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
          opacity: .72;
        }

        .showcase-content,
        .dashboard { position: relative; z-index: 2; }

        .showcase h2 {
          margin: 0;
          font-size: clamp(44px, 7vw, 92px);
          line-height: .88;
          letter-spacing: -.078em;
          text-transform: uppercase;
        }

        .showcase p {
          margin: 25px 0 0;
          color: var(--ahos-muted);
          line-height: 1.82;
          font-size: 17px;
        }

        .dashboard {
          min-height: 470px;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,.145);
          background: rgba(5,5,5,.74);
          backdrop-filter: blur(24px);
          box-shadow: 0 30px 120px rgba(0,0,0,.52);
          overflow: hidden;
          transform: rotateX(6deg) rotateY(-7deg) rotateZ(.4deg);
        }

        .dash-top {
          height: 60px;
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

        .dash-dots { display: flex; gap: 7px; }
        .dash-dots i { width: 9px; height: 9px; border-radius: 50%; background: rgba(255,255,255,.22); }

        .dash-body {
          padding: 22px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .dash-card {
          min-height: 138px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,.105);
          background: rgba(255,255,255,.045);
          padding: 18px;
          overflow: hidden;
        }

        .dash-card.wide { grid-column: 1 / -1; min-height: 184px; }

        .dash-label {
          color: var(--ahos-faint);
          font-size: 10px;
          font-weight: 950;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        .dash-value {
          margin-top: 10px;
          font-size: 33px;
          font-weight: 950;
          letter-spacing: -.052em;
        }

        .wave {
          height: 82px;
          margin-top: 20px;
          border-radius: 18px;
          background:
            linear-gradient(110deg, transparent 0 12%, rgba(255,117,31,.72) 12% 15%, transparent 15% 28%, rgba(255,117,31,.45) 28% 31%, transparent 31% 47%, rgba(255,117,31,.8) 47% 50%, transparent 50% 68%, rgba(255,117,31,.52) 68% 71%, transparent 71%),
            linear-gradient(180deg, rgba(255,117,31,.13), rgba(255,255,255,.02));
          animation: waveMove 5s linear infinite;
        }

        @keyframes waveMove { to { background-position: 230px 0, 0 0; } }

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
          border: 1px solid rgba(255,255,255,.105);
          border-radius: 30px;
          overflow: hidden;
          background: rgba(255,255,255,.105);
          box-shadow: 0 32px 110px rgba(0,0,0,.36);
        }

        .process-step {
          min-height: 252px;
          padding: 30px;
          background:
            radial-gradient(circle at 90% 0%, rgba(255,117,31,.08), transparent 32%),
            rgba(7,7,7,.96);
        }

        .process-step b {
          color: var(--ahos-orange);
          font-size: 12px;
          letter-spacing: .18em;
          text-transform: uppercase;
        }

        .process-step h3 {
          margin: 48px 0 12px;
          font-size: 28px;
          letter-spacing: -.048em;
        }

        .process-step p {
          margin: 0;
          color: var(--ahos-muted);
          line-height: 1.72;
          font-size: 14px;
        }

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
          background: radial-gradient(circle, rgba(255,117,31,.17), transparent 62%);
          z-index: -1;
        }

        .final .section-kicker { justify-content: center; }

        .final h2 {
          max-width: 1060px;
          margin: 24px auto 0;
          font-size: clamp(54px, 9vw, 132px);
          line-height: .82;
          letter-spacing: -.095em;
          text-transform: uppercase;
        }

        .final h2 span { color: var(--ahos-orange); }

        .final p {
          max-width: 640px;
          margin: 31px auto 0;
          color: var(--ahos-muted);
          line-height: 1.82;
          font-size: 17px;
        }

        .final .hero-actions { justify-content: center; }

        @media (max-width: 1080px) {
          .hero-grid,
          .section-head,
          .showcase-panel { grid-template-columns: 1fr; }

          .visual-stage {
            min-height: 590px;
            max-width: 650px;
            margin: 0 auto;
            width: 100%;
          }

          .services-grid,
          .process-line { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 740px) {
          .wrap { width: min(100% - 28px, 1220px); }

          .hero { padding: 122px 0 74px; }

          .hero-title { font-size: 55px; letter-spacing: -.082em; }

          .hero-copy,
          .section-copy,
          .showcase p,
          .final p { font-size: 15px; }

          .hero-actions { width: 100%; }
          .btn { width: 100%; }
          .hero-proof span { flex: 1 1 calc(50% - 12px); text-align: center; }

          .visual-stage { min-height: 485px; }

          .orbital-shell {
            inset: 10px 0 0;
            transform: none;
            border-radius: 30px;
          }

          .orbital-shell::after { border-radius: 29px; }

          .system-mesh { inset: 70px 22px; }

          .core { width: 142px; height: 142px; }

          .orbit {
            width: 272px;
            height: 272px;
            margin: -136px 0 0 -136px;
          }

          .orbit.secondary {
            width: 352px;
            height: 352px;
            margin: -176px 0 0 -176px;
          }

          .floating-panel { width: 190px; padding: 14px; }
          .floating-panel.one { right: 12px; top: 44px; }
          .floating-panel.two { left: 12px; bottom: 80px; }
          .floating-panel.three { display: none; }
          .panel-title { font-size: 18px; }

          .services-grid,
          .process-line,
          .dash-body { grid-template-columns: 1fr; }

          .section,
          .showcase,
          .process,
          .final { padding: 88px 0; }

          .section-title,
          .showcase h2 { font-size: 45px; }

          .service-card {
            min-height: 320px;
            padding: 24px;
            border-radius: 26px;
          }

          .showcase-panel {
            min-height: auto;
            padding: 24px;
            border-radius: 28px;
          }

          .dashboard {
            min-height: 430px;
            transform: none;
          }

          .process-line { border-radius: 24px; }
          .process-step { min-height: 220px; }
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
        <div className="cinema-grid" />
        <div className="ambient-glow" />
        <div className="vignette" />

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
              <div className="orbital-shell" />
              <div className="system-mesh" />
              <div className="core" />

              <div className="orbit">
                <span className="orbit-node" />
                <span className="orbit-node" />
                <span className="orbit-node" />
              </div>

              <div className="orbit secondary">
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
              {processSteps.map((step) => (
                <div className="process-step" key={step.number}>
                  <b>{step.number}</b>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
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

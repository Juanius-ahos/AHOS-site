import { Link } from "wouter";
import { Footer } from "../components/Footer";

const services = [
  {
    eyebrow: "01 / Digital Products",
    title: "Premium websites and platforms built to perform.",
    text: "Custom websites, landing pages, and web applications designed with clear messaging, refined interfaces, and reliable development.",
    href: "/services",
  },
  {
    eyebrow: "02 / E-commerce",
    title: "Online stores designed to convert and scale.",
    text: "Modern storefronts, product flows, checkout experiences, and payment-ready commerce systems for growing brands.",
    href: "/services",
  },
  {
    eyebrow: "03 / Automation",
    title: "Smart systems that simplify operations.",
    text: "AI automations, dashboards, workflows, internal tools, and business systems that reduce manual work and improve speed.",
    href: "/services",
  },
  {
    eyebrow: "04 / Blockchain",
    title: "Web3 products with clean user experiences.",
    text: "Blockchain interfaces, smart contract experiences, token ecosystems, and decentralized platforms built for real usability.",
    href: "/blockchain-services",
  },
];

const phoneCards = [
  ["01", "Web Development"],
  ["02", "E-commerce Setup"],
  ["03", "AI Automation"],
  ["04", "Blockchain Systems"],
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
  ["01", "Discover", "We define the business goal, target audience, offer, structure, and technical direction."],
  ["02", "Design", "We create a premium interface with clear hierarchy, strong spacing, and a polished brand feel."],
  ["03", "Build", "We develop responsive, scalable, and clean systems that work smoothly across devices."],
  ["04", "Launch", "We test, refine, publish, and support the final product so it is ready for real users."],
];

export default function Home() {
  return (
    <>
      <style>{`
        :root {
          --bg: #050505;
          --bg-soft: #0a0a0b;
          --text: #ffffff;
          --muted: rgba(255,255,255,.72);
          --soft: rgba(255,255,255,.48);
          --faint: rgba(255,255,255,.28);
          --line: rgba(255,255,255,.12);
          --line-strong: rgba(255,255,255,.18);
          --panel: rgba(255,255,255,.055);
          --panel-strong: rgba(255,255,255,.085);
          --orange: #ff751f;
          --orange-2: #ff9b4a;
          --orange-soft: rgba(255,117,31,.18);
          --shadow: 0 44px 150px rgba(0,0,0,.62);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: var(--bg); }

        .home {
          min-height: 100vh;
          overflow: hidden;
          color: var(--text);
          background:
            radial-gradient(circle at 78% 14%, rgba(255,117,31,.16), transparent 34%),
            radial-gradient(circle at 14% 74%, rgba(255,117,31,.075), transparent 28%),
            linear-gradient(180deg, #050505 0%, #090909 48%, #050505 100%);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          text-rendering: geometricPrecision;
          -webkit-font-smoothing: antialiased;
        }

        .home a { color: inherit; }

        .wrap {
          width: min(1220px, calc(100% - 44px));
          margin: 0 auto;
          position: relative;
          z-index: 3;
        }

        .noise,
        .grid,
        .vignette,
        .light-beam {
          position: fixed;
          inset: 0;
          pointer-events: none;
        }

        .noise {
          z-index: 1;
          opacity: .045;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
        }

        .grid {
          z-index: 0;
          opacity: .2;
          background:
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.026) 1px, transparent 1px);
          background-size: 88px 88px;
          mask-image: radial-gradient(circle at 50% 24%, black, transparent 70%);
        }

        .light-beam {
          z-index: 0;
          background:
            linear-gradient(115deg, transparent 0 47%, rgba(255,117,31,.08) 50%, transparent 54%),
            radial-gradient(circle at 80% 28%, rgba(255,117,31,.16), transparent 34%);
          opacity: .75;
          animation: ambientShift 9s ease-in-out infinite alternate;
        }

        .vignette {
          z-index: 2;
          background: radial-gradient(circle at center, transparent 0 50%, rgba(0,0,0,.48) 100%);
        }

        @keyframes ambientShift {
          from { transform: translate3d(-1%, -1%, 0) scale(1); }
          to { transform: translate3d(1.4%, 1%, 0) scale(1.04); }
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 138px 0 88px;
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
          gap: 82px;
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

        .eyebrow { margin-bottom: 28px; animation: rise .75s ease both; }

        .eyebrow::before,
        .section-kicker::before {
          content: "";
          width: 42px;
          height: 1px;
          background: linear-gradient(90deg, var(--orange), transparent);
        }

        .hero-title {
          max-width: 860px;
          margin: 0;
          font-size: clamp(56px, 8vw, 112px);
          line-height: .86;
          letter-spacing: -.075em;
          text-transform: uppercase;
          font-weight: 950;
        }

        .hero-title .muted-word {
          color: rgba(255,255,255,.56);
        }

        .hero-title .accent-word {
          color: var(--orange);
          text-shadow: 0 0 46px rgba(255,117,31,.34);
        }

        .hero-copy {
          max-width: 640px;
          margin: 30px 0 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.82;
          animation: rise .75s ease .12s both;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 38px;
          animation: rise .75s ease .22s both;
        }

        .btn {
          min-height: 56px;
          padding: 0 28px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid var(--line-strong);
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

        .btn::after {
          content: "→";
          font-size: 15px;
          line-height: 1;
          transform: translateY(-1px);
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--orange), var(--orange-2));
          color: #070707;
          border-color: rgba(255,117,31,.95);
          box-shadow: 0 18px 60px rgba(255,117,31,.24);
        }

        .btn:hover {
          transform: translateY(-3px);
          border-color: rgba(255,117,31,.58);
          background: rgba(255,117,31,.08);
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #ff8a35, #ffb06d);
          box-shadow: 0 24px 78px rgba(255,117,31,.33);
        }

        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 30px;
          animation: rise .75s ease .32s both;
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

        @keyframes rise {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .phone-stage {
          position: relative;
          min-height: 650px;
          display: grid;
          place-items: center;
          perspective: 1400px;
          animation: rise .85s ease .15s both;
        }

        .phone-glow {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,117,31,.22), transparent 62%);
          filter: blur(8px);
          animation: glowPulse 4.5s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%,100% { transform: scale(.96); opacity: .72; }
          50% { transform: scale(1.06); opacity: .98; }
        }

        .phone-orbit {
          position: absolute;
          width: 560px;
          height: 560px;
          border-radius: 50%;
          border: 1px solid rgba(255,117,31,.16);
          box-shadow: inset 0 0 90px rgba(255,117,31,.035);
          animation: rotate 28s linear infinite;
        }

        .phone-orbit::before,
        .phone-orbit::after {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
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
          width: 310px;
          height: 628px;
          border-radius: 50px;
          padding: 13px;
          background: linear-gradient(145deg, #34363b, #050505 44%, #1c1e22);
          border: 1px solid rgba(255,255,255,.22);
          box-shadow:
            0 46px 130px rgba(0,0,0,.66),
            0 0 0 8px rgba(255,255,255,.024),
            inset 0 0 0 1px rgba(255,255,255,.16);
          transform: rotateX(7deg) rotateY(-12deg) rotateZ(2deg);
          animation: phoneFloat 5.6s ease-in-out infinite;
        }

        @keyframes phoneFloat {
          0%,100% { transform: rotateX(7deg) rotateY(-12deg) rotateZ(2deg) translateY(0); }
          50% { transform: rotateX(7deg) rotateY(-12deg) rotateZ(2deg) translateY(-14px); }
        }

        .iphone-screen {
          position: relative;
          height: 100%;
          overflow: hidden;
          border-radius: 39px;
          background:
            radial-gradient(circle at 76% 18%, rgba(255,117,31,.25), transparent 33%),
            linear-gradient(180deg, #151515, #070707 55%, #111);
          border: 1px solid rgba(255,255,255,.095);
        }

        .iphone-screen::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(255,255,255,.026) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px);
          background-size: 36px 36px;
          opacity: .38;
        }

        .dynamic-island {
          position: absolute;
          left: 50%;
          top: 13px;
          width: 94px;
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
          color: rgba(255,255,255,.5);
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
          border: 1px solid rgba(255,117,31,.3);
          background: rgba(255,117,31,.1);
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
          font-size: 37px;
          line-height: .96;
          letter-spacing: -.05em;
          font-weight: 950;
        }

        .phone-subtitle {
          max-width: 250px;
          margin-top: 16px;
          color: rgba(255,255,255,.68);
          font-size: 13px;
          line-height: 1.58;
        }

        .phone-list {
          display: grid;
          gap: 10px;
          margin-top: 24px;
        }

        .phone-card {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 12px;
          padding: 13px 14px;
          border-radius: 18px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.095);
          color: rgba(255,255,255,.88);
          font-size: 13px;
          font-weight: 800;
        }

        .phone-card small {
          color: rgba(255,255,255,.36);
          font-size: 10px;
          font-weight: 900;
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
          background: linear-gradient(135deg, rgba(255,117,31,.18), rgba(255,255,255,.045));
          border: 1px solid rgba(255,117,31,.22);
        }

        .phone-bottom small {
          display: block;
          color: rgba(255,255,255,.48);
          text-transform: uppercase;
          letter-spacing: .16em;
          font-size: 9px;
          font-weight: 900;
          margin-bottom: 8px;
        }

        .phone-bottom strong {
          display: block;
          font-size: 20px;
          line-height: 1.12;
          letter-spacing: -.035em;
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
          animation: marquee 26s linear infinite;
        }

        .ticker span {
          padding: 24px 34px;
          white-space: nowrap;
          color: rgba(255,255,255,.64);
          text-transform: uppercase;
          letter-spacing: .18em;
          font-size: 13px;
          font-weight: 900;
        }

        .ticker b { color: var(--orange); }
        @keyframes marquee { to { transform: translateX(-50%); } }

        .section,
        .showcase,
        .process,
        .final {
          position: relative;
          z-index: 4;
          animation: softReveal linear both;
          animation-timeline: view();
          animation-range: entry 0% cover 34%;
        }

        .section { padding: 128px 0; }
        .showcase { padding: 126px 0; }
        .process { padding: 118px 0; }
        .final { padding: 138px 0 158px; text-align: center; }

        @keyframes softReveal {
          from { opacity: .45; transform: translateY(48px); }
          to { opacity: 1; transform: translateY(0); }
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
          font-size: clamp(44px, 7vw, 92px);
          line-height: .91;
          letter-spacing: -.07em;
          text-transform: uppercase;
          font-weight: 950;
        }

        .section-title span,
        .showcase h2 span,
        .final h2 span {
          color: var(--orange);
        }

        .section-copy {
          margin: 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.78;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .service-card {
          position: relative;
          min-height: 360px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 28px;
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,.11);
          background:
            radial-gradient(circle at 80% 100%, rgba(255,117,31,.12), transparent 38%),
            linear-gradient(145deg, rgba(255,255,255,.075), rgba(255,255,255,.024));
          color: #fff;
          text-decoration: none;
          box-shadow: 0 26px 90px rgba(0,0,0,.32);
          transition: transform .32s ease, border-color .32s ease, background .32s ease;
          animation: cardReveal linear both;
          animation-timeline: view();
          animation-range: entry 0% cover 32%;
        }

        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(42px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255,117,31,.48);
          background:
            radial-gradient(circle at 80% 100%, rgba(255,117,31,.18), transparent 40%),
            linear-gradient(145deg, rgba(255,255,255,.09), rgba(255,255,255,.03));
        }

        .service-card::after {
          content: "";
          position: absolute;
          right: -82px;
          bottom: -82px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          border: 1px solid rgba(255,117,31,.2);
        }

        .service-eyebrow {
          position: relative;
          z-index: 2;
          color: var(--orange);
          font-size: 10px;
          font-weight: 950;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        .service-body { position: relative; z-index: 2; }

        .service-card h3 {
          margin: 0 0 14px;
          font-size: 25px;
          line-height: 1.03;
          letter-spacing: -.045em;
        }

        .service-card p {
          margin: 0;
          color: rgba(255,255,255,.68);
          font-size: 14px;
          line-height: 1.68;
        }

        .service-arrow {
          position: relative;
          z-index: 2;
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.04);
          transition: transform .3s ease, background .3s ease, color .3s ease;
        }

        .service-card:hover .service-arrow {
          background: var(--orange);
          color: #050505;
          transform: translateX(6px);
        }

        .showcase-panel {
          position: relative;
          min-height: 630px;
          display: grid;
          grid-template-columns: .82fr 1.18fr;
          gap: 56px;
          align-items: center;
          overflow: hidden;
          padding: 56px;
          border-radius: 42px;
          border: 1px solid rgba(255,255,255,.13);
          background:
            radial-gradient(circle at 82% 42%, rgba(255,117,31,.18), transparent 35%),
            linear-gradient(140deg, rgba(255,255,255,.08), rgba(255,255,255,.024));
          box-shadow: var(--shadow);
        }

        .showcase h2 {
          margin: 18px 0 0;
          font-size: clamp(44px, 7vw, 88px);
          line-height: .91;
          letter-spacing: -.07em;
          text-transform: uppercase;
        }

        .showcase p {
          margin: 25px 0 0;
          color: var(--muted);
          font-size: 17px;
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
          transform: rotateX(5deg) rotateY(-6deg);
          animation: previewReveal linear both;
          animation-timeline: view();
          animation-range: entry 0% cover 42%;
        }

        @keyframes previewReveal {
          from { opacity: .45; transform: translateY(46px) rotateX(8deg) rotateY(-10deg); }
          to { opacity: 1; transform: translateY(0) rotateX(5deg) rotateY(-6deg); }
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

        .process-line {
          margin-top: 62px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,.105);
          background: rgba(255,255,255,.105);
          box-shadow: 0 28px 100px rgba(0,0,0,.3);
        }

        .process-step {
          min-height: 248px;
          padding: 30px;
          background:
            radial-gradient(circle at 100% 0%, rgba(255,117,31,.08), transparent 30%),
            rgba(7,7,7,.96);
          animation: cardReveal linear both;
          animation-timeline: view();
          animation-range: entry 0% cover 35%;
        }

        .process-step b {
          color: var(--orange);
          letter-spacing: .18em;
          font-size: 12px;
          font-weight: 950;
        }

        .process-step h3 {
          margin: 48px 0 12px;
          font-size: 28px;
          letter-spacing: -.048em;
        }

        .process-step p {
          margin: 0;
          color: rgba(255,255,255,.68);
          line-height: 1.72;
          font-size: 14px;
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
          background: radial-gradient(circle, rgba(255,117,31,.14), transparent 62%);
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
          max-width: 640px;
          margin: 31px auto 0;
          color: var(--muted);
          line-height: 1.82;
          font-size: 17px;
        }

        .final .actions { justify-content: center; }

        @media (max-width: 1180px) {
          .services-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .service-card h3 { font-size: 34px; }
        }

        @media (max-width: 1080px) {
          .hero-grid,
          .section-head,
          .showcase-panel { grid-template-columns: 1fr; }

          .phone-stage {
            min-height: 610px;
            max-width: 640px;
            margin: 0 auto;
            width: 100%;
          }

          .process-line { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 740px) {
          .wrap { width: min(100% - 28px, 1220px); }

          .hero { padding: 120px 0 74px; }
          .hero-title { font-size: 52px; letter-spacing: -.065em; }
          .hero-copy, .section-copy, .showcase p, .final p { font-size: 15px; }

          .actions { width: 100%; }
          .btn { width: 100%; }

          .hero-tags span {
            flex: 1 1 calc(50% - 10px);
            text-align: center;
            font-size: 10px;
          }

          .phone-stage { min-height: 535px; }
          .phone-glow { width: 390px; height: 390px; }
          .phone-orbit { width: 390px; height: 390px; }

          .iphone {
            width: 260px;
            height: 530px;
            transform: none;
            animation: phoneFloatMobile 5s ease-in-out infinite;
          }

          @keyframes phoneFloatMobile {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .phone-title { font-size: 31px; }
          .phone-subtitle { font-size: 12px; }
          .phone-card { padding: 12px; font-size: 12px; }

          .section, .showcase, .process, .final { padding: 88px 0; }
          .section-title, .showcase h2 { font-size: 43px; }

          .services-grid,
          .process-line { grid-template-columns: 1fr; }

          .service-card {
            min-height: 310px;
            padding: 24px;
            border-radius: 26px;
          }

          .service-card h3 { font-size: 31px; }

          .showcase-panel {
            min-height: auto;
            padding: 24px;
            border-radius: 28px;
          }

          .interface-preview {
            min-height: 400px;
            transform: none;
          }

          .preview-top {
            font-size: 9px;
            letter-spacing: .11em;
          }
        }

        @supports not (animation-timeline: view()) {
          .section,
          .showcase,
          .process,
          .final,
          .service-card,
          .process-step,
          .interface-preview {
            animation-timeline: auto;
          }
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
        <div className="light-beam" />
        <div className="vignette" />

        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="eyebrow">AHOS / Digital Products</div>
              <h1 className="hero-title">
                Digital systems <span className="muted-word">that</span> <span className="accent-word">scale.</span>
              </h1>
              <p className="hero-copy">
                AHOS creates premium websites, e-commerce platforms, automation systems,
                blockchain products, and digital infrastructure for brands that want to look
                professional, move faster, and grow with confidence.
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
                        <span>AHOS System</span>
                        <span>Live</span>
                      </div>
                      <div className="phone-status-pill">Project Mode</div>
                      <div className="phone-title">Build your digital system.</div>
                      <div className="phone-subtitle">
                        Websites, stores, automations, and platforms engineered under one clean brand experience.
                      </div>
                      <div className="phone-list">
                        {phoneCards.map(([number, item]) => (
                          <div className="phone-card" key={item}>
                            <small>{number}</small>
                            <strong>{item}</strong>
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

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="section-kicker">What AHOS Builds</div>
                <h2 className="section-title">End-to-end digital systems for <span>the next era.</span></h2>
              </div>
              <p className="section-copy">
                From strategy and interface design to engineering and launch, we build digital products
                with clean execution, clear structure, and long-term usability.
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
              <h2>Not another <span>generic website.</span></h2>
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

        <section className="process">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="section-kicker">The AHOS Method</div>
                <h2 className="section-title">Built with structure. Delivered with <span>polish.</span></h2>
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

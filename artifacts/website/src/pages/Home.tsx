import { Link } from "wouter";
import { Footer } from "../components/Footer";
import { Section, SectionHeader } from "../components/Section";
import { Button } from "../components/Button";
import { SEOHead, BreadcrumbSchema } from "../seo/SEOHead";
import { useEffect } from "react";

const services = [
  { number: "01", title: "Custom Software", tag: "Built around your workflow", desc: "Tailored platforms, dashboards, internal tools, and business systems — from concept to deployed, scalable product.", href: "/services" },
  { number: "02", title: "Web Development", tag: "Sites that turn visitors into clients", desc: "Premium websites, landing pages, and e-commerce platforms — fast, responsive, and conversion-optimised.", href: "/services", featured: true },
  { number: "03", title: "Media & Branding", tag: "Make your brand impossible to ignore", desc: "Video, animation, brand identity, and social content that gives your business a confident, professional presence.", href: "/services" },
  { number: "04", title: "Web3 & Blockchain", tag: "Smart contracts, dapps, and token systems", desc: "Secure, audited smart contracts, NFT launches, DeFi interfaces, and full Web3 product development.", href: "/web3" },
];

const projects = [
  ["SpeeAligner", "Dental Tech"],
  ["YourProvider", "Security & Automation"],
  ["ido taxi", "Transport App"],
  ["DigitalTrans", "Tech Partner"],
  ["defi.app", "DeFi Protocol"],
  ["abs.xyz", "L2 Web3 Platform"],
];

const processSteps = [
  { number: "01", title: "Discovery", text: "A free consultation where we learn your goals, define the product, and map a clear plan with a fixed-price quote.", bullets: ["Free 30-min call", "Custom project brief", "Clear quote & timeline"] },
  { number: "02", title: "Design & Build", text: "We craft your solution with clean code and sharp design. Regular milestone updates keep you informed at every stage.", bullets: ["Milestone check-ins", "Modern responsive design", "Built exactly to brief"] },
  { number: "03", title: "Launch & Support", text: "We deploy, test, monitor, and support your product from day one — with 24/7 availability and a 30-day post-launch warranty.", bullets: ["Full deployment handled", "24/7 ongoing support", "Performance monitoring"] },
];

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="AHOS — Digital Product Studio"
        description="AHOS builds premium websites, custom software, Web3 platforms, AI tools, and brand identities for businesses worldwide. From strategy to launch — under one roof."
        path="/"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }]} />

      <style>{`
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 120px 0 80px;
          isolation: isolate;
        }
        .hero-bg {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 80% 50% at 50% 20%, rgba(255,117,31,0.12), transparent),
            radial-gradient(ellipse 60% 40% at 20% 70%, rgba(255,117,31,0.06), transparent),
            radial-gradient(ellipse 50% 30% at 80% 80%, rgba(255,117,31,0.04), transparent);
        }
        .hero-grid {
          position: relative; z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 14px; border-radius: 999px;
          border: 1px solid var(--border-hover);
          background: var(--orange-soft);
          color: var(--orange);
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .hero-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--orange);
          box-shadow: 0 0 8px var(--orange-glow);
          animation: ping 2s ease-out infinite;
        }
        @keyframes ping { 0% { box-shadow: 0 0 0 0 var(--orange-glow); } 70% { box-shadow: 0 0 0 8px rgba(255,117,31,0); } 100% { box-shadow: 0 0 0 0 rgba(255,117,31,0); } }
        .hero-eyebrow {
          font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--text-dim); margin-bottom: 16px;
        }
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(48px, 6vw, 80px);
          font-weight: 700; line-height: 1.05;
          letter-spacing: -0.04em;
          margin-bottom: 20px;
        }
        .hero-title .highlight { color: var(--orange); }
        .hero-sub {
          color: var(--text-muted);
          font-size: 17px; line-height: 1.75;
          max-width: 520px; margin-bottom: 32px;
        }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 32px; }
        .hero-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .hero-tag {
          padding: 6px 14px; border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--bg-card);
          color: var(--text-dim);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .hero-visual {
          position: relative;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-card {
          width: 100%; max-width: 480px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          background: var(--bg-card);
          backdrop-filter: blur(20px);
          padding: 36px;
          box-shadow: var(--shadow-lg);
        }
        .hero-card-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 24px; padding-bottom: 16px;
          border-bottom: 1px solid var(--border);
        }
        .hero-card-header span { font-size: 14px; font-weight: 600; }
        .hero-card-header small { color: var(--orange); font-weight: 600; font-size: 12px; }
        .hero-card-list { display: grid; gap: 10px; }
        .hero-card-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px; border-radius: var(--radius);
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          font-size: 13px; font-weight: 500;
          transition: all 0.2s ease;
        }
        .hero-card-item:hover {
          border-color: var(--border-hover);
          background: var(--orange-soft);
        }
        .hero-card-item .num { color: var(--text-dim); font-size: 11px; font-weight: 700; width: 24px; }
        .hero-card-item .dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--orange);
          margin-left: auto;
          flex-shrink: 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin: 80px 0;
        }
        .stat-card {
          text-align: center;
          padding: 36px 20px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          background: var(--bg-card);
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          border-color: var(--border-hover);
          box-shadow: var(--shadow-orange);
        }
        .stat-number {
          font-family: var(--font-display);
          font-size: clamp(40px, 4vw, 56px);
          font-weight: 700;
          color: var(--orange);
          line-height: 1;
          margin-bottom: 8px;
        }
        .stat-label {
          color: var(--text-dim);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 600;
        }

        .services-shell {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 16px;
        }
        .service-featured, .service-card {
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          background: var(--bg-card);
          padding: 32px;
          display: flex; flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s ease;
          text-decoration: none;
          color: var(--text);
        }
        .service-featured { min-height: 420px; }
        .service-card { min-height: 260px; }
        .service-featured:hover, .service-card:hover {
          border-color: var(--border-hover);
          transform: translateY(-4px);
          box-shadow: var(--shadow-orange);
        }
        .service-featured .popular {
          display: inline-block; width: fit-content;
          padding: 4px 12px; border-radius: 999px;
          background: var(--orange); color: #fff;
          font-size: 10px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; margin-bottom: 20px;
        }
        .service-number { color: var(--text-dim); font-size: 12px; font-weight: 700; letter-spacing: 0.15em; margin-bottom: 12px; }
        .service-title { font-family: var(--font-display); font-size: clamp(24px, 3vw, 36px); font-weight: 700; line-height: 1.1; margin-bottom: 12px; }
        .service-desc { color: var(--text-muted); font-size: 14px; line-height: 1.7; }
        .service-footer { margin-top: 20px; color: var(--orange); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
        .service-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .process-card {
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          background: var(--bg-card);
          padding: 32px;
          transition: all 0.3s ease;
        }
        .process-card:hover {
          border-color: var(--border-hover);
          box-shadow: var(--shadow-orange);
        }
        .process-step-num {
          width: 48px; height: 48px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%;
          border: 1px solid var(--border-hover);
          background: var(--orange-soft);
          color: var(--orange);
          font-size: 14px; font-weight: 700;
          margin-bottom: 24px;
        }
        .process-card h3 { font-family: var(--font-display); font-size: 22px; margin-bottom: 12px; }
        .process-card p { color: var(--text-muted); font-size: 14px; line-height: 1.7; margin-bottom: 20px; }
        .process-bullets { display: grid; gap: 8px; }
        .process-bullets span {
          display: flex; align-items: center; gap: 8px;
          color: var(--text-dim); font-size: 13px;
        }
        .process-bullets span::before {
          content: ""; width: 5px; height: 5px; border-radius: 50%;
          background: var(--orange); flex-shrink: 0;
        }

        .cta-section {
          text-align: center;
          padding: 100px 0;
          position: relative;
        }
        .cta-section::before {
          content: ""; position: absolute; left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          width: min(800px, 90vw); height: min(800px, 90vw);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,117,31,0.1), transparent 60%);
          z-index: -1; pointer-events: none;
        }
        .cta-section h2 {
          font-family: var(--font-display);
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 700; line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
        }
        .cta-section h2 .highlight { color: var(--orange); }
        .cta-section p {
          color: var(--text-muted);
          max-width: 600px; margin: 0 auto 32px;
          font-size: 16px; line-height: 1.7;
        }
        .cta-section .actions { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }

        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .hero-visual { min-height: auto; }
          .services-shell { grid-template-columns: 1fr; }
          .service-grid { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: 1fr; }
          .process-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .hero { padding: 100px 0 60px; min-height: auto; }
          .hero-visual { display: none; }
          .stats-grid { margin: 40px 0; }
        }
      `}</style>

      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-grid">
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Available for new projects
            </div>
            <div className="hero-eyebrow">AHOS · Digital Product Studio</div>
            <h1 className="hero-title">
              We build digital products that <span className="highlight">perform.</span>
            </h1>
            <p className="hero-sub">
              AHOS designs and develops premium websites, custom software, Web3 platforms, 
              AI tools, and brand identities — from strategy to launch, all under one roof.
            </p>
            <div className="hero-actions">
              <Button href="/contact">Start a Project →</Button>
              <Button href="/services" variant="secondary">Explore Services →</Button>
            </div>
            <div className="hero-tags">
              <span className="hero-tag">Web Dev</span>
              <span className="hero-tag">Mobile Apps</span>
              <span className="hero-tag">Branding</span>
              <span className="hero-tag">Automation</span>
              <span className="hero-tag">Web3 & DeFi</span>
              <span className="hero-tag">AI Systems</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-header">
                <span>AHOS Digital Suite</span>
                <small>● Live</small>
              </div>
              <div className="hero-card-list">
                {services.map((s) => (
                  <div className="hero-card-item" key={s.number}>
                    <span className="num">{s.number}</span>
                    <span style={{ flex: 1 }}>{s.title}</span>
                    <span className="dot" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">99%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Availability</div>
          </div>
        </div>
      </Section>

      <Section dark>
        <SectionHeader
          eyebrow="What We Do"
          title="Four capabilities."
          highlight="One studio."
          subtitle="Stop juggling multiple agencies. Software, websites, Web3, and media — all planned together, built to work together."
        />
        <div className="services-shell">
          {services.filter(s => s.featured).map(s => (
            <Link key={s.number} href={s.href} className="service-featured">
              <div>
                <div className="popular">Most Popular</div>
                <div className="service-number">{s.number}</div>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
              </div>
              <div className="service-footer">Learn more →</div>
            </Link>
          ))}
          <div className="service-grid">
            {services.filter(s => !s.featured).map(s => (
              <Link key={s.number} href={s.href} className="service-card">
                <div>
                  <div className="service-number">{s.number}</div>
                  <div className="service-title" style={{ fontSize: 22 }}>{s.title}</div>
                  <div className="service-desc">{s.desc}</div>
                </div>
                <div className="service-footer">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Our Process"
          title="Three steps from idea to"
          highlight="live product."
          subtitle="Simple, transparent, and structured from the first call to launch and beyond."
        />
        <div className="process-grid">
          {processSteps.map((step) => (
            <div className="process-card" key={step.number}>
              <div className="process-step-num">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <div className="process-bullets">
                {step.bullets.map((b) => <span key={b}>{b}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to build something <span className="highlight">extraordinary?</span></h2>
          <p>
            Book a free 30-minute call. We'll listen, advise, and hand you a clear plan — 
            no jargon, no pressure, no commitment.
          </p>
          <div className="actions">
            <Button href="/contact">Start a Project →</Button>
            <Button href="/faq" variant="secondary">View FAQ →</Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

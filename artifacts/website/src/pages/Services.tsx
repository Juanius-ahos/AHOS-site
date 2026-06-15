import { Link } from "wouter";
import { Footer } from "../components/Footer";
import { Section, SectionHeader } from "../components/Section";
import { Button } from "../components/Button";
import { SEOHead, BreadcrumbSchema } from "../seo/SEOHead";
import { ServiceSchema } from "../seo/ServiceSchema";
import { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    name: "Custom Software",
    tag: "Built around your workflow — not the other way around.",
    desc: "We design and develop custom software that fits your exact business needs — from first concept to a fully deployed, scalable product. No off-the-shelf shortcuts. No wasted budget. Just software that works exactly the way you need it to.",
    chips: ["SaaS Platforms", "Web Applications", "Dashboards", "Automation", "API Integration"],
    gets: ["Full source code ownership", "Scalable & user-friendly architecture", "Optional hosting & long-term support"],
    popular: false,
    icon: "🖥️",
  },
  {
    number: "02",
    name: "Web Development",
    tag: "Fast, modern sites that turn visitors into clients.",
    desc: "From landing pages to full e-commerce platforms — every website we build is fast, pixel-perfect, and engineered to grow your business. Responsive on every screen. Optimised for search. Ready to scale the moment you need it to.",
    chips: ["Landing Pages", "Corporate Sites", "E-Commerce", "Maintenance", "Hosting"],
    gets: ["Fully responsive on all devices", "Speed & conversion optimised", "Scalable architecture built in"],
    popular: true,
    icon: "🌐",
  },
  {
    number: "03",
    name: "Media & Branding",
    tag: "Make your brand impossible to ignore.",
    desc: "Compelling visuals that tell your story and set you apart. Videos, motion graphics, brand identity, social packs — we make sure everything you put online looks like it belongs to one confident, professional brand.",
    chips: ["Video Editing", "2D Animation", "Brand Identity", "Style Guides", "Social Packs"],
    gets: ["Professional, polished visuals", "Consistent branding across all platforms", "All source files delivered to you"],
    popular: false,
    icon: "🎨",
  },
];

const projects = [
  { name: "SpeeAligner", type: "Web · Healthcare", desc: "A professional dental aligner brand website — clean, modern, and built to convert visitors into patients.", url: "https://www.speealigner.com" },
  { name: "YourProvider s.a.r.l", type: "Web · Services", desc: "A Lebanon-based service provider platform — designed for clarity, trust, and seamless user experience.", url: "https://www.yourprovider-lb.com" },
  { name: "Ido Taxi", type: "iOS App · Transport", desc: "A Lebanese taxi booking app on the App Store — putting rides at users' fingertips with a smooth, reliable experience.", url: "https://apps.apple.com/lb/app/ido-taxi/id1347542411" },
];

export default function Services() {
  const [active, setActive] = useState(1);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEOHead
        title="Services — Custom Software, Web Development & Digital Media"
        description="AHOS offers custom software development, web development, and media & branding services. Premium digital products built to perform — from strategy to launch."
        path="/services"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Services", url: "/services" }]} />
      <ServiceSchema />

      <style>{`
        .svc-header { padding: 100px 0 60px; text-align: center; }
        .svc-header h1 {
          font-family: var(--font-display);
          font-size: clamp(42px, 6vw, 72px);
          font-weight: 700; line-height: 1.05;
          letter-spacing: -0.04em; margin-bottom: 16px;
        }
        .svc-header h1 span { color: var(--orange); }
        .svc-header p { color: var(--text-muted); max-width: 560px; margin: 0 auto; font-size: 16px; line-height: 1.7; }

        .svc-tabs { display: flex; gap: 12px; margin-bottom: 40px; flex-wrap: wrap; }
        .svc-tab {
          flex: 1; min-width: 200px;
          padding: 24px; border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          background: var(--bg-card);
          cursor: pointer; transition: all 0.3s ease;
          text-align: left; font-family: var(--font-sans);
        }
        .svc-tab:hover { border-color: var(--border-hover); background: var(--bg-card-hover); }
        .svc-tab.active {
          border-color: var(--orange);
          background: var(--orange-soft);
          box-shadow: 0 0 20px rgba(255,117,31,0.1);
        }
        .svc-tab-num { font-size: 11px; color: var(--orange); font-weight: 700; letter-spacing: 0.15em; margin-bottom: 8px; }
        .svc-tab-title { font-size: 18px; font-weight: 700; margin-bottom: 6px; }
        .svc-tab-tag { font-size: 13px; color: var(--text-muted); }
        .svc-tab-popular {
          display: inline-block; margin-top: 8px;
          padding: 2px 8px; border-radius: 4px;
          background: var(--orange); color: #fff;
          font-size: 9px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .svc-panel {
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          background: var(--bg-card);
          padding: 40px;
          margin-bottom: 60px;
        }
        .svc-panel-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 24px; }
        .svc-panel-icon {
          width: 56px; height: 56px; border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          background: var(--orange-soft); border: 1px solid var(--border-hover);
          font-size: 28px;
        }
        .svc-panel-name {
          font-family: var(--font-display);
          font-size: clamp(28px, 3vw, 36px);
          font-weight: 700; margin-bottom: 8px;
        }
        .svc-panel-tag { color: var(--orange); font-weight: 600; margin-bottom: 16px; font-size: 15px; }
        .svc-panel-desc { color: var(--text-muted); line-height: 1.7; margin-bottom: 24px; }
        .svc-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
        .svc-chip {
          padding: 6px 12px; border-radius: 6px;
          background: var(--orange-soft); border: 1px solid var(--border-hover);
          color: var(--orange); font-size: 11px; font-weight: 600;
        }
        .svc-sep { height: 1px; background: var(--border); margin-bottom: 20px; }
        .svc-gets-label { font-size: 10px; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.2em; font-weight: 700; margin-bottom: 12px; }
        .svc-gets { display: grid; gap: 8px; margin-bottom: 28px; }
        .svc-get { display: flex; align-items: center; gap: 10px; color: var(--text-muted); font-size: 14px; }
        .svc-get::before { content: "✓"; color: var(--orange); font-weight: 700; }

        .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .project-card {
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          background: var(--bg-card);
          overflow: hidden;
          transition: all 0.3s ease;
          text-decoration: none; color: var(--text);
        }
        .project-card:hover {
          border-color: var(--border-hover);
          transform: translateY(-4px);
          box-shadow: var(--shadow-orange);
        }
        .project-card-body { padding: 24px; }
        .project-type { color: var(--orange); font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 8px; }
        .project-name { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
        .project-desc { color: var(--text-muted); font-size: 13px; line-height: 1.6; margin-bottom: 12px; }
        .project-url { color: var(--orange); font-size: 12px; font-weight: 600; }

        @media (max-width: 768px) {
          .svc-tabs { flex-direction: column; }
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="svc-header">
        <div className="container">
          <h1>Three services. <span>One team.</span></h1>
          <p>Stop juggling multiple agencies. Software, websites, and media — all handled under one roof, with zero friction.</p>
        </div>
      </div>

      <Section>
        <div className="svc-tabs">
          {services.map((s, i) => (
            <div
              key={s.number}
              className={`svc-tab ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <div className="svc-tab-num">{s.number}</div>
              <div className="svc-tab-title">{s.name}</div>
              <div className="svc-tab-tag">{s.tag}</div>
              {s.popular && <div className="svc-tab-popular">Most Popular</div>}
            </div>
          ))}
        </div>

        {services.map((s, i) => active === i && (
          <div className="svc-panel" key={s.number}>
            <div className="svc-panel-header">
              <div className="svc-panel-icon">{s.icon}</div>
              {s.popular && <span style={{ padding: "4px 12px", borderRadius: 999, background: "var(--orange)", color: "#fff", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>Most Popular</span>}
            </div>
            <div className="svc-panel-name">{s.name}</div>
            <div className="svc-panel-tag">{s.tag}</div>
            <div className="svc-panel-desc">{s.desc}</div>
            <div className="svc-chips">
              {s.chips.map(c => <span key={c} className="svc-chip">{c}</span>)}
            </div>
            <div className="svc-sep" />
            <div className="svc-gets-label">You get</div>
            <div className="svc-gets">
              {s.gets.map(g => <div key={g} className="svc-get">{g}</div>)}
            </div>
            <Button href="/contact">Start a Project →</Button>
          </div>
        ))}
      </Section>

      <Section dark>
        <SectionHeader
          eyebrow="Our Work"
          title="Projects we've"
          highlight="helped build."
          subtitle="A selection of websites and apps we've collaborated on — live and in production."
        />
        <div className="projects-grid">
          {projects.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-card-body">
                <div className="project-type">{p.type}</div>
                <div className="project-name">{p.name}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-url">View project →</div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Get Started"
          title="Not sure where to"
          highlight="start?"
          subtitle="Book a free 30-minute call. We'll listen, advise, and hand you a clear plan — no pressure, no commitment."
        />
        <div style={{ textAlign: "center" }}>
          <Button href="/contact">Book a Free Consultation →</Button>
        </div>
      </Section>

      <Footer />
    </>
  );
}

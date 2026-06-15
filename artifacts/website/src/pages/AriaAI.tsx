import { Footer } from "../components/Footer";
import { Section, SectionHeader } from "../components/Section";
import { Button } from "../components/Button";
import { SEOHead, BreadcrumbSchema } from "../seo/SEOHead";
import { useEffect } from "react";

export default function AriaAI() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const loadScript = () => {
      if (!document.getElementById("ar-script")) {
        const script = document.createElement("script");
        script.id = "ar-script";
        script.src = `${import.meta.env.BASE_URL}aria-widget.js`;
        script.async = true;
        document.body.appendChild(script);
      }
    };
    loadScript();
  }, []);

  return (
    <>
      <SEOHead
        title="ARIA AI — Your AI Project Advisor by AHOS"
        description="ARIA is AHOS's AI project advisor. Tell ARIA what you want to build and get expert guidance on websites, apps, Web3, and AI tools."
        path="/aria-ai"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "ARIA AI", url: "/aria-ai" }]} />

      <style>{`
        .aria-header {
          padding: 100px 0 40px;
          text-align: center;
        }
        .aria-header h1 {
          font-family: var(--font-display);
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          letter-spacing: -0.03em;
          margin-bottom: 8px;
        }
        .aria-header h1 span { color: var(--orange); }
        .aria-header p { color: var(--text-muted); max-width: 500px; margin: 0 auto; }

        .aria-widget-shell {
          max-width: 700px;
          margin: 0 auto 60px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          background: radial-gradient(ellipse at 70% 0%, #110e1e 0%, #07060c 55%, #050408 100%);
          overflow: hidden;
          min-height: 640px;
          position: relative;
        }
        .aria-widget-shell .placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 640px;
          padding: 40px;
          text-align: center;
        }
        .aria-widget-shell .placeholder .ring {
          width: 72px; height: 72px;
          border-radius: 50%;
          border: 3px solid var(--orange);
          box-shadow: 0 0 20px var(--orange-glow);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 24px;
          font-size: 32px;
        }
        .aria-widget-shell .placeholder h3 {
          font-family: var(--font-display);
          font-size: 28px;
          margin-bottom: 8px;
        }
        .aria-widget-shell .placeholder p {
          color: var(--text-dim);
          font-size: 14px;
          margin-bottom: 24px;
        }
        .aria-widget-shell .placeholder .status {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; color: rgba(62,207,142,0.9);
        }
        .aria-widget-shell .placeholder .status::before {
          content: "";
          width: 6px; height: 6px; border-radius: 50%;
          background: #3ecf8e;
          box-shadow: 0 0 8px rgba(62,207,142,0.8);
        }

        .aria-widget-container {
          height: 100%;
          min-height: 640px;
        }
        .aria-widget-container .ar-widget {
          height: 640px;
        }

        .aria-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 40px;
        }
        .aria-info-card {
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          background: var(--bg-card);
          padding: 28px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .aria-info-card:hover {
          border-color: var(--border-hover);
          transform: translateY(-3px);
        }
        .aria-info-card .icon { font-size: 32px; margin-bottom: 12px; }
        .aria-info-card h4 { font-size: 16px; font-weight: 700; margin-bottom: 6px; }
        .aria-info-card p { color: var(--text-muted); font-size: 13px; line-height: 1.6; }

        @media (max-width: 768px) {
          .aria-info { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="aria-header">
        <div className="container">
          <h1>ARIA — Your AI <span>Project Advisor</span></h1>
          <p>Tell ARIA what you want to build and get smart, tailored guidance — instantly.</p>
        </div>
      </div>

      <Section>
        <div className="aria-widget-shell">
          <div id="aria-widget-root" className="aria-widget-container">
            <div className="placeholder">
              <div className="ring">✦</div>
              <h3>Aria</h3>
              <p>Your AI project advisor from AHOS Studio.<br />Tell me what you want to build.</p>
              <div className="status">Online</div>
              <div style={{ marginTop: 24, display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
                {["Website", "Mobile App", "SaaS Platform", "Web3 / DeFi"].map(chip => (
                  <span key={chip} style={{ padding: "8px 18px", borderRadius: 999, border: "1px solid var(--border)", color: "var(--text-dim)", fontSize: 12, cursor: "pointer" }}>{chip}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <SectionHeader
          eyebrow="How It Works"
          title="AI-powered project"
          highlight="guidance."
          subtitle="ARIA uses advanced AI to understand your project, answer your questions, and connect you with the AHOS team — all through a simple chat interface."
        />

        <div className="aria-info">
          <div className="aria-info-card">
            <div className="icon">💬</div>
            <h4>Natural Conversation</h4>
            <p>Chat with ARIA like you would with a human advisor. Ask questions, describe your vision, and get real answers.</p>
          </div>
          <div className="aria-info-card">
            <div className="icon">🎯</div>
            <h4>Smart Qualification</h4>
            <p>ARIA asks the right questions to understand your project scope, budget, timeline, and goals — so the team can prepare a tailored proposal.</p>
          </div>
          <div className="aria-info-card">
            <div className="icon">⚡</div>
            <h4>Instant Responses</h4>
            <p>No waiting for business hours. Get immediate answers about AHOS services, pricing ranges, timelines, and technical feasibility.</p>
          </div>
          <div className="aria-info-card">
            <div className="icon">🤝</div>
            <h4>Seamless Handoff</h4>
            <p>When you're ready, ARIA connects you directly with the AHOS team for a tailored proposal — usually within 24 hours.</p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Button href="/contact">Or Contact Us Directly →</Button>
        </div>
      </Section>

      <Footer />
    </>
  );
}

import { Footer } from "../components/Footer";
import { Section, SectionHeader } from "../components/Section";
import { SEOHead, BreadcrumbSchema } from "../seo/SEOHead";
import { useEffect, useState } from "react";

const projectTypes = ["Website", "Mobile App", "SaaS Platform", "Web3 / DeFi", "AI Tool / Automation", "Not Sure Yet"];
const industries = ["Restaurant & Food", "Retail & E-commerce", "Real Estate", "Fitness & Wellness", "Finance & Crypto", "Technology & SaaS", "Creative & Media", "Other"];
const goals = ["Generate leads & get clients", "Sell products online", "Build brand authority", "Automate a manual process", "Launch a startup / MVP", "Raise investment / pitch"];
const stages = ["Just an idea", "Concept but no designs", "Wireframes ready", "Existing branding / content", "Existing product needs rework"];
const budgets = ["Under $1,000", "$1,000 – $3,000", "$3,000 – $8,000", "$8,000 – $20,000", "$20,000+", "Not sure yet"];
const timelines = ["Within 2 weeks", "Within a month", "1 – 3 months", "3 – 6 months", "Flexible", "Hard launch date"];

export default function Contact() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    projectType: "", industry: "", goal: "", features: [] as string[],
    stage: "", budget: "", timeline: "", name: "", email: "", phone: "", company: "", referral: "", description: "",
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const update = (key: string, val: any) => setForm(f => ({ ...f, [key]: val }));

  const toggleFeature = (f: string) => {
    setForm(prev => ({
      ...prev,
      features: prev.features.includes(f) ? prev.features.filter(x => x !== f) : [...prev.features, f],
    }));
  };

  const nextStep = () => step < 7 && setStep(s => s + 1);
  const prevStep = () => step > 0 && setStep(s => s - 1);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Project Inquiry — ${form.name || "Unknown"}`;
    const body = `
Project Type: ${form.projectType}
Industry: ${form.industry}
Primary Goal: ${form.goal}
Features: ${form.features.join(", ")}
Stage: ${form.stage}
Budget: ${form.budget}
Timeline: ${form.timeline}
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Company: ${form.company}
Referral: ${form.referral}
Description: ${form.description}
    `.trim();
    window.location.href = `mailto:info@ahos.xyz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const steps = [
    {
      title: "What do you want to build?",
      key: "projectType",
      options: projectTypes,
      type: "single",
    },
    {
      title: "What industry are you in?",
      key: "industry",
      options: industries,
      type: "single",
    },
    {
      title: "What's the #1 outcome you need?",
      key: "goal",
      options: goals,
      type: "single",
    },
    {
      title: "Which features are essential?",
      key: "features",
      options: ["User login / accounts", "Payment processing", "Booking / scheduling", "Admin dashboard", "Push notifications", "Real-time data", "AI / smart features", "Wallet / crypto", "API integrations", "CMS"],
      type: "multi",
    },
    {
      title: "Where are you starting from?",
      key: "stage",
      options: stages,
      type: "single",
    },
    {
      title: "What's your investment range?",
      key: "budget",
      options: budgets,
      type: "single",
    },
    {
      title: "When do you need this live?",
      key: "timeline",
      options: timelines,
      type: "single",
    },
    {
      title: "How do we reach you?",
      key: "details",
      type: "details",
    },
  ];

  return (
    <>
      <SEOHead
        title="Contact AHOS — Start Your Project"
        description="Tell us about your project. We'll craft a tailored plan and quote within 24 hours. Websites, apps, Web3, AI, and more."
        path="/contact"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]} />

      <style>{`
        .contact-header { padding: 100px 0 40px; text-align: center; }
        .contact-header h1 {
          font-family: var(--font-display);
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700; letter-spacing: -0.03em;
          margin-bottom: 8px;
        }
        .contact-header p { color: var(--text-muted); }

        .form-shell {
          max-width: 680px; margin: 0 auto 60px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          background: var(--bg-card);
          padding: 40px;
        }
        .form-step-header { margin-bottom: 24px; }
        .form-step-header small { color: var(--orange); font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; }
        .form-step-header h2 { font-family: var(--font-display); font-size: 24px; font-weight: 700; margin-top: 6px; }

        .form-options { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .form-option {
          padding: 14px 18px; border-radius: var(--radius);
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.02);
          color: var(--text-muted); font-size: 14px;
          cursor: pointer; transition: all 0.2s ease;
          text-align: left; font-family: var(--font-sans);
        }
        .form-option:hover { border-color: var(--border-hover); background: var(--bg-card-hover); }
        .form-option.selected {
          border-color: var(--orange);
          background: var(--orange-soft);
          color: var(--orange);
          font-weight: 600;
        }
        .form-option.multi.selected { border-color: var(--orange); background: var(--orange-soft); color: var(--orange); }

        .form-nav { display: flex; justify-content: space-between; margin-top: 28px; gap: 12px; }
        .form-nav button {
          padding: 12px 28px; border-radius: var(--radius);
          font-size: 13px; font-weight: 700; font-family: var(--font-sans);
          cursor: pointer; transition: all 0.2s ease;
        }
        .form-nav .back {
          background: none; border: 1px solid var(--border);
          color: var(--text-muted);
        }
        .form-nav .back:hover { border-color: var(--border-hover); color: var(--text); }
        .form-nav .next {
          background: var(--orange); border: none;
          color: #fff; box-shadow: 0 4px 16px var(--orange-glow);
        }
        .form-nav .next:hover { opacity: 0.9; }
        .form-nav .next:disabled { opacity: 0.4; cursor: not-allowed; }

        .form-details { display: grid; gap: 16px; }
        .form-details .field { }
        .form-details label { display: block; font-size: 11px; color: var(--text-dim); font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 6px; }
        .form-details input, .form-details textarea {
          width: 100%; padding: 12px 14px;
          border-radius: var(--radius);
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.05);
          color: var(--text); font-size: 14px; font-family: var(--font-sans);
          outline: none; transition: border-color 0.2s ease;
        }
        .form-details input:focus, .form-details textarea:focus { border-color: var(--border-hover); }
        .form-details textarea { min-height: 80px; resize: vertical; }

        .contact-direct {
          text-align: center; padding: 60px 0;
          border-top: 1px solid var(--border);
        }
        .contact-direct h3 { font-size: 20px; font-weight: 700; margin-bottom: 6px; }
        .contact-direct p { color: var(--text-muted); margin-bottom: 8px; font-size: 14px; }
        .contact-direct .email { color: var(--orange); font-size: 18px; font-weight: 700; }

        @media (max-width: 768px) {
          .form-options { grid-template-columns: 1fr; }
          .form-shell { padding: 24px; }
        }
      `}</style>

      <div className="contact-header">
        <div className="container">
          <h1>Start Your Project</h1>
          <p>Answer a few questions — we'll craft a tailored plan and quote for you.</p>
        </div>
      </div>

      <Section>
        <div className="form-shell">
          <div className="form-step-header">
            <small>Step {step + 1} of 8</small>
            <h2>{steps[step].title}</h2>
          </div>

          <form onSubmit={submitForm}>
            {step === 7 ? (
              <div className="form-details">
                <div className="field">
                  <label>Full Name *</label>
                  <input type="text" value={form.name} onChange={e => update("name", e.target.value)} placeholder="Your name" required />
                </div>
                <div className="field">
                  <label>Company / Brand (optional)</label>
                  <input type="text" value={form.company} onChange={e => update("company", e.target.value)} placeholder="Company name" />
                </div>
                <div className="field">
                  <label>Email Address *</label>
                  <input type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="you@example.com" required />
                </div>
                <div className="field">
                  <label>WhatsApp / Phone (optional)</label>
                  <input type="tel" value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="+1 000 000 0000" />
                </div>
                <div className="field">
                  <label>How did you hear about AHOS? (optional)</label>
                  <input type="text" value={form.referral} onChange={e => update("referral", e.target.value)} placeholder="Google, Social Media, Referral..." />
                </div>
                <div className="field">
                  <label>Describe your project (optional)</label>
                  <textarea value={form.description} onChange={e => update("description", e.target.value)} placeholder="Tell us about your project..." />
                </div>

                <div style={{ background: "var(--orange-soft)", padding: 16, borderRadius: "var(--radius)", border: "1px solid var(--border-hover)", marginTop: 8 }}>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 4 }}>AHOS Estimates</div>
                  <div style={{ fontSize: 14, color: "var(--text)" }}>We'll provide a tailored quote within 24 hours.</div>
                </div>
              </div>
            ) : steps[step].type === "multi" ? (
              <div className="form-options">
                {(steps[step] as any).options.map((opt: string) => (
                  <div key={opt} className={`form-option multi ${form.features.includes(opt) ? "selected" : ""}`} onClick={() => toggleFeature(opt)}>
                    {opt}
                  </div>
                ))}
              </div>
            ) : (
              <div className="form-options">
                {(steps[step] as any).options.map((opt: string) => (
                  <div key={opt} className={`form-option ${(form as any)[steps[step].key] === opt ? "selected" : ""}`} onClick={() => update(steps[step].key, opt)}>
                    {opt}
                  </div>
                ))}
              </div>
            )}

            <div className="form-nav">
              <button type="button" className="back" onClick={prevStep} style={{ visibility: step === 0 ? "hidden" : "visible" }}>← Back</button>
              {step === 7 ? (
                <button type="submit" className="next">Submit My Project →</button>
              ) : (
                <button type="button" className="next" onClick={nextStep}>Continue →</button>
              )}
            </div>
          </form>
        </div>
      </Section>

      <div className="contact-direct">
        <div className="container">
          <h3>Prefer to email us directly?</h3>
          <p>Send us a message and we'll respond within 24 hours.</p>
          <div className="email">
            <a href="mailto:info@ahos.xyz" style={{ color: "var(--orange)", textDecoration: "none" }}>info@ahos.xyz</a>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 20 }}>
            <a href="https://www.instagram.com/ahos.xyz/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", fontSize: 14 }}>Instagram</a>
            <a href="https://www.linkedin.com/company/ahos-xyz" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", fontSize: 14 }}>LinkedIn</a>
            <a href="https://www.youtube.com/@ahos_xyz" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", fontSize: 14 }}>YouTube</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

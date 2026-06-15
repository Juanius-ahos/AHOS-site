import { Footer } from "../components/Footer";
import { Section, SectionHeader } from "../components/Section";
import { Button } from "../components/Button";
import { SEOHead, BreadcrumbSchema } from "../seo/SEOHead";
import { useEffect } from "react";

const steps = [
  {
    number: "01",
    title: "About the Role",
    body: "AHOS is a digital product studio delivering websites, software, branding, and automation solutions for businesses worldwide. As a Business Development Representative, you will be the bridge between our team and the clients we can best serve.",
    bullets: ["Be the face of AHOS to new audiences", "Drive growth in a globally distributed team", "Own your pipeline and make a real impact"],
  },
  {
    number: "02",
    title: "What You'll Do",
    body: "You will identify, engage, and develop relationships with businesses that can benefit from AHOS services. Working closely with our team, you will help shape how we grow and who we work with.",
    bullets: ["Prospect and connect with potential clients", "Represent AHOS professionally across channels", "Foster long-term business relationships"],
  },
  {
    number: "03",
    title: "Who You Are",
    body: "You have a background in sales, marketing, or client-facing communication and thrive in an autonomous environment. You take initiative, communicate with confidence, and build trust naturally.",
    bullets: ["Confident communicator and relationship builder", "Self-directed and results-oriented", "Passion for technology and digital products"],
  },
];

export default function Careers() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEOHead
        title="Careers — Join the AHOS Team"
        description="Join AHOS as a Business Development Representative. Fully remote, flexible hours, dynamic team. Help us grow and make an impact."
        path="/careers"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Careers", url: "/careers" }]} />

      <style>{`
        .careers-header { padding: 100px 0 60px; text-align: center; }
        .careers-header h1 {
          font-family: var(--font-display);
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700; line-height: 1.1;
          letter-spacing: -0.03em; margin-bottom: 12px;
        }
        .careers-header h1 span { color: var(--orange); }
        .careers-header .meta {
          color: var(--text-dim); font-size: 14px;
          text-transform: uppercase; letter-spacing: 0.15em;
          margin-bottom: 20px;
        }
        .careers-header .pills { display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; }
        .careers-header .pill {
          padding: 6px 14px; border-radius: 999px;
          border: 1px solid var(--border);
          color: var(--text-muted); font-size: 12px;
          display: flex; align-items: center; gap: 6px;
        }
        .careers-header .pill::before { content: ""; width: 5px; height: 5px; border-radius: 50%; background: var(--orange); flex-shrink: 0; }

        .steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 60px; }
        .step-card {
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          background: var(--bg-card);
          padding: 32px;
          transition: all 0.3s ease;
        }
        .step-card:hover {
          border-color: var(--border-hover);
          box-shadow: var(--shadow-orange);
        }
        .step-num {
          width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%;
          border: 1px solid var(--border-hover);
          background: var(--orange-soft);
          color: var(--orange);
          font-size: 12px; font-weight: 700;
          margin-bottom: 20px;
        }
        .step-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 12px; }
        .step-card p { color: var(--text-muted); font-size: 14px; line-height: 1.7; margin-bottom: 20px; }
        .step-bullets { display: grid; gap: 8px; }
        .step-bullets span {
          display: flex; align-items: center; gap: 8px;
          color: var(--text-dim); font-size: 13px;
        }
        .step-bullets span::before { content: ""; width: 5px; height: 5px; border-radius: 50%; background: var(--orange); flex-shrink: 0; }

        .careers-cta { text-align: center; padding: 60px 0; }
        .careers-cta h2 { font-size: 28px; font-weight: 700; margin-bottom: 8px; }
        .careers-cta p { color: var(--text-muted); margin-bottom: 24px; }

        .apply-form {
          max-width: 600px; margin: 0 auto;
          padding: 40px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          background: var(--bg-card);
        }
        .apply-form h3 { font-size: 20px; margin-bottom: 6px; }
        .apply-form p { color: var(--text-muted); font-size: 13px; margin-bottom: 24px; }
        .form-group { margin-bottom: 16px; }
        .form-group label { display: block; font-size: 10px; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.15em; font-weight: 700; margin-bottom: 6px; }
        .form-group input, .form-group textarea {
          width: 100%; padding: 10px 14px;
          border-radius: var(--radius);
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.05);
          color: var(--text);
          font-size: 14px; font-family: var(--font-sans);
          outline: none; transition: border-color 0.2s ease;
        }
        .form-group input:focus, .form-group textarea:focus { border-color: var(--border-hover); }
        .form-group textarea { min-height: 100px; resize: vertical; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="careers-header">
        <div className="container">
          <h1>Business Development <span>Representative</span></h1>
          <div className="meta">Remote · Full-Time · Worldwide</div>
          <div className="pills">
            <span className="pill">Fully Remote</span>
            <span className="pill">Flexible Hours</span>
            <span className="pill">Dynamic Team</span>
            <span className="pill">Growth Role</span>
          </div>
        </div>
      </div>

      <Section>
        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              <div className="step-num">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <div className="step-bullets">
                {step.bullets.map(b => <span key={b}>{b}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="careers-cta">
          <h2>Ready to grow with AHOS?</h2>
          <p>Submit your application and we'll be in touch within 48 hours.</p>
        </div>

        <div className="apply-form">
          <h3>Apply for this Position</h3>
          <p>Fill in the details below and our team will be in touch within 48 hours.</p>

          <form action="https://formsubmit.co/info@ahos.xyz" method="POST"           encType="multipart/form-data">
            <input type="hidden" name="_subject" value="BDR Application — AHOS" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="Position" value="Business Development Representative" />
            <input type="text" name="_honey" style={{ display: "none" }} />

            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" name="name" placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" name="email" placeholder="you@example.com" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" name="phone" placeholder="+1 000 000 0000" />
              </div>
              <div className="form-group">
                <label>LinkedIn or Portfolio</label>
                <input type="url" name="linkedin" placeholder="https://linkedin.com/in/you" />
              </div>
            </div>

            <div className="form-group">
              <label>Why are you a strong fit? *</label>
              <textarea name="message" placeholder="Tell us about your background..." required />
            </div>

            <div className="form-group">
              <label>CV / Resume *</label>
              <input type="file" name="attachment" accept=".pdf,.doc,.docx" required style={{ color: "var(--text-muted)" }} />
            </div>

            <button type="submit" style={{
              width: "100%", padding: "14px 24px",
              background: "var(--orange)", color: "#fff",
              border: "none", borderRadius: "var(--radius)",
              fontSize: "14px", fontWeight: 700,
              cursor: "pointer", letterSpacing: "0.08em",
              boxShadow: "0 4px 20px var(--orange-glow)",
              fontFamily: "var(--font-sans)",
              transition: "all 0.2s ease",
            }} onMouseEnter={e => e.currentTarget.style.opacity = "0.9"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
              Send Application →
            </button>
          </form>
        </div>
      </Section>

      <Footer />
    </>
  );
}

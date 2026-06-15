import { Footer } from "../components/Footer";
import { Section, SectionHeader } from "../components/Section";
import { Accordion } from "../components/Accordion";
import { Button } from "../components/Button";
import { SEOHead, BreadcrumbSchema } from "../seo/SEOHead";
import { FAQSchema } from "../seo/FAQSchema";
import { faqCategories, allFaqItems } from "../data/faq";
import { useEffect, useState } from "react";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].category);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeItems = faqCategories.find(c => c.category === activeCategory)?.items || [];

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions"
        description="Find answers to common questions about AHOS services — web development, custom software, Web3, pricing, process, and how to get started."
        path="/faq"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "FAQ", url: "/faq" }]} />
      <FAQSchema items={allFaqItems} />

      <style>{`
        .faq-tabs {
          display: flex; flex-wrap: wrap;
          justify-content: center; gap: 8px;
          margin-bottom: 48px;
        }
        .faq-tab {
          padding: 10px 20px; border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--bg-card);
          color: var(--text-muted);
          font-size: 13px; font-weight: 600;
          cursor: pointer; transition: all 0.2s ease;
          font-family: var(--font-sans);
        }
        .faq-tab:hover {
          border-color: var(--border-hover);
          color: var(--text);
        }
        .faq-tab.active {
          background: var(--orange);
          color: #fff;
          border-color: var(--orange);
          box-shadow: 0 4px 16px var(--orange-glow);
        }
        .faq-cta {
          text-align: center;
          margin-top: 48px;
          padding: 40px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          background: var(--bg-card);
        }
        .faq-cta h3 {
          font-family: var(--font-display);
          font-size: 22px;
          margin-bottom: 8px;
        }
        .faq-cta p {
          color: var(--text-muted);
          margin-bottom: 20px;
        }
      `}</style>

      <Section style={{ paddingTop: 80 }}>
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked"
          highlight="questions."
          subtitle="Everything you need to know about working with AHOS — from process and pricing to timelines and technology."
        />

        <div className="faq-tabs">
          {faqCategories.map((cat) => (
            <button
              key={cat.category}
              className={`faq-tab ${activeCategory === cat.category ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.category)}
            >
              {cat.category}
            </button>
          ))}
        </div>

        <Accordion items={activeItems} />

        <div className="faq-cta">
          <h3>Still have questions?</h3>
          <p>We're here to help. Reach out and we'll respond within 24 hours.</p>
          <Button href="/contact">Contact Us →</Button>
        </div>
      </Section>

      <Footer />
    </>
  );
}

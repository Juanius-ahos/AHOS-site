import { Footer } from "../components/Footer";
import { Section, SectionHeader } from "../components/Section";
import { Button } from "../components/Button";
import { SEOHead, BreadcrumbSchema } from "../seo/SEOHead";
import { useEffect, useState } from "react";

const web3Services = [
  {
    number: "01",
    name: "Smart Contract Development",
    tag: "Secure, audited contracts built for the long run.",
    desc: "We design and deploy smart contracts for tokens, NFTs, DAOs, and decentralized applications. Every contract is rigorously tested and audited before deployment — so your community can trust the code powering their assets.",
    chips: ["ERC-20 Tokens", "ERC-721 / ERC-1155 NFTs", "DAO Governance", "DeFi Protocols", "Multi-sig Wallets"],
    gets: ["Full source code ownership & audit documentation", "Gas-optimised, battle-tested contract architecture", "Ongoing upgrade & maintenance support"],
    popular: false,
  },
  {
    number: "02",
    name: "Web3 Frontend & Dapps",
    tag: "Wallets, chains, and beautiful interfaces — seamlessly connected.",
    desc: "We build responsive, high-performance frontends that connect directly with wallets (MetaMask, WalletConnect, Coinbase), blockchain APIs, and NFT marketplaces. Your users get a smooth Web2-quality experience on Web3 infrastructure.",
    chips: ["Wallet Integration", "Dapp Interfaces", "Marketplace UIs", "Chain APIs", "Mobile Responsive"],
    gets: ["Full wallet & chain integration out of the box", "Pixel-perfect, responsive across every device", "Real-time on-chain data — no page refreshes needed"],
    popular: false,
  },
  {
    number: "03",
    name: "NFT & Token Launch Support",
    tag: "From zero to launch — mint, stake, and sell with confidence.",
    desc: "We handle the full NFT and token launch lifecycle: minting platforms, staking dashboards, allowlist mechanics, reveal systems, and marketplace integrations. Whether it's your genesis collection or a token-gated community, we've done it before.",
    chips: ["Minting Platforms", "Staking Interfaces", "Allowlist & WL Systems", "Reveal Mechanics", "Marketplace Listings"],
    gets: ["End-to-end launch support from contract to frontend", "Gas-optimised minting with proven reveal mechanics", "Post-launch staking & holder dashboard included"],
    popular: true,
  },
  {
    number: "04",
    name: "Creative Media & Animations",
    tag: "Visuals that make your project impossible to scroll past.",
    desc: "Web3 projects live and die by their visual identity. We create motion graphics, animated trailers, NFT artwork concepts, brand guidelines, and social content packs that give your project a world-class presence across every platform.",
    chips: ["Project Trailers", "2D / 3D Animation", "Brand Identity", "NFT Art Direction", "Social Packs"],
    gets: ["Professional visuals that stand out in any ecosystem", "Consistent branding from Discord to OpenSea", "All source files delivered — you own everything"],
    popular: false,
  },
  {
    number: "05",
    name: "Strategy & Advisory",
    tag: "Tokenomics, roadmap, and full Web3 project planning.",
    desc: "Before a single line of code, we help you get the foundations right. Tokenomics design, whitepaper structuring, go-to-market strategy, community growth planning, and technical roadmap — so your project launches with clarity and momentum.",
    chips: ["Tokenomics Design", "Whitepaper Support", "Go-to-Market Strategy", "Community Planning", "Technical Roadmap"],
    gets: ["Clear, investor-ready project architecture", "Tokenomics model built for long-term sustainability", "Full launch roadmap with defined milestones"],
    popular: false,
  },
];

export default function Web3() {
  const [active, setActive] = useState(2);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEOHead
        title="Web3 & Blockchain Development Services"
        description="AHOS builds smart contracts, dapps, NFT launch platforms, and DeFi interfaces. Secure, audited, and built with user experience at the core."
        path="/web3"
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Web3", url: "/web3" }]} />

      <style>{`
        .w3-header { padding: 100px 0 60px; text-align: center; }
        .w3-header h1 {
          font-family: var(--font-display);
          font-size: clamp(42px, 6vw, 72px);
          font-weight: 700; line-height: 1.05;
          letter-spacing: -0.04em; margin-bottom: 16px;
        }
        .w3-header h1 span { color: var(--orange); }
        .w3-header p { color: var(--text-muted); max-width: 600px; margin: 0 auto; font-size: 16px; line-height: 1.7; }

        .w3-tabs { display: flex; gap: 10px; margin-bottom: 32px; flex-wrap: wrap; }
        .w3-tab {
          flex: 1; min-width: 180px;
          padding: 18px 20px; border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          background: var(--bg-card);
          cursor: pointer; transition: all 0.3s ease;
          text-align: left; font-family: var(--font-sans);
        }
        .w3-tab:hover { border-color: var(--border-hover); }
        .w3-tab.active {
          border-color: var(--orange);
          background: var(--orange-soft);
          box-shadow: 0 0 20px rgba(255,117,31,0.1);
        }
        .w3-tab-num { font-size: 10px; color: var(--orange); font-weight: 700; letter-spacing: 0.15em; margin-bottom: 6px; }
        .w3-tab-name { font-size: 15px; font-weight: 700; margin-bottom: 4px; }
        .w3-tab-tag { font-size: 12px; color: var(--text-muted); }
        .w3-tab-popular {
          display: inline-block; margin-top: 6px;
          padding: 2px 8px; border-radius: 4px;
          background: var(--orange); color: #fff;
          font-size: 9px; font-weight: 700; text-transform: uppercase;
        }

        .w3-panel {
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          background: var(--bg-card);
          padding: 40px;
          margin-bottom: 60px;
        }
        .w3-panel-name { font-family: var(--font-display); font-size: clamp(26px, 3vw, 34px); font-weight: 700; margin-bottom: 8px; }
        .w3-panel-tag { color: var(--orange); font-weight: 600; margin-bottom: 16px; }
        .w3-panel-desc { color: var(--text-muted); line-height: 1.7; margin-bottom: 24px; }
        .w3-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
        .w3-chip {
          padding: 6px 12px; border-radius: 6px;
          background: var(--orange-soft); border: 1px solid rgba(255,117,31,0.2);
          color: var(--orange); font-size: 11px; font-weight: 600;
        }
        .w3-sep { height: 1px; background: var(--border); margin-bottom: 20px; }
        .w3-gets-label { font-size: 10px; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.2em; font-weight: 700; margin-bottom: 12px; }
        .w3-gets { display: grid; gap: 8px; margin-bottom: 28px; }
        .w3-get { display: flex; align-items: center; gap: 10px; color: var(--text-muted); font-size: 14px; }
        .w3-get::before { content: "✓"; color: var(--orange); font-weight: 700; }

        @media (max-width: 768px) {
          .w3-tabs { flex-direction: column; }
        }
      `}</style>

      <div className="w3-header">
        <div className="container">
          <h1>Your Blockchain Vision. <span>Our Expertise.</span></h1>
          <p>From smart contracts to creative media — AHOS brings every layer of your Web3 project to life, under one roof.</p>
        </div>
      </div>

      <Section>
        <div className="w3-tabs">
          {web3Services.map((s, i) => (
            <div
              key={s.number}
              className={`w3-tab ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <div className="w3-tab-num">{s.number}</div>
              <div className="w3-tab-name">{s.name}</div>
              <div className="w3-tab-tag">{s.tag}</div>
              {s.popular && <div className="w3-tab-popular">Popular</div>}
            </div>
          ))}
        </div>

        {web3Services.map((s, i) => active === i && (
          <div className="w3-panel" key={s.number}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div className="w3-panel-name">{s.name}</div>
              {s.popular && <span style={{ padding: "4px 12px", borderRadius: 999, background: "var(--orange)", color: "#fff", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>Most Popular</span>}
            </div>
            <div className="w3-panel-tag">{s.tag}</div>
            <div className="w3-panel-desc">{s.desc}</div>
            <div className="w3-chips">
              {s.chips.map(c => <span key={c} className="w3-chip">{c}</span>)}
            </div>
            <div className="w3-sep" />
            <div className="w3-gets-label">You get</div>
            <div className="w3-gets">
              {s.gets.map(g => <div key={g} className="w3-get">{g}</div>)}
            </div>
            <Button href="/contact">Start a Project →</Button>
          </div>
        ))}
      </Section>

      <Section dark style={{ textAlign: "center" }}>
        <SectionHeader
          eyebrow="Get Started"
          title="Ready to launch your"
          highlight="Web3 project?"
          subtitle="Book a free 30-minute call. We'll map out your full build plan — no pressure, no commitment."
        />
        <div style={{ textAlign: "center" }}>
          <Button href="/contact">Book a Free Consultation →</Button>
        </div>
      </Section>

      <Footer />
    </>
  );
}

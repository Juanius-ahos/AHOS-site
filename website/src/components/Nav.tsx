import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/web3", label: "Blockchain Solutions" },
  { href: "/careers", label: "Careers" },
  { href: "/aria-ai", label: "ARIA AI" },
];

export function Nav() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <style>{`
        .ahos-nav-fixed {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
          padding: 0 40px;
          transition: all 0.3s ease;
          font-family: 'Space Grotesk', sans-serif;
          background: rgba(7,7,15,0.2);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-bottom: 1px solid transparent;
        }
        .ahos-nav-fixed.scrolled {
          background: rgba(7,7,15,0.75);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255,117,31,0.2);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }

        .ahos-nav-logo {
          display: flex;
          align-items: center;
        }

        .ahos-nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .ahos-nav-links a {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: all 0.2s ease;
          position: relative;
        }

        .ahos-nav-links a:hover {
          color: rgba(255,255,255,1);
        }

        .ahos-nav-links a.active {
          color: #ff751f;
        }
        
        .ahos-nav-links a.active::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #ff751f;
          box-shadow: 0 0 8px #ff751f;
        }

        .ahos-btn-start {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 20px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fff !important;
          background: linear-gradient(135deg, #ff751f 0%, #ff5c00 100%);
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(255,117,31,0.25);
          position: relative;
          overflow: hidden;
          margin-left: 16px;
        }
        .ahos-btn-start::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: skewX(-20deg);
          transition: all 0.5s ease;
        }
        .ahos-btn-start:hover {
          box-shadow: 0 6px 20px rgba(255,117,31,0.4);
          transform: translateY(-1px);
        }
        .ahos-btn-start:hover::after {
          left: 150%;
        }

        .ahos-nav-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: rgba(255,255,255,0.9);
          padding: 8px;
        }

        .ahos-mobile-menu {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 999;
          background: rgba(7,7,15,0.95);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 32px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .ahos-mobile-menu.open {
          opacity: 1;
          pointer-events: auto;
        }

        .ahos-mobile-menu a {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 24px;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .ahos-mobile-menu a:hover,
        .ahos-mobile-menu a.active {
          color: #ff751f;
        }

        @media (max-width: 900px) {
          .ahos-nav-links { display: none; }
          .ahos-nav-hamburger { display: flex; }
          .ahos-nav-fixed { padding: 0 24px; }
        }
      `}</style>

      <nav className={`ahos-nav-fixed${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="ahos-nav-logo">
          <img src="/logo.png" alt="AHOS" style={{ height: "32px", display: "block" }} />
        </Link>

        <div className="ahos-nav-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={location === l.href ? "active" : ""}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="ahos-btn-start">
            START
          </Link>
        </div>

        <button
          className="ahos-nav-hamburger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </nav>

      <div className={`ahos-mobile-menu${mobileOpen ? " open" : ""}`}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={location === l.href ? "active" : ""}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="ahos-btn-start" style={{ marginLeft: 0, marginTop: "16px", fontSize: "16px", padding: "12px 32px" }}>
          START A PROJECT
        </Link>
      </div>
    </>
  );
}

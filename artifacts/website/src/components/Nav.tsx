import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/web3", label: "Blockchain" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQ" },
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
        .ahos-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 18px 42px;

          transition: all 0.35s ease;

          background: rgba(7, 7, 15, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);

          border-bottom: 1px solid rgba(255,255,255,0.03);
        }

        .ahos-nav.scrolled {
          background: rgba(7, 7, 15, 0.82);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);

          border-bottom: 1px solid rgba(255,117,31,0.15);

          box-shadow:
            0 10px 40px rgba(0,0,0,0.45),
            0 0 40px rgba(255,117,31,0.06);
        }

        .ahos-logo {
          display: flex;
          align-items: center;
          gap: 12px;

          text-decoration: none;
        }

        .ahos-logo img {
          height: 34px;
          width: auto;
          display: block;

          filter: drop-shadow(0 0 10px rgba(255,117,31,0.2));

          transition: all 0.3s ease;
        }

        .ahos-logo:hover img {
          transform: scale(1.03);
          filter: drop-shadow(0 0 16px rgba(255,117,31,0.4));
        }

        .ahos-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .ahos-links a {
          position: relative;

          color: rgba(255,255,255,0.72);

          text-decoration: none;

          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.05em;

          transition: all 0.25s ease;
        }

        .ahos-links a:hover {
          color: white;
        }

        .ahos-links a.active {
          color: #ff751f;
        }

        .ahos-links a.active::after {
          content: "";

          position: absolute;
          bottom: -8px;
          left: 50%;

          transform: translateX(-50%);

          width: 5px;
          height: 5px;

          border-radius: 999px;

          background: #ff751f;

          box-shadow:
            0 0 10px #ff751f,
            0 0 20px rgba(255,117,31,0.7);
        }

        .ahos-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          padding: 10px 22px;

          border-radius: 12px;

          background:
            linear-gradient(
              135deg,
              #ff751f 0%,
              #ff5c00 100%
            );

          color: white !important;

          text-decoration: none;

          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;

          box-shadow:
            0 6px 20px rgba(255,117,31,0.28);

          transition: all 0.25s ease;

          position: relative;
          overflow: hidden;
        }

        .ahos-btn::before {
          content: "";

          position: absolute;
          top: 0;
          left: -120%;

          width: 60%;
          height: 100%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.25),
              transparent
            );

          transform: skewX(-25deg);

          transition: all 0.6s ease;
        }

        .ahos-btn:hover {
          transform: translateY(-2px);

          box-shadow:
            0 10px 28px rgba(255,117,31,0.42);
        }

        .ahos-btn:hover::before {
          left: 170%;
        }

        .ahos-mobile-btn {
          display: none;

          background: none;
          border: none;

          color: white;

          cursor: pointer;
        }

        .ahos-mobile-menu {
          position: fixed;
          inset: 0;

          background: rgba(5,5,10,0.97);

          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);

          z-index: 999;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          gap: 32px;

          opacity: 0;
          pointer-events: none;

          transition: all 0.3s ease;
        }

        .ahos-mobile-menu.open {
          opacity: 1;
          pointer-events: auto;
        }

        .ahos-mobile-menu a {
          color: rgba(255,255,255,0.75);

          text-decoration: none;

          font-size: 28px;
          font-weight: 600;

          transition: all 0.25s ease;
        }

        .ahos-mobile-menu a:hover,
        .ahos-mobile-menu a.active {
          color: #ff751f;
        }

        @media (max-width: 900px) {
          .ahos-links {
            display: none;
          }

          .ahos-mobile-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .ahos-nav {
            padding: 18px 22px;
          }

          .ahos-logo img {
            height: 30px;
          }
        }
      `}</style>

      <nav className={`ahos-nav ${scrolled ? "scrolled" : ""}`}>
        <Link href="/" className="ahos-logo">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="AHOS"
          />
        </Link>

        <div className="ahos-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={location === l.href ? "active" : ""}
            >
              {l.label}
            </Link>
          ))}

          <Link href="/contact" className="ahos-btn">
            START PROJECT
          </Link>
        </div>

        <button
          className="ahos-mobile-btn"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      <div className={`ahos-mobile-menu ${mobileOpen ? "open" : ""}`}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={location === l.href ? "active" : ""}
          >
            {l.label}
          </Link>
        ))}

        <Link href="/contact" className="ahos-btn">
          START PROJECT
        </Link>
      </div>
    </>
  );
}

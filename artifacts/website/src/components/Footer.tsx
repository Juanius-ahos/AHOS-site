import { Link } from "wouter";

export function Footer() {
  return (
    <>
      <style>{`
        .ahos-footer-section {
          padding: 80px 40px 40px;
          background: transparent;
          font-family: 'Inter', sans-serif;
          position: relative;
        }

        .ahos-footer-container {
          max-width: 1200px;
          margin: 0 auto;
          background: rgba(7,7,15,0.65);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255,117,31,0.12);
          border-radius: 24px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06);
          padding: 64px;
          display: flex;
          flex-direction: column;
          gap: 64px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .ahos-footer-container:hover {
          border-color: rgba(255,117,31,0.35);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 40px rgba(255,117,31,0.1), inset 0 1px 0 rgba(255,255,255,0.06);
        }

        .ahos-footer-container::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 1px;
          background: radial-gradient(circle, rgba(255,117,31,0.4) 0%, transparent 100%);
        }

        .ahos-footer-top {
          display: flex;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
        }

        .ahos-footer-brand {
          max-width: 320px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .ahos-footer-tagline {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #ff751f;
          text-transform: uppercase;
        }

        .ahos-footer-pitch {
          font-size: 15px;
          line-height: 1.6;
          color: rgba(255,255,255,0.6);
        }

        .ahos-footer-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.9);
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 500;
          font-size: 16px;
          transition: color 0.2s ease;
          text-decoration: none;
        }
        .ahos-footer-cta:hover {
          color: #ff751f;
        }
        .ahos-footer-cta svg {
          transition: transform 0.2s ease;
        }
        .ahos-footer-cta:hover svg {
          transform: translateX(4px);
        }

        .ahos-footer-links {
          display: flex;
          gap: 80px;
          flex-wrap: wrap;
        }

        .ahos-footer-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .ahos-footer-col-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: rgba(255,255,255,0.9);
        }

        .ahos-footer-col a {
          color: rgba(255,255,255,0.5);
          font-size: 15px;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-block;
        }
        .ahos-footer-col a:hover {
          color: #ff751f;
          transform: translateX(2px);
        }

        .ahos-footer-socials {
          display: flex;
          gap: 16px;
          margin-top: 8px;
        }

        .ahos-footer-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px; height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.7);
          transition: all 0.2s ease;
        }
        .ahos-footer-social-link:hover {
          background: rgba(255,117,31,0.1);
          border-color: rgba(255,117,31,0.3);
          color: #ff751f;
          transform: translateY(-2px);
        }

        .ahos-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.05);
          font-size: 14px;
          color: rgba(255,255,255,0.4);
          flex-wrap: wrap;
          gap: 16px;
        }

        @media (max-width: 768px) {
          .ahos-footer-section { padding: 40px 20px 20px; }
          .ahos-footer-container { padding: 40px 24px; gap: 48px; border-radius: 20px; }
          .ahos-footer-links { gap: 40px; flex-direction: column; }
          .ahos-footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>

      <footer className="ahos-footer-section">
        <div className="ahos-footer-container">
          <div className="ahos-footer-top">
            <div className="ahos-footer-brand">
              <Link href="/">
                <img src="/logo.png" alt="AHOS" style={{ height: "28px", width: "auto", objectFit: "contain", display: "block" }} />
              </Link>
              <div className="ahos-footer-tagline">Advanced Hybrid Online Systems</div>
              <div className="ahos-footer-pitch">
                A digital solutions studio crafting software, websites, and media — all under one roof, built to work together.
              </div>
              <Link href="/contact" className="ahos-footer-cta">
                Start a Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33331 8H12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div className="ahos-footer-links">
              <div className="ahos-footer-col">
                <div className="ahos-footer-col-title">Pages</div>
                <Link href="/">Home</Link>
                <Link href="/services">Services</Link>
                <Link href="/web3">Web3</Link>
                <Link href="/careers">Careers</Link>
                <Link href="/contact">Contact</Link>
              </div>
              
              <div className="ahos-footer-col">
                <div className="ahos-footer-col-title">Services</div>
                <Link href="/services">Custom Software</Link>
                <Link href="/services">Web Development</Link>
                <Link href="/services">Media & Branding</Link>
                <Link href="/web3">Web3 Solutions</Link>
              </div>

              <div className="ahos-footer-col">
                <div className="ahos-footer-col-title">Connect</div>
                <Link href="/contact">Start a Project</Link>
                <Link href="/careers">Join the Studio</Link>
                <div className="ahos-footer-socials">
                  <a href="https://www.instagram.com/ahos.xyz/" target="_blank" rel="noopener noreferrer" className="ahos-footer-social-link" aria-label="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/ahos-xyz" target="_blank" rel="noopener noreferrer" className="ahos-footer-social-link" aria-label="LinkedIn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@ahos_xyz" target="_blank" rel="noopener noreferrer" className="ahos-footer-social-link" aria-label="YouTube">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="ahos-footer-bottom">
            <div>© 2025 AHOS · ahos.xyz</div>
            <div>Made by the AHOS studio</div>
          </div>
        </div>
      </footer>
    </>
  );
}

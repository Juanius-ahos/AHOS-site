import { Switch, Route, Router as WouterRouter } from "wouter";
import { Nav } from "@/components/Nav";
import { GlobalBackground } from "@/components/GlobalBackground";
import { OrganizationSchema } from "@/seo/SEOHead";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Web3 from "@/pages/Web3";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import AriaAI from "@/pages/AriaAI";
import FAQ from "@/pages/FAQ";

function NotFound() {
  return (
    <div style={{ color: "rgba(255,255,255,0.6)", textAlign: "center", padding: "120px 24px", fontFamily: "var(--font-sans)" }}>
      <h1 style={{ fontSize: 48, color: "var(--orange)", marginBottom: 12 }}>404</h1>
      <p style={{ marginBottom: 24 }}>Page not found</p>
      <a href="/" style={{ color: "var(--orange)", fontWeight: 600 }}>Go home →</a>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/web3" component={Web3} />
      <Route path="/careers" component={Careers} />
      <Route path="/contact" component={Contact} />
      <Route path="/aria-ai" component={AriaAI} />
      <Route path="/faq" component={FAQ} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <OrganizationSchema />
      <GlobalBackground />
      <Nav />
      <main style={{ paddingTop: 64 }}>
        <Router />
      </main>
    </WouterRouter>
  );
}

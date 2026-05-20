import { Switch, Route, Router as WouterRouter } from "wouter";
import { Nav } from "@/components/Nav";
import { GlobalBackground } from "@/components/GlobalBackground";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Web3 from "@/pages/Web3";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import AriaAI from "@/pages/AriaAI";

function NotFound() {
  return (
    <div style={{ color: "rgba(255,255,255,0.6)", textAlign: "center", padding: "120px 24px", fontFamily: "Actor, sans-serif" }}>
      <h1 style={{ fontSize: 48, color: "#ff751f" }}>404</h1>
      <p>Page not found</p>
      <a href="/" style={{ color: "#ff751f" }}>Go home →</a>
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
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <GlobalBackground />
      <Nav />
      <main style={{ paddingTop: 64 }}>
        <Router />
      </main>
    </WouterRouter>
  );
}

import { Link } from "wouter";

export function HeroPhone() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07070f] px-6 pt-32 pb-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,117,31,0.22),transparent_35%),radial-gradient(circle_at_20%_70%,rgba(255,117,31,0.12),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-[#ff751f]/30 bg-[#ff751f]/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#ff751f]">
            Available for new projects
          </div>

          <h1 className="max-w-3xl text-5xl leading-tight tracking-[-0.05em] md:text-7xl">
            Premium Websites, AI Systems & Digital Products.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/55">
            AHOS builds high-end digital experiences for brands that want to look sharper,
            move faster, and convert better.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-[#ff751f] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-[0_0_35px_rgba(255,117,31,0.35)] transition hover:-translate-y-1 hover:bg-[#ff8a35]"
            >
              Start a Project
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm uppercase tracking-wider text-white/75 backdrop-blur transition hover:-translate-y-1 hover:border-[#ff751f]/50 hover:text-white"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-white/40">
            <span className="rounded-full border border-[#ff751f]/20 bg-[#ff751f]/5 px-4 py-2">Websites</span>
            <span className="rounded-full border border-[#ff751f]/20 bg-[#ff751f]/5 px-4 py-2">AI Tools</span>
            <span className="rounded-full border border-[#ff751f]/20 bg-[#ff751f]/5 px-4 py-2">Branding</span>
            <span className="rounded-full border border-[#ff751f]/20 bg-[#ff751f]/5 px-4 py-2">Automation</span>
          </div>
        </div>

        <div className="relative mx-auto w-[290px] md:w-[340px]">
          <div className="absolute -inset-10 rounded-full bg-[#ff751f]/25 blur-3xl" />

          <div className="relative rotate-3 rounded-[3rem] border border-white/15 bg-black p-3 shadow-[0_40px_120px_rgba(0,0,0,0.75)]">
            <div className="rounded-[2.5rem] border border-white/10 bg-[#0b0b14] p-5">
              <div className="mx-auto mb-5 h-6 w-24 rounded-full bg-black" />

              <div className="rounded-3xl border border-[#ff751f]/20 bg-white/[0.03] p-5">
                <div className="mb-5 text-xs uppercase tracking-[0.25em] text-[#ff751f]">
                  AHOS Studio
                </div>

                <div className="space-y-3">
                  {["Web Development", "AI Automation", "Brand Systems", "Web3 Solutions"].map((item, i) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-lg"
                      style={{ transform: `translateX(${i % 2 === 0 ? "-8px" : "8px"})` }}
                    >
                      <div className="text-sm text-white">{item}</div>
                      <div className="mt-2 h-1.5 rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-[#ff751f]" style={{ width: `${70 + i * 7}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-[#ff751f] p-4 text-center text-sm font-semibold text-white">
                  Launch Ready
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-16 top-24 rounded-2xl border border-[#ff751f]/25 bg-black/50 px-4 py-3 text-sm text-white/80 backdrop-blur">
            ⚡ Fast Launch
          </div>

          <div className="absolute -right-20 bottom-24 rounded-2xl border border-[#ff751f]/25 bg-black/50 px-4 py-3 text-sm text-white/80 backdrop-blur">
            24/7 Support
          </div>
        </div>
      </div>
    </section>
  );
}

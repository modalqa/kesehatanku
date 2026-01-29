import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071021] via-[#040814] to-[#05081a] text-zinc-200">
      <header className="border-b border-white/6">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-lg font-bold text-zinc-50">Kesehatanku</div>
          <nav className="flex items-center gap-4">
            <a href="/login" className="text-sm text-zinc-300 hover:text-zinc-100">Sign in</a>
            <a href="/register" className="rounded-md bg-sky-400 px-4 py-2 text-sm font-semibold text-black">Get started</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-20">
        <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-zinc-50">Track mood, reduce stress, and gain weekly insights</h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-400">Kesehatanku helps teams and individuals capture quick daily check-ins, see trends over time, and get actionable AI-powered suggestions to improve wellbeing at work.</p>

            <div className="mt-8 flex gap-4">
              <a href="/register" className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-black">Get started - it's free</a>
              <a href="/upgrade" className="rounded-md border border-white/10 px-5 py-3 text-sm text-zinc-300">See Pro</a>
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-black/40 to-black/20 p-8">
            <div className="w-full rounded-md border border-white/6 p-6">
              <h4 className="text-sm text-zinc-300">This week</h4>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-sky-300">3.2</div>
                  <div className="text-xs text-zinc-400">Avg mood</div>
                </div>
                <div className="text-sm text-zinc-400">Stress peak: <span className="font-semibold text-sky-300">Wed</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-zinc-50">Features</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-white/6 bg-black/40 p-6">
              <h3 className="font-semibold text-zinc-100">Fast check-ins</h3>
              <p className="mt-2 text-sm text-zinc-400">Capture mood and energy in seconds with one-tap flows.</p>
            </div>
            <div className="rounded-lg border border-white/6 bg-black/40 p-6">
              <h3 className="font-semibold text-zinc-100">Weekly reports</h3>
              <p className="mt-2 text-sm text-zinc-400">AI summaries highlight stress patterns and triggers.</p>
            </div>
            <div className="rounded-lg border border-white/6 bg-black/40 p-6">
              <h3 className="font-semibold text-zinc-100">Privacy controls</h3>
              <p className="mt-2 text-sm text-zinc-400">Exportable history and strict privacy-first defaults.</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-zinc-50">Pricing</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-white/6 bg-black/40 p-6 text-center">
              <div className="text-2xl font-bold text-zinc-50">Free</div>
              <div className="mt-2 text-sm text-zinc-400">Basic check-ins & 1 weeks history</div>
              <div className="mt-4">
                <a href="/register" className="rounded-md border border-white/10 px-4 py-2 text-sm text-zinc-300">Start free</a>
              </div>
            </div>
            <div className="rounded-lg border border-white/6 bg-black/40 p-6 text-center">
              <div className="text-3xl font-bold text-sky-300">$5</div>
              <div className="mt-2 text-sm text-zinc-400">/ month - Weekly AI insights, full history</div>
              <div className="mt-4">
                <a href="/upgrade" className="rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-black">Upgrade</a>
              </div>
            </div>
            <div className="rounded-lg border border-white/6 bg-black/40 p-6 text-center">
              <div className="text-2xl font-bold text-zinc-50">Team</div>
              <div className="mt-2 text-sm text-zinc-400">Contact us for team plans</div>
              <div className="mt-4">
                <a href="/contact" className="rounded-md border border-white/10 px-4 py-2 text-sm text-zinc-300">Contact sales</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-24 border-t border-white/6 pt-8 text-sm text-zinc-500">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div>© {new Date().getFullYear()} Kesehatanku</div>
              <div className="flex gap-4">
                <a href="/privacy" className="text-zinc-400">Privacy</a>
                <a href="/terms" className="text-zinc-400">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

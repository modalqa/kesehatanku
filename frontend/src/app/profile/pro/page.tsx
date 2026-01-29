"use client";
import React from "react";

export default function ProfileProPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040814] via-[#05081a] to-[#071021] text-zinc-200">
      <main className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-28">
        <section className="w-full flex justify-center">
          <div className="w-[360px] rounded-2xl border border-white/6 bg-black/40 p-6 backdrop-blur-md">
            <h2 className="mb-4 text-center text-lg font-semibold">Profile - Pro</h2>

            <div className="space-y-4">
              <div className="rounded-lg border border-white/5 bg-black/50 p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-zinc-300">Thank you for upgrading - enjoy unlimited access to AI insights and priority support.</div>
                </div>
                <div className="rounded-full bg-sky-500/20 px-3 py-1 text-xs text-sky-300">Pro</div>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="text-xs text-zinc-400">Subscription</div>
                <div className="mt-2 text-sm text-zinc-300">Pro Monthly • Renews: 2026-02-28</div>
                <div className="mt-3 flex gap-2">
                  <a href="/profile/pro/billing" className="w-full inline-block text-center rounded-full bg-sky-400 px-3 py-2 text-black text-sm font-semibold">Manage billing</a>
                </div>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="text-xs text-zinc-400">Pro Features</div>
                <ul className="mt-2 text-sm text-zinc-300">
                  <li>Unlimited weekly AI insights</li>
                  <li>Priority model selection & faster responses</li>
                  <li>Exportable history & CSV export</li>
                </ul>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="text-xs text-zinc-400">Support</div>
                <div className="mt-2 text-sm text-zinc-300">Priority email support — <a href="mailto:support@example.com" className="text-sky-300">support@example.com</a></div>
              </div>

              <div>
                <button className="w-full rounded-xl border border-white/8 px-4 py-3 text-sm text-zinc-300">Log out</button>
              </div>
            </div>
          </div>
        </section>

        <footer className="fixed bottom-6 left-0 right-0 mx-auto w-full max-w-4xl px-6">
          <nav className="mx-auto flex w-full items-center justify-between rounded-tl-md rounded-tr-md border-t border-white/6 bg-transparent/0 px-6 py-4">
            <a className="text-zinc-400" href="/weekly">Home</a>
            <a className="text-zinc-400" href="/check-in">Check-in</a>
            <a className="text-zinc-400" href="/report">Report</a>
            <a className="text-sky-300" href="/profile">Profile</a>
          </nav>
        </footer>
      </main>
    </div>
  );
}

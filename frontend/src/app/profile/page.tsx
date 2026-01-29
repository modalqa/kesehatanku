import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040814] via-[#05081a] to-[#071021] text-zinc-200">
      <main className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-28">
        <section className="w-full flex justify-center">
          <div className="w-[360px] rounded-2xl border border-white/6 bg-black/40 p-6 backdrop-blur-md">
            <h2 className="mb-4 text-center text-lg font-semibold">Profile</h2>

            <div className="space-y-4">
              <div className="rounded-lg border border-white/5 bg-black/50 p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-zinc-400">Account</div>
                  <div className="mt-2 text-sm text-zinc-300">user@email.com</div>
                </div>
                <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-sky-200">Free</div>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="text-xs text-zinc-400">Work Context</div>
                <div className="mt-2 text-sm text-zinc-300">QA Engineer · 09:00 – 18:00</div>
                <div className="mt-1 text-sm text-zinc-400">Current mode: Sprint week</div>
                <div className="mt-3">
                  <button className="w-full rounded-xl border border-white/8 px-4 py-2 text-sm text-zinc-300">Edit Work Context</button>
                </div>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="text-xs text-zinc-400">Preferences</div>
                <div className="mt-2 text-sm text-zinc-300">Daily reminder: 20:00</div>
                <div className="mt-3">
                  <button className="w-full rounded-xl border border-white/8 px-4 py-2 text-sm text-zinc-300">Edit Preferences</button>
                </div>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="text-xs text-zinc-400">Subscription</div>
                <div className="mt-2 text-sm text-zinc-300">Weekly AI Insights · History (3 weeks)</div>
                <div className="mt-3">
                  <a href="/upgrade" className="w-full inline-block text-center rounded-full bg-sky-400 px-4 py-3 text-sm font-semibold text-black">Upgrade to Pro</a>
                </div>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="text-xs text-zinc-400">About</div>
                <div className="mt-2 text-sm text-zinc-300">This product is designed for self-reflection only and does not provide medical or mental health advice.</div>
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

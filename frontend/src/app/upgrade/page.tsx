import React from "react";

export default function UpgradePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040814] via-[#05081a] to-[#071021] text-zinc-200">
      <main className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-28">
        <section className="w-full flex justify-center">
          <div className="w-[360px] rounded-2xl border border-white/6 bg-black/40 p-6 backdrop-blur-md">
            <h2 className="mb-4 text-center text-lg font-semibold">Upgrade to Pro</h2>

            <div className="space-y-4">
              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="text-3xl font-bold text-sky-300">$5</div>
                <div className="text-sm text-zinc-400">/month</div>
                <div className="mt-2 text-sm text-zinc-400">Simple pricing. Cancel anytime.</div>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>✓ Unlimited weekly AI insights</li>
                  <li>✓ Full stress & mood history</li>
                  <li>✓ Week-to-week comparison</li>
                  <li>✓ Export weekly report (PDF/Image)</li>
                  <li>✓ Priority insight generation</li>
                </ul>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                 <a href="/checkout" className="w-full inline-block text-center rounded-full bg-sky-400 px-4 py-3 text-sm font-semibold text-black">Upgrade & Unlock Pro</a>
                <button className="w-full mt-3 rounded-xl border border-white/8 px-4 py-3 text-sm text-zinc-300">Maybe later</button>
                <div className="mt-3 text-xs text-zinc-500">This product is for self-reflection and does not provide medical or mental health advice.</div>
              </div>
            </div>
          </div>
        </section>

        <footer className="fixed bottom-6 left-0 right-0 mx-auto w-full max-w-4xl px-6">
          <nav className="mx-auto flex w-full items-center justify-between rounded-tl-md rounded-tr-md border-t border-white/6 bg-transparent/0 px-6 py-4">
            <a className="text-zinc-400" href="/weekly">Home</a>
            <a className="text-zinc-400" href="/check-in">Check-in</a>
            <a className="text-zinc-400" href="/report">Report</a>
            <a className="text-zinc-400" href="/profile">Profile</a>
          </nav>
        </footer>
      </main>
    </div>
  );
}

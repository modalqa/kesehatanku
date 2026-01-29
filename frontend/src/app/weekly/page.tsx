import React from "react";

export default function WeeklyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040814] via-[#05081a] to-[#071021] text-zinc-200">
      <main className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-28">
        <section className="w-full flex justify-center">
          <div className="w-[360px] rounded-2xl border border-white/6 bg-black/40 p-6 backdrop-blur-md">
            <h2 className="mb-4 text-center text-lg font-semibold">Weekly Reflection</h2>

            <div className="space-y-4">
              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs text-zinc-400">Weekly Summary</div>
                    <div className="mt-2 text-sm text-zinc-300">Avg Mood</div>
                  </div>

                  <div className="text-right">
                    <div className="text-4xl font-bold text-sky-300">3.2</div>
                    <div className="mt-1 text-sm text-zinc-400">Stress Peak: <span className="font-semibold text-sky-300">Wed</span></div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="text-sm font-medium text-zinc-300">AI Insight</div>
                <p className="mt-2 text-sm text-zinc-400">
                  Stress peaks mostly on <strong>Wednesday afternoons</strong>, often after
                  long meetings.
                </p>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="mb-3 text-xs text-zinc-400">Daily Check-in</div>
                <div className="flex flex-col gap-3">
                  <button className="rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-black">Mood 🙂</button>
                  <button className="rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-black">Energy ⚡</button>
                  <button className="rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-black">Submit Check-in</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="fixed bottom-6 left-0 right-0 mx-auto w-full max-w-4xl px-6">
          <nav className="mx-auto flex w-full items-center justify-between rounded-tl-md rounded-tr-md border-t border-white/6 bg-transparent/0 px-6 py-4">
            <a className="text-sky-300" href="/weekly">Home</a>
            <a className="text-zinc-400" href="/check-in">Check-in</a>
            <a className="text-zinc-400" href="/report">Report</a>
            <a className="text-zinc-400" href="/profile">Profile</a>
          </nav>
        </footer>
      </main>
    </div>
  );
}

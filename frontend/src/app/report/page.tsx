import React from "react";

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040814] via-[#05081a] to-[#071021] text-zinc-200">
      <main className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-28">
        <section className="w-full flex justify-center">
          <div className="w-[360px] rounded-2xl border border-white/6 bg-black/40 p-6 backdrop-blur-md">
            <h2 className="mb-4 text-center text-lg font-semibold">Weekly Report</h2>

            <div className="space-y-4">
              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs text-zinc-400">Weekly Summary</div>
                    <div className="text-sm text-zinc-400">Avg Mood</div>
                  </div>
                  <div className="text-3xl font-bold text-sky-300">3.2</div>
                </div>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="text-xs text-zinc-400">Top Stress Triggers</div>
                <div className="mt-2 text-sm text-zinc-300">Meetings · Deadlines · Context Switching</div>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="text-xs text-zinc-400">AI Insight</div>
                <p className="mt-2 text-sm text-zinc-300">
                  Your stress most frequently increased during mid-week afternoons, especially after extended meetings.
                </p>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="text-xs text-zinc-400">Week-to-Week Trend</div>
                <div className="mt-2 text-sm text-sky-300">Stress level increased by 18% compared to last week.</div>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="text-xs text-zinc-400">Reflection Prompt</div>
                <div className="mt-2 text-sm text-zinc-300">What is one meeting or task you could shorten or skip next week?</div>
              </div>
            </div>
          </div>
        </section>

        <footer className="fixed bottom-6 left-0 right-0 mx-auto w-full max-w-4xl px-6">
          <nav className="mx-auto flex w-full items-center justify-between rounded-tl-md rounded-tr-md border-t border-white/6 bg-transparent/0 px-6 py-4">
            <a className="text-zinc-400" href="/weekly">Home</a>
            <a className="text-zinc-400" href="/check-in">Check-in</a>
            <a className="text-sky-300" href="/report">Report</a>
            <a className="text-zinc-400" href="/profile">Profile</a>
          </nav>
        </footer>
      </main>
    </div>
  );
}

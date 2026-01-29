"use client";
import React, { useState } from "react";

export default function ReportProPage() {
  const [loading, setLoading] = useState(false);
  const avgMood = 3.9;
  const stressPeak = "Tue";
  const aiInsight = "Your stress most frequently increased during mid-week afternoons, especially after extended meetings. Consider shorter focused blocks or protected focus time.";

  function generateDeepInsight() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Deep AI insight generated (simulated). Check your inbox for details.");
    }, 900);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040814] via-[#05081a] to-[#071021] text-zinc-200">
      <main className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-28">
        <section className="w-full flex justify-center">
          <div className="w-[360px] rounded-2xl border border-white/6 bg-black/40 p-6 backdrop-blur-md">
            <h2 className="mb-4 text-center text-lg font-semibold">Weekly Report - Pro</h2>

            <div className="space-y-4">
              <div className="rounded-lg border border-white/5 bg-black/50 p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-zinc-400">Weekly Summary</div>
                  <div className="mt-1 text-sm text-zinc-300">Avg Mood</div>
                </div>
                <div className="text-3xl font-semibold text-sky-300">{avgMood}</div>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="text-xs text-zinc-400">Top Stress Triggers</div>
                <div className="mt-2 text-sm text-zinc-300">Meetings · Deadlines · Context Switching</div>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="text-xs text-zinc-400">AI Insight</div>
                <div className="mt-2 text-sm text-zinc-300">{aiInsight}</div>
                <div className="mt-3 flex gap-2">
                  <button onClick={generateDeepInsight} className="flex-1 rounded-full bg-sky-400 px-3 py-2 text-sm font-semibold text-black">{loading ? 'Generating...' : 'Generate Deep Insight'}</button>
                </div>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="text-xs text-zinc-400">Trends</div>
                <div className="mt-2 text-sm text-zinc-300">Stress level increased by 18% compared to last week. Peak day: {stressPeak}.</div>
                <div className="mt-3 flex gap-2">
                  <a href="#" className="text-sky-300">Compare 4-week trend</a>
                </div>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-zinc-400">Export</div>
                  <div className="flex gap-2">
                    <a className="text-sky-300" href="#">Export CSV</a>
                    <a className="text-sky-300" href="#">Download PDF</a>
                  </div>
                </div>
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

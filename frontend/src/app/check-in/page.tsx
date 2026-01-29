"use client";
import React, { useState } from "react";

const moods = ["😫", "😕", "🙂", "😄", "😁"];
const triggers = ["Meetings", "Deadline", "Bug / Issue", "Context Switch"];

export default function CheckInPage() {
  const [mood, setMood] = useState<number | null>(3);
  const [energy, setEnergy] = useState<string | null>("Medium");
  const [selectedTriggers, setSelectedTriggers] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function toggleTrigger(t: string) {
    setSelectedTriggers((s) =>
      s.includes(t) ? s.filter((x) => x !== t) : [...s, t]
    );
  }

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    const payload = { mood, energy, triggers: selectedTriggers, note };
    console.log("Check-in submit:", payload);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 1500);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040814] via-[#05081a] to-[#071021] text-zinc-200">
      <main className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-20">
        <section className="w-full flex justify-center">
          <div className="w-[360px] rounded-2xl border border-white/6 bg-black/40 p-6 backdrop-blur-md">
            <div className="mb-6">
              <h1 className="text-lg font-semibold">Daily Check-in</h1>
              <div className="mt-3 h-px w-full bg-white/6" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="mb-2 text-sm text-zinc-400">How was your mood today?</div>
            <div className="flex gap-3">
              {moods.map((m, i) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMood(i)}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 text-lg transition-colors ${
                    mood === i ? "bg-sky-400 text-black" : "bg-transparent"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 text-sm text-zinc-400">Energy level</div>
            <div className="flex gap-3">
              {[
                ["Low", "Low"],
                ["Medium", "Medium"],
                ["High", "High"],
              ].map(([k]) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setEnergy(k as string)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold border border-white/8 transition-colors ${
                    energy === k ? "bg-sky-400 text-black" : "bg-transparent text-zinc-300"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 text-sm text-zinc-400">Main stress trigger (optional)</div>
            <div className="grid grid-cols-2 gap-3">
              {triggers.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => toggleTrigger(t)}
                  className={`rounded-xl border border-white/8 px-4 py-3 text-sm text-left transition-colors ${
                    selectedTriggers.includes(t) ? "bg-white/5 text-zinc-100" : "text-zinc-300"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 text-sm text-zinc-400">Short note (optional)</div>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="One short sentence is enough"
              className="w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200 placeholder:text-zinc-500"
              rows={4}
            />
          </div>

              <div className="flex items-center gap-6">
                <button
                  type="submit"
                  className="rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-black"
                >
                  {submitted ? "Submitted" : "Submit Check-in"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMood(null);
                    setEnergy(null);
                    setSelectedTriggers([]);
                    setNote("");
                  }}
                  className="text-sm text-zinc-400"
                >
                  Skip for today
                </button>
              </div>
            </form>
          </div>
        </section>

        <footer className="fixed bottom-6 left-0 right-0 mx-auto w-full max-w-4xl px-6">
          <nav className="mx-auto flex w-full items-center justify-between rounded-tl-md rounded-tr-md border-t border-white/6 bg-transparent/0 px-6 py-4">
            <a className="text-zinc-400" href="/weekly">Home</a>
            <a className="text-sky-300" href="/check-in">Check-in</a>
            <a className="text-zinc-400" href="/report">Report</a>
            <a className="text-zinc-400" href="/profile">Profile</a>
          </nav>
        </footer>
      </main>
    </div>
  );
}

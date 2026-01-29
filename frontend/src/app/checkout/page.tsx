"use client";
import React, { useState } from "react";

export default function CheckoutPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setProcessing(true);
    // Placeholder: integrate real payment (Stripe/Checkout) here.
    await new Promise((r) => setTimeout(r, 1000));
    console.log({ name, email, card, expiry, cvc });
    setProcessing(false);
    setSuccess(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040814] via-[#05081a] to-[#071021] text-zinc-200">
      <main className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-28">
        <section className="w-full flex justify-center">
          <div className="w-[360px] rounded-2xl border border-white/6 bg-black/40 p-6 backdrop-blur-md">
            <h2 className="mb-4 text-center text-lg font-semibold">Checkout — Unlock Pro</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-zinc-400">Full name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label className="text-xs text-zinc-400">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="text-xs text-zinc-400">Card number</label>
                <input
                  value={card}
                  onChange={(e) => setCard(e.target.value)}
                  required
                  className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200"
                  placeholder="4242 4242 4242 4242"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-zinc-400">Expiry</label>
                  <input
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    required
                    className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="text-xs text-zinc-400">CVC</label>
                  <input
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    required
                    className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200"
                    placeholder="123"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={processing}
                  className="w-full rounded-full bg-sky-400 px-4 py-3 text-sm font-semibold text-black"
                >
                  {processing ? "Processing..." : "Upgrade & Unlock Pro — $5/month"}
                </button>
              </div>

              {success && (
                <div className="mt-2 rounded-md bg-green-900/40 p-3 text-sm text-green-300">Payment simulated — success! (replace with real integration)</div>
              )}
            </form>
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

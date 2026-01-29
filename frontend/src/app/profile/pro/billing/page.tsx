"use client";
import React, { useState } from "react";

export default function ProBillingPage() {
  const [cardName, setCardName] = useState("Jane Doe");
  const [cardNumber, setCardNumber] = useState("•••• •••• •••• 4242");
  const [exp, setExp] = useState("02/27");
  const [saving, setSaving] = useState(false);

  async function handleUpdate(e?: React.FormEvent) {
    e?.preventDefault();
    setSaving(true);
    await new Promise((r) => setTimeout(r, 800));
    setSaving(false);
    alert("Payment method updated (simulated)");
  }

  const invoices = [
    { id: "inv_001", date: "2025-12-28", amount: "USD 9.99", status: "paid" },
    { id: "inv_002", date: "2026-01-28", amount: "USD 9.99", status: "paid" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040814] via-[#05081a] to-[#071021] text-zinc-200">
      <main className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-28">
        <section className="w-full flex justify-center">
          <div className="w-[360px] rounded-2xl border border-white/6 bg-black/40 p-6 backdrop-blur-md">
            <h2 className="mb-2 text-lg font-semibold">Manage Billing</h2>
            <p className="mb-4 text-sm text-zinc-400">Update payment method, view invoices, or manage your subscription.</p>

            <div className="space-y-4">
              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="text-xs text-zinc-400">Current plan</div>
                <div className="mt-2 text-sm text-zinc-300">Pro Monthly • Renews: 2026-02-28</div>
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 rounded-md border border-white/8 px-3 py-2 text-sm text-zinc-200">Change plan</button>
                  <button className="rounded-md border border-rose-600 px-3 py-2 text-sm text-rose-300">Cancel</button>
                </div>
              </div>

              <form onSubmit={handleUpdate} className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="text-xs text-zinc-400">Payment method</div>
                <div className="mt-2 text-sm text-zinc-300">Card on file</div>
                <div className="mt-3 space-y-2">
                  <input value={cardName} onChange={(e) => setCardName(e.target.value)} className="w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200" placeholder="Name on card" />
                  <input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200" placeholder="Card number" />
                  <div className="flex gap-2">
                    <input value={exp} onChange={(e) => setExp(e.target.value)} className="flex-1 rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200" placeholder="MM/YY" />
                    <input className="w-24 rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200" placeholder="CVC" />
                  </div>
                </div>
                <div className="mt-4">
                  <button type="submit" disabled={saving} className="w-full rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-black">{saving ? 'Updating...' : 'Update payment method'}</button>
                </div>
              </form>

              <div className="rounded-lg border border-white/5 bg-black/50 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-zinc-400">Invoices</div>
                  <div className="text-xs text-zinc-400">Export: <a className="text-sky-300" href="#">CSV</a></div>
                </div>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="text-zinc-400">
                      <tr>
                        <th className="p-2 text-left">Invoice</th>
                        <th className="p-2 text-left">Date</th>
                        <th className="p-2 text-left">Amount</th>
                        <th className="p-2 text-left">Status</th>
                        <th className="p-2 text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-200">
                      {invoices.map((inv) => (
                        <tr key={inv.id} className="border-t border-white/6">
                          <td className="p-2">{inv.id}</td>
                          <td className="p-2">{inv.date}</td>
                          <td className="p-2">{inv.amount}</td>
                          <td className="p-2">{inv.status}</td>
                          <td className="p-2"><a className="text-sky-300" href="#">Download</a></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-2">
                <a href="/profile/pro" className="w-full inline-block text-center rounded-md border border-white/8 px-3 py-2 text-sm text-zinc-200">Back to profile</a>
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

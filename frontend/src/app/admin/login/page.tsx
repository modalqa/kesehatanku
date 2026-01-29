"use client";
import React, { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    // placeholder - replace with real admin auth
    alert("Simulated admin login successful");
  }

  return (
    <div className="min-h-screen bg-[#071021] flex items-center justify-center">
      <div className="w-[420px] rounded-2xl border border-white/6 bg-black/40 p-8">
        <h2 className="mb-4 text-lg font-semibold">Admin Sign in</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-zinc-400">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200" placeholder="admin@company.com" required />
          </div>
          <div>
            <label className="text-xs text-zinc-400">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200" placeholder="••••••" required />
          </div>
          <div>
            <button type="submit" disabled={loading} className="w-full rounded-full bg-sky-400 px-4 py-3 text-sm font-semibold text-black">{loading ? 'Signing in...' : 'Sign in'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

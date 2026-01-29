"use client";
import React, { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    // Placeholder: wire to real registration API
    console.log("Register submit", { name, email, password });
    alert("Simulated registration successful — replace with real signup flow.");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040814] via-[#05081a] to-[#071021] text-zinc-200">
      <main className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-28">
        <section className="w-full flex justify-center">
          <div className="w-[360px] rounded-2xl border border-white/6 bg-black/40 p-6 backdrop-blur-md">
            <h2 className="mb-4 text-center text-lg font-semibold">Register</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-zinc-400">Full name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200"
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div>
                <label className="text-xs text-zinc-400">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200"
                  placeholder="you@email.com"
                  required
                />
              </div>

              <div>
                <label className="text-xs text-zinc-400">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-sky-400 px-4 py-3 text-sm font-semibold text-black"
                >
                  {loading ? "Creating account..." : "Create account"}
                </button>
              </div>

              <div className="text-center text-sm text-zinc-400">
                Already have an account? <a className="text-sky-300" href="/login">Sign in</a>
              </div>
            </form>
          </div>
        </section>

        {/* no footer on auth pages */}
      </main>
    </div>
  );
}

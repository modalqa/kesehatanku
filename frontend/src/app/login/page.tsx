"use client";
import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    // Placeholder: replace with real auth
    console.log("Login submit", { email, password });
    setError(null);
    alert("Simulated login successful — replace with real auth flow.");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040814] via-[#05081a] to-[#071021] text-zinc-200">
      <main className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-28">
        <section className="w-full flex justify-center">
          <div className="w-[360px] rounded-2xl border border-white/6 bg-black/40 p-6 backdrop-blur-md">
            <h2 className="mb-4 text-center text-lg font-semibold">Login</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
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

              {error && <div className="text-sm text-rose-400">{error}</div>}

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-sky-400 px-4 py-3 text-sm font-semibold text-black"
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </div>

              <div className="text-center text-sm text-zinc-400">
                Don&apos;t have an account? <a className="text-sky-300" href="/register">Register</a>
              </div>
            </form>
          </div>
        </section>

        {/* no footer on auth pages */}
      </main>
    </div>
  );
}

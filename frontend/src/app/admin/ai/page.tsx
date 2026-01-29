"use client";
import React, { useState } from "react";

export default function AdminAIControl() {
  const [provider, setProvider] = useState("OpenAI");
  const [model, setModel] = useState("gpt-4.1-mini");
  const [openaiKey, setOpenaiKey] = useState("");
  const [anthropicKey, setAnthropicKey] = useState("");
  const [localUrl, setLocalUrl] = useState("");
  const [insightStyle, setInsightStyle] = useState("safe");
  const [safetyLevel, setSafetyLevel] = useState("strict");
  const [freeLimit, setFreeLimit] = useState<number | "">(1);
  const [proLimit, setProLimit] = useState<string>("Unlimited");
  const [systemPrompt, setSystemPrompt] = useState<string>(
    "You are a neutral self-reflection assistant. Do not provide medical advice. Focus on patterns, not judgement."
  );
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  async function handleSave(e?: React.FormEvent) {
    e?.preventDefault();
    setSaving(true);
    setSaved(false);
    // simulate save
    await new Promise((r) => setTimeout(r, 800));
    console.log({ provider, model, insightStyle, safetyLevel, freeLimit, proLimit, systemPrompt });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold">AI Provider Control</h1>
      <p className="mb-6 text-sm text-zinc-400">Control which AI model is used for insight generation</p>

      <form onSubmit={handleSave} className="space-y-6">
        <div className="rounded-lg border border-white/6 bg-black/40 p-4">
          <label className="text-xs text-zinc-400">AI Provider</label>
          <select value={provider} onChange={(e) => setProvider(e.target.value)} className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200">
            <option>OpenAI</option>
            <option>Anthropic</option>
            <option>Local</option>
          </select>

          {provider !== "Local" && (
            <>
              <label className="mt-4 block text-xs text-zinc-400">Model</label>
              <input value={model} onChange={(e) => setModel(e.target.value)} placeholder="e.g. gpt-4.1-mini" className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200" />
            </>
          )}

          {/* Provider-specific credentials/urls */}
          {provider === "OpenAI" && (
            <div className="mt-4">
              <label className="text-xs text-zinc-400">OpenAI API Key</label>
              <input value={openaiKey} onChange={(e) => setOpenaiKey(e.target.value)} placeholder="sk-..." className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200" />
            </div>
          )}

          {provider === "Anthropic" && (
            <div className="mt-4">
              <label className="text-xs text-zinc-400">Anthropic API Key</label>
              <input value={anthropicKey} onChange={(e) => setAnthropicKey(e.target.value)} placeholder="sk-..." className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200" />
            </div>
          )}

          {provider === "Local" && (
            <div className="mt-4 grid gap-3">
              <div>
                <label className="text-xs text-zinc-400">Ollama URL</label>
                <input value={localUrl} onChange={(e) => setLocalUrl(e.target.value)} placeholder="http://localhost:11434" className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200" />
              </div>
              <div>
                <label className="text-xs text-zinc-400">Local Model</label>
                <input value={model} onChange={(e) => setModel(e.target.value)} placeholder="e.g. llama2:13b" className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200" />
              </div>
            </div>
          )}
        </div>

        <div className="rounded-lg border border-white/6 bg-black/40 p-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs text-zinc-400">Insight Style</label>
            <select value={insightStyle} onChange={(e) => setInsightStyle(e.target.value)} className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200">
              <option value="safe">Safe (Non-judgemental)</option>
              <option value="direct">Direct (Actionable)</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-zinc-400">Safety Level</label>
            <select value={safetyLevel} onChange={(e) => setSafetyLevel(e.target.value)} className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200">
              <option value="strict">Strict</option>
              <option value="balanced">Balanced</option>
              <option value="lenient">Lenient</option>
            </select>
          </div>
        </div>

        <div className="rounded-lg border border-white/6 bg-black/40 p-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs text-zinc-400">Free User Limit / Week</label>
            <input type="number" min={0} value={String(freeLimit)} onChange={(e) => setFreeLimit(e.target.value === '' ? '' : Number(e.target.value))} className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200" />
            <div className="mt-1 text-xs text-zinc-500">Used for cost & abuse control</div>
          </div>
          <div>
            <label className="text-xs text-zinc-400">Pro User Limit / Week</label>
            <input value={proLimit} onChange={(e) => setProLimit(e.target.value)} className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200" />
          </div>
        </div>

        <div className="rounded-lg border border-white/6 bg-black/40 p-4">
          <label className="text-xs text-zinc-400">System Prompt (Global)</label>
          <textarea value={systemPrompt} onChange={(e) => setSystemPrompt(e.target.value)} rows={6} className="mt-2 w-full rounded-md border border-white/8 bg-transparent p-3 text-sm text-zinc-200" />
          <div className="mt-2 text-xs text-zinc-500">Applied to all insight generation</div>
        </div>

        <div>
          <button type="submit" className="rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-black" disabled={saving}>{saving ? 'Saving...' : 'Save AI Configuration'}</button>
          {saved && <span className="ml-3 text-sm text-green-300">Saved</span>}
        </div>
      </form>
    </div>
  );
}

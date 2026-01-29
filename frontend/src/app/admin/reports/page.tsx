import React from "react";

export default function AdminReports() {
  const topUsers = [
    { email: "qa1@company.com", plan: "Pro", checkins: 7, insights: 5 },
    { email: "dev2@company.com", plan: "Free", checkins: 5, insights: 1 },
  ];

  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold">Admin Reports</h1>

      <div className="grid gap-4 sm:grid-cols-4">
        <div className="rounded-lg border border-white/6 bg-black/40 p-4">
          <div className="text-2xl font-bold text-sky-300">1,248</div>
          <div className="text-xs text-zinc-400">Total Users</div>
        </div>
        <div className="rounded-lg border border-white/6 bg-black/40 p-4">
          <div className="text-2xl font-bold text-sky-300">312</div>
          <div className="text-xs text-zinc-400">Active This Week</div>
        </div>
        <div className="rounded-lg border border-white/6 bg-black/40 p-4">
          <div className="text-2xl font-bold text-sky-300">84</div>
          <div className="text-xs text-zinc-400">Pro Subscribers</div>
        </div>
        <div className="rounded-lg border border-white/6 bg-black/40 p-4">
          <div className="text-2xl font-bold text-sky-300">9,430</div>
          <div className="text-xs text-zinc-400">AI Insights Generated</div>
        </div>
      </div>

      <div className="mt-6 rounded-lg border border-white/6 bg-black/40 p-4">
        <div className="mb-2 text-sm text-zinc-400">Filter</div>
        <select className="rounded-md border border-white/8 bg-transparent p-2 text-sm text-zinc-200">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </div>

      <div className="mt-6 rounded-lg border border-white/6 bg-black/40 p-4">
        <h3 className="mb-3 text-sm text-zinc-300">Top Active Users</h3>
        <table className="w-full table-auto text-left text-sm">
          <thead className="text-zinc-400">
            <tr>
              <th className="pb-3">Email</th>
              <th className="pb-3">Plan</th>
              <th className="pb-3">Check-ins</th>
              <th className="pb-3">Insights</th>
            </tr>
          </thead>
          <tbody>
            {topUsers.map((u) => (
              <tr key={u.email} className="border-t border-white/6">
                <td className="py-3">{u.email}</td>
                <td className="py-3"><span className={`inline-block rounded-full px-2 py-1 text-xs ${u.plan === 'Pro' ? 'bg-sky-300 text-black' : 'bg-white/5 text-zinc-300'}`}>{u.plan}</span></td>
                <td className="py-3">{u.checkins}</td>
                <td className="py-3">{u.insights}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

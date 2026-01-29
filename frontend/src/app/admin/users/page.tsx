"use client";
import React from "react";

type User = {
  id: string;
  email: string;
  role: string;
  plan: string;
  status: "active" | "suspended" | "invited";
};

const sampleUsers: User[] = [
  { id: "1", email: "alice@example.com", role: "User", plan: "Free", status: "active" },
  { id: "2", email: "bob@example.com", role: "Pro", plan: "Pro", status: "active" },
  { id: "3", email: "carol@example.com", role: "Admin", plan: "Pro", status: "active" },
  { id: "4", email: "dave@example.com", role: "User", plan: "Free", status: "suspended" },
  { id: "5", email: "eve@example.com", role: "User", plan: "Trial", status: "invited" },
];

export default function AdminUsersPage() {
  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold">User Management</h1>
      <p className="mb-6 text-sm text-zinc-400">List of registered users and account status.</p>

      <div className="rounded-lg border border-white/6 bg-black/40 p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed divide-y divide-white/6 text-left text-sm">
            <thead>
              <tr className="text-zinc-400">
                <th className="w-1/3 p-3">Email</th>
                <th className="w-1/6 p-3">Role</th>
                <th className="w-1/6 p-3">Plan</th>
                <th className="w-1/6 p-3">Status</th>
                <th className="w-1/6 p-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/6">
              {sampleUsers.map((u) => (
                <tr key={u.id} className="align-top">
                  <td className="p-3 text-zinc-200">{u.email}</td>
                  <td className="p-3 text-zinc-200">{u.role}</td>
                  <td className="p-3 text-zinc-200">{u.plan}</td>
                  <td className="p-3">
                    <span className={
                      `inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ` +
                      (u.status === "active" ? "bg-green-900 text-green-300" : u.status === "suspended" ? "bg-red-900 text-red-300" : "bg-yellow-900 text-yellow-300")
                    }>
                      {u.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <button className="rounded-md border border-white/8 px-3 py-1 text-sm text-zinc-200">View</button>
                      <button className="rounded-md border border-white/8 px-3 py-1 text-sm text-zinc-200">Edit</button>
                      <button className="rounded-md border border-white/8 px-3 py-1 text-sm text-rose-300">Suspend</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

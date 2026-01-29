"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname === "/admin/login" || pathname === "/admin/login/";

  if (isLogin) {
    return (
      <div className="min-h-screen bg-[#071021] text-zinc-200 flex items-center justify-center">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#071021] text-zinc-200">
      <div className="flex min-h-screen">
        <aside className="w-60 border-r border-white/6 p-6 flex flex-col">
          <div>
            <div className="mb-8 font-bold text-zinc-100">Admin Panel</div>
            <nav className="flex flex-col gap-3 text-sm">
              <a href="/admin/users" className="text-zinc-300 hover:text-zinc-50">User Management</a>
              <a href="/admin/ai" className="text-zinc-300 hover:text-zinc-50">AI Control</a>
              <a href="/admin/reports" className="text-sky-300">Reports</a>
              <a href="/admin/logs" className="text-zinc-300 hover:text-zinc-50">System Logs</a>
            </nav>
          </div>

          <div className="mt-auto">
            <a href="/admin/login" className="inline-block w-full rounded-md border border-white/8 px-3 py-2 text-sm text-zinc-200 text-center">Logout</a>
          </div>
        </aside>

        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}

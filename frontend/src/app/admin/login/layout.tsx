import React from "react";

export default function AdminLoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#071021] text-zinc-200 flex items-center justify-center">
      {children}
    </div>
  );
}

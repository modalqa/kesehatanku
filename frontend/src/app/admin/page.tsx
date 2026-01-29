import { redirect } from "next/navigation";

export default function AdminRoot() {
  // redirect admin root to reports
  redirect("/admin/reports");
}

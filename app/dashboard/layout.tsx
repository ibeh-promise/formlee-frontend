import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import AuthProvider from "@/contexts/AuthProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-zinc-50">
        <Sidebar />

        <div className="ml-64 min-h-screen">
          <Header />

          <main className="p-6">{children}</main>
        </div>
      </div>
    </AuthProvider>
  );
}

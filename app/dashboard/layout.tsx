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
      <div className="flex min-h-screen">
  <Sidebar />

  <div className="flex-1 min-w-0">
    <Header />

    <main>
      {children}
    </main>
  </div>
</div>
    </AuthProvider>
  );
}

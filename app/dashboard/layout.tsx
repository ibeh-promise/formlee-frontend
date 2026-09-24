import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/Sidebar";
import AuthProvider from "@/contexts/AuthProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <main className="overflow-hidden h-screen flex">
        <Sidebar />
        <div className="w-[85%] overflow-auto h-screen">
          {/* <Header /> @ibeh-promise complete this header pls */}
          {children}
        </div>
      </main>
    </AuthProvider>
  );
}

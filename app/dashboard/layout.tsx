import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="overflow-hidden h-screen">
      <Sidebar />
      <div className="w-[85%] overflow-auto h-screen"></div>
    </main>
  );
}

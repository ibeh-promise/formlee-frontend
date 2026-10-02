"use client";
import CreateFormDialog from "@/components/dialogs/CreateFormDialog";
import DeleteAccountDialog from "@/components/dialogs/DeleteAccountDialog";
import DeleteFormDialog from "@/components/dialogs/DeleteFormDialog";
import LogoutDialog from "@/components/dialogs/LogoutDialog";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import AuthProvider from "@/contexts/AuthProvider";
import DialogProvider from "@/contexts/DialogProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <DialogProvider>
        <div className="min-h-screen bg-zinc-50">
          <Sidebar />

          <div className="ml-64 min-h-screen">
            <Header />

            <main className="p-6">{children}</main>
          </div>
          <CreateFormDialog />
          <LogoutDialog />
          <DeleteFormDialog />
          <DeleteAccountDialog />
        </div>
      </DialogProvider>
    </AuthProvider>
  );
}

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useDialogContext } from "@/contexts/DialogProvider";
import { useRouter } from "next/navigation";

export default function LogoutDialog() {
  const { logoutDialogOpen, setLogoutDialogOpen } = useDialogContext();
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("authToken");
    router.push("/");
  };
  return (
    <Dialog open={logoutDialogOpen} onOpenChange={setLogoutDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Log out?</DialogTitle>
          <DialogDescription>
            Are you sure you want to log out?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant={"secondary"}
            onClick={() => setLogoutDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button variant={"default"} onClick={logout}>
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useDialogContext } from "@/contexts/DialogProvider";
import { toast } from "sonner";
import * as api from "@/lib/api";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DeleteAccountDialog() {
  const { deleteAccountDialogOpen, setDeleteAccountDialogOpen } =
    useDialogContext();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setIsLoading(true);

    const res = await api.user.userControllerDeleteProfileV1({
      auth: localStorage.getItem("authToken")!,
    });

    if (res.error) {
      toast.error("Failed to delete account", {
        description: res.error.message,
      });
    } else {
      toast.success(res.data.message);
      setDeleteAccountDialogOpen(false);
      localStorage.removeItem("authToken");
      router.push("/");
    }

    setIsLoading(false);
  };
  return (
    <Dialog
      open={deleteAccountDialogOpen}
      onOpenChange={(open) => setDeleteAccountDialogOpen(open)}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogDescription>
            All data would be deleted. Are you sure you want to delete your
            account?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button variant={"secondary"}>Cancel</Button>
          </DialogClose>
          <Button
            variant={"destructive"}
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading && <Loader className="animate-spin" />} Delete Account
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

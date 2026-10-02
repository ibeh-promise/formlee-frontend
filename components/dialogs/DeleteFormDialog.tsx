import React, { useState } from "react";
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
import { toast } from "sonner";
import * as api from "@/lib/api";
import { useFormStore } from "@/stores/forms-store";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DeleteFormDialog() {
  const { deleteFormDialogStatus, setDeleteFormDialogStatus } =
    useDialogContext();
  const { deleteForm } = useFormStore();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!deleteFormDialogStatus.form) return toast.error("Form is null");
    setIsLoading(true);

    const res = await api.form.formControllerRemoveV1({
      path: { idOrSlug: deleteFormDialogStatus.form.slug },
      auth: localStorage.getItem("authToken")!,
    });

    if (res.error) {
      toast.error("Failed to delete form", { description: res.error.message });
    } else {
      toast.success(res.data.message);
      deleteForm(deleteFormDialogStatus.form.id);
      setDeleteFormDialogStatus({ form: null, isOpen: false });
      router.push("/dashboard/forms");
    }

    setIsLoading(false);
  };
  return (
    <Dialog
      open={deleteFormDialogStatus.isOpen}
      onOpenChange={(open) =>
        setDeleteFormDialogStatus((prev) => ({ ...prev, isOpen: open }))
      }
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Form</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this form?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant={"secondary"}
            onClick={() =>
              setDeleteFormDialogStatus({ form: null, isOpen: false })
            }
          >
            Cancel
          </Button>
          <Button
            variant={"destructive"}
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading && <Loader className="animate-spin" />} Delete Form
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

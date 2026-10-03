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
import { Loader } from "lucide-react";
import { useSubmissionStore } from "@/stores/submissions-store";

export default function DeleteSubmissionDialog() {
  const { deleteSubmissionDialogStatus, setDeleteSubmissionDialogStatus } =
    useDialogContext();
  const { deleteSubmission } = useSubmissionStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    if (!deleteSubmissionDialogStatus.submission)
      return toast.error("Submission is null");
    setIsLoading(true);

    const res = await api.submission.submissionControllerRemoveV1({
      path: { id: deleteSubmissionDialogStatus.submission.id },
      auth: localStorage.getItem("authToken")!,
    });

    if (res.error) {
      toast.error("Failed to delete form", { description: res.error.message });
    } else {
      toast.success(res.data.message);
      deleteSubmission(deleteSubmissionDialogStatus.submission.id);
      setDeleteSubmissionDialogStatus({ submission: null, isOpen: false });
    }

    setIsLoading(false);
  };
  return (
    <Dialog
      open={deleteSubmissionDialogStatus.isOpen}
      onOpenChange={(open) =>
        setDeleteSubmissionDialogStatus((prev) => ({ ...prev, isOpen: open }))
      }
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Submission</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this submission?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant={"secondary"}
            onClick={() =>
              setDeleteSubmissionDialogStatus({
                submission: null,
                isOpen: false,
              })
            }
          >
            Cancel
          </Button>
          <Button
            variant={"destructive"}
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading && <Loader className="animate-spin" />} Delete Submission
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

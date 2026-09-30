import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useDialogContext } from "@/contexts/DialogProvider";
import { Field, FieldGroup } from "../ui/field";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import * as api from "@/lib/api";
import { toast } from "sonner";
import { useFormStore } from "@/stores/forms-store";
import { useRouter } from "next/navigation";
import { PreviewCard } from "@base-ui/react";

export default function CreateFormDialog() {
  const { createFormDialogOpen, setCreateFormDialogOpen } = useDialogContext();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<api.CreateFormDto>({
    name: "",
    description: "",
  });
  const { addForm } = useFormStore();
  const router = useRouter();

  const handleSubmit = async () => {
    setIsLoading(true);
    if (!data.name || !data.description) {
      toast.error("Fill in all required fields");
      setIsLoading(false);
      return;
    }

    const res = await api.form.formControllerCreateV1({
      body: data,
      auth: localStorage.getItem("authToken")!,
    });

    if (res.error) {
      toast.error("Failed to create a new form", {
        description: res.error.message,
      });
    } else {
      toast.success("Form created successfully");
      addForm(res.data);

      router.push(`/dashboard/forms/${res.data.slug}`);
    }

    setIsLoading(false);
  };
  return (
    <Dialog open={createFormDialogOpen} onOpenChange={setCreateFormDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a form</DialogTitle>
          <DialogDescription>
            Setup a new endpoint to start collecting submissions in seconds.
          </DialogDescription>
        </DialogHeader>
        <form>
          <FieldGroup>
            <Field>
              <Label>FORM NAME</Label>
              <Input
                type="text"
                placeholder="Enter a form name"
                value={data.name}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </Field>
            <Field>
              <Label>DESCRIPTION</Label>
              <Textarea
                placeholder="Enter your form description"
                value={data.description}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, description: e.target.value }))
                }
              />
            </Field>
          </FieldGroup>
        </form>
        <DialogFooter>
          <Button
            variant={"secondary"}
            onClick={() => setCreateFormDialogOpen(false)}
          >
            Close
          </Button>
          <Button disabled={isLoading} onClick={handleSubmit}>
            {isLoading && <Loader className="animate-spin" />}
            Create Form
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

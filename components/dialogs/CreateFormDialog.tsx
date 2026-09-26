import React from "react";
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

export default function CreateFormDialog() {
  const { createFormDialogOpen, setCreateFormDialogOpen } = useDialogContext();
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
              <Input type="text" placeholder="Enter a form name" />
            </Field>
            <Field>
              <Label>DESCRIPTION</Label>
              <Textarea placeholder="Enter your form description" />
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
          <Button>Create Form</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

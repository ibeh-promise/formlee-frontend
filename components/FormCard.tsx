"use client";
import React from "react";
import * as api from "@/lib/api";
import { Badge } from "./ui/Badges";
import { Copy, Dot, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useDialogContext } from "@/contexts/DialogProvider";

export default function FormCard({ form }: { form: api.FormResponseDto }) {
  const router = useRouter();
  const { setDeleteFormDialogStatus } = useDialogContext();
  return (
    <div
      className="border hover:shadow-sm transition-all p-5 rounded-xl bg-white flex items-center justify-between cursor-pointer"
      onClick={() => router.push(`/dashboard/forms/${form.slug}`)}
    >
      <div className="space-y-1 w-full">
        <div className="flex items-center gap-3">
          <h3 className="tex-sm font-semibold">{form.name}</h3>
          <Badge
            variant={
              form.status === "active"
                ? "success"
                : form.status === "paused"
                  ? "default"
                  : "muted"
            }
          >
            {form.status}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-secondary py-0.5 px-1.5 rounded-sm">
            <span className="text-xs">{form.slug}</span>
          </div>
          <Dot />
          <p className="text-xs text-black/60">
            {form._count.submissions} submissions
          </p>
          <Dot />
          <p className="text-xs text-black/60">
            Created {new Date(form.createdAt).getDate()}/
            {new Date(form.createdAt).getMonth()}/
            {new Date(form.createdAt).getFullYear()}
          </p>
        </div>
        <p className="text-xs text-black/60">{form.description}</p>
      </div>
      <div className="flex items-center gap-x-3">
        <Button
          variant={"secondary"}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Copy /> Copy URL
        </Button>
        <Button
          variant={"default"}
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/dashboard/forms/${form.slug}`);
          }}
        >
          View Form
        </Button>
        <Button
          variant={"destructive"}
          onClick={(e) => {
            e.stopPropagation();
            setDeleteFormDialogStatus({ isOpen: true, form });
          }}
        >
          <Trash2 />
        </Button>
      </div>
    </div>
  );
}

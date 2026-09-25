"use client";
import { useParams } from "next/navigation";
import { forms } from "../page";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Code2,
  Copy,
  Globe,
  Inbox,
  Settings,
  Trash2,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function FormDetailsPage() {
  const { slug } = useParams();
  const form = forms.find((f) => f.slug === slug)!;
  return (
    <div className="space-y-8 animate-in fade-in duration-200 p-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-3 items-center">
          <Button variant={"secondary"}>
            <ArrowLeft />
          </Button>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 tracking-light">
                {form.name}
              </h3>{" "}
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
            <p className="text-sm sm:text-sm text-zinc-500 mt-1">{form.slug}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant={"secondary"}>
            <Copy /> Create Endpoint
          </Button>
          <Button variant={"destructive"}>
            <Trash2 />
          </Button>
        </div>
      </div>

      <div className="border hover:shadow-sm transition-all p-5 rounded-xl bg-white flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <div className="bg-black text-white p-2 rounded-2xl">
            <Globe />
          </div>
          <div>
            <p className="text-xs text-black/60">PRODUCTION ENDPOINT URL</p>
            <p className="font-semibold tracking-wide">
              https://formlee.xyz/f/{form.slug}
            </p>
          </div>
        </div>

        <Button>
          <Copy /> Copy Endpoint
        </Button>
      </div>

      <Tabs>
        <TabsList>
          <TabsTrigger value={"connect-setup"}>
            <Code2 /> Connect & Setup
          </TabsTrigger>
          <TabsTrigger value={"submission"}>
            <Inbox /> Submissions ({form._count.submissions})
          </TabsTrigger>
          <TabsTrigger value={"setting"}>
            <Settings /> Form Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value={"connect-setup"}>
          <div className="border hover:shadow-sm transition-all p-5 rounded-xl bg-white flex items-center justify-between"></div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default FormDetailsPage;

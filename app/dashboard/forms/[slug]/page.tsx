"use client";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Code2,
  Copy,
  Download,
  FolderMinus,
  Globe,
  Inbox,
  Loader,
  Send,
  Settings,
  Trash2,
} from "lucide-react";
import { Badge } from "@/components/ui/Badges";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from "@/components/ui/CodeBlock";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormStore } from "@/stores/forms-store";
import { SubmitEvent, useEffect, useState } from "react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import * as api from "@/lib/api";
import { toast } from "sonner";
import { useDialogContext } from "@/contexts/DialogProvider";
import { Skeleton } from "@/components/ui/skeleton";

const formStatus = [
  { label: "Active (Receiving Submissions)", value: "active" },
  { label: "Paused (Temporarily Rejecting)", value: "paused" },
  { label: "Archived", value: "archive" },
];

function FormDetailsPage() {
  const { slug } = useParams();
  const { forms, addForm, updateForm } = useFormStore();
  const [form, setForm] = useState(forms.find((f) => f.slug === slug));
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [formData, setFormData] = useState<api.UpdateFormDto>({});
  const [submissions, setSubmissions] = useState<api.SubmissionResponseDto[]>(
    [],
  );

  const [testSubmissionData, setTestSubmissionData] = useState({
    name: "John Doe",
    email: "test@example.com",
    message: "Hi! Testing my Formlee endpoint directly from the setup console.",
  });
  const [isLoadingSubmission, setIsLoadingSubmissions] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isTestingSubmission, setIsTestingSubmission] = useState(false);

  const { setDeleteFormDialogStatus } = useDialogContext();

  useEffect(() => {
    const fetchForm = async () => {
      if (!form) {
        const res = await api.form.formControllerFindOneV1({
          path: { idOrSlug: String(slug) },
          auth: localStorage.getItem("authToken")!,
        });

        if (res.error) {
          toast.error("Failed to retrieve form", {
            description: res.error.message,
          });
        } else {
          if (!forms.find((f) => f.id == res.data.id)) addForm(res.data);
          setForm(res.data);
        }
      }
      setIsLoading(false);
    };
    fetchForm();
  }, [form, slug, addForm, forms]);

  useEffect(() => {
    if (!form) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFormData({ ...form, description: form.description! });
  }, [form]);
  useEffect(() => {
    if (!form) return;
    const fetchSubmissions = async () => {
      const res = await api.submission.submissionControllerFindAllUnderFormV1({
        path: { formIdOrSlug: form.id },
        auth: localStorage.getItem("authToken")!,
      });
      if (res.error) {
        if (res.error.statusCode !== 404)
          toast.error("Failed to retrieve form", {
            description: res.error.message,
          });
      } else {
        setSubmissions(res.data);
      }

      setIsLoadingSubmissions(false);
    };
    fetchSubmissions();
  }, [form]);

  const handleUpdateForm = async () => {
    if (!form) return;
    setIsUpdating(true);
    const res = await api.form.formControllerUpdateV1({
      body: formData,
      path: { idOrSlug: form.id },
      auth: localStorage.getItem("authToken")!,
    });

    if (res.error) {
      toast.error("Failed to update", {
        description: res.error.message,
      });
    } else {
      toast.success("Form updated successfully");
      updateForm(res.data.id, res.data);
      setForm(res.data);
    }
    setIsUpdating(false);
  };

  const handleTestSubmission = async (e: SubmitEvent) => {
    e.preventDefault();
    setIsTestingSubmission(true);
    const res = await api.submission.submissionControllerCreateV1({
      body: testSubmissionData as api.Body,
      path: { formSlug: String(slug) },
    });
    if (res.error)
      toast.error("Failed to submit", { description: res.error.message });
    else toast.success("Form Submitted successfully");
    setIsTestingSubmission(false);
  };

  return isLoading ? (
    <div className="space-y-8 p-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-3 items-center">
          <Button
            variant={"secondary"}
            onClick={() => router.push("/dashboard/forms")}
          >
            <ArrowLeft />
          </Button>

          <div className="space-y-3">
            <Skeleton className="w-100 h-9" />
            <Skeleton className="w-50 h-3" />
          </div>
        </div>
        <Skeleton className="w-70 h-9" />
      </div>
      <div className="border shadow-sm transition-all p-5 rounded-xl bg-white flex items-center justify-between">
        <Skeleton className="h-10 w-[50%]" />
        <Skeleton className="h-10 w-[15%]" />
      </div>

      <div className="pb-5 border-b flex items-center gap-x-3">
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-10 w-40" />
      </div>
      <Skeleton className="h-80 w-full" />
    </div>
  ) : !form ? (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant={"icon"}>
          <FolderMinus />
        </EmptyMedia>
        <EmptyTitle>Form not found</EmptyTitle>
        <EmptyDescription>Form might have been deleted</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button onClick={() => router.push("/dashboard/forms")}>
          See all Forms
        </Button>
      </EmptyContent>
    </Empty>
  ) : (
    <div className="space-y-8 p-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-3 items-center">
          <Button
            variant={"secondary"}
            onClick={() => router.push("/dashboard/forms")}
          >
            <ArrowLeft />
          </Button>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 tracking-light">
                {form.name}
              </h3>
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
            <Copy /> Copy Endpoint
          </Button>
          <Button
            variant={"destructive"}
            onClick={() => setDeleteFormDialogStatus({ isOpen: true, form })}
          >
            <Trash2 />
          </Button>
        </div>
      </div>

      <div className="border shadow-sm transition-all p-5 rounded-xl bg-white flex items-center justify-between">
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
        <TabsList variant={"line"}>
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

        <TabsContent value={"connect-setup"} className={"space-y-5"}>
          <Tabs className="border hover:shadow-sm transition-all p-5 rounded-xl bg-white">
            <div className="flex items-center justify-between  mb-2">
              <div>
                <h5 className="font-bold">Connect your code</h5>
                <p className="text-xs text-black/60">
                  Select your framework or language to view drop-in code
                  snippets.
                </p>
              </div>
              <TabsList>
                <TabsTrigger value={"html"}>HTML</TabsTrigger>
                <TabsTrigger value={"react"}>React</TabsTrigger>
                <TabsTrigger value={"nextjs"}>Nextjs</TabsTrigger>
                <TabsTrigger value={"curl"}>CURL</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value={"html"}>
              <CodeBlock
                language="html"
                filename="index.html"
                code={`<!-- 1. Add your Formlee endpoint to your form action -->
<form action="https://formlee.com/f/${form.slug}" method="POST">
  <!-- Honeypot for spam bots (optional) -->
  <input type="text" name="_gotcha" style="display:none" />

  <label for="name">Name</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required />

  <label for="message">Message</label>
  <textarea id="message" name="message" rows="4" required></textarea>

  <button type="submit">Send Message</button>
</form>`}
              />
            </TabsContent>
            <TabsContent value={"react"}>
              <CodeBlock
                language="jsx"
                filename="ContactForm.jsx"
                code={`import React, { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch('https://formlee.com/f/${form.slug}', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <p className="text-emerald-600 font-medium">Thank you! Your message was received.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="email" name="email" placeholder="Your email" required />
      <textarea name="message" placeholder="Your inquiry..." required />
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}`}
              />
            </TabsContent>
            <TabsContent value={"nextjs"}>
              <CodeBlock
                language="tsx"
                filename="app/components/FormleeContact.tsx"
                code={`// app/components/FormleeContact.tsx
'use client';

import { useState } from 'react';

export default function FormleeContact() {
  const [sent, setSent] = useState(false);

  async function handleAction(formData: FormData) {
    const res = await fetch('https://formlee.com/f/${form.slug}', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) setSent(true);
  }

  return (
    <form action={handleAction}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit">Submit to Formlee</button>
    </form>
  );
}`}
              />
            </TabsContent>
            <TabsContent value={"curl"}>
              <CodeBlock
                language="curl"
                filename="Terminal"
                code={`# Test submission via cURL
curl -X POST "https://formlee.com/f/${form.slug}" \

  -H "Accept: application/json" \

  -d "name=Test User" \

  -d "email=tester@domain.com" \

  -d "message=Hello from terminal!"`}
              />
            </TabsContent>
          </Tabs>
          <div className="border hover:shadow-sm transition-all p-5 rounded-xl bg-white space-y-3">
            <div>
              <h5 className="font-bold">
                Test submitting to this form right now
              </h5>
              <p className="text-xs text-black/60">
                Submit this sample form to verify your endpoint ans watch it
                appear immediately in your inbox.
              </p>
            </div>

            <form
              onSubmit={handleTestSubmission}
              className="md:w-[50%] space-y-3"
            >
              <div className="flex gap-3 w-full">
                <div className="space-y-2 w-full">
                  <Label>Name</Label>
                  <Input
                    type="text"
                    value={testSubmissionData.name}
                    onChange={(e) =>
                      setTestSubmissionData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={testSubmissionData.email}
                    onChange={(e) =>
                      setTestSubmissionData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Message</Label>
                <Textarea
                  className="min-h-20"
                  value={testSubmissionData.name}
                  onChange={(e) =>
                    setTestSubmissionData((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  required
                />
              </div>

              <Button type="submit" disabled={isTestingSubmission}>
                {isTestingSubmission ? (
                  <Loader className="animate-spin" />
                ) : (
                  <Send />
                )}
                Send Test Submission
              </Button>
            </form>
          </div>
        </TabsContent>
        <TabsContent value={"submission"}>
          {isLoadingSubmission ? (
            <div>
              <h1>Is Loading</h1>
            </div>
          ) : submissions.length === 0 ? (
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant={"icon"}>
                  <FolderMinus />
                </EmptyMedia>
                <EmptyTitle>No Submission yet</EmptyTitle>
                <EmptyDescription>
                  Your submissions will show up here.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : (
            <>
              <div className="flex items-center justify-between  mb-2">
                <div>
                  <p className="text-xs text-black/60">
                    Showing {submissions.length} submissions for this form
                  </p>
                </div>
                <Button variant={"secondary"}>
                  <Download /> Export CSV
                </Button>
              </div>
              <div className="border rounded-xl bg-white divide-y">
                {submissions.map((submission) => (
                  <div
                    className="hover:bg-black/2 transition-all p-5 flex items-center justify-between cursor-pointer"
                    key={submission.id}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h5 className="text-sm font-semibold">
                          {submission.name || submission.id}
                        </h5>
                        <p className="text-xs text-black/60">{`<${submission.email}>`}</p>
                      </div>
                      <p className="text-sm">{submission.message}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-xs text-black/60">
                        {new Date(submission.submittedAt).getDate()}/
                        {new Date(submission.submittedAt).getMonth()}/
                        {new Date(submission.submittedAt).getFullYear()}
                      </p>
                      <Button variant={"destructive"}>
                        <Trash2 />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </TabsContent>
        <TabsContent value={"setting"}>
          <div className="border hover:shadow-sm transition-all p-5 rounded-xl bg-white space-y-5">
            <h5 className="font-bold">General Configuration</h5>

            <form
              action=""
              className="space-y-4 md:w-[50%]"
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdateForm();
              }}
            >
              <div className="space-y-2">
                <Label>FORM NAME</Label>
                <Input
                  type="text"
                  placeholder="Form Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>CUSTOM REDIRECT URL (OPTIONAL)</Label>
                <Input
                  type="url"
                  value={formData.redirectUrl || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      redirectUrl: e.target.value,
                    }))
                  }
                />
                <p className="text-xs text-black/60">
                  Where users are redirected after standard HTML POST
                  submissions.
                </p>
              </div>
              <div className="space-y-2">
                <Label>TARGET NOTIFICATION EMAIL</Label>
                <Input
                  type="email"
                  value={formData.targetEmail}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      targetEmail: e.target.value,
                    }))
                  }
                  required
                />
              </div>

              <FieldLabel>
                <Field orientation="horizontal">
                  <Checkbox
                    id="toggle-checkbox-1"
                    name="toggle-checkbox-1"
                    checked={formData.emailNotification}
                    onCheckedChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        emailNotification: value,
                      }))
                    }
                  />
                  <FieldContent>
                    <FieldTitle>Email Notification</FieldTitle>
                    <FieldDescription>
                      Send an instant notification when a submission is received
                    </FieldDescription>
                  </FieldContent>
                </Field>
              </FieldLabel>

              <div className="space-y-2">
                <Label>FORM STATUS</Label>
                <Select
                  items={formStatus}
                  defaultValue={formData.status}
                  onValueChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      status: value!,
                    }))
                  }
                >
                  <SelectTrigger className={"w-full"}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {formStatus.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" disabled={isUpdating}>
                {isUpdating && <Loader className="animate-spin" />} Save Changes
              </Button>
            </form>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default FormDetailsPage;

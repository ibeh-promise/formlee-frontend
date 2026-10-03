"use client";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  CheckCircle,
  Download,
  FolderMinus,
  Search,
  Trash2,
  X,
} from "lucide-react";
import * as api from "@/lib/api";
import { Badge } from "@/components/ui/Badges";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import CodeBlock from "@/components/ui/CodeBlock";
import { useFormStore } from "@/stores/forms-store";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

function FormsPage() {
  const { forms } = useFormStore();
  const [submissions, setSubmissions] = useState<api.SubmissionResponseDto[]>(
    [],
  );
  const [selectedSubmission, setSubmittedSubmission] =
    useState<api.SubmissionResponseDto | null>(null);

  const [isLoadingSubmissions, setIsLoadingSubmissions] = useState(true);

  const router = useRouter();

  const formSelectionItems = [
    {
      label: `All Forms (${forms.length})`,
      value: "all",
    },
    ...forms.map((form) => ({ label: form.name, value: form.id })),
  ];

  useEffect(() => {
    const fetchSubmissions = async () => {
      const res = await api.submission.submissionControllerFindAllV1({
        auth: localStorage.getItem("authToken")!,
      });

      if (res.error) {
        if (res.error.statusCode !== 404)
          toast.error("Failed to retrieve submissions", {
            description: res.error.message,
          });
      } else {
        setSubmissions(res.data);
      }
      setIsLoadingSubmissions(false);
    };
    fetchSubmissions();
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-200 p-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-light">
            Submissions
          </h1>
          <p className="text-sm sm:text-sm text-zinc-500 mt-1">
            Global inbox for all incoming form submissions across your accounts
          </p>
        </div>

        {submissions.length !== 0 && (
          <div className="flex items-center space-x-3">
            <Button variant={"secondary"}>
              <CheckCircle /> Mark all read
            </Button>
            <Button variant={"secondary"}>
              <Download /> CSV
            </Button>
            <Button variant={"secondary"}>
              <Download /> JSON
            </Button>
          </div>
        )}
      </div>

      {isLoadingSubmissions ? (
        <>
          <div className="flex items-center justify-between border p-3 rounded-xl bg-white shadow-sm">
            <Skeleton className="h-10 w-[30%]" />
            <Skeleton className="h-10 w-[30%]" />
          </div>
          <div className="border rounded-xl bg-white divide-y w-full">
            <Skeleton className="h-25 w-full" />

            <Skeleton className="h-25 w-full" />

            <Skeleton className="h-25 w-full" />
          </div>
        </>
      ) : submissions.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant={"icon"}>
              <FolderMinus />
            </EmptyMedia>
            <EmptyTitle>No Submissions yet</EmptyTitle>
            <EmptyDescription>No submissions received yet</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button onClick={() => router.push("/dashboard/forms")}>
              See Forms
            </Button>
          </EmptyContent>
        </Empty>
      ) : (
        <>
          <div className="flex items-center justify-between border p-3 rounded-xl bg-white shadow-sm">
            <InputGroup className="w-[25%]">
              <InputGroupInput placeholder="Search email, name keywords..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>

            <div className="flex items-center gap-3 ">
              <Select items={formSelectionItems} defaultValue={"all"}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {formSelectionItems.map((item) => (
                    <SelectItem value={item.value} key={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button size={"sm"}>All</Button>
              <Button size={"sm"} variant={"secondary"}>
                Active
              </Button>
              <Button size={"sm"} variant={"secondary"}>
                Paused
              </Button>
            </div>
          </div>
          <div className={`flex ${selectedSubmission && "gap-8"}`}>
            <div className="border rounded-xl bg-white divide-y w-full">
              {submissions.map((submission) => (
                <div
                  className={`hover:bg-black/2 transition-all p-5 flex items-center justify-between cursor-pointer ${selectedSubmission?.id === submission.id && `border-l-3 border-l-black`}`}
                  key={submission.id}
                  id={submission.id}
                  onClick={() => setSubmittedSubmission(submission)}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h5 className="text-sm font-semibold">
                        {submission.name}
                      </h5>
                      <p className="text-xs text-black/60">{`<${submission.email}>`}</p>
                    </div>
                    <Badge variant={"default"}>{submission.form.name}</Badge>
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
            {selectedSubmission && (
              <div className="border rounded-xl bg-white w-full p-5 space-y-5">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="tex-sm font-semibold">
                        {selectedSubmission.name}
                      </h3>
                      <Badge
                        variant={
                          selectedSubmission.status === "delivered"
                            ? "success"
                            : selectedSubmission.status === "delivery_failed"
                              ? "warning"
                              : "muted"
                        }
                      >
                        {selectedSubmission.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-black/60">
                      {selectedSubmission.email}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant={"destructive"}>
                      <Trash2 />
                    </Button>
                    <Button
                      variant={"ghost"}
                      onClick={() => setSubmittedSubmission(null)}
                    >
                      <X />
                    </Button>
                  </div>
                </div>

                <div className="bg-secondary p-3 rounded-lg grid grid-cols-2 gap-3">
                  <div>
                    <h6 className="text-xs font-semibold text-black/60">
                      FORM ENDPOINT
                    </h6>
                    <p className="text-sm font-semibold">
                      {selectedSubmission.form.name}
                    </p>
                  </div>
                  <div>
                    <h6 className="text-xs font-semibold text-black/60">
                      DATE RECEIVED
                    </h6>
                    <p className="text-sm font-semibold">
                      {new Date(selectedSubmission.submittedAt).getDate()}/
                      {new Date(selectedSubmission.submittedAt).getMonth()}/
                      {new Date(selectedSubmission.submittedAt).getFullYear()}
                    </p>
                  </div>
                  <div>
                    <h6 className="text-xs font-semibold text-black/60">
                      CLIENT IP
                    </h6>
                    <p className="text-sm font-semibold">
                      {selectedSubmission.ipAddress}
                    </p>
                  </div>
                  <div>
                    <h6 className="text-xs font-semibold text-black/60">
                      COUNTRY
                    </h6>
                    <p className="text-sm font-semibold">
                      {selectedSubmission.country}
                    </p>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-semibold">PARSED FORM FIELDS </h5>

                  <div className="rounded-lg border">
                    <div className="flex items-center justify-between p-2  border-b">
                      <p className="text-xs font-semibold text-black/60">
                        name
                      </p>
                      <p className="text-sm">{selectedSubmission.name}</p>
                    </div>
                    <div className="flex items-center justify-between p-2  border-b">
                      <p className="text-xs font-semibold text-black/60">
                        email
                      </p>
                      <p className="text-sm">{selectedSubmission.email}</p>
                    </div>
                    <div className="flex items-center justify-between p-2">
                      <p className="text-xs font-semibold text-black/60">
                        message
                      </p>
                      <p className="text-sm">{selectedSubmission.message}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-semibold">RAW JSON PAYLOAD</h5>

                  <CodeBlock
                    language="JSON"
                    code={JSON.stringify(selectedSubmission.data, null, 2)}
                  />
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default FormsPage;

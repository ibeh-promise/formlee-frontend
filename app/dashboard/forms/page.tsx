import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Plus, Search } from "lucide-react";
import * as api from "@/lib/api";
import FormCard from "@/components/FormCard";

export const forms: api.FormResponseDto[] = [
  {
    id: "a1b2c3d4-e5f6-4a1b-9c2d-1234567890ab",
    slug: "contact-us",
    name: "Contact Us Form",
    description: "General inquiry form for the landing page",
    status: "active",
    targetEmail: "support@acme.com",
    emailNotification: true,
    redirectLink: "https://acme.com/thank-you",
    userId: "user_01HZY8QK3M4N5P6Q7R8S9T0U1V",
    _count: { submissions: 142 },
    createdAt: new Date("2025-03-12T10:15:00Z"),
    updatedAt: new Date("2026-08-20T14:42:00Z"),
  },
  {
    id: "b2c3d4e5-f6a7-4b2c-8d3e-2345678901bc",
    slug: "newsletter-signup",
    name: "Newsletter Signup",
    description: null,
    status: "active",
    targetEmail: "marketing@acme.com",
    emailNotification: true,
    redirectLink: null,
    userId: "user_01HZY8QK3M4N5P6Q7R8S9T0U1V",
    _count: { submissions: 987 },
    createdAt: new Date("2025-01-05T08:00:00Z"),
    updatedAt: new Date("2026-09-01T09:30:00Z"),
  },
  {
    id: "c3d4e5f6-a7b8-4c3d-9e4f-3456789012cd",
    slug: "job-application-swe",
    name: "Software Engineer Application",
    description: "Application form for the backend engineer role",
    status: "paused",
    targetEmail: "hr@acme.com",
    emailNotification: false,
    redirectLink: "https://acme.com/careers/applied",
    userId: "user_02JXA9RL4N5O6P7Q8R9S0T1U2W",
    _count: { submissions: 56 },
    createdAt: new Date("2025-11-18T16:20:00Z"),
    updatedAt: new Date("2026-06-10T11:05:00Z"),
  },
  {
    id: "d4e5f6a7-b8c9-4d4e-0f5a-4567890123de",
    slug: "event-rsvp-2026",
    name: "Annual Conference RSVP",
    description: "RSVP form for the 2026 annual conference",
    status: "archived",
    targetEmail: "events@acme.com",
    emailNotification: false,
    redirectLink: "https://acme.com/conference/confirmed",
    userId: "user_02JXA9RL4N5O6P7Q8R9S0T1U2W",
    _count: { submissions: 312 },
    createdAt: new Date("2024-09-01T12:00:00Z"),
    updatedAt: new Date("2025-05-15T17:45:00Z"),
  },
  {
    id: "e5f6a7b8-c9d0-4e5f-1a6b-5678901234ef",
    slug: "bug-report",
    name: "Bug Report Form",
    description: "Report issues found in the dashboard app",
    status: "active",
    targetEmail: "engineering@acme.com",
    emailNotification: true,
    redirectLink: null,
    userId: "user_03KYB0SM5O6P7Q8R9S0T1U2V3X",
    _count: { submissions: 23 },
    createdAt: new Date("2026-02-28T09:10:00Z"),
    updatedAt: new Date("2026-09-15T13:20:00Z"),
  },
];

function FormsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-200 p-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-light">
            Forms
          </h1>
          <p className="text-sm sm:text-sm text-zinc-500 mt-1">
            Manage your Formlee endpoints and configure delivery targets.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Button className={"w-full"}>
            <Plus /> Create form
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between border p-3 rounded-xl bg-white shadow-sm">
        <InputGroup className="w-[25%]">
          <InputGroupInput placeholder="Search forms by name or endpoint ID.." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>

        <div className="flex items-center gap-3 ">
          <p className="text-sm text-black/60">Filter:</p>
          <Button size={"sm"}>All</Button>
          <Button size={"sm"} variant={"secondary"}>
            Active
          </Button>
          <Button size={"sm"} variant={"secondary"}>
            Paused
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {forms.map((form, idx) => (
          <FormCard key={idx} form={form} />
        ))}
      </div>
    </div>
  );
}

export default FormsPage;

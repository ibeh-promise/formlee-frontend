"use client";
import { Label } from "@/components/ui/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Loader, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SubmitEvent, useState } from "react";
import { toast } from "sonner";
import * as api from "@/lib/api";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleSendRecoveryLink = async (e: SubmitEvent) => {
    e.preventDefault();
    if (!email) return toast("Fill in all fields");
    setSubmitting(true);

    const res = await api.auth.authControllerRequestResetPasswordLinkV1({
      body: { email },
    });

    console.log(res);
    if (res.error) {
      toast.error("Unable to submit", {
        description: res.error.message,
      });
    } else {
      toast.success("Login successful", { description: res.data.message });
    }

    setSubmitting(false);
  };

  return (
    <div className="flex  items-center justify-center py-20 bg-[#FAFAFA]/90">
      <form
        className="bg-white p-10 rounded-2xl border shadow space-y-7"
        onSubmit={handleSendRecoveryLink}
      >
        <div className="flex flex-col items-center gap-y-4">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white shadow-xs group-hover:bg-zinc-800 transition-colors">
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="4" />
              <path d="m8 12 3 3 5-5" />
            </svg>
          </div>

          <div className="space-y-1 text-center">
            <h4 className="text-2xl font-bold">Recovery Your Account</h4>
            <p className="text-sm text-black/60">
              We&apos;ll send a recovery link to your email
            </p>
          </div>
        </div>

        <div className="w-full space-y-2">
          <Label htmlFor="email">EMAIL ADDRESS</Label>
          <InputGroup>
            <InputGroupInput
              placeholder="name@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <InputGroupAddon>
              <Mail />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <Button className={"w-full"} type="submit" disabled={submitting}>
          {submitting && <Loader className="animate-spin" />}{" "}
          <span>Send Link</span>
        </Button>
      </form>
    </div>
  );
}

export default Login;

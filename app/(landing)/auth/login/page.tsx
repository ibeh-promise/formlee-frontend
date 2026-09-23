"use client";
import { Label } from "@/components/ui/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ArrowLeft, ArrowRight, Loader, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SubmitEvent, useState } from "react";
import { toast } from "sonner";
import * as api from "@/api";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: SubmitEvent) => {
    e.preventDefault();
    if (!email || !password) return toast("Fill in all fields");
    setSubmitting(true);

    const res = await api.auth.authControllerLoginV1({
      body: { email, password },
    });

    if (res.error) {
      toast.error("Unable to submit", {
        description: res.error.message,
      });
    } else {
      toast.success("Login successful", { description: res.data.message });
      localStorage.setItem("authToken", res.data.access_token);
      console.log(res.data);
      router.push("/dashboard");
    }

    setSubmitting(false);
  };

  return (
    <div className="flex  items-center justify-center py-20 bg-[#FAFAFA]/90">
      <form
        className="bg-white p-10 rounded-2xl border shadow space-y-7"
        onSubmit={handleLogin}
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
            <h4 className="text-2xl font-bold">Welcome back to Formlee</h4>
            <p className="text-sm text-black/60">
              Signin to access your forms and submission inbox
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
        <div className="w-full space-y-2">
          <Label htmlFor="email">PASSWORD</Label>
          <InputGroup>
            <InputGroupInput
              placeholder="Enter password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <InputGroupAddon>
              <Lock />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <Button className={"w-full"} type="submit" disabled={submitting}>
          {submitting && <Loader className="animate-spin" />}{" "}
          <span>Login In</span>
        </Button>

        <hr />

        <p className="text-sm text-center text-black/60">
          Don&apos;t have an account?{" "}
          <Link href={"/auth/signup"} className="text-black">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

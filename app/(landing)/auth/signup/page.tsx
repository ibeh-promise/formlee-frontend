import { Label } from "@/components/ui/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {  ArrowRight, Lock, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function login() {
  return (
    <div className="flex  items-center justify-center py-20 bg-[#FAFAFA]/90">
      <div className="bg-white p-10 rounded-2xl border shadow space-y-7">
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
            <h4 className="text-2xl font-bold">Create your Formlee account</h4>
            <p className="text-sm text-black/60">
              Start receiving form submission in under a minute
            </p>
          </div>
        </div>

        <div className="w-full space-y-2">
          <Label htmlFor="email">EMAIL ADDRESS</Label>
          <InputGroup>
            <InputGroupInput placeholder="John Doe" type="text" />
            <InputGroupAddon>
              <User />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="w-full space-y-2">
          <Label htmlFor="email">EMAIL ADDRESS</Label>
          <InputGroup>
            <InputGroupInput placeholder="name@example.com" type="email" />
            <InputGroupAddon>
              <Mail />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="w-full space-y-2">
          <Label htmlFor="email">PASSWORD</Label>
          <InputGroup>
            <InputGroupInput placeholder="Enter password" type="password" />
            <InputGroupAddon>
              <Lock />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <Button className={"w-full"}>
          <span>Sign up</span> <ArrowRight />
        </Button>

        <hr />

        <p className="text-sm text-center text-black/60">
          Already have an account?{" "}
          <Link href={"/auth/login"} className="text-black">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default login;

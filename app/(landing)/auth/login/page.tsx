import { BookOpen, Github } from "lucide-react";

function login() {
  return (
    <div>
      <div>
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

        <h4>Welcome back to Formlee</h4>
        <p>Signin to access your forms and submission inbox</p>

        <div>
          <label htmlFor="email">Email Address</label>
        </div>
      </div>
    </div>
  );
}

export default login;

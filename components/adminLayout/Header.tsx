import {useState} from "react"
import { Input } from "../ui/input";
import { ChevronRight, 
  Search,
  ShieldAlert,
  Headphones,
  CheckCircle2,
  AlertTriangle,
  Users,
  Activity,
  FileCode,
  ArrowLeft,
  Bell,
  ExternalLink,
  RefreshCw,
  LogOut,
  Menu,
  X,
  Server
 } from "lucide-react";
import { Button } from "../ui/button";

export default function Header() {
  
  const [ searchQuery, setSearchQuery ] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-40 h-[65px] bg-white border-b">
      <div className="h-full flex items-center justify-between px-8">
        <div className="flex items-center space-x-2 text-xs text-zinc-500 font-medium">
          <span className="text-zinc-600">Formlee</span>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-zinc-900 font-semibold capitalize">Overview</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative w-64">
            <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-2.5" />
            <Input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-hidden focus:ring-zinc-900 focus:bg-white text-zinc-900 placeholder:text-zinc-400 transition-all font-sans"
            />
          </div>

          <Button title="refresh" className="bg-zinc-200 p-1.5 text-zinc-500 hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer">
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>

      </div>
    </header>
  );
}

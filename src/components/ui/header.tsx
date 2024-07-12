import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@/components/ui/icons";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-card px-6 py-4 shadow">
      <Link href="/" className="text-2xl font-bold" prefetch={false}>
        Kanban
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoonIcon className="h-6 w-6" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <div className="flex items-center justify-between">
              <span>Light</span>
              <SunIcon className="h-4 w-4" />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center justify-between">
              <span>Dark</span>
              <MoonIcon className="h-4 w-4" />
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

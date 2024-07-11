import Link from "next/link";
import { KanbanIcon, UserIcon, LogOutIcon } from "./icons";

export default function Nav() {
  return (
    <nav className="bg-card p-4 shadow">
      <div className="space-y-4">
        <Link
          href="#"
          className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
          prefetch={false}
        >
          <KanbanIcon className="h-5 w-5" />
          <span>Kanban</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
          prefetch={false}
        >
          <UserIcon className="h-5 w-5" />
          <span>Profile</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
          prefetch={false}
        >
          <LogOutIcon className="h-5 w-5" />
          <span>Logout</span>
        </Link>
      </div>
    </nav>
  );
}

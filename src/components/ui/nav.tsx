"use client"

import Link from "next/link";
import { KanbanIcon, UserIcon, LogOutIcon } from "./icons";
import { ModalLogout } from "./modal-logout"
import { useState } from "react";

export default function Nav() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <>
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
          <div
            className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted cursor-pointer"
            onClick={toggleModal}
          >
            <LogOutIcon className="h-5 w-5" />
            <span>Logout</span>
          </div>
        </div>
      </nav>
      {modal && (
        <div className="fixed inset-0 bg-opacity-30 bg-background-opacity flex justify-center items-center">
          <ModalLogout onClose={toggleModal}/>
        </div>
      )}
    </>
  );
}

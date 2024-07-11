import { Profile } from "@/components/component/profile";
import { RegisterForm } from "@/components/component/register-form";
import { LoginForm } from "@/components/component/login-form";
import { KanbanBody } from "@/components/component/kanban-body";
import Image from "next/image";
import { WelcomePage } from "@/components/component/welcome-page";

export default function Home() {
  return (
    <main>
      <KanbanBody></KanbanBody>
    </main>
  );
}

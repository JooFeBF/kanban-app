import {WelcomeMessage} from "@/components/component/login-form"

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex">
      <WelcomeMessage></WelcomeMessage>
    </main>
  );
}

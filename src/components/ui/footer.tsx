import Link from "next/link";
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "./icons"

export default function Footer() {
  return (
    <footer className="bg-card px-6 py-4 shadow">
      <div className="flex justify-between items-center">
        <span className="text-muted-foreground">
          &copy; 2024 Kanba. All rights reserved.
        </span>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Facebook" prefetch={false}>
            <FacebookIcon className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="Twitter" prefetch={false}>
            <TwitterIcon className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="Instagram" prefetch={false}>
            <InstagramIcon className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="LinkedIn" prefetch={false}>
            <LinkedinIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

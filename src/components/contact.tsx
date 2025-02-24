"use client";

import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { Linkedin, Github, Mail } from "lucide-react/icons";

import { useIsMobile } from "@/hooks/useIsMobile";

export function Contact() {
  const isMobile = useIsMobile();

  return (
    <div className="px-6 space-y-6">
      <h2 className="tracking-tight mb-14 font-medium">Contact</h2>
      {isMobile ? (
        <SocialButtons />
      ) : (
        <p className="leading-8">
          Reach out to me on{" "}
          <Link
            className="underline underline-offset-4 decoration-1"
            href={"https://www.linkedin.com/in/pierrelouis-l%C3%A9toquart"}
          >
            LinkedIn
          </Link>{" "}
          even if it&apos;s just to say hi! For a more formal discussion, you
          can also send me an email at{" "}
          <Link
            className="underline underline-offset-4 decoration-1"
            href="mailto:pierrelouislet@gmail.com"
          >
            pierrelouislet@gmail.com
          </Link>
          !
        </p>
      )}
    </div>
  );
}

export function SocialButtons() {
  return (
    <div className="flex items-center gap-3">
      <Slot className="size-14 rounded-lg bg-[var(--sand-4)] border border-[var(--sand-7)] grid place-items-center">
        <Link href={"#"}>
          <Github className="size-[1.2rem]" />
        </Link>
      </Slot>

      <Slot className="size-14 rounded-lg bg-[var(--sand-4)] border border-[var(--sand-7)] grid place-items-center">
        <Link href={"#"}>
          <Linkedin className="size-[1.2rem]" />
        </Link>
      </Slot>

      <Slot className="size-14 rounded-lg bg-[var(--sand-4)] border border-[var(--sand-7)] grid place-items-center">
        <Link href={"#"}>
          <Mail className="size-[1.2rem]" />
        </Link>
      </Slot>
    </div>
  );
}

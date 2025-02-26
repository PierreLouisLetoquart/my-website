import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function AppFooter() {
  return (
    <footer className="w-full h-16 flex items-center justify-between px-6">
      <p className="text-sm font-light text-muted-foreground">
        reproduction of{" "}
        <Link
          className="underline underline-offset-2"
          href={"https://emilkowal.ski/"}
        >
          emilkowal.ski
        </Link>{" "}
        by{" "}
        <Link
          className="underline underline-offset-2"
          href={"https://github.com/PierreLouisLetoquart"}
        >
          @pierrelouis
        </Link>
      </p>
      <ModeToggle />
    </footer>
  );
}

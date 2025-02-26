import { AppFooter } from "./app-footer";

export function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full px-4">
      <section className="w-full max-w-[680px] mx-auto">
        {children}
        <AppFooter />
      </section>
    </main>
  );
}

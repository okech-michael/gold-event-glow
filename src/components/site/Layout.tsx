import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative grain min-h-screen overflow-hidden">
      <Nav />
      <main>{children}</main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = { title: "A Quiet Day in Seoul", description: "A slower day in Seoul with a local host." };
export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

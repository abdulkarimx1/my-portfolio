import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = { title: "Abdulkarim Bayassi — Visual Designer", description: "Portfolio of Abdulkarim Bayassi, a visual designer working across branding, campaigns, digital and print." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}<Analytics/></body></html>; }

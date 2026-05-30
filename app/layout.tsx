import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohan Thakur | Data Engineer & Automation Developer",

  description:
    "Data Engineer & Automation Developer specializing in enterprise automation, workflow optimization, backend development and scalable applications.",

  keywords: [
    "Rohan Thakur",
    "Data Engineer",
    "Automation Developer",
    "Python Developer",
    "React Developer",
    "Node.js",
    "IBM Sterling",
    "Oracle Cloud",
    "Portfolio",
  ],

  authors: [
    {
      name: "Rohan Thakur",
    },
  ],

  creator: "Rohan Thakur",

  openGraph: {
    title:
      "Rohan Thakur | Data Engineer & Automation Developer",

    description:
      "Building scalable automation solutions, enterprise workflows and modern applications.",

    siteName: "Rohan Thakur Portfolio",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riverland Hotel | Luxury Accommodation",
  description: "Experience luxury at Riverland Hotel - Premium accommodations with world-class amenities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-light">
        {children}
      </body>
    </html>
  );
}

import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Geoff Vrijmoet | Professional Podcast Editor",
  description: "Professional podcast editing services by Geoff Vrijmoet. High-quality audio editing, mixing, and production for podcasters.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

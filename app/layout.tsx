import { Quicksand } from "next/font/google"
import "./globals.css"
import { Footer } from '@/components/layout/footer'
import SessionProvider from '@/components/providers/SessionProvider'

const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
})

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
      <body className={quicksand.className}>
        <SessionProvider>
          {children}
        </SessionProvider>
        <Footer />
      </body>
    </html>
  )
}

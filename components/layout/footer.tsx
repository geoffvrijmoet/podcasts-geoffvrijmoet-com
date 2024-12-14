import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Geoff Vrijmoet. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="hover:text-blue-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 
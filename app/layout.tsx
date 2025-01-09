import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Wedding Company',
  description: 'Create your perfect wedding proposal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}


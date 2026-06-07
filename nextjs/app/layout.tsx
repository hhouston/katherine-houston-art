import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Katherine Houston — Abstract Painter', template: '%s · Katherine Houston' },
  description: 'Katherine Houston is a Houston-based abstract painter working in reverse paint on Plexiglas. Her luminous paintings and Cube Series sculptures are available through galleries and direct inquiry.',
  openGraph: {
    siteName: 'Katherine Houston Art',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

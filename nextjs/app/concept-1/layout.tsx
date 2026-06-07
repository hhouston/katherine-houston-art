import type { Metadata } from 'next'
import C1Nav from '@/components/concept-1/Nav'
import C1Footer from '@/components/concept-1/Footer'

export const metadata: Metadata = {
  title: { template: '%s · Katherine Houston', default: 'Katherine Houston — Abstract Painter' },
}

export default function Concept1Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      <C1Nav />
      {children}
      <C1Footer />
    </>
  )
}

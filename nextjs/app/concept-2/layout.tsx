import type { Metadata } from 'next'
import Nav from '@/components/concept-2/Nav'
import Footer from '@/components/concept-2/Footer'

export const metadata: Metadata = {
  title: { default: 'Katherine Houston — Immersive Dark', template: '%s · Katherine Houston' },
  description: 'Katherine Houston is a Houston-based abstract painter specializing in reverse painting on Plexiglas.',
}

export default function Concept2Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <Nav />
      <main style={{ paddingTop: 72, background: '#0E0E0C', minHeight: '100vh', color: '#F0EDE8' }}>
        {children}
      </main>
      <Footer />
    </>
  )
}

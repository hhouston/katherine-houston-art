import type { Metadata } from 'next'
import Nav from '@/components/concept-3/Nav'
import Footer from '@/components/concept-3/Footer'

export const metadata: Metadata = {
  title: { default: 'Katherine Houston — The Artisan\'s Story', template: '%s · Katherine Houston' },
  description: 'Katherine Houston is a Houston-based abstract painter specializing in reverse painting on Plexiglas.',
}

export default function Concept3Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Source+Sans+3:wght@300;400;600&display=swap"
        rel="stylesheet"
      />
      <Nav />
      <main style={{ paddingTop: 72, background: '#F5F0E8', minHeight: '100vh', color: '#1E1810' }}>
        {children}
      </main>
      <Footer />
    </>
  )
}

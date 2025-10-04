// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css' // CRITICAL: This line must be here
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import Footer from '@/components/Footer'
import Section from '@/components/Section'

// This loads the Inter font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // We make it a CSS variable
})

export const metadata: Metadata = {
  title: 'CEMOS - Center for Emergent Molecular Optoelectronics',
  description: 'Pioneering the Future of Polymer Electronics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* CRITICAL: The font variable and 'font-sans' must be on the body tag */}
      <body className={`${inter.variable} font-sans bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>
            <Section>
              {children}
            </Section>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
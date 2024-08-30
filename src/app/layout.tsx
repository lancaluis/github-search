import '../styles/globals.css'
import 'react-loading-skeleton/dist/skeleton.css'

import { Poppins } from 'next/font/google'

import { Header } from '@/components/header'
const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

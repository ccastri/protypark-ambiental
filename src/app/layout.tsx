import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import ChatBubble from './_components/ChatBubble'
import Header from './_components/Header'
import Footer from './_components/Footer'

const raleway = Raleway({ subsets: ['latin'] })
// Raleway
export const metadata: Metadata = {
  title: 'C&C Accion Legal SAS',
  description: 'Made with <3 by ccastri',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
      <Header/>
        
        {children}
           <ChatBubble />
        <Footer/>
      </body>
    </html>
  )
}

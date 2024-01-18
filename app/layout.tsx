import { Inter } from 'next/font/google'
import './globals.css'
import { Main } from './components/ui'
import { NextAuthProvider } from './context/clientProvider'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      
      <body className={inter.className} >
        <NextAuthProvider >
        <div>
          <div className='centerdiv'>
          <Main />
        {children}
          </div>
        </div>
        </NextAuthProvider>
        </body>

    </html>
  )
}

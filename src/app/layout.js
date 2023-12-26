import Navbar from '@/components/navbar/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/footer'
import { ThemeContextProvider } from '@/context/Themecontext'
import ThemeProviders from '@/providers/ThemeProviders'
import AuthProvider from '@/providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WonderWrit.',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <ThemeContextProvider >
          <ThemeProviders>
        <AuthProvider>

        <div className='container'>
          <div className='wrapper'>
            <Navbar/>

          {children}
          <Footer/>
          </div>
          </div>
        </AuthProvider>
          </ThemeProviders>
      </ThemeContextProvider>
          </body>
          
    </html>
  )
}

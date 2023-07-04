import { Header } from '@/components/Header'

import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import { Roboto_Flex as Roboto } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata = {
  title: 'Cafeteria',
  description: 'Website responsivo para divulgação de uma cafeteria fictícia em São Paulo.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <Header />
        {children}
        <ToastContainer autoClose={2000} />
      </body>
    </html>
  )
}

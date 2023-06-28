import React from 'react';
import 'swiper/css';
import './globals.css'
import Footer from './footer/Footer'
import Header from './header/Header'
export const metadata = {
  title: 'Properties Luis Dev',
  description: 'Esto es una muestra de mi portafolio, luis Dev ;) .',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

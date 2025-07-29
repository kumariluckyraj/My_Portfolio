import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Kumari Lucky Raj',
  description: 'Portfolio of Kumari Lucky Raj',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= " font-sans">
        <Navbar />

        <main >{children}</main>
        <Footer />
      </body>
    </html>
  )
}

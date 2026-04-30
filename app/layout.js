import './globals.css'

export const metadata = {
  title: 'Kumari Lucky Raj',
  description: 'Portfolio of Kumari Lucky Raj',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#050810', fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
        <main>{children}</main>
      </body>
    </html>
  )
}
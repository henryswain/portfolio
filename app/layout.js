import { Inter } from "next/font/google";
import "./globals.css";

export const viewport = {
  viewport: 'width=device-width, initial-scale=1'
}

const inter = Inter({
  subsets: ['latin']
})


export default function DashboardLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {/* Layout UI */}

        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  )
}

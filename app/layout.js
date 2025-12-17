import { Inter } from "next/font/google";
import "./globals.css";

export const viewport = {
  viewport: 'width=device-width, initial-scale=1'
}

const inter = Inter({
  subsets: ['latin']
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}

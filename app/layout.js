import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const backgroundGradient ={
  background: "#020024",
  background: "linear-gradient(150deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 50%, rgba(0, 212, 255, 1) 100%)",
  height: "100vh"
}

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}

        {/* Place children where you want to render a page or nested layout */}
        <main style={backgroundGradient}>{children}</main>
      </body>
    </html>
  )
}

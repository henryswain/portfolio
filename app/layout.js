import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* added google fonts import */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      </head>
      <body>
        {/* Layout UI */}

        {/* Place children where you want to render a page or nested layout */}
        <main className="background-gradient">{children}</main>
      </body>
    </html>
  )
}

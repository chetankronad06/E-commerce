import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "E-commerce-admin",
    description: "E-commerce website",
  };

const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <html lang="en">
        <head>
            <title>Studio</title>
        </head>
        <body className="bg-gray-100">
            {children}
        </body>
    </html>
  )
}

export default RootLayout

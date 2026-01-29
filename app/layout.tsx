import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tech Blog | Latest Technology Articles",
  description:
    "Read the latest tech articles, tutorials, and insights on modern web development.",
  openGraph: {
    title: "Tech Blog",
    description: "Latest technology articles and tutorials",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Blog",
    description: "Latest technology articles",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}

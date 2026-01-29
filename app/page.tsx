import { fetchBlogs } from "@/app/lib/fetchBlogs"
import Header from "@/app/components/Header"
import Hero from "@/app/components/Hero"
import ArticleGrid from "@/app/components/ArticleGrid"
import Footer from "@/app/components/Footer"


export default async function Home() {
  const blogs = await fetchBlogs()

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4">
        <Hero />
        <ArticleGrid blogs={blogs} />
      </main>

      <Footer />
    </>
  )
}

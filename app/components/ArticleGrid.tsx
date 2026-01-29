"use client"

import { useState } from "react"
import { BlogPost } from "@/app/types/blog"

import SearchBar from "./SearchBar"
import CategoryFilter from "./CategoryFilter"
import ArticleCard from "./ArticleCard"
import ArticleModal from "./ArticleModal"


export default function ArticleGrid({ blogs }: { blogs: BlogPost[] }) {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [selected, setSelected] = useState<BlogPost | null>(null)

  const categories = ["All", ...new Set(blogs.map(b => b.category))]

  const filtered = blogs.filter(blog => {
    const matchSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase()) ||
      blog.content_text.toLowerCase().includes(search.toLowerCase())

    const matchCategory =
      category === "All" || blog.category === category

    return matchSearch && matchCategory
  })

  return (
    <section>
      <SearchBar value={search} onChange={setSearch} count={filtered.length} />
      <CategoryFilter
        categories={categories}
        active={category}
        onChange={setCategory}
      />

      {filtered.length === 0 && (
        <p className="mt-6 text-gray-500">No results found.</p>
      )}

      <div className="grid gap-6 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(blog => (
          <ArticleCard key={blog.id} blog={blog} onClick={setSelected} />
        ))}
      </div>

      {selected && (
        <ArticleModal blog={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}

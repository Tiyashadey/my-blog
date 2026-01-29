"use client"

import { useEffect } from "react"
import { BlogPost } from "../types/blog"

export default function ArticleModal({
  blog,
  onClose,
}: {
  blog: BlogPost
  onClose: () => void
}) {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", esc)
    return () => window.removeEventListener("keydown", esc)
  }, [onClose])

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="bg-white text-black max-w-2xl w-full p-6 rounded-lg overflow-y-auto max-h-[90vh]"
      >
        <button onClick={onClose} className="float-right text-xl text-black">
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-2 text-black">
          {blog.title}
        </h2>

        <div
          className="text-black prose prose-neutral max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content_html }}
        />
      </div>
    </div>
  )
}

import Image from "next/image"
import { BlogPost } from "../types/blog"

export default function ArticleCard({
  blog,
  onClick,
}: {
  blog: BlogPost
  onClick: (b: BlogPost) => void
}) {
  return (
    <article
      tabIndex={0}
      onClick={() => onClick(blog)}
      className="cursor-pointer border rounded-lg overflow-hidden hover:shadow-lg focus:outline-none"
    >
      <Image
        src={blog.photo_url}
        alt={blog.title}
        width={400}
        height={200}
        className="object-cover"
        loading="lazy"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{blog.title}</h3>
        <p className="text-sm text-gray-600 mt-1">
          {blog.description}
        </p>

        <time className="text-xs text-gray-400">
          {new Date(blog.created_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </time>
      </div>
    </article>
  )
}

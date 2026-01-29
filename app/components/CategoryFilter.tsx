"use client"

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: {
  categories: string[]
  active: string
  onChange: (c: string) => void
}) {
  return (
    <div className="flex gap-2 flex-wrap mt-4">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-3 py-1 rounded text-sm border ${
            active === cat
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

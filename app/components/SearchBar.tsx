"use client"

export default function SearchBar({
  value,
  onChange,
  count,
}: {
  value: string
  onChange: (v: string) => void
  count: number
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      <input
        type="text"
        placeholder="Search articles..."
        value={value}
        onChange={e => onChange(e.target.value)}
        className="border px-4 py-2 rounded w-full sm:w-1/2"
      />
      <p className="text-sm text-gray-500">
        {count} results found
      </p>
    </div>
  )
}

import React, { useMemo, useState } from 'react'
import { useFetch } from '../hooks/useFetch'

type Course = {
  title: string
  image: string
  href: string
  date: string
  blurb: string
  stats: { read: string; views: string; comments: string }
}

export default function CoursePage(): JSX.Element {
  const [popupUrl, setPopupUrl] = useState<string | null>(null)
  const { data, loading, error } = useFetch<Course[]>('/data/courses.json')

  const embedUrl = useMemo(() => {
    if (!popupUrl) return null
    return popupUrl.replace('watch?v=', 'embed/')
  }, [popupUrl])

  return (
    <div className="min-h-[calc(100vh-120px)] bg-gradient-to-br from-yellow-100 to-amber-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-3xl font-extrabold text-gray-900">Featured Courses</h1>
        <p className="mt-1 text-gray-600">Click a card to watch the course intro.</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {(data ?? []).map((c) => (
            <div key={c.title} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">
              <a href="#" onClick={(e) => { e.preventDefault(); setPopupUrl(c.href) }} className="block">
                <img src={c.image} alt={c.title} className="h-44 w-full rounded-xl object-cover" />
              </a>
              <div className="mt-3">
                <div className="text-xs text-gray-500">{c.date}</div>
                <h3 className="mt-1 text-lg font-bold text-gray-900">{c.title}</h3>
                <p className="mt-1 text-sm text-gray-700">{c.blurb}</p>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 rounded-xl bg-gray-50 p-2 text-center text-xs font-semibold text-gray-700">
                <div className="rounded-lg bg-white p-2">{c.stats.read}<div className="text-[10px] font-normal text-gray-500">read</div></div>
                <div className="rounded-lg bg-white p-2">{c.stats.views}<div className="text-[10px] font-normal text-gray-500">views</div></div>
                <div className="rounded-lg bg-white p-2">{c.stats.comments}<div className="text-[10px] font-normal text-gray-500">comments</div></div>
              </div>
            </div>
          ))}
        </div>
        {loading && <div className="mt-6 text-sm text-gray-500">Loading...</div>}
        {error && <div className="mt-6 text-sm text-red-600">Failed to load courses: {error}</div>}
      </div>

      {embedUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setPopupUrl(null)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button className="absolute right-3 top-2 rounded-full bg-white/20 px-2 text-2xl text-white hover:bg-white/30" onClick={() => setPopupUrl(null)}>&times;</button>
            <iframe title="course-video" src={embedUrl} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="h-full w-full border-0" />
            <div className="absolute bottom-2 right-2">
              <a href={popupUrl!} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-red-600/90 px-3 py-2 text-white text-xs font-semibold hover:bg-red-600">
                🔗 Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}



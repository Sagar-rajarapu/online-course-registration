import React from 'react'
import { useFetch } from '../hooks/useFetch'

export default function UpdatesPage(): JSX.Element {
  const { data, loading, error } = useFetch<Array<{title:string;text:string;image:string;time:string}>>('/data/updates.json')
  return (
    <div className="min-h-[calc(100vh-120px)] bg-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-2xl font-extrabold text-gray-900">Notifications</h1>
        <div className="mt-4 space-y-3">
          {(data ?? []).map((n) => (
            <div className="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm" key={n.title}>
              <div className="flex items-center gap-3">
                <img src="/logo.PNG" alt="user" className="h-10 w-10 rounded-full" />
                <div>
                  <div className="text-sm"><b>{n.title}</b> {n.text}</div>
                  <div className="text-xs text-gray-500">{n.time}</div>
                </div>
              </div>
              <img src={n.image} alt="Feature" className="h-16 w-24 rounded-lg object-cover" />
            </div>
          ))}
          {loading && <div className="text-sm text-gray-500">Loading...</div>}
          {error && <div className="text-sm text-red-600">Failed to load updates: {error}</div>}
        </div>
      </div>
    </div>
  )
}



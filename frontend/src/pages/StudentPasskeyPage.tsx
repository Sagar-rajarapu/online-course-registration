import React, { useState } from 'react'

export default function StudentPasskeyPage(): JSX.Element {
  const [mode, setMode] = useState<'email' | 'phone'>('email')

  return (
    <div className="bg-gradient-to-br from-sky-300 to-indigo-400 py-10">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
        <div className="flex items-center gap-3">
          <img src="/student.png" alt="student" className="h-10 w-10" />
          <div className="text-lg font-bold">Student Passkey</div>
        </div>
        <div className="mt-4 flex rounded-xl bg-slate-100 p-1 text-sm font-semibold">
          <button className={`flex-1 rounded-lg px-3 py-2 ${mode === 'email' ? 'bg-white shadow' : ''}`} onClick={() => setMode('email')}>Email</button>
          <button className={`flex-1 rounded-lg px-3 py-2 ${mode === 'phone' ? 'bg-white shadow' : ''}`} onClick={() => setMode('phone')}>Phone</button>
        </div>
        <div className="mt-4 space-y-3">
          {mode === 'email' ? (
            <form onSubmit={(e) => { e.preventDefault(); alert('OTP sent to email (demo)') }}>
              <div>
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input type="email" placeholder="you@example.com" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:border-blue-500 focus:ring-4" />
              </div>
              <div className="flex items-center gap-2">
                <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700">Get Email</button>
              </div>
              <div className="mt-3">
                <label className="text-sm font-semibold text-gray-700">Enter the OTP</label>
                <input type="text" inputMode="numeric" pattern="[0-9]{4,6}" placeholder="1234" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:border-blue-500 focus:ring-4" />
              </div>
              <div className="mt-3">
                <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700" type="submit">Submit</button>
              </div>
            </form>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); alert('OTP sent via SMS (demo)') }}>
              <div>
                <label className="text-sm font-semibold text-gray-700">Phone number</label>
                <input type="tel" pattern="[0-9]{10}" placeholder="9876543210" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:border-blue-500 focus:ring-4" />
              </div>
              <div className="flex items-center gap-2">
                <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700">Get SMS</button>
              </div>
              <div className="mt-3">
                <label className="text-sm font-semibold text-gray-700">Enter the OTP</label>
                <input type="text" inputMode="numeric" pattern="[0-9]{4,6}" placeholder="1234" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:border-blue-500 focus:ring-4" />
              </div>
              <div className="mt-3">
                <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700" type="submit">Submit</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}



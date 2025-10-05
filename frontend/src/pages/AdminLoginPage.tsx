import React from 'react'
// styles are consolidated in app.css

export default function AdminLoginPage(): JSX.Element {
  return (
    <div className="bg-slate-100 py-10">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
        <div className="flex flex-col items-center">
          <img src="/admin.png" alt="admin" className="h-12 w-12" />
          <h2 className="mt-2 text-xl font-extrabold text-gray-900">Admin Login</h2>
        </div>
        <form onSubmit={(e) => { e.preventDefault() }} className="mt-4 space-y-4">
          <div>
            <label htmlFor="username" className="text-sm font-semibold text-gray-700">Username</label>
            <input type="text" id="username" name="username" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:border-blue-500 focus:ring-4" />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-semibold text-gray-700">Password</label>
            <input type="password" id="password" name="password" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:border-blue-500 focus:ring-4" />
          </div>
          <div className="flex items-center gap-3">
            <button type="submit" className="rounded-lg bg-blue-600 px-5 py-2 text-white font-semibold hover:bg-blue-700">Login</button>
            <button type="reset" className="rounded-lg bg-slate-200 px-5 py-2 text-gray-800 font-semibold hover:bg-slate-300">Reset</button>
          </div>
        </form>
      </div>
    </div>
  )
}



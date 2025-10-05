import React from 'react'
// styles are consolidated in app.css
import { Link } from 'react-router-dom'

export default function LoginLandingPage(): JSX.Element {
  return (
    <div className="bg-gradient-to-br from-sky-400 to-indigo-500 text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Choose your role</h1>
        <p className="mt-3 text-white/90">At <Link to="/" className="font-semibold underline decoration-white/50">Learn Without Fees</Link> you can sign in as a student, faculty, or admin.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[{to:'/student/login',src:'/student.png',label:'Student',desc:'Learn and track progress'},{to:'/faculty/login',src:'/faculty.png',label:'Faculty',desc:'Teach and manage classes'},{to:'/admin/login',src:'/admin.png',label:'Admin',desc:'Oversee the platform'}].map(card=> (
            <Link to={card.to} key={card.label} className="group rounded-2xl bg-white text-gray-900 p-6 shadow-lg ring-1 ring-black/5 hover:shadow-xl transition">
              <div className="flex flex-col items-center">
                <img src={card.src} alt={card.label} className="h-24 w-24" />
                <div className="mt-3 text-lg font-bold">{card.label}</div>
                <div className="text-sm text-gray-600">{card.desc}</div>
                <span className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white text-sm font-semibold group-hover:bg-blue-700">Continue</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}



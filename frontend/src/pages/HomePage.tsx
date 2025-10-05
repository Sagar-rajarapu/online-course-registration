import React from 'react'
import { Link } from 'react-router-dom'
// styles are consolidated in app.css

export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-[calc(100vh-120px)] bg-gradient-to-br from-sky-300 via-violet-300 to-fuchsia-300">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-8 md:pt-24 md:pb-14">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-black/5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              100% Free & Accessible
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Learn Without Fees
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl leading-relaxed text-gray-700">
              Master in-demand skills with curated courses, hands-on projects, and a community that lifts you up.
              Your journey to tech confidence starts today.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/course" className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition">
                Explore Courses
              </Link>
              <Link to="/login" className="inline-flex items-center gap-2 rounded-2xl bg-white/85 px-6 py-3 text-gray-900 font-semibold ring-1 ring-gray-200 hover:bg-white transition">
                Get Started
              </Link>
            </div>
            <p className="mt-5 text-sm text-gray-600">
              No fees. No ads. Just learning.
            </p>
          </div>

          {/* Hero illustration row */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-90">
            {["/html_tutorial.jpg","/css_tutorial.jpg","/javascript_tutorial.jpg","/mysql_tutorial.jpg"].map((src) => (
              <div key={src} className="rounded-xl bg-white/70 p-3 ring-1 ring-black/5 shadow-sm backdrop-blur">
                <img src={src} alt="course" className="h-28 w-full object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Curated Curriculum', desc: 'Carefully selected content to maximize your time-to-skill.', icon: '🎯' },
              { title: 'Hands-on Learning', desc: 'Projects and practice that stick—learn by building.', icon: '🛠️' },
              { title: 'Community Support', desc: 'Progress with peers and mentors cheering you on.', icon: '🤝' },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="text-2xl">{f.icon}</div>
                <h3 className="mt-3 text-lg font-bold text-gray-900">{f.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { k: '50K+', v: 'Learners' },
              { k: '100+', v: 'Courses' },
              { k: '4.8/5', v: 'Avg Rating' },
              { k: '0$', v: 'Cost' },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl bg-white/80 p-6 ring-1 ring-gray-200 shadow-sm">
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900">{s.k}</div>
                <div className="mt-1 text-sm text-gray-600">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white/80">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: 'The content is so clear and practical. Landed my first internship!', a: 'Anita • Student' },
              { q: 'Exactly what my class needed—structured, modern, and free.', a: 'Rahul • Faculty' },
              { q: 'Love the projects—built a portfolio in weeks, not months.', a: 'Sara • Learner' },
            ].map((t, i) => (
              <figure key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <blockquote className="text-gray-700">“{t.q}”</blockquote>
                <figcaption className="mt-3 text-sm font-semibold text-gray-900">{t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-3xl text-center px-6">
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 px-8 py-10 text-white shadow-xl">
            <h2 className="text-2xl md:text-3xl font-extrabold">Start your learning journey today</h2>
            <p className="mt-2 text-blue-100">Join thousands leveling up their skills for free.</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link to="/course" className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-blue-700 font-semibold shadow hover:bg-blue-50">Browse Courses</Link>
              <Link to="/login" className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-6 py-3 text-white font-semibold ring-1 ring-white/30 hover:bg-blue-400">Create Account</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



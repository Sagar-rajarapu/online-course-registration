import React from 'react'
// styles are consolidated in app.css

const sagar = {
  name: 'RAJARAPU SAGAR',
  role: 'TEAM LEADER',
  image: 'https://media.licdn.com/dms/image/v2/D5603AQEBNdxsiE69PA/profile-displayphoto-shrink_800_800/B56ZYvJhnbGcAg-/0/1744547753841?e=1762387200&v=beta&t=kCHD_9j4OS85RI8hqDb8R15Fpbx2jXrwVtT5-ZtjG8A',
  instagram: 'https://www.instagram.com/wanderer_sagar_/',
  linkedin: 'https://www.linkedin.com/in/sagarrajarapu/',
  github: 'https://github.com/Sagar-rajarapu',
  whatsapp: 'https://wa.me/8639488431'
}

export default function AboutPage(): JSX.Element {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-[calc(100vh-120px)]">
      <section className="mx-auto max-w-4xl px-6 py-10">
        {/* Profile Card */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="absolute right-[-40px] top-[-40px] h-48 w-48 rounded-full bg-blue-100" />
          <div className="absolute left-[-30px] bottom-[-30px] h-32 w-32 rounded-full bg-indigo-100" />

          <div className="relative grid gap-6 p-6 sm:grid-cols-[160px_1fr] sm:p-8">
            <div className="flex flex-col items-center sm:items-start">
              <img src={sagar.image} alt={sagar.name} className="h-40 w-40 rounded-2xl object-cover ring-4 ring-white shadow-md" />
              <div className="mt-4 flex items-center gap-3">
                <a href={sagar.linkedin} target="_blank" rel="noreferrer" className="rounded-lg bg-blue-100 p-2 text-blue-700 hover:bg-blue-200" title="LinkedIn">
                  {/* LinkedIn */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.866 0-2.153 1.459-2.153 2.966v5.697h-3v-10h2.879v1.367h.041c.401-.76 1.379-1.559 2.839-1.559 3.04 0 3.603 2.003 3.603 4.607v5.585z"/></svg>
                </a>
                <a href={sagar.instagram} target="_blank" rel="noreferrer" className="rounded-lg bg-pink-100 p-2 text-pink-700 hover:bg-pink-200" title="Instagram">
                  {/* Instagram */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2a3 3 0 1 1-.001 6.001A3 3 0 0 1 12 9zm5.5-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
                </a>
                <a href={sagar.github} target="_blank" rel="noreferrer" className="rounded-lg bg-gray-100 p-2 text-gray-800 hover:bg-gray-200" title="GitHub">
                  {/* GitHub */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.589 2 12.253c0 4.519 2.865 8.35 6.839 9.705.5.094.683-.222.683-.492 0-.243-.009-.888-.014-1.744-2.782.615-3.369-1.36-3.369-1.36-.454-1.175-1.109-1.488-1.109-1.488-.907-.636.069-.623.069-.623 1.004.072 1.531 1.05 1.531 1.05.892 1.56 2.341 1.11 2.91.848.091-.66.35-1.11.636-1.366-2.22-.257-4.555-1.137-4.555-5.059 0-1.117.39-2.029 1.029-2.744-.103-.257-.446-1.295.098-2.7 0 0 .84-.27 2.75 1.047A9.38 9.38 0 0 1 12 7.07c.851.004 1.707.116 2.507.34 1.909-1.317 2.748-1.047 2.748-1.047.546 1.405.202 2.443.1 2.7.64.715 1.027 1.627 1.027 2.744 0 3.931-2.339 4.798-4.566 5.05.359.318.679.945.679 1.905 0 1.374-.013 2.483-.013 2.82 0 .27.18.59.688.49C19.138 20.6 22 16.77 22 12.253 22 6.589 17.523 2 12 2Z" clipRule="evenodd"/></svg>
                </a>
                <a href={sagar.whatsapp} target="_blank" rel="noreferrer" className="rounded-lg bg-green-100 p-2 text-green-700 hover:bg-green-200" title="WhatsApp">
                  {/* WhatsApp */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.46 0 .1 5.36.1 11.95c0 2.1.56 4.15 1.62 5.96L0 24l6.26-1.64a11.9 11.9 0 0 0 5.78 1.48h.01c6.58 0 11.94-5.36 11.94-11.95 0-3.19-1.24-6.19-3.47-8.41zM12.05 21.5h-.01a9.6 9.6 0 0 1-4.9-1.34l-.35-.21-3.72.97.99-3.63-.23-.37a9.55 9.55 0 0 1-1.46-5.13c0-5.28 4.3-9.58 9.6-9.58 2.56 0 4.96 1 6.77 2.8a9.52 9.52 0 0 1 2.82 6.77c0 5.29-4.3 9.58-9.6 9.58zm5.54-7.19c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.19.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.73-1.65-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.06c.15.2 2.11 3.22 5.1 4.52.71.31 1.26.49 1.68.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.43-.08-.13-.28-.21-.58-.36z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-extrabold text-gray-900">{sagar.name}</h1>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">{sagar.role}</span>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Sagar is the driving force behind Learn Without Fees. As Team Leader, he aligns vision with execution,
                coordinates across coding, testing, deployment, and content, and ensures every learner’s experience is
                simple, fast, and impactful. His focus on clarity, usability, and quality sets the bar for the entire
                project.
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                When not refining product decisions, Sagar mentors teammates, reviews UX, and optimizes delivery so we
                can ship value quickly—without compromising on standards. Follow his journey and thoughts on leadership
                and learning.
              </p>

              {/* Quick Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { k: 'Leadership', v: 'Team & Product' },
                  { k: 'Focus', v: 'UX • Delivery • Quality' },
                  { k: 'Motto', v: 'Ship value, often' },
                ].map((s) => (
                  <div key={s.k} className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm">
                    <div className="text-xs font-semibold text-gray-500">{s.k}</div>
                    <div className="mt-1 text-sm font-bold text-gray-900">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { t: 'Clarity', d: 'Communicate the why, then the how.' },
            { t: 'Ownership', d: 'Do the right thing, end-to-end.' },
            { t: 'Craft', d: 'Polish the details that matter.' },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-bold text-gray-900">{v.t}</div>
              <div className="mt-1 text-sm text-gray-600">{v.d}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}



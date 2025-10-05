import React, { useState } from 'react'

export default function ContactPage(): JSX.Element {
  const [sent, setSent] = useState(false)
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div className="min-h-[calc(100vh-120px)] bg-gradient-to-br from-slate-100 to-slate-200 py-10">
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
        <div className="text-center">
          <h3 className="text-2xl font-extrabold text-gray-900">Contact Us</h3>
          <p className="mt-1 text-sm text-gray-600">We usually respond within 24 hours.</p>
        </div>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="fname" className="text-sm font-semibold text-gray-700">First Name</label>
              <input id="fname" name="firstname" type="text" placeholder="Your name" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:border-blue-500 focus:ring-4" />
            </div>
            <div>
              <label htmlFor="lname" className="text-sm font-semibold text-gray-700">Last Name</label>
              <input id="lname" name="lastname" type="text" placeholder="Your last name" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:border-blue-500 focus:ring-4" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:border-blue-500 focus:ring-4" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="country" className="text-sm font-semibold text-gray-700">Country</label>
              <select id="country" name="country" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:border-blue-500 focus:ring-4">
                <option value="">Select</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone (optional)</label>
              <input id="phone" name="phone" type="tel" placeholder="9876543210" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:border-blue-500 focus:ring-4" />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
            <input id="subject" name="subject" type="text" placeholder="How can we help?" required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:border-blue-500 focus:ring-4" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
            <textarea id="message" name="message" placeholder="Write something..." rows={5} required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:border-blue-500 focus:ring-4" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500">By submitting, you agree to our Terms and Privacy Policy.</p>
            <button type="submit" className="rounded-xl bg-blue-600 px-5 py-2.5 text-white font-semibold hover:bg-blue-700">Send Message</button>
          </div>
          {sent && (
            <div className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700 ring-1 ring-green-200">Thanks! Your message has been submitted.</div>
          )}
        </form>
      </div>
    </div>
  )
}



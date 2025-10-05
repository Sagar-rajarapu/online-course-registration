import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(): JSX.Element {
  return (
    <footer className="mt-8 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo.PNG" alt="logo" className="h-8 w-8 rounded" />
              <span className="font-bold text-gray-900">LearnWithoutFees</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">Free, accessible learning for everyone. No fees. No ads. Just knowledge.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link to="/course" className="hover:text-gray-900">Courses</Link></li>
              <li><Link to="/updates" className="hover:text-gray-900">Updates</Link></li>
              <li><Link to="/about" className="hover:text-gray-900">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link to="/contact" className="hover:text-gray-900">Contact</Link></li>
              <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-900">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Get started</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link to="/login" className="hover:text-gray-900">Create Account</Link></li>
              <li><Link to="/student/login" className="hover:text-gray-900">Student Login</Link></li>
              <li><Link to="/faculty/login" className="hover:text-gray-900">Faculty Login</Link></li>
            </ul>
          </div>
        </div>
        {/* Wide, compact disclaimer */}
        <div className="mt-6 rounded-lg bg-gray-50 px-4 py-4 text-[13px] text-gray-700 ring-1 ring-gray-200">
          <strong className="font-semibold">Disclaimer:</strong> This website is a demo project created for educational purposes. All course videos are embedded from YouTube and remain the property of their respective creators. This platform only provides shortcuts/links to public educational content for easy learning access.
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-gray-100 pt-6 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LearnWithoutFees. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}



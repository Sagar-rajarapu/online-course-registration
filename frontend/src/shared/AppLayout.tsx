import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.js'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

export default function AppLayout(): JSX.Element {
  const { pathname } = useLocation()
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 120px)' }} key={pathname} className="page-transition">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}



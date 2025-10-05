import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './shared/AppLayout'
import HomePage from './pages/HomePage'
import CoursePage from './pages/CoursePage'
import UpdatesPage from './pages/UpdatesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginLandingPage from './pages/LoginLandingPage'
import StudentLoginPage from './pages/StudentLoginPage'
import FacultyLoginPage from './pages/FacultyLoginPage'
import AdminLoginPage from './pages/AdminLoginPage'
import StudentPasskeyPage from './pages/StudentPasskeyPage'
import FacultyPasskeyPage from './pages/FacultyPasskeyPage'
import './styles/tailwind.css'
import './styles/app.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginLandingPage /> },
      { path: 'course', element: <CoursePage /> },
      { path: 'updates', element: <UpdatesPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'student/login', element: <StudentLoginPage /> },
      { path: 'student/passkey', element: <StudentPasskeyPage /> },
      { path: 'faculty/login', element: <FacultyLoginPage /> },
      { path: 'faculty/passkey', element: <FacultyPasskeyPage /> },
      { path: 'admin/login', element: <AdminLoginPage /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)



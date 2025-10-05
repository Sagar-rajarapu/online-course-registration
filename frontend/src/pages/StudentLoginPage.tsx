import React, { useState } from 'react'
// styles are consolidated in app.css
import { Link, useNavigate } from 'react-router-dom'

export default function StudentLoginPage(): JSX.Element {
  const navigate = useNavigate()
  const [isSignup, setIsSignup] = useState(false)

  return (
    <div className="bg-gradient-to-br from-sky-300 to-indigo-400 py-10">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
        <div className="flex items-center gap-3">
          <img src="/student.png" alt="student" className="h-10 w-10" />
          <div className="text-lg font-bold">{isSignup ? 'Student Signup' : 'Student Login'}</div>
        </div>
        <div className="mt-4 flex rounded-xl bg-slate-100 p-1 text-sm font-semibold">
          <button className={`flex-1 rounded-lg px-3 py-2 ${!isSignup ? 'bg-white shadow' : ''}`} onClick={() => setIsSignup(false)}>Login</button>
          <button className={`flex-1 rounded-lg px-3 py-2 ${isSignup ? 'bg-white shadow' : ''}`} onClick={() => setIsSignup(true)}>Signup</button>
        </div>
        <div className="mt-4">
          {!isSignup ? (
            <form onSubmit={(e) => { e.preventDefault(); navigate('/course') }} className="login">
              <div className="field"><input type="email" placeholder="Email Address" required /></div>
              <div className="field"><input type="password" placeholder="Password" required /></div>
              <div className="pass-link"><Link to="/student/passkey">Forgot password?</Link></div>
              <div className="field btn"><input type="submit" value="Login" /></div>
              <div className="signup-link">I'm new student? <button type="button" onClick={() => setIsSignup(true)}>Signup now</button></div>
            </form>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); navigate('/course') }} className="signup">
              <div className="field"><input type="email" placeholder="Email Address" required /></div>
              <div className="field"><input type="password" placeholder="Password" required /></div>
              <div className="field"><input type="password" placeholder="Confirm password" required /></div>
              <div className="field btn"><input type="submit" value="Signup" /></div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}



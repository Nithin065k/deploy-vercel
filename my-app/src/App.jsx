import React, { useState, useEffect } from 'react'
import AuthForm from './components/AuthForm'
import MoodSelector from './components/MoodSelector'



const API = import.meta.env.VITE_API || 'https://deploy-vercel.onrender.com'

export default function App() {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('mood_user')
    return raw ? JSON.parse(raw) : null
  })

  useEffect(() => {
    if (user) localStorage.setItem('mood_user', JSON.stringify(user))
    else localStorage.removeItem('mood_user')
  }, [user])

  return (
    <div className="app">
      <header className="hero">
        <h1>Mood to Music 🎵</h1>
        <p>Pick your mood — get a playlist instantly</p>
      </header>

      <main className="card">
        {!user ? (
          <AuthForm onAuth={(u) => setUser(u)} apiBase={API} />
        ) : (
          <>
            <div className="welcome">
              <strong>Welcome, {user.user.name}!</strong>
              <button className="link-btn" onClick={() => setUser(null)}>Logout</button>
            </div>
            <MoodSelector token={user.token} apiBase={API} />
          </>
        )}
      </main>

      <footer className="footer">
        <small>Made with ❤️ — pick a mood and vibe</small>
      </footer>
    </div>
  )
}
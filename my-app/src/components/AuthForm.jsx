import React, { useState } from 'react'

export default function AuthForm({ onAuth, apiBase }) {
  const [mode, setMode] = useState('login') // or 'register'
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [err, setErr] = useState('')

  async function submit(e) {
    e.preventDefault(); setErr('')
    try {
      const res = await fetch(`${apiBase}/api/auth/${mode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Auth failed')
      onAuth(data)
    } catch (e) { setErr(e.message) }
  }

  return (
    <div>
      <div className="auth-toggle">
        <button onClick={() => setMode('login')} className={mode==='login'? 'active':''}>Login</button>
        <button onClick={() => setMode('register')} className={mode==='register'? 'active':''}>Register</button>
      </div>

      <form className="auth-form" onSubmit={submit}>
        {mode === 'register' && (
          <input placeholder="Name" value={form.name} onChange={e=>setForm(s=>({...s,name:e.target.value}))} required />
        )}
        <input placeholder="Email" type="email" value={form.email} onChange={e=>setForm(s=>({...s,email:e.target.value}))} required />
        <input placeholder="Password" type="password" value={form.password} onChange={e=>setForm(s=>({...s,password:e.target.value}))} required />
        <button className="primary" type="submit">{mode==='login'?'Login':'Create Account'}</button>
        {err && <div className="error">{err}</div>}
      </form>
    </div>
  )
}
import React, { useState } from 'react'

export default function MoodSelector({ token, apiBase }) {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const moods = [
    { id: 'happy', label: '😄 Happy' },
    { id: 'sad', label: '😢 Sad' },
    { id: 'energetic', label: '⚡ Energetic' },
    { id: 'sleepy', label: '😴 Sleepy' }
  ]

  async function pick(mood) {
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch(`${apiBase}/api/mood/suggest/${mood}`, {
        headers: { Authorization: 'Bearer ' + token }
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Failed to fetch playlist')
      setResult(data.playlist)
    } catch (e) {
      setResult({ error: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="mood-grid">
        {moods.map(m => (
          <button
            key={m.id}
            className="mood-btn"
            onClick={() => pick(m.id)}
            disabled={loading}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="result">
        {loading && <div>Loading...</div>}
        {result && result.error && <div className="error">{result.error}</div>}
        {result && !result.error && (
          <div className="playlist-card">
            <h3>{result.title}</h3>
            <div className="links">
              <a href={result.youtube} target="_blank" rel="noreferrer">
                Open YouTube Playlist
              </a>
              <a href={result.spotify} target="_blank" rel="noreferrer">
                Open Spotify Playlist
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

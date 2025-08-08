import React from 'react'

export default function Gallery(){
  const imgs = [
    'https://source.unsplash.com/collection/190727/800x600',
    'https://source.unsplash.com/collection/190728/800x600',
    'https://source.unsplash.com/collection/190729/800x600',
    'https://source.unsplash.com/collection/190730/800x600'
  ]

  return (
    <section className="section gallery">
      <h2>Popular in your city</h2>
      <div className="gallery-grid">
        {imgs.map((u,i)=> <img src={u} alt={`g${i}`} key={i} />)}
      </div>
    </section>
  )
}
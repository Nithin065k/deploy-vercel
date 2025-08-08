import React from 'react'

const categories = [
  {title: 'SUVs', img: 'https://images.unsplash.com/photo-1542362567...'},
  {title: 'Sedans', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70'},
  {title: 'Luxury', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70'},
  {title: 'Electric', img: 'https://images.unsplash.com/photo-1549924231-f129b911e442'},
  {title: 'Vans', img: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c'}
]

export default function Categories(){
  return (
    <section className="section categories">
      <h2>Browse by category</h2>
      <div className="cat-scroll">
        {categories.map((c,i)=> (
          <div className="cat-card" key={i}>
            <div className="cat-img" style={{backgroundImage: `url(${c.img})`}} />
            <div className="cat-title">{c.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

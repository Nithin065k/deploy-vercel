import React from 'react'

const cars = [
  {name:'Hyundai Creta', price:'₹1,299', img:'https://source.unsplash.com/featured/?suv,car'},
  {name:'Honda City', price:'₹999', img:'https://source.unsplash.com/featured/?sedan,car'},
  {name:'Tesla Model 3', price:'₹3,999', img:'https://source.unsplash.com/featured/?electric,car'},
  {name:'Toyota Innova', price:'₹1,899', img:'https://source.unsplash.com/featured/?van,car'}
]

export default function Deals(){
  return (
    <section className="section deals">
      <h2>Best Deals Today</h2>
      <div className="deals-grid">
        {cars.map((car, i) => (
          <div className="deal-card" key={i}>
            <img src={car.img} alt={car.name} />
            <div className="deal-info">
              <h3>{car.name}</h3>
              <div className="deal-price">{car.price}/day</div>
              <button className="btn-outline">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import React from 'react'

export default function Nav(){
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">ZoomRide</div>
        <div className="search">
          <input placeholder="Search cars, locations..." />
          <button className="search-btn">Search</button>
        </div>
        <div className="nav-icons">
          <button className="icon">Login</button>
          <button className="icon">Bookings</button>
          <button className="icon">Help</button>
        </div>
      </div>
    </header>
  )
}

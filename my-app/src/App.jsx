import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Deals from './components/Deals'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import "./App.css"

export default function App(){
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <Categories />
        <Deals />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
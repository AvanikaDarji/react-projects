import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import Card from './components/card.jsx'
import data from './data.jsx'
import './App.css'

function App() {
  let cardsData = data.map((item) => {
    return (
      // <Card
      //   key={item.id}
      //   img={item.coverImg}
      //   rating={item.stats.rating}
      //   reviewCount={item.stats.reviewCount}
      //   location={item.location}
      //   title={item.title}
      //   price={item.price}
      //   openSpots={item.openSpots}
      // />
      <Card key={item.id} item={item} />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards"> {cardsData} </section>{' '}
    </div>
  )
}

export default App

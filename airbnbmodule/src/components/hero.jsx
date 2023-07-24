import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <img className="hero--photo" src="./src/assets/photo-grid.png" />
        <h1 className="hero--header"> Online Experiences </h1>{' '}
        <p className="hero--text">
          Join unique interactive activities led by one - of - a - kind hosts—
          all without leaving home.{' '}
        </p>{' '}
      </section>{' '}
    </div>
  )
}

export default Hero

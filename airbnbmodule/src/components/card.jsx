import React from 'react'

const Card = ({ item }) => {
  let badgeText
  if (item.openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (item.location === 'Online') {
    badgeText = 'ONLINE'
  }
  return (
    <div className="card">
      <div className="card--badge"> {item.badgeText} </div>
      <img className="card--image" src={`./src/assets/${item.coverImg}`} />{' '}
      <div>
        <img src="./src/assets/star.png" className="card--star" />
        <span>{item.stats.rating}</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <div className="card--text">
        <p></p>
        <p>
          <span>
            <strong>From $136</strong>
          </span>{' '}
          / person
        </p>
      </div>
    </div>
  )
}

export default Card

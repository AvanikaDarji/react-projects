export default function Number({ number, isHeld, holdDice, key }) {
  const styles = {
    backgroundColor: isHeld ? '#59E391' : 'white',
  }
  return (
    <div>
      <div className="number">
        <h2 className="die-num" style={styles} key={key} onClick={holdDice}>
          {number}
        </h2>
      </div>{' '}
    </div>
  )
}

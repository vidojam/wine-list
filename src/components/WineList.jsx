import { useState, useEffect } from "react"
import WineCard from "./WineCard.jsx"

export default function WineList() {

  const [theWines, setTheWines] = useState()
  const [color, setColor] = useState('reds')

  const getWines = () => {
    fetch(`https://api.sampleapis.com/wines/${color}`)
      .then(response => response.json())
      .then(setTheWines)
      .catch(alert)
  }

  useEffect(() => {
    getWines()
  }, [color])
  
  return (
    <>
      <div className='buttons'>
        <button onClick={() => setColor('reds')}>Reds</button>
        <button onClick={() => setColor('whites')}>Whites</button>
        <button onClick={() => setColor('sparkling')}>Sparkling</button>
        <button onClick={() => setColor('rose')}>Rose</button>
      </div>
      <section className="wine-list">
        {(!theWines)
          ? <h2>Loading...</h2>
          : theWines.map(wine => (
            <WineCard key={wine.id} wine={wine} />
            ))
          }
      </section>
    </>
  )
}
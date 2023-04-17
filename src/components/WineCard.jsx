export default function WineCard ({wine}) {
  return (
    <div classsName="wine-card">
      <h2>{wine.wine} </h2>
      <img src={wine.image} alt="" />
    </div>
  )
}
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet-details">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem

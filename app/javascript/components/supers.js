import React from 'react' 

const Supers = (props) => {
  const supers = props.supers
  console.log(supers)


  const renderSupers = () => {
   const supersJSX = supers.map(supers => {
      return(
      <div className='super-container'>
        <h1> {supers.name}</h1>
        <p>power {supers.power}</p>
        <p>id: {supers.id}</p>
        <a href={`/supers/${supers.id}`}>show</a>
        <a href={`/supers/${supers.id}/edit`}>edit super</a>
        <a href={`/supers/${supers.id}`}data-method='delete'>delete super</a>
      </div>
      )
  })
      return supersJSX
  }
  return (
    <div className= 'supers-container'>
      <h1>Superhero's</h1>
      <a href='/supers/new'>New Super info</a>
     {renderSupers()}
    </div>
  )
}

export default Supers
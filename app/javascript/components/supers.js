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
      </div>
      )
  })
      return supersJSX
  }
  return (
    <div className= 'supers-container'>
      <h1>Superhero's</h1>
     {renderSupers()}
    </div>
  )
}

export default Supers
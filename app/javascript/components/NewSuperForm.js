import React from 'react' 

const NewSuperForm = () =>{
  return(
    <div>
      <h1>New Super info here</h1>
      <a href='/'>home</a>
      <form action='/powers' method='post'>
        <p>name</p>
        <input type='text' name='super[name]'/>
        <p>power</p>
        <input type='text' name='super[powers]'/>
        <button type='submit'>add</button>
      </form>
    </div>
  )
}

export default NewSuperForm 
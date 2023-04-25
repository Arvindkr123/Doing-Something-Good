import React from 'react'

const Hello = ({ value }) => {
    const handleEventListner = (value) => {
        alert(`Hello Bro.... ${value}`)
    }
  return (
      <div>
          <input type="button" value="Click Me" onClick={()=>handleEventListner(value)} />
    </div>
  )
}

export default Hello;

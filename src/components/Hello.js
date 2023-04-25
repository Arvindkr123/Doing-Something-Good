import React from 'react'

const Hello = ({name, age, children}) => {
  return (
      <div>
          <h1>My name is {name}</h1>
          <h2>My age is {age}</h2>
          <p>{children}</p>
    </div>
  )
}

export default Hello

import React from 'react'
import PropTypes, { element } from 'prop-types'

const Hello = ({ name, age, children, isMarried, friends }) => {
    return (
        <div>
            <h1>My name is {name}</h1>
            <h2>My age is {age}</h2>
            <h2>Is married {isMarried.toString()}</h2>
            <p>{children}</p>
            <p>My friends listed below </p>
            {friends.map((element, index) => {
                return <ul key={index} >
                    <li >{element}</li> 
                </ul>
            })}
        </div>
    )
}

Hello.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isMarried: PropTypes.bool,
    friends : PropTypes.array
}

export default Hello;

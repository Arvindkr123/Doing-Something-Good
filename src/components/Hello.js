import React from 'react'

const Hello = () => {
    return (
        <div>
            <h1>welcome to the Export default and Named Export</h1>
            <p>in  Named export we can't change the name but in Default export</p>
        </div>
    )
}

export const Greeting = () => {
    return (
        <div>WELCOME ARVIND K</div>
    )
}

export default Hello;

import React from 'react'
import './App.css'
import Hello, { Greeting } from './components/Hello';

const App = () => {
    return (
        <>
            <Greeting />
            <Hello />
        </>
    )
}

export default App;

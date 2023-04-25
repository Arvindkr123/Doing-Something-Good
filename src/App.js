import React from 'react'
import Hello from './components/Hello';

const App = () => {
    return (
        <div>
            <Hello name={'Arvind K'} age={22}>
                <p>I'm children of the Hello </p>
            </Hello>
        </div>
    )
}

export default App;

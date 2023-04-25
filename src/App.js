import React from 'react'
import Hello from './components/Hello';

const App = () => {
    const friends = ['Arvind K', 'Shayam Bhatnagar', 'Saurav K', 'Manmohan K']
    return (
        <div>
            <Hello name={'Arvind K'} age={22} isMarried={false} friends ={friends}>
                <p>I'm children of the Hello </p>
            </Hello>
        </div>
    )
}

export default App;

import React, {useState} from 'react'

const Hello = () => {
    const obj = {
        name: 'Arvind K',
        age: 22,
        email :'thakurarvindkr10@gmail.com'
    }
    const[person, setPerson] = useState(obj);
    return (
        <div>
            <ul>
                <li>{person.name}</li>
                <li>{person.age}</li>
                <li>{person.email}</li>
            </ul>
            <button onClick={() => setPerson(prevState => {
                return {
                    ...prevState, name:'Arvind Thakur', age:12
                }
            })}>Update</button>
        </div>
    )
}

export default Hello

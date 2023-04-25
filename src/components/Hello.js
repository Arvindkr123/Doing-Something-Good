import React from 'react'

const Hello = () => {
    const students = [
        { name: 'Arvind', lname: 'Thakur' },
        { name: 'Arvind', lname: 'Thakur' },
        { name: 'Arvind', lname: 'Thakur' },
        { name: 'Arvind', lname: 'Thakur' },
        { name: 'Arvind', lname: 'Thakur' },
        { name: 'Arvind', lname: 'Thakur' },
        { name: 'Arvind', lname: 'Thakur' },
    ]
    return (
        <div>
            {students.map((ele, i) => {
                return <h1 key={i}>{ele.name} {ele.lname}</h1>
            })}
        </div>
    )
}

export default Hello

import React, { useState } from 'react'

const UseStateWithArray = () => {
    // const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    // // Update specific values in the array
    // const updateArr = () => {
    //     const newArr = [...arr]; // Make a copy of the array
    //     newArr[1] = 20; // Update the value at index 1 to 20
    //     newArr[3] = 40; // Update the value at index 3 to 40
    //     setArr(newArr); // Update the state variable with the new array
    // }

    // return (
    //     <div>
    //         <button onClick={updateArr}>Update Array</button>
    //         <p>{JSON.stringify(arr)}</p>
    //     </div>
    // );
    // const changeList = () => {
    //     setNumber(prevState => {
    //         return [...prevState, 11,12,13,14,15,16,17,18,19,20]
    //     })
    // }
    // return (
    //     <ul>
    //         {number.map((ele, i) => {
    //             return <li key={i}>{ele}</li>
    //         })}
    //         <button onClick={changeList}>Update</button>
    //     </ul>
    // )

    const arr = [1, 2, 3, 4, 5];
    const [number, setNumber] = useState(arr);
    const updateList = () => {
        setNumber(prevState => {
            return [...prevState, Math.floor(Math.random() * 1000)];
        })
    }
    return (
        <ul style={{
            marginTop: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', listStyle: 'none'
        }}>
            {number.map((ele, i) => {
                return <li key={i}>{ele}</li>
            })}
            <button onClick={updateList}>Update</button>
        </ul>
    )
}

export default UseStateWithArray;

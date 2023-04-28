import React, { useEffect, useState } from 'react'
import Task from './Task.jsx'
import '../App.css'

const Home = () => {
    const initilaArray = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    const [tasks, setTasks] = useState(initilaArray)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const submitHandler = (e) => {
        e.preventDefault();
        setTasks([...tasks, {
            title,
            description
        }])
        setTitle('')
        setDescription('')
    }
    useEffect(() => { localStorage.setItem('tasks', JSON.stringify(tasks)); }, [tasks])

    const deleteTask = (index) => {
        const filteredtask = tasks.filter((val, i) => {
            return i !== index;
        })
        setTasks(filteredtask);
    }
    return (
        <div className='container'>
            <h1>Daily Goals</h1>
            <form onSubmit={submitHandler}>
                <input required value={title} type="text" placeholder='Title' onChange={(e) => { setTitle(e.target.value) }} />
                <textarea required value={description} placeholder='Description' onChange={(e) => { setDescription(e.target.value) }}></textarea>
                <button type='submit'>ADD</button>
            </form>
            {tasks.map((item, index) => (
                <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index} />
            ))}
        </div>
    )
}

export default Home

import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../App.css'

const User = () => {
    const params = useParams();
    const navigation = useNavigate();
    console.log(params.id);
    return (
        <div className='user'>
            User
            <button onClick={()=>navigation('/contact')}>Go to Contact</button>
        </div>
    )
}

export default User

import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './components/Login/Login'

function Home({isLoggedIn}) {
    const navigate = useNavigate()
    if (!isLoggedIn){ navigate('/login')}
    return (
        <div>
             {isLoggedIn ? <p>I am now Logged in</p> : <Login />}
        </div>
    )
}

export default Home

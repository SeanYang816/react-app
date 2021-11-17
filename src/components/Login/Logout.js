import React from 'react'
import Login from './Login'

function Logout({setIsLoggedIn}) {
    setIsLoggedIn(false)
    return <Login />
}

export default Logout

import React from 'react'
import Login from './Login'
import PropTypes from 'prop-types';

function Logout({setIsLoggedIn}) {
    setIsLoggedIn(false)
    return <Login />
}

export default Logout

Logout.propTypes = {
  setIsLoggedIn: PropTypes.func
}
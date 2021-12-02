import React from "react";
import AButton from "components/AButton/AButton"
import PropTypes from 'prop-types';

function Login({isLoggedIn, setIsLoggedIn}) {

  return (
    <div>
      <h2>Login Page</h2>
      {!isLoggedIn && <AButton value={'Log in'} to={'/'} setIsLoggedIn={setIsLoggedIn}/> }
    </div>
  );
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  setIsLoggedIn: PropTypes.any
}

export default Login

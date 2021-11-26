import React from "react";
import AButton from "components/AButton/AButton"

function Login({isLoggedIn, setIsLoggedIn}) {

  return (
    <div>
      <h2>Login Page</h2>
      {!isLoggedIn && <AButton value={'Log in'} to={'/'} setIsLoggedIn={setIsLoggedIn}/> }
    </div>
  );
}

export default Login;

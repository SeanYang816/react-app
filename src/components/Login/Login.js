import React from "react";
import AButton from "components/AButton/AButton"
import Card from "components/Card/Card"

function Login({isLoggedIn, setIsLoggedIn}) {

  return (
    <div>
      <h2>Login Page</h2>
      {!isLoggedIn && <AButton value={'Log in'} to={'/'} setIsLoggedIn={setIsLoggedIn}/> }
      <Card>
        <Card.Header></Card.Header>
        <Card.Body></Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}

export default Login;

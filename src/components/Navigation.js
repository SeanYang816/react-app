import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navigation({isLoggedIn = false}) {

  return (
    <>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        {!isLoggedIn && <>
        <Link to="/login">Login</Link> | <Link to="/sign-up">Sign up</Link> |{" "}<Link to="/parent">Parent</Link>|{" "}<Link to="/MUI">MUI</Link>
        </>}
        {isLoggedIn && (
          <>
            <Link to="/">Home</Link> |{" "}
            <Link to="routes/ScrollGenerator">ScrollGenerator</Link> |{" "}
            <Link to="routes/invoices">Invoices</Link> |{" "}
            <Link to="/logout">Logout</Link> |{" "}
          </>
        )}
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;

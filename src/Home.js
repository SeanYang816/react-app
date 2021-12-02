import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "components/Login/Login";
import PropTypes from "prop-types";

function Home(props) {
  const { isLoggedIn } = props;
  const navigate = useNavigate();
  if (!isLoggedIn) {
    navigate("/login");
  }
  return <div>{isLoggedIn ? <p>I am now Logged in</p> : <Login />}</div>;
}

export default Home;

Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

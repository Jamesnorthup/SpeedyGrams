import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"
import "./Navigation.css"

import { FaHome  } from "react-icons/fa";


const Navigation = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  return (
    <Navbar className='color-nav' variant="light">

      <Navbar.Brand><Link to='/'><strong style={{fontSize:"60px"}}>< FaHome /></strong></Link></Navbar.Brand>
      <img
        className="headerImage" style={{ display: "block", width:"400px" }}  
        src="SpeedygramLogo.png"
        alt="" />
      <Navbar.Collapse className="justify-content-end">
        <Button onClick={() => loginWithRedirect()}>Log In</Button>
        <Button onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation
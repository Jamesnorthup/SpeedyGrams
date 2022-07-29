
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

      <img
        className="headerImage" style={{ display: "block", width:"300px",paddingLeft:"100px"}}  
        src="SpeedygramLogo.png"
        alt="" />
      <Navbar.Collapse className="justify-content-end">

        <Button onClick={() => loginWithRedirect()} style={{backgroundColor:"rgb(245,245,245)",color:'black', border: "0px"}} className='mx-2' color='info'><strong style={{fontSize:"12px", color:"black",  }}>Login</strong></Button>
        <Button onClick={() => logout({ returnTo: window.location.origin })} style={{backgroundColor:"rgb(245,245,245)",color:'black', border: "0px"}}>
      <strong style={{fontSize:"12px", color:"black",  }}>Logout</strong>
        </Button>
        <Navbar.Brand><Link to='/'><strong style={{fontSize:"30px", color:"black", padding:"10px" }}>< FaHome /></strong></Link></Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  );
};


// backgroundColor: '#00aeef',
// borderColor: 'red',
// borderWidth: 5,
// borderRadius: 15  
export default Navigation
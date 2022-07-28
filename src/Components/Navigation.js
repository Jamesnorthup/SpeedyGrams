import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom"

const Navigation = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand><Link to='/'>Home</Link></Navbar.Brand>
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
import React from "react";
import { Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '15px'}}>
    <Nav defaultActiveKey="/home" as="ul" style={{ display: 'flex', gap: '10px' }}>
      <Nav.Item as="li">
        <Button variant="outline-dark" href="/home">Home</Button>
      </Nav.Item>
      <Nav.Item as="li">
        <Button variant="outline-dark" eventKey="/aboutSection">About</Button>
      </Nav.Item>
      <Nav.Item as="li">
        <Button variant="outline-dark" eventKey="/contact">Contact</Button>
      </Nav.Item>
    </Nav>
    </div>
  );
}

export default Navbar;
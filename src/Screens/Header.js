import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

const Header = () =>{
return(
    <Navbar bg="dark" variant="dark" expand="lg">
      {/* <Navbar.Brand href="#home">My Website</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/booking">Ticket Booking</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)
}
export default Header;
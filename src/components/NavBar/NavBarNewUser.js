import React from 'react'
import { Nav, Navbar, Form, } from "react-bootstrap"
import './NavBar.css'
export const NavBarNewUser = () => {
  
    return(
        <>
        <Navbar class='navbar' bg="primary" variant="dark">
      
        <Nav className="mr-auto">
          <div id="link-container">
        <Nav.Link href="/">Home</Nav.Link>
        </div>
            
            
          
        </Nav>
        
        <Form inline>
        
        </Form>
        
      </Navbar>
      </>)
}
import React from 'react'
import './NavBar.css'
import { useDispatch } from "react-redux"
import { actions } from "../../redux/actions/auth";
import { Nav, Navbar, Form, } from "react-bootstrap"

export const NavBar = () => {
    const dispatch = useDispatch();
    const logout = () => dispatch(actions.logout());
    return(
        
        <Navbar class='navbar' bbg="dark" variant="dark">
      
        <Nav className="mr-auto">
          <div id>
          <Nav.Link class='link' href="/profiles/:username">Profile</Nav.Link>
          <Nav.Link class='link' href="/messagefeed" >Message Feed</Nav.Link>
          <Nav.Link class='link' onClick={logout}>Logout</Nav.Link>
          </div>
          {/* <Navbar.Collapse className="justify-content-end"> */}
              
              {/* </Navbar.Collapse> */}
          
        </Nav>
        
        <Form inline>
        
        </Form>
        
      </Navbar>)
      
  
    
}


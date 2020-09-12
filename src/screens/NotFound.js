import React from "react";
import { Link } from "react-router-dom";
import './Screens.css'
import './notFound.css'

const NotFound = ({ location }) => (
  <>
  <div id="not-found"
  >
    <img id="image" 
    src="https://www.butler.edu/sites/default/files/kenzie_logo.png" 
    alt="logo"></img>
    <div>
    <p id="text">404 Not Found, Bruh</p>
    <Link id="home-link" to="/">Go Home</Link>
    </div>
    </div> 
  </>
);

export const NotFoundScreen = NotFound;

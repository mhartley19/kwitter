import React from "react";
import { Link } from "react-router-dom";
import './screens.css'

const NotFound = ({ location }) => (
  <>
  <div id="not-found">
    <img id="image" 
    src="https://www.butler.edu/sites/default/files/kenzie_logo.png" 
    alt="logo"></img>
    <div>
    <p id="text">404, You have Failed</p>
    <Link id="home-link" to="/">Go Home</Link>
    </div>
    </div> 
  </>
);

export const NotFoundScreen = NotFound;

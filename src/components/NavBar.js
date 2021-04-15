import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/movies">Movies</NavLink></li>
    <li><NavLink to="/actors">Actors</NavLink></li>
    <li><NavLink to="/directors">Directors</NavLink></li>    
  </div>
  )
}

export default NavBar;

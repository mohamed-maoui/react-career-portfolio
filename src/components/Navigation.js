import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" exact className="hover" activeClasseName="nav-active">
          <li>accueil</li>
        </NavLink>
        <li className="nav-portfolio">
          portfolio
          <ul className="nav-projects">
            <NavLink
              to="/project1"
              exact
              className="hover"
              activeClasseName="nav-active"
            >
              <li>project 1</li>
            </NavLink>
            <NavLink
              to="/project2"
              exact
              className="hover"
              activeClasseName="nav-active"
            >
              <li>project 2</li>
            </NavLink>
            <NavLink
              to="/project3"
              exact
              className="hover"
              activeClasseName="nav-active"
            >
              <li>project 3</li>
            </NavLink>
            <NavLink
              to="/project4"
              exact
              className="hover"
              activeClasseName="nav-active"
            >
              <li>project 4</li>
            </NavLink>
          </ul>
        </li>
        <NavLink to="/contact" exact className="hover" activeClasseName="nav-active">
          <li>contact</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navigation;

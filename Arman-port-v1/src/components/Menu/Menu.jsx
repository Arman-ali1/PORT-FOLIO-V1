import React from "react";
import "./menu.css";
// Router
import { NavLink } from "components/Nav/NavLink/NavLink";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <NavLink text="Home" path="home" onClick={() => setMenuOpen(false)} />
        <NavLink
          text="Technical Skill"
          path="services"
          onClick={() => setMenuOpen(false)}
        />
        <NavLink
          text="Project"
          path="portfolio"
          onClick={() => setMenuOpen(false)}
        />
        <NavLink
          text="Contact"
          path="contact"
          onClick={() => setMenuOpen(false)}
        />
      </ul>
    </div>
  );
};

export default Menu;
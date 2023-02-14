import React from "react";
import { Link } from "react-router-dom";
import { navData } from "../Data";

const Nav = () => {
  return (
    <ul className={"hidden md:flex gap-5"}>
      {navData.map((nav) => (
        <Link to={nav.navlink}>
          <li>{nav.name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Nav;

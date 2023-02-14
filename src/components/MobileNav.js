import React from "react";
import { Link } from "react-router-dom";
import { navData } from "../Data";

const MobileNav = () => {
  return (
    <ul className="flex flex-col items-center justify-center gap-y-[30px] text-[30px]">
      {navData.map((nav) => (
        <Link to={nav.navlink}>
          <li>{nav.name}</li>
        </Link>
      ))}
      <button className=" md:hidden bg-white text-black rounded-3xl w-[250px] h-[55px]">
        <p className="text-[28px]">Request Demo</p>
      </button>
    </ul>
  );
};

export default MobileNav;

import React, { useState } from "react";
import Logo from "../Assests/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header className="h-[10vh] bg-black text-white fixed top-0 left-0 right-0 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative z-20">
          <img src={Logo} alt="" />
        </div>

        <div className="hidden md:flex">
            <Nav />
        </div>
        <div className={`${mobileNav? 'left-0 transition-all' : 'transition-all left-[100%]'} md:hidden absolute left-0 right-0 bg-black w-full flex items-center justify-center top-0 h-[120vh]`}>
            <MobileNav />
        </div>

        {/* <ul className={mobileNav? 'absolute md:static flex flex-col md:h-0 md:flex-row justify-center bg-black items-center z-10 h-[120vh] top-0 w-full' :"hidden md:flex gap-5"}>
          <li>About</li>
          <li>Help</li>
          <li>Features</li>
          <li>Signup</li>
        </ul> */}

        <button className="hidden md:block bg-white text-black rounded-3xl w-[160px] h-[40px]">
          <p>Request Demo</p>
        </button>
      </div>

      <div className="md:hidden">
        {mobileNav ? <FaTimes onClick={handleNav} size={30} className='relative z-20'/> : <GiHamburgerMenu onClick={handleNav} size={30} className='relative z-20'/>}
      </div>
    </header>
  );
};

export default Header;

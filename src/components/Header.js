import React, { useState } from "react";
import Logo from "../Assests/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Link } from 'react-router-dom'


const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header className="h-[10vh] w-full bg-black text-white fixed top-0 left-0 right-0 flex items-center px-5 lg:px-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative z-20">
          <Link to='/'><img src={Logo} alt="" /></Link>
        </div>

        <div className="hidden md:flex">
            <Nav />
        </div>
        <div className={`${mobileNav? 'left-0 transition-all' : 'transition-all left-[100%]'} md:hidden absolute left-0 right-0 bg-black w-full flex items-center justify-center top-[-50px] h-[120vh]`}>
            <MobileNav />
        </div>

        <button className="hidden md:block bg-white text-black rounded-3xl w-[160px] h-[40px]">
          <p>Request Demo</p>
        </button>
      </div>

      <div className="md:hidden">
        {mobileNav ? <FaTimes onClick={handleNav} size={30} className='relative z-20 cursor-pointer'/> : <GiHamburgerMenu onClick={handleNav} size={30} className='relative z-20 cursor-pointer'/>}
      </div>
    </header>
  );
};

export default Header;

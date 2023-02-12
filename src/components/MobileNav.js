import React from 'react'

const MobileNav = () => {
  return (
    <ul className='flex flex-col items-center justify-center gap-y-[30px] text-[30px]' >
          <li>About</li>
          <li>Help</li>
          <li>Features</li>
          <li>Signup</li>

          <button className=" md:hidden bg-white text-black rounded-3xl w-[160px] h-[40px]">
          <p>Request Demo</p>
        </button>
        </ul>
  )
}

export default MobileNav
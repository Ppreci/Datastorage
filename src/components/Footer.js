import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className='bg-black text-white w-full h-full'>
    <div className=' py-[30px] w-full grid grid-cols-2 pl-20 gap-x-4 gap-y-4 md:grid-cols-4'>
        <div>
        <h1 className='mb-[7px] font-bold text-2xl'>About</h1>
         <Link><p>Profile</p></Link>
         <Link><p>Features</p></Link>
         <Link><p>Careers</p></Link>
         <Link><p>Privacy policy</p></Link>
         <Link><p>DW News</p></Link>
        </div>
       
        <div>
        <h1 className='mb-[7px] font-bold text-2xl'>Support</h1>
         <Link><p>Via Email</p></Link>
         <Link><p>Via Telephone</p></Link>
         <Link><p>Via Whatsapp</p></Link>
         <Link><p>Live Chat</p></Link>
        </div>

        <div>
        <h1 className='mb-[7px] font-bold text-2xl'>My Account</h1>
         <Link><p>Sign In</p></Link>
         <Link><p>Sign Up</p></Link>
         <Link><p>FAQs</p></Link>
         <Link><p>Help</p></Link>
        </div>
        
        <div>
         <h1 className='mb-[7px] font-bold text-2xl'>Socials</h1>
         <Link><p>Facebook</p></Link>
         <Link><p>Twitter</p></Link>
         <Link><p>Instagram</p></Link>
         <Link><p>Linkedin</p></Link>
        </div>
    </div>
    </div>
  );
};

export default Footer;

import logo from '../../..//assets/images/NavLogo.webp'

import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { PiMapPinThin } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
const Footer = () => {
    return (

        <>
        
        <footer className="footer p-10 bg-white text-base-content">
  <aside>


   <img src={logo} width={160} alt="" />

    <p className='my-3 font-normal text-base'>We help students achieve their dreams of studying <br /> abroad by providing them with the best resources <br /> and support. Your journey to global education <br /> starts with us.</p>


  </aside> 

  <nav className='my-3 font-medium -mx-3'>
    
    <a className="link link-hover my-1 ">About us</a>
    <a className="link link-hover my-1">Privacy Policy </a>
    <a className="link link-hover my-1 ">Our partner</a>

    <a className="link link-hover my-1">Blog</a>
  </nav> 

  <nav className='my-3 font-medium'>

   
    <a className="link link-hover my-1 ">Contact us </a>
    <a className="link link-hover my-1"> Team and conditions </a>
    <a className="link link-hover my-1"> Tourists hub  </a>

    <a  className="link link-hover my-1"> Services </a>

  </nav> 
  <nav className='my-5 '>

   
    <div className='flex justify-center items-center gap-5 my-2 '>
        
        <FaPhoneAlt className='text-lg text-[#8A65F3]'/>
        <p className='font-medium'> 017 4482 7595 </p>
    </div>
<div className='flex justify-center items-center gap-5'>
    <PiMapPinThin className='text-2xl text-[#8A65F3]  '/> 
    <p className='font-medium'> House 983, Road 16, Avenue 2,<br /> Mirpur DOHS, Dhaka 1216,<br /> Bangladesh </p>
</div>

    <div className='flex justify-center items-center gap-5'>

        <MdEmail className='text-xl text-[#8A65F3]'/>

        <p className='font-medium'>bmabroadreamers@gmail.com</p>

    </div>

  </nav>


  <nav className='my-20 '>
    <p className=" text-xs opacity-30">Social media</p> 

    <div className="grid grid-flow-col gap-4">
    <IoLogoFacebook />
      <FaInstagram/>
      <FaLinkedinIn/>
      <FaYoutube/>

    
    </div>
  </nav>
  

</footer>

<footer className="footer footer-center p-4 bg-[#1B1464] text-white  ">
  <aside className='flex flex-col md:flex-row md:gap-96'>


    <p className=''>Copyright © 2024 • <span className='font-medium'> BM ABROAD DREAMERS </span> 
</p>

<p> Developed by <span className='font-medium'>EDISTYS</span> </p>



  </aside>
</footer>



        
        
        </>


        
    );
};

export default Footer;
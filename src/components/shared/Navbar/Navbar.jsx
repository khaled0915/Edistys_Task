import { NavLink } from "react-router-dom";

import logo from './../../../assets/images/NavLogo.webp'

const Navbar = () => {


    
  



    const navOption = 
    <>

<li className=""> <NavLink className=" font-semibold hover:text-blue-600 transition-colors duration-300 " to='/story' > STORY OF US </NavLink> </li>
        <li><NavLink  className=" font-semibold hover:text-blue-600 transition-colors duration-300 "to='/services' > SERVICES </NavLink></li>
        <li> <NavLink  className=" font-semibold hover:text-blue-600 transition-colors duration-300 " to='/top'> TOP INSTITUTIONS </NavLink> </li>
        <li> <NavLink className=" font-semibold hover:text-blue-600 transition-colors duration-300 " to='/team'> OUR TEAM </NavLink> </li>
        <li> <NavLink className=" font-semibold hover:text-blue-600 transition-colors duration-300 " to='/hub'> TOURIST HUB </NavLink> </li>
        <li> <NavLink className=" font-semibold hover:text-blue-600 transition-colors duration-300 " to="/blog"> BLOG </NavLink> </li>
        <li className="inline-block mx-5 hover:shadow-indigo-500 duration-500 px-4 py-2 text-white rounded-lg shadow-md" 
        style={{
            
            background: 'linear-gradient(90deg, rgb(118, 74, 241) 0%, rgb(41, 8, 134) 127.39%)',
        color:'#fff' ,
        boxShadow:'#0000',
        borderRadius:'12px',
        fontWeight:'500',
        letterSpacing:"0.48",
        }
 
            }>
  LET'S TALK
</li>


        
    </>



    return (
        <div className="navbar   max-w-screen-xl mx-auto  bg-white  my-7 border  shadow-xl rounded-xl">


  <div className="navbar-start">


    

<img className="w-[200px] p-2" src={logo}  alt="" />
   


  </div>


  <div className="dropdown ">

      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOption}
      </ul>
    </div>














  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOption}
    </ul>
  </div>


</div>





    );
};

export default Navbar;
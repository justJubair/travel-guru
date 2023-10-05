import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
    const navLinks = <>
    <li className="hover:bg-slate-100 rounded"><NavLink to="/news" >News</NavLink></li>
    <li className="hover:bg-slate-100 rounded"><NavLink to="/destination" >Destination</NavLink></li>
    <li className="hover:bg-slate-100 rounded"><NavLink to="/blog" >Blog</NavLink></li>
    <li className="hover:bg-slate-100 rounded"><NavLink to="/contact" >Contact</NavLink></li>
    </>
  return (
   <div className="relative">
     <div className="absolute navbar">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white">
            {navLinks}
        </ul>
        
      </div>
      
     <img className="w-32 rounded bg- px-5 py-1 bg-white/80" src={logo} alt="" />
   
    </div>
    <div className="relative hidden md:block ">
      <input type="text" placeholder="Search your destinations..." className="bg-transparent border px-8 py-2 w-72" />
      <FaSearch className="absolute text-white top-3 left-2"/>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="text-white menu menu-horizontal px-1">
        {navLinks}
      </ul>
    </div>
    <div className="w-1/2 justify-end">
      <a className="btn bg-[#F9A51A] border-0">Login</a>
    </div>
  </div>
   </div>
  )
}

export default Navbar

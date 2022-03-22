import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = ({ toggle }) => {
    return (
        <nav className=" fixed flex top-0 z-20 left-0 right-0 text-lg bg-black bg-opacity-50 text-white " >
            <div className=" uppercase w-screen grid md:grid-flow-col grid-cols-3 tracking-widest justify-items-stretch m-10 text-sm font-normal" >
                <div className="nohover">
                    {/*    <NavLink to="/"  >  PH</NavLink> */}
                </div>
                <div></div>
                <div className="md:flex hidden justify-self-end ">
                    <NavLink exact={"true"} className="p-3 m-1" to='/'  >Home</NavLink>
                    <NavLink className="p-3 m-1" to='/orchestra'>Orchestra</NavLink>
                    <NavLink className="p-3 m-1" to='/album' >Album</NavLink>
                </div>

            </div>
            <div className="px-4 cursor-pointer md:hidden pt-8" onClick={toggle}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
        </nav>
    )
}


export default Navbar;
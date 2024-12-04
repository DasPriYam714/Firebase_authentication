import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Navbar = () => {
    const { user, logOut } =useContext(AuthContext)
    const handleLogOut=()=>{
        logOut();
    }
  const navLinks = (
    <>
      <p className="px-3 text-lg text-blue-600">
        <NavLink to={"/"}>Home</NavLink>
      </p>
      <p className="px-3 text-lg text-blue-600">
        <NavLink to={"/login"}>Login</NavLink>
      </p>
      <p className="px-3 text-lg text-blue-600">
        <NavLink to={"/register"}>Register</NavLink>
      </p>
    </>
  );
  return (
    <div className="w-full">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
            {
                user && <>
                <span>{user.email}</span>
                <a onClick={handleLogOut} className="btn">SignOut</a>
                </>
            }


          
        </div>
      </div>
    </div>
  );
};

export default Navbar;

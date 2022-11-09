import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../Context/Context";
import logo from "../../Utilities/Images/logo.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };
  return (
    <div className="shadow-lg md:flex justify-between items-center ">
      <div className="md:hidden  " onClick={handleToggle}>
        {toggle ? (
          <XMarkIcon class="h-10 w-10 text-black" />
        ) : (
          <Bars3Icon class="h-10 w-10 text-black" />
        )}
      </div>
      <div className="text-center md:text-left">
        <Link to="/">
          <img src={logo} alt="" className=" inline-block" />
        </Link>
      </div>
      <ul
        className={`md:flex text-center absolute md:static  items-center bg-white  w-full md:w-auto z-[100]   ${({
          isActive,
        }) => (isActive ? "active" : undefined)}  ${
          toggle ? "top-10px" : "top-[-240px]"
        }`}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="services">Services</NavLink>
        </li>
        <li>
          <NavLink to="blog">Blog</NavLink>
        </li>
        {user?.uid ? (
          <>
            <li>
              <NavLink to="myReviews">MyReviews</NavLink>
            </li>
            <li>
              <NavLink to="addService">AddService</NavLink>
            </li>
            <li>
              <NavLink onClick={handleLogOut} to="login">
                LogOut
              </NavLink>
            </li>
            <li>
              <img
                className="w-10 h-10 rounded-full text-center inline-block my-1"
                src={user?.photoURL}
                alt=""
              />
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="login">Login</NavLink>
            </li>
            <li>
              <NavLink to="register">Register</NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../Context/Context";

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
    <div className="shadow-lg md:flex justify-between items-center py-5">
      <div className="md:hidden  " onClick={handleToggle}>
        {toggle ? (
          <XMarkIcon class="h-10 w-10 text-blue-500" />
        ) : (
          <Bars3Icon class="h-10 w-10 text-blue-500" />
        )}
      </div>
      <div className="text-center md:text-left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53K9N8zHCT83D67nH228rxKxkS6RMojtknA&usqp=CAU"
          alt=""
          className="h-5 w-24 inline-block"
        />
      </div>
      <ul
        className={`md:flex text-center absolute md:static  items-center  w-full md:w-auto z-[100] ${
          toggle ? "top-4px" : "top-[-150px]"
        }`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="services">Services</Link>
        </li>
        {user?.uid ? (
          <>
            <li>
              <Link onClick={handleLogOut} to="login">
                LogOut
              </Link>
            </li>
            <li>
              <img
                className="w-10 h-10 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <Link to="register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;

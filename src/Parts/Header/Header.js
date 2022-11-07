import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../Context/Context";

const Header = () => {
  const { user } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="shadow-lg md:flex justify-between items-center ">
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
        className={`md:flex text-center absolute md:static shadow-lg bg-white  w-full md:w-auto z-[100] ${
          toggle ? "top-4px" : "top-[-150px]"
        }`}
      >
        {user?.displayName}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="blog">Blog</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="register">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

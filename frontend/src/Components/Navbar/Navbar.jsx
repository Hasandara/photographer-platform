import React, { useState } from "react";
import './Navbar.css';

const Navbar = () => {

    const [menu,setMenu] = useState("Photographer");
  return (
    <div className="navbar">
      <p>PHOTOGRAPHER</p>
      <ul className="nav-menu">
        <li onClick={() =>{setMenu("home")}}>Home{menu==="home"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("portfolio")}}>Portfolio{menu==="portfolio"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-buttons">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;

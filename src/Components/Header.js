import { useState } from "react";

import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [auth,setAuth] = useState('LogIn');
  const authHandler = (ev) => {
    ev.preventDefault();
    if(auth == 'LogIn')
    {
      setAuth('LogOut');
    }
    else if(auth == 'LogOut')
    {
      setAuth('LogIn');
    }
  }
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src= {LOGO_URL}
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button onClick={authHandler}>
            {auth}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

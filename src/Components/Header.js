import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import { LOGO_URL } from "../utils/constants";

const Header = (props) => {

  const [auth,setAuth] = useState('LogIn');

  const authHandler = (ev) => {
    ev.preventDefault();
    if (auth == "LogIn") {
      setAuth("LogOut");
    } else if (auth == "LogOut") {
      setAuth("LogIn");
    }
    return(props.onAuthClick(auth));
  };

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg mb-10 px-2">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 pink">
          <li className='px-4'>Online: {onlineStatus?'🟢':'🔴'}</li>
          <li className='px-4'><Link to='/'>Home</Link></li>
          <li className='px-4'>
            <Link to="/aboutUs">About us</Link>
          </li>
          <li className='px-4'>
            <Link to="/contactUs">Contact us</Link>
          </li>
          <li className='px-4'>
            <Link to="/grocery">Insta Mart</Link>
          </li>
          <li className='px-4'>Cart</li>
          <button onClick={authHandler}>{auth}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

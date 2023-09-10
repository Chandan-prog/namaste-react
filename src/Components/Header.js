import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import { LOGO_URL } from "../utils/constants";

const Header = () => {
  // useEffect(() => {
  //   console.log('useEffect rendered');
  // }); // Called on everytime the component is re-rendered but only after the whole header component is rendered.
  // i.e, 1st the header rendered console is printed and then the useEffect rendered is printed

  // useEffect(() => {
  //   console.log('useEffect rendered');
  // }, []); // Called on the 1st time the component is rendered but only after the whole header component is rendered.

  const [auth,setAuth] = useState('LogIn');

  //     useEffect(() => {
  //   console.log('useEffect rendered');
  // }, [auth]); // Called everytime the state of the auth variable chnages but only after the whole header component is rendered.

  // console.log('header rendered');

  const authHandler = (ev) => {
    ev.preventDefault();
    if (auth == "LogIn") {
      setAuth("LogOut");
    } else if (auth == "LogOut") {
      setAuth("LogIn");
    }
  };

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online: {onlineStatus?'🟢':'🔴'}</li>
          <li><Link to='/'>Home</Link></li>
          <li>
            <Link to="/aboutUs">About us</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact us</Link>
          </li>
          <li>Cart</li>
          <button onClick={authHandler}>{auth}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

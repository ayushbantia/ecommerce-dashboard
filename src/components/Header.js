import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./header.css";
import { auth } from "../firebase";
import { useStateValue } from "../stateProvider";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  // const history = useHistory();
  // const handleSignOut = () => {
  //   if (user) {
  //     auth.signOut();
  //     history.replace("/");
  //   }
  // };

  return (
    <div className="header">
      <nav className="header__navbar">
        {/* <span className="header__signIn">
          <p>{user ? "Hello, " + user.email : "Hello, Guest"}</p>
          {user ? <button onClick={handleSignOut}>Sign Out</button> : ""}
        </span> */}
        <div className="header__title">
          {/* <h2>Ecommerce Analytics</h2> */}
          <center>
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/1200px-GAnalytics.svg.png"
                alt="analytics__logo"
              />
            </Link>
          </center>
        </div>
      </nav>
    </div>
  );
};

export default Header;

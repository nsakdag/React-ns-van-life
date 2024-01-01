import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="site-logo" to="/">
        #Ns Vanlife
      </Link>
      <nav>
        <Link className="" to="/about">
          About
        </Link>
        <Link className="" to="/vans">
          Vans
        </Link>
      </nav>
    </header>
  );
};

export default Header;

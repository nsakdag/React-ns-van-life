import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <Link className="site-logo" to="/">
        #Ns Vanlife
      </Link>
      <nav>
        <Link className="" to="/about">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
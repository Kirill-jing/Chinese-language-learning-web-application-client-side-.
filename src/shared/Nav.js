import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <div>
      <NavLink to="/converter" exact>
        HSK4
      </NavLink>
      <NavLink to="/converter/3" exact>
        HSK3
      </NavLink>
    </div>
  );
};
export default NavLinks;

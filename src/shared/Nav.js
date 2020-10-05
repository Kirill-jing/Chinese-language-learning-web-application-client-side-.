import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import style from "styled-components";
import { styled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { LensTwoTone } from "@material-ui/icons";

const NavLinks = (props) => {
  const [sun, moon] = useState(<WbSunnyIcon />);

  let toggle = () => {
    moon(sun === <WbSunnyIcon /> ? <Brightness2Icon /> : <WbSunnyIcon />);
  };

  return (
    <div>
      <Button onClick={toggle}>{sun}</Button>
      <NavLink to="/converter" exact>
        HSK4
      </NavLink>
      <NavLink to="/signup" exact>
        Sign up
      </NavLink>
      <NavLink to="/converter/3" exact>
        HSK3
      </NavLink>
    </div>
  );
};
export default NavLinks;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import style from "styled-components";
import { styled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const Sun = styled(WbSunnyIcon)({
  color: "#C0C012  ",
});

const Moon = styled(Brightness2Icon)({
  color: "#E5F2F2 ",
  border: "0px",
});
const CustomNav=style.nav`
display:flex;
width:100%;
font-size:24px;
justify-content:center;
align-items:center;
height:50px;
background-color:#F00A0D;

`
const CustomButton=styled(Button)({
  margin:'0 30px',
  borderRadius:'50%'
})
const CustomLink=style(NavLink)`
color:#503939;
  text-decoration:none;
  margin:0 30px;
  &.active {
    text-shadow: 0px 0px 6px #523F40 0 0 1em #523F40 
  };
`
const NavLinks = (props) => {
  const [sun, moon] = useState(true);

  let toggle = () => {
    moon(!sun);
  };

  return (
    <CustomNav>
      <CustomButton
        onClick={() => {
          toggle();
          return props.theme(sun);
        }}
      >
        {sun ? <Sun /> : <Moon />}
      </CustomButton>
      <CustomLink to="/converter" exact>
        Словарь
      </CustomLink>
      <CustomLink to="/signup" exact>
        Зарегестрироваться
      </CustomLink>
      <CustomLink to="/login" exact>
        Войти
      </CustomLink>
      <CustomLink to="/cart" exact>
        Мои слова 
      </CustomLink>
      <CustomLink to="/" exact>
        Тренировка 
      </CustomLink>

    </CustomNav>
  );
};
export default NavLinks;

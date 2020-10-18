import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import style ,{keyframes,css} from "styled-components";
import { styled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const Sun = styled(WbSunnyIcon)({
  color: "yellow  ",
  transition:'0.5s',
  "&:hover": {
    transform: 'scale(1.2)',

  }
});

const MoonHov = styled(Brightness2Icon)({
  color: "#E5F2F2 ",
  border: "0px",
  transition:'0.5s',
  "&:hover": {
    transform: 'scale(1.2)',
  }
});


const CustomNav=style.nav`
position:fixed;
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
color:black;
  text-decoration:none;
  margin:0 30px;
  &.active {
    text-shadow: 0px 0px 6px yellow 0 0 1em yellow ;
    color : yellow;
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
        {sun ? <Sun /> : <MoonHov />}
      </CustomButton>
      <CustomLink to="/dictionary" exact>
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
      <CustomLink to="/train" exact>
        Тренировка 
      </CustomLink>

    </CustomNav>
  );
};
export default NavLinks;

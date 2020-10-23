import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import style ,{keyframes,css} from "styled-components";
import { styled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const Sun = styled(WbSunnyIcon)({
  color: "#F64E0A ",
  transition:'0.5s',
  "&:hover": {
    transform: 'scale(1.2)',
  }
});

const MoonHov = styled(Brightness2Icon)({
  color: "#0A8BF6  ",
  border: "0px",
  transition:'0.5s',
  "&:hover": {
    transform: 'scale(1.2)',
  }
});

const Image=style.img`
width:135px;
height:135px;
`
const CustomNav=style.nav`
display:flex;
width:100%;
font-size:26px;
justify-content:center;
align-items:center;
height:100px;
background-color:whitesmoke;
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
    color : #F64E0A ;
  };
`
const NavLinks = (props) => {
  const [sun, moon] = useState(true);

  let toggle = () => {
    moon(!sun);
  };
  console.log(props.isAuth)
  return (
    <CustomNav>
      <Image src={"images/logo.svg"} alt='logo'/>
      <CustomButton
        onClick={() => {
          toggle();
          return props.theme(sun);
        }}
      >
        {sun ? <Sun /> : <MoonHov />}
      </CustomButton>
      <CustomLink to="/" exact>
        Главная
      </CustomLink>
      <CustomLink to="/dictionary" exact>
        Словарь
      </CustomLink>
      {props.isAuth===false ?
        <CustomLink to="/signup" exact>
          Зарегестрироваться
        </CustomLink>
          : null
      }
      {props.isAuth===false ?
        <CustomLink to="/login" exact>
          Войти
        </CustomLink>
          : null
      }
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

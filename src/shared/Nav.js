import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import style, { keyframes, css } from "styled-components";
import { styled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

const Sun = styled(WbSunnyIcon)({
  color: "#F64E0A ",
  transition: "0.5s",
  "&:hover": {
    transform: "scale(1.2)",
  },
});

const BurgerButton = styled(Button)({
  "@media(min-width:500px)": {
    display: "none",
  },
  position: "absolute",
  top: 0,
  transition: ".3s",
  opacity: (props) => (props.animate ? 0 : 1),
  zIndex: 101,
});

const MoonHov = styled(Brightness2Icon)({
  color: "#0A8BF6  ",
  border: "0px",
  transition: "0.5s",
  "&:hover": {
    transform: "scale(1.2)",
  },
});

const Image = style.img`
  width:135px;
  height:135px;
`;
const CustomNav = style.nav`
  display:flex;
  width:100%;
  font-size:26px;
  justify-content:center;
  align-items:center;
  height:100px;
  background-color:whitesmoke;
  @media (max-width:500px){
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    height:100%;
    width:50%;
    z-index:100;
    transition:.3s;
    position:absolute;
    top:0;
    transform:${(props) =>
      props.animate ? "translateX(0px)" : "translateX(-210px)"} 

}
`;
const CustomButton = styled(Button)({
  margin: "0 30px",
  borderRadius: "50%",
});
const CustomLink = style(NavLink)`
  color:black;
  text-decoration:none;
  margin:0 30px;
  &.active {
    text-shadow: 0px 0px 6px yellow 0 0 1em yellow ;
    color : #F64E0A ;
  };
`;
const NavLinks = (props) => {
  const [sun, moon] = useState(true);
  const [open, setOpen] = useState(false);

  let toggle = () => {
    moon(!sun);
  };
  return (
    <div>
      <BurgerButton animate={open} onClick={() => setOpen(true)}>
        <MenuIcon />
      </BurgerButton>
      <CustomNav animate={open}>
        <Image src={"images/logo.svg"} alt="logo" />
        <CustomButton
          onClick={() => {
            toggle();
            return props.theme(sun);
          }}
        >
          {sun ? <Sun /> : <MoonHov />}
        </CustomButton>
        <CustomLink onClick={() => setOpen(false)} to="/" exact>
          Главная
        </CustomLink>
        <CustomLink onClick={() => setOpen(false)} to="/dictionary" exact>
          Словарь
        </CustomLink>
        {props.isAuth === false ? (
          <CustomLink to="/signup" exact>
            Зарегестрироваться
          </CustomLink>
        ) : null}
        {props.isAuth === false ? (
          <CustomLink to="/login" exact>
            Войти
          </CustomLink>
        ) : null}
        <CustomLink onClick={() => setOpen(false)} to="/cart" exact>
          Мои слова
        </CustomLink>
        <CustomLink onClick={() => setOpen(false)} to="/train" exact>
          Тренировка
        </CustomLink>
      </CustomNav>
    </div>
  );
};
export default NavLinks;

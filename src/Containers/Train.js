import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actions";
import style, { keyframes, css } from "styled-components";
import { NavLink, BrowserRouter, Route } from "react-router-dom";
import CharWord from "./Char-word";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { styled } from "@material-ui/core/styles";

const CustomSlider = styled(Slider)({
  width: "400px",
});
const CustomDiv = style.div`
  width:100%;
  display:flex;
  position:absolute;
  top:10vh;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
const Link = style(NavLink)`
  font-size:18px;
  color: red;
  text-decoration: none;
  &.active {
    color: black;
  };
`;

class Train extends Component {
  componentDidMount() {
    let tok = localStorage.getItem("token");
    this.props.onStoreCart(tok);
  }
  render() {
    return (
      <CustomDiv>
        <div>
          <Typography id="range-slider" gutterBottom>
            Выберите кол-во слов для тренировки !
          </Typography>
          <CustomSlider
            value={this.props.sliderVal}
            min={0}
            step={1}
            onChange={this.props.handleChange}
            max={this.props.length}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
          />
        </div>
        <div>
          <Link to="/char-word">Перевод-иероглиф</Link>
          <Link to="/audio-char">Аудио-слово</Link>
          <Link to="/flip-cards">Карточки</Link>
        </div>
      </CustomDiv>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cartData,
    count: state.train.count,
    length: state.cart.length,
    sliderVal: state.train.sliderVal,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onStoreCart: (token, cart) =>
      dispatch(actionCreators.saveCart(token, cart)),
    handleChange: (val, e) => dispatch({ type: "HANDLE_SLIDER", e: e }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Train);

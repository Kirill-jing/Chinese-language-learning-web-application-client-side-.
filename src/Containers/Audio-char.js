import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actions";
import style, { keyframes, css } from "styled-components";
import { NavLink, BrowserRouter, Route } from "react-router-dom";
import CharWord from "./Char-word";
import HelpIcon from "@material-ui/icons/Help";
import ForwardIcon from "@material-ui/icons/Forward";
import Button from "@material-ui/core/Button";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import { styled } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

const CustomDiv = style.div`
  display:flex;
  justify-content:center;
  margin-top:20vh;
`;

const CustonBtn = styled(Button)({
  width: "20px",
  margin: "20px 0",
});

const InnerDiv = style.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  background-color:#7085C2;
  
  border-radius:15px;
  height:35vh;
  width:22vw;
`;
const Image = style.img`
width:90px;
height:90px;
position:absolute;
margin-top:-8.5vh;
;
`;

const ImageDiv = style.div`
  width:100%;
  display:flex;
  justify-content:flex-end;
  align-items:flex-start;

`;

const CustInput = styled(Input)({
  fontSize: "24px",
});

const Arrow = styled(ForwardIcon)({
  color: "red",
  transform: "scale(1.4)",
});

class AudioChar extends Component {
  componentDidMount() {
    let tok = localStorage.getItem("token");
    this.props.onStoreCart(tok);
  }
  render() {
    let audio =
      this.props.cart.length > 0
        ? new Audio(process.env.REACT_APP_URL + this.props.audio)
        : " ";
    return (
      <CustomDiv>
        <InnerDiv>
          <ImageDiv>
            <Image src={"images/t.svg"}></Image>
          </ImageDiv>
          <CustonBtn onClick={() => audio.play()}>
            <VolumeUpIcon />
          </CustonBtn>
          <CustInput
            label="Введите иероглиф"
            variant="outlined"
            value={this.props.inputVal}
            onChange={(e) => this.props.checkChar(e.target.value)}
            type="text"
          ></CustInput>
          <CustonBtn
            onClick={
              this.props.audCheck ? this.props.nextAudio : this.props.giveAnswer
            }
          >
            {this.props.audCheck ? <Arrow /> : <HelpIcon />}
          </CustonBtn>
        </InnerDiv>
      </CustomDiv>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cartData,
    count: state.train.audcount,
    inputVal: state.train.inputVal,
    audCheck: state.train.audCheck,
    audio: state.train.audio,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onStoreCart: (token, cart) =>
      dispatch(actionCreators.saveCart(token, cart)),
    nextAudio: () => dispatch({ type: "NEXT_AUDIO" }),
    checkChar: (val) => dispatch({ type: "CHECK_CHAR", val: val }),
    giveAnswer: () => dispatch({ type: "GIVE_ANSWER" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AudioChar);

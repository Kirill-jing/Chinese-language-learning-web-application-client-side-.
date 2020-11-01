import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actions";
import style, { keyframes, css } from "styled-components";
import HelpIcon from "@material-ui/icons/Help";
import ForwardIcon from "@material-ui/icons/Forward";
import Button from "@material-ui/core/Button";
const moonHov = keyframes`
  0% {
    opacity: 1;
  }
  50%{
    opacity:0
  }
  100% {
    opacity: 1
  }
`;

const animation = (props) =>
  css`
    ${moonHov};
  `;

const AnimateDiv = style.div`
  margin:200px auto;
  width:500px;
  height:500px;
  display:flex;
  background-color:blue;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  opacity:1;
  animation-name:${(props) => (props.animate ? animation : " ")};
  animation-duration:.8s;
  animation-fill-mode:forwards;
`;
const Ques = style.div`
`;
const Inputs = style.div`

  width:150px;
`;
const CustomInp = style.input`
  width:150px;
  background-color:${(props) =>
    props.value === props.name ? "green" : "white"}
`;
class CharWord extends Component {
  componentDidMount() {
    let history = this.props.history;
    console.log(history);
    let tok = localStorage.getItem("token");
    this.props.onStoreCart(tok, history);
  }

  render() {
    let numb = this.props.cart[this.props.count];
    return (
      <div>
        <AnimateDiv animate={this.props.anim}>
          <Ques>{this.props.cart.length > 0 ? numb.name : " "}</Ques>
          <Inputs>
            {this.props.arr.map((el, i) => {
              let check =
                el == this.props.br && this.props.cart.length > 0
                  ? numb.nameTr
                  : " ";
              return (
                <CustomInp
                  name={this.props.name}
                  value={
                    this.props.cart.length > 0 && el !== this.props.br
                      ? this.props.cart[Math.floor(this.props.arr[i])].nameTr
                      : check
                  }
                  type="button"
                  onClick={(e) => this.props.checkAnswer(e.target.value)}
                ></CustomInp>
              );
            })}
          </Inputs>
          <Button
            disabled={this.props.disable}
            onClick={(e) => {
              this.props.toggleAnim();
              e.persist();
              window.setTimeout(() => this.props.nextQuestion(), 400);
            }}
          >
            <ForwardIcon />
          </Button>
        </AnimateDiv>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.train.history);
  return {
    myHistory: state.train.history,
    cart: state.cart.cartData,
    btn: state.train.btn,
    count: state.train.count,
    arr: state.train.arr,
    anim: state.train.anim,
    answer: state.train.answer,
    br: state.train.br,
    name: state.train.name,
    disable: state.train.disable,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onStoreCart: (token, history) =>
      dispatch(actionCreators.saveCart(token, history)),
    toggleAnim: () => dispatch({ type: "ANIM_FALSE" }),
    onStoreWord: (words) => dispatch(actionCreators.saveWords(words)),
    checkAnswer: (checkingWord) =>
      dispatch({ type: "CHECK_ANSWER", check: checkingWord }),
    nextQuestion: () => dispatch({ type: "NEXT_QUESTION" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CharWord);

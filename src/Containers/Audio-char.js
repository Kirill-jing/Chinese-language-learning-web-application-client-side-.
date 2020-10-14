import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actions";
import style,{keyframes,css} from "styled-components";
import { NavLink,BrowserRouter, Route, } from "react-router-dom";
import CharWord from './Char-word'
import Button from "@material-ui/core/Button";

class AudioChar extends Component {
    componentDidMount() {
        let tok = localStorage.getItem('token')
        this.props.onStoreCart(tok);
    }
  render() {
    let audio= this.props.cart.length>0 ? new Audio("http://localhost:5004/" + this.props.cart[this.props.count].audio) :' '
    return (
        <div>
            <Button onClick={() => audio.play()}>play</Button>
            <button onClick={this.props.nextAudio}>next</button>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    console.log(state.cart.cartData[state.train.audcount])
  return {
   cart:state.cart.cartData,
   count:state.train.audcount,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onStoreCart: (token, cart) =>
    dispatch(actionCreators.saveCart(token, cart)),
    nextAudio:()=>dispatch({type:"NEXT_AUDIO"})

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AudioChar);
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actions";
import style,{keyframes,css} from "styled-components";
import { NavLink,BrowserRouter, Route, } from "react-router-dom";
import CharWord from './Char-word'

class Train extends Component {
  componentDidMount() {
    let tok = localStorage.getItem('token')
    this.props.onStoreCart(tok);
    }
  render() {
    return (
          <div>
              <NavLink to='/train/char-word'>rtgt4g</NavLink>
              <NavLink to='/train/audio-char'>rtgt4g</NavLink>
          </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
   cart:state.cart.cartData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onStoreCart: (token, cart) =>
    dispatch(actionCreators.saveCart(token, cart)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Train);
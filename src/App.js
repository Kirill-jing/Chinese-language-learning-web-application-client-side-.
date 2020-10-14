import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./Containers/SignUp";
import Admin from "./Containers/Admin";
import Dictionary from "./Containers/Dictionary";
import { connect } from "react-redux";
import LogIn from "./Containers/LogIn";
import Cart from "./Containers/Cart";
import Main from "./Containers/Main";
import * as actionCreators from "./store/actions/actions";
import style from "styled-components";
import NavLinks from "./shared/Nav";
import CharWord from "./Containers/Char-word"
import Train from './Containers/Train'
import AudioChar from './Containers/Audio-char'
let CustomMain = style.main`
background:${(props) => (props.alt ? "#0F0D28 " : "white ")};
position:absolute;
color:${(props) => (props.alt ? "white" : "black")};
width:100%;
height:100%;
`;

class App extends Component {
  componentDidMount() {
    const expiryDate = localStorage.getItem("expiryDate");
    let token = localStorage.getItem("token");
    if (!token || !expiryDate) {
      return;
    }

    let id = localStorage.getItem("userId");
    this.props.checkAuth(token, id);

  }

  render() {
  
    return (
      <CustomMain alt={this.props.sun}>
        <BrowserRouter>
          <div>
            <NavLinks theme={(sun) => this.props.theme(sun)} />
            <Switch>
              <Route path="/" exact component={Main}></Route>
              <Route path="/admin" exact component={Admin}></Route>
              <Route path="/signup" exact component={SignUp}></Route>
              <Route path="/cart" exact component={Cart}></Route>
              <Route path="/login" exact component={LogIn}></Route>
              <Route path="/dictionary" exact component={Dictionary}></Route>
              <Route path="/dictionary/3" exact component={Dictionary}></Route>
              <Route path="/train/char-word" exact component={CharWord}></Route>
              <Route path="/train/audio-char" exact component={AudioChar}></Route>
              <Route path="/train" component={Train}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </CustomMain>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.sign.isAuth,
    token: state.sign.token,
    userId: state.sign.userId,
    sun: state.sign.sun,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: (token, id) =>
      dispatch({ type: "CHECK_AUTH", token: token, id: id }),
    theme: (sun) => dispatch({ type: "CHANGE_THEME", sun: sun }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

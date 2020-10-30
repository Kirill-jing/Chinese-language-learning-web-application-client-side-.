import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
import CharWord from "./Containers/Char-word";
import Train from "./Containers/Train";
import AudioChar from "./Containers/Audio-char";
import Flip from "./Containers/Flip-cards";

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
    let timeCheck =
      Date.parse(localStorage.getItem("expiryDate")) - new Date().getTime() <=
      0;
    let id = localStorage.getItem("userId");
    this.props.checkAuth(token, id, timeCheck);
  }

  render() {
    let red = this.props.redirect;
    if (this.props.redirect === true || this.props.redirectFlip === true) {
      red = <Redirect to="/train"></Redirect>;
      setTimeout(() => this.props.setRed(), 100);
    } else if (
      this.props.authRedirect === true ||
      this.props.signRedirect === true
    ) {
      red = <Redirect to="/"></Redirect>;
      setTimeout(() => this.props.setRed(), 100);
    }
    return (
      <CustomMain alt={this.props.sun}>
        <BrowserRouter>
          <div>
            <NavLinks
              isAuth={this.props.isAuth}
              theme={(sun) => this.props.theme(sun)}
            />
            <Switch>
              {red}
              <Route path="/" exact component={Main}></Route>
              <Route path="/admin" exact component={Admin}></Route>
              <Route path="/signup" exact component={SignUp}></Route>
              <Route path="/cart" exact component={Cart}></Route>
              <Route path="/login" exact component={LogIn}></Route>
              <Route path="/dictionary" exact component={Dictionary}></Route>
              <Route path="/dictionary/3" exact component={Dictionary}></Route>
              <Route path="/char-word" exact component={CharWord}></Route>
              <Route path="/word-char" exact component={CharWord}></Route>
              <Route path="/audio-char" exact component={AudioChar}></Route>
              <Route path="/train" exact component={Train}></Route>
              <Route path="/flip-cards" exact component={Flip}></Route>
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
    redirect: state.train.redirect,
    redirectFlip: state.flip.redirect,
    authRedirect: state.log.loginRedirect,
    signRedirect: state.sign.signRedirect,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setRed: () => dispatch({ type: "SET_RED" }),
    checkAuth: (token, id, timeCheck) =>
      dispatch({
        type: "CHECK_AUTH",
        token: token,
        id: id,
        timeCheck: timeCheck,
      }),
    theme: (sun) => dispatch({ type: "CHANGE_THEME", sun: sun }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

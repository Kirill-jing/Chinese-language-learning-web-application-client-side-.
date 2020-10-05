import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./Containers/SignUp";
import Calculator from "./Containers/Calculator";
import Converter from "./Containers/Converter";
import { connect } from "react-redux";
import LogIn from "./Containers/LogIn";
import Cart from "./Containers/Cart";
import * as actionCreators from "./store/actions/actions";
import NavLinks from "./shared/Nav";
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
      <BrowserRouter>
        <div>
          <NavLinks />
          <Switch>
            <Route path="/" exact component={Calculator}></Route>
            <Route path="/signup" exact component={SignUp}></Route>
            <Route path="/cart" exact component={Cart}></Route>
            <Route path="/login" exact component={LogIn}></Route>
            <Route path="/converter" exact component={Converter}></Route>
            <Route path="/converter/3" exact component={Converter}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.sign.isAuth,
    token: state.sign.token,
    userId: state.sign.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: (token, id) =>
      dispatch({ type: "CHECK_AUTH", token: token, id: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

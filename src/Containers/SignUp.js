import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actions";

class Signup extends Component {
  render() {
    return (
      <form
        onSubmit={(event) =>
          this.props.onSignup(
            event,
            this.props.username,
            this.props.email,
            this.props.password
          )
        }
      >
        <input
          onChange={(event) => this.props.userNameHandler(event.target.value)}
        ></input>
        <input
          onChange={(event) => this.props.emailHandler(event.target.value)}
        ></input>
        <input
          onChange={(event) => this.props.passwordHandler(event.target.value)}
        ></input>
        <button type="submit"></button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.sign.username,
    email: state.sign.email,
    password: state.sign.password,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSignup: (e, username, email, password) =>
      dispatch(actionCreators.signup(e, username, email, password)),
    userNameHandler: (res) => dispatch({ type: "USER_NAME", username: res }),
    emailHandler: (res) => dispatch({ type: "EMAIL", email: res }),
    passwordHandler: (res) => dispatch({ type: "PASSWORD", password: res }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);

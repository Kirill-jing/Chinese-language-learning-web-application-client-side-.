import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actions";
import Button from "@material-ui/core/Button";

class LogIn extends Component {
  render() {
    return (
      <form
        onSubmit={(event) =>
          this.props.onLogin(event, this.props.logName, this.props.logPassword)
        }
      >
        <input
          onChange={(event) => this.props.logNameHandler(event.target.value)}
        ></input>
        <input
          onChange={(event) =>
            this.props.logPasswordHandler(event.target.value)
          }
        ></input>
        <Button type="submit"></Button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logName: state.log.logName,
    logPassword: state.log.logPassword,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (e, logName, logPassword) =>
      dispatch(actionCreators.login(e, logName, logPassword)),
    logNameHandler: (res) => dispatch({ type: "LOG_NAME", logName: res }),
    logPasswordHandler: (res) =>
      dispatch({ type: "LOG_PASSWORD", logPassword: res }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

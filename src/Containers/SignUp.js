import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actions";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormHelperText from "@material-ui/core/FormHelperText";
import { styled } from "@material-ui/core/styles";

const CustomLabel = styled(InputLabel)({
  color: (props) => (props.alt ? "black" : "red"),
  "&.Mui-focused": {
    color: (props) => (props.alt ? "black" : "red"),
  },
});

const CustomInput = styled(Input)({
  color: (props) => (props.alt ? "black" : "red"),
});

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
        <FormControl>
          <CustomLabel alt={this.props.nameCheck}>Имя</CustomLabel>
          <CustomInput
            alt={this.props.nameCheck}
            label="Name"
            onChange={(event) => this.props.userNameHandler(event.target.value)}
          />
          <FormHelperText>Минимум 5 символов</FormHelperText>
        </FormControl>
        <FormControl>
          <CustomLabel alt={this.props.emailCheck}>Email</CustomLabel>
          <CustomInput
            alt={this.props.emailCheck}
            label="Name"
            onChange={(event) => this.props.emailHandler(event.target.value)}
          />
        </FormControl>
        <FormControl>
          <CustomLabel alt={this.props.passwordCheck}>Пароль</CustomLabel>
          <CustomInput
            alt={this.props.passwordCheck}
            label="Name"
            onChange={(event) => this.props.passwordHandler(event.target.value)}
          />
          <FormHelperText>Минимум 10 символов</FormHelperText>
        </FormControl>
        <Button
          color="secondary"
          disabled={
            this.props.emailCheck &&
            this.props.nameCheck &&
            this.props.passwordCheck
              ? false
              : true
          }
          variant="contained"
          type="submit"
        >
          Регистрация
        </Button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.sign.username,
    email: state.sign.email,
    password: state.sign.password,
    nameCheck: state.sign.nameCheck,
    emailCheck: state.sign.emailCheck,
    passwordCheck: state.sign.passwordCheck,
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

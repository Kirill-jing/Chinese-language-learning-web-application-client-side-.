import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Word from "../Components/word";
import WordDetails from "../Components/wordDetails";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import style from "styled-components";
import { styled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import * as actionCreators from "../store/actions/actions";
import { SignalCellularNullSharp } from "@material-ui/icons";

const Ul = style.ul`
list-style-type:none;
`;
const Link = style(NavLink)`
margin:100px;
display:block;
  color: red;
  text-decoration: none;
  &.active {
    color: black;
  };
`;
const StyledDiv = style.div`
width:200px;
border:1px solid black;
`;

class Cart extends Component {
  shouldComponentUpdate() {
    if (this.props.cartData.length > 0) {
      return false;
    } else if (this.props.cartData.length == 0) {
      return true;
    }
  }
  componentDidUpdate() {
    this.props.onStoreCart(this.props.token);
  }

  render() {
    return (
      <div>
        <p>sdfwfwsfwdfwsfsdf</p>
        {this.props.cartData !== undefined ? (
          <Ul>
            <li>
              {this.props.cartData.map((word) => {
                console.log(word.name);
                return (
                  <Word
                    key={word._id}
                    name={word.name}
                    nameTr={word.nameTr}
                    pinin={word.pinin}
                    example={word.example}
                    exampleTr={word.exampleTr}
                    examplePinin={word.examplePinin}
                    type={word.type}
                    image={"http://localhost:5004/" + word.image}
                    audio={"http://localhost:5004/" + word.audio}
                    // details={this.props.details}
                    // openModal={() => this.props.open(word._id)}
                    // closeModal={this.props.close}
                    // addToLearn={() =>
                    //   this.props.addToLearn(word._id, this.props.token)
                    // }
                  />
                );
              })}
            </li>
          </Ul>
        ) : null}

        {/* <div>
          <StyledDiv>
            <Link onClick={this.props.hsk4} to="/converter" exact>
              HSK4
            </Link>
          </StyledDiv>
          <StyledDiv>
            <Link onClick={this.props.hsk3} to="/converter/3" exact>
              HSK3
            </Link>
          </StyledDiv>
        </div> */}
        {/* <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={this.props.details}
          onClose={this.props.close}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.props.details}>
            <WordDetails
              key={this.props.modalWord._id}
              name={this.props.modalWord.name}
              nameType={this.props.modalWord.nameType}
              nameTr={this.props.modalWord.nameTr}
              pinin={this.props.modalWord.pinin}
              example={this.props.modalWord.example}
              exampleTr={this.props.modalWord.exampleTr}
              examplePinin={this.props.modalWord.examplePinin}
              type={this.props.modalWord.type}
              image={"http://localhost:5004/" + this.props.modalWord.image}
              audio={"http://localhost:5004/" + this.props.modalWord.audio}
            />
          </Fade>
        </Modal> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.cart.cartData);
  return {
    details: state.res.details,
    modalWord: state.res.modalWord,
    cartData: state.cart.cartData,
    token: state.sign.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onStoreCart: (token, cart) =>
      dispatch(actionCreators.saveCart(token, cart)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

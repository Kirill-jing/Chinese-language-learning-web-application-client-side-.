import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Word from "../Components/word";
import WordDetails from "../Components/wordDetails";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import style from "styled-components";
import { styled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import * as actionCreators from "../store/actions/actions";

const Ul = style.ul`
  margin:50px auto 0 auto;
  list-style-type:none;
  position:absolute;
  width:100%;

`;
const Links = style.div`
  position:fixed;
  left:30px;
  width:30%;
  height:30%;
`
const Link = style(NavLink)`
  display:flex;
  font-size:28px;
  align-items:center;
  justify-content:center;
  color: red;
  position:relative;
  width:100%;
  height:100%;
  text-decoration: none;
  &.active {
    color: black;
  };
`;
const StyledDiv = style.div`
  margin-top:30px;
  position:relative;
  display:flex;
  border-radius:15px;
  width:20vw;
  height:15vh;
  border:1px solid red;
`;

class Dictionary extends Component {
  componentDidMount() {
    this.props.onStoreWord();
  }

  render() {
    return (
      <div>
        <input type='text' onChange={e=>this.props.findWords(e.target.value)}></input>
        <input type='text' onChange={e=>this.props.findChar(e.target.value)}></input>
        <button
          onClick={(e) =>
            this.props.addMultiple(this.props.checkedArr, this.props.token)
          }
        >
        </button>
        <Ul>
          <li>
            {this.props.hskdata.map((word) => {
              return (
                <div>
                  <Word
                    key={word._id}
                    id={word._id}
                    addCheck={(value, check) =>
                      this.props.addCheck(value, check)
                    }
                    removeCheck={(value) => this.props.removeCheck(value)}
                    name={word.name}
                    nameTr={word.nameTr}
                    pinin={word.pinin}
                    example={word.example}
                    exampleTr={word.exampleTr}
                    examplePinin={word.examplePinin}
                    type={word.type}
                    image={"http://localhost:5004/" + word.image}
                    audio={"http://localhost:5004/" + word.audio}
                    details={this.props.details}
                    openModal={() => this.props.open(word._id)}
                    closeModal={this.props.close}
                    addToLearn={() =>
                      this.props.addToLearn(word._id, this.props.token)
                    }
                  />
                </div>
              );
            })}
          </li>
        </Ul>
        <Links>
          <StyledDiv>
            <Link onClick={this.props.hsk4} to="/dictionary" exact>
              HSK4
            </Link>
          </StyledDiv>
          <StyledDiv>
            <Link onClick={this.props.hsk3} to="/dictionary/3" exact>
              HSK3
            </Link>
          </StyledDiv>
        </Links>
        <Modal
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
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.res.hskdata)
  return {
    stored: state.res.data,
    details: state.res.details,
    modalWord: state.res.modalWord,
    hskdata: state.res.hskdata,
    token: state.sign.token,
    checkedVal: state.res.checkedVal,
    checkedArr: state.res.checkedArr,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    findWords:val=>dispatch({type:'FIND_WORDS',val:val}),
    findChar:val=>dispatch({type:'FIND_CHAR', val:val}),
    addMultiple: (checkedArr, token) =>
      dispatch(actionCreators.addToCart(checkedArr, token)),
    addToLearn: (id, token) => dispatch(actionCreators.addToLearn(id, token)),
    onStoreWord: (words) => dispatch(actionCreators.saveWords(words)),
    open: (id) => dispatch({ type: "OPEN", id: id }),
    addCheck: (value, check) =>
      dispatch({ type: "ADD_CHECK", value: value, check: check }),
    close: () => dispatch({ type: "CLOSE" }),
    hsk4: () => dispatch({ type: "HSK_4" }),
    hsk3: () => dispatch({ type: "HSK_3" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dictionary);

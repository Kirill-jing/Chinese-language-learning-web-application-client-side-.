import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Word from "../Components/word";
import WordDetails from "../Components/wordDetails";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import style from "styled-components";
import { styled } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Slider from "@material-ui/core/Slider";
import * as actionCreators from "../store/actions/actions";

const CustomSlider = styled(Slider)({
  width: "400px",
});

const CustInput = styled(TextField)({
  borderBottom: "1px solid #e2e2e1",
  "& label": {
    color: "black",
    fontSize: "14px",
  },
  "& label.Mui-focused": {
    color: "red",
  },
  "&.MuiInput-underline:after": {
    borderBottomColor: "black",
  },
});

const Ul = style.ul`
  margin:50px auto 0 auto;
  list-style-type:none;
  position:absolute;
  width:100%;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
`;
const Links = style.div`
  position:fixed;
  left:30px;
  width:20%;
  height:30%;
`;

const Search = style.div`
  width:50vw;
  display:flex;
  justify-content:space-around;
  border-bottom
`;
const Link = style(NavLink)`
  display:flex;
  font-size:28px;
  align-items:center;
  justify-content:center;
  color: black;
  position:relative;
  width:100%;
  height:100%;
  border-radius:15px;
  border:2px solid black;
  text-decoration: none;
  &.active {
    color: red;
    border:3px solid red;
  };
`;
const StyledDiv = style.div`
  margin-top:30px;
  position:relative;
  display:flex;
  width:20vw;
  height:15vh;
`;
const CustomLi = style.div`
  width: 1500px,
`;
const CustBtn = styled(Button)({
  transition: "0.4s",
  opacity: (props) => (props.amount ? 1 : 0),
});

class Dictionary extends Component {
  componentDidMount() {
    this.props.onStoreWord();
  }

  componentDidUpdate() {
    this.props.checkAmount();
  }

  render() {
    return (
      <div>
        <Ul>
          <Search>
            <CustInput
              label="Найдите слово"
              type="text"
              onChange={(e) => this.props.findWords(e.target.value)}
            ></CustInput>
            <CustInput
              label="Найдите иероглиф"
              type="text"
              onChange={(e) => this.props.findChar(e.target.value)}
            ></CustInput>
            <CustBtn
              amount={this.props.amount > 0}
              color="secondary"
              variant="contained"
              onClick={(e) =>
                this.props.addMultiple(this.props.checkedArr, this.props.token)
              }
            >
              Добавить
            </CustBtn>
          </Search>
          <li>
            {this.props.hskdata.map((word) => {
              return (
                <CustomLi>
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
                    image={process.env.REACT_APP_URL + word.image}
                    audio={process.env.REACT_APP_URL + word.audio}
                    details={this.props.details}
                    openModal={() => this.props.open(word._id)}
                    closeModal={this.props.close}
                    addToLearn={() =>
                      this.props.addToLearn(word._id, this.props.token)
                    }
                  />
                </CustomLi>
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
          <CustomSlider
            value={this.props.sliderVal}
            min={0}
            step={1}
            onChange={this.props.handleChange}
            max={this.props.hskdata.length}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
          />
          <CustBtn
            amount={this.props.limit > 0}
            color="secondary"
            variant="contained"
            onClick={(e) =>
              this.props.addSlider(
                this.props.sliderVal,
                this.props.hskdata,
                this.props.token
              )
            }
          >
            Добавить
          </CustBtn>
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
              image={process.env.REACT_APP_URL + this.props.modalWord.image}
              audio={process.env.REACT_APP_URL + this.props.modalWord.audio}
            />
          </Fade>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.res.sliderVal);
  return {
    limit: state.res.limit,
    sliderVal: state.res.sliderVal,
    stored: state.res.data,
    details: state.res.details,
    modalWord: state.res.modalWord,
    hskdata: state.res.hskdata,
    token: state.sign.token,
    checkedVal: state.res.checkedVal,
    checkedArr: state.res.checkedArr,
    animbut: state.res.animbut,
    amount: state.res.amount,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addSlider: (sliderArr, hskdada, token) =>
      dispatch(actionCreators.addSliderData(sliderArr, hskdada, token)),
    handleChange: (val, e) => dispatch({ type: "HANDLE_MAIN_SLIDER", e: e }),
    findWords: (val) => dispatch({ type: "FIND_WORDS", val: val }),
    findChar: (val) => dispatch({ type: "FIND_CHAR", val: val }),
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
    checkAmount: () => dispatch({ type: "CHECK_AMOUNT" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dictionary);
